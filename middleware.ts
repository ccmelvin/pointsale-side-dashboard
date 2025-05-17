import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  
  // Create a Supabase client specifically for the middleware
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (name) => req.cookies.get(name)?.value, 
                 set: (name, value, options) => res.cookies.set({ name, value, ...options }),
                 remove: (name, options) => res.cookies.set({ name, value: '', ...options }) } }
  );
  
  // Check if the user is authenticated
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Routes that require authentication
  const protectedRoutes = ['/dashboard', '/dashboard/analytics', '/dashboard/settings'];
  
  // Authentication routes (login/register)
  const authRoutes = ['/login'];
  
  const isProtectedRoute = protectedRoutes.some(route => 
    req.nextUrl.pathname === route || req.nextUrl.pathname.startsWith(route + '/')
  );
  
  const isAuthRoute = authRoutes.some(route => 
    req.nextUrl.pathname === route || req.nextUrl.pathname.startsWith(route + '/')
  );

  // Redirect to login if trying to access a protected route without authentication
  if (isProtectedRoute && !session) {
    const redirectUrl = new URL('/login', req.url);
    return NextResponse.redirect(redirectUrl);
  }
  
  // Redirect to dashboard if already authenticated and trying to access login
  if (isAuthRoute && session) {
    const redirectUrl = new URL('/dashboard', req.url);
    return NextResponse.redirect(redirectUrl);
  }
  
  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
