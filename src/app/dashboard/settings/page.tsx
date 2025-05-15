'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/app/hooks/use-theme';

export default function SettingsPage() {
  const { toggleTheme, isDark } = useTheme();
  const [user, setUser] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'Administrator',
  });
  
  const [profile, setProfile] = useState({
    name: user.name,
    email: user.email,
  });
  
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
  });
  
  const [isSaving, setIsSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setUser({
        ...user,
        name: profile.name,
        email: profile.email,
      });
      setIsSaving(false);
      setSuccessMessage('Profile updated successfully');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1000);
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      setPassword({
        current: '',
        new: '',
        confirm: '',
      });
      setIsSaving(false);
      setSuccessMessage('Password updated successfully');
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1000);
  };
  
  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications({
      ...notifications,
      [key]: !notifications[key],
    });
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}
      
      {/* Profile Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Settings</CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Role
              </label>
              <Input
                value={user.role}
                disabled
                className="bg-gray-50 dark:bg-gray-800"
              />
            </div>
            
            <Button type="submit" isLoading={isSaving}>
              Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {/* Password Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
          <CardDescription>Update your password</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="current-password" className="text-sm font-medium">
                Current Password
              </label>
              <Input
                id="current-password"
                type="password"
                value={password.current}
                onChange={(e) => setPassword({ ...password, current: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="new-password" className="text-sm font-medium">
                New Password
              </label>
              <Input
                id="new-password"
                type="password"
                value={password.new}
                onChange={(e) => setPassword({ ...password, new: e.target.value })}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-sm font-medium">
                Confirm New Password
              </label>
              <Input
                id="confirm-password"
                type="password"
                value={password.confirm}
                onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
              />
            </div>
            
            <Button type="submit" isLoading={isSaving}>
              Update Password
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {/* Appearance Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Customize the look and feel</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">Dark Mode</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Toggle between light and dark themes
              </p>
            </div>
            <Button
              variant="outline"
              onClick={toggleTheme}
            >
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Notification Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium">Email Notifications</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive notifications via email
              </p>
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
              <h3 className="text-sm font-medium">Push Notifications</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive push notifications in your browser
              </p>
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
              <h3 className="text-sm font-medium">Marketing Emails</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Receive marketing and promotional emails
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={notifications.marketing}
                onChange={() => handleNotificationChange('marketing')}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => setSuccessMessage('Notification preferences saved')}>
            Save Preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
