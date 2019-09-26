import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "../../MyField";






const NameIdentifier: (props) = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ nameIdentifier: "" }}
            onSubmit={values => {
                onSubmit(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <div>
                        <Field
                            name="nameIdentifier"
                            placeholder="Name Identifier"
                            component={MyField}
                        />
                    </div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};

export default NameIdentifier;