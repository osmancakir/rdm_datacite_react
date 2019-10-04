import React from 'react';
import {Field} from 'formik';
import {Grid} from '@material-ui/core';

import {TextField} from 'formik-material-ui';

const GeoLocation = (props) => {

    const {index} = props;


    return (
        <React.Fragment>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.geoLocationPlace`}
                    label="geoLocationPlace"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.geoLocationPoint`}
                    label="geoLocationPoint"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.pointLongitude`}
                    label="pointLongitude"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.pointLatitude`}
                    label="pointLatitude"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.geoLocationBox`}   // "":'', "":'', ""
                    label="geoLocationBox"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.westBoundLongitude`}
                    label="westBoundLongitude"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.eastBoundLongitude`}   // "":'', "":'', ""
                    label="eastBoundLongitude"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.southBoundLatitude`}
                    label="southBoundLatitude"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.northBoundLatitude`}   // "":'', "":'', ""
                    label="northBoundLatitude"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Field
                    name={`geoLocations.${index}.geoLocationPolygon`}
                    label="geoLocationPolygon"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>

        </Grid>
        </React.Fragment>
    );
};

export default GeoLocation;
