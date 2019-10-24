import mappingBooks from './mappingBooks';

describe('mappingBooks', () => {
  test('should return mapped books with id', () => {
    const books = [
      {
        isbn: '978-0553103540',
        mediaType: 'Hardcover',
        name: 'A Game of Thrones',
      },
      {
        isbn: '978-0553108033',
        mediaType: 'Hardback',
        name: 'A Clash of Kings',
      },
      {
        isbn: '978-0553106633',
        mediaType: 'Hardcover',
        name: 'A Storm of Swords',
      },
      {
        isbn: '978-0976401100',
        mediaType: 'GraphicNovel',
        name: 'The Hedge Knight',
      },
    ];

    const expectedBooks = [
      {
        id: 0,
        isbn: '978-0553103540',
        mediaType: 'Hardcover',
        name: 'A Game of Thrones',
      },
      {
        id: 1,
        isbn: '978-0553108033',
        mediaType: 'Hardback',
        name: 'A Clash of Kings',
      },
      {
        id: 2,
        isbn: '978-0553106633',
        mediaType: 'Hardcover',
        name: 'A Storm of Swords',
      },
      {
        id: 3,
        isbn: '978-0976401100',
        mediaType: 'GraphicNovel',
        name: 'The Hedge Knight',
      },
    ];

    expect(mappingBooks(books)).toEqual(expectedBooks);
  });
});
