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
        },
    }));

const steps = ['Mandatory Elements', 'Recommended Elements', 'Other Elements'];

function getStepContent(step) {
    const initialValues = {
        dates: [
            {
                'value': '2019-09-13T12:21',
                'type': 'Accepted',
            },

        ],
        titles: [
            {
                "value":"",
                "type":""
            }
        ],
        creators: [
            {"creatorName": '', "givenName": '', "familyName": '', "nameIdentifier":'',
                "nameIdScheme":'', "identifierSchemeUri":'', "creatorAffiliation":''
            },
        ],
        resourceType: [{'value': '', 'type': ''},],
        subjects: [
            {"subject": '', "subjectScheme": '', "subjectSchemeUri": '', "subjectValueURI":'',
            },
        ],
        contributors: [
            {"contributorName": '', "contributorType": '',"givenName": '', "familyName": '', "nameIdentifier":'',
                "schemeURI": '', "nameIdentifierScheme": '', "affiliation":'', "affiliationIdentifier":'', "affiliationIdentifierScheme":'',
            },
        ],
        relatedIdentifiers:[{
            "relatedIdentifier":'', "relatedIdentifierType":'',"relationType":'',"relatedMetaDataScheme":'', "schemeURI":'',
            "resourceTypeGeneral":'',
        },
        ],
        descriptions:[
            {
                "value": '', "descriptionType": '',},

        ],
        alternateIdentifiers:[{
            "value":'', "alternateIdentifierType":'',
        }],
        sizes:[{
            "value":'',
        },],
        formats:[{
            "value":'',
        },],
        rightsList:[{
            "schemeURI":'', "rightsIdentifierScheme":'',"rightsIdentifier":'',"rightsURI":''
        },
        ],
        fundingReferences:[{
            "funderName":'', "funderIdentifier":'',"funderIdentifierType":'',"awardNumber":'', "awardTitle":'',
        },
        ],
        geoLocations:[{"geoLocationPlace": '', "geoLocationPoint": '', "pointLongitude": '', "pointLatitude": '', "geoLocationBox": '',
            "westBoundLongitude":'', "eastBoundLongitude":'', "southBoundLatitude":'', "northBoundLatitude":'', "geoLocationPolygon":''
        },
        ]
    };

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
                    {({values}) => (
                        <Form>
                            {/* MANDATORY ELEMENTS*/}
                            {/* Identifier hidden attribute DOI; deal later
                              - simple Field'larda
                            "A component is changing an uncontrolled input of type text to be controlled" warning appears.*/}
                            <Identifier/>
                            <Titles titles={values.titles}/>
                            {/* Creators have nested dynamic form; deal later*/}
                            <Creators creators ={values.creators}/>
                            <Publisher/>
                            <PublicationYear/>
                            <ResourceType resourceType = {values.resourceType}/>


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
                    {({values}) => (
                        <Form>
                            {/* RECOMMENDED ELEMENTS*/}
                            <Subjects subjects={values.subjects}/>
                            {/* Contributors have nested dynamic form; deal later*/}
                            {/* <contributor> tag has attribute contributorType but not a value: is it a threat to me?*/}
                            <Contributors contributors={values.contributors}/>
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
                    {({values}) => (
                        <Form>
                            {/* OTHER ELEMENTS*/}
                            <Language/>
                            <AlternateIdentifiers alternateIdentifiers={values.alternateIdentifiers}/>
                            {/* Sizes and Formats maybe didn't need array Components. Since they have only one input?*/}
                            <Sizes sizes={values.sizes}/>
                            <Formats formats={values.formats}/>
                            <Version/>
                            <RightsList rightsList={values.rightsList}/>
                            <FundingReferences fundingReferences={values.fundingReferences}/>

                            <pre>{JSON.stringify(values, null, 2)}</pre>
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