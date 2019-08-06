import { createSelector } from 'reselect';

import { commentsSelector } from 'domains/comments';

export const userSelector = (state, props) => state.user[props.userId];

export const getUserWithComments = createSelector(
  [userSelector, commentsSelector],
  (user, comments) => ({
    ...comments.filter(comment => comment.userId === user.id),
  }),
);
