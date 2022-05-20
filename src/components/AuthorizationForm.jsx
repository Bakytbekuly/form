import { useCallback } from "react";
import { styled, TextField, FormControl, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { getInputState } from "../utils/getInputState";
import {
    required,
    authValid

} from "../utils/validators";

const Wrapper = styled("form")`
  width: 400px;
  height: auto;
  border: 1px solid #c1c2c3;
  padding: 16px;
  border-radius: 4px;
  h4 {
    margin-top: 0;
  }
`;

export const AuthorizationForm = ({ className }) => {
    const { register, handleSubmit, formState } = useForm({
        defaultValues: JSON.parse(localStorage.getItem("user")) || {}
    });


    const onSubmit = (values) => {

        if (authValid(values)) {
            alert("Ты в системе")
        }
        else {
            alert("Данные не верны")
        }

    }

    return (
        <Wrapper className={className} onSubmit={handleSubmit(onSubmit)}>
            <h4>Authorization</h4>

            <FormControl sx={{ width: "100%", mb: 1 }}>
                <TextField
                    label="Введите свое Имя"
                    variant="outlined"
                    {...register("lastName", {
                        required: required(),

                    })}
                    {...getInputState(formState, "lastName")}
                />
            </FormControl>
            <FormControl sx={{ width: "100%", mb: 1 }}>
                <TextField
                    label="e-mail"
                    variant="outlined"
                    type="email"
                    {...register("email", { required: required(), })}

                />
            </FormControl>

            <FormControl sx={{ width: "100%", mb: 1 }}>
                <TextField
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    {...register("password", {
                        required: required(),

                    })}
                    {...getInputState(formState, "password")}
                />
            </FormControl>



            <FormControl sx={{ width: "100%", mb: 1 }}>
                <Button type="submit" variant="outlined">
                    Авторизация
                </Button>
            </FormControl>
        </Wrapper>
    );
};
