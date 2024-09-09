import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Ellipsis } from "lucide-react";

const BookmarkMenuAction = () => {
  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200", // change arrow background
        content:
          "py-1 px-1 border border-default-200 from-white to-default-200 dark:from-default-50 dark:to-black",
      }}
    >
      <DropdownTrigger>
        <Button variant="light" size="sm">
          <Ellipsis />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="bordered"
        aria-label="Dropdown menu with description"
      >
        <DropdownSection title="Actions">
          <DropdownItem key="new" shortcut="⌘N" description="Create a new file">
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            shortcut="⌘C"
            description="Copy the file link"
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key="edit"
            shortcut="⌘⇧E"
            description="Allows you to edit the file"
          >
            Edit file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            shortcut="⌘⇧D"
            description="Permanently delete the file"
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

const BookmarkMenu = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion
      variant="bordered"
      selectionMode="multiple"
      isCompact
      disableIndicatorAnimation
    >
      <AccordionItem
        key="anchor"
        aria-label="Anchor"
        indicator={<BookmarkMenuAction />}
        title="Anchor"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="moon"
        aria-label="Moon"
        indicator={<BookmarkMenuAction />}
        title="Moon"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="sun"
        aria-label="Sun"
        indicator={<BookmarkMenuAction />}
        title="Sun"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
};

export default BookmarkMenu;
