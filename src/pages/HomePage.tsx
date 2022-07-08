import React, {useState, useEffect} from 'react';
import '../App.css';
import { ServerInteractor } from '../api/ServerInteractor';
import Feed from './components/Feed';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { AppBar,  Button,  Typography } from '@mui/material';
import Header from './components/Header';

export default function HomePage() {    
    const [items, setItems] = useState([])

    const getPosts = async () => setItems(await ServerInteractor.fetchPosts());

    useEffect(() => {
        getPosts()
    })

    return ( 
    <Box className="centered"> 
        <Feed items={items} /> 
    </Box>
    )
}