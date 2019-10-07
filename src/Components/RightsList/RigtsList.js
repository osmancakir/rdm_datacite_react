import React from 'react';
import Rights from './Rights';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const RightsList = (props) => {

    const {rightsList} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Rights:</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FieldArray
                        name="rightsList"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                <Grid item xs={12}>
                                    {rightsList.length > 0 &&
                                    rightsList.map((rights, index) => (
                                        <Grid container key={index}>
                                            {/* Here actually didn't understand much how index is used*/}
                                            {/* but here with Fieldarray +- operations are done.*/}
                                            <Grid item>
                                                <Rights index={index}/>
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    onClick={() => pop(index)}
                                                >
                                                    <RemoveIcon/>
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    ))}
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        className="secondary"
                                        variant="contained"
                                        onClick={() => push(
                                            {schemeURI: '', rightsIdentifierScheme: '', rightsIdentifier: '', rightsURI:'',
                                            })}
                                    >
                                        <AddIcon/>
                                    </Button>
                                </Grid>
                            </Grid>
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default RightsList;
