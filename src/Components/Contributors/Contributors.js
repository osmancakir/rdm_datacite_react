import React from 'react';
import Contributor from './Contributor';
import {FieldArray} from 'formik';
import {Box, Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const Contributors = (props) => {

    const {contributors} = props;

    return (
        <Box mt={3}>
            {/* Component Header: inside Typography*/}
            <Grid container spacing={2}>
                <Grid item xs="12">
                    <Typography variant="h5">Contributor(s):</Typography>
                </Grid>
                <Grid item xs="12">
                    <FieldArray
                        name="contributors"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                <Grid item xs="12">
                                    {contributors.length > 0 &&
                                    contributors.map((contributor, index) => (
                                        <Grid container key={index}>
                                            {/* Here actually didn't understand much how index is used*/}
                                            {/* but here with Fieldarray +- operations are done.*/}
                                            <Grid item>
                                                <Contributor index={index}/>
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
                                            {contributorName: '', contributorType: '',givenName: '', familyName: '',
                                                nameIdentifier:'', schemeURI: '', nameIdentifierScheme: '', affiliation:'',
                                                affiliationIdentifier:'', affiliationIdentifierScheme:'',})}
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

export default Contributors;
