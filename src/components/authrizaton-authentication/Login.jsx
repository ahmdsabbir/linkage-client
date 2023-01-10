import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAuthState } from "../context/AuthProvider";
import useForm from "../hook/useForm";
import Form from "../reusable-component/form/form";
import { Input } from "../reusable-component/form/input-field";
import NavigateLoginRegister from "../reusable-component/navigate-login-register";

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
  const {auth, setAuth } = useAuthState();

  const form = useForm({ schema: loginFormSchema });

  // err state
  const [err, setErr] = useState("");

  const handleSubmitLogin = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    }
    try {
      const getData = await fetch('http://192.168.101.4:5000/auth/login',{
        method: 'POST',
        body: JSON.stringify(userData), 
        headers: { "Content-Type": "application/json" },
      })
      const data = await getData.json()
      
      await setAuth(data["x-access-token"])
      console.log(data["x-access-token"])
      if(data["x-access-token"]) {
        navigate("/dashboard");
      }
      
      /* const response = await API.post(
        "/auth/login",
        {
          email: data.email,
          password: data.password,
        },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      ); */

     /*  if (response.status === 200 || response.status === 201) {
        console.log(response.data);
        await setAuth(response?.data);
        console.log(auth)

        navigate("/dashboard");
      } */
      

    } catch (error) {
     /*  if (!error.respone) {
        setErr("No Server Response");
      } else if (error.response.status === 400) {
        setErr("Missing username or password");
      } else if (error.response.status === 401) {
        setErr("Unauthorized");
      } else {
        setErr("Login failed");
      } */
      console.log(error)
    }
  };

  return (
    <div className="grid place-self-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl font-semibold text-center mb-5">Login</h2>
        <Form form={form} onSubmit={handleSubmitLogin}>
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
          {err && <p className="text-red-800">{err}</p>}
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
};

export default Login;
