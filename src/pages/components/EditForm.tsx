import React, {useState, useEffect } from 'react';
import '../../App.css';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import { ServerInteractor } from '../../api/ServerInteractor';
import { Button } from '@mui/material';
import IPost from '../../interfaces/IPost';
import FormFields from './FormFields';

interface EditFormProps {
    id: string | undefined;
    children?: React.ReactNode;
}

export default function EditForm(props : EditFormProps) {    
    const [post, setPost] = useState<IPost | null>(null)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const obj = Object.create(post) as IPost
        
        obj[event.currentTarget.name as keyof IPost] = event.currentTarget.value
        
        setPost(obj)
    }

    const getPostDetails = async () => {
        setPost(await ServerInteractor.fetchPostInfo(props.id!))
    };

    useEffect(() => {
        getPostDetails()
    }, [])

    const deletePost = async () => {
        await ServerInteractor.deletePost(props.id!)
        window.location.href = '/'
    }

    const updatePost = async () => {
        await ServerInteractor.updatePost(props.id!, post!)
        window.location.href = '/'
    }

    return ( 
        <Box className='centered form'>
            <FormFields post={post!}  handleOnChange={handleOnChange} />
            <div>
                <Button onClick={updatePost} variant="contained" sx={{width: "160px", float: "right"}}>Update</Button>
                <Button onClick={deletePost} color="error">Delete</Button>
            </div>
        </Box> 
    )
}