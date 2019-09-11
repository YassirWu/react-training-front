import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';

import Books from './BookDetails.design';
import withConnect from './withConnect';

export default compose(
  withRouter,
  withConnect,
  lifecycle({
    componentDidMount() {
      this.props.fetchBooks();
    },
  }),
)(Books);
