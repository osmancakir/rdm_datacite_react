import React from 'react';
import Title from './Title';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const Titles = (props) => {

    const {titles} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Titles:</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FieldArray
                        name="titles"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                {titles.length > 0 &&
                                titles.map((title, index) => (
                                    <Grid container key={index}>
                                        {/* Here actually didn't understand much how index is used*/}
                                        {/* but here with Fieldarray +- operations are done.*/}
                                        <Grid item xs={12}>
                                            <Title index={index}/>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <Button
                                                variant="contained"
                                                onClick={() => pop(index)}
                                            >
                                                <RemoveIcon/>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                ))}
                                <Grid item xs={12}>
                                    <Button
                                        className="secondary"
                                        variant="contained"
                                        onClick={() => push(
                                            {value: '', type: '',})}
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

export default Titles;
