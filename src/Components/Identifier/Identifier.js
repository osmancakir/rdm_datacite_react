import React from 'react';
import {FieldArray, Field} from 'formik';
import {Grid, Typography} from '@material-ui/core';
import {TextField} from 'formik-material-ui';


const Identifier = (props) => {

    const {identifier} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Identifier:</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FieldArray
                        name="identifier"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                {identifier.length > 0 &&
                                identifier.map((identifier, index) => (
                                    <Grid container key={index}>

                                        <Grid item xs={12}>
                                            <Field
                                                name={`identifier.${index}.value`}
                                                label="Identifier"
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

export default Identifier;
