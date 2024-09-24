import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@nextui-org/modal';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
	.object({
		name: yup.string().required()
	})
	.required();

type FormData = yup.InferType<typeof schema>;

const BookmarkMenuNewModal = ({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) => {
	const { handleSubmit, control } = useForm<FormData>({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data: FormData) => console.log(data);

	return (
		<Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange}>
			<ModalContent>
				{(onClose) => (
					<form onSubmit={handleSubmit(onSubmit)}>
						<ModalHeader className="flex flex-col gap-1">New category</ModalHeader>
						<ModalBody>
							<Controller
								name="name"
								control={control}
								render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
									<Input
										onChange={onChange}
										onBlur={onBlur}
										value={value}
										type="text"
										label="Category name"
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
								Close
							</Button>
							<Button color="primary" onPress={onClose}>
								Add
							</Button>
						</ModalFooter>
					</form>
				)}
			</ModalContent>
		</Modal>
	);
};
export default BookmarkMenuNewModal;
