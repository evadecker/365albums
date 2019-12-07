import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import './app.css';
import * as ROUTES from './constants/routes';
import {
  Landing,
  Home,
  Account,
  Admin,
  SignIn,
  SignUp,
  ResetPassword
} from './pages';
import { withAuthentication } from './components/Session';

const App = () => (
  <Router>
    <Navigation />
    <Route exact path={ROUTES.LANDING} component={Landing} />
    <Route path={ROUTES.HOME} component={Home} />
    <Route path={ROUTES.ACCOUNT} component={Account} />
    <Route path={ROUTES.ADMIN} component={Admin} />
    <Route path={ROUTES.SIGN_IN} component={SignIn} />
    <Route path={ROUTES.SIGN_UP} component={SignUp} />
    <Route path={ROUTES.RESET_PASSWORD} component={ResetPassword} />
  </Router>
);

export default withAuthentication(App);
