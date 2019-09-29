import React from 'react';
import {Field} from 'formik';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
} from '@material-ui/core';

import {TextField, Select} from 'formik-material-ui';

const Date = (props) => {

    const {index} = props;
    /* select options are here*/
    const dateTypes = [
        'Accepted',
        'Available',
        'Copyrighted',
        'Collected',
        'Created',
        'Issued',
        'Submitted',
        'Updated',
        'Valid',
        'Withdrawn',
        'Other',
    ];

    return (
        <Grid container>
            <Grid item>
                <Field
                    name={`dates.${index}.value`}
                    label="Value"
                    type="datetime-local"
                    fullWidth
                    required={true}
                    component={TextField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    /* A JSX comment */
                />
                {/* A JSX comment */}
            </Grid>

            <Grid item>
                <FormControl required fullWidth>
                    <InputLabel shrink>
                        Type
                    </InputLabel>
                    <Field
                        required
                        fullWidth
                        component={Select}
                        name={`dates.${index}.type`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {dateTypes.map((dateType) =>
                            <MenuItem key={dateType}
                                      value={dateType}>{dateType}</MenuItem>,
                        )}
                    </Field>
                </FormControl>
            </Grid>

            <Grid item>
                <Field
                    name={`dates.${index}.information`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
        </Grid>
    );
};

export default Date;
