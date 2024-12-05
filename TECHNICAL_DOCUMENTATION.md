# Technical Documentation - ENGL 2502: Jane Austen

## Recent Changes

### Character Network Updates (Latest Update)

- Relocated zoom controls to top right of network container
- Improved zoom functionality implementation:
  - Fixed zoom in/out controls
  - Added proper TypeScript types for ForceGraph methods
  - Removed unused interfaces and functions
  - Updated button handlers for better reliability
- Type System Improvements:

  ```typescript
  interface ForceGraphMethods {
    zoom: (k?: number) => number;
    zoomToFit: (duration?: number, padding?: number) => void;
    d3Force: (
      forceName: string,
      force?: d3.Force<d3.SimulationNodeDatum, undefined>
    ) => void;
    d3ReheatSimulation: () => void;
    getZoom: () => number;
  }

  type ForceGraphInstance = ForceGraphMethods;
  ```

- UI Enhancements:
  - Improved zoom controls layout
  - Added vertical stacking for better organization
  - Enhanced tooltip visibility
  - Maintained consistent styling with sage color scheme
- Code Cleanup:
  - Removed unused types and interfaces
  - Cleaned up force graph method definitions
  - Improved type safety for graph interactions
  - Fixed linter errors and warnings

### Character Blogs Removal

- Removed character blogs feature completely
- Deleted related files:
  - `src/data/blog-posts.ts`
  - `src/data/blogPosts.ts`
  - `src/pages/Blogs.tsx`
  - `src/components/BlogPost.tsx`
  - `src/pages/BlogPost/BlogPost.tsx`
  - `src/types/blog.ts`
- Updated navigation:
  - Removed blog routes from routing configuration
  - Removed "Character Blogs" from navigation menu
  - Removed Character Insights section from homepage
- Cleaned up dependencies:
  - Removed unused imports
  - Fixed linter errors
  - Removed blog-related types from `src/types/index.ts`

## Project Overview

A React-based academic web application focused on analyzing Jane Austen's works, themes, and their modern relevance. The project combines literary analysis with interactive features to provide deep insights into Austen's novels and their contemporary interpretations.

## Tech Stack

- **Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Routing**: React Router
- **Package Manager**: npm

## Project Structure

```
src/
├── components/
│   ├── ui/               # Shadcn UI components
│   ├── layout/           # Layout components
│   ├── analysis/         # Analysis components
│   │   ├── NovelAnalysis.tsx
│   │   ├── CharacterAnalysis.tsx
│   │   └── ThemeAnalysis.tsx
│   ├── timeline/        # Timeline components
│   │   ├── InteractiveTimeline.tsx
│   │   └── SocialClassView.tsx
│   ├── network/         # Character network components
│   │   ├── NetworkGraph.tsx
│   │   └── RelationshipView.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navbar.tsx
│   ├── Pagination.tsx
│   └── theme-provider.tsx
```

## Navigation Structure

The application uses a focused academic navigation structure:

### Primary Navigation

- Literary Analysis
- Novel Studies
- Character Studies
- Quiz
- Vendors
- Success Stories
- Market Calculator

### Analysis Navigation

- Literary Analysis
- Character Network
- Timeline
- Social Class

### Course Novels (Norton Critical Editions)

- Northanger Abbey (ed. Fraiman)
- Sense and Sensibility (ed. Hershinow)
- Pride and Prejudice (ed. Davidson)
- Mansfield Park (ed. Johnson)

### Modern Analysis

- Contemporary Retellings
- Social Class Analysis
- Character Network
- Timeline

## Key Features

### 1. Novel Analysis

- Detailed analysis of each course novel
- Integration with Norton Critical Edition content
- Theme exploration and character development
- Social commentary analysis

### 2. Interactive Features

- Character relationship network visualization
- Chronological timeline of works and adaptations
- Social class analysis tools
- Comparative analysis features

### 3. Modern Interpretations

- Analysis of contemporary retellings
- Comparative studies with original works
- Social class dynamics in modern context
- Character archetype analysis

### 4. Academic Tools

- Citation integration
- Critical essay references
- Thematic analysis frameworks
- Character development tracking

## UI Components

### Navigation Components

```typescript
interface NavItem {
  name: string;
  path: string;
  description?: string;
}

interface NovelItem extends NavItem {
  edition: string;
}

interface ModernItem extends NavItem {
  description: string;
}
```

### Analysis Components

- Novel selector with edition information
- Theme exploration interface
- Character relationship visualization
- Social class analysis tools

## Styling

The project maintains its elegant aesthetic while emphasizing academic content:

- Clean, scholarly design
- Consistent typography using Cormorant and Lato
- Sage and cream color scheme
- Responsive layout with mobile-first approach

## Typography

- Headings: Cormorant font family
- Body: Lato font family
- Academic emphasis with proper hierarchical structure

## Best Practices

