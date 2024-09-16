import { createFileRoute } from "@tanstack/react-router";
import BookmarkContent from "../../../components/bookmark/bookmark-content";

const Bookmarks = () => {
  return <BookmarkContent />;
};

export const Route = createFileRoute("/_bookmarks/bookmarks/$category")({
  component: Bookmarks,
  loader: async ({ params }) => {
    console.log(params);
    return [];
  },
});
