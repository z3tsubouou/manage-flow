import { RouterProvider, createRouter } from "@tanstack/react-router";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// Import the generated route tree
import { NextUIProvider } from "@nextui-org/system";
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <RouterProvider router={router} />
        </NextThemesProvider>
      </NextUIProvider>
    </StrictMode>,
  );
}
