import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';

import BookDetails from './BookDetails.design';
import withConnect from './withConnect';

export default compose(
  withRouter,
  withConnect,
  lifecycle({
    componentDidMount() {
      this.props.fetchBooks();
    },
  }),
)(BookDetails);
