import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import '../../App.css';

export default function Header() {
    const location = useLocation();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>
                    {location.pathname}
                </Typography>               
                    <Button href="/" color="inherit">
                        Create post
                    </Button>
            </Toolbar>
        </AppBar>
    )
}