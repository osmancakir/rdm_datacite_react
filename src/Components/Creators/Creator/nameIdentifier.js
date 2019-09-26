import * as React from "react";
import { FieldArray, Form, Field,Formik } from "formik";


const NameIdentifier = (props) => {

    return (
        <Form>
        <Field
            name="nameIdentifier"
            type="text"
            placeholder="Name Identifier"
        />

        <Field
        name="nameIdentifierScheme"

        type="text"
        placeholder="Name Identifier Scheme"

        />

    <Field
        name="schemeURI"

        type="text"
        placeholder="Scheme URI"

    />
        </Form>
)
};
export default NameIdentifier;