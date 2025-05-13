"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { SidebarContent } from "@/components/sidebar-content"

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSidebar, setExpandedSidebar] = useState(true)

  const toggleSidebar = () => {
    setExpandedSidebar(!expandedSidebar)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="hidden md:flex">
        {!expandedSidebar && <Sidebar onToggle={toggleSidebar} />}
        {expandedSidebar && <SidebarContent onToggle={toggleSidebar} />}
      </div>
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex h-full">
          <Sidebar onToggle={toggleSidebar} />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">Welcome to your Pointsale dashboard.</p>
        </div>
      </div>
      <button
        className="fixed bottom-4 right-4 rounded-full bg-primary p-3 text-white shadow-lg md:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  )
}
