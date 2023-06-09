import React from "react";
import { Typography, Button, IconButton } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import classes from './access-denied.module.css';
import { useNavigate } from "react-router-dom";

const AccessDenied = () => {
    const navigate = useNavigate();
    const onClickHandler = () => navigate('/');

    return (
        <div className={classes.pageContainer}>
            <IconButton size="large" disableRipple>
                <LockIcon color="disabled" fontSize="inherit"/>
            </IconButton>
            <Typography variant="h5">Access denied</Typography>
            <Typography variant="h6" classes={{ root: classes.textWrapper }}>
                You don't have permission to access this page.
            </Typography>
            <Button onClick={onClickHandler} variant="contained">Go to home</Button>
        </div>
    );
};

export default AccessDenied;