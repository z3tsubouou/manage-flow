import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { useDisclosure } from "@nextui-org/modal";
import { Delete, Edit, Ellipsis } from "lucide-react";
import BookmarkEditModal from "./bookmark-edit-modal";
import BookmarkDeleteModal from "./bookmark-delete-modal";

const BookmarkAction = () => {
  const {
    isOpen: isEditOpen,
    onOpenChange: onEditOpenChange,
    onOpen: onEditOpen,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpenChange: onDeleteOpenChange,
    onOpen: onDeleteOpen,
  } = useDisclosure();

  return (
    <>
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
            <DropdownItem
              key="edit"
              startContent={<Edit />}
              onClick={() => onEditOpen()}
            >
              Edit category
            </DropdownItem>
          </DropdownSection>
          <DropdownSection title="Danger zone">
            <DropdownItem
              key="delete"
              className="text-danger"
              color="danger"
              startContent={<Delete />}
              onClick={() => onDeleteOpen()}
            >
              Delete file
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
      <BookmarkEditModal isOpen={isEditOpen} onOpenChange={onEditOpenChange} />
      <BookmarkDeleteModal
        isOpen={isDeleteOpen}
        onOpenChange={onDeleteOpenChange}
      />
    </>
  );
};

export default BookmarkAction;
