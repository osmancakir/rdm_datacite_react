import React from 'react';
import {FieldArray, FastField} from 'formik';
import {Grid, Typography, InputLabel, MenuItem, FormControl,} from '@material-ui/core';
import {TextField, Select} from 'formik-material-ui';


const ResourceType = (props) => {

    const {resourceType} = props;
    const resTypes = [
        "Audiovisual", "Collection", "Dataset", "Image",
        "Model","Software", "Sound", "Text", "Workflow", "Other"];

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Resource Type:</Typography>
            <Grid container spacing={2}>
                <FieldArray
                    name="resourceType"
                    render={() => (
                        <React.Fragment>
                            {resourceType.length > 0 &&
                            resourceType.map((resType, index) => (
                                <React.Fragment key={index}>
                                    <Grid item xs={12}>
                                        <FastField
                                            name={`resourceType.${index}.value`}
                                            label="Resource Type"
                                            fullWidth
                                            required={true}
                                            component={TextField}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <FormControl required fullWidth>
                                            <InputLabel shrink>
                                                Type
                                            </InputLabel>
                                            <FastField
                                                required
                                                fullWidth
                                                component={Select}
                                                name={`resourceType.${index}.resourceTypeGeneral`}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {resTypes.map((resTypes) =>
                                                    <MenuItem key={resTypes}
                                                              value={resTypes}>{resTypes}</MenuItem>,
                                                )}
                                            </FastField>
                                        </FormControl>
                                    </Grid>
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    )}
                />
            </Grid>
        </React.Fragment>
    );
};

export default ResourceType;
