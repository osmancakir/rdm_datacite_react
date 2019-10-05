import React from 'react';
import Identifier from '../Identifier/Identifier';
import Titles from '../Titles/Titles';
import Creators from "../Creators/Creators";
import Publisher from '../Publisher/Publisher'

import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const MandatoryElements = () => (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Mandatory Elements
            </Typography>
            <>
                <Identifier />
                <Publisher />
               

            </>
        </React.Fragment>
)

export default MandatoryElements;
