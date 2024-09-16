import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import BookmarkAction from "./bookmark-action";
import BookmarkMenuAction from "./bookmark-menu-action";

const BookmarkMenu = () => {
  return (
    <Accordion
      variant="bordered"
      selectionMode="multiple"
      isCompact
      disableIndicatorAnimation
      defaultExpandedKeys={["anchor", "moon", "sun"]}
    >
      <AccordionItem
        key="categories"
        aria-label="Categories"
        indicator={<BookmarkMenuAction />}
        title="Categories"
      >
        <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
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
