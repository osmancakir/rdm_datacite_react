import React from 'react';
import {Field} from 'formik';
import {Grid} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Creator = (props) => {

    const {index} = props;


    return (
        <Grid container>
            <Grid item>
                <Field
                    name={`creators.${index}.creatorName`}
                    label="creatorName"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`creators.${index}.givenName`}
                    label="givenName"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`creators.${index}.familyName`}
                    label="familyName"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`creators.${index}.nameIdentifier`}
                    label="nameIdentifier"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`creators.${index}.nameIdScheme`}   // "":'', "":'', ""
                    label="nameIdScheme"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`creators.${index}.identifierSchemeUri`}
                    label="identifierSchemeUri"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>

            <Grid item>
                <Field
                    name={`creators.${index}.creatorAffiliation`}
                    label="creatorAffiliation"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
        </Grid>
    );
};

export default Creator;
