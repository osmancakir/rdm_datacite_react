import React from 'react';
import {FieldArray, FastField} from 'formik';
import {Grid, Typography} from '@material-ui/core';
import {TextField} from 'formik-material-ui';


const PublicationYear = (props) => {

    const {publicationYear} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Publication Year:</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FieldArray
                        name="publicationYear"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                {publicationYear.length > 0 &&
                                publicationYear.map((publicationYear, index) => (
                                    <Grid container key={index}>

                                        <Grid item xs={12}>
                                            <FastField
                    name={`publicationYear.${index}.value`}
                                                label="Publication Year (YYYY)"
                                                fullWidth
                                                required={false}
                                                component={TextField}
                                            />
                                        </Grid>


                                    </Grid>
                                ))}

                            </Grid>
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default PublicationYear;
