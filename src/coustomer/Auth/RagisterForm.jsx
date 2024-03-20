import { Grid, TextField } from "@mui/material";
import { Fingerprint } from "lucide-react";
import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const RagisterForm = () => {
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log("userData", userData);
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={logo} alt="logo" className="h-16" />
        <h1 className="text-lg font-semibold text-gray-900 mt-2">Welcome To Quill E-commerce</h1>
        <p className="text-sm font-medium text-gray-500 mb-10 mt-1">Shope what You Want!</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id="firstName"
              name="firstName"
              required
              label="First Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
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
              Ragister
            </button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
          <p>If You Have Alredy Account?</p>
          <button onClick={() => navigate("/login")} className="ml-5 text-blue-500 hover:text-blue-400">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RagisterForm;
