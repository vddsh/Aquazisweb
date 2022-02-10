import React from "react";

import axios from "axios";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import "./Register.scss";
import { TextField } from "@material-ui/core";

function Register() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email()
      .required()
      .matches(
        /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        "email must be a valid email"
      ),
    password: yup
      .string()
      .min(4, "Минимум 4 символа")
      .max(16, "Максимум 16 символов")
      .required(),
    name: yup
      .string()
      .required()
      .min(4, "Минимум 4 символа"),
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

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("https://aquazisservice.herokuapp.com/api/v1/auth/register", data)
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    reset();
  };

  return (
    <div className="reg__wrapper">
      <div className="container">
        <div className="reg__box">
          <h3 className="reg__head">Регистрация</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="reg__form">
            <div className="reg__inputs">
              <Controller
                defaultValue=""
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name?.message : ""}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="reg__inputs">
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
            <div className="reg__inputs">
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
            <div className="reg__inputs">
              <Controller
                defaultValue=""
                control={control}
                name="company"
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Company"
                    variant="outlined"
                    error={!!errors.company}
                    helperText={errors.company ? errors.company?.message : ""}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    fullWidth
                  />
                )}
              />
            </div>
            <input className="reg__submit" type="submit" disabled={!isValid} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
