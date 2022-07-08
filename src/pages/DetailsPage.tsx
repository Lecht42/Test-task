import '../App.css';
import { useParams } from 'react-router-dom';
import EditForm from './components/EditForm';

export default function DetailsPage() {    
    const { id } =  useParams();
    
    return ( <EditForm id={ id } /> )
}