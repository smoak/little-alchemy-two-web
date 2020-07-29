import graphql from 'babel-plugin-relay/macro';
import React, { FC } from 'react';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { useParams } from 'react-router-dom';

import { ItemQuery } from './__generated__/ItemQuery.graphql';

const query = graphql`
  query ItemQuery($name: String!) {
    item(name: $name) {
      name
      myths
      id
    }
  }
`;

export const Item: FC = () => {
  const { name } = useParams();
  const { item } = useLazyLoadQuery<ItemQuery>(query, { name });

  if (!item) {
    return <>No item found</>;
  }

  return (
    <div>
      {item.name}. myths: {item.myths}
    </div>
  );
};
