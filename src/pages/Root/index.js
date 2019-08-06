import { compose } from 'recompose';
import { connect } from 'react-redux';

import { authAvatarSelector, authNameSelector, authIsAuthenticatedSelector } from 'domains';
import RootDesign from './Root.design';


const mapStateToProps = store => ({
  name: authNameSelector(store),
  avatar: authAvatarSelector(store),
  isAuthenticated: authIsAuthenticatedSelector(store),
});

const withConnect = connect(mapStateToProps);

const Root = compose(
  withConnect,
)(RootDesign);

export default Root;
