import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });
  let refreshCookies: { name: string; value: string; options: CookieOptions }[] =
    [];
  let refreshHeaders: Record<string, string> = {};

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
          refreshCookies = cookiesToSet;
          refreshHeaders = headers;
          Object.entries(headers).forEach(([key, value]) =>
            supabaseResponse.headers.set(key, value)
          );
        },
      },
    }
  );

  const { data } = await supabase.auth.getClaims();
  const isAuthenticated = Boolean(data?.claims);
  const { pathname } = request.nextUrl;

  if (!isAuthenticated && pathname !== "/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    const redirectResponse = NextResponse.redirect(url);

    refreshCookies.forEach(({ name, value, options }) =>
      redirectResponse.cookies.set(name, value, options)
    );

    ["cache-control", "expires", "pragma"].forEach((header) => {
      const value = refreshHeaders[header];
      if (value) redirectResponse.headers.set(header, value);
    });

    return redirectResponse;
  }

  if (isAuthenticated && pathname === "/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    const redirectResponse = NextResponse.redirect(url);

    refreshCookies.forEach(({ name, value, options }) =>
      redirectResponse.cookies.set(name, value, options)
    );

    ["cache-control", "expires", "pragma"].forEach((header) => {
      const value = refreshHeaders[header];
      if (value) redirectResponse.headers.set(header, value);
    });

    return redirectResponse;
  }

  return supabaseResponse;
}
