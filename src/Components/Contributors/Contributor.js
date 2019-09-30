import React from 'react';
import {Field} from 'formik';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
} from '@material-ui/core';

import {TextField, Select} from 'formik-material-ui';

const Contributor = (props) => {

    const {index} = props;
    /* select options are here*/
    const contributorTypes = ["ContactPerson", "DataCollector", "DataCurator", "DataManager", "Distributor",
        "Editor", "HostingInstitution", "Producer", "ProjectLeader", "ProjectManager", "ProjectMember",
        "RegistrationAgency", "RegistrationAuthority", "RelatedPerson", "Researcher", "ResearchGroup",
        "RightsHolder", "Sponsor", "Supervisor", "WorkPackageLeader", "Other"];

    return (
        <Grid container>
            <Grid item xs={6}>
                <Field
                    name={`contributors.${index}.contributorName`}
                    label="Contributor Name"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <FormControl required fullWidth>
                    <InputLabel shrink>
                        Type
                    </InputLabel>
                    <Field
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
                    </Field>
                </FormControl>
            </Grid>

            <Grid item xs={6}>
                <Field
                    name={`contributors.${index}.givenName`}
                    label="Given Name"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`contributors.${index}.familyName`}
                    label="Family Name"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`contributors.${index}.nameIdentifier`}
                    label="Name Identifier"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`contributors.${index}.schemeURI`}
                    label="Scheme URI"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.nameIdentifierScheme`}
                    label="Name Identifier Scheme"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.affiliation`}
                    label="Affiliation"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.affiliationIdentifier`}
                    label="Affiliation Identifier"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.affiliationIdentifierScheme`}
                    label="Affiliation Identifier Scheme"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>

        </Grid>
    );
};

export default Contributor;
