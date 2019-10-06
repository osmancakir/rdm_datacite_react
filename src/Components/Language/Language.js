import React from 'react';
import {FieldArray, FastField} from 'formik';
import {Grid, Typography} from '@material-ui/core';
import {TextField} from 'formik-material-ui';


const Language = (props) => {

    const {language} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Language:</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FieldArray
                        name="language"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                {language.length > 0 &&
                                language.map((language, index) => (
                                    <Grid container key={index}>

                                        <Grid item xs={12}>
                                            <FastField
                    name={`language.${index}.value`}
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

export default Language;