1. Academic Focus

   - Content-first approach
   - Integration of course materials
   - Proper citation and sourcing
   - Critical analysis emphasis

2. Technical Implementation

   - TypeScript for type safety
   - Component-based architecture
   - Responsive design
   - Performance optimization

3. User Experience
   - Clear navigation structure
   - Academic resource organization
   - Interactive learning tools
   - Mobile-friendly layout

## Future Considerations

1. Enhanced Academic Features

   - Integration with additional critical editions
   - Expanded analysis tools
   - Citation management system
   - Academic resource linking

2. Content Expansion

   - Additional novel analysis
   - More contemporary retellings
   - Extended character studies
   - Thematic deep dives

3. Technical Improvements

   - Performance optimization
   - Accessibility enhancements
   - Mobile experience refinement
   - Search functionality

4. Academic Integration
   - Course material alignment
   - Research tool integration
   - Citation format options
   - Study guide features

## Character Network Feature

The character network visualization provides an interactive 3D-like visualization of character relationships:

### Recent Updates

1. Visual Enhancements

   - Implemented 3D-like node aesthetics with shadows and depth
   - Adopted sage theme color scheme matching social class page
   - Pentagon layout for book nodes with character nodes arranged around them
   - Improved node positioning and stability
   - Enhanced force simulation parameters for smoother interactions

2. Interaction Improvements

   - Optimized single-click behavior for immediate response
   - Enhanced node hovering and tooltip behavior
   - Improved animation transitions
   - Added debouncing for smoother interactions
   - Repositioned zoom controls to top right of network container

3. UI Refinements

   - Added informative tip element under Character Network heading
   - Removed question mark tooltip for cleaner interface
   - Improved layout structure and container positioning
   - Enhanced visual hierarchy and spacing
   - Better integration with overall page design

4. Technical Implementation
   - Proper TypeScript typing for all components
   - Optimized force simulation settings
   - Improved link routing and curvature
   - Enhanced node canvas rendering
   - Better state management for interactions

### Core Features

```typescript
interface CharacterNode {
  id: string;
  name: string;
  novel: string;
  socialClass: string;
  relationships: Relationship[];
  criticalAnalysis: string;
}

interface Relationship {
  type: string;
  target: string;
  description: string;
  textualEvidence: string;
}
```

### Visualization Components

1. Node Styling

   - 3D-like appearance with shadows
   - Sage color scheme integration
   - Size variations based on node type
   - Smooth hover effects
   - Clear visual hierarchy

2. Layout Structure

   - Pentagon arrangement for book nodes
   - Optimized character node positioning
   - Improved force-directed layout
   - Better link routing
   - Stable node placement

3. Interactive Elements

   - Responsive zoom controls
   - Smooth node selection
   - Enhanced tooltips
   - Intuitive navigation
   - Clear visual feedback

4. Performance Optimizations
   - Efficient force simulation
   - Optimized rendering
   - Smooth animations
   - Responsive interactions
   - Stable positioning

## Timeline Feature

The timeline has been enhanced with improved styling and functionality:

### Visual Design

- Implemented a continuous gradient background using sage color scheme
- Removed vertical dividers for cleaner appearance
- Added white horizontal center line for visual reference
- Adjusted z-index layering:
  - Year markers (z-index: 1)
  - Regular events (z-index: 5)
  - Selected events (z-index: 10)
  - Hovered events (z-index: 15)
  - Slider element (z-index: 50-51)

### Component Structure

- Replaced Material-UI tabs with custom Tabs component for consistency
- Updated tab styling to match literary analysis page
- Components hierarchy:
  ```typescript
  <Tabs defaultValue="interactive">
    <TabsList>
      <TabsTrigger value="interactive">Interactive Timeline</TabsTrigger>
      <TabsTrigger value="basic">Basic Timeline</TabsTrigger>
    </TabsList>
    <TabsContent value="interactive">
      <InteractiveTimeline />
    </TabsContent>
    <TabsContent value="basic">
      <BasicTimeline />
    </TabsContent>
  </Tabs>
  ```

### Timeline Events

```typescript
interface TimelineEvent {
  year: number;
  type: "works" | "context" | "legacy" | "adaptations";
  title: string;
  description: string;
  significance?: string;
}
```

### Color Scheme

- Background gradient:
  ```typescript
  const timePeriods = [
    { color: "rgba(74, 93, 82, 0.1)" }, // Early Life
    { color: "rgba(74, 93, 82, 0.15)" }, // Juvenilia
    { color: "rgba(74, 93, 82, 0.2)" }, // Publication Years
    { color: "rgba(74, 93, 82, 0.25)" }, // Victorian Reception
    { color: "rgba(74, 93, 82, 0.3)" }, // 20th Century
    { color: "rgba(74, 93, 82, 0.35)" }, // Contemporary
  ];
  ```

### Interactive Elements

