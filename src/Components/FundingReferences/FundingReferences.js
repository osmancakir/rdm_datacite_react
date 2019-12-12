import React from "react";
import FundingReference from "./FundingReference";
import {FieldArray} from "formik";
import {Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";
import { generate } from "shortid";


const FundingReferences = (props) => {

    const {fundingReferences} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Funding References:</Typography>
        <React.Fragment>
            <FieldArray
                name="fundingReferences"
                render={({move, swap, push, insert, unshift, pop}) => (
                    <React.Fragment>
                        {fundingReferences.length > 0 &&
                        fundingReferences.map((fundingReference, index) => (
                            <React.Fragment key={fundingReference.id}>
                                <React.Fragment>
                                    <FundingReference index={index}/>
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
                                    {id:generate(), funderName: "", funderIdentifier: "",funderIdentifierType: "", awardNumber: "",
                                        awardTitle:"", })}
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

export default FundingReferences;
