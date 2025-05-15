import { cookies } from 'next/headers';
import { verify } from 'jsonwebtoken';
import { NextRequest, NextResponse } from 'next/server';

export interface UserData {
  id: string;
  email: string;
  name: string;
  role: string;
}

/**
 * Get the current authenticated user from the JWT token in cookies
 */
export function getCurrentUser(): UserData | null {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token')?.value;
    
    if (!token) {
      return null;
    }
    
    const decoded = verify(token, process.env.JWT_SECRET || 'dashboard-secret-key');
    return decoded as UserData;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

/**
 * Middleware to protect routes that require authentication
 */
export function withAuth(handler: (req: NextRequest) => Promise<NextResponse>) {
  return async (req: NextRequest) => {
    const token = req.cookies.get('auth-token')?.value;
    
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    
    try {
      verify(token, process.env.JWT_SECRET || 'dashboard-secret-key');
      return handler(req);
    } catch (error) {
      // Token is invalid or expired
      return NextResponse.redirect(new URL('/login', req.url));
    }
  };
}

/**
 * Check if a user has a specific role
 */
export function hasRole(user: UserData | null, role: string | string[]): boolean {
  if (!user) return false;
  
  if (Array.isArray(role)) {
    return role.includes(user.role);
  }
  
  return user.role === role;
}

/**
 * Logout the current user by removing the auth cookie
 */
export function logout() {
  cookies().delete('auth-token');
}
