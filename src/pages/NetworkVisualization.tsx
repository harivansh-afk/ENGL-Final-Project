import { useRef, useEffect, useState, useCallback } from 'react';
import { characterNetwork } from '../data/character-network';
import { CharacterNode, Relationship } from '../types/character-network';
import { Box, Typography, Paper, Grid, IconButton, Tooltip, Chip, Divider, Container, CircularProgress, Fade } from '@mui/material';
import { ForceGraph2D as ForceGraph } from 'react-force-graph';
import { ForceGraph2D as ForceGraph } from 'react-force-graph';
import { ArrowBack, Help, ZoomIn, ZoomOut, CenterFocusStrong } from '@mui/icons-material';
import * as d3 from 'd3';

// Base node interface extending SimulationNodeDatum
interface BaseNetworkNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  type: 'protagonist' | 'antagonist' | 'supporting' | 'book' | 'character';
  description?: string;
  novel?: string;
  class?: string;
  val: number;
  color: string;
  x?: number;
  y?: number;
  fx?: number;
  fy?: number;
}

// Book-specific node interface
interface NetworkBookNode extends BaseNetworkNode {
  type: 'book';
  year: string;
}

// Character-specific node interface
interface NetworkCharacterNode extends BaseNetworkNode {
  type: 'protagonist' | 'antagonist' | 'supporting' | 'character';
}

// Union type for all possible node types
type NetworkNode = NetworkBookNode | NetworkCharacterNode;

interface NetworkLink extends d3.SimulationLinkDatum<NetworkNode> {
  source: string | NetworkNode;
  target: string | NetworkNode;
  type: string;
  color: string;
}

// Particle type for emitParticle
interface GraphParticle {
  id: string;
  source: NetworkNode;
  target: NetworkNode;
}

