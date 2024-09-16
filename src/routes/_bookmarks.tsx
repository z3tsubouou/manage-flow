import { createFileRoute, Outlet } from "@tanstack/react-router";
import BookmarkHeader from "../components/bookmark/bookmark-header";
import BookmarkMenu from "../components/bookmark/bookmark-menu";

export const Route = createFileRoute("/_bookmarks")({
  component: () => (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="flex-none lg:w-64 p-2">
        <BookmarkMenu />
      </div>
      <div className="flex-1 p-2 space-y-2">
        <BookmarkHeader />
        <Outlet />
      </div>
    </div>
  ),
});

