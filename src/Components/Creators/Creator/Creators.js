// have no idea how to do this part for now. //
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "../../MyField";
import CreatorName from "./CreatorName";


const Creator: (props) =>
{
    return (props.Creator.forEach((Creator => {
        <Creator data={CreatorName}/>
        <pre>{JSON.stringify(values, null, 2)}</pre>
    })))
};