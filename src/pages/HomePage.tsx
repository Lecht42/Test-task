import React, {useState, useEffect} from 'react';
import '../App.css';
import { ServerInteractor } from '../api/ServerInteractor';
import Feed from './components/Feed';
import Box from '@mui/material/Box';

export default function HomePage() {    
    const [items, setItems] = useState([])

    const getPosts = async () => setItems(await ServerInteractor.fetchPosts());

    useEffect(() => { getPosts() }, [])

    return ( 
        <Box className="centered" sx={{width: "500px"}}> 
            <Feed items={items} /> 
        </Box>
    )
}