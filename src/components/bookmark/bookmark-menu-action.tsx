import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useDisclosure } from "@nextui-org/modal";
import { Ellipsis, Plus } from "lucide-react";
import BookmarkMenuNewModal from "./bookmark-menu-new-modal";

const BookmarkMenuAction = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Dropdown
        showArrow
        backdrop="blur"
        classNames={{
          base: "before:bg-default-200", // change arrow background
          content:
            "py-1 px-1 border border-default-200 from-white to-default-200 dark:from-default-50 dark:to-black",
        }}
      >
        <DropdownTrigger>
          <Button variant="light" size="md">
            <Ellipsis />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          variant="bordered"
          aria-label="Dropdown menu with description"
        >
          <DropdownSection title="Actions">
            <DropdownItem
              key="new"
              startContent={<Plus />}
              onClick={() => onOpen()}
            >
              New category
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <BookmarkMenuNewModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default BookmarkMenuAction;
