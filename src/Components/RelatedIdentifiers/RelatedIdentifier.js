import React from 'react';
import {Field} from 'formik';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Grid,
} from '@material-ui/core';

import {TextField, Select} from 'formik-material-ui';

const RelatedIdentifier = (props) => {

    const {index} = props;
    /* select options are here*/
    const relatedIdentifierTypes = ["ARK", "arXiv", "bibcode", "DOI", "EAN13", "EISSN", "Handle", "IGSN", "ISBN",
        "ISSN", "ISTC", "LISSN", "LSID", "PMID", "PURL", "UPC", "URL", "URN"];

    const relationTypes = ["IsCitedBy", "Cites", "IsSupplementTo", "IsSupplementedBy", "IsContinuedBy", "Continues",
        "HasMetadata", "IsMetadataFor", "IsNewVersionOf", "IsPreviousVersionOf", "IsPartOf", "HasPart", "IsReferencedBy",
        "References", "IsDocumentedBy", "Documents", "IsCompiledBy", "Compiles", "IsVariantFormOf", "IsOriginalFormOf",
        "IsIdenticalTo", "IsReviewedBy", "Reviews", "IsDerivedFrom", "IsSourceOf"];


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Field
                    name={`relatedIdentifiers.${index}.relatedIdentifier`}
                    label="Related Identifier"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs = {6}>
                <FormControl fullWidth>
                    <InputLabel shrink>
                        relatedIdentifierType
                    </InputLabel>
                    <Field
                        required
                        fullWidth
                        component={Select}
                        name={`relatedIdentifiers.${index}.relatedIdentifierType`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {relatedIdentifierTypes.map((relatedIdentifierType) =>
                            <MenuItem key={relatedIdentifierType}
                                      value={relatedIdentifierType}>{relatedIdentifierType}</MenuItem>,
                        )}
                    </Field>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel shrink>
                        relationType
                    </InputLabel>
                    <Field
                        required
                        fullWidth
                        component={Select}
                        name={`relatedIdentifiers.${index}.relationType`}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {relationTypes.map((relationType) =>
                            <MenuItem key={relationType}
                                      value={relationType}>{relationType}</MenuItem>,
                        )}
                    </Field>
                </FormControl>
            </Grid>

            <Grid item xs ={6}>
                <Field
                    name={`relatedIdentifiers.${index}.relatedMetaDataScheme`}
                    label="Related Meta Data Scheme"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item xs={6}>
                <Field
                    name={`relatedIdentifiers.${index}.schemeURI`}
                    label="Scheme URI"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
            <Grid item>
                <Field
                    name={`relatedIdentifiers.${index}.resourceTypeGeneral`}
                    label="Resource Type General"
                    fullWidth
                    required={false}
                    component={TextField}
                />
            </Grid>
        </Grid>
    );
};

export default RelatedIdentifier;
