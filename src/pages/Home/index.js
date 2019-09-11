import { compose } from 'recompose';
import { connect } from 'react-redux';

import { authAvatarSelector, authIsAuthenticatedSelector } from 'domains';

import Home from './Home.design';

const mapStateToProps = store => ({
  avatar: authAvatarSelector(store),
  isAuthenticated: authIsAuthenticatedSelector(store),
});

const mapDispatchToProps = () => {

};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Home);
