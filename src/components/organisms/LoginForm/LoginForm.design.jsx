import React from 'react';
import t from 'prop-types';

import styles from './LoginForm.module.scss';

const LoginForm = (props) => {
  const {
    login, setLogin,
    password, setPassword,
    handleLogin,
  } = props;
  return (
    <form className={styles.loginForm} onSubmit={handleLogin}>
      <input name="loginName" placeholder="Login" type="text" value={login} onChange={({ target }) => setLogin(target.value)} />
      <input name="password" placeholder="Password" type="password" value={password} onChange={({ target }) => setPassword(target.value)} />
      <button type="submit">Login</button>
    </form>
  );
};
LoginForm.propTypes = {
  login: t.string.isRequired,
  setLogin: t.func.isRequired,
  password: t.string.isRequired,
  setPassword: t.func.isRequired,
  handleLogin: t.func.isRequired,
};

export default LoginForm;
