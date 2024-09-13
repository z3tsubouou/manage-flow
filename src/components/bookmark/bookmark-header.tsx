import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { PlusIcon, SearchIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    url: yup.string().url().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const AddBookmarkModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        <PlusIcon />
      </Button>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                Add bookmark
              </ModalHeader>
              <ModalBody>
                <Controller
                  name="url"
                  control={control}
                  render={({
                    field: { onChange, onBlur, value },
                    fieldState: { error },
                  }) => (
                    <Input
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                      type="text"
                      label="URL"
                      variant="bordered"
                      size="lg"
                      isInvalid={!!error?.message}
                      color={error?.message ? "danger" : "default"}
                      errorMessage={error?.message}
                    />
                  )}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Add
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const BookmarkHeader = () => {
  return (
    <div className="flex justify-between items-center space-x-2">
      <div>
        <Input
          label="Search"
          isClearable
          radius="lg"
          variant="bordered"
          placeholder="Type to search..."
          startContent={
            <SearchIcon
              size={16}
              className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
            />
          }
        />
      </div>
      <div>
        <AddBookmarkModal />
      </div>
    </div>
  );
};

export default BookmarkHeader;
