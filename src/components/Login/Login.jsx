import React, { useState, useRef } from "react";

import axios from "axios";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./Login.scss";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

function Login() {
  const schema = yup.object().shape({
    email: yup.string(),
    // .email()
    // .required()
    // .matches(
    //   /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    //   "email must be a valid email"
    // )
    password: yup
      .string()
      .min(4, "Минимум 4 символа")
      .max(16, "Максимум 16 символов")
      .required(),
  });

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
    watch,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log(data);
    axios.post("https://aquazisservice.herokuapp.com/api/v1/auth", data).then(
      (response) => {
        console.log(response);
        localStorage.setItem("notakey", response.data);
      },
      (error) => {
        console.log(error);
      }
    );
    reset();
  };

  return (
    <div className="login__wrapper">
      <div className="container">
        <div className="login__box">
          <h3 className="login__head">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="login__form">
            <div className="login__inputs">
              <Controller
                defaultValue=""
                control={control}
                name="email"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email?.message : ""}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="login__inputs">
              <Controller
                defaultValue=""
                control={control}
                name="password"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    variant="outlined"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password?.message : ""}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="login__btn">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!isValid}
              >
                Войти
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
