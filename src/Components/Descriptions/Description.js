import React from 'react';
import {Field} from 'formik';
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
        <Grid container>
            <Grid item>
                <Field
                    name={`description.${index}.value`}
                    label="Description"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <FormControl fullWidth>
                    <InputLabel shrink>
                        Description Type
                    </InputLabel>
                    <Field
                        required
                        fullWidth
                        component={Select}
                        name={`description.${index}.descriptionType`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {descriptionTypes.map((descriptionType) =>
                            <MenuItem key={descriptionType}
                                      value={descriptionType}>{descriptionType}</MenuItem>,
                        )}
                    </Field>
                </FormControl>
            </Grid>


        </Grid>
    );
};

export default Description;
