import { createSelector } from 'reselect';

import { commentsSelector } from 'domain/comments';

export const userSelector = (state, props) => state.user[props.userId];

export const getUserWithComments = createSelector(
  [userSelector, commentsSelector],
  (user, comments) => ({
    ...user,
    ...comments.filter(comment => comment.userId === user.id),
  }),
);
