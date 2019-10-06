import React from 'react';
import {FieldArray, FastField} from 'formik';
import {Grid, Typography} from '@material-ui/core';
import {TextField} from 'formik-material-ui';


const Publisher = (props) => {

    const {publisher} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Publisher:</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FieldArray
                        name="publisher"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                {publisher.length > 0 &&
                                publisher.map((publisher, index) => (
                                    <Grid container key={index}>

                                        <Grid item xs={12}>
                                            <FastField
                    name={`publisher.${index}.value`}
                                                label="Publisher"
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

export default Publisher;
