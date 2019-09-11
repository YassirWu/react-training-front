import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBooks, getAllBooksSelector } from 'domains/books';

const mapStateToProps = store => ({
  books: getAllBooksSelector(store),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBooks,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
