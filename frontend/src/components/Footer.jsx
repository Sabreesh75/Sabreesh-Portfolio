import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ py: 3, bgcolor: '#000', textAlign: 'center' }}>
            <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary">
                    © {new Date().getFullYear()} Sabreesh T K. All rights reserved.
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    Built with React, Node.js, and MUI.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
