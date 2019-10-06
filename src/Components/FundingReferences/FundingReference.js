import React from 'react';
import {Field} from 'formik';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
} from '@material-ui/core';

import {TextField, Select} from 'formik-material-ui';

const FundingReference = (props) => {

    const {index} = props;
    /* select options are here*/
    const funderIdentifierTypes = ["Crossref Funder ID", "GRID", "ISNI", "Other"]

    return (
        <React.Fragment>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`fundingReferences.${index}.funderName`}
                    label="Funder Name"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`fundingReferences.${index}.funderIdentifier`}
                    label="Funder Identifier"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl required fullWidth>
                    <InputLabel shrink>
                        Type
                    </InputLabel>
                    <Field
                        required
                        fullWidth
                        component={Select}
                        name={`fundingReferences.${index}.funderIdentifierType`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {funderIdentifierTypes.map((funderIdentifierType) =>
                            <MenuItem key={funderIdentifierType}
                                      value={funderIdentifierType}>{funderIdentifierType}</MenuItem>,
                        )}
                    </Field>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`fundingReferences.${index}.awardNumber`}
                    label="Award Number"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`fundingReferences.${index}.awardTitle`}
                    label="Award Title"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>

        </Grid>
        </React.Fragment>
    );
};

export default FundingReference;