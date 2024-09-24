import { createRootRoute, Outlet } from '@tanstack/react-router';
import React from 'react';
import NavbarComponent from '../components/nav-bar';

const TanStackRouterDevtools = import.meta.env.PROD
	? () => null // Render nothing in production
	: React.lazy(() =>
			// Lazy load in development
			import('@tanstack/router-devtools').then((res) => ({
				default: res.TanStackRouterDevtools
				// For Embedded Mode
				// default: res.TanStackRouterDevtoolsPanel
			}))
		);

export const Route = createRootRoute({
	component: () => (
		<div className="flex min-h-dvh flex-col bg-[#f7f7f7] dark:bg-[#011]">
			<header>
				<NavbarComponent />
			</header>
			<main className="flex flex-auto">
				<Outlet />
			</main>
			<TanStackRouterDevtools />
		</div>
	)
});
