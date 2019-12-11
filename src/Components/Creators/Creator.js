import React from "react";
import {FastField} from "formik";
import {FormControl, Grid, InputLabel, MenuItem} from "@material-ui/core";

import {Select, TextField} from "formik-material-ui";

const Creator = (props) => {

    const {index} = props;
    const nameIdentifierScheme = [
        "ORCID",
        "GND",

    ];

    return (
        <React.Fragment>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`creators.${index}.creatorName`}
                    label="creatorName"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`creators.${index}.nameType`}
                    label="nameType"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`creators.${index}.givenName`}
                    label="givenName"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`creators.${index}.familyName`}
                    label="familyName"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`creators.${index}.nameIdentifier`}
                    label="nameIdentifier"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel shrink variant={"outlined"}>
                        nameIdentifierScheme
                    </InputLabel>
                    <FastField
                        fullWidth
                        component={Select}
                        name={`creators.${index}.nameIdentifierScheme`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {nameIdentifierScheme.map((nameIdentifierScheme) =>
                            <MenuItem key={nameIdentifierScheme}
                                      value={nameIdentifierScheme}>{nameIdentifierScheme}</MenuItem>,
                        )}
                    </FastField>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`creators.${index}.schemeURI`}
                    label="schemeURI"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <FastField
                    name={`creators.${index}.affiliation`}
                    label="affiliation"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
        </Grid>
        </React.Fragment>
    );
};

export default Creator;
