import { Form, Formik, Field } from "formik";
import * as React from "react";
import { MyField } from "../../MyField";



const CreatorName: (props) = ({ onSubmit }) => {
    return (
        <Formik
            initialValues={{ creatorName: "" }}
            onSubmit={values => {
                onSubmit(values);
            }}
        >
            {({ values }) => (
                <Form>
                    <div>
                        <label> Creator(s): </label>
                        <p/>
                        <Field
                            name="creatorName"
                            placeholder="Creator Name"
                            component={MyField}
                        />
                    </div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};

export default CreatorName;