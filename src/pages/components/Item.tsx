import * as React from 'react';
import { ListItemButton, ListItemText, ThemeProvider } from '@mui/material';
import Post from '../../interfaces/Post';
import { grey } from '@mui/material/colors';

interface ItemProps {
    item: Post;
    key: number;
    children?: React.ReactNode;
}

export default function Item(props : ItemProps) {
    return (
        <ListItemButton href={"/details" + props.item.id} sx={{backgroundColor: grey['50'], marginTop: "25px", borderRadius: "10px"}}>
            <ListItemText primary={props.item.title} secondary={props.item.body} />
        </ListItemButton>
    );
  }
