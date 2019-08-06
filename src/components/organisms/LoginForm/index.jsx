import {
  compose, setDisplayName, withState, withHandlers,
} from 'recompose';

import LoginFormDesign from './LoginForm.design';

import withConnect from './withConnect';

const LoginForm = compose(
  setDisplayName('LoginForm'),
  withState('login', 'setLogin', ''),
  withState('password', 'setPassword', ''),
  withConnect,
  withHandlers({
    handleLogin: props => (event) => {
      event.preventDefault();
      event.stopPropagation();
      props.authenticateUser(props.login, props.password);
    },
  }),
)(LoginFormDesign);

export default LoginForm;
