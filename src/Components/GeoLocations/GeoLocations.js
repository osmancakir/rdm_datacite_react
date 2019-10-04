import React from 'react';
import GeoLocation from './GeoLocation';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';


const GeoLocations = (props) => {

    const {geoLocations} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Geo Locations: </Typography>
        <Grid container spacing={3}>

            <Grid item xs="12">
                <FieldArray
                    name="geoLocations"
                    render={({move, swap, push, insert, unshift, pop}) => (
                        <Grid container>
                            <Grid item xs="12">
                                {geoLocations.length > 0 &&
                                geoLocations.map((geoLocation, index) => (
                                    <Grid container key={index}>
                                        {/* Here actually didn't understand much how index is used*/}
                                        {/* but here with Fieldarray +- operations are done.*/}
                                        <Grid item>
                                            <GeoLocation index={index}/>
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
                                        {geoLocationPlace: '', geoLocationPoint: '', pointLongitude: '', pointLatitude: '', geoLocationBox: '',
                                            westBoundLongitude:'', eastBoundLongitude:'', southBoundLatitude:'', northBoundLatitude:'', geoLocationPolygon:'',
                                        })}
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

export default GeoLocations;
