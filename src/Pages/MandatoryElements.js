import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";


const MandatoryElements = props => {
    const { register, handleSubmit } = useForm();
    const { action, state } = useStateMachine(updateAction);
    // Create initial states for dynamic fields - react hooks [titles, creators]
    const [titles, setTitles] = React.useState([0]);
    const [creators, setCreators] = React.useState([0]);


    const [counter, setCounter] = React.useState(1);

    // Manage Dynamic rendering of specific fields
    const addTitlesFieldset = () => {
        setTitles(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeTitlesFieldset = index => () => {
        setTitles(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const addCreatorsFieldset = () => {
        setCreators(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeCreatorsFieldset = index => () => {
        setCreators(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };




    const onSubit = data => {
        action(data);
        props.history.push("./recommendedelements");
    };

    return (
        <form onSubmit={handleSubmit(onSubit)}>
            <h2>Mandatory Elements</h2>
            <fieldset>
            <label>
                Identifier:
                <input name="identifier" placeholder="Input" defaultValue={state.data.identifier} ref={register}  />
            </label>
            </fieldset>
            {titles.map(index => {
                const fieldName = `titles[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} defaultValue={fieldName}>
                        <h4>Titles:</h4>
                        <label>
                            Title:
                            <input
                                type="text"
                                name={`${fieldName}.title`}
                                placeholder="Input"
                                ref={register}
                            />
                        </label>

                        <label>
                            Language:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.xml:lang`}
                                ref={register}
                            />
                        </label>
                        <select
                            name={`${fieldName}.type`}
                            ref={register}
                            placeholder="Input"
                        >
                            <option value="AlternativeTitle">AlternativeTitle</option>
                            <option value="Subtitle">Subtitle</option>
                            <option value="TranslatedTitle">TranslatedTitle</option>
                            <option value="Other">Other</option>
                        </select>

                        <button type="button" onClick={addTitlesFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeTitlesFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}

            {creators.map(index => {
                const fieldName = `creators[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} >
                        <h4>Creators:</h4>
                        <label>
                            Creator Name
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.creatorName`}
                                ref={register}
                               // defaultValue={state.data.creators[0]}
                            />
                        </label>
                        <label>
                            nameType:
                            <select
                                name={`${fieldName}.nameType`}
                                ref={register}
                                placeholder="Input"
                            >
                                <option value="personal">Personal</option>
                                <option value="organizational">Organizational</option>
                            </select>

                        </label>
                        <label>
                            givenName:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.givenName`}
                                ref={register}
                            />
                        </label>
                        <label>
                            familyName:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.familyName`}
                                ref={register}
                            />
                        </label>
                        <label>
                            nameIdentifier:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.nameIdentifier`}
                                ref={register}
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
                        <button type="button" onClick={addCreatorsFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeCreatorsFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}
            <fieldset>
                <label>
                    Publisher:
                    <input name="publisher"placeholder="Input" ref={register} defaultValue={state.data.publisher} />
                </label>
                <label>
                    Language:
                    <input name="language" placeholder="Input" ref={register} defaultValue={state.data.xmllang} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    Publication Year:
                    <input name="publicationYear"placeholder="Input" ref={register} defaultValue={state.data.publicationYear} />
                </label>
                <label>
                    Language:
                    <input name="Language" placeholder="Input" ref={register} defaultValue={state.data.xmllang} />
                </label>
            </fieldset>
            <fieldset>
                <label>
                    Resource Type:
                    <input name="resourceType"placeholder="Input" ref={register} defaultValue={state.data.resourceType} />
                </label>
                <label>
                    resourceTypeGeneral:
                    <select
                        name="resourceTypeGeneral"
                        ref={register}
                    >
                        <option value="Audiovisual">Audiovisual</option>
                        <option value="Collection">Collection</option>
                        <option value="Dataset">Dataset</option>
                        <option value="Image">Image</option>
                        <option value="Model">Model</option>
                        <option value="Software">Software</option>
                        <option value="Sound">Sound</option>
                        <option value="Text">Text</option>
                        <option value="Workflow">Workflow</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
            </fieldset>
            <input type="submit" />
        </form>
    );
};

export default withRouter(MandatoryElements);
