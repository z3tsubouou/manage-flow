import { createLazyFileRoute } from '@tanstack/react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useTranslation } from 'react-i18next';

const schema = yup
	.object({
		email: yup.string().email().required(),
		password: yup.string().required()
	})
	.required();

type FormData = yup.InferType<typeof schema>;

const Login = () => {
	const { t } = useTranslation();
	const { handleSubmit, control } = useForm<FormData>({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data: FormData) => console.log(data);

	return (
		<div className="flex flex-1 items-center justify-center">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
				<Controller
					name="email"
					control={control}
					render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
						<Input
							onChange={onChange}
							onBlur={onBlur}
							value={value}
							type="email"
							label="Email"
							variant="bordered"
							size="lg"
							isInvalid={!!error?.message}
							color={error?.message ? 'danger' : 'default'}
							errorMessage={error?.message}
						/>
					)}
				/>
				<Controller
					name="password"
					control={control}
					render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
						<Input
							onChange={onChange}
							onBlur={onBlur}
							value={value}
							type="password"
							label="Password"
							variant="bordered"
							size="lg"
							isInvalid={!!error?.message}
							color={error?.message ? 'danger' : 'default'}
							errorMessage={error?.message}
						/>
					)}
				/>
				<Button type="submit">{t('login')}</Button>
			</form>
		</div>
	);
};

export const Route = createLazyFileRoute('/login')({
	component: Login
});
