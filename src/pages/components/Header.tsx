import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PageNames from '../../constants/PageNames';

export default function Header() {
    const location = useLocation();

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>
                    {PageNames.get(location.pathname)}
                </Typography>               
                    <Button href="/create" color="inherit">
                        Create post
                    </Button>
            </Toolbar>
        </AppBar>
    )
}