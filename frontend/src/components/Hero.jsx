import React from 'react';
import { Box, Typography, Button, Container, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';

const Hero = ({ data }) => {
    if (!data) return null;

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                bgcolor: '#0f1014'
            }}
        >
            {/* Background Image Layer */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url(/ai-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) contrast(1.1) brightness(0.6)',
                    zIndex: 0,
                }}
            />

            {/* Gradient Overlay for Text Readability */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, #0f1014 0%, rgba(15, 16, 20, 0.8) 50%, rgba(15, 16, 20, 0.2) 100%)',
                    zIndex: 1,
                }}
            />

            <Container maxWidth="xl" sx={{ height: '100%', position: 'relative', zIndex: 2 }}>
                <Box sx={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',
                    py: 8
                }}>

                    {/* Content - Left Aligned */}
                    <Box sx={{ maxWidth: '900px', pl: { md: 4 } }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 900,
                                    color: '#fff',
                                    fontSize: { xs: '3.5rem', md: '6rem' },
                                    lineHeight: 0.9,
                                    mb: 3,
                                    letterSpacing: -1,
                                    textTransform: 'uppercase'
                                }}
                            >
                                {data.name}
                            </Typography>

                            <Typography
                                variant="h4"
                                sx={{
                                    color: 'rgba(255,255,255,0.9)',
                                    fontWeight: 300,
                                    fontSize: { xs: '1.2rem', md: '1.8rem' },
                                    mb: 6,
                                    letterSpacing: 4,
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 2,
                                    '&::before': {
                                        content: '""',
                                        width: '60px',
                                        height: '2px',
                                        bgcolor: '#00e5ff'
                                    }
                                }}
                            >
                                {data.role}
                            </Typography>

                            <Stack direction="row" spacing={3} sx={{ mb: 8 }}>
                                <Button
                                    variant="outlined"
                                    href={`mailto:${data.email}`}
                                    sx={{
                                        borderRadius: '50px',
                                        borderColor: '#fff',
                                        color: '#fff',
                                        px: 5,
                                        py: 1.5,
                                        fontSize: '1rem',
                                        letterSpacing: 1,
                                        borderWidth: '1px',
                                        '&:hover': {
                                            borderColor: '#00e5ff',
                                            color: '#00e5ff',
                                            bgcolor: 'rgba(0, 229, 255, 0.1)',
                                            borderWidth: '1px'
                                        }
                                    }}
                                >
                                    Hire Me
                                </Button>
                                <Button
                                    variant="text"
                                    href="#portfolio"
                                    sx={{
                                        color: 'rgba(255,255,255,0.8)',
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1rem',
                                        letterSpacing: 1,
                                        '&:hover': {
                                            color: '#fff',
                                            bgcolor: 'transparent'
                                        }
                                    }}
                                >
                                    Portfolio
                                </Button>
                            </Stack>

                            <Stack direction="row" spacing={2} alignItems="center">
                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', mr: 2, letterSpacing: 1 }}>FOLLOW ME</Typography>
                                <IconButton
                                    href={`https://github.com/${data.github}`}
                                    target="_blank"
                                    sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#fff', transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}
                                >
                                    <GitHubIcon />
                                </IconButton>
                                <IconButton
                                    href={data.linkedIn}
                                    target="_blank"
                                    sx={{ color: 'rgba(255,255,255,0.7)', '&:hover': { color: '#0077b5', transform: 'translateY(-3px)' }, transition: 'all 0.3s' }}
                                >
                                    <LinkedInIcon />
                                </IconButton>
                            </Stack>
                        </motion.div>
                    </Box>

                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
