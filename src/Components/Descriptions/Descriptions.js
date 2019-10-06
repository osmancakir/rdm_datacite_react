import React from 'react';
import Description from './Description';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const Descriptions = (props) => {

    const {descriptions} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Descriptions:</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <FieldArray
                    name="descriptions"
                    render={({move, swap, push, insert, unshift, pop}) => (
                        <Grid container>
                            {descriptions.length > 0 &&
                            descriptions.map((description, index) => (
                                <Grid container key={index}>
                                    {/* Here actually didn't understand much how index is used*/}
                                    {/* but here with Fieldarray +- operations are done.*/}
                                    <Grid item xs={12}>
                                        <Description index={index}/>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            onClick={() => pop(index)}
                                        >
                                            <RemoveIcon />
                                        </Button>
                                    </Grid>
                                </Grid>
                            ))}
                            <Grid item xs={12}>
                                <Button
                                    className="secondary"
                                    variant="contained"
                                    onClick={() => push(
                                        {value: '', descriptionType: '',})}
                                >
                                    <AddIcon />
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

export default Descriptions;
