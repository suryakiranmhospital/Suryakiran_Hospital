import { NextRequest, NextResponse } from 'next/server';
import { generateToken, setAuthCookie, verifyToken, getTokenFromCookie } from '@/lib/auth';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = '98761234';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      const token = generateToken(username);
      await setAuthCookie(token);
      
      return NextResponse.json({
        success: true,
        message: 'Login successful',
        user: { username }
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const token = await getTokenFromCookie();
    
    if (!token) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    
    if (!payload) {
      return NextResponse.json(
        { authenticated: false },
        { status: 401 }
      );
    }

    return NextResponse.json({
      authenticated: true,
      user: { username: payload.username }
    });
  } catch {
    return NextResponse.json(
      { authenticated: false },
      { status: 401 }
    );
  }
}