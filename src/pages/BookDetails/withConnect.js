import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBooks, fetchBooksCharacters, getBookByIdSelector, getCharactersSelector } from 'domains/books';

const mapStateToProps = (store, props) => ({
  currentBook: getBookByIdSelector(store, props),
  characters: getCharactersSelector(store),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchBooks,
  getCharacters: fetchBooksCharacters,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps);
