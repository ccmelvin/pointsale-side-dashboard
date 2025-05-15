'use client';

import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';

interface AuthFormProps {
  mode: 'login' | 'register';
  onSubmit: (data: { email: string; password: string; name?: string }) => Promise<void>;
  isLoading?: boolean;
  error?: string;
}

export function AuthForm({ mode, onSubmit, isLoading = false, error }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    
    if (mode === 'register' && !name) {
      errors.name = 'Name is required';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    try {
      await onSubmit({ email, password, ...(mode === 'register' ? { name } : {}) });
    } catch (err) {
      console.error('Authentication error:', err);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{mode === 'login' ? 'Sign In' : 'Create Account'}</CardTitle>
        <CardDescription>
          {mode === 'login'
            ? 'Enter your credentials to access your account'
            : 'Fill in the form below to create your account'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={!!validationErrors.name}
                helperText={validationErrors.name}
                placeholder="John Doe"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!validationErrors.email}
              helperText={validationErrors.email}
              placeholder="your@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!validationErrors.password}
              helperText={validationErrors.password}
            />
          </div>
          
          {error && (
            <div className="text-sm text-red-500 mt-2">{error}</div>
          )}
          
          <Button
            type="submit"
            className="w-full"
            isLoading={isLoading}
          >
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-500">
          {mode === 'login' ? (
            <>
              Don't have an account?{' '}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </>
          )}
        </p>
      </CardFooter>
    </Card>
  );
}
