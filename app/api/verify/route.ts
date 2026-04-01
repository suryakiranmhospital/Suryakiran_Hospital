import { NextResponse } from 'next/server';
import { verifyToken, getTokenFromCookie } from '@/lib/auth';

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