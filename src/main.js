import React from 'react';
import { render as renderDom } from 'react-dom';

import AuthForm from './components/auth-form/auth-form';

class Test extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, Sweetie!</h1>
        <AuthForm 
        type="login"
        onComplete={console.log}
        />
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);

renderDom(<Test />, root);
