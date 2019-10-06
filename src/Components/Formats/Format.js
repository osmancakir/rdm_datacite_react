import React from 'react';
import {Field} from 'formik';
import {Grid} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const Format = (props) => {

    const {index} = props;



    return (
        <Grid container>



            <Grid item xs={12}>
                <Field
                    name={`formats.${index}.value`}
                    label="Format"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>


        </Grid>
    );
};

export default Format;
