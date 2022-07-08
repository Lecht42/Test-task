import React from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
import EditForm from './components/EditForm';
import CreatingForm from './components/CreatingForm';

export default function CreatePostPage() {    
    const { id } =  useParams();
    
    return ( <CreatingForm /> )
}