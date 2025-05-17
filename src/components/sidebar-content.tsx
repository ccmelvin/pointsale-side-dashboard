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
  ChevronDown,
  Copy,
  LogOut
} from "lucide-react"
import { useTheme } from '@/app/hooks/use-theme';
import { signOut } from '@/lib/auth';
import { useRouter } from 'next/navigation';

interface SidebarContentProps {
  onToggle: () => void;
  onNavigate: (path: string) => void;
}

export function SidebarContent({ onToggle, onNavigate }: SidebarContentProps) {
  const { toggleTheme, isDark } = useTheme();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex h-full w-[250px] flex-col bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-800">
      <div className="flex h-16 items-center px-4 border-b border-gray-200 dark:border-gray-800">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onNavigate('/')}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="font-semibold text-gray-900 dark:text-gray-100">Pointsale</span>
        </div>
        <button className="ml-auto" onClick={onToggle}>
          <Copy className="h-5 w-5 text-gray-400 dark:text-gray-500" />
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <div 
            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => onNavigate('/search')}
          >
            <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-300">Quick search</span>
          </div>
        </div>

        <div className="p-2">
          <div 
            className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => onNavigate('/inbox')}
          >
            <div className="flex items-center gap-2">
              <Inbox className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-gray-100">Inbox</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">12</span>
          </div>

          <div 
            className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => onNavigate('/notifications')}
          >
            <div className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-gray-100">Notifications</span>
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-400">15+</span>
          </div>
        </div>

        <div className="p-2">
          <div className="px-3 py-1">
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Menu</span>
          </div>

          <div className="mt-1 space-y-1">
            <div 
              className="flex items-center gap-2 rounded-md bg-gray-100 dark:bg-gray-800 px-3 py-2 cursor-pointer"
              onClick={() => onNavigate('/dashboard')}
            >
              <LayoutGrid className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-gray-100">Dashboard</span>
            </div>

            <div 
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => onNavigate('/dashboard/analytics')}
            >
              <BarChart2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-gray-100">Product analytics</span>
            </div>

            <div 
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => onNavigate('/reports')}
            >
              <FileBarChart className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-gray-100">Reporting</span>
            </div>

            <div 
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => onNavigate('/orders')}
            >
              <FileText className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-gray-100">Order summary</span>
            </div>

            <div 
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => onNavigate('/invoices')}
            >
              <FileSpreadsheet className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-gray-100">Invoices</span>
            </div>

            <div 
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => onNavigate('/manufacturers')}
            >
              <Factory className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-gray-100">Manufactures</span>
            </div>

            <div 
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
              onClick={() => onNavigate('/trash')}
            >
              <Trash2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <span className="text-sm text-gray-900 dark:text-gray-100">Trash</span>
            </div>
          </div>
        </div>

        <div className="mx-2 my-4 rounded-md bg-blue-50 dark:bg-blue-900/20 p-3">
          <div className="mb-2 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800">
              <Sparkles className="h-3 w-3 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Current plan:</div>
              <div className="text-sm font-medium dark:text-gray-200">Pro trial</div>
            </div>
          </div>
          <p className="mb-3 text-xs text-gray-600 dark:text-gray-300">Upgrade to Pro to get the latest and exclusive features</p>
          <button 
            className="flex w-full items-center justify-center gap-1 rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => onNavigate('/upgrade')}
          >
            <Sparkles className="h-4 w-4" />
            Upgrade to Pro
          </button>
        </div>

        <div className="p-2">
          <div 
            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => onNavigate('/dashboard/settings')}
          >
            <Settings className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-900 dark:text-gray-100">Preferences</span>
          </div>

          <div 
            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => {
              toggleTheme();
              // We don't navigate here since it's just toggling the theme
            }}
          >
            <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-900 dark:text-gray-100">
              {isDark ? 'Light mode' : 'Dark mode'}
            </span>
          </div>

          <div 
            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => onNavigate('/themes')}
          >
            <Palette className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-900 dark:text-gray-100">Themes</span>
          </div>

          <div 
            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            onClick={() => onNavigate('/help')}
          >
            <HelpCircle className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-900 dark:text-gray-100">Help</span>
          </div>
          
          <div 
            className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer text-red-500 dark:text-red-400"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5" />
            <span className="text-sm">Logout</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800 p-3">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => onNavigate('/profile')}
        >
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-purple-400 to-indigo-600"></div>
            </div>
            <div>
              <div className="text-sm font-medium dark:text-gray-100">Sao Paulo</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Pro trial</div>
            </div>
          </div>
          <button>
            <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  )
}
