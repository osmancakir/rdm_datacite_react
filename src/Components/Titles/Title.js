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
        <Grid container>
            <Grid item>
                <Field
                    name={`titles.${index}.value`}
                    label="Title"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <FormControl required fullWidth>
                    <InputLabel shrink>
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
