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

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(4, "Please choose a longer password")
    .max(256, "Consider using a short password"),
});

const Login = () => {
  // react router dom hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Auth provider Context
  const { auth, setAuth } = useAuthState();
  // App state provider Context
  const {
    state: { loading, error },
    dispatch,
  } = useAppState();
  // const from = location.state?.from?.pathname || "/";
  // Form custom hook
  const form = useForm({ schema: loginFormSchema });

  // sending user to their dashboard if token exists
  useEffect(() => {
    if (auth.token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [auth]);

  const handleLogin = async (data) => {
    const userData = JSON.stringify({
      email: data.email,
      password: data.password,
    });

    try {
      dispatch({ type: "loading", payload: true });

      const response = await API.post("auth/login", userData, {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      });

      if (response?.status == 200 || response?.status == 201) {
        dispatch({ type: "loading", payload: false });
        console.log(loading);
        const token = response?.data?.access_token;
        if (token) {
          await setAuth({ token });
          localStorage.setItem("linkage_token", token);
        }
      }
    } catch (error) {
      dispatch({ type: "loading", payload: false });
      if (error.response.status == 401) {
        toast.error(error?.response?.data?.msg);
      } else if (error?.message == "Network Error") {
        toast.error(error.message);
      } else {
        toast.error(error.message ? error.message : "login failed");
      }
    }
  };
  if (loading) {
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

            <div className="form-control mt-6">
              <button className="btn bg-contrast text-white border-none hover:bg-contrast-dark focus:bg-slate-600">
                Login
              </button>
              <ToastContainer />
            </div>
          </Form>
          <NavigateLoginRegister
            text="Have no account?"
            btnLabel="Register"
            to={"/register"}
            dispatch={dispatch}
          />
        </div>
      </div>
    );
  }
};

export default Login;
