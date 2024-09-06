import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirm_password: yup
      .string()
      .required()
      .oneOf([yup.ref("password")]),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const SignUpComponent = () => {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="flex-1 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Controller
          name="email"
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              type="email"
              label="Email"
              variant="bordered"
              size="lg"
              isInvalid={!!error?.message}
              color={error?.message ? "danger" : "default"}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              type="password"
              label="Password"
              variant="bordered"
              size="lg"
              isInvalid={!!error?.message}
              color={error?.message ? "danger" : "default"}
              errorMessage={error?.message}
            />
          )}
        />
        <Controller
          name="confirm_password"
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <Input
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              type="password"
              label="Confirm password"
              variant="bordered"
              size="lg"
              isInvalid={!!error?.message}
              color={error?.message ? "danger" : "default"}
              errorMessage={error?.message}
            />
          )}
        />
        <Button type="submit">{t("signup")}</Button>
      </form>
    </div>
  );
};

export const Route = createLazyFileRoute("/sign-up")({
  component: SignUpComponent,
});
