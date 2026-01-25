import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Modal, Fade, Backdrop, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'; // Use outline for cleaner look

const Skills = ({ data }) => {
    const [open, setOpen] = useState(false);
    const [selectedSkill, setSelectedSkill] = useState(null);

    if (!data) return null;

    // Detailed topics for each skill
    const skillDetails = {
        "HTML": ["List", "Link", "Image", "Table", "Form structure", "Input type", "Buttons"],
        "CSS": ["Inline", "Internal", "External", "Color and Background Properties", "Text Styling", "Box-model", "Flexbox"],
        "Bootstrap": ["Bootstrap Grid System", "Breakpoints", "Responsive Layout Used Grid", "Components", "Container Classes"],
        "Javascript (ES6+)": ["Variable", "Datatype", "Operators", "Conditional Statement", "Loops", "Functions", "Arrays", "Objects", "DOM", "OOPS", "ES6", "Error handling", "Asynchronous", "Event"],
        "React.js (Hooks, Context, Router)": ["Components", "props", "State Management", "React Hooks", "API Integration", "Deployment"],
        "Node.js": ["NPM (Node Package Manager)", "Error Handling"],
        "Express.js": ["CORS Handling", "Environment Variables With dotenv", "RESTful API", "Request handling", "Nodemon", "Mongoose"],
        "RESTful API": ["HTTP Methods", "Status Codes", "JSON", "Endpoints", "Authentication"],
        "MongoDB": ["Database and collection creation"],
        "Mongoose": ["Schema Design", "Models", "CRUD Operations", "Validation"],
        "GitHub": ["Repositories", "Commits", "Branches", "Pull Requests"],
        "VS Code": ["Debugging", "Extensions", "Shortcuts", "Themes"],
        "NPM": ["Package Management", "Scripts", "Dependencies"],
        "Postman": ["API Testing", "Collections", "Environments"]
    };

    const handleOpen = (skillName) => {
        // Normalized search for keys if exact match fails (handles simple variatons)
        const key = Object.keys(skillDetails).find(k => k.toLowerCase().includes(skillName.toLowerCase().split(' ')[0])) || skillName;

        setSelectedSkill({
            name: skillName,
            topics: skillDetails[skillName] || skillDetails[key] || ["Core Concepts", "Advanced Techniques", "Best Practices", "Real-world Application"]
        });
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    // Combine all skills for grid display
    const allTechnicalSkills = [
        ...data.frontend.map(s => ({ name: s, category: 'Frontend' })),
        ...data.backend.map(s => ({ name: s, category: 'Backend' })),
        ...data.database.map(s => ({ name: s, category: 'Database' })),
        ...data.tools.map(s => ({ name: s, category: 'Tool' })),
    ];

    const SkillCard = ({ name, category, index }) => (
        <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{
                y: -5,
                boxShadow: '0 0 20px rgba(0, 229, 255, 0.3)',
                borderColor: '#00e5ff',
                cursor: 'pointer',
                transition: { duration: 0.2, delay: 0 }
            }}
            onClick={() => handleOpen(name)}
            elevation={0}
            sx={{
                p: 3,
                bgcolor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '16px',
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                cursor: 'default',
            }}
        >
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600, fontSize: '1rem', letterSpacing: 1, textTransform: 'uppercase' }}>
                {name}
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', textTransform: 'uppercase', mt: 1, letterSpacing: 1 }}>
                {category}
            </Typography>
        </Paper>
    );

    const ServiceCard = ({ title, desc, icon: Icon, delay }) => (
        <Paper
            elevation={0}
            component={motion.div}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay, duration: 0.5 }}
            whileHover={{
                y: -5,
                boxShadow: '0 0 25px rgba(245, 0, 87, 0.4)',
                borderColor: '#f50057',
                transition: { duration: 0.2, delay: 0 }
            }}
            sx={{
                p: 4,
                bgcolor: 'rgba(20, 21, 26, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                borderRadius: '20px'
            }}
        >
            <Box sx={{
                width: 60,
                height: 60,
                bgcolor: 'rgba(245, 0, 87, 0.1)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f50057',
                mb: 3
            }}>
                <Icon fontSize="large" />
            </Box>
            <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                {title}
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                {desc}
            </Typography>
        </Paper>
    );

    return (
        <Box id="skills" sx={{ py: 15, bgcolor: '#0f1014' }}>
            <Container maxWidth="xl">
                {/* Services Section */}
                <Box sx={{ mb: 15 }}>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h6" sx={{ color: '#f50057', mb: 2, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700 }}>
                            What Can I Do?
                        </Typography>
                        <Typography variant="h2" sx={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase' }}>
                            My Services
                        </Typography>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3}>
                            <ServiceCard title="Frontend" desc="Pixel-perfect, responsive web interfaces built with modern React ecosystems." icon={CodeIcon} delay={0} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ServiceCard title="Backend" desc="Scalable, secure server-side logic and robust API architectures." icon={DnsIcon} delay={0.1} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ServiceCard title="Database" desc="Efficient data modeling, query optimization, and management." icon={StorageIcon} delay={0.2} />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <ServiceCard title="Design" desc="Clean, user-centric approaches combined with stunning visuals." icon={DesignServicesIcon} delay={0.3} />
                        </Grid>
                    </Grid>
                </Box>

                {/* Skills Grid Section */}
                <Box>
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h6" sx={{ color: '#00e5ff', mb: 2, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700 }}>
                            Expertise
                        </Typography>
                        <Typography variant="h2" sx={{ color: '#fff', fontWeight: 900, textTransform: 'uppercase' }}>
                            Technical Stack
                        </Typography>
                    </Box>

                    <Grid container spacing={3} justifyContent="center">
                        {allTechnicalSkills.map((skill, index) => (
                            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                                <SkillCard name={skill.name} category={skill.category} index={index} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>

            </Container>

            {/* Detailed Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    sx: { bgcolor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }
                }}
            >
                <Fade in={open}>
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: { xs: '90%', md: '600px' },
                        maxHeight: '85vh',
                        bgcolor: '#1a1c23',
                        border: '2px solid #00e5ff',
                        borderRadius: '20px',
                        boxShadow: '0 0 50px rgba(0, 229, 255, 0.2)',
                        p: 4,
                        outline: 'none',
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: 'rgba(255, 255, 255, 0.05)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#00e5ff',
                            borderRadius: '4px',
                        }
                    }}>
                        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 800, mb: 1, textTransform: 'uppercase' }}>
                            {selectedSkill?.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#00e5ff', mb: 3, display: 'block', letterSpacing: 2, textTransform: 'uppercase' }}>
                            Key Competencies
                        </Typography>

                        <Grid container spacing={1} sx={{ mt: 2 }}>
                            {selectedSkill?.topics.map((topic, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <ListItem disableGutters sx={{ py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: '35px' }}>
                                            <CheckCircleOutlineIcon sx={{ color: '#00e5ff', fontSize: '1.2rem' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={topic}
                                            primaryTypographyProps={{
                                                sx: { color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontWeight: 500 }
                                            }}
                                        />
                                    </ListItem>
                                </Grid>
                            ))}
                        </Grid>

                        <Box sx={{ mt: 4, textAlign: 'right' }}>
                            <Typography
                                onClick={handleClose}
                                sx={{
                                    color: 'rgba(255,255,255,0.4)',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    fontSize: '0.8rem',
                                    letterSpacing: 1,
                                    transition: 'color 0.3s',
                                    '&:hover': { color: '#fff' }
                                }}
                            >
                                Close
                            </Typography>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};

export default Skills;
