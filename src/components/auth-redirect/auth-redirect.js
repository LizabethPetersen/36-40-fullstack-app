import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import * as routes from '../../lib/routes';

const mapStateToProps = store => ({
  token: store.token,
});

class AuthRedirect extends React.Component {
  renderFinalDestination = (pathname, token) => {
    const isRegisteredRoute = pathname === routes.SIGNUP_ROUTE || pathname === routes.LOGIN_ROUTE || pathname === routes.ROOT_ROUTE || pathname === routes.PROF;

    if (isRegisteredRoute) {
      if (token) {
        return <Redirect to={routes.DASHBOARD_ROUTE} />;
      }
      return null;
    }
    if (!token) {
      return <Redirect to={routes.ROOT_ROUTE} />;
    }
    return null;
  }

  render() {
    const { location, token } = this.props;
    const { pathname } = location;
    return (
      <div className="auth-redirect">
      { this.renderFinalDestination(pathname, token) }
      </div>
    );
  }
}

AuthRedirect.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  token: PropTypes.string,
};

export default connect(mapStateToProps)(AuthRedirect);
