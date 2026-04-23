import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const MAINTENANCE_MODE = false;

export function middleware(request: NextRequest) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  const url = request.nextUrl.clone();

  const allowedPaths = ["/"];

  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/favicon") ||
    url.pathname.startsWith("/images") ||
    url.pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  if (!allowedPaths.includes(url.pathname)) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
