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

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    const buttonText = this.props.profile ? 'Update' : 'Create';
    return (
      <form className="profile-form" onSubmit={ this.handleSubmit }>
        <label htmlFor="first-name">First Name</label>
        <input
        name="first-name"
        value={ this.value.firstName }
        onChange={ this.handleChange }
        />
        <label htmlFor="last-name">Last Name</label>
        <input
        name="last-name"
        value={ this.value.lastName }
        onChange={ this.handleChange }
        />
        <label htmlFor="bio">Include your bio</label>
        <textarea
        name="bio"
        value={ this.value.bio }
        onChange={ this.handleChange }
        />
        <button type="submit">{ buttonText }</button>
      </form>
    );
  }
}

ProfileForm.propTypes = {
  profile: PropTypes.object,
  onComplete: PropTypes.func,
};
