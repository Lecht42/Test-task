import React, {useState, useEffect} from 'react';
import Feed from './components/Feed';
import Box from '@mui/material/Box';
import { ServerInteractor } from '../api/ServerInteractor';
import '../App.css';

export default function HomePage() {    
    const [items, setItems] = useState([])

    const getPosts = async () => setItems(await ServerInteractor.fetchPosts());

    useEffect(() => { getPosts() }, [])

    useEffect(() => { sessionStorage.setItem("numberOfPosts", String(items.length)) }, [items])

    return ( 
        <Box className="centered feed"> 
            <Feed items={items} /> 
        </Box>
    )
}