import React from 'react';
import { Box, Container, Typography, Card, CardContent, Grid } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const Education = ({ data }) => {
    if (!data) return null;

    return (
        <Box id="education" sx={{ py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h2" color="primary" align="center" gutterBottom>
                    Education
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {data.map((edu, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', bgcolor: '#132f4c' }}>
                                <Box sx={{ p: 2 }}>
                                    <SchoolIcon sx={{ fontSize: 60, color: 'secondary.main' }} />
                                </Box>
                                <CardContent>
                                    <Typography variant="h5" color="textPrimary" gutterBottom>
                                        {edu.institution}
                                    </Typography>
                                    <Typography variant="h6" color="primary">
                                        {edu.degree}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {edu.year}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Education;
