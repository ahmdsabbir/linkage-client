import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import API from "../../api/api-config";
import { useAppState } from "../context/AppProvider";
import { useAuthState } from "../context/AuthProvider";
import useForm from "../hook/useForm";
import Form from "../reusable-component/form/form";
import { Input } from "../reusable-component/form/input-field";
import NavigateLoginRegister from "../reusable-component/navigate-login-register";
import Spinner from "../spinner";

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(4, "Please choose a longer password")
    .max(256, "Consider using a short password"),
});

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // const from = location?.state.from?.pathname || "/";
  const { auth, setAuth } = useAuthState();
  const {
    state: { loading, error },
    dispatch,
  } = useAppState();
  const from = location.state?.from?.pathname || "/";
  const form = useForm({ schema: loginFormSchema });

  // sending user to their dashboard
  useEffect(() => {
    if (auth.token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [auth]);
  console.log(loading);

  const handleLogin = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      await dispatch({ type: "error", payload: "" });
      await dispatch({ type: "loading" });
      const response = await API.post("/auth/login", JSON.stringify(userData), {
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
      });

      if (response.status == 200) {
        dispatch({ type: "loading", payload: !loading });
        const token = response?.data?.access_token;
        if (token) {
          await setAuth({ token });
          localStorage.setItem("linkage_token", token);
        }
      }
    } catch (error) {
      dispatch({ type: "loading", payload: !loading });
      if (!error.response) {
        dispatch({ type: "error", payload: error.message });
      } else if (error.status == 400) {
        dispatch({ type: "error", payload: "missing username or password" });
      } else if (error?.message == "Network Error") {
        dispatch({ type: "error", payload: error.message });
      } else {
        dispatch({ type: "error", payload: "login failed" });
      }
    }
  };
  if (loading && !error) {
    return <Spinner />;
  } else {
    return (
      <div className="grid place-self-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-5xl font-semibold text-center mb-5">Login</h2>
          <Form form={form} onSubmit={handleLogin}>
            <Input
              label="Email"
              type="text"
              autoFocus={true}
              placeholder="email@mail.com"
              {...form.register("email")}
            />
            <Input
              label="password"
              type="password"
              placeholder="password"
              autoFocus={false}
              {...form.register("password")}
            />
            <label className="label">
              <Link
                to={"/reset-password"}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>

            {error && <p className="text-red-800">{error}</p>}
            <div className="form-control mt-6">
              <button className="btn bg-contrast text-white border-none hover:bg-contrast-dark focus:bg-slate-600">
                Login
              </button>
            </div>
          </Form>
          <NavigateLoginRegister
            text="Have no account?"
            btnLabel="Register"
            to={"/register"}
          />
        </div>
      </div>
    );
  }
};

export default Login;
