import React, { useState, useCallback, useRef, useEffect } from 'react';
import { characterNetwork } from '../data/character-network';
import { CharacterNode, Relationship, BookNode } from '../types/character-network';
import { Box, Typography, Paper, Grid, Card, CardContent, IconButton, Tooltip, Popper, Chip, Divider, Container, CircularProgress, Fade } from '@mui/material';
import { ForceGraph2D } from 'react-force-graph';
import { ArrowBack, Help, ZoomIn, ZoomOut, CenterFocusStrong, Search } from '@mui/icons-material';
import * as d3 from 'd3';

interface NetworkNode {
  id: string;
  name: string;
  x?: number;
  y?: number;
  val: number;
  color: string;
  type: string;
  description?: string;
  novel?: string;
  class?: string;
  year?: number;
  fx?: number;
  fy?: number;
}

interface NetworkLink {
  source: string;
  target: string;
  color: string;
}

interface GraphData {
  nodes: NetworkNode[];
  links: NetworkLink[];
}

interface TooltipState {
  open: boolean;
  content: string;
  x: number;
  y: number;
}

// Proper typing for ForceGraph methods
interface ForceGraphMethods {
  zoom: (k: number) => void;
  zoomToFit: (durationMs?: number, padding?: number) => void;
  d3Force: (forceName: string, force: any) => void;
  getZoom: () => number;
  centerAt: (x?: number, y?: number, durationMs?: number) => void;
}

