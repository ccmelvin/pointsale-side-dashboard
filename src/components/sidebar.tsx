import {
  Search,
  Inbox,
  Bell,
  LayoutGrid,
  BarChart2,
  FileBarChart,
  FileText,
  FileSpreadsheet,
  Factory,
  Trash2,
  Settings,
  Moon,
  Palette,
  HelpCircle,
  Sparkles,
  ChevronRight,
} from "lucide-react"
import { useTheme } from '@/app/hooks/use-theme';

interface SidebarProps {
  onToggle: () => void;
  onNavigate: (path: string) => void;
}

export function Sidebar({ onToggle, onNavigate }: SidebarProps) {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex h-full w-[68px] flex-col bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex h-16 items-center justify-center border-b border-gray-200 dark:border-gray-800 relative">
        <div 
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 cursor-pointer"
          onClick={() => onNavigate('/')}
        >
          <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <button 
          className="absolute right-0 top-5 -mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700"
          onClick={onToggle}
          title="Expand sidebar"
        >
          <ChevronRight className="h-4 w-4 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-2">
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/search')}
        >
          <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/inbox')}
        >
          <Inbox className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/notifications')}
        >
          <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <div className="h-px bg-gray-200 dark:bg-gray-700 my-2"></div>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/dashboard')}
        >
          <LayoutGrid className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/dashboard/analytics')}
        >
          <BarChart2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/reports')}
        >
          <FileBarChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/orders')}
        >
          <FileText className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/invoices')}
        >
          <FileSpreadsheet className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/manufacturers')}
        >
          <Factory className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/trash')}
        >
          <Trash2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>
      <div className="mt-auto p-2 space-y-2">
        <div 
          className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 cursor-pointer"
          onClick={() => onNavigate('/upgrade')}
        >
          <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/dashboard/settings')}
        >
          <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => {
            toggleTheme();
            // We don't navigate here since it's just toggling the theme
          }}
        >
          <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/themes')}
        >
          <Palette className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <button 
          className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => onNavigate('/help')}
        >
          <HelpCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
        </button>
        <div 
          className="h-12 flex items-center justify-center cursor-pointer"
          onClick={() => onNavigate('/profile')}
        >
          <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-br from-purple-400 to-indigo-600"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
