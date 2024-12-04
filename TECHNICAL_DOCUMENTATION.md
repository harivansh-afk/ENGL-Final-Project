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
│   ├── BlogPost.tsx     # Blog post component
│   ├── CommentSection.tsx
│   ├── ErrorBoundary.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navbar.tsx
│   ├── Pagination.tsx
│   ├── QuoteDisplay.tsx
│   ├── Routes.tsx
│   ├── ShareButtons.tsx
│   └── theme-provider.tsx
│
├── data/
│   ├── blog-posts.ts     # Character blog content
│   ├── quotes.ts         # Austen quotes
│   ├── quiz.ts           # Character quiz data
│   ├── dear-jane.ts      # Advice column content
│   ├── success-stories.ts
│   ├── literary-analysis.ts  # Literary analysis data
│   └── vendors.ts
│
├── pages/
│   ├── BlogPost/
│   ├── Advice.tsx
│   ├── Analysis.tsx      # Literary analysis page
│   ├── Blogs.tsx
│   ├── DearJane.tsx
│   ├── Home.tsx
│   ├── MarketCalculator.tsx
│   ├── Quiz.tsx
│   ├── Stories.tsx
│   ├── SuccessStories.tsx
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
  <Route path="/advice" element={<Advice />} />
  <Route path="/vendors" element={<Vendors />} />
  <Route path="/success-stories" element={<SuccessStories />} />
  <Route path="/market-calculator" element={<MarketCalculator />} />
  <Route path="/analysis" element={<Analysis />} />
</Routes>
```

### Navigation Updates

- Main navigation in `Navbar.tsx` includes:
  - Primary navigation links
  - Literary Analysis link with distinct styling
  - Responsive design for all screen sizes
- Home page features:
  - Literary Analysis card in featured sections
  - Direct link to analysis content
- Layout structure:
  - MainLayout component wraps all pages
  - Consistent header with navigation
  - Footer with copyright and quote

### Route Integration

- Analysis page is directly accessible via `/analysis`
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
- **New: Literary analysis with themed tabs and novel selection**

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
