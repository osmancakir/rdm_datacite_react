import React from 'react';
import {Field} from 'formik';
import {Grid, Typography} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const PublicationYear = () => {


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Publication Year:</Typography>
            <Grid item xs={6}>
                <Field
                    name={"publicationYear"}
                    label="Publication Year"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
        </React.Fragment>
    );
};

export default PublicationYear;
