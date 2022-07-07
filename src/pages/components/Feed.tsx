import * as React from 'react';
import List from '@mui/material/List';
import Item from './Item';
import Post from '../../interfaces/Post';

interface ListProps {
    items: never[];
    children?: React.ReactNode;
}

export default function Feed(props : ListProps) {
  return (
    <List  sx={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "450px"
      }}>
        {props.items.map((e : Post) =>  <Item key={e.id} item={e} />)}
    </List>
  );
}
