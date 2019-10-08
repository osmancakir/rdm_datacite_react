import {Form, Formik} from 'formik';
import * as React from 'react';

import Creators from './Components/Creators';
import Identifier from './Components/Identifier/Identifier';
import Dates from './Components/Dates';
import Titles from "./Components/Titles";
import Publisher from "./Components/Publisher/Publisher";
import PublicationYear from "./Components/PublicationYear/PublicationYear";
import ResourceType from "./Components/ResourceType/ResourceType";
import Subjects from "./Components/Subjects";
import Contributors from "./Components/Contributors";
import RelatedIdentifiers from "./Components/RelatedIdentifiers";
import Descriptions from "./Components/Descriptions"
import Language from "./Components/Language/Language";
import AlternateIdentifiers from "./Components/AlternateIdentifiers";
import Sizes from "./Components/Sizes";
import Formats from "./Components/Formats"
import Version from "./Components/Version/Version";
import RightsList from "./Components/RightsList/RigtsList";
import FundingReferences from "./Components/FundingReferences";
import GeoLocations from "./Components/GeoLocations/GeoLocations";

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InitialValues from './Components/InitialValues'




const useStyles = makeStyles(theme =>
    ({
        appBar: {
            position: 'relative',
        },
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
            },
        },
        stepper: {
            padding: theme.spacing(3, 0, 5),

        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',

        },
        button: {
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
    }));

const steps = ['Mandatory Elements', 'Recommended Elements', 'Other Elements'];

function getStepContent(step) {
    const initialValues = InitialValues

    switch (step) {
        case 0:
            return  <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({values, isSubmitting}) => (
                        <Form>
                            {/* MANDATORY ELEMENTS*/}
                            <Identifier identifier={values.identifier}/>
                            <Titles titles={values.titles}/>
                            {/* Creators have nested dynamic form; deal later*/}
                            <Creators creators ={values.creators}/>
                            <Publisher publisher={values.publisher}/>
                            <PublicationYear publicationYear={values.publicationYear}/>
                            <ResourceType resourceType = {values.resourceType}/>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                        </Form>
                    )}
                </Formik>
            </div>;
        case 1:
            return  <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({values, isSubmitting}) => (
                        <Form>
                            {/* RECOMMENDED ELEMENTS*/}
                            <Subjects subjects={values.subjects}/>
                            {/* Contributors have nested dynamic form; deal later*/}
                            {/* <contributor> tag has attribute contributorType but not a value: is it a threat to me?*/}
                            <Contributors contributors={values.contributors}/>
                            {/* Dates information field throws an uncontrolled input type text to be error - fixed look at initial values */}
                            <Dates dates={values.dates} />
                            <RelatedIdentifiers relatedIdentifiers={values.relatedIdentifiers}/>
                            <Descriptions descriptions={values.descriptions}/>
                            {/* GeoLocations has 4 layers for example: geoLocations>geoLocation>geoLocationPoint>pointLongitude what to do now?
                            have tried the normal way pointLongitude, pointLatitude duplicate keys error happened.
                             see geoLocationPoint and polygonPoint */}
                            <GeoLocations geoLocations = {values.geoLocations}/>
                        </Form>
                    )}
                </Formik>
            </div>;
        case 2:
            return  <div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({values, isSubmitting}) => (
                        <Form>
                            {/* OTHER ELEMENTS*/}
                            <Language language={values.language}/>
                            <AlternateIdentifiers alternateIdentifiers={values.alternateIdentifiers}/>
                            {/* Sizes and Formats maybe didn't need array Components. Since they have only one input?*/}
                            <Sizes sizes={values.sizes}/>
                            <Formats formats={values.formats}/>
                            <Version version={values.version}/>
                            <RightsList rightsList={values.rightsList}/>
                            <FundingReferences fundingReferences={values.fundingReferences}/>
                        </Form>
                    )}
                </Formik>
            </div>;
        default:
            throw new Error('Unknown step');
    }
}
function App () {


    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };


    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        DataCite Metadata Generator Kernel 4.3
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <div>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        {/*all the buttons*/}

                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your contribution.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Your generated metadata is ready. We thank you for choosing the best Metadata Generator
                                    </Typography>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button onClick={handleBack} className={classes.button}>
                                                Back
                                            </Button>

                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                                        </Button>

                                    </div>
                                </React.Fragment>
                            )}
                        </React.Fragment>


                    </div>
                </Paper>
            </main>
        </React.Fragment>
    );

}

export default App;