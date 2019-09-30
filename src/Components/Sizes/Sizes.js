import React from 'react';
import {FieldArray} from 'formik';
import {Box, Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';
import Size from "./Size";

const Sizes = (props) => {

    const {sizes} = props;

    return (
        <Box mt={3}>
            {/* Component Header: inside Typography*/}
            <Grid container spacing={2}>
                <Grid item xs="12">
                    <Typography variant="h5">Sizes</Typography>
                </Grid>
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
                                <Grid item xs="12">
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
        </Box>
    );
};

export default Sizes;
