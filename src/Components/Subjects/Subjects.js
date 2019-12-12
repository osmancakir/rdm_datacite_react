import React from "react";
import Subject from "./Subject";
import {FieldArray} from "formik";
import {Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";
import { generate } from "shortid";

const Subjects = (props) => {

    const {subjects} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Subjects:</Typography>
                <React.Fragment>
                    <FieldArray
                        name="subjects"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <React.Fragment>
                                {subjects.length > 0 &&
                                subjects.map((subject, index) => (
                                    <React.Fragment key={subject.id}>
                                        <React.Fragment>
                                            <Subject index={index}/>
                                        </React.Fragment>
                                        <React.Fragment>
                                            <Button
                                                variant="contained"
                                                onClick={() => pop(index)}
                                            >
                                                <RemoveIcon/>
                                            </Button>
                                        </React.Fragment>
                                    </React.Fragment>
                                ))}
                                <React.Fragment>
                                    <Button
                                        className="secondary"
                                        variant="contained"
                                        onClick={() => push(
                                            {id:generate(), subject: "", subjectScheme: "", subjectSchemeUri: "", subjectValueURI:"",})}
                                    >
                                        <AddIcon/>
                                    </Button>
                                </React.Fragment>
                            </React.Fragment>
                        )}
                    />
                </React.Fragment>
        </React.Fragment>
    );
};

export default Subjects;
