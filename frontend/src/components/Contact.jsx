import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const Contact = ({ data }) => {
    return (
        <Box id="contact" sx={{ py: 15, bgcolor: '#0f1014' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">

                    {/* Left Info Side */}
                    <Grid item xs={12} md={5}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#00e5ff',
                                    textTransform: 'uppercase',
                                    letterSpacing: 2,
                                    mb: 2,
                                    fontWeight: 600
                                }}
                            >
                                Contact
                            </Typography>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#fff',
                                    fontWeight: 800,
                                    lineHeight: 1,
                                    mb: 4
                                }}
                            >
                                Let's Work <br /> Together
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>
                                    EMAIL
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 400 }}>
                                    {data?.email}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>
                                    PHONE
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#fff', fontWeight: 400 }}>
                                    {data?.contactNo}
                                </Typography>
                            </Box>
                        </motion.div>
                    </Grid>

                    {/* Right Form Side */}
                    <Grid item xs={12} md={7}>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <form noValidate autoComplete="off">
                                <Grid container spacing={4}>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="NAME"
                                            variant="standard"
                                            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.5)', letterSpacing: 1 } }}
                                            InputProps={{
                                                style: { color: '#fff', fontSize: '1.2rem', paddingBottom: 10 },
                                                underline: {
                                                    '&:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                                                    '&:hover:not(.Mui-disabled):before': { borderBottomColor: '#fff' },
                                                    '&:after': { borderBottomColor: '#00e5ff' }
                                                }
                                            }}
                                            sx={{
                                                '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#fff' },
                                                '& .MuiInput-underline:after': { borderBottomColor: '#00e5ff' }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            fullWidth
                                            label="EMAIL"
                                            variant="standard"
                                            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.5)', letterSpacing: 1 } }}
                                            InputProps={{
                                                style: { color: '#fff', fontSize: '1.2rem', paddingBottom: 10 }
                                            }}
                                            sx={{
                                                '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#fff' },
                                                '& .MuiInput-underline:after': { borderBottomColor: '#00e5ff' }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            fullWidth
                                            label="MESSAGE"
                                            multiline
                                            rows={4}
                                            variant="standard"
                                            InputLabelProps={{ style: { color: 'rgba(255,255,255,0.5)', letterSpacing: 1 } }}
                                            InputProps={{
                                                style: { color: '#fff', fontSize: '1.2rem', paddingBottom: 10 }
                                            }}
                                            sx={{
                                                '& .MuiInput-underline:before': { borderBottomColor: 'rgba(255,255,255,0.2)' },
                                                '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: '#fff' },
                                                '& .MuiInput-underline:after': { borderBottomColor: '#00e5ff' }
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button
                                            variant="textSize"
                                            disableRipple
                                            sx={{
                                                color: '#fff',
                                                fontSize: '1.1rem',
                                                letterSpacing: 2,
                                                textTransform: 'uppercase',
                                                justifyContent: 'flex-start',
                                                px: 0,
                                                '&:hover': { bgcolor: 'transparent', color: '#00e5ff' }
                                            }}
                                        >
                                            Send Message  &rarr;
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;
