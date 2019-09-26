import * as React from "react";
import { FieldArray, Form, Field,Formik } from "formik";
import { TextField, Button } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";

export const Creators = () => (
    <div>
        <h1>Creators</h1>
        <Formik
            initialValues={{
                creator: [
                    {creatorName: {value: "Elisabeth, Miller", nameType: "Personal"}}, {givenName: 'Elisabeth'},
                    {familyName: "Miller"},
                    {nameIdentifier: {value:'7', schemeURI: "organi.org/", nameIdentifierScheme:"ORC"}},
                    {affiliation: "Cook"}
                ]}}
            /*onSubmit={values =>
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500)
            }*/
            render={({ values }) => (
                <Form>
                    <FieldArray
                        name="creator"
                        render={arrayHelpers => (
                            <div>
                                {values.creator.map((creator, index) => (
                                    <div>
                                        <Field name={`creator.${index}.creatorName.value`} />
                                        <Field name={`creator.${index}.creatorName.nameType`} />
                                        <Field name={`creator.${index}.givenName`} />
                                        <Field name={`creator.${index}.familyName`} />
                                        <Field name={`creator.${index}.nameIdentifier.value`} />
                                        <Field name={`creator.${index}.nameIdentifier.schemeURI`} />
                                        <Field name={`creator.${index}.nameIdentifier.nameIdentifierScheme`} />
                                        <Field name={`creator.${index}.affiliation`} />

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