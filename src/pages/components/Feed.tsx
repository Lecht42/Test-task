import * as React from 'react';
import List from '@mui/material/List';
import Item from './Item';
import IPost from '../../interfaces/IPost';

interface ListProps {
    items: IPost[];
    children?: React.ReactNode;
}


export default function Feed(props : ListProps) {
  return (
      <List>
          {props.items.map((e : IPost) =>  <Item key={e.id} item={e} />)}
      </List>
  );
}
