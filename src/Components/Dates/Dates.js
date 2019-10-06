import React from 'react';
import Date from './Date';
import {FieldArray} from 'formik';
import {Grid, Typography, Button} from '@material-ui/core';
import {Add as AddIcon, Remove as RemoveIcon} from '@material-ui/icons';

const Dates = (props) => {

    const {dates} = props;

    return (
      <React.Fragment>
          <Typography variant="h6" gutterBottom>
              Dates:
          </Typography>
    <Grid container spacing={3}>

        <Grid item xs={12}>
            <FieldArray
                name="dates"
                render={({move, swap, push, insert, unshift, pop}) => (
                    <Grid container>
                        <Grid item xs={12}>
                            {dates.length > 0 &&
                            dates.map((date, index) => (
                                <Grid container key={index}>
                                    {/* Here actually didn't understand much how index is used*/}
                                    {/* but here with Fieldarray +- operations are done.*/}
                                    <Grid item>
                                        <Date index={index}/>
                                    </Grid>

                                        <Button
                                            variant="contained"
                                            onClick={() => pop(index)}
                                        >
                                            <RemoveIcon/>
                                        </Button>

                                </Grid>
                            ))}

                        </Grid>

                            <Button
                                className="secondary"
                                variant="contained"
                                onClick={() => push(
                                    {value: '', type: '', information: ''})}
                            >
                                <AddIcon/>
                            </Button>

                    </Grid>
                )}
            />
        </Grid>
    </Grid>
      </React.Fragment>
);
};

export default Dates;
