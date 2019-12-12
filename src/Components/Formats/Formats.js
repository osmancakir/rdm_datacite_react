import React from "react";
import {FieldArray} from "formik";
import {Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";
import Format from "./Format";

const Formats = (props) => {

    const {formats} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Format(s):</Typography>
        <React.Fragment>
            <FieldArray
                name="formats"
                render={({move, swap, push, insert, unshift, pop}) => (
                    <React.Fragment>
                        {formats.length > 0 &&
                        formats.map((format, index) => (
                            <React.Fragment key={index}>
                                <React.Fragment>
                                    <Format index={index}/>
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
                                onClick={() => push({value:""})}
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

export default Formats;
