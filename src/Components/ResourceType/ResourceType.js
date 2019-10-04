import React from 'react';
import {Field} from 'formik';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid, Typography,
} from '@material-ui/core';

import {TextField, Select} from 'formik-material-ui';

const ResourceType = (props) => {

    const {index} = props;
    /* select options are here*/
    const resTypes = [
        "Audiovisual", "Collection", "Dataset", "Event", "Image",
        "InteractiveResource", "Model", "PhysicalObject", "Service",
        "Software", "Sound", "Text", "Workflow", "Other"];

    return (
        <React.Fragment>
            <Grid contaner spacing={2}>
            <Typography variant="h6" gutterBottom>Resource:</Typography>
            <Grid item xs={12}>
                <Field
                    name={`resourceType.${index}.value`}
                    label="Resource Type"
                    fullWidth
                    required={true}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <FormControl required fullWidth>
                    <InputLabel shrink>
                        Type
                    </InputLabel>
                    <Field
                        required
                        fullWidth
                        component={Select}
                        name={`resourceType.${index}.type`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {resTypes.map((resTypes) =>
                            <MenuItem key={resTypes}
                                      value={resTypes}>{resTypes}</MenuItem>,
                        )}
                    </Field>
                </FormControl>
            </Grid>

            </Grid>
        </React.Fragment>
    );
};

export default ResourceType;
