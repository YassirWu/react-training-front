const mappingBooks = books => books.map((book, id) => ({
  ...book,
  id,
}));

export default mappingBooks;
