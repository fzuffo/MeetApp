import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Details from '../pages/Details';
import Create from '../pages/Create';
import Update from '../pages/Update';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup/details" component={Details} isPrivate />
      <Route path="/meetup/update" component={Update} isPrivate />
      <Route path="/meetup/create" component={Create} isPrivate />
    </Switch>
  );
}
