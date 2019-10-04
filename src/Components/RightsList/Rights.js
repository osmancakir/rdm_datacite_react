import React from 'react';
import {Field} from 'formik';
import {Grid} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Rights = (props) => {

    const {index} = props;


    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Field
                    name={`rights.${index}.schemeURI`}
                    label="Scheme URI"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`rights.${index}.rightsIdentifierScheme`}
                    label="Rights Identifier Scheme"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`rights.${index}.rightsIdentifier`}
                    label="Rights Identifier"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`rights.${index}.rightsURI`}
                    label="Rights URI"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>

        </Grid>
    );
};

export default Rights;
