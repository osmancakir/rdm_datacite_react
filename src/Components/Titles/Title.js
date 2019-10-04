import React from 'react';
import {Field} from 'formik';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
} from '@material-ui/core';

import {TextField, Select} from 'formik-material-ui';

const Title = (props) => {

    const {index} = props;
    /* select options are here*/
    const titleTypes = [
        "AlternativeTitle",
        "Subtitle",
        "TranslatedTitle",
        "Other"
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`titles.${index}.value`}
                    label="Title"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl required fullWidth>
                    <InputLabel shrink variant={"outlined"}>
                        titleType
                    </InputLabel>
                    <Field
                        required
                        fullWidth
                        component={Select}
                        name={`titles.${index}.type`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {titleTypes.map((titleType) =>
                            <MenuItem key={titleType}
                                      value={titleType}>{titleType}</MenuItem>,
                        )}
                    </Field>
                </FormControl>
            </Grid>


        </Grid>
    );
};

export default Title;
