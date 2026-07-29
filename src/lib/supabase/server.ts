import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch (error) {
            if (
              error instanceof Error &&
              "digest" in error &&
              error.digest === "NEXT_SERVER_COMPONENT_COOKIE_MUTATION"
            ) {
              // Expected when called from a Server Component.
              return;
            }
            throw error;
          }
        },
      },
    }
  );
}
