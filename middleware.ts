import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Routes that have CLI equivalents
const CLI_ROUTES: Record<string, string> = {
  "/": "/api/cli",
  "/about": "/api/cli/about",
  "/projects": "/api/cli/projects",
  "/contact": "/api/cli/contact",
};

// Browser-friendly redirects (section anchors on the SPA)
const BROWSER_REDIRECTS: Record<string, string> = {
  "/about": "/#about",
  "/projects": "/#projects",
  "/contact": "/#contact",
};

// Known routes that should NOT be redirected
const KNOWN_ROUTES = new Set(["/", "/resume", "/admin", "/admin/dashboard"]);

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "dev-fallback-secret-change-me"
);

export async function middleware(req: NextRequest) {
  const ua = req.headers.get("user-agent") ?? "";
  const isCLI = /curl|wget|httpie|fetch|powershell/i.test(ua);
  const pathname = req.nextUrl.pathname;

  // CLI clients → rewrite to API routes
  if (isCLI) {
    const apiRoute = CLI_ROUTES[pathname];
    if (apiRoute) {
      const url = req.nextUrl.clone();
      url.pathname = apiRoute;
      return NextResponse.rewrite(url);
    }
    // Unknown CLI path → terminal-friendly 404
    const url = req.nextUrl.clone();
    url.pathname = "/api/cli/404";
    const response = NextResponse.rewrite(url);
    response.headers.set("x-cli-path", pathname);
    return response;
  }

  // Admin dashboard — require JWT authentication
  if (pathname === "/admin/dashboard") {
    const token = req.cookies.get("admin_token")?.value;
    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }

    try {
      await jwtVerify(token, JWT_SECRET);
    } catch {
      const url = req.nextUrl.clone();
      url.pathname = "/admin";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  }

  // Admin login page — pass through
  if (pathname === "/admin") {
    return NextResponse.next();
  }

  // Browser clients → redirect known section paths to /#section
  const redirect = BROWSER_REDIRECTS[pathname];
  if (redirect) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    url.hash = redirect.replace("/", "");
    return NextResponse.redirect(url, 308);
  }

  // Browser clients → redirect any unknown path to /
  if (!KNOWN_ROUTES.has(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Match everything except Next internals, static files, and API routes
  matcher: ["/((?!_next|api|favicon\\.ico|.*\\.(?:png|jpg|jpeg|svg|gif|webp|ico|pdf|css|js|woff2?|ttf)).*)"],
};
