import React from "react";
import RelatedIdentifier from "./RelatedIdentifier";
import {FieldArray} from "formik";
import {Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";

const RelatedIdentifiers = (props) => {

    const {relatedIdentifiers} = props;

    return (
    <React.Fragment>
        <Typography variant="h6" gutterBottom>Related Identifiers:</Typography>
            <React.Fragment>
                <FieldArray
                    name="relatedIdentifiers"
                    render={({move, swap, push, insert, unshift, pop}) => (
                        <React.Fragment>
                            {relatedIdentifiers.length > 0 &&
                            relatedIdentifiers.map((date, index) => (
                                <React.Fragment key={index}>
                                    <React.Fragment>
                                        <RelatedIdentifier index={index}/>
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
                                        {relatedIdentifier:"", relatedIdentifierType:"", relationType:"",
                                            relatedMetaDataScheme:"", schemeURI:"", resourceTypeGeneral:"",})}
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

export default RelatedIdentifiers;
