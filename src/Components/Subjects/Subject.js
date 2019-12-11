import React from "react";
import {FastField} from "formik";
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
} from "@material-ui/core";

import {TextField, Select} from "formik-material-ui";

const Subject = (props) => {

    const {index} = props;
    /* select options are here*/
    const subjectSchemeTypes = [
        "GND",
        "wikidata",
        "dewey",
    ];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`subjects.${index}.subject`}
                    label="Subject"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`subjects.${index}.xml:lang`}
                    label="Language"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <FormControl required fullWidth>
                    <InputLabel shrink variant={"outlined"}>
                        subjectScheme
                    </InputLabel>
                    <FastField
                        required
                        fullWidth
                        component={Select}
                        name={`subjects.${index}.subjectScheme`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {subjectSchemeTypes.map((subjectScheme) =>
                            <MenuItem key={subjectScheme}
                                      value={subjectScheme}>{subjectScheme}</MenuItem>,
                        )}
                    </FastField>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`subjects.${index}.schemeURI`}
                    label="Scheme URI"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FastField
                    name={`subjects.${index}.valueURI`}
                    label="Value URI"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
        </Grid>
    );
};

export default Subject;
