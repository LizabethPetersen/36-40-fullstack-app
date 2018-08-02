import React from 'react';
import PropTypes from 'prop-types';

const emptyState = {
  firstName: '',
  lastName: '',
  bio: '',
  profileImageUrl: '',
};

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.profile || emptyState;
  }

  render() {
    return (
      <form className="profile-form">
        <label htmlFor="first-name">First Name</label>
        <input
        name="first-name"
        />
        <label htmlFor="last-name">Last Name</label>
        <input
        name="last-name"
        />
        <label htmlFor="bio">Include your bio</label>
        <textarea
        name="bio"
        />
        <button type="submit">SUBMIT</button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  profile: PropTypes.object,
};
