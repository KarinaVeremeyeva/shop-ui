import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AccountToolbar from "./account-toolbar/account-toolbar";
import classes from './header.module.css';

const Header = () => {
    return (
        <Box className={classes.headerWrapper}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" className={classes.textWrapper}>
                        Shop
                    </Typography>
                    <AccountToolbar />
                </Toolbar>
            </AppBar>
        </Box>  
    );
};

export default Header;