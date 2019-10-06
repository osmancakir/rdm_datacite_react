import React from 'react';
import {FastField} from 'formik';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
} from '@material-ui/core';

import {TextField, Select} from 'formik-material-ui';

const Description = (props) => {

    const {index} = props;
    /* select options are here*/
    const descriptionTypes = ["Abstract", "Methods", "SeriesInformation", "TableOfContents", "TechnicalInfo", "Other"];

    return (
        <Grid container spacing ={3}>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`descriptions.${index}.value`}
                    label="Description"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel shrink>
                        Description Type
                    </InputLabel>
                    <FastField
                        required
                        fullWidth
                        component={Select}
                        name={`descriptions.${index}.descriptionType`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {descriptionTypes.map((descriptionType) =>
                            <MenuItem key={descriptionType}
                                      value={descriptionType}>{descriptionType}</MenuItem>,
                        )}
                    </FastField>
                </FormControl>
            </Grid>


        </Grid>
    );
};

export default Description;
