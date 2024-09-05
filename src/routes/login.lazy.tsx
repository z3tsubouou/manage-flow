import { createLazyFileRoute } from "@tanstack/react-router";

const Login = () => {
  return (
    <div className="flex-1 flex justify-center items-center">
      Hello /sign-in!
    </div>
  );
};

export const Route = createLazyFileRoute("/login")({
  component: Login,
});
