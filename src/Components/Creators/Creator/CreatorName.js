import { Field } from "formik";
import * as React from "react";
import { MyField } from "../../MyField";



const CreatorName = () => {
    return (

            <div>
                <label> Creator(s): </label>
                <p/>
                <Field
                    name="creatorName"
                    placeholder="Creator Name"
                    component={MyField}
                />
            </div>


    );
};

export default CreatorName;