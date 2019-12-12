import React from "react";
import GeoLocation from "./GeoLocation";
import {FieldArray} from "formik";
import {Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";
import { generate } from "shortid";

const GeoLocations = (props) => {

    const {geoLocations} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Geo Locations: </Typography>
        <React.Fragment>
            <FieldArray
                name="geoLocations"
                render={({move, swap, push, insert, unshift, pop}) => (
                    <React.Fragment>
                        {geoLocations.length > 0 &&
                        geoLocations.map((geoLocation, index) => (
                            <React.Fragment key={geoLocation.id}>
                                <React.Fragment>
                                    <GeoLocation index={index}/>
                                </React.Fragment>
                                <React.Fragment>
                                    <Button
                                        variant="contained"
                                        onClick={() => pop(index)}
                                    >
                                        <RemoveIcon/>
                                    </Button>
                                </React.Fragment>
                            </React.Fragment>
                        ))}
                        <React.Fragment>
                            <Button
                                className="secondary"
                                variant="contained"
                                onClick={() => push(
                                    {id:generate(), geoLocationPlace: "", geoLocationPoint: "", pointLongitude: "", pointLatitude: "", geoLocationBox: "",
                                        westBoundLongitude:"", eastBoundLongitude:"", southBoundLatitude:"", northBoundLatitude:"", geoLocationPolygon:"",
                                    })}
                            >
                                <AddIcon/>
                            </Button>
                        </React.Fragment>
                    </React.Fragment>
                )}
            />
        </React.Fragment>
</React.Fragment>
    );
};

export default GeoLocations;
