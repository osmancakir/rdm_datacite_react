import React from 'react';
import {FastField} from 'formik';
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
    const funderIdentifierTypes = ["cordis", "DFG", "FWF",]

    return (
        <React.Fragment>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`fundingReferences.${index}.funderName`}
                    label="Funder Name"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
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
                    <FastField
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
                    </FastField>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`fundingReferences.${index}.awardNumber`}
                    label="Award Number"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`fundingReferences.${index}.awardURI`}
                    label="Award URI"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
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
