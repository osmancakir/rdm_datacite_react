import React from "react";
import {FastField} from "formik";
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
} from "@material-ui/core";

import {TextField, Select} from "formik-material-ui";

const Contributor = (props) => {

    const {index} = props;
    /* select options are here*/
    const contributorTypes = ["DataCollector", "DataCurator", "HostingInstitution", "ProjectLeader", "ProjectManager", "ProjectMember",
        "Researcher", "RightsHolder", "WorkPackageLeader"];
    const nameIdentifierScheme = [
        "ORCID",
        "GND",

    ];

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <FastField
                        name={`contributors.${index}.contributorName`}
                        label="Contributor Name"
                        fullWidth
                        required={false}
                        component={TextField}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl required fullWidth>
                        <InputLabel shrink>
                            Type
                        </InputLabel>
                        <FastField
                            fullWidth
                            component={Select}
                            name={`contributors.${index}.contributorType`}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {contributorTypes.map((contributorType) =>
                                <MenuItem key={contributorType}
                                          value={contributorType}>{contributorType}</MenuItem>,
                            )}
                        </FastField>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <FastField
                        name={`contributors.${index}.givenName`}
                        label="Given Name"
                        fullWidth
                        required={false}
                        component={TextField}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FastField
                        name={`contributors.${index}.familyName`}
                        label="Family Name"
                        fullWidth
                        required={false}
                        component={TextField}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FastField
                        name={`contributors.${index}.nameIdentifier`}
                        label="Name Identifier"
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
                        name={`contributors.${index}.schemeURI`}
                        label="Scheme URI"
                        fullWidth
                        required={false}
                        component={TextField}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FastField
                        name={`contributors.${index}.affiliation`}
                        label="Affiliation"
                        fullWidth
                        required={false}
                        component={TextField}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FastField
                        name={`contributors.${index}.xml:lang`}
                        label="Language"
                        fullWidth
                        required={false}
                        component={TextField}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Contributor;
