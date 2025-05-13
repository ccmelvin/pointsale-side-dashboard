# Modern Dashboard UI with Collapsible Sidebar and Theme Support

A responsive Next.js dashboard application featuring a collapsible sidebar, dark mode support, and a modern UI design. Built with TypeScript, Tailwind CSS, and Lucide icons, this dashboard provides a clean and intuitive interface for managing business operations.

The dashboard combines modern web technologies with practical business features, offering a responsive layout that works seamlessly across desktop and mobile devices. It features an expandable/collapsible sidebar navigation system, theme customization options, and a clean, professional design that prioritizes user experience.

## Pointsale Dashboard

## Features Preview

![Dashboard Interface](/src/docs/dashboard-overview.gif)

## Repository Structure

``` javascript
.
├── src/                          # Source code directory
│   ├── app/                      # Next.js app directory
│   │   ├── hooks/               # Custom React hooks
│   │   │   └── use-theme.tsx    # Theme management hook
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main entry point
│   └── components/              # React components
│       ├── dashboard.tsx        # Main dashboard layout
│       ├── sidebar.tsx          # Collapsed sidebar view
│       ├── sidebar-content.tsx  # Expanded sidebar view
│       └── theme-provider.tsx   # Theme context provider
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── package.json                # Project dependencies and scripts
```

## Usage Instructions

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- Basic knowledge of React and TypeScript

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

1. Install dependencies:

```bash
npm install
# or
yarn install
```

1. Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Quick Start

1. Access the dashboard at `http://localhost:3000`
2. The sidebar can be toggled between expanded and collapsed states:

```typescript
// In your component
const [expandedSidebar, setExpandedSidebar] = useState(true);
const toggleSidebar = () => setExpandedSidebar(!expandedSidebar);
```

### More Detailed Examples

1. Theme Toggle Implementation:

```typescript
import { useTheme } from "@/app/hooks/use-theme";

function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}
```

1. Responsive Sidebar Usage:

```typescript
import { Sidebar, SidebarContent } from "@/components";

function Layout() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="flex">
      {expanded ? (
        <SidebarContent onToggle={() => setExpanded(false)} />
      ) : (
        <Sidebar onToggle={() => setExpanded(true)} />
      )}
      <main>{/* Content */}</main>
    </div>
  );
}
```

### Troubleshooting

1. Sidebar not appearing on mobile:
   - Check if the viewport meta tag is present in your HTML
   - Verify that the media queries are working correctly
   - Debug using browser developer tools mobile view

2. Theme not persisting:
   - Ensure localStorage is available
   - Check if theme provider is properly wrapped around your application
   - Verify that the theme context is being consumed correctly

## Data Flow

The dashboard implements a unidirectional data flow pattern for state management and component interactions.

```ascii
┌──────────────┐    ┌───────────────┐    ┌────────────────┐
│ ThemeContext │ -> │ Layout/Router │ -> │ Page Component │
└──────────────┘    └───────────────┘    └────────────────┘
       ↑                    ↑                     ↑
       │                    │                     │
┌──────────────┐    ┌───────────────┐    ┌────────────────┐
│  useTheme    │    │    Sidebar    │    │ SidebarContent │
└──────────────┘    └───────────────┘    └────────────────┘
```

Component Interactions:

- Theme Provider wraps the entire application providing theme context
- Layout component manages the overall structure and responsive behavior
- Sidebar components handle navigation and collapsible states
- Page components render specific route content
- Hooks manage shared state and side effects
