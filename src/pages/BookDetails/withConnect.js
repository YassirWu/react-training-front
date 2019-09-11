import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBooks, getBookByIdSelector } from 'domains/books';

const mapStateToProps = (store, props) => ({
  currentBook: getBookByIdSelector(store, props),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBooks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
