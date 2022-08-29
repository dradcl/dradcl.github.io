import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/system';
import { GlobalStyles } from '@mui/material';
import ResponsiveAppBar from '../src/ResponsiveAppBar'
import Grid from '@mui/material/Grid';
import Projects from '../src/Projects'
import Fade from '@mui/material/Fade';
import { useState } from "react";
import Head from 'next/head';

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    }
  }
});

function Portfolio() {
    const [choice] = useState(true);
    
    return (
      <Container>
        <Head>
          <meta property="og:title" content="Dominick's Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dradcliffe.me/" />
          <meta property="og:image" content="https://media-exp2.licdn.com/dms/image/C4D03AQEVderMYSXbww/profile-displayphoto-shrink_800_800/0/1644619419517?e=1662595200&v=beta&t=8UCbqDtxI55m7s9hJtjyAdke96M0O4hjNGEU_8bYqyk" />
          <meta property="og:description" content="About me, my projects, and experience." />
          <meta name="theme-color" content="#00FFF5" />
        </Head>
        <GlobalStyles
          styles= {{
            body: { backgroundColor: "#222831" }
          }}
        />,
        <ResponsiveAppBar></ResponsiveAppBar>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="left"
          justifyContent="top"
          sx={{marginTop: 5}}
        >
          <Grid item xs={9}>
            <Typography variant="h2" color="white"> Hey, I'm Dominick Radcliffe. </Typography>
            <Typography style={{display: 'inline-block'}}></Typography>
            <Typography variant="body1" color="white"> An aspiring Software Engineer studying Computer Science at Michigan State University.
            I have been programming for about 4 years now in various languages and frameworks seen below. I love to translate my hobbies and ideas
            into code for the world to enjoy. Currently, my goal is to secure an internship to get hands on experience of programming in the real world.</Typography>
          </Grid>
          <Fade in={choice === true} timeout={4000}>
          <Grid item xs={3}>
            <Box
              component="img"
              sx={{
                height: 256,
                width: 256,
                borderRadius: 1000,
                border: 3,
                borderColor: '#00FFF5'
              }}
              alt="me"
              src="https://media.discordapp.net/attachments/630277945507708928/1009268124283060244/1644619419517.jpg"
            />
          </Grid>
          </Fade>
          <Container id='projects'>
          <Grid item xs={12}>
              <Typography variant='h2' color='white' sx={{borderBottom: 1, borderColor: '#00FFF5'}}>My Projects</Typography>
          </Grid>
          </Container>
        </Grid>
        <Projects />
        <Container id='about'>
          <Grid container spacing={1}>
                <Grid item>
                  <Box></Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='h2' color='white' sx={{borderBottom: 1, borderColor: '#00FFF5'}}>About Me</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography style={{display: 'inline-block'}}></Typography>
                  <Typography variant="body1" color="white">From a young age, I was fascinated by technology and what makes it work. As a result, 
                  I am now a junior studying computer science at Michigan State University. I started to code my own projects based on my interests 
                  around my junior year of high school and have continued to do the same since. Besides this field, I enjoy astronomy, meteorology, 
                  biking, video games, and of course my cat Daisy. My favorite thing about computer science is that it has the unique advantage of being so broad that it 
                  can be applied to any situation or subfield. As a result, it allows me to mix my own interests with what I am learning and invent something 
                  entirely new.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography style={{display: 'inline-block'}}></Typography>
                </Grid>
                <Grid item xs={4.75}>
                  <Typography style={{display: 'inline-block'}}></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Box
                    component="img"
                    sx={{
                      height: 230,
                      width: 230,
                    }}
                    alt="msu"
                    src="https://upload.wikimedia.org/wikipedia/en/a/a7/Michigan_State_Athletics_logo.svg"
                  />
                </Grid>
          </Grid>
        </Container>
      </Container>
    );
}

export default Portfolio;