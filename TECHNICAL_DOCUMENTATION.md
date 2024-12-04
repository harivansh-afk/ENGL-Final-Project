# Technical Documentation - Austen's Wedding Guide

## Project Overview

A React-based web application that serves as a modern wedding guide themed around Jane Austen's works. The project combines literary analysis with interactive features, presenting Austen's insights in a contemporary context.

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
│   ├── vendor/          # Vendor-specific components
│   ├── timeline/        # Timeline components
│   │   ├── InteractiveTimeline.tsx
│   │   └── SocialClassView.tsx
│   ├── BlogPost.tsx     # Blog post component
│   ├── CommentSection.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navbar.tsx
│   ├── Pagination.tsx
│   ├── QuoteDisplay.tsx
│   ├── ShareButtons.tsx
│   └── theme-provider.tsx
│
├── data/
│   ├── blog-posts.ts     # Character blog content
│   ├── quotes.ts         # Austen quotes
│   ├── quiz.ts           # Character quiz data
│   ├── success-stories.ts
│   ├── literary-analysis.ts  # Literary analysis data
│   ├── comparative-analysis.ts # Comparative analysis data
│   └── vendors.ts
│
├── pages/
│   ├── BlogPost/
│   ├── Analysis.tsx      # Literary analysis page
│   ├── Blogs.tsx
│   ├── Home.tsx
│   ├── MarketCalculator.tsx
│   ├── Quiz.tsx
│   ├── Stories.tsx
│   ├── SuccessStories.tsx
│   ├── ComparativeAnalysis.tsx # Comparative analysis page
│   └── Vendors.tsx
```

## Routing Structure

The application uses React Router for navigation with the following route structure:

```typescript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/blogs" element={<Blogs />} />
  <Route path="/blogs/:id" element={<BlogPost />} />
  <Route path="/quiz" element={<Quiz />} />
  <Route path="/vendors" element={<Vendors />} />
  <Route path="/success-stories" element={<SuccessStories />} />
  <Route path="/market-calculator" element={<MarketCalculator />} />
  <Route path="/analysis" element={<Analysis />} />
  <Route path="/comparative" element={<ComparativeAnalysis />} />
  <Route path="/network" element={<NetworkVisualization />} />
</Routes>
```

### Navigation Updates

- Main navigation in `Navbar.tsx` includes:
  - Primary navigation group with consistent button styling
  - Secondary navigation group for analysis features
  - Visual separation between groups using border
  - All buttons styled with sage color scheme
- Home page features:
  - Literary Analysis card in featured sections
  - Direct link to analysis content
- Layout structure:
  - MainLayout component wraps all pages
  - Consistent header with navigation
  - Footer with copyright and quote

### Route Integration

- Analysis page is directly accessible via `/analysis`
- Comparative analysis accessible via `/comparative`
- Character network visualization via `/network`
- Integrated into main navigation flow
- Maintains consistent layout and styling
- Proper error handling and loading states

## Key Features

### 1. Content Management

- Data is stored in TypeScript files with strong typing
- Content is organized by characters and themes
- Modular content structure for easy updates
- **New: Comprehensive literary analysis data structure with detailed novel analysis**

### 2. UI Components

- Custom components built on Shadcn/UI
- Responsive design using Tailwind CSS
- Consistent theme using custom color palette:
  - Sage
  - Cream
  - Rose
- **New: Interactive novel selector and tabbed analysis interface**

### 3. Interactive Features

- Character quiz with result mapping
- Blog comment system
- Share functionality
- Pagination for content lists
- Market calculator
- **New: Interactive timeline with multiple views**
- **New: Literary analysis with themed tabs and novel selection**
- **New: Comparative analysis for cross-novel exploration**
- **New: Character network visualization**

### 4. Performance Considerations

- Component-based architecture for better code splitting
- Error boundaries for graceful error handling
- Loading states for better UX
- Client-side routing for smooth navigation

## Styling

The project uses a combination of:

- Tailwind CSS for utility-first styling
- Custom components from Shadcn/UI
- Custom theme variables for consistent branding
- Responsive design patterns
- **New: Scrollable content areas with consistent styling**
- **New: Themed cards and tabs for analysis content**

## Typography

- Headings: Cormorant font family
- Body: Lato font family
- Consistent text sizing using Tailwind's scale

## Component Architecture

### Layout Components

- `Layout.tsx`: Main layout wrapper
- `Navbar.tsx`: Navigation header
- `Footer.tsx`: Site footer
- `ErrorBoundary.tsx`: Error handling wrapper

### Content Components

- `BlogPost.tsx`: Blog post display
- `QuoteDisplay.tsx`: Quote formatting
- `CommentSection.tsx`: User comments
- `ShareButtons.tsx`: Social sharing
- **New: Analysis.tsx**: Literary analysis with novel selection and tabbed content

### UI Components

Extensive UI component library including:

- Buttons
- Cards
- Forms
- Modals
- Navigation menus
- Tables
- Toast notifications
- **New: Select dropdown for novel selection**
- **New: Tabs for content organization**
- **New: ScrollArea for content sections**

## Data Structure

### Blog Posts

```typescript
interface BlogPost {
  id: string;
  title: string;
  author: string;
  authorImage: string;
  date: string;
  content: string[];
}
```

### Quiz System

```typescript
interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

