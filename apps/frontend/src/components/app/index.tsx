import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from '../../apolloClient';
import {BrowserRouter as Router} from 'react-router-dom';
import ContentEditor from '../contentEditor';
import './app.css';
import {RawDraftContentState} from 'draft-js';
import {ModalProvider} from 'react-modal-hook';

const contentState = localStorage.getItem('contentState');
const data: RawDraftContentState = contentState
    ? JSON.parse(contentState)
    : null;

/**
 * Simuleer het bewerken van een pagina, of een live omgeving
 */
// @ts-ignore
const editMode = true;

export default () => {
    return (
        <ApolloProvider client={client}>
            <ModalProvider>
                <Router>
                    <ContentEditor body={data} editMode={editMode} />
                </Router>
            </ModalProvider>
        </ApolloProvider>
    );
};
