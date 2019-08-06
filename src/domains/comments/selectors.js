import { createSelector } from 'reselect';

export const commentsSelector = state => state.comments;

export const getComments = createSelector(
  [commentsSelector],
  comments => comments,
);
