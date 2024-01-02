import { type Model, type QueryBuilder } from 'objection';

import { type PostModel } from '../../post.model.js';

const getNegativeReactionsQuery =
  (model: typeof PostModel) =>
  (isDislike: boolean): QueryBuilder<Model> => {
    const col = isDislike ? 'dislikeCount' : 'likeCount';

    return model
      .relatedQuery('postReactions')
      .count()
      .where({ isDislike })
      .as(col);
  };

export { getNegativeReactionsQuery };
