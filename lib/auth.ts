import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'suryakiran_hospital_secret_key_2026';
const COOKIE_NAME = 'suryakiran_token';

export interface TokenPayload {
  username: string;
  iat?: number;
  exp?: number;
}

export function generateToken(username: string): string {
  return jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
}

export function verifyToken(token: string): TokenPayload | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;
    return decoded;
  } catch {
    return null;
  }
}

export async function getTokenFromCookie(): Promise<string | null> {
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return token || null;
}

export async function setAuthCookie(token: string): Promise<void> {
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24,
    path: '/',
  });
}

export async function clearAuthCookie(): Promise<void> {
  const { cookies } = await import('next/headers');
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}