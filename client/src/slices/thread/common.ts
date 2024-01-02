const ActionType = {
  ADD_POST: 'thread/add-post',
  LOAD_MORE_POSTS: 'thread/load-more-posts',
  SET_ALL_POSTS: 'thread/set-all-posts',
  SET_EXPANDED_POST: 'thread/set-expanded-post',
  REACT: 'thread/react',
  NGT_REACT: 'thread/ngt_react',
  COMMENT: 'thread/comment'
} as const;

export { ActionType };
