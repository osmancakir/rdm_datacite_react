import Creators from './Components/Creators';
import Identifier from './Components/Identifier/Identifier';
import './App.css';
import {Form, Formik} from 'formik';
import * as React from 'react';
import {Button, Container, Grid, Typography} from '@material-ui/core';
import Dates from './Components/Dates';
import Titles from "./Components/Titles";
import Publisher from "./Components/Publisher/Publisher";
import PublicationYear from "./Components/PublicationYear/PublicationYear";
import ResourceType from "./Components/ResourceType/ResourceType";
import Subjects from "./Components/Subjects";
import Contributors from "./Components/Contributors";
import RelatedIdentifiers from "./Components/RelatedIdentifiers";

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
    };
    /* relatedIdentifier relatedIdentifierType relationType relatedMetaDataScheme schemeURI resorceTypeGeneral*/
    return (
        <React.Fragment>
            <Container maxWidth="lg">
                <Grid item xs="12">
                    <Typography variant="h3">DataCite Metadata Generator</Typography>
                </Grid>
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
                            <Identifier/>
                            <Titles titles={values.titles}/>
                            {/* Creators have nested dynamic form; deal later*/}
                            <Creators creators ={values.creators}/>
                            <Publisher/>
                            <PublicationYear/>
                            {/* ResourceType do not write its values!*/}
                            <ResourceType resourceType = {values.resourceType}/>
                            <Subjects subjects={values.subjects}/>
                            {/* Contributors have nested dynamic form; deal later*/}
                            {/* <contributor> tag has attribute contributorType but not a value: is it a threat to me?*/}
                            <Contributors contributors={values.contributors}/>
                            <Dates dates={values.dates} />
                            <RelatedIdentifiers relatedIdentifiers={values.relatedIdentifiers}/>
                            <pre>{JSON.stringify(values, null, 2)}</pre>
                            <Button type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
        </React.Fragment>
    );
};

export default App;
