import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from '../../apolloClient';
import {BrowserRouter as Router} from 'react-router-dom';
import ContentEditor from '../contentEditor';
import './app.css';
import {RawDraftContentState} from 'draft-js';

const contentState = localStorage.getItem('contentState');
const data: RawDraftContentState = contentState
    ? JSON.parse(contentState)
    : null;

/**
 * Simuleer het bewerken van een pagina, of een live omgeving
 */
// @ts-ignore
const editMode = true;

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Router>
                <ContentEditor body={data} editMode={editMode} />
            </Router>
        </ApolloProvider>
    );
};

export default App;
