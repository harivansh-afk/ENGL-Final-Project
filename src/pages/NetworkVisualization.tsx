import React, { useState, useCallback, useRef } from 'react';
import { characterNetwork } from '../data/character-network';
import { CharacterNode, Relationship, BookNode } from '../types/character-network';
import { Box, Typography, Paper, Grid, Card, CardContent, IconButton, Tooltip, Popper } from '@mui/material';
import { ForceGraph2D } from 'react-force-graph';
import { ArrowBack, Help } from '@mui/icons-material';
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

export default function NetworkVisualization() {
  const [selectedNode, setSelectedNode] = useState<CharacterNode | BookNode | null>(null);
  const [selectedRelationships, setSelectedRelationships] = useState<Relationship[]>([]);
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipState>({ open: false, content: '', x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

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

    // Draw node
    ctx.beginPath();
    ctx.arc(node.x || 0, node.y || 0, size, 0, 2 * Math.PI);
    ctx.fillStyle = node.color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Only draw labels when zoomed in enough or for book nodes
    if (scale > 0.7 || node.type === 'book') {
      const labelDistance = size + fontSize;
      ctx.font = `${fontSize}px Inter, Arial`;
      const textWidth = ctx.measureText(node.name).width;

      // Semi-transparent background for better readability
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
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
      ctx.fillStyle = '#000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(
        node.name,
        node.x || 0,
        (node.y || 0) + labelDistance
      );
    }
  }, []);

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

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 2,
        px: 3,
        pt: 2
      }}>
        <Typography variant="h4">
          Character Network
        </Typography>
        <Tooltip title={getLegendTooltip()} arrow placement="right">
          <IconButton size="small" sx={{ ml: 2 }}>
            <Help />
          </IconButton>
        </Tooltip>
      </Box>

      <Grid container spacing={0} sx={{ flex: 1, minHeight: 0 }}>
        <Grid item xs={12} md={8}>
          <Paper
            elevation={3}
            sx={{
              height: '100%',
              minHeight: 700,
              position: 'relative',
              borderRadius: 0,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            ref={containerRef}
          >
            {selectedBook && (
              <Tooltip title="Return to book overview" arrow>
                <IconButton
                  onClick={handleBackClick}
                  sx={{ position: 'absolute', top: 8, left: 8, zIndex: 1 }}
                >
                  <ArrowBack />
                </IconButton>
              </Tooltip>
            )}
            <Box sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              bgcolor: 'rgba(255, 255, 255, 0.9)',
              p: 1,
              borderRadius: 1
            }}>
              <Typography variant="body2" color="textSecondary">
                {!selectedBook ? 'Click a book to explore its characters' : 'Click characters to view relationships'}
              </Typography>
            </Box>
            <ForceGraph2D
              graphData={getGraphData()}
              onNodeHover={handleNodeHover}
              onNodeClick={handleNodeClick}
              nodeCanvasObject={(node: NetworkNode, ctx: CanvasRenderingContext2D, scale: number) =>
                renderNodeCanvas(node, ctx, scale)}
              linkColor={(link: NetworkLink) => link.color}
              linkWidth={2}
              nodeRelSize={6}
              width={800}
              height={700}
              cooldownTicks={50}
              cooldownTime={3000}
              linkDirectionalParticles={2}
              linkDirectionalParticleSpeed={0.003}
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
              onZoom={() => centerGraph(getGraphData())}
              centerAt={[400, 350]}
              zoom={2}
              enableNodeDrag={true}
              enableZoomPanInteraction={true}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{
            height: '100%',
            minHeight: 700,
            overflow: 'auto',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12)'
          }}>
            {selectedNode && (
              <Card sx={{ boxShadow: 'none', borderRadius: 0 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {selectedNode.name}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {selectedNode.type === 'book' ? `Published: ${(selectedNode as BookNode).year}` : selectedNode.novel}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedNode.description}
                  </Typography>

                  {selectedNode.type !== 'book' && (
                    <>
                      <Typography variant="body2" sx={{ mt: 2 }} color="textSecondary">
                        Social Class: {(selectedNode as CharacterNode).class}
                        <br />
                        Character Role: {selectedNode.type}
                      </Typography>

                      <Typography variant="h6" sx={{ mt: 3, mb: 2 }}>
                        Relationships
                      </Typography>
                      {selectedRelationships.map((rel, index) => (
                        <Box key={index} sx={{ mt: 2, p: 2, bgcolor: 'rgba(0, 0, 0, 0.02)', borderRadius: 1 }}>
                          <Typography variant="subtitle1" color="primary">
                            {rel.description}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" gutterBottom>
                            Type: {rel.type}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            Development:
                          </Typography>
                          <ul style={{ margin: '8px 0', paddingLeft: 20 }}>
                            {rel.development.map((step, i) => (
                              <li key={i}>
                                <Typography variant="body2">{step}</Typography>
                              </li>
                            ))}
                          </ul>
                        </Box>
                      ))}
                    </>
                  )}
                </CardContent>
              </Card>
            )}
          </Box>
        </Grid>
      </Grid>

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
          bgcolor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: 3,
          borderRadius: 1
        }}>
          <Typography variant="body2" whiteSpace="pre-line">
            {tooltip.content}
          </Typography>
        </Paper>
      </Popper>
    </Box>
  );
}
