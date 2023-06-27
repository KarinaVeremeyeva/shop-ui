import React from "react";
import { Box, CircularProgress } from "@mui/material";
import classes from './spinner.module.css';

const SpinnerButton = ({ loading, children }) => {
    return (
        <Box className={classes.spinnerBtnContainer}>
            {children (loading)}
            {loading && (
                <CircularProgress size={24} classes={{ root: classes.spinnerBtn }} />
            )}
        </Box>
    );
};

export default SpinnerButton;