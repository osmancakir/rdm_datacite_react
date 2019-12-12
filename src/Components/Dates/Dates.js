import React from "react";
import Date from "./Date";
import {FieldArray} from "formik";
import {Typography, Button} from "@material-ui/core";
import {Add as AddIcon, Remove as RemoveIcon} from "@material-ui/icons";
import { generate } from "shortid";


const Dates = (props) => {

    const {dates} = props;

    return (
      <React.Fragment>
          <Typography variant="h6" gutterBottom>
              Dates:
          </Typography>
        <React.Fragment>
            <FieldArray
                name="dates"
                render={({move, swap, push, insert, unshift, pop}) => (
                    <React.Fragment>
                        {dates.length > 0 &&
                        dates.map((date, index) => (
                            <React.Fragment key={date.id}> {/*this is probably where you need to give ids */}
                                <React.Fragment>
                                    <Date index={index}/>
                                </React.Fragment>

                                <Button
                                    variant="contained"
                                    onClick={() => pop(index)}
                                >
                                    <RemoveIcon/>
                                </Button>

                            </React.Fragment>
                        ))}


                        <Button
                            className="secondary"
                            variant="contained"
                            onClick={() => push(
                                {id:generate(), value: "", type: "", information: ""})}
                        >
                            <AddIcon/>
                        </Button>

                    </React.Fragment>
                )}
            />
        </React.Fragment>
      </React.Fragment>
);
};

export default Dates;
