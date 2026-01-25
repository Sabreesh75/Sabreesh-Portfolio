import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const About = ({ data }) => {
    if (!data) return null;

    return (
        <Box id="about" sx={{ py: 15, bgcolor: '#0f1014' }}>
            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="flex-start">
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Box
                                component="img"
                                src="/profile-new.jpg"
                                alt="Profile"
                                sx={{
                                    width: '100%',
                                    maxWidth: '400px',
                                    borderRadius: '20px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                    filter: 'grayscale(100%)',
                                    transition: 'filter 0.3s',
                                    '&:hover': {
                                        filter: 'grayscale(0%)'
                                    }
                                }}
                            />
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '1.5rem',
                                    lineHeight: 1.6,
                                    fontWeight: 300
                                }}
                            >
                                {data}
                            </Typography>
                            <Box sx={{ mt: 4, display: 'flex', gap: 4 }}>
                                <Box>
                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1 }}>
                                        Location
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
                                        India
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: 1 }}>
                                        Availability
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#fff', fontWeight: 500 }}>
                                        Open for work
                                    </Typography>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
