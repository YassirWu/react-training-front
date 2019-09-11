import { compose, lifecycle } from 'recompose';

import Books from './Books.design';
import withConnect from './withConnect';

export default compose(
  withConnect,
  lifecycle({
    componentDidMount() {

    },
  }),
)(Books);
