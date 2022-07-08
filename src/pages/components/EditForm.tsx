import React, {useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import IPost from '../../interfaces/IPost';
import FormFields from './FormFields';
import { ServerInteractor } from '../../api/ServerInteractor';
import '../../App.css';

interface EditFormProps {
    id: string | undefined;
    children?: React.ReactNode;
}

export default function EditForm(props : EditFormProps) {    
    
    const [post, setPost] = useState<IPost | null>(null)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const obj = Object.assign({}, post) as IPost
        
        obj[event.currentTarget.name] = event.currentTarget.value
        
        setPost(obj)
    }

    const getPostDetails = async () => { setPost(await ServerInteractor.fetchPostInfo(props.id!)) };

    useEffect(() => { getPostDetails() }, [])

    const routeToHomepage = () => {  window.location.href = '/' }

    const deletePost = async () => {
        await ServerInteractor.deletePost(props.id!)
        routeToHomepage()
    }

    const updatePost = async () => {
        await ServerInteractor.updatePost(props.id!, post!)
        routeToHomepage()
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