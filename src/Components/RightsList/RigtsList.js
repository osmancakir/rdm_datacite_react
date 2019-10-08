import React from 'react';
import Rights from './Rights';
import {FieldArray} from 'formik';
import {Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const RightsList = (props) => {

    const {rightsList} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Rights:</Typography>
                <React.Fragment>
                    <FieldArray
                        name="rightsList"
                        render={({move, swap, push, insert, unshift, pop}) => (
                            <React.Fragment>
                                {rightsList.length > 0 &&
                                rightsList.map((rights, index) => (
                                    <React.Fragment key={index}>
                                        <React.Fragment>
                                            <Rights index={index}/>
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
                                            {schemeURI: '', rightsIdentifierScheme: '', rightsIdentifier: '', rightsURI:'',
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

export default RightsList;
