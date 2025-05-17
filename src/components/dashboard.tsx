"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { SidebarContent } from "@/components/sidebar-content"
import { DashboardContent } from "@/components/dashboard-content"
import { AnalyticsContent } from "@/components/analytics-content"
import { OrdersContent } from "@/components/orders-content"
import { InvoicesContent } from "@/components/invoices-content"
import { SettingsContent } from "@/components/settings-content"
import { ProfileContent } from "@/components/profile-content"
import { NotificationsContent } from "@/components/notifications-content"
import { InboxContent } from "@/components/inbox-content"
import { ReportsContent } from "@/components/reports-content"
import { ManufacturersContent } from "@/components/manufacturers-content"

export function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [expandedSidebar, setExpandedSidebar] = useState(true)
  const [currentPage, setCurrentPage] = useState("Dashboard")
  const [currentPath, setCurrentPath] = useState("/dashboard")

  const toggleSidebar = () => {
    setExpandedSidebar(!expandedSidebar)
  }

  // Function to handle navigation from sidebar
  const handleNavigation = (path: string) => {
    setCurrentPath(path)
    
    // Map paths to titles
    if (path === "/dashboard") {
      setCurrentPage("Dashboard")
    } else if (path === "/dashboard/analytics") {
      setCurrentPage("Analytics")
    } else if (path === "/reports") {
      setCurrentPage("Reports")
    } else if (path === "/orders") {
      setCurrentPage("Orders")
    } else if (path === "/invoices") {
      setCurrentPage("Invoices")
    } else if (path === "/manufacturers") {
      setCurrentPage("Manufacturers")
    } else if (path === "/dashboard/settings") {
      setCurrentPage("Settings")
    } else if (path === "/profile") {
      setCurrentPage("Profile")
    } else if (path === "/inbox") {
      setCurrentPage("Inbox")
    } else if (path === "/notifications") {
      setCurrentPage("Notifications")
    } else if (path === "/search") {
      setCurrentPage("Search")
    } else if (path === "/themes") {
      setCurrentPage("Themes")
    } else if (path === "/help") {
      setCurrentPage("Help")
    } else if (path === "/trash") {
      setCurrentPage("Trash")
    } else if (path === "/upgrade") {
      setCurrentPage("Upgrade")
    } else {
      setCurrentPage("Dashboard")
    }
  }

  // Render the appropriate content based on the current page
  const renderContent = () => {
    switch (currentPath) {
      case "/dashboard":
        return <DashboardContent />
      case "/dashboard/analytics":
        return <AnalyticsContent />
      case "/orders":
        return <OrdersContent />
      case "/invoices":
        return <InvoicesContent />
      case "/dashboard/settings":
        return <SettingsContent />
      case "/profile":
        return <ProfileContent />
      case "/inbox":
        return <InboxContent />
      case "/notifications":
        return <NotificationsContent />
      case "/reports":
        return <ReportsContent />
      case "/manufacturers":
        return <ManufacturersContent />
      default:
        // For other pages, show a generic content
        return (
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{currentPage}</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              This is the {currentPage.toLowerCase()} page. Content for this page is coming soon.
            </p>
            <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {currentPage} Content
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                This area would display the content for the {currentPage.toLowerCase()} page.
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600">
                <code className="text-sm">Path: {currentPath}</code>
              </div>
            </div>
          </div>
        )
    }
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      <div className="hidden md:flex">
        {!expandedSidebar && (
          <Sidebar 
            onToggle={toggleSidebar} 
            onNavigate={handleNavigation}
          />
        )}
        {expandedSidebar && (
          <SidebarContent 
            onToggle={toggleSidebar} 
            onNavigate={handleNavigation}
          />
        )}
      </div>
      <div className={`fixed inset-0 z-40 md:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        <div className="relative flex h-full">
          <Sidebar 
            onToggle={toggleSidebar} 
            onNavigate={(path) => {
              handleNavigation(path);
              setSidebarOpen(false);
            }}
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
      <button
        className="fixed bottom-4 right-4 rounded-full bg-blue-600 p-3 text-white shadow-lg md:hidden"
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
