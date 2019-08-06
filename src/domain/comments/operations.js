/* eslint-disable import/prefer-default-export */

import axios from 'axios';

import { fetchComments, fetchCommentsSuccess, fetchCommentsFailure } from './actions';

export const fetchAllComments = dispatch => async () => {
  try {
    dispatch(fetchComments());
    const commentsResponse = await axios.get('http://127.0.0.1:3142/comments');
    fetchCommentsSuccess(commentsResponse.data);
  } catch (error) {
    fetchCommentsFailure(error);
  }
};

/* eslint-enable import/prefer-default-export */
