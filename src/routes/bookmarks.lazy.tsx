import { createLazyFileRoute } from "@tanstack/react-router";
import BookmarkContent from "../components/bookmark-content";
import BookmarkMenu from "../components/bookmark-menu";

const Bookmarks = () => {
  return (
    <div className="flex w-full">
      <div className="flex-none w-64 p-2">
        <BookmarkMenu />
      </div>
      <div className="flex-1 p-2">
        <BookmarkContent />
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute("/bookmarks")({
  component: Bookmarks,
});
