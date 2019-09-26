import * as React from "react";
import { FieldArray, Form, Field,Formik } from "formik";
import { TextField, Button } from "@material-ui/core";

const CreatorName = () => (
    <div>
        <h3>CreatorName</h3>
        <Formik
            initialValues={{
                CreatorName: [
                    {value: "Elisabeth, Miller", nameType: "Personal"}

                ]}}
            /*onSubmit={values =>
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500)
            }*/
            render={({ values }) => (
                <Form>
                    <FieldArray
                        name="CreatorName"
                        render={arrayHelpers => (
                            <div>
                                {values.CreatorName.map((CreatorName, index) => (
                                    <div>
                                        <Field name={`CreatorName.${index}.value`} />
                                        <Field name={`CreatorName.${index}.nameType`} />


                                        <Button type="button" onClick={() => arrayHelpers.remove(index)}>
                                            -
                                        </Button>
                                    </div>
                                ))}
                                <Button color="primary"
                                        type="button"
                                        onClick={() => arrayHelpers.push({})}
                                >
                                    Add New
                                </Button>
                            </div>
                        )}
                    />
                    <pre>{JSON.stringify(values, null,2 )}</pre>
                </Form>
            )}
        />
    </div>
);
export default CreatorName;