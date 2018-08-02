import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import AuthRedirect from '../auth-redirect/auth-redirect';
// take out the route when I move the profile form
import ProfileForm from '../profile-form/profile-form';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div>
            <ProfileForm />
            <Route exact path="*" component={AuthRedirect} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={Landing} />
            <Route exact path="/login" component={Landing} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profiles" component={ProfileForm} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
