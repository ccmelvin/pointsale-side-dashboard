# Modern Dashboard UI with Advanced Features

A comprehensive Next.js dashboard application featuring a collapsible sidebar, dark mode support, data visualization, authentication, and a modern UI design. Built with TypeScript, Tailwind CSS, Chart.js, and Lucide icons, this dashboard provides a clean and intuitive interface for managing business operations.

The dashboard combines modern web technologies with practical business features, offering a responsive layout that works seamlessly across desktop and mobile devices. It features an expandable/collapsible sidebar navigation system, theme customization options, data visualization tools, and a clean, professional design that prioritizes user experience.

## Features Preview

![Dashboard Interface](/src/docs/dashboard-overview.gif)

## Key Features

- **Responsive UI Components**
  - Collapsible sidebar navigation
  - Dark/light theme support
  - Custom UI component library (buttons, cards, inputs)
  - Mobile-friendly design

- **Data Visualization**
  - Interactive line and bar charts
  - Chart.js integration
  - Responsive charts that adapt to theme changes

- **Data Management**
  - Data tables with sorting functionality
  - Mock API endpoints for data retrieval
  - Type definitions for data structures

- **Authentication System**
  - JWT-based authentication
  - Login/registration forms
  - Protected routes
  - User role-based access control

- **Dashboard Pages**
  - Main dashboard with summary metrics
  - Analytics page with detailed charts
  - Settings page for user preferences

## Repository Structure

```javascript
src/
├── app/                    
│   ├── api/                 # API routes
│   │   ├── auth/
│   │   └── data/
│   ├── dashboard/           # Dashboard pages
│   │   ├── analytics/
│   │   ├── settings/
│   │   └── page.tsx
│   ├── hooks/               
│   │   └── use-theme.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                  # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── charts/              # Chart components
│   │   ├── bar-chart.tsx
│   │   └── line-chart.tsx
│   ├── tables/              # Table components
│   │   └── data-table.tsx
│   ├── forms/               # Form components
│   │   └── auth-form.tsx
│   ├── dashboard.tsx
│   ├── sidebar.tsx
│   ├── sidebar-content.tsx
│   └── theme-provider.tsx
├── lib/                     # Utility functions
│   ├── auth.ts
│   └── utils.ts
└── types/                   # TypeScript type definitions
```

## Usage Instructions

### Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- Basic knowledge of React and TypeScript

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The development server uses Turbopack for faster builds.

### Quick Start

1. Access the dashboard at `http://localhost:3000`
2. Log in using the authentication form (for demo purposes, use any email/password)
3. Navigate through the dashboard using the sidebar navigation
4. Toggle between dark and light themes using the theme switcher
5. Explore data visualizations in the Analytics section

### Component Examples

#### 1. Theme Toggle Implementation:

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

#### 2. Responsive Sidebar Usage:

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

#### 3. Chart Implementation:

```typescript
import { LineChart } from "@/components/charts/line-chart";

function AnalyticsView() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3],
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };
  
  return (
    <div className="w-full p-4">
      <h2>Monthly Sales</h2>
      <LineChart data={data} />
    </div>
  );
}
```

#### 4. Data Table Usage:

```typescript
import { DataTable } from "@/components/tables/data-table";

function OrdersView() {
  const columns = [
    { header: 'Order ID', accessor: 'id' },
    { header: 'Customer', accessor: 'customer' },
    { header: 'Status', accessor: 'status' },
    { header: 'Amount', accessor: 'amount' }
  ];
  
  const data = [
    { id: '001', customer: 'John Doe', status: 'Completed', amount: '$120.00' },
    { id: '002', customer: 'Jane Smith', status: 'Processing', amount: '$85.50' }
  ];
  
  return <DataTable columns={columns} data={data} />;
}
```

### Troubleshooting

1. **Sidebar not appearing on mobile:**
   - Check if the viewport meta tag is present in your HTML
   - Verify that the media queries are working correctly
   - Debug using browser developer tools mobile view

2. **Theme not persisting:**
   - Ensure localStorage is available
   - Check if theme provider is properly wrapped around your application
   - Verify that the theme context is being consumed correctly

3. **Authentication issues:**
   - Clear browser cookies and local storage
   - Verify that the JWT token is being properly stored and sent with requests
   - Check browser console for any CORS-related errors
   - Ensure API routes are properly configured

4. **Charts not rendering:**
   - Verify Chart.js is properly installed
   - Check if the data format matches what the chart component expects
   - Ensure the chart container has a defined width and height
   - Look for any JavaScript errors in the console

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
                                                  ↑
┌──────────────┐    ┌───────────────┐    ┌────────────────┐
│ Auth Context │ -> │  API Routes   │ -> │ Data Components│
└──────────────┘    └───────────────┘    └────────────────┘
       ↑                    ↑                     ↑
       │                    │                     │
┌──────────────┐    ┌───────────────┐    ┌────────────────┐
│  Auth Forms  │    │  Data Tables  │    │ Chart Components│
└──────────────┘    └───────────────┘    └────────────────┘
```

### Component Interactions:

- **Theme Provider** wraps the entire application providing theme context
- **Auth Provider** manages authentication state and protected routes
- **Layout component** manages the overall structure and responsive behavior
- **Sidebar components** handle navigation and collapsible states
- **Page components** render specific route content
- **Data components** (tables, charts) display and interact with application data
- **API routes** handle data fetching, authentication, and server-side operations
- **Hooks** manage shared state and side effects

## Dependencies

- **Next.js 15.3.2** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4.1.6** - Utility-first CSS
- **Chart.js 4.4.9** - Data visualization
- **Lucide React 0.510.0** - Icon library
- **next-themes 0.4.6** - Theme management
- **jsonwebtoken 9.0.2** - Authentication
- **class-variance-authority 0.7.1** - Component styling variants
- **clsx 2.1.1** - Conditional class names
- **tailwind-merge 2.6.0** - Tailwind class merging

## Future Enhancements

Potential future improvements:

1. **Real-time Data**
   - WebSocket integration for live updates
   - Real-time notifications

2. **Advanced Analytics**
   - Data filtering and custom date ranges
   - Export functionality for reports
   - Advanced visualization options

3. **User Management**
   - Multi-user support with different roles
   - Team collaboration features
   - Activity logging

4. **Integration Options**
   - API connections to external services
   - Data import/export capabilities
   - Webhook support
