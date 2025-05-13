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
  
  interface SidebarProps {
    onToggle: () => void;
  }
  
  export function Sidebar({ onToggle }: SidebarProps) {
    return (
      <div className="flex h-full w-[68px] flex-col bg-white border-r border-gray-200">
        <div className="flex h-16 items-center justify-center border-b border-gray-200 relative">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <Sparkles className="h-5 w-5 text-blue-600" />
          </div>
          <button 
            className="absolute right-0 top-5 -mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50"
            onClick={onToggle}
            title="Expand sidebar"
          >
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        <div className="flex flex-1 flex-col space-y-2 p-2">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <Search className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <Inbox className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-500" />
          </button>
          <div className="h-px bg-gray-200 my-2"></div>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <LayoutGrid className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <BarChart2 className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <FileBarChart className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <FileText className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <FileSpreadsheet className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <Factory className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <Trash2 className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="mt-auto p-2 space-y-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
            <Sparkles className="h-5 w-5 text-blue-600" />
          </div>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <Settings className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <Moon className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <Palette className="h-5 w-5 text-gray-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-gray-100">
            <HelpCircle className="h-5 w-5 text-gray-500" />
          </button>
          <div className="h-12 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-gray-300 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-purple-400 to-indigo-600"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  