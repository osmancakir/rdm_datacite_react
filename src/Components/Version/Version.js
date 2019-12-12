import React from "react";
import {FieldArray, FastField} from "formik";
import {Grid, Typography} from "@material-ui/core";
import {TextField} from "formik-material-ui";


const Version = (props) => {

    const {version} = props;


    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Version:</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FieldArray
                        name="version"
                        render={() => (
                            <React.Fragment>
                                {version.length > 0 &&
                                version.map((version, index) => (
                                    <Grid item xs={12} key={version.id}>
                                        <FastField
                                            name={`version.${index}.value`}
                                            label="Version"
                                            fullWidth
                                            required={false}
                                            component={TextField}
                                        />
                                    </Grid>
                                ))}
                            </React.Fragment>
                        )}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Version;
