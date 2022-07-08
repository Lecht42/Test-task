import React, {useState, useEffect } from 'react';
import '../../App.css';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import FormFields from './FormFields';
import IPost from '../../interfaces/IPost';
import UserID from '../../constants/UserID';
import { ServerInteractor } from '../../api/ServerInteractor';

interface CreateFormProps {
    children?: React.ReactNode;
}

export default function CreatingForm(props : CreateFormProps) {    
    const [post, setPost] = useState<IPost | null>({ userId : UserID, id : Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) } as IPost)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const obj = Object.create(post) as IPost
        
        obj[event.currentTarget.name as keyof IPost] = event.currentTarget.value
        
        setPost(obj)
    }


    const createPost = async () => {
        await ServerInteractor.createPost(post! as IPost)
        window.location.href = '/'
    }

    return ( 
        <Box className='centered form'>
            <FormFields post={post!}  handleOnChange={handleOnChange} />
            <div>
                <Button onClick={createPost} variant="contained" sx={{width: "160px", float: "right"}}>Create</Button>
            </div>
        </Box> 
    )
}