// Proper typing for ForceGraph methods
interface ForceGraphMethods<NodeType extends d3.SimulationNodeDatum = NetworkNode, LinkType extends d3.SimulationLinkDatum<NodeType> = NetworkLink> {
// Complete ForceGraph methods interface
interface ForceGraphMethods {
  zoom: (k?: number) => number;
  zoomToFit: (duration?: number, padding?: number) => void;
  d3Force: (forceName: string, force?: d3.Force<NetworkNode, NetworkLink>) => void;
  d3ReheatSimulation: () => void;
  getZoom: () => number;
  emitParticle: (particle: GraphParticle) => void;
  pauseAnimation: () => void;
  resumeAnimation: () => void;
  centerAt: (x?: number, y?: number, duration?: number) => void;
  getGraphBbox: () => { x: [number, number]; y: [number, number] };
  screen2GraphCoords: (x: number, y: number) => { x: number; y: number };
  graph2ScreenCoords: (x: number, y: number) => { x: number; y: number };
  width: () => number;
  height: () => number;
  refresh: () => void;
}

export default function NetworkVisualization() {
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);
  const [selectedRelationships, setSelectedRelationships] = useState<Relationship[]>([]);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<ForceGraphMethods<NetworkNode, NetworkLink>>();
  const [isLoading, setIsLoading] = useState(true);
  const [isGraphReady, setIsGraphReady] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 800, height: 700 });

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
    if (fgRef.current) {
      setIsGraphReady(true);
    }
  }, [fgRef.current]);

  // Add a useEffect to handle container resizing
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial update
    updateDimensions();

    // Add resize listener
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Update the node interaction handlers
  const handleNodeClick = useCallback((node: NetworkNode) => {
    if (node.type === 'book') {
      const bookNode: NetworkBookNode = {
        ...node,
        year: (node as NetworkBookNode).year
      };
      setSelectedBook(node.id);
      setSelectedNode(bookNode);
      setSelectedRelationships([]);
    } else {
      const characterNode: NetworkCharacterNode = {
        ...node,
        type: node.type as 'protagonist' | 'antagonist' | 'supporting' | 'character'
      };
      const relations = characterNetwork.relationships.filter(
        (rel) => rel.source === node.id || rel.target === node.id
      );
      setSelectedNode(characterNode);
      setSelectedRelationships(relations);
    }
  }, []);

  const handleBackClick = () => {
    setSelectedBook(null);
    setSelectedNode(null);
    setSelectedRelationships([]);
  };

  // Update getGraphData with improved layout
  const getGraphData = useCallback((): { nodes: NetworkNode[]; links: NetworkLink[] } => {
    if (selectedBook) {
      const bookName = characterNetwork.books.find(b => b.id === selectedBook)?.name;
      const nodes = characterNetwork.nodes
        .filter(node => node.novel === bookName)
        .map((node, idx, arr) => {
          // Create a circular layout with more spacing
          const angle = (idx / arr.length) * 2 * Math.PI;
          // Increase radius for better spacing
          const radius = Math.min(dimensions.width, dimensions.height) * 0.35;

          const x = dimensions.width / 2 + radius * Math.cos(angle);
          const y = dimensions.height / 2 + radius * Math.sin(angle);

          return {
            ...node,
            val: 10,
            x,
            y,
            fx: x,
            fy: y,
            color: node.type === 'protagonist' ? sageColors.primary.start :
                   node.type === 'antagonist' ? sageColors.secondary.start :
                   sageColors.tertiary.start
          } as NetworkNode;
        });

      // Improve link routing with curved paths
      const links = characterNetwork.relationships
        .filter(rel => nodes.some(n => n.id === rel.source) && nodes.some(n => n.id === rel.target))
        .map(rel => ({
          ...rel,
          color: sageColors.primary.end,
          curvature: 0.3 // Add consistent curve to all links
        }));

      return { nodes, links };
    } else {
      // Create pentagon layout for books
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      // Adjust radius based on container size
      const radius = Math.min(dimensions.width, dimensions.height) * 0.25;

      const nodes = characterNetwork.books.map((book, idx) => {
        const point = getPentagonPoint(idx, characterNetwork.books.length, radius, centerX, centerY);

        return {
          id: book.id,
          name: book.name,
          type: 'book' as const,
          description: book.description,
          val: 15,
          color: sageColors.primary.start,
          x: point.x,
          y: point.y,
          fx: point.x,
          fy: point.y
        } as NetworkNode;
      });

      return { nodes, links: [] };
    }
  }, [selectedBook, dimensions]);

  const renderNodeCanvas = useCallback((node: NetworkNode, ctx: CanvasRenderingContext2D, scale: number) => {
    const size = node.val || 5;
    const fontSize = Math.max(12 / scale, 2);

    // Save the current context state
    ctx.save();

    // 3D effect with gradient and shadow
    const gradient = ctx.createRadialGradient(
      (node.x || 0) - size/3,
      (node.y || 0) - size/3,
      0,
      node.x || 0,
      node.y || 0,
      size
    );

    const baseColor = node.color || sageColors.primary.start;
    gradient.addColorStop(0, lightenColor(baseColor, 30));
    gradient.addColorStop(0.8, baseColor);
    gradient.addColorStop(1, darkenColor(baseColor, 20));

    // Add shadow for depth
    ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // Draw node with 3D effect
    ctx.beginPath();
    ctx.arc(node.x || 0, node.y || 0, size, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Add highlight ring
    ctx.strokeStyle = lightenColor(baseColor, 40);
    ctx.lineWidth = 1;
    ctx.stroke();

    // Clear shadow effect for text
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Only draw labels when zoomed in enough or for book nodes
    if (scale > 0.7 || node.type === 'book') {
      const labelDistance = size + fontSize;
      ctx.font = `${fontSize}px "Cormorant", serif`;
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
      ctx.fillStyle = node.id === selectedNode?.id ? sageColors.primary.start : '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        node.name,
        node.x || 0,
        (node.y || 0) + labelDistance
      );
    }

    // Restore the context state
    ctx.restore();
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

  // Add color utility functions
  const lightenColor = (color: string, percent: number): string => {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, ((num >> 16) & 0xff) + amt);
    const G = Math.min(255, ((num >> 8) & 0xff) + amt);
    const B = Math.min(255, (num & 0xff) + amt);
    return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
  };

  const darkenColor = (color: string, percent: number): string => {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, ((num >> 16) & 0xff) - amt);
    const G = Math.max(0, ((num >> 8) & 0xff) - amt);
    const B = Math.max(0, (num & 0xff) - amt);
    return `#${(1 << 24 | R << 16 | G << 8 | B).toString(16).slice(1)}`;
  };

  const getLegendTooltip = () => (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 1 }}>
      <Typography variant="subtitle2" sx={{
        color: sageColors.primary.start,
        fontFamily: '"Cormorant", serif',
        mb: 1.5
      }}>
        Color Legend:
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
        <strong>Nodes:</strong><br />
        • Protagonists - {sageColors.primary.start}<br />
        • Antagonists - {sageColors.secondary.start}<br />
        • Supporting - {sageColors.tertiary.start}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <strong>Relationships:</strong><br />
        • Family - {relationshipColors.family}<br />
        • Romance - {relationshipColors.romance}<br />
        • Friendship - {relationshipColors.friendship}<br />
        • Rivalry - {relationshipColors.rivalry}
      </Typography>
    </Box>
  );

  const handleZoomIn = () => {
    if (fgRef.current) {
      const currentZoom = fgRef.current.zoom();
      fgRef.current.zoom(currentZoom * 1.2);
    }
  };

  const handleZoomOut = () => {
    if (fgRef.current) {
      const currentZoom = fgRef.current.zoom();
      fgRef.current.zoom(currentZoom / 1.2);
    }
  };

  const handleCenterGraph = () => {
    if (fgRef.current) {
      fgRef.current.zoomToFit(400);
    }
  };

  useEffect(() => {
    if (fgRef.current) {
      // Clear existing forces
      fgRef.current.d3Force('charge', undefined);
      fgRef.current.d3Force('center', undefined);
      fgRef.current.d3Force('link', undefined);

      // Add stable forces with minimal movement
      fgRef.current.d3Force('charge', d3.forceManyBody().strength(-100));
      fgRef.current.d3Force('center', d3.forceCenter(dimensions.width / 2, dimensions.height / 2).strength(0.05));
      fgRef.current.d3Force('link', d3.forceLink().distance(80).strength(0.2));

      // Reduce simulation intensity
      fgRef.current.d3Force('x', d3.forceX(dimensions.width / 2).strength(0.05));
      fgRef.current.d3Force('y', d3.forceY(dimensions.height / 2).strength(0.05));
    }
  }, [dimensions, selectedBook]);

  // Add useEffect to center the graph on mount and dimension changes
  useEffect(() => {
    if (fgRef.current) {
      // Center the graph with animation
      requestAnimationFrame(() => {
        fgRef.current?.zoomToFit(400, 100); // Increased padding for better centering
      });
    }
  }, [dimensions, selectedBook]);
  const fgRef = useRef<ForceGraphMethods>();

  // ... rest of the component code ...

  return (
    <Box sx={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      bgcolor: '#fafafa',  // Light background
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
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography variant="h4" sx={{
                fontWeight: 500,
                color: sageColors.primary.start,
                fontFamily: '"Cormorant", serif'
              }}>
                Character Network
              </Typography>
              <Typography
                component="div"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: 'text.secondary',
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  fontFamily: '"Lato", sans-serif',
                  '&::before': {
                    content: '"💡"',
                    fontSize: '1rem',
                  }
                }}
              >
                Double click the nodes to access the information inside them!
              </Typography>
            </Box>
            <Tooltip title={getLegendTooltip()} arrow placement="right">
              <IconButton size="small" sx={{ ml: 2, color: sageColors.primary.start }}>
                <Help />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        <Grid container spacing={3} sx={{ flex: 1, minHeight: 0 }}>
          <Grid item xs={12} md={8}>
            <Paper
              elevation={0}
              sx={{
                height: '100%',
                position: 'relative',
                borderRadius: 2,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#fff',
                border: '1px solid',
                borderColor: 'divider',
                '&:hover': {
                  borderColor: sageColors.primary.end,
                  transition: 'border-color 0.2s ease'
                }
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
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: 2
                }}>
                  <CircularProgress sx={{ color: sageColors.primary.start }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      fontFamily: '"Lato", sans-serif'
                    }}
                  >
                    {selectedBook ? 'Loading character relationships...' : 'Loading books...'}
                  </Typography>
                </Box>
              </Fade>

              {/* Graph container */}
              <Fade in={!isLoading && isGraphReady} timeout={500}>
                <Box sx={{ width: '100%', height: '100%' }}>
                  <ForceGraph
                    ref={fgRef}
                    graphData={getGraphData()}
                    onNodeClick={handleNodeClick}
                    nodeCanvasObject={renderNodeCanvas}
                    linkColor={(link: NetworkLink) => link.color}
                    linkWidth={2}
                    nodeRelSize={6}
                    width={dimensions.width}
                    height={dimensions.height}
                    cooldownTicks={50}
                    cooldownTime={3000}
                    d3AlphaDecay={0.02}
                    d3VelocityDecay={0.6}
                    minZoom={0.5}
                    maxZoom={4}
                    enableNodeDrag={true}
                    onNodeDragEnd={(node: NetworkNode) => {
                      if (node.x && node.y) {
                        node.fx = node.x;
                        node.fy = node.y;
                      }
                    }}
                    warmupTicks={0}
                    nodeLabel={() => ''}
                    linkCurvature={0.3}
                    linkDirectionalParticles={0}
                    onEngineStop={() => {
                      // Ensure graph is centered after layout stabilizes
                      fgRef.current?.zoomToFit(400, 100);
                    }}
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
                          bgcolor: 'white',
                          border: '1px solid',
                          borderColor: 'divider',
                          color: sageColors.primary.start,
                          '&:hover': {
                            bgcolor: 'white',
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
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    alignItems: 'flex-end'
                  }}>
                    <Box sx={{
                      display: 'flex',
                      gap: 1,
                      bgcolor: 'white',
                      p: 0.5,
                      borderRadius: 2,
                      boxShadow: 1,
                      border: '1px solid',
                      borderColor: 'divider',
                      width: 'fit-content',
                      '&:hover': {
                        borderColor: sageColors.primary.end,
                        transform: 'translateY(-2px)',
                        transition: 'all 0.2s ease'
                      }
                    }}>
                      <Tooltip title="Zoom in" arrow>
                        <IconButton
                          onClick={() => handleZoomIn()}
                          size="small"
                          sx={{ color: sageColors.primary.start }}
                        >
                          <ZoomIn />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Zoom out" arrow>
                        <IconButton
                          onClick={() => handleZoomOut()}
                          size="small"
                          sx={{ color: sageColors.primary.start }}
                        >
                          <ZoomOut />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Center graph" arrow>
                        <IconButton
                          onClick={() => handleCenterGraph()}
                          size="small"
                          sx={{ color: sageColors.primary.start }}
                        >
                          <CenterFocusStrong />
                        </IconButton>
                      </Tooltip>
                    </Box>
                    <Box sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.95)',
                      p: 2,
                      borderRadius: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      maxWidth: 250,
                      backdropFilter: 'blur(8px)',
                      transition: 'all 0.3s ease',
                      opacity: isGraphReady ? 1 : 0,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                      '&:hover': {
                        borderColor: sageColors.primary.end,
                        transform: 'translateY(-2px)'
                      }
                    }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontStyle: 'italic',
                          fontFamily: '"Lato", sans-serif'
                        }}
                      >
                        {!selectedBook ? 'Click a book to explore its characters' : 'Click characters to view relationships'}
                      </Typography>
                    </Box>
                  </Box>
                </>
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} sx={{ height: '100%' }}>
            <Paper sx={{
              height: '100%',
              maxHeight: 'calc(100vh - 120px)',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: 2,
              bgcolor: 'white',
              border: '1px solid',
              borderColor: 'divider',
              position: 'sticky',
              top: 24,
              transition: 'all 0.3s ease',
              '&:hover': {
                borderColor: sageColors.primary.end,
                transform: 'translateY(-2px)'
              }
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
                  background: sageColors.primary.end,
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  background: sageColors.primary.start,
                }
              }}>
                {selectedNode ? (
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h5" gutterBottom sx={{
                      color: sageColors.primary.start,
                      fontWeight: 500,
                      fontFamily: '"Cormorant", serif'
                    }}>
                      {selectedNode.name}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
                      <Chip
                        label={selectedNode.type === 'book' ? 'Novel' : selectedNode.type}
                        size="small"
                        sx={{
                          bgcolor: selectedNode.type === 'protagonist' ? sageColors.primary.start :
                                 selectedNode.type === 'antagonist' ? sageColors.secondary.start :
                                 sageColors.tertiary.start,
                          color: 'white',
                          borderRadius: 1,
                          fontFamily: '"Lato", sans-serif'
                        }}
                      />
                      {selectedNode.type !== 'book' && (
                        <Chip
                          label={(selectedNode as CharacterNode).class}
                          size="small"
                          variant="outlined"
                          sx={{
                            borderColor: sageColors.primary.end,
                            color: sageColors.primary.start,
                            borderRadius: 1,
                            fontFamily: '"Lato", sans-serif'
                          }}
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
                      lineHeight: 1.7,
                      color: 'text.secondary'
                    }}>
                      {selectedNode.description}
                    </Typography>

                    {selectedNode.type !== 'book' && (
                      <>
                        <Divider sx={{
                          my: 3,
                          borderColor: 'divider'
                        }} />
                        <Typography variant="h6" sx={{
                          mb: 2,
                          color: sageColors.primary.start,
                          fontFamily: '"Cormorant", serif'
                        }}>
                          Relationships
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          {selectedRelationships.map((rel, index) => (
                            <Box key={index} sx={{
                              p: 2.5,
                              bgcolor: '#fafafa',
                              borderRadius: 2,
                              border: '1px solid',
                              borderColor: 'divider',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                borderColor: sageColors.primary.end,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                              }
                            }}>
                              <Typography variant="subtitle1" gutterBottom sx={{
                                fontFamily: '"Cormorant", serif',
                                fontWeight: 600,
                                color: sageColors.primary.start
                              }}>
                                {rel.description}
                              </Typography>
                              <Chip
                                label={rel.type}
                                size="small"
                                sx={{
                                  mb: 2,
                                  bgcolor: relationshipColors[rel.type],
                                  color: 'white',
                                  borderRadius: 1,
                                  fontFamily: '"Lato", sans-serif'
                                }}
                              />
                              <Typography variant="body2" sx={{
                                fontWeight: 500,
                                mt: 1,
                                fontFamily: '"Lato", sans-serif',
                                color: sageColors.primary.start
                              }}>
                                Development:
                              </Typography>
                              <Box component="ul" sx={{
                                mt: 1,
                                pl: 2,
                                mb: 0
                              }}>
                                {rel.development.map((step, i) => (
                                  <Box component="li" key={i} sx={{
                                    mb: i === rel.development.length - 1 ? 0 : 1.5
                                  }}>
                                    <Typography variant="body2" sx={{
                                      fontFamily: '"Lato", sans-serif',
                                      lineHeight: 1.6,
                                      color: 'text.secondary'
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
                    <Typography variant="body1" sx={{
                      fontStyle: 'italic',
                      fontFamily: '"Lato", sans-serif'
                    }}>
                      Select a node to view details
                    </Typography>
                  </Box>
                )}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
    // ... existing JSX ...
    {selectedNode && (
      <Typography variant="body2" color="textSecondary" sx={{
        mt: 1,
        fontFamily: '"Lato", sans-serif'
      }}>
        {selectedNode.type === 'book' ?
          `Published: ${selectedNode.year}` :
          selectedNode.novel}
      </Typography>
    )}
    // ... rest of the JSX ...
  );
}
