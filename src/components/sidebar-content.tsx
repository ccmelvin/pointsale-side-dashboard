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
  } from "lucide-react"
  
  interface SidebarContentProps {
    onToggle: () => void;
  }
  
  export function SidebarContent({ onToggle }: SidebarContentProps) {
    return (
      <div className="flex h-full w-[250px] flex-col bg-white border-r border-gray-200">
        <div className="flex h-16 items-center px-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <Sparkles className="h-4 w-4 text-blue-600" />
            </div>
            <span className="font-semibold text-gray-900">Pointsale</span>
          </div>
          <button className="ml-auto" onClick={onToggle}>
            <Copy className="h-5 w-5 text-gray-400" />
          </button>
        </div>
  
        <div className="flex-1 overflow-auto">
          <div className="p-2">
            <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
              <Search className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-600">Quick search</span>
            </div>
          </div>
  
          <div className="p-2">
            <div className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-100">
              <div className="flex items-center gap-2">
                <Inbox className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-900">Inbox</span>
              </div>
              <span className="text-xs text-gray-600">12</span>
            </div>
  
            <div className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-gray-100">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-900">Notifications</span>
              </div>
              <span className="text-xs text-gray-600">15+</span>
            </div>
          </div>
  
          <div className="p-2">
            <div className="px-3 py-1">
              <span className="text-xs font-medium text-gray-500">Menu</span>
            </div>
  
            <div className="mt-1 space-y-1">
              <div className="flex items-center gap-2 rounded-md bg-gray-100 px-3 py-2">
                <LayoutGrid className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-900">Dashboard</span>
              </div>
  
              <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
                <BarChart2 className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-900">Product analytics</span>
              </div>
  
              <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
                <FileBarChart className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-900">Reporting</span>
              </div>
  
              <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
                <FileText className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-900">Order summary</span>
              </div>
  
              <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
                <FileSpreadsheet className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-900">Invoices</span>
              </div>
  
              <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
                <Factory className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-900">Manufactures</span>
              </div>
  
              <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
                <Trash2 className="h-5 w-5 text-gray-500" />
                <span className="text-sm text-gray-900">Trash</span>
              </div>
            </div>
          </div>
  
          <div className="mx-2 my-4 rounded-md bg-blue-50 p-3">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100">
                <Sparkles className="h-3 w-3 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Current plan:</div>
                <div className="text-sm font-medium">Pro trial</div>
              </div>
            </div>
            <p className="mb-3 text-xs text-gray-600">Upgrade to Pro to get the latest and exclusive features</p>
            <button className="flex w-full items-center justify-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium text-blue-600 shadow-sm hover:bg-gray-50">
              <Sparkles className="h-4 w-4" />
              Upgrade to Pro
            </button>
          </div>
  
          <div className="p-2">
            <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
              <Settings className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-900">Preferences</span>
            </div>
  
            <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
              <Moon className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-900">Dark mode</span>
            </div>
  
            <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
              <Palette className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-900">Themes</span>
            </div>
  
            <div className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-gray-100">
              <HelpCircle className="h-5 w-5 text-gray-500" />
              <span className="text-sm text-gray-900">Help</span>
            </div>
          </div>
        </div>
  
        <div className="border-t border-gray-200 p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-purple-400 to-indigo-600"></div>
              </div>
              <div>
                <div className="text-sm font-medium">Sao Paulo</div>
                <div className="text-xs text-gray-500">Pro trial</div>
              </div>
            </div>
            <button>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    )
  }
  