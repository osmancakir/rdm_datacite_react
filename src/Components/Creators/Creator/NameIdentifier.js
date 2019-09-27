import { Field } from "formik";
import * as React from "react";
import { MyField } from "../../MyField";


const NameIdentifier = () => {
    return (

            <div>
                <Field
                    name="nameIdentifier"
                    placeholder="Name Identifier"
                    component={MyField}
                />
            </div>

    );
};

export default NameIdentifier;