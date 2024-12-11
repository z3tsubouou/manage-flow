import { createFileRoute, Outlet } from '@tanstack/react-router';
import BookmarkHeader from '../components/bookmark/bookmark-header';
import BookmarkMenu from '../components/bookmark/bookmark-menu';

export const Route = createFileRoute('/_bookmarks')({
	component: () => (
		<div className="flex w-full flex-col lg:flex-row">
			<div className="flex-none p-2 lg:w-64">
				<BookmarkMenu />
			</div>
			<div className="flex-1 space-y-2 p-2">
				<BookmarkHeader />
				<Outlet />
			</div>
		</div>
	)
});
