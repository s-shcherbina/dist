import {
  addComment,
  applyPost,
  createPost,
  likePost,
  dislikePost,
  loadMorePosts,
  loadPosts,
  toggleExpandedPost
} from './actions.js';
import { actions } from './thread.slice.js';

const allActions = {
  ...actions,
  loadPosts,
  loadMorePosts,
  applyPost,
  createPost,
  toggleExpandedPost,
  likePost,
  dislikePost,
  addComment
};

export { allActions as actions };
export { reducer } from './thread.slice.js';
