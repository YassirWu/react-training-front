import { FETCH_COMMENTS, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILURE } from './types';

export const fetchComments = userId => ({
  type: FETCH_COMMENTS,
  payload: userId,
});

export const fetchCommentsSuccess = userData => ({
  type: FETCH_COMMENTS_SUCCESS,
  payload: userData,
});

export const fetchCommentsFailure = error => ({
  type: FETCH_COMMENTS_FAILURE,
  payload: error,
});
