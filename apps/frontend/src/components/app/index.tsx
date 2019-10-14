import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from '../../apolloClient';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './home';
import Sidebar from '../sidebar';
import Topbar from '../topbar';
import Character from '../character';

import styled from 'styled-components';
import './app.css';
import ThemeProvider from '../../providers/theme';

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
                        <Sidebar />
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
