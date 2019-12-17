import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const OtherElements = props => {
    const { register, handleSubmit } = useForm();
    const { state, action } = useStateMachine(updateAction);

    // Create initial states for dynamic fields - react hooks [alternateIdentifiers, sizes, formats, rights, fundingReferences,
    const [alternateIdentifiers, setAlternateIdentifiers] = React.useState([0]);
    const [sizes, setSizes] = React.useState([0]);
    const [formats, setFormats] = React.useState([0]);
    const [rights, setRights] = React.useState([0]);
    const [fundingreferences, setFundingReferences] = React.useState([0]);



    const [counter, setCounter] = React.useState(1);

    // Manage Dynamic rendering of specific fields
    const addAlternateIdentifiersFieldset = () => {
        setAlternateIdentifiers(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeAlternateIdentifiersFieldset = index => () => {
        setAlternateIdentifiers(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const addSizesFieldset = () => {
        setSizes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeSizesFieldset = index => () => {
        setSizes(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };




    const addFormatsFieldset = () => {
        setFormats(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeFormatsFieldset = index => () => {
        setFormats(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const addRightsFieldset = () => {
        setRights(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeRightsFieldset = index => () => {
        setRights(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };

    const addFundingReferenceFieldset = () => {
        setFundingReferences(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
    };

    const removeFundingReferenceFieldset = index => () => {
        setFundingReferences(prevIndexes => [
            ...prevIndexes.filter(item => item !== index)
        ]);
        setCounter(prevCounter => prevCounter - 1);
    };




    const onSubit = data => {
        action(data);
        props.history.push("./result");
    };

    return (
        <form onSubmit={handleSubmit(onSubit)}>
            <h2>Other Elements: </h2>
            <fieldset>
            <label>
                Language:
                <input name={state.data.language} placeholder="Input" ref={register}  />
            </label>
            </fieldset>
            {alternateIdentifiers.map(index => {
                const fieldName = `alternateIdentfiers[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} >
                        <h4>Alternate Identifiers:</h4>
                        <label>
                            Alternate Identifier:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.alternateIdentifier`}
                                ref={register}
                            />
                        </label>
                        <label>
                            Alternate Identifier Type:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.alternateIdentifierType`}
                                ref={register}
                            />
                        </label>
                        <button type="button" onClick={addAlternateIdentifiersFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeAlternateIdentifiersFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}

            {sizes.map(index => {
                const fieldName = `sizes[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} >
                        <h4>Sizes:</h4>
                        <label>
                            Size:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.size`}
                                ref={register}

                            />
                        </label>

                        <button type="button" onClick={addSizesFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeSizesFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}
            {formats.map(index => {
                const fieldName = `formats[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} >
                        <h4>Formats:</h4>
                        <label>
                            Format:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.format`}
                                ref={register}

                            />
                        </label>

                        <button type="button" onClick={addFormatsFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeFormatsFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}
            <fieldset>
                <label>
                    Version:
                    <input name="version" placeholder="Input" ref={register} defaultValue={state.data.version} />
                </label>
            </fieldset>
            {rights.map(index => {
                // const defaultValue = `state.data.titles[${index}]`;
                const fieldName = `rightsList[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} defaultValue={fieldName}>
                        <h4>Rights:</h4>
                        <label>
                            Scheme URI:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.schemeURI`}
                                ref={register}
                            />
                        </label>

                        <label>
                            Rights Identifier Scheme:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.rightsIdentifierScheme`}
                                ref={register}
                            />
                        </label>
                        <label>
                            Rights Identifier:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.rightsIdentifier`}
                                ref={register}
                            />
                        </label>
                        <label>
                            Rights URI:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.rightsURI`}
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
                        <button type="button" onClick={addRightsFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeRightsFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}

            {fundingreferences.map(index => {
                const fieldName = `fundingReferences[${index}]`;
                return (
                    <fieldset name={fieldName} key={fieldName} >
                        <h4>Funding References:</h4>
                        <label>
                            Funder Name:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.funderName`}
                                ref={register}

                            />
                        </label>
                        <label>
                            Funder Identifier:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.funderIdentifier`}
                                ref={register}

                            />
                        </label>
                        <label>
                            Funder Identifier Type:
                            <select
                                name={`${fieldName}.funderIdentifierType`}
                                ref={register}
                                placeholder="Input"
                            >
                                <option value="cordis">cordis</option>
                                <option value="DFG">DFG</option>
                                <option value="FWF">FWF</option>


                            </select>

                        </label>
                        <label>
                            Award Number:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.awardNumber`}
                                ref={register}
                            />
                        </label>
                        <label>
                            Award URI:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.awardURI`}
                                ref={register}
                            />
                        </label>
                        <label>
                            Award Title:
                            <input
                                type="text"
                                placeholder="Input"
                                name={`${fieldName}.awardTitle`}
                                ref={register}
                            />
                        </label>

                        <button type="button" onClick={addFundingReferenceFieldset}>
                            +
                        </button>
                        <button type="button" onClick={removeFundingReferenceFieldset(index)}>
                            -
                        </button>
                    </fieldset>
                );
            })}



            <input type="submit" />
        </form>
    );
};

export default withRouter(OtherElements);






