'use client';

import { useRouter } from 'next/navigation';
import { AuthForm } from '@/components/forms/auth-form';

export default function LoginPage() {
  const router = useRouter();
  
  const handleAuthSuccess = () => {
    router.push('/');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Login to access the dashboard
          </p>
        </div>
        
        <AuthForm onSuccess={handleAuthSuccess} />
      </div>
    </div>
  );
}
