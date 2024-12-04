import { useRef, useCallback, useState, useEffect } from 'react';

const InteractiveGraph = ({ graphData, onNodeSelect }) => {
  const graphRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const clickTimeoutRef = useRef(null);
  const [isProcessingClick, setIsProcessingClick] = useState(false);

  // Cleanup function for the timeout
  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  const handleNodeClick = useCallback((node) => {
    if (!node || isProcessingClick) return;

    // Prevent multiple clicks
    setIsProcessingClick(true);

    // Clear any existing timeout
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }

    // Set the selected node immediately
    setSelectedNode(node);
    onNodeSelect(node);

    // Reset the processing flag after a short delay
    clickTimeoutRef.current = setTimeout(() => {
      setIsProcessingClick(false);
    }, 300); // 300ms debounce
  }, [onNodeSelect, isProcessingClick]);

  // Calculate static positions based on container size
  const containerWidth = 600;
  const containerHeight = 600;

  const graphConfig = {
    nodeRelSize: 8,
    nodeVal: 30,
    width: containerWidth,
    height: containerHeight,
    backgroundColor: "#ffffff",
    nodeColor: node => node.type === 'protagonist' ? "#4CAF50" :
               node.type === 'antagonist' ? "#f44336" : "#2196F3",

    // Static layout configuration
    staticGraph: true,
    nodePosition: node => ({
      x: containerWidth/2 + Math.cos(node.index * (2 * Math.PI / graphData.nodes.length)) * (containerWidth/3),
      y: containerHeight/2 + Math.sin(node.index * (2 * Math.PI / graphData.nodes.length)) * (containerHeight/3)
    }),

    // Interaction settings
    enableNodeDrag: false,
    enableZoom: true,
    minZoom: 0.5,
    maxZoom: 2.5,
    cooldownTime: 0, // Disable force simulation cooldown
    warmupTicks: 0,  // Disable initial ticks

    // Node appearance
    nodeResolution: 16,

    // Completely disable all tooltips/labels
    nodeLabel: null,
    nodeCanvasObject: null,
    nodeCanvasObjectMode: null,
    enableNodeHover: false,
    enableLinkHover: false,

    // Link appearance
    linkWidth: 2,
    linkColor: () => "#999999",
    linkOpacity: 0.6,
  };

  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      width: '100%',
      maxWidth: '1000px',
      margin: '0 auto'
    }}>
      <div style={{
        width: containerWidth,
        height: containerHeight,
        border: '1px solid #eee',
        position: 'relative'
      }}>
        <ForceGraph
          {...graphConfig}
          ref={graphRef}
          graphData={graphData}
          onNodeClick={handleNodeClick}
        />
      </div>

      {/* Right side popup */}
      <div style={{
        width: '300px',
        padding: '20px',
        backgroundColor: '#fff',
        border: '1px solid #eee',
        borderRadius: '4px',
        height: 'fit-content',
        visibility: selectedNode ? 'visible' : 'hidden',
        opacity: selectedNode ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out'
      }}>
        {selectedNode && (
          <>
            <h3 style={{ margin: '0 0 10px 0' }}>{selectedNode.name}</h3>
            <p style={{ margin: '0 0 10px 0' }}>Type: {selectedNode.type}</p>
            <p style={{ margin: '0 0 10px 0' }}>Novel: {selectedNode.novel}</p>
            {selectedNode.class && (
              <p style={{ margin: '0 0 10px 0' }}>Class: {selectedNode.class}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default InteractiveGraph;
