import React from 'react';
import {FastField} from 'formik';
import {Grid} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Size = (props) => {

    const {index} = props;



    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <FastField
                    name={`sizes.${index}.value`}
                    label="Size"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>


        </Grid>
    );
};

export default Size;
