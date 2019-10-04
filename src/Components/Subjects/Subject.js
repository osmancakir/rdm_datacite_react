import React from 'react';
import {Field} from 'formik';
import {Grid} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Subject = (props) => {

    const {index} = props;
    /* select options are here*/


    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Field
                    name={`subjects.${index}.subject`}
                    label="subject"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`subjects.${index}.subjectScheme`}
                    label="subjectScheme"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`subjects.${index}.subjectSchemeUri`}
                    label="subjectSchemeUri"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`subjects.${index}.subjectValueURI`}
                    label="subjectValueURI"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
        </Grid>
    );
};

export default Subject;
