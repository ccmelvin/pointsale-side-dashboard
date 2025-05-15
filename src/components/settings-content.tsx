'use client';

import { useState } from 'react';
import { useTheme } from '@/app/hooks/use-theme';

export function SettingsContent() {
  const { toggleTheme, isDark } = useTheme();
  
  // User profile state
  const [profile, setProfile] = useState({
    name: 'Sao Paulo',
    email: 'admin@pointsale.com',
    role: 'Administrator',
    company: 'Pointsale Inc.',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA'
  });
  
  // Password state
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: ''
  });
  
  // Notification preferences
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    orderUpdates: true,
    newsletter: false,
    promotions: true
  });
  
  // Appearance settings
  const [appearance, setAppearance] = useState({
    theme: isDark ? 'dark' : 'light',
    density: 'comfortable',
    colorScheme: 'blue'
  });
  
  // Success message state
  const [successMessage, setSuccessMessage] = useState('');
  const [activeTab, setActiveTab] = useState('profile');
  
  // Handle profile form submission
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSuccessMessage('Profile updated successfully');
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 500);
  };
  
  // Handle password form submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate password
    if (password.new !== password.confirm) {
      alert('New passwords do not match');
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setPassword({
        current: '',
        new: '',
        confirm: ''
      });
      setSuccessMessage('Password updated successfully');
      setTimeout(() => setSuccessMessage(''), 3000);
    }, 500);
  };
  
  // Handle notification toggle
  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // Handle appearance change
  const handleAppearanceChange = (key: keyof typeof appearance, value: string) => {
    if (key === 'theme') {
      toggleTheme();
    }
    
    setAppearance(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Settings</h1>
      </div>
      
      {successMessage && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'profile'
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'password'
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Password
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'notifications'
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Notifications
            </button>
            <button
              onClick={() => setActiveTab('appearance')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'appearance'
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Appearance
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {/* Profile Settings */}
          {activeTab === 'profile' && (
            <form onSubmit={handleProfileSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.company}
                    onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={profile.role}
                    disabled
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Changes
                </button>
              </div>
            </form>
          )}
          
          {/* Password Settings */}
          {activeTab === 'password' && (
            <form onSubmit={handlePasswordSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    id="current-password"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={password.current}
                    onChange={(e) => setPassword({ ...password, current: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="new-password"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={password.new}
                    onChange={(e) => setPassword({ ...password, new: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={password.confirm}
                    onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
                    required
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Update Password
                </button>
              </div>
            </form>
          )}
          
          {/* Notification Settings */}
          {activeTab === 'notifications' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Notification Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Email Notifications</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notifications.email}
                      onChange={() => handleNotificationChange('email')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Push Notifications</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive push notifications in your browser</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notifications.push}
                      onChange={() => handleNotificationChange('push')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">SMS Notifications</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via SMS</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={notifications.sms}
                      onChange={() => handleNotificationChange('sms')}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-4">Notification Types</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Order Updates</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Notifications about your orders</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notifications.orderUpdates}
                          onChange={() => handleNotificationChange('orderUpdates')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Newsletter</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Weekly newsletter and updates</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notifications.newsletter}
                          onChange={() => handleNotificationChange('newsletter')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">Promotions</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Deals and promotional offers</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={notifications.promotions}
                          onChange={() => handleNotificationChange('promotions')}
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={() => {
                    setSuccessMessage('Notification preferences saved');
                    setTimeout(() => setSuccessMessage(''), 3000);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
          
          {/* Appearance Settings */}
          {activeTab === 'appearance' && (
            <div>
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Appearance Settings</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Theme</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`p-4 border rounded-md cursor-pointer ${
                        appearance.theme === 'light'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      onClick={() => handleAppearanceChange('theme', 'light')}
                    >
                      <div className="h-20 bg-white border border-gray-200 rounded-md mb-2"></div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Light</div>
                    </div>
                    
                    <div
                      className={`p-4 border rounded-md cursor-pointer ${
                        appearance.theme === 'dark'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      onClick={() => handleAppearanceChange('theme', 'dark')}
                    >
                      <div className="h-20 bg-gray-900 border border-gray-700 rounded-md mb-2"></div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Dark</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Density</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div
                      className={`p-4 border rounded-md cursor-pointer ${
                        appearance.density === 'compact'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      onClick={() => handleAppearanceChange('density', 'compact')}
                    >
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Compact</div>
                    </div>
                    
                    <div
                      className={`p-4 border rounded-md cursor-pointer ${
                        appearance.density === 'comfortable'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      onClick={() => handleAppearanceChange('density', 'comfortable')}
                    >
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Comfortable</div>
                    </div>
                    
                    <div
                      className={`p-4 border rounded-md cursor-pointer ${
                        appearance.density === 'spacious'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      onClick={() => handleAppearanceChange('density', 'spacious')}
                    >
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Spacious</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">Color Scheme</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div
                      className={`p-4 border rounded-md cursor-pointer ${
                        appearance.colorScheme === 'blue'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      onClick={() => handleAppearanceChange('colorScheme', 'blue')}
                    >
                      <div className="h-8 bg-blue-600 rounded-md mb-2"></div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Blue</div>
                    </div>
                    
                    <div
                      className={`p-4 border rounded-md cursor-pointer ${
                        appearance.colorScheme === 'green'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      onClick={() => handleAppearanceChange('colorScheme', 'green')}
                    >
                      <div className="h-8 bg-green-600 rounded-md mb-2"></div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Green</div>
                    </div>
                    
                    <div
                      className={`p-4 border rounded-md cursor-pointer ${
                        appearance.colorScheme === 'purple'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      onClick={() => handleAppearanceChange('colorScheme', 'purple')}
                    >
                      <div className="h-8 bg-purple-600 rounded-md mb-2"></div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Purple</div>
                    </div>
                    
                    <div
                      className={`p-4 border rounded-md cursor-pointer ${
                        appearance.colorScheme === 'orange'
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-300 dark:border-gray-700'
                      }`}
                      onClick={() => handleAppearanceChange('colorScheme', 'orange')}
                    >
                      <div className="h-8 bg-orange-600 rounded-md mb-2"></div>
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100">Orange</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  onClick={() => {
                    setSuccessMessage('Appearance settings saved');
                    setTimeout(() => setSuccessMessage(''), 3000);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
