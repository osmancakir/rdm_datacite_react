import React from 'react';
import {Field} from 'formik';
import {Grid, Typography} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Language = () => {



    return (
        <Grid container>
            <Grid item xs="12">
                <Typography variant="h5">Language</Typography>
            </Grid>
            {/* Normal Simplest Textfield Component*/}
            <Grid item>
                <Field
                    name={"language"}
                    label="Language"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
        </Grid>
    );
};

export default Language;