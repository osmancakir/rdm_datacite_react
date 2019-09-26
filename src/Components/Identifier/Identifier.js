import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "../MyField";


// To do: Hidden Field seems okay with initial values



const Identifier: (props) = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ identifier: "", identifierType:"DOI" }}
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

                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};

export default Identifier;