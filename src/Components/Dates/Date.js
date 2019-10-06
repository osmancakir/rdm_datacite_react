import React from 'react';
import {FastField} from 'formik';
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
                <FastField
                    name={`dates.${index}.value`}
                    label="Value"
                    type="datetime-local"
                    fullWidth
                    required={false}
                    component={TextField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    /* A JSX comment */
                />
                {/* A JSX comment */}
            </Grid>

            <Grid item>
                <FormControl fullWidth>
                    <InputLabel shrink >
                        Type
                    </InputLabel>
                    <FastField
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
                    </FastField>
                </FormControl>
            </Grid>

            <Grid item>
                <FastField
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
