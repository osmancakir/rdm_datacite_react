import React from 'react';
import Creator from './Creator';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const Creators = (props) => {

    const {creators} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Creators:</Typography>
        <Grid container spacing={3}>
            <Grid item xs="12">
                <FieldArray
                    name="creators"
                    render={({move, swap, push, insert, unshift, pop}) => (
                        <Grid container>
                            <Grid item xs="12">
                                {creators.length > 0 &&
                                creators.map((creator, index) => (
                                    <Grid container key={index}>
                                        {/* Here actually didn't understand much how index is used*/}
                                        {/* but here with Fieldarray +- operations are done.*/}
                                        <Grid item>
                                            <Creator index={index}/>
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
                                    onClick={() => push(
                                        {CreatorName: '', givenName: '', familyName: '', nameIdentifier:'',
                                            nameIdScheme:'', identifierSchemeUri:'', creatorAffiliation:''})}
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

export default Creators;
