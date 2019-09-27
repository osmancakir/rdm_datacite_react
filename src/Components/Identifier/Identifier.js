import { Field } from "formik";
import * as React from "react";
import { MyField } from "../MyField";


// To do: Hidden Field seems okay with initial values



const Identifier = () => {
    return (
            <div>
                <label> Identifier </label>
                <p/>
                <Field
                    name="identifier"
                    placeholder="DOI"
                    component={MyField}
                />
            </div>

    );
};

export default Identifier;