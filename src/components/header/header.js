import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import AccountToolbar from "../account-toolbar/account-toolbar";

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Shop
                    </Typography>
                    <AccountToolbar />
                </Toolbar>
            </AppBar>
        </Box>  
    );
};

export default Header;