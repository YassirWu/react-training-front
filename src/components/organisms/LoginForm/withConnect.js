import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticateUser } from 'domains';

const mapStateToProps = store => ({
  auth: store.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  authenticateUser,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