export default function NetworkVisualization() {
  const [selectedNode, setSelectedNode] = useState<CharacterNode | BookNode | null>(null);
  const [selectedRelationships, setSelectedRelationships] = useState<Relationship[]>([]);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({ open: false, content: '', x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const graphRef = useRef<ForceGraphMethods>();
  const [isLoading, setIsLoading] = useState(true);
  const [isGraphReady, setIsGraphReady] = useState(false);

  // Add loading effect when data changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [selectedBook]);

  // Track when graph is ready
  useEffect(() => {
    if (graphRef.current) {
      setIsGraphReady(true);
    }
  }, [graphRef.current]);

  const handleNodeHover = useCallback((node: NetworkNode | null) => {
    if (node) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setTooltip({
          open: true,
          content: `${node.name}\n${node.description || ''}`,
          x: rect.left + rect.width / 2, // Center of container
          y: rect.top + 100 // Fixed position from top
        });
      }
    } else {
      setTooltip(prev => ({ ...prev, open: false }));
    }
  }, []);

  const handleNodeClick = useCallback((node: NetworkNode) => {
    if (!selectedBook && node.type === 'book') {
      setSelectedBook(node.id);
      setSelectedNode(characterNetwork.books.find(b => b.id === node.id) || null);
    } else if (selectedBook) {
      const characterNode = characterNetwork.nodes.find(n => n.id === node.id);
      if (characterNode) {
        setSelectedNode(characterNode);
        const relations = characterNetwork.relationships.filter(
          r => r.source === node.id || r.target === node.id
        );
        setSelectedRelationships(relations);
      }
    }
    setTooltip(prev => ({ ...prev, open: false }));
  }, [selectedBook]);

  const handleBackClick = () => {
    setSelectedBook(null);
    setSelectedNode(null);
    setSelectedRelationships([]);
  };

  const centerGraph = useCallback((graphData: GraphData) => {
    const containerWidth = 800;
    const containerHeight = 700;
    const padding = 50;

    const xExtent = d3.extent(graphData.nodes, d => d.x || 0) as [number, number];
    const yExtent = d3.extent(graphData.nodes, d => d.y || 0) as [number, number];
    const xRange = xExtent[1] - xExtent[0] || 1;
    const yRange = yExtent[1] - yExtent[0] || 1;

    const scale = Math.min(
      (containerWidth - 2 * padding) / xRange,
      (containerHeight - 2 * padding) / yRange
    );

    graphData.nodes.forEach(node => {
      node.x = ((node.x || 0) - (xExtent[0] + xRange / 2)) * scale + containerWidth / 2;
      node.y = ((node.y || 0) - (yExtent[0] + yRange / 2)) * scale + containerHeight / 2;
    });
  }, []);

  const getGraphData = useCallback((): GraphData => {
    if (!selectedBook) {
      // Book-level view with fixed positions in a circle
      const data: GraphData = {
        nodes: characterNetwork.books.map((book, idx) => {
          const angle = (idx / characterNetwork.books.length) * 2 * Math.PI;
          const radius = 150; // Reduced radius for better visibility
          return {
            ...book,
            val: 20,
            // Set initial positions in a circle around center
            x: Math.cos(angle) * radius + 400,
            y: Math.sin(angle) * radius + 350,
            // Don't fix positions to allow force layout to adjust
            fx: undefined,
            fy: undefined
          };
        }) as NetworkNode[],
        links: [] as NetworkLink[]
      };
      return data;
    }

    const bookName = characterNetwork.books.find(b => b.id === selectedBook)?.name;
    const nodes = characterNetwork.nodes
      .filter(node => node.novel === bookName)
      .map((node, idx) => {
        const angle = (idx / characterNetwork.nodes.length) * 2 * Math.PI;
        const radius = 100; // Initial radius for character layout
        return {
          ...node,
          val: 10,
          // Set initial positions in a circle
          x: Math.cos(angle) * radius + 400,
          y: Math.sin(angle) * radius + 350,
          // Clear any fixed positions
          fx: undefined,
          fy: undefined,
          color: node.type === 'protagonist' ? '#e91e63' :
                 node.type === 'antagonist' ? '#f44336' : '#2196f3'
        };
      }) as NetworkNode[];

    const data: GraphData = {
      nodes,
      links: characterNetwork.relationships
        .filter(rel =>
          nodes.some((n: NetworkNode) => n.id === rel.source) &&
          nodes.some((n: NetworkNode) => n.id === rel.target)
        )
        .map(rel => ({
          source: rel.source,
          target: rel.target,
          color: rel.type === 'family' ? '#4caf50' :
                 rel.type === 'romance' ? '#e91e63' :
                 rel.type === 'friendship' ? '#2196f3' : '#ff9800'
        })) as NetworkLink[]
    };

    return data;
  }, [selectedBook]);

  const renderNodeCanvas = useCallback((node: NetworkNode, ctx: CanvasRenderingContext2D, scale: number) => {
    const size = node.val || 5;
    const fontSize = Math.max(12 / scale, 2);

    // Add glow effect for highlighted nodes
    if (node.id === selectedNode?.id) {
      ctx.shadowColor = node.color || '#fff';
      ctx.shadowBlur = 15;
    }

    // Draw node
    ctx.beginPath();
    ctx.arc(node.x || 0, node.y || 0, size, 0, 2 * Math.PI);
    ctx.fillStyle = node.color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Clear shadow effect
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;

    // Only draw labels when zoomed in enough or for book nodes
    if (scale > 0.7 || node.type === 'book') {
      const labelDistance = size + fontSize;
      ctx.font = `${fontSize}px Inter, Arial`;
      const textWidth = ctx.measureText(node.name).width;

      // Semi-transparent background for better readability
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      const padding = fontSize * 0.3;
      const backgroundHeight = fontSize + padding * 2;

      // Draw background with rounded corners
      const cornerRadius = 4;
      const backgroundY = (node.y || 0) + labelDistance - fontSize / 2 - padding;
      roundRect(
        ctx,
        (node.x || 0) - textWidth / 2 - padding,
        backgroundY,
        textWidth + padding * 2,
        backgroundHeight,
        cornerRadius
      );

      // Draw text
      ctx.fillStyle = node.id === selectedNode?.id ? '#1976d2' : '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        node.name,
        node.x || 0,
        (node.y || 0) + labelDistance
      );
    }
  }, [selectedNode]);

  // Helper function for drawing rounded rectangles
  const roundRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number
  ) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.fill();
  };

  const getLegendTooltip = () => (
    <Box sx={{ p: 1 }}>
      <Typography variant="subtitle2" gutterBottom>Color Legend:</Typography>
      <Typography variant="body2">
        Books:<br />
        • Pride and Prejudice - Pink<br />
        • Sense and Sensibility - Blue<br />
        • Northanger Abbey - Green<br />
        • Mansfield Park - Purple<br />
         Longbourn - Brown
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Characters:<br />
        • Protagonists - Pink<br />
        • Antagonists - Red<br />
        • Supporting - Blue
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Relationships:<br />
        • Family - Green<br />
        • Romance - Pink<br />
        • Friendship - Blue<br />
        • Rivalry - Orange
      </Typography>
    </Box>
  );

  const handleZoomIn = () => {
    if (graphRef.current) {
      const currentZoom = graphRef.current.getZoom();
      graphRef.current.zoom(currentZoom * 1.5);
    }
  };

  const handleZoomOut = () => {
    if (graphRef.current) {
      const currentZoom = graphRef.current.getZoom();
      graphRef.current.zoom(currentZoom / 1.5);
    }
  };

  const handleCenterGraph = () => {
    if (graphRef.current) {
      graphRef.current.zoomToFit(400, 50);
    }
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: 'background.default',
      overflow: 'hidden'
    }}>
      <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', flexDirection: 'column', py: 3 }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
          pb: 2,
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h4" sx={{
              fontWeight: 500,
              color: 'primary.main',
              fontFamily: '"Cormorant", serif'
            }}>
              Character Network
            </Typography>
            <Tooltip title={getLegendTooltip()} arrow placement="right">
              <IconButton size="small" sx={{ ml: 2 }}>
                <Help />
              </IconButton>
            </Tooltip>
          </Box>
          <Box sx={{
            display: 'flex',
            gap: 1,
            bgcolor: 'background.paper',
            p: 0.5,
            borderRadius: 2,
            boxShadow: 1
          }}>
            <Tooltip title="Zoom in" arrow>
              <IconButton onClick={handleZoomIn} size="small">
                <ZoomIn />
              </IconButton>
            </Tooltip>
            <Tooltip title="Zoom out" arrow>
              <IconButton onClick={handleZoomOut} size="small">
                <ZoomOut />
              </IconButton>
            </Tooltip>
            <Tooltip title="Center graph" arrow>
              <IconButton onClick={handleCenterGraph} size="small">
                <CenterFocusStrong />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ flex: 1, minHeight: 0 }}>
          <Grid item xs={12} md={8}>
            <Paper
              elevation={4}
              sx={{
                height: '100%',
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#fafafa',
                boxShadow: theme => `0 0 20px ${theme.palette.divider}`
              }}
              ref={containerRef}
            >
              {/* Loading overlay */}
              <Fade in={isLoading} timeout={300}>
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 2
                }}>
                  <CircularProgress />
                  <Typography variant="body1" color="text.secondary">
                    {selectedBook ? 'Loading character relationships...' : 'Loading books...'}
                  </Typography>
                </Box>
              </Fade>

              {/* Graph container */}
              <Fade in={!isLoading && isGraphReady} timeout={500}>
                <Box sx={{ width: '100%', height: '100%' }}>
                  <ForceGraph2D
                    // @ts-expect-error - type mismatch with ref
                    ref={graphRef}
                    graphData={getGraphData()}
                    onNodeHover={handleNodeHover}
                    onNodeClick={handleNodeClick}
                    nodeCanvasObject={renderNodeCanvas}
                    linkColor={(link: NetworkLink) => link.color}
                    linkWidth={3}
                    nodeRelSize={8}
                    width={800}
                    height={700}
                    cooldownTicks={50}
                    cooldownTime={3000}
                    linkDirectionalParticles={3}
                    linkDirectionalParticleWidth={2}
                    linkDirectionalParticleSpeed={0.004}
                    d3AlphaDecay={0.1}
                    d3VelocityDecay={0.4}
                    minZoom={0.5}
                    maxZoom={4}
                    dagMode={selectedBook ? undefined : 'radialin'}
                    dagLevelDistance={100}
                    enablePanInteraction={true}
                    enableZoomInteraction={true}
                    onEngineStop={() => {
                      if (!selectedBook) {
                        centerGraph(getGraphData());
                      }
                    }}
                    onNodeDragEnd={(node: NetworkNode) => {
                      if (node.x && node.y) {
                        node.fx = node.x;
                        node.fy = node.y;
                      }
                    }}
                    warmupTicks={100}
                    onZoom={(zoom: number) => {
                      if (!selectedBook) {
                        centerGraph(getGraphData());
                      }
                    }}
                    enableNodeDrag={true}
                    enableZoomPanInteraction={true}
                  />
                </Box>
              </Fade>

              {/* Controls */}
              {!isLoading && (
                <>
                  {selectedBook && (
                    <Tooltip title="Return to book overview" arrow>
                      <IconButton
                        onClick={handleBackClick}
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          zIndex: 1,
                          bgcolor: 'background.paper',
                          boxShadow: 2,
                          '&:hover': {
                            bgcolor: 'background.paper',
                            transform: 'scale(1.1)',
                            transition: 'transform 0.2s'
                          }
                        }}
                      >
                        <ArrowBack />
                      </IconButton>
                    </Tooltip>
                  )}
                  <Box sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 1,
                    bgcolor: 'background.paper',
                    p: 2,
                    borderRadius: 2,
                    boxShadow: 2,
                    maxWidth: 250,
                    backdropFilter: 'blur(8px)',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'opacity 0.3s',
                    opacity: isGraphReady ? 1 : 0
                  }}>
                    <Typography variant="body2" color="text.secondary" sx={{
                      fontStyle: 'italic',
                      fontFamily: '"Lato", sans-serif'
                    }}>
                      {!selectedBook ? 'Click a book to explore its characters' : 'Click characters to view relationships'}
                    </Typography>
                  </Box>
                </>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} sx={{ height: '100%' }}>
            <Paper sx={{
              height: '100%',
              maxHeight: 'calc(100vh - 120px)', // Account for header and padding
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              bgcolor: 'background.paper',
              boxShadow: theme => `0 0 20px ${theme.palette.divider}`,
              position: 'sticky',
              top: 24
            }}>
              <Box sx={{
                flex: 1,
                overflowY: 'auto',
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: theme => theme.palette.divider,
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: theme => theme.palette.action.hover,
                }
              }}>
                {selectedNode ? (
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom sx={{
                      color: 'primary.main',
                      fontWeight: 500,
                      fontFamily: '"Cormorant", serif'
                    }}>
                      {selectedNode.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip
                        label={selectedNode.type === 'book' ? 'Novel' : selectedNode.type}
                        size="small"
                        color={selectedNode.type === 'protagonist' ? 'primary' :
                               selectedNode.type === 'antagonist' ? 'error' : 'default'}
                        sx={{ borderRadius: 1 }}
                      />
                      {selectedNode.type !== 'book' && (
                        <Chip
                          label={(selectedNode as CharacterNode).class}
                          size="small"
                          variant="outlined"
                          sx={{ borderRadius: 1 }}
                        />
                      )}
                    </Box>
                    <Typography color="text.secondary" gutterBottom sx={{
                      fontFamily: '"Lato", sans-serif'
                    }}>
                      {selectedNode.type === 'book' ? `Published: ${(selectedNode as BookNode).year}` : selectedNode.novel}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{
                      mt: 2,
                      fontFamily: '"Lato", sans-serif',
                      lineHeight: 1.7
                    }}>
                      {selectedNode.description}
                    </Typography>

                    {selectedNode.type !== 'book' && (
                      <>
                        <Divider sx={{ my: 3 }} />
                        <Typography variant="h6" sx={{
                          mb: 2,
                          color: 'primary.main',
                          fontFamily: '"Cormorant", serif'
                        }}>
                          Relationships
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {selectedRelationships.map((rel, index) => (
                            <Box key={index} sx={{
                              p: 2.5,
                              bgcolor: 'background.default',
                              borderRadius: 2,
                              border: '1px solid',
                              borderColor: 'divider',
                              transition: 'transform 0.2s, box-shadow 0.2s',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: 1
                              }
                            }}>
                              <Typography variant="subtitle1" color="primary" gutterBottom sx={{
                                fontFamily: '"Cormorant", serif',
                                fontWeight: 600
                              }}>
                                {rel.description}
                              </Typography>
                              <Chip
                                label={rel.type}
                                size="small"
                                sx={{
                                  mb: 2,
                                  bgcolor: rel.type === 'family' ? 'success.light' :
                                          rel.type === 'romance' ? 'error.light' :
                                          rel.type === 'friendship' ? 'primary.light' : 'warning.light',
                                  color: '#fff',
                                  borderRadius: 1,
                                  fontFamily: '"Lato", sans-serif'
                                }}
                              />
                              <Typography variant="body2" sx={{
                                fontWeight: 500,
                                mt: 1,
                                fontFamily: '"Lato", sans-serif'
                              }}>
                                Development:
                              </Typography>
                              <Box component="ul" sx={{
                                mt: 1,
                                pl: 2,
                                mb: 0 // Remove bottom margin from list
                              }}>
                                {rel.development.map((step, i) => (
                                  <Box component="li" key={i} sx={{
                                    mb: i === rel.development.length - 1 ? 0 : 1.5 // Remove margin from last item
                                  }}>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                      fontFamily: '"Lato", sans-serif',
                                      lineHeight: 1.6
                                    }}>
                                      {step}
                                    </Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      </>
                    )}
                  </Box>
                ) : (
                  <Box sx={{
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    color: 'text.secondary'
                  }}>
                    <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                      Select a node to view details
                    </Typography>
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Popper
        open={tooltip.open}
        anchorEl={containerRef.current}
        placement="top"
        style={{
          position: 'absolute',
          left: `${tooltip.x}px`,
          top: `${tooltip.y}px`,
          zIndex: 1500
        }}
      >
        <Paper sx={{
          p: 2,
          maxWidth: 300,
          bgcolor: 'background.paper',
          boxShadow: 4,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'divider',
          backdropFilter: 'blur(8px)'
        }}>
          <Typography variant="body2" whiteSpace="pre-line" sx={{
            fontFamily: '"Lato", sans-serif'
          }}>
            {tooltip.content}
          </Typography>
        </Paper>
      </Popper>
    </Box>
  );
}
