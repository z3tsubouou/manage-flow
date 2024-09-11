import { createLazyFileRoute } from "@tanstack/react-router";
import BookmarkContent from "../components/bookmark/bookmark-content";
import BookmarkMenu from "../components/bookmark/bookmark-menu";
import BookmarkHeader from "../components/bookmark/bookmark-header";

const Bookmarks = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="flex-none lg:w-64 p-2">
        <BookmarkMenu />
      </div>
      <div className="flex-1 p-2 space-y-2">
        <BookmarkHeader />
        <BookmarkContent />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/bookmarks")({
  component: Bookmarks,
});
