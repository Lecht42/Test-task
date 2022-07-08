import React, {useState, useEffect } from 'react';
import '../../App.css';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import { ServerInteractor } from '../../api/ServerInteractor';
import Post from '../../interfaces/Post';
import { Button } from '@mui/material';
import FormFields from './FormFields';

interface EditFormProps {
    id: string | undefined;
    children?: React.ReactNode;
}

export default function EditForm(props : EditFormProps) {    
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const titleHandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)
    const descriptionHandleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => setDescription(event.currentTarget.value)
    
    const getPostDetails = async () => {
        if(props.id === undefined) {
            props.id = '1'
            console.error("Route param 'id' is undefined, param 'id' is changed to '1'")
        }
        
        const details : Post = await ServerInteractor.fetchPostInfo(props.id)

        setTitle(details.title)
        setDescription(details.body)
    };

    useEffect(() => {
        getPostDetails()
    }, [])

    return ( 
        <Box className='centered form'>
            <FormFields title={title} body={description} titleHandleOnChange={titleHandleOnChange} descriptionHandleOnChange={descriptionHandleOnChange} />
            <div>
            <Button variant="contained" sx={{width: "160px", float: "right"}}>Update</Button>
                <Button color="error">Delete</Button>
            </div>
        </Box> 
    )
}