interface QuizResult {
  character: string;
  quote: string;
  description: string;
  book: string;
  matchAdvice: string;
}
```

### Literary Analysis

```typescript
// Novel Analysis Structure
interface NovelAnalysis {
  title: string;
  publicationYear: number;
  mainThemes: ThematicElement[];
  characterAnalysis: CharacterAnalysis[];
  socialCommentary: SocialCommentary[];
  literaryDevices: LiteraryDevice[];
}

// Theme Analysis
interface ThematicElement {
  theme: string;
  description: string;
  examples: {
    quote: string;
    source: string;
    analysis: string;
  }[];
  significance: string;
}

// Available Novels
const novelAnalyses = {
  prideAndPrejudice: NovelAnalysis;
  northangerAbbey: NovelAnalysis;
  senseAndSensibility: NovelAnalysis;
  mansfieldPark: NovelAnalysis;
}
```

## Pages and Components

### Analysis Page

- Path: `/analysis`
- Features:
  - Novel selector dropdown
  - Tabbed interface for different analysis aspects
  - Scrollable content areas
  - Themed styling
- Content Sections:
  - Themes
  - Characters
  - Social Commentary
  - Literary Devices

### Data Organization

- `src/data/literary-analysis.ts`: Contains structured analysis data for all novels
  - Pride and Prejudice
  - Northanger Abbey
  - Sense and Sensibility
  - Mansfield Park
- Each novel includes:
  - Main themes with examples and significance
  - Character analysis with development and key quotes
  - Social commentary with modern relevance
  - Literary devices with examples and effects

## Best Practices

1. TypeScript for type safety
2. Component-based architecture
3. Consistent file naming
4. Modular CSS with Tailwind
5. Error handling with boundaries
6. Loading state management
7. Responsive design patterns
8. **New: Structured content organization**
9. **New: Interactive content navigation**

## Future Considerations

1. Content expansion opportunities
2. Performance optimization
3. Accessibility improvements
4. SEO optimization
5. Content management system integration
6. **New: Additional novel analysis features**
7. **New: Comparative analysis tools**

## Character Network Feature

### Interactive Graph Component

The character network visualization is implemented using a force-directed graph with the following features:

```typescript
interface CharacterNode {
  id: string;
  name: string;
  novel: string;
  class: string;
  type: "protagonist" | "antagonist" | "supporting";
}

interface GraphConfig {
  nodeRelSize: number;
  nodeVal: number;
  width: number;
  height: number;
  staticGraph: boolean;
  enableNodeDrag: boolean;
  enableZoom: boolean;
}
```

#### Key Features

1. **Static Node Positioning**

   - Nodes are arranged in a circular layout
   - Fixed positions prevent unwanted movement
   - Calculated using mathematical formulas for even distribution

2. **Interaction Handling**

   - Single-click node selection
   - Debounced click handling (300ms)
   - Click processing state management
   - Cleanup of timeouts on unmount

3. **Visual Configuration**

   - Node colors based on character type:
     - Protagonist: Green (#4CAF50)
     - Antagonist: Red (#f44336)
     - Supporting: Blue (#2196F3)
   - Node size: 8 units (nodeRelSize)
   - Link width: 2 units
   - Link opacity: 0.6

4. **Performance Optimizations**

   - Disabled force simulation cooldown
   - Zero warmup ticks
   - Removed hover effects and tooltips
   - Static graph configuration

5. **UI Components**
   - Main graph container (600x600px)
   - Right-side information panel (300px width)
   - Smooth transitions for panel visibility
   - Responsive layout with flex container

### Implementation Details

```javascript
// Node Click Handler
const handleNodeClick = useCallback(
  (node) => {
    if (!node || isProcessingClick) return;
    setIsProcessingClick(true);
    setSelectedNode(node);
    onNodeSelect(node);
    // Reset after 300ms
    clickTimeoutRef.current = setTimeout(() => {
      setIsProcessingClick(false);
    }, 300);
  },
  [onNodeSelect, isProcessingClick]
);

