import React from "react";
import Contributor from "./Contributor";
import {FieldArray} from "formik";
import { Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";
import { generate } from "shortid";


const Contributors = (props) => {

    const {contributors} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Contributor(s):</Typography>
        <React.Fragment>
            <FieldArray
                name="contributors"
                render={({move, swap, push, insert, unshift, pop}) => (
                    <React.Fragment>
                        {contributors.length > 0 &&
                        contributors.map((contributor, index) => (
                            <React.Fragment key={contributor.id}>
                                <React.Fragment>
                                    <Contributor index={index}/>
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
                                    {id: generate(), contributorName: "", contributorType: "",givenName: "", familyName: "",
                                        nameIdentifier:"", schemeURI: "", nameIdentifierScheme: "", affiliation:"",
                                        affiliationIdentifier:"", affiliationIdentifierScheme:"",})}
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

export default Contributors;
