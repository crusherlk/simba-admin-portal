import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { IoLogoOctocat } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const loginForm = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { register, handleSubmit, formState } = loginForm;
  const { errors } = formState;

  const navigate = useNavigate();

  useEffect(() => {}, []);

  const onSubmit = (data) => {
    const { username, password } = data;

    if (username === "admin" && password === "admin") {
      toast.success("Login successful!");
      navigate("/");
    } else {
      toast.error("Invalid user credentials");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5">
        {/* heading */}
        <div className="flex items-center gap-2 px-2 py-4 text-gray-900">
          <IoLogoOctocat fontSize={32} />
          <span className="text-lg font-medium">Simba</span>
        </div>
        {/* login form */}
        <div className="form">
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                {...register("username", {
                  required: "Username is required!",
                })}
              />
              <p className="text-sm pl-2 text-red-500">
                {errors.username?.message}
              </p>
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                {...register("password", {
                  required: "Password is required!",
                })}
              />
              <p className="text-sm pl-2 text-red-500">
                {errors.password?.message}
              </p>
            </div>
            <button className="btn justify-center" type="submit">
              Login
            </button>
          </form>
        </div>
        <p className="text-gray-500">(username: admin | password: admin)</p>
      </div>
    </div>
  );
}
export default Login;
