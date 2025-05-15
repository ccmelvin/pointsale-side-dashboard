'use client';

import { useState } from 'react';

export function ProfileContent() {
  // User profile data
  const [profile] = useState({
    name: 'Sao Paulo',
    role: 'Administrator',
    email: 'admin@pointsale.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    company: 'Pointsale Inc.',
    bio: 'Product manager with 5+ years of experience in SaaS and e-commerce platforms. Passionate about creating intuitive user experiences and data-driven decision making.',
    joinDate: 'January 2023',
    website: 'www.pointsale.com',
    socialLinks: {
      twitter: '@pointsale',
      linkedin: 'linkedin.com/company/pointsale',
      github: 'github.com/pointsale'
    }
  });

  // Activity data
  const [recentActivity] = useState([
    { type: 'order', action: 'created', target: 'Order #ORD-7291', date: '2025-05-15 14:32' },
    { type: 'invoice', action: 'sent', target: 'Invoice #INV-2025-001', date: '2025-05-15 14:35' },
    { type: 'settings', action: 'updated', target: 'Profile settings', date: '2025-05-14 10:15' },
    { type: 'product', action: 'added', target: 'New product: Wireless Headphones', date: '2025-05-13 16:22' },
    { type: 'customer', action: 'added', target: 'New customer: John Smith', date: '2025-05-12 09:45' },
    { type: 'report', action: 'generated', target: 'Monthly sales report', date: '2025-05-10 17:30' },
  ]);

  // Stats data
  const [stats] = useState({
    ordersCreated: 152,
    productsManaged: 87,
    reportsGenerated: 34,
    customersAdded: 63
  });

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Profile</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 mb-4"></div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{profile.name}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{profile.role}</p>
                <div className="mt-4 flex space-x-3">
                  <button className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-md text-sm">
                    Message
                  </button>
                  <button className="px-3 py-1 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-md text-sm">
                    Follow
                  </button>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex items-center mb-3">
                  <svg className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-sm text-gray-900 dark:text-gray-100">{profile.email}</span>
                </div>
                <div className="flex items-center mb-3">
                  <svg className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-sm text-gray-900 dark:text-gray-100">{profile.phone}</span>
                </div>
                <div className="flex items-center mb-3">
                  <svg className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-sm text-gray-900 dark:text-gray-100">{profile.location}</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                  <span className="text-sm text-gray-900 dark:text-gray-100">{profile.company}</span>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Bio</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{profile.bio}</p>
              </div>

              <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">Social Links</h3>
                <div className="flex space-x-3">
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow mt-6">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.ordersCreated}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Orders Created</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.productsManaged}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Products Managed</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.reportsGenerated}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Reports Generated</div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.customersAdded}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Customers Added</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Recent Activity</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-6">
                {recentActivity.map((activity, index) => (
                  <li key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 mt-1">
                      {activity.type === 'order' && (
                        <div className="h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                          <svg className="h-4 w-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                          </svg>
                        </div>
                      )}
                      {activity.type === 'invoice' && (
                        <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                          <svg className="h-4 w-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </div>
                      )}
                      {activity.type === 'settings' && (
                        <div className="h-6 w-6 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                          <svg className="h-4 w-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          </svg>
                        </div>
                      )}
                      {activity.type === 'product' && (
                        <div className="h-6 w-6 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center">
                          <svg className="h-4 w-4 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                          </svg>
                        </div>
                      )}
                      {activity.type === 'customer' && (
                        <div className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                          <svg className="h-4 w-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                      )}
                      {activity.type === 'report' && (
                        <div className="h-6 w-6 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                          <svg className="h-4 w-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 dark:text-gray-100">
                        You {activity.action} <span className="font-medium">{activity.target}</span>
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{activity.date}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View all activity</button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow mt-6">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Account Information</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Account Details</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Member Since</div>
                      <div className="text-sm text-gray-900 dark:text-gray-100">{profile.joinDate}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Website</div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">{profile.website}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Account Type</div>
                      <div className="text-sm text-gray-900 dark:text-gray-100">Pro Trial</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Security</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Two-Factor Authentication</div>
                      <div className="text-sm text-green-600 dark:text-green-400">Enabled</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Last Password Change</div>
                      <div className="text-sm text-gray-900 dark:text-gray-100">April 12, 2025</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Last Login</div>
                      <div className="text-sm text-gray-900 dark:text-gray-100">May 15, 2025 - 08:42 AM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
