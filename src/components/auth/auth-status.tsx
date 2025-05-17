'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { signOut, getUser } from '@/lib/auth';
import { LogOut, LogIn } from 'lucide-react';

export function AuthStatus() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      try {
        const { user } = await getUser();
        setUser(user);
      } catch (error) {
        console.error('Error loading user:', error);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, []);

  const handleLogin = () => {
    router.push('/login');
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return <div className="h-9 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>;
  }

  return user ? (
    <div className="flex items-center gap-2">
      <span className="text-sm hidden md:inline text-gray-900 dark:text-gray-100">
        {user.email}
      </span>
      <Button variant="outline" size="sm" onClick={handleLogout} className="flex items-center gap-1">
        <LogOut className="h-4 w-4" />
        <span>Logout</span>
      </Button>
    </div>
  ) : (
    <Button size="sm" onClick={handleLogin} className="flex items-center gap-1">
      <LogIn className="h-4 w-4" />
      <span>Login</span>
    </Button>
  );
}
