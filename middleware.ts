import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Routes that require authentication
const protectedPaths = ['/dashboard', '/lessons', '/quiz', '/leaderboard', '/profile'];
// Routes only for unauthenticated users
const authPaths = ['/login', '/register'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check for Firebase auth session cookie
  const hasSession = request.cookies.has('firebase-auth-token');

  // Protect authenticated routes
  const isProtected = protectedPaths.some((path) => pathname.startsWith(path));
  if (isProtected && !hasSession) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Redirect logged-in users away from auth pages
  const isAuthPage = authPaths.some((path) => pathname.startsWith(path));
  if (isAuthPage && hasSession) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/lessons/:path*', '/quiz/:path*', '/leaderboard/:path*', '/profile/:path*', '/login', '/register'],
};
