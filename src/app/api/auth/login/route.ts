import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sign } from 'jsonwebtoken';

// In a real application, you would validate against a database
// This is just a simple example for demonstration purposes
const MOCK_USERS = [
  {
    id: '1',
    email: 'admin@example.com',
    password: 'password123', // In a real app, this would be hashed
    name: 'Admin User',
    role: 'admin',
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'password123', // In a real app, this would be hashed
    name: 'Regular User',
    role: 'user',
  },
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }
    
    // Find user by email
    const user = MOCK_USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    
    // Check if user exists and password matches
    if (!user || user.password !== password) {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
    
    // Create a JWT token
    const token = sign(
      { 
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role 
      },
      process.env.JWT_SECRET || 'dashboard-secret-key',
      { expiresIn: '1d' }
    );
    
    // Set the token in a cookie
    cookies().set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
      sameSite: 'strict',
    });
    
    // Return user data (excluding password)
    const { password: _, ...userData } = user;
    
    return NextResponse.json({
      success: true,
      message: 'Login successful',
      user: userData,
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
