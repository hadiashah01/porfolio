import { NextResponse } from "next/server";

/**
 * Auth protection for /dashboard routes will be implemented in Phase 3.
 * This middleware currently passes all requests through unchanged.
 */
export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
