import React from 'react';
import {FieldArray, FastField} from 'formik';
import {Grid, Typography} from '@material-ui/core';
import {TextField} from 'formik-material-ui';


const Publisher = (props) => {

    const {publisher} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Publisher:</Typography>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <FieldArray
                        name="publisher"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container >
                                {publisher.length > 0 &&
                                publisher.map((publisher, index) => (
                                    <Grid container key={index} spacing={2}>

                                        <Grid item xs={12} sm={9} >
                                            <FastField
                                                name={`publisher.${index}.value`}
                                                label="Publisher"
                                                fullWidth
                                                required={false}
                                                component={TextField}
                                            />
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <FastField
                                                name={`publisher.${index}.xml:lang`}
                                                label="Language"
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
