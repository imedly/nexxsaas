import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/projects(.*)", "/payments(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    "/payments/checkout-success",  // Route protégée
    "/((?!.*\\..*|_next).*)", "/", 
    "/(api|trpc)(.*)"
  ],
};