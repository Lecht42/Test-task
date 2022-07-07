import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Header() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Home
                </Typography>               
                    <Button href="/" color="inherit">
                        Create post
                    </Button>
            </Toolbar>
        </AppBar>
    )
}