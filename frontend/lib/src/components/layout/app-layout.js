import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export const AppLayout = () => {
    return(
        <>
        <AppBar position="static">
            <Container maxWidth="xl">
            <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LIBRARY
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
            </Container>

        </AppBar>
        </>
    )
}

