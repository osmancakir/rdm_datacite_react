import React from 'react';
import AlternateIdentifier from './AlternateIdentifier';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const AlternateIdentifiers = (props) => {

    const {alternateIdentifiers} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Alternate Identifiers:</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <FieldArray
                    name="alternateIdentifiers"
                    render={({move, swap, push, insert, unshift, pop}) => (
                        <Grid container>
                            <Grid item xs={12}>
                                {alternateIdentifiers.length > 0 &&
                                alternateIdentifiers.map((alternateIdentifier, index) => (
                                    <Grid container key={index}>
                                        {/* Here actually didn't understand much how index is used*/}
                                        {/* but here with Fieldarray +- operations are done.*/}
                                        <Grid item>
                                            <AlternateIdentifier index={index}/>
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
                                        {value: '', alternateIdentifierType: '', })}
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

export default AlternateIdentifiers;
