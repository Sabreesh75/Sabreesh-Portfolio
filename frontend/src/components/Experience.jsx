import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const Experience = ({ data }) => {
    if (!data) return null;

    const TimelineItem = ({ role, company, duration, location, description, last }) => (
        <Box sx={{ display: 'flex', mb: last ? 0 : 4 }}>
            {/* Timeline Line */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mr: 4 }}>
                <Box
                    sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: '#00e5ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 10px rgba(0,229,255,0.5)',
                        zIndex: 1
                    }}
                >
                    <Typography variant="caption" sx={{ color: '#000', fontWeight: 'bold' }}>
                        {duration.split(' ')[0]} {/* Roughly take year */}
                    </Typography>
                </Box>
                {!last && <Box sx={{ width: 2, flex: 1, bgcolor: 'rgba(255,255,255,0.1)', my: 1 }} />}
            </Box>

            <Box sx={{ pt: 1 }}>
                <Typography variant="h6" sx={{ color: '#fff', textTransform: 'uppercase', fontWeight: 700, letterSpacing: 1 }}>
                    {company}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'rgba(255,255,255,0.7)', mb: 2 }}>
                    {role}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: 600 }}>
                    {description.join(' ')}
                </Typography>
            </Box>
        </Box>
    );

    return (
        <Box id="experience" sx={{ py: 12, bgcolor: '#0f1014' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ color: '#fff', mb: 6, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                            Experience
                        </Typography>
                        {data.map((exp, index) => (
                            <TimelineItem
                                key={index}
                                {...exp}
                                last={index === data.length - 1}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Experience;
