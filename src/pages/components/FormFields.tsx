import React from "react";
import { TextField, Typography } from "@mui/material";
import IPost from "../../interfaces/IPost";

interface FormFieldsProps {
    post: IPost | null;
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}

export default function FormFields(props : FormFieldsProps) {    
    if(props.post === null)
        return <React.Fragment />
    
    return ( 
        <React.Fragment>
            <div>
                <Typography display="inline" >{`UserID: ${props.post.userId}`}</Typography>
                <Typography display="inline" sx={{float: "right"}}>{`ID: ${props.post.id}`}</Typography>
            </div>
            <div>
                <TextField
                    name="title"
                    label="title"
                    value={props.post.title}
                    onChange={props.handleOnChange}
                    fullWidth
                />
            </div>
            <div>           
                <TextField
                    name="body"
                    label="description"
                    value={props.post.body}
                    onChange={props.handleOnChange}
                    minRows={12}
                    multiline
                    fullWidth
                />
            </div>
        </React.Fragment> 
    )
}