import { useRef, useEffect, useState, useCallback } from 'react';
import { characterNetwork } from '../data/character-network';
import { CharacterNode, Relationship } from '../types/character-network';
import { Box, Typography, Paper, Grid, IconButton, Tooltip, Chip, Divider, Container, CircularProgress, Fade } from '@mui/material';
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
  year: number;
}

// Character-specific node interface
interface NetworkCharacterNode extends BaseNetworkNode {
  type: 'protagonist' | 'antagonist' | 'supporting' | 'character';
}

// Union type for all possible node types
type NetworkNode = NetworkBookNode | NetworkCharacterNode;

// Updated NetworkLink interface to match D3's expectations
interface NetworkLink extends d3.SimulationLinkDatum<NetworkNode> {
  source: string | number | NetworkNode;
  target: string | number | NetworkNode;
  type: string;
  color: string;
}

// Particle type for emitParticle
interface GraphParticle {
  id: string;
  source: NetworkNode;
  target: NetworkNode;
}

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
  const fgRef = useRef<ForceGraphMethods>();

  // ... rest of the component code ...

  return (
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
