import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import projects from '../projects.json'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CodeIcon from '@mui/icons-material/Code';
import PersonIcon from '@mui/icons-material/Person';
import Fade from '@mui/material/Fade';
import { useState } from "react";

function Projects() {
    const [choice] = useState(true);
    return (
        <Container sx={{ py: 4 }} maxWidth="md">
            <Grid container spacing={4}>
                {projects.projects.map((project) => (
                    <Grid item key={1} xs={4}>
                        <Fade in={choice === true} timeout={4000}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: 1, borderColor: '#00FFF5' }}
                        >
                            <CardMedia
                                component="img"
                                image={project.image}
                                alt={project.id}
                                sx={{
                                    height:250,
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }} style={{backgroundColor: '#393E46'}}>
                                <Typography gutterBottom variant="h5" component="h2" color='white'>
                                    {project.project_name}
                                </Typography>
                                <Typography color='white'>
                                    {project.description}
                                </Typography>
                                <Typography style={{display: 'inline-block'}}></Typography>
                                <Grid item container spacing={0.5}>
                                    <Grid item xs={1.75}>
                                        <AccessTimeIcon sx={{color:'white'}}/>
                                    </Grid>
                                    <Grid item xs={10.25}>
                                        <Typography gutterBottom variant="subtitle1" component="h2" color='white' verticalalign='middle' display='inline-flex'>
                                        {project.date}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1.75}>
                                        <CodeIcon sx={{color:'white'}}/>
                                    </Grid>
                                    <Grid item xs={10.25}>
                                        <Typography gutterBottom variant="subtitle1" component="h2" color='white' verticalalign='middle' display='inline-flex'>
                                        {project.languages}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1.75}>
                                        <PersonIcon sx={{color:'white'}}/>
                                    </Grid>
                                    <Grid item xs={10.25}>
                                        <Typography gutterBottom variant="subtitle1" component="h2" color='white' verticalalign='middle' display='inline-flex'>
                                        {project.contributors}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions style={{backgroundColor: '#393E46'}}>
                                <Button color='secondary' size="small" sx={{color:'#00FFF5'}} href={project.link}>Explore</Button>
                            </CardActions>
                        </Card>
                        </Fade>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Projects;