import { createLazyFileRoute } from "@tanstack/react-router";
import BookmarkContent from "../../../components/bookmark/bookmark-content";

const Bookmarks = () => {
  return <BookmarkContent />;
};

export const Route = createLazyFileRoute("/_bookmarks/bookmarks/")({
  component: Bookmarks,
});
