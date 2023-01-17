import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { BooksList } from "../books-list/books-list";
import { Route, Routes, Navigate, Link} from "react-router-dom"
import { Box } from '@mui/system';
import {LoginDialog} from "../login/login-dialog"
import { useState } from 'react';
 
export const AppLayout = () => {

  const [openLoginDialog, setOpenLoginDialog] = useState(false)
  
  const handleLoginSubmit =(username, password) => {
    console.log(username, password)
  }
  const handleLoginClose = () => {
    setOpenLoginDialog(false)
  }

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
          <Link to="/" style={{textDecoration:"none", flexGrow: 1}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LIBRARY
          </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 0,
            }}
            >
          <Button
           onClick={()=>{
            setOpenLoginDialog(true)

           }}
           sx={{my:2, color: "white", display:"block"}} >Login</Button>
          </Box>
        </Toolbar>
            </Container>
        </AppBar>
        <Routes>
          <Route path="/books" exact element={<BooksList/>}/>
          <Route path="*" element={<Navigate to="/books"
          replace/>}/> 
        </Routes>
        <LoginDialog open={openLoginDialog}
        handlesubmit={handleLoginSubmit}
        handleClose={handleLoginClose}
        />  
        </>
    )
}    