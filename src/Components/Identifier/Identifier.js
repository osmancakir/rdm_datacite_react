import { Button, TextField } from "@material-ui/core";
import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "../MyField";


// To do: Hidden Field seems not working for now.



const Identifier: React.FC<Props> = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ identifier: "" }}
            onSubmit={values => {
                onSubmit(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <div>
                        <label> Identifier </label>
                        <p/>
                        <Field
                            name="identifier"
                            placeholder="DOI"
                            component={MyField}
                        />
                    </div>
                    <div>

                        <Field
                            name="identifierType"
                            type = "hidden"
                            component={MyField}
                        />
                    </div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};

export default Identifier;