- Draggable slider with improved visibility
- Event dots with hover effects
- Year markers positioned behind events
- Smooth transitions and animations
- Responsive layout adjustments

### Best Practices

- Consistent use of sage color palette
- Proper z-index management for layering
- Smooth animations for interactions
- Responsive design considerations
- Accessibility improvements through proper contrast

## Social Class Analysis

Enhanced focus on academic analysis of class dynamics with interactive features:

```typescript
interface SocialClassAnalysis {
  novel: string;
  class: string;
  characteristics: string[];
  textualEvidence: string[];
  modernParallels: string[];
  criticalPerspectives: string[];
}
```

### Key Features

1. Interactive Social Pyramid

   - Visual representation of Regency era social hierarchy
   - Gradient-based design using sage color palette
   - Enhanced tooltips with opaque white background
   - Responsive sizing and animations
   - Custom tooltip styling with improved readability

2. Character Comparison Tool

   - Interactive character selection system
   - Enhanced visual feedback for selected states
   - Side-by-side comparison view
   - Economic and social context display
   - Selection status messages
   - Ability to deselect characters

3. Visual Design
   - Sage color scheme throughout
   - Cormorant font for headings
   - Lato font for body text
   - Consistent spacing and typography
   - Enhanced contrast and readability

### Component Structure

#### Social Class View

```typescript
interface SocialClass {
  name: string;
  description: string;
  incomeRange: string;
  modernEquivalent: string;
  characteristics: string[];
  examples: {
    character: string;
    novel: string;
    context: string;
  }[];
}

interface Character {
  id: string;
  name: string;
  novel: string;
  socialClass: "upper" | "middle" | "working";
  occupation: string;
  annualIncome: string;
  modernEquivalent: string;
  description: string;
  relationships: string[];
}
```

#### UI Components

1. Social Pyramid

   - Hierarchical visualization
   - Enhanced tooltips with:
     - White opaque background
     - Custom arrow styling
     - Improved shadow effects
     - Class description
     - Income ranges
     - Modern equivalents
     - Key characteristics
   - Custom MUI tooltip styling for better visibility

2. Character Cards

   - Enhanced selection state indicators:
     - Border highlight
     - Scale transform
     - Shadow effect
     - Left accent bar
   - Visual feedback on hover/selection
   - Social class badges with scaling effect
   - Income information
   - Modern equivalent values
   - Status message for selected state

3. Comparison Dialog
   - Side-by-side character comparison
   - Detailed economic information
   - Social context
   - Character relationships
   - Improved typography and spacing

### Styling

1. Color Palette

```typescript
const pyramidColors = {
  upper: {
    start: "#4A5D52", // darker sage
    end: "#6B7F75", // lighter sage
  },
  middle: {
    start: "#5B6E65",
    end: "#7C8F86",
  },
  lower: {
    start: "#6B7F75",
    end: "#8C9F96",
  },
};
```

2. Typography

   - Headings: Cormorant font
   - Body: Lato font
   - Consistent text hierarchy
   - Enhanced readability
   - Improved contrast ratios

3. Interactive Elements

   - Enhanced hover states with subtle animations
   - Improved selection indicators
   - Clear status messages for user feedback
   - Smooth transitions
   - Scale transforms for selected states

4. Tooltip Styling

```typescript
const tooltipStyles = {
  tooltip: {
    backgroundColor: "white",
    color: "inherit",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    opacity: 1,
    maxWidth: "none",
  },
  arrow: {
    color: "white",
    "&::before": {
      backgroundColor: "white",
      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    },
  },
};
```

5. Layout
   - Responsive grid system
   - Proper spacing and padding
   - Card-based design
   - Clear visual hierarchy
   - Enhanced component spacing

### User Experience

1. Character Selection

   - Click to select first character
   - Click another to compare
   - Click selected character to deselect
   - Clear visual feedback
   - Status messages guide user actions

2. Comparison Flow

   - Improved status messages guide user actions
   - Enhanced selection states
   - Easy-to-use comparison dialog
   - Intuitive navigation
   - Clear deselection option

3. Social Class Information

   - Enhanced tooltips with better visibility
   - Economic context
   - Modern equivalents
   - Key characteristics
   - Improved information hierarchy

4. Accessibility
   - High contrast text
   - Clear visual hierarchy
   - Proper spacing
   - Readable font sizes
   - Enhanced tooltip readability
   - Improved interactive states

### Recent Updates

1. Tooltip Enhancements

   - Added white opaque background
   - Improved shadow effects
   - Custom arrow styling
   - Better visibility against all backgrounds
   - Enhanced typography

2. Selection State Improvements

   - Added visual feedback for selected cards
   - Implemented deselection functionality
   - Added status messages
   - Enhanced hover states
   - Improved transitions

3. Visual Refinements
   - Better contrast ratios
   - Enhanced spacing
   - Improved component hierarchy
   - Consistent styling across all elements
   - Refined animations and transitions
