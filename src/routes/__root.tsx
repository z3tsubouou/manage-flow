import { createRootRoute, Outlet } from "@tanstack/react-router";
import React from "react";
import NavbarComponent from "../components/nav-bar";

const TanStackRouterDevtools = import.meta.env.PROD
  ? () => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import("@tanstack/router-devtools").then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    );

export const Route = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-dvh bg-[#f7f7f7] dark:bg-[#1f1f28]">
      <header>
        <NavbarComponent />
      </header>
      <main className="flex flex-auto">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </div>
  ),
});