// Graph Configuration
const graphConfig = {
  staticGraph: true,
  enableNodeDrag: false,
  enableZoom: true,
  minZoom: 0.5,
  maxZoom: 2.5,
  cooldownTime: 0,
  warmupTicks: 0,
  nodeLabel: null,
  enableNodeHover: false,
};
```

### Styling

The component uses a flex layout with the following structure:

```css
// Container
 {
  display: flex;
  gap: 20px;
  width: 100%;
  maxwidth: 1000px;
  margin: 0 auto;
}

// Graph Container
 {
  width: 600px;
  height: 600px;
  border: 1px solid #eee;
  position: relative;
}

// Information Panel
 {
  width: 300px;
  padding: 20px;
  backgroundcolor: #fff;
  border: 1px solid #eee;
  borderradius: 4px;
  transition: opacity 0.2s ease-in-out;
}
```

### Best Practices

1. **State Management**

   - Use of React hooks for state
   - Proper cleanup of timeouts
   - Controlled component updates

2. **Performance**

   - Debounced click handling
   - Static node positioning
   - Minimal re-renders

3. **User Experience**

   - Smooth transitions
   - Clear visual feedback
   - Responsive layout

4. **Code Organization**
   - Modular component structure
   - Clear configuration objects
   - Type-safe interfaces

## Timeline Feature

### Interactive Timeline Component

The timeline visualization is implemented with a modern, flowing layout that displays events chronologically with the following features:

```typescript
interface TimelineEvent {
  year: number;
  type: "works" | "context" | "legacy" | "adaptations";
  title: string;
  description: string;
  novel?: string;
  significance?: string;
}

interface Props {
  events: TimelineEvent[];
}
```

#### Key Features

1. **Event Display**

   - Vertical flowing layout with connected events
   - Events positioned horizontally based on year
   - Clean card design with type-based color coding
   - Connected events with vertical lines

2. **Time Scale**

   - Sticky year markers at the top
   - Automatic year range calculation
   - Visual period indicators
   - Smooth scrolling behavior

3. **Event Types**

   - Works: Publications and writings
   - Context: Historical events
   - Legacy: Impact and influence
   - Adaptations: Modern interpretations

4. **Visual Design**

   - Clean, modern card layout
   - Type-based color coding:
     - Works: Blue (#2196F3)
     - Context: Purple (#9C27B0)
     - Legacy: Green (#4CAF50)
   - Subtle shadows and transitions
   - Responsive container sizing

5. **Interaction**
   - Smooth horizontal scrolling
   - Event selection with visual feedback
   - Automatic scrolling to selected events
   - Hover effects on cards and dots

### Implementation Details

```typescript
// Color Scheme
const getEventColor = (type: string) => {
  switch (type) {
    case "works":
      return { background: "#E3F2FD", border: "#2196F3" };
    case "context":
      return { background: "#F3E5F5", border: "#9C27B0" };
    case "legacy":
      return { background: "#E8F5E9", border: "#4CAF50" };
    default:
      return { background: "#FAFAFA", border: "#9E9E9E" };
  }
};

// Event Click Handler
const handleEventClick = (event: TimelineEvent) => {
  setSelectedEvent(event);
  // Scroll event into view with smooth animation
  if (timelineRef.current) {
    const position = ((event.year - actualMinYear) / timeSpan) * 100;
    const timelineWidth = timelineRef.current.clientWidth;
    const totalWidth = timelineRef.current.scrollWidth;
    const scrollPosition = (position / 100) * totalWidth - timelineWidth / 2;

    timelineRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }
};
```

### Styling

The timeline uses a combination of Material-UI and custom styling:

```typescript
// Container Styling
{
  position: 'relative',
  height: 600,
  bgcolor: '#FFFFFF',
  borderRadius: 2,
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  overflow: 'hidden'
}

