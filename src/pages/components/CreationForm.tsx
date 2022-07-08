import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import FormFields from './FormFields';
import IPost from '../../interfaces/IPost';
import UserID from '../../constants/UserID';
import { ServerInteractor } from '../../api/ServerInteractor';
import '../../App.css';

interface CreationFormProps {
    children?: React.ReactNode;
}

export default function CreationForm(props : CreationFormProps) {    
    
    const [post, setPost] = useState<IPost | null>({ userId : UserID, id : Number(sessionStorage.getItem("numberOfPosts")) + 1, title : "", body : "" } as IPost)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const obj = Object.assign({}, post) as IPost
        
        obj[event.currentTarget.name] = event.currentTarget.value
        
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