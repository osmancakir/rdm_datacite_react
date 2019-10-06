import React from 'react';
import Subject from './Subject';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const Subjects = (props) => {

    const {subjects} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Subjects:</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FieldArray
                        name="subjects"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                <Grid item xs={12}>
                                    {subjects.length > 0 &&
                                    subjects.map((subject, index) => (
                                        <Grid container key={index}>
                                            {/* Here actually didn't understand much how index is used*/}
                                            {/* but here with Fieldarray +- operations are done.*/}
                                            <Grid item>
                                                <Subject index={index}/>
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
                                            {subject: '', subjectScheme: '', subjectSchemeUri: '', subjectValueURI:''})}
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

export default Subjects;
