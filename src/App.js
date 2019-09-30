import Creators from './Components/Creators';
import Identifier from './Components/Identifier/Identifier';
import './App.css';
import {Form, Formik} from 'formik';
import * as React from 'react';
import {Button, Container, Box, Typography} from '@material-ui/core';
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

const App = () => {

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
            {"CreatorName": '', "givenName": '', "familyName": '', "nameIdentifier":'',
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
    };
    /* Comments */
    return (
        <React.Fragment>
            <Box color="text.primary">
            <Container maxWidth="lg">

                    <Typography variant="h3">DataCite Metadata Generator</Typography>

            <div>
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
                            {/* Identfier hidden attribute DOI; deal later*/}
                            <Identifier/>
                            <Titles titles={values.titles}/>
                            {/* Creators have nested dynamic form; deal later*/}
                            <Creators creators ={values.creators}/>
                            <Publisher/>
                            <PublicationYear/>
                            {/* ResourceType do not write its values; deal later*/}
                            <ResourceType resourceType = {values.resourceType}/>
                            <Subjects subjects={values.subjects}/>
                            {/* Contributors have nested dynamic form; deal later*/}
                            {/* <contributor> tag has attribute contributorType but not a value: is it a threat to me?*/}
                            <Contributors contributors={values.contributors}/>
                            <Dates dates={values.dates} />
                            <RelatedIdentifiers relatedIdentifiers={values.relatedIdentifiers}/>
                            <Descriptions descriptions={values.descriptions}/>
                            {/* GeoLocations has 4 layers for example: geoLocations>geoLocation>geoLocationPoint>pointLongitude what to do now?*/}
                            <Language/>
                            <AlternateIdentifiers alternateIdentifiers={values.alternateIdentifiers}/>
                            {/* Sizes and Formats maybe didn't need array Components. Since they have only one input?*/}
                            <Sizes sizes={values.sizes}/>
                            <Formats formats={values.formats}/>
                            <Version/>
                            <RightsList rightsList={values.rightsList}/>
                            <FundingReferences fundingReferences={values.fundingReferences}/>
                            <Button type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
            </Box>
        </React.Fragment>
    );
};

export default App;
