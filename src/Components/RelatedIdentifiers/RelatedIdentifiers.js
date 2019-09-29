import React from 'react';
import RelatedIdentifier from './RelatedIdentifier';
import {FieldArray} from 'formik';
import {Box, Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const RelatedIdentifiers = (props) => {

    const {relatedIdentifiers} = props;

    return (
        <Box mt={3}>
            {/* Component Header: inside Typography*/}
            <Grid container spacing={2}>
                <Grid item xs="12">
                    <Typography variant="h5">Related Identifiers</Typography>
                </Grid>
                <Grid item xs="12">
                    <FieldArray
                        name="relatedIdentifiers"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <Grid container>
                                <Grid item xs="12">
                                    {relatedIdentifiers.length > 0 &&
                                    relatedIdentifiers.map((date, index) => (
                                        <Grid container key={index}>
                                            {/* Here actually didn't understand much how index is used*/}
                                            {/* but here with Fieldarray +- operations are done.*/}
                                            <Grid item>
                                                <RelatedIdentifier index={index}/>
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
                                            {relatedIdentifier:'', relatedIdentifierType:'', relationType:'',
                                                relatedMetaDataScheme:'', schemeURI:'', resourceTypeGeneral:'',})}
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

export default RelatedIdentifiers;
