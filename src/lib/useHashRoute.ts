import { useEffect, useState } from "react";

export type Route = "home" | "services" | "about" | "contact";

const routes: Record<string, Route> = {
  "/": "home",
  "/services": "services",
  "/about": "about",
  "/contact": "contact",
};

function parseHash(): Route {
  const raw = window.location.hash.replace(/^#/, "").split("?")[0];
  const path = raw === "" ? "/" : raw.replace(/\/+$/, "") || "/";
  return routes[path] ?? "home";
}

/**
 * Lightweight hash router.
 * Reads `window.location.hash` (e.g. `#/services`) and re-renders on change.
 * Designed for single-file builds where server-side fallback config is not guaranteed.
 */
export function useHashRoute() {
  const [route, setRoute] = useState<Route>(parseHash);

  useEffect(() => {
    const onChange = () => setRoute(parseHash());
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  // Keep the URL bar honest for the home page
  useEffect(() => {
    if (window.location.hash === "" || window.location.hash === "#/") {
      window.location.hash = "#/";
    }
  }, []);

  return route;
}

export function navigate(path: string) {
  if (window.location.hash === `#${path}`) return;
  window.location.hash = path;
  window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
}
