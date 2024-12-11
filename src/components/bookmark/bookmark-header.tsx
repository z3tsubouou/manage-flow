import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/modal';
import { useParams } from '@tanstack/react-router';
import { PlusIcon, SearchIcon } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
	.object({
		url: yup.string().url().required()
	})
	.required();

type FormData = yup.InferType<typeof schema>;

const AddBookmarkModal = () => {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const { handleSubmit, control } = useForm<FormData>({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data: FormData) => console.log(data);

	return (
		<>
			<Button color="primary" onPress={onOpen}>
				<PlusIcon />
			</Button>
			<Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
				<ModalContent>
					{(onClose) => (
						<form onSubmit={handleSubmit(onSubmit)}>
							<ModalHeader className="flex flex-col gap-1">Add bookmark</ModalHeader>
							<ModalBody>
								<Controller
									name="url"
									control={control}
									render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
										<Input
											onChange={onChange}
											onBlur={onBlur}
											value={value}
											type="text"
											label="URL"
											variant="bordered"
											size="lg"
											isInvalid={!!error?.message}
											color={error?.message ? 'danger' : 'default'}
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
	const { category } = useParams({ strict: false });

	return (
		<div className="space-y-2">
			<h1 className="xs:text-center text-3xl font-bold">{category || 'All bookmarks'}</h1>
			<div className="flex items-center justify-between space-x-2">
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
								className="pointer-events-none mb-0.5 flex-shrink-0 text-black/50 text-slate-400 dark:text-white/90"
							/>
						}
					/>
				</div>
				<div>
					<AddBookmarkModal />
				</div>
			</div>
		</div>
	);
};

export default BookmarkHeader;
