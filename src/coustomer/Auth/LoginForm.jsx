import { Grid, TextField } from "@mui/material";
import { Fingerprint } from "lucide-react";
import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../State/Auth/Action";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
    console.log("userData", userData);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="h-16" />
        <h1 className="text-lg font-semibold text-gray-900 mt-2">
          Welcome back To Quill E-commerce
        </h1>
        <p className="text-sm font-medium text-gray-500 mb-10 mt-1">
          Let's Get In and continue to shop
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              type="password"
              id="password"
              name="password"
              label="Password"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <button
              className="bg-blue-700 text-white w-full flex justify-center items-center py-3 rounded-md text-lg gap-3"
              type="submit"
            >
              <Fingerprint className="h-5 w-5" />
              Login
            </button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>If You Have Alredy Account?</p>
          <button
            onClick={() => navigate("/ragister")}
            className="ml-5 text-blue-500 hover:text-blue-400"
          >
            Ragister
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
