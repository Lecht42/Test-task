import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import PageNames from '../../constants/PageNames';

export default function Header() {
    
    const pathname = useLocation().pathname;

    const pageName = PageNames.get(pathname.replace(/[0-9]/g, ''))

    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    {pageName}
                </Typography>               
                <Button href="/create" variant="contained" color="success">
                    Create post
                </Button>
            </Toolbar>
        </AppBar>
    )
}