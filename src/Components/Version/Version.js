import React from 'react';
import {FieldArray, Field} from 'formik';
import {Grid, Typography} from '@material-ui/core';
import {TextField} from 'formik-material-ui';


const Version = (props) => {

    const {version} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Version:</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FieldArray
                        name="version"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                {version.length > 0 &&
                                version.map((version, index) => (
                                    <Grid container key={index}>

                                        <Grid item xs={12}>
                                            <Field
                                                name={`version.${index}.value`}
                                                label="Version"
                                                fullWidth
                                                required={true}
                                                component={TextField}
                                            />
                                        </Grid>


                                    </Grid>
                                ))}

                            </Grid>
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Version;
