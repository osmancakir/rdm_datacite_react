import React from 'react';
import {Field} from 'formik';
import {Grid, Typography} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Version = () => {


    /* select options are here below whole Formcontrol (menuitem, Inputlabel) component is about this*/


    return (
        <Grid container>
            <Grid item xs="12">
                <Typography variant="h5">Version:</Typography>
            </Grid>
            {/* Normal Simplest Textfield Component*/}
            <Grid item>
                <Field
                    name={"version"}
                    label="Version"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
        </Grid>
    );
};

export default Version;
