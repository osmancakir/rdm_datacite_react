import React from "react";
import AlternateIdentifier from "./AlternateIdentifier";
import {FieldArray} from "formik";
import {Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";
import { generate } from "shortid";

const AlternateIdentifiers = (props) => {

    const {alternateIdentifiers} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Alternate Identifiers:</Typography>
        <React.Fragment>
            <React.Fragment>
                <FieldArray
                    name="alternateIdentifiers"
                    render={({move, swap, push, insert, unshift, pop}) => (
                        <React.Fragment>
                            {alternateIdentifiers.length > 0 &&
                            alternateIdentifiers.map((alternateIdentifier, index) => (
                                <React.Fragment key={alternateIdentifier.id}>
                                    {/* Here actually didn"t understand much how index is used*/}
                                    {/* but here with Fieldarray +- operations are done.*/}
                                    <React.Fragment>
                                        <AlternateIdentifier index={index}/>
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
                                        {id: generate(), value: "", alternateIdentifierType: "", })}
                                >
                                    <AddIcon/>
                                </Button>
                            </React.Fragment>
                        </React.Fragment>
                    )}
                />
            </React.Fragment>
        </React.Fragment>
</React.Fragment>
    );
};

export default AlternateIdentifiers;
