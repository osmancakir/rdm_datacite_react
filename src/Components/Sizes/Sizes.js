import React from 'react';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';
import Size from "./Size";

const Sizes = (props) => {

    const {sizes} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Sizes:</Typography>
            <Grid container spacing={3}>
                <Grid item xs="12">
                    <FieldArray
                        name="sizes"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                <Grid item xs="12">
                                    {sizes.length > 0 &&
                                    sizes.map((size, index) => (
                                        <Grid container key={index}>
                                            {/* Here actually didn't understand much how index is used*/}
                                            {/* but here with Fieldarray +- operations are done.*/}
                                            <Grid item>
                                                <Size index={index}/>
                                            </Grid>
                                            <Grid item xs={6}>
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
                                <Grid item xs="6">
                                    <Button
                                        className="secondary"
                                        variant="contained"
                                        onClick={() => push({value:''})}
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

export default Sizes;
