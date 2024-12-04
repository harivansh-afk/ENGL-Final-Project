// For smaller network visualizations in subpages
const subGraphConfig = {
  nodeRelSize: 4,
  linkDistance: 80,
  d3: {
    alphaDecay: 0.05,    // Faster decay for smaller graphs
    alphaMin: 0.001,
    velocityDecay: 1
  },
  cooldownTicks: 30,
  cooldownTime: 1500,
};

// Use static positioning for very small networks
const staticLayout = {
  enableNodeDrag: false,
  staticGraph: true,
  nodePosition: { x: node => node.initialX, y: node => node.initialY }
};
