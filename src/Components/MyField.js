
import * as React from "react";
// import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";
// import { TextFieldProps } from "@material-ui/core/TextField/TextField";
// Seems like I don't need those two commented imports
// To do: optimize the imports
export const MyField  = ({
                           placeholder,
                           field
                       }) => {
    return <TextField label ={placeholder} {...field} />;
};