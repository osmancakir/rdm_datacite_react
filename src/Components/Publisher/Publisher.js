import React from "react";
import {FieldArray, FastField} from "formik";
import {Grid, Typography} from "@material-ui/core";
import {TextField} from "formik-material-ui";


const Publisher = (props) => {

    const {publisher} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Publisher:</Typography>
            <Grid container spacing={2} >
                <FieldArray
                    name="publisher"
                    render={() => (
                        <React.Fragment>
                            {publisher.length > 0 &&
                            publisher.map((publisher, index) => (
                                <React.Fragment key={publisher.id}>
                                    <Grid item xs={12} sm={9} >
                                    <FastField
                                        name={`publisher.${index}.value`}
                                        label="Publisher"
                                        fullWidth
                                        required={false}
                                        component={TextField}
                                    />
                                    </Grid>
                                    <Grid item xs={12} sm={3}>
                                        <FastField
                                            name={`publisher.${index}.xml:lang`}
                                            label="Language"
                                            fullWidth
                                            required={false}
                                            component={TextField}
                                        />
                                    </Grid>

                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    )}
                />
            </Grid>
        </React.Fragment>
    );
};

export default Publisher;
