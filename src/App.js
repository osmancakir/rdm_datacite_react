import CreatorName from "./Components/Creators/Creator/CreatorName";
import Identifier from "./Components/Identifier/Identifier";
import NameIdentifier from "./Components/Creators/Creator/NameIdentifier";
import './App.css';
import { Form, Formik } from "formik";
import * as React from "react";
import {Button} from "@material-ui/core"

// import { MyField } from "./Components/MyField";


// To do: Hidden Field seems okay with initial values



const App= () => {
    return (
        <Formik
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500);
            }}
        >

            {({ values, isSubmitting }) => (
                <Form>
                    <Identifier/>
                    <CreatorName/>
                    <NameIdentifier/>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <Button type="submit" disabled={isSubmitting}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default App;