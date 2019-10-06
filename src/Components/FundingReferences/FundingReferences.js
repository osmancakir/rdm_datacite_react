import React from 'react';
import FundingReference from './FundingReference';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const FundingReferences = (props) => {

    const {fundingReferences} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Funding References:</Typography>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <FieldArray
                    name="fundingReferences"
                    render={({move, swap, push, insert, unshift, pop}) => (
                        <Grid container>
                            <Grid item xs={12}>
                                {fundingReferences.length > 0 &&
                                fundingReferences.map((fundingReference, index) => (
                                    <Grid container key={index}>
                                        {/* Here actually didn't understand much how index is used*/}
                                        {/* but here with Fieldarray +- operations are done.*/}
                                        <Grid item>
                                            <FundingReference index={index}/>
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
                                        {funderName: '', funderIdentifier: '',funderIdentifierType: '', awardNumber: '',
                                            awardTitle:'', })}
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

export default FundingReferences;