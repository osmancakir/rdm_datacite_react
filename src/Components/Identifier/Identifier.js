import React from "react";
import {FieldArray, FastField} from "formik";
import {Grid, Typography} from "@material-ui/core";
import {TextField} from "formik-material-ui";


const Identifier = (props) => {

    const {identifier} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Identifier:</Typography>
            <Grid container spacing={2}>
                <FieldArray
                    name="identifier"
                    render={() => (
                        <React.Fragment>
                            {identifier.length > 0 &&
                            identifier.map((identifier, index) => (
                                <Grid item xs={12} key={index}>
                                    <FastField
                                        name={`identifier.${index}.value`}
                                        label="Identifier"
                                        fullWidth
                                        required={false}
                                        component={TextField}
                                    />
                                </Grid>
                            ))}
                        </React.Fragment>
                    )}
                />
            </Grid>
        </React.Fragment>
    );
};

export default Identifier;
