import React from 'react';
import {FieldArray} from 'formik';
import {Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';
import Size from "./Size";

const Sizes = (props) => {

    const {sizes} = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>Sizes:</Typography>
            <React.Fragment>
                <FieldArray
                    name="sizes"
                    render={({move, swap, push, insert, unshift, pop}) => (
                        <React.Fragment>
                            {sizes.length > 0 &&
                            sizes.map((size, index) => (
                                <React.Fragment key={index}>
                                    <React.Fragment>
                                        <Size index={index}/>
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
                                    onClick={() => push({value:''})}
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

export default Sizes;
