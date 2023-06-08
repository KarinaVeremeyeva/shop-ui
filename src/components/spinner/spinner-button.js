import React from "react";
import { Box, CircularProgress } from "@mui/material";

const SpinnerButton = ({ loading, children }) => {
    return (
        <Box sx={{ m: 1, position: 'relative' }}>
            {children (loading)}
            {loading && (
                <CircularProgress
                    size={24}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                    }}
                />
            )}
        </Box>
    );
};

export default SpinnerButton;