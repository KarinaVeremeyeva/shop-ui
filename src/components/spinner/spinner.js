import React from "react";
import { Box, CircularProgress } from "@mui/material";
import classes from "./spinner.module.css";

const Spinner = () => {
    return (
        <Box className={classes.spinnerContainer}>
            <CircularProgress />
        </Box>
    );
};

export default Spinner;