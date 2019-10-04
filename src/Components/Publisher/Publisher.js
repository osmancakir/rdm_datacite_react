import React from 'react';
import {Field} from 'formik';
import {Grid, Typography} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Publisher = () => {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Publisher:</Typography>
            <Grid item xs={12}>
                <Field
                    name={"publisher"}
                    label="Publisher"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
        </React.Fragment>
    );
};

export default Publisher;
