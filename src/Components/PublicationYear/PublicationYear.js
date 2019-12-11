import React from "react";
import {FieldArray, FastField} from "formik";
import {Grid, Typography} from "@material-ui/core";
import {TextField} from "formik-material-ui";


const PublicationYear = (props) => {

    const {publicationYear} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Publication Year:</Typography>
            <Grid container spacing={2}>
                <FieldArray
                    name="publicationYear"
                    render={() => (
                        <React.Fragment>
                            {publicationYear.length > 0 &&
                            publicationYear.map((publicationYear, index) => (
                                <React.Fragment key={index}>
                                <Grid item xs={12} sm={6}>
                                    <FastField
                                        name={`publicationYear.${index}.value`}
                                        label="Publication Year (YYYY)"
                                        fullWidth
                                        required={false}
                                        component={TextField}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6} key={index}>
                                    <FastField
                                        name={`publicationYear.${index}.xml:lang`}
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

export default PublicationYear;
