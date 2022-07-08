import { TextField } from "@mui/material";
import React, { useState } from "react";
import Post from "../../interfaces/Post";

interface FormFieldsProps {
    title?: string;
    body?: string;
    titleHandleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    descriptionHandleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    children?: React.ReactNode;
}

export default function FormFields(props : FormFieldsProps) {    
    return ( 
        <React.Fragment>
            <div>
                <TextField
                    label="title"
                    value={props.title}
                    onChange={props.titleHandleOnChange}
                    fullWidth
                />
            </div>
            <div>           
                <TextField
                    label="description"
                    value={props.body}
                    onChange={props.descriptionHandleOnChange}
                    multiline
                    fullWidth
                    minRows={8}
                />
            </div>
        </React.Fragment> 
    )
}