// @ts-nocheck
import { getBookDetailRouteUrl } from '.';

describe('bookDetails route', () => {
  describe('getBookDetailRouteUrl', () => {
    test('should return bookDetailRoute with bookId', () => {
      expect(getBookDetailRouteUrl(45)).toEqual('/book-details/45');
    });
  });
});