// Event Card Styling
{
  p: 2,
  minWidth: 240,
  maxWidth: 320,
  borderLeft: `3px solid ${colors.border}`,
  borderRadius: '4px',
  transition: 'all 0.2s ease',
  bgcolor: isSelected ? colors.background : '#FFFFFF',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
}
```

### Best Practices

1. **Performance**

   - Efficient event positioning
   - Smooth scrolling behavior
   - Optimized re-renders
   - Proper cleanup of event listeners

2. **User Experience**

   - Clear visual hierarchy
   - Smooth transitions
   - Intuitive navigation
   - Responsive design

3. **Code Organization**

   - Modular component structure
   - Clear type definitions
   - Reusable styling
   - Consistent naming conventions

4. **Accessibility**
   - Keyboard navigation support
   - ARIA labels for interactive elements
   - Color contrast compliance
   - Focus management

## Social Class Feature

### Social Class Analysis Component

The social class analysis feature provides an in-depth examination of class dynamics in Austen's works with the following structure:

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
  occupation?: string;
  annualIncome?: string;
  modernEquivalent?: string;
  description: string;
  relationships: string[];
}
```

#### Key Features

1. **Interactive Social Pyramid**

   - Visual representation of class hierarchy
   - Hover tooltips with class information
   - Smooth transitions and animations
   - Income ranges and modern equivalents

2. **Character Examples**

   - Grid layout of character cards
   - Class-based categorization
   - Income and occupation details
   - Modern equivalent values
   - Character relationships

3. **Comparative Analysis**

   - Character comparison dialog
   - Side-by-side analysis
   - Social mobility examination
   - Economic context

4. **Content Organization**

   - Expandable sections by novel
   - Detailed character studies
   - Modern retellings analysis
   - Critical insights

5. **Visual Design**
   - Clean, academic layout
   - Consistent typography
   - Color-coded class indicators
   - Responsive grid system

### Implementation Details

```typescript
// Social Class View Structure
const SocialClassView = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const [comparisonCharacter, setComparisonCharacter] =
    useState<Character | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Character comparison handling
  const handleCharacterClick = (character: Character) => {
    if (!selectedCharacter) {
      setSelectedCharacter(character);
    } else if (selectedCharacter.id !== character.id) {
      setComparisonCharacter(character);
      setDialogOpen(true);
    }
  };
};

// Social Pyramid Styling
const pyramidStyles = {
  position: "relative",
  height: 300,
  "& .pyramid-level": {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    transition: "all 0.2s",
    "&:hover": {
      transform: "translateX(-50%) scale(1.02)",
    },
  },
};
```

### Content Structure

1. **Pride and Prejudice Analysis**

   - Upper Class Examples
     - Mr. Darcy (£10,000 per year)
     - Lady Catherine de Bourgh
   - Middle & Lower Classes
     - The Bennet Family
     - Servants (via Longbourn)

2. **Mansfield Park Analysis**

   - The Privileged Circle
     - The Bertram Family
     - Mary and Henry Crawford
   - The Dependent Relations
     - Fanny Price
     - The Price Family

3. **Modern Retellings**
   - Pride by Ibi Zoboi
     - Zuri Benitez
     - Darius Darcy
   - Longbourn's Legacy
     - Servant Perspectives
     - Class Intersections

### Integration

1. **Routing**

   - Dedicated `/social-class` route
   - Integration with main navigation
   - Error boundary protection
   - Loading state handling

2. **Navigation**

   - Added to academic section
   - Consistent button styling
   - Clear visual grouping
   - Smooth transitions

3. **Data Management**

   - TypeScript interfaces
   - Structured content
   - Modern equivalents
   - Character relationships

4. **UI Components**
   - Accordion sections
   - Material-UI integration
   - Responsive grid layout
   - Interactive elements

### Best Practices

1. **Content Organization**

   - Clear hierarchical structure
   - Detailed character analysis
   - Historical context
   - Modern relevance

2. **User Experience**

   - Intuitive navigation
   - Interactive comparisons
   - Visual hierarchy
   - Responsive design

3. **Performance**

   - Efficient state management
   - Optimized rendering
   - Smooth transitions
   - Proper cleanup

4. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Color contrast
   - Focus management
