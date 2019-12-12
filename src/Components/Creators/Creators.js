import React from "react";
import Creator from "./Creator";
import {FieldArray} from "formik";
import {Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";
import { generate } from "shortid";


const Creators = (props) => {

    const {creators} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Creators:</Typography>
        <React.Fragment>
            <FieldArray
                name="creators"
                render={({move, swap, push, insert, unshift, pop}) => (
                    <React.Fragment>
                        <React.Fragment>
                            {creators.length > 0 &&
                            creators.map((creator, index) => (
                                <React.Fragment key={creator.id}>
                                    <React.Fragment>
                                        <Creator index={index}/>
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
                        </React.Fragment>
                        <React.Fragment>
                            <Button
                                className="secondary"
                                variant="contained"
                                onClick={() => push(
                                    {id:generate(), creatorName: "", nameType:"", givenName: "", familyName: "", nameIdentifier:"",
                                        nameIdScheme:"", identifierSchemeUri:"", creatorAffiliation:""})}
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

export default Creators;
