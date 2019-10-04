import React from 'react';
import {Field} from 'formik';
import {Grid, Typography} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Version = () => {

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Version:</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Field
                    name={"version"}
                    label="Version"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
        </Grid>
        </React.Fragment>
    );
};

export default Version;
