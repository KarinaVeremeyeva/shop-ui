import React from "react";
import { Grid } from "@mui/material";
import { withAuthService } from "../hoc";
import Login from "../login";

import classes from './products-page.module.css';

const AuthPage = ({ authService }) => {
    return (
        <Grid container spacing={1} className={classes.pageContainer}>
            <Grid item xs={3} />
            <Grid item xs={6}>
                <Login authService={authService} />
            </Grid>
        </Grid>
    ); 
};

export default withAuthService()(AuthPage);