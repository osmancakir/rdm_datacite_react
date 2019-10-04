import React from 'react';
import {Field} from 'formik';
import {Grid, Typography} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Identifier = () => {


    /* select options are here below whole Formcontrol (menuitem, Inputlabel) component is about this*/


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Identifier:</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Field
                    name={"identifier"}
                    label="Identifier"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
        </Grid>
        </React.Fragment>
    );
};

export default Identifier;
