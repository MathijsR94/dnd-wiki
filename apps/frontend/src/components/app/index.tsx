import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from '../../apolloClient';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home';
import Topbar from '../topbar';
import Character from '../character';

import styled from 'styled-components';
import ThemeProvider from '../../providers/theme';
import './app.css';
import '../../i18n';

const Container = styled.div`
    display: flex;
`;

const App = () => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider>
                <Router>
                    <Topbar />
                    <Container>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/character" component={Character} />
                        </Switch>
                    </Container>
                </Router>
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default App;
