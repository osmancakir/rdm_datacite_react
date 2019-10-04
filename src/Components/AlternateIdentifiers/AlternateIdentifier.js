import React from 'react';
import {Field} from 'formik';
import {Grid} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const AlternateIdentifier = (props) => {

    const {index} = props;



    return (
        <React.Fragment>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`alternateIdentifiers.${index}.value`}
                    label="Alternate Identifier"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`alternateIdentifiers.${index}.alternateIdentifierType`}
                    label="Alternate Identifier Type"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>

        </Grid>
        </React.Fragment>
    );
};

export default AlternateIdentifier;
