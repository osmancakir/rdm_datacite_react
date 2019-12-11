import React from "react";
import {FastField} from "formik";
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
} from "@material-ui/core";

import {TextField, Select} from "formik-material-ui";

const Description = (props) => {

    const {index} = props;
    /* select options are here*/
    const descriptionTypes = ["Abstract", "Methods", "TechnicalInfo",];

    return (
        <Grid container spacing ={3}>
            <Grid item xs={12} sm={9}>
                <FastField
                    name={`descriptions.${index}.value`}
                    label="Description"
                    fullWidth
                    required={false}
                    multiline={true}
                    rows={5}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={3}>
                <FastField
                    name={`descriptions.${index}.xml:lang`}
                    label="Language"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                    <InputLabel shrink>
                        Description Type
                    </InputLabel>
                    <FastField
                        required
                        fullWidth
                        component={Select}
                        name={`descriptions.${index}.descriptionType`}
                    >
                        {/*Abstract Option Made default:
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>*/}
                        {descriptionTypes.map((descriptionType) =>
                            <MenuItem key={descriptionType}
                                      value={descriptionType}>{descriptionType}</MenuItem>,
                        )}
                    </FastField>
                </FormControl>
            </Grid>


        </Grid>
    );
};

export default Description;
