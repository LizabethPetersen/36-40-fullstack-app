import React from 'react';
import PropTypes from 'prop-types';
import './profile-form.scss';

const emptyState = {
  firstName: '',
  lastName: '',
  bio: '',
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
        <label htmlFor="firstName">First Name</label>
        <input
        name="firstName"
        value={ this.state.firstName }
        onChange={ this.handleChange }
        />
        <label htmlFor="lastName">Last Name</label>
        <input
        name="lastName"
        value={ this.state.lastName }
        onChange={ this.handleChange }
        />
        <label htmlFor="bio">Include your bio</label>
        <textarea
        name="bio"
        value={ this.state.bio }
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
