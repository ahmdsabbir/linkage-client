import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import API from "../../api/api-config";
import { useAppState } from "../context/AppProvider";
import { useAuthState } from "../context/AuthProvider";
import useForm from "../hook/useForm";
import Form from "../reusable-component/form/form";
import { Input } from "../reusable-component/form/input-field";
import NavigateLoginRegister from "../reusable-component/navigate-login-register";
import Spinner from "../spinner";

import { toast } from "react-toastify";

const loginFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
  password: z
    .string()
    .min(4, "Please choose a longer password")
    .max(256, "Consider using a short password"),
});

const Login = () => {
  // react router dom hooks
  const navigate = useNavigate();

  // Auth provider Context
  const { auth, setAuth } = useAuthState();

  /*   const [plus, setPlus] = useState(null);
  const handleError = () => {
    setPlus((prev) => prev + 1);
  };

  // error test
  function Bomb() {
    throw new Error("kaboom, Oh my god. some problem has happened");
  } */

  // App state provider Context
  const {
    state: { loading },
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

      const response = await API.post("api/auth/login", userData, {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true,
      });

      if (response?.status == 200 || response?.status == 201) {
        dispatch({ type: "loading", payload: false });

        const token = response?.data?.access_token;
        if (token) {
          await setAuth({ token });
          localStorage.setItem("linkage_token", token);
        }
      }
    } catch (error) {
      dispatch({ type: "loading", payload: false });

      if (error?.response?.data?.msg) {
        toast.error(error?.response?.data?.msg);
      } else if (error?.message == "Network Error") {
        toast.error("something went wrong");
      } else {
        toast.error(error.message ? error.message : "login failed");
      }
    }
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="grid place-items-center h-screen ">
          {/*  <button className="btn capitalize" onClick={handleError}>
            {plus}
          </button>
          <div>{plus == 2 ? <Bomb /> : "working fine"}</div> */}
          <div className=" max-w-3xl rounded shadow-sm w-full">
            <div className="card-body">
              <h2 className="text-5xl font-semibold text-center mb-5 text-accent-dark">
                Login
              </h2>
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
                <label className="label hidden invisible">
                  <Link
                    to={"/reset-password"}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </Link>
                </label>

                <div className="form-control   mt-6">
                  <button className="btn bg-contrast w-full md:w-auto  text-white border-none hover:bg-contrast-dark focus:bg-slate-600 capitalize">
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
        </div>
      </>
      // </div>
    );
  }
};

export default Login;
