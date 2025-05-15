'use client';

import { useState } from 'react';

export function NotificationsContent() {
  // Sample data for notifications
  const [notifications] = useState([
    {
      id: 'notif-001',
      type: 'order',
      title: 'New Order Received',
      message: 'Order #ORD-7291 has been placed by John Smith.',
      time: '5 minutes ago',
      read: false
    },
    {
      id: 'notif-002',
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of $129.99 has been received for order #ORD-7291.',
      time: '10 minutes ago',
      read: false
    },
    {
      id: 'notif-003',
      type: 'system',
      title: 'System Update',
      message: 'The system will undergo maintenance tonight from 2 AM to 4 AM UTC.',
      time: '1 hour ago',
      read: false
    },
    {
      id: 'notif-004',
      type: 'alert',
      title: 'Low Stock Alert',
      message: 'Wireless Headphones (SKU: WH-2025) is running low on stock. Only 5 units remaining.',
      time: '3 hours ago',
      read: true
    },
    {
      id: 'notif-005',
      type: 'message',
      title: 'New Message',
      message: 'You have a new message from Sarah Johnson regarding order #ORD-7290.',
      time: '5 hours ago',
      read: true
    },
    {
      id: 'notif-006',
      type: 'order',
      title: 'Order Shipped',
      message: 'Order #ORD-7288 has been shipped to Emily Davis.',
      time: '1 day ago',
      read: true
    },
    {
      id: 'notif-007',
      type: 'review',
      title: 'New Product Review',
      message: 'Robert Wilson left a 5-star review for Smart Watch.',
      time: '1 day ago',
      read: true
    },
    {
      id: 'notif-008',
      type: 'system',
      title: 'Backup Completed',
      message: 'System backup has been completed successfully.',
      time: '2 days ago',
      read: true
    },
    {
      id: 'notif-009',
      type: 'payment',
      title: 'Subscription Renewed',
      message: 'Your Pro subscription has been automatically renewed.',
      time: '3 days ago',
      read: true
    },
    {
      id: 'notif-010',
      type: 'alert',
      title: 'Security Alert',
      message: 'A new login was detected from an unrecognized device.',
      time: '4 days ago',
      read: true
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [selectedNotification, setSelectedNotification] = useState<string | null>(null);

  // Filter notifications based on current filter
  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return !notification.read;
    if (filter === 'order') return notification.type === 'order';
    if (filter === 'payment') return notification.type === 'payment';
    if (filter === 'system') return notification.type === 'system';
    if (filter === 'alert') return notification.type === 'alert';
    return true;
  });

  // Get notification icon based on type
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'order':
        return (
          <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
            <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
          </div>
        );
      case 'payment':
        return (
          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        );
      case 'system':
        return (
          <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
            <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
        );
      case 'alert':
        return (
          <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
            <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
        );
      case 'message':
        return (
          <div className="h-10 w-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
            <svg className="h-6 w-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
            </svg>
          </div>
        );
      case 'review':
        return (
          <div className="h-10 w-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
            <svg className="h-6 w-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
          </div>
        );
      default:
        return (
          <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <svg className="h-6 w-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
          </div>
        );
    }
  };

  // Mark notification as read
  const markAsRead = (id: string) => {
    const updatedNotifications = notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    );
    // In a real app, you would update the state here
    // setNotifications(updatedNotifications);
  };

  // Mark all notifications as read
  const markAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({ ...notification, read: true }));
    // In a real app, you would update the state here
    // setNotifications(updatedNotifications);
  };

  // Count unread notifications
  const unreadCount = notifications.filter(notification => !notification.read).length;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Notifications</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            You have {unreadCount} unread notification{unreadCount !== 1 ? 's' : ''}
          </p>
        </div>
        <button 
          onClick={markAllAsRead}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Mark all as read
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="p-4 flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-md text-sm ${
                filter === 'all'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-3 py-1 rounded-md text-sm ${
                filter === 'unread'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter('order')}
              className={`px-3 py-1 rounded-md text-sm ${
                filter === 'order'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Orders
            </button>
            <button
              onClick={() => setFilter('payment')}
              className={`px-3 py-1 rounded-md text-sm ${
                filter === 'payment'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Payments
            </button>
            <button
              onClick={() => setFilter('system')}
              className={`px-3 py-1 rounded-md text-sm ${
                filter === 'system'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              System
            </button>
            <button
              onClick={() => setFilter('alert')}
              className={`px-3 py-1 rounded-md text-sm ${
                filter === 'alert'
                  ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              Alerts
            </button>
          </div>
        </div>

        <div className="max-h-[calc(100vh-16rem)] overflow-y-auto">
          {filteredNotifications.length > 0 ? (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredNotifications.map((notification) => (
                <li 
                  key={notification.id}
                  className={`hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                    !notification.read ? 'bg-blue-50 dark:bg-blue-900/10' : ''
                  } ${selectedNotification === notification.id ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                  onClick={() => {
                    setSelectedNotification(notification.id);
                    markAsRead(notification.id);
                  }}
                >
                  <div className="px-4 py-4 sm:px-6 flex items-start">
                    <div className="flex-shrink-0">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'}`}>
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {notification.time}
                        </p>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        {notification.message}
                      </p>
                      <div className="mt-2 flex">
                        <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                          View Details
                        </button>
                        {!notification.read && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                            New
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-6 text-center text-gray-500 dark:text-gray-400">
              No notifications found
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-center">
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
            View all notifications
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Notification Settings</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Email Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Browser Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications in your browser</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Order Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications about orders</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">System Notifications</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Receive system notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
