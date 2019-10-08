import React from 'react';
import Description from './Description';
import {FieldArray} from 'formik';
import {Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const Descriptions = (props) => {

    const {descriptions} = props;

    return (
<React.Fragment>
    <Typography variant="h6" gutterBottom>Descriptions:</Typography>
        <React.Fragment>
            <FieldArray
                name="descriptions"
                render={({move, swap, push, insert, unshift, pop}) => (
                    <React.Fragment>
                        {descriptions.length > 0 &&
                        descriptions.map((description, index) => (
                            <React.Fragment key={index}>
                                <React.Fragment>
                                    <Description index={index}/>
                                </React.Fragment>
                                <React.Fragment>
                                    <Button
                                        variant="contained"
                                        onClick={() => pop(index)}
                                    >
                                        <RemoveIcon />
                                    </Button>
                                </React.Fragment>
                            </React.Fragment>
                        ))}
                        <React.Fragment>
                            <Button
                                className="secondary"
                                variant="contained"
                                onClick={() => push(
                                    {value: '', descriptionType: '',})}
                            >
                                <AddIcon />
                            </Button>
                        </React.Fragment>
                    </React.Fragment>
                )}
            />
        </React.Fragment>
</React.Fragment>
    );
};

export default Descriptions;
