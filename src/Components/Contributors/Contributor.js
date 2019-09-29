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
            <Grid item>
                <Field
                    name={`contributors.${index}.contributorName`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <FormControl required fullWidth>
                    <InputLabel shrink>
                        Type
                    </InputLabel>
                    <Field
                        required
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

            <Grid item>
                <Field
                    name={`contributors.${index}.givenName`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.familyName`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.nameIdentifier`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.schemeURI`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.nameIdentifierScheme`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.affiliation`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.affiliationIdentifier`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`contributors.${index}.affiliationIdentifierScheme`}
                    label="Information"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>

        </Grid>
    );
};

export default Contributor;
