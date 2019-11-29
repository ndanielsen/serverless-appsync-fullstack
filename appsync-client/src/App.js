import React from 'react';

import API from '@aws-amplify/api';
import { withAuthenticator } from 'aws-amplify-react/dist/Auth';
import AWSAppSyncClient from 'aws-appsync';
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Homepage from './routes/Homepage';
import Profile from './routes/Profile';
import Search from './routes/Search';
import { Footer } from './components/helpers';

import awsconfig from './aws-exports';

API.configure(awsconfig);

const client = new AWSAppSyncClient({
  url: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  region: process.env.REACT_APP_AWS_CLIENT_REGION,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});

const WithProvider = () => (
  <Router>
    <ApolloProvider client={client}>
      <Rehydrated>
        <Route exact path="/" component={Homepage} />
        <Route path="/search" component={Search} />
        <Route path="/@:handle" component={Profile} />
        <Footer>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/search">Search</Link>
        </Footer>
      </Rehydrated>
    </ApolloProvider>
  </Router>
);

export default withAuthenticator(WithProvider, { includeGreetings: true });
