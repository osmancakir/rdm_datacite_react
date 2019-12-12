import React from "react";
import Title from "./Title";
import {FieldArray} from "formik";
import {Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";
import { generate } from "shortid";

const Titles = (props) => {

    const {titles} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Titles:</Typography>
            <React.Fragment>
                <FieldArray
                    name="titles"
                    render={({move, swap, push, insert, unshift, pop}) => (
                        <React.Fragment>
                            {titles.length > 0 &&
                            titles.map((title, index) => (
                                <React.Fragment key={title.id}>
                                    <React.Fragment>
                                        <Title index={index}/>
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
                                        {id: generate(), value: "", type: "", "xml:lang":""})}
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

export default Titles;
