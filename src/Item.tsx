import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

export const Item: FC = () => {
  const { name } = useParams();

  return <div>Now showing item: {name}</div>;
};
