import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const RecommendedElements = props => {
    const { register, handleSubmit } = useForm();
    const { state, action } = useStateMachine(updateAction);

    // Create initial states for dynamic fields - react hooks [subjects, contributors, dates, relatedIdentifiers, Descriptions, geoLocations]
    const [subjects, setSubjects] = React.useState([0]);
    const [contributors, setContributors] = React.useState([0]);
    const [dates, setDates] = React.useState([0]);
    const [relatedIdentifiers, setrelatedIdentifiers] = React.useState([0]);
    const [descriptions, setDescriptions] = React.useState([0]);
    const [geoLocations, setGeoLocations] = React.useState([0]);


    const [counter, setCounter] = React.useState(1);

    // Manage Dynamic rendering of specific fields
    const addSubjectsFieldset = () => {
        setSubjects(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeSubjectsFieldset = index => () => {
        setSubjects(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const addContributorsFieldset = () => {
        setContributors(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeContributorsFieldset = index => () => {
        setContributors(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const addDatesFieldset = () => {
        setDates(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeDatesFieldset = index => () => {
        setDates(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const addRelatedIdentifiersFieldset = () => {
        setrelatedIdentifiers(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeRelatedIdentifiersFieldset = index => () => {
        setrelatedIdentifiers(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const addDescriptionsFieldset = () => {
        setDescriptions(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeDescriptionsFieldset = index => () => {
        setDescriptions(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const addGeolocationsFieldset = () => {
        setGeoLocations(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeGeolocationsFieldset = index => () => {
        setGeoLocations(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };



    const onSubit = data => {
        action(data);
        props.history.push("./otherelements");
    };

    return (
        <form onSubmit={handleSubmit(onSubit)}>
            <h2>Recommended Elements</h2>
            {subjects.map(index => {
                const fieldName = `subjects[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} >
                        <h4>Subjects</h4>
                        <label>
                            Subject
                            <input
                                type="text"
                                name={`${fieldName}.subject`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            Language
                            <select
                                name={`${fieldName}.xml:lang`}
                                ref={register}
                            >
                                <option value="personal">Personal</option>
                                <option value="organizational">Organizational</option>
                            </select>

                        </label>
                        <label>
                            subjectScheme:
                            <select
                                name={`${fieldName}.subjectScheme`}
                                ref={register}
                            >
                                <option value="GND">GND</option>
                                <option value="wikidata">wikidata</option>
                                <option value="dewey">dewey</option>
                            </select>
                        </label>

                        <label>
                            Scheme URI:
                            <input
                                type="text"
                                name={`${fieldName}.schemeURI`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            Value URI:
                            <input
                                type="text"
                                name={`${fieldName}.valueURI`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <button type="button" onClick={addSubjectsFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeSubjectsFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                        );
                    })}

            {contributors.map(index => {
                const fieldName = `contributors[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} >
                        <h4>Contributors:</h4>
                        <label>
                            Contributor Name:
                            <input
                                type="text"
                                name={`${fieldName}.contributorName`}
                                ref={register}
                                placeholder="Input"

                            />
                        </label>
                        <label>
                            ContributorType:
                            <select
                                name={`${fieldName}.contributorType`}
                                ref={register}
                            >
                                <option value="DataCollector">DataCollector</option>
                                <option value="DataCurator">DataCurator</option>
                                <option value="HostingInstitution">HostingInstitution</option>
                                <option value="ProjectLeader">ProjectLeader</option>
                                <option value="ProjectManager">ProjectManager</option>
                                <option value="ProjectMember">ProjectMember</option>
                                <option value="Researcher">Researcher</option>
                                <option value="RightsHolder">RightsHolder</option>
                                <option value="WorkPackageLeader">WorkPackageLeader</option>

                            </select>

                        </label>
                        <label>
                            givenName:
                            <input
                                type="text"
                                name={`${fieldName}.givenName`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            familyName:
                            <input
                                type="text"
                                name={`${fieldName}.familyName`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            nameIdentifier:
                            <input
                                type="text"
                                name={`${fieldName}.nameIdentifier`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            nameIdentifierScheme:
                            <select
                                name="nameIdentifierScheme"
                                ref={register}
                            >
                                <option value="ORCID">ORCID</option>
                                <option value="GND">GND</option>
                            </select>
                        </label>
                        <label>
                            schemeURI:
                            <input
                                type="text"
                                name={`${fieldName}.schemeURI`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            affiliation:
                            <input
                                type="text"
                                name={`${fieldName}.affiliation`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            language:
                            <input
                                type="text"
                                name={`${fieldName}.xml:lang`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <button type="button" onClick={addContributorsFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeContributorsFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}

            {dates.map(index => {
                // const defaultValue = `state.data.titles[${index}]`;
                const fieldName = `dates[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} defaultValue={fieldName}>
                        <h4>Dates:</h4>
                        <label>
                            Date:
                            <input
                                type="datetime-local"
                                name={`${fieldName}.date`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            Type:
                            <select
                                name={`${fieldName}.type`}
                                ref={register}
                            >
                                <option value="Accepted">Accepted</option>
                                <option value="Available">Available</option>
                                <option value="Copyrighted">Copyrighted</option>
                                <option value="Collected">Collected</option>
                                <option value="Created">Created</option>
                                <option value="Issued">Issued</option>
                                <option value="Submitted">Submitted</option>
                                <option value="Updated">Updated</option>
                                <option value="Valid">Valid</option>
                                <option value="Withdrawn">Withdrawn</option>
                                <option value="Other">Other</option>

                            </select>
                        </label>
                        <label>
                            Language:
                            <input
                                type="text"
                                name={`${fieldName}.xml:lang`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            Information:
                            <input
                                type="text"
                                name={`${fieldName}.information`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <button type="button" onClick={addDatesFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeDatesFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}

            {relatedIdentifiers.map(index => {
                const fieldName = `relatedIdentifiers[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} >
                        <h4>Related Idendifiers:</h4>
                        <label>
                            Related Identifier:
                            <input
                                type="text"
                                name={`${fieldName}.relatedIdentifier`}
                                ref={register}
                                placeholder="Input"

                            />
                        </label>
                        <label>
                            relatedIdentifierType:
                            <select
                                name={`${fieldName}.relatedIdentifierType`}
                                ref={register}
                            >
                                <option value="ARK">ARK</option>
                                <option value="arXiv">arXiv</option>
                                <option value="bibcode">bibcode</option>
                                <option value="DOI">DOI</option>
                                <option value="EAN13">EAN13</option>
                                <option value="EISSN">EISSN</option>
                                <option value="Handle">Handle</option>
                                <option value="IGSN">IGSN</option>
                                <option value="ISBN">ISBN</option>
                                <option value="ISSN">ISSN</option>
                                <option value="ISTC">ISTC</option>
                                <option value="LISSN">LISSN</option>
                                <option value="LSID">LSID</option>
                                <option value="PMID">PMID</option>
                                <option value="PURL">PURL</option>
                                <option value="UPC">UPC</option>
                                <option value="URL">URL</option>
                                <option value="URN">URN</option>

                            </select>

                        </label>
                        <label>
                            relationType:
                            <select
                                name={`${fieldName}.relationType`}
                                ref={register}
                            >
                                <option value="Cites/IsCitedBy">Cites/IsCitedBy</option>
                                <option value="Describes/IsDescribedBy">Describes/IsDescribedBy</option>
                                <option value="HasPart/IsPartOf">HasPart/IsPartOf</option>
                                <option value="HasMetadata">HasMetadata</option>
                                <option value="HasVersion">HasVersion</option>
                                <option value="EISSN">EISSN</option>
                                <option value="IsVersionOf">IsVersionOf</option>
                                <option value="IsNewVersionOf/IsPreviousVersionOf">IsNewVersionOf/IsPreviousVersionOf</option>
                                <option value="IsCompiledBy/IsSourceOf">IsCompiledBy/IsSourceOf</option>
                                <option value="References/IsReferencedBy">References/IsReferencedBy</option>
                                <option value="IsVariantFormOf">IsVariantFormOf"</option>
                                <option value="IsIdenticalTo">IsIdenticalTo</option>
                                <option value="IsSupplemtentedBy/Supplements">IsSupplemtentedBy/Supplements</option>
                                <option value="IsDocumentedBy/Documents">IsDocumentedBy/Documents</option>
                            </select>
                        </label>
                        <label>
                            Related Meta Data Scheme:
                            <input
                                type="text"
                                name={`${fieldName}.relatedMetaDataScheme`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            Scheme URI:
                            <input
                                type="text"
                                name={`${fieldName}.schemeURI`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>

                        <button type="button" onClick={addRelatedIdentifiersFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeRelatedIdentifiersFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}

            {descriptions.map(index => {
                // const defaultValue = `state.data.titles[${index}]`;
                const fieldName = `descriptions[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} defaultValue={fieldName}>
                        <h4>Descriptions:</h4>
                        <label>
                            Description:
                            <input
                                type="text"
                                name={`${fieldName}.description`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>

                        <label>
                            Language:
                            <input
                                type="text"
                                name={`${fieldName}.xml:lang`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            Description Type:
                            <select
                                name={`${fieldName}.descriptionType`}
                                ref={register}
                            >
                                <option value="Abstract">Accepted</option>
                                <option value="Methods">Available</option>
                                <option value="TechnicalInfo">Copyrighted</option>


                            </select>
                        </label>
                        <button type="button" onClick={addDescriptionsFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeDescriptionsFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}
            {geoLocations.map(index => {
                const fieldName = `geoLocations[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} >
                        <h4>Geo Locations:</h4>
                        <label>
                            Geo Location Place:
                            <input
                                type="text"
                                name={`${fieldName}.geoLocationPlace`}
                                ref={register}
                                placeholder="Input"

                            />
                        </label>
                        <label>
                            geoLocationPoint longitude:
                            <input
                                type="text"
                                name={`${fieldName}.geoLocationPointLongitude`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            geoLocationPoint latitude:
                            <input
                                type="text"
                                name={`${fieldName}.geoLocationPointLatitude`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            geoLocation westBound Box:
                            <input
                                type="text"
                                name={`${fieldName}.westBoundLongitude`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            geoLocation eastBound Box:
                            <input
                                type="text"
                                name={`${fieldName}.eastBoundLongitude`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            geoLocation southBound Box:
                            <input
                                type="text"
                                name={`${fieldName}.southBoundLatitude`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            geoLocation northBound Box:
                            <input
                                type="text"
                                name={`${fieldName}.northBoundLatitude`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>

                        <label>
                            geoLocation Polygon:
                            <input
                                type="text"
                                name={`${fieldName}.pointLongitude`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>
                        <label>
                            geoLocation Polygon:
                            <input
                                type="text"
                                name={`${fieldName}.pointLatitude`}
                                ref={register}
                                placeholder="Input"
                            />
                        </label>


                        <button type="button" onClick={addGeolocationsFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeGeolocationsFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}
            <input type="submit" />
        </form>
    );
};

export default withRouter(RecommendedElements);
