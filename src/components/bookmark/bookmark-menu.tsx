import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { useNavigate } from "@tanstack/react-router";
import { Key } from "react";
import BookmarkAction from "./bookmark-action";
import BookmarkMenuAction from "./bookmark-menu-action";

const BookmarkMenu = () => {
  const navigate = useNavigate();

  const handleAction = (key: Key) => {
    switch (key) {
      case "unsorted":
        navigate({
          to: "/bookmarks",
        });
        break;
      default:
        navigate({
          to: "/bookmarks/$category",
          params: { category: key.toString() },
        });
        break;
    }
  };

  return (
    <Accordion
      isCompact
      disableIndicatorAnimation
      variant="bordered"
      selectionMode="multiple"
      defaultExpandedKeys={["categories"]}
    >
      <AccordionItem
        key="categories"
        aria-label="Categories"
        indicator={<BookmarkMenuAction />}
        title="Categories"
      >
        <Listbox aria-label="Actions" onAction={(key) => handleAction(key)}>
          <ListboxItem key="unsorted">Unsorted</ListboxItem>
          <ListboxItem key="social" endContent={<BookmarkAction />}>
            Social
          </ListboxItem>
        </Listbox>
      </AccordionItem>
    </Accordion>
  );
};

export default BookmarkMenu;
