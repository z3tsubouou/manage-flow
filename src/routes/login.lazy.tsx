import { createLazyFileRoute } from "@tanstack/react-router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const Login = () => {
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
              placeholder="Enter your email"
              size="lg"
              isInvalid={!!error?.message}
              color={error?.message ? "danger" : "default"}
              errorMessage={error?.message}
            />
          )}
        />
        <Button type="submit">Sign in</Button>
      </form>
    </div>
  );
};

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
