import '../App.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'

function Projects(){
    /* 
    chess 
    trek10 site
    golf predictor
    twitter bot (?)
    this website
    */
    return(
    <div className='App'>
        <div className='section-title'>Projects</div>
        <div className='project-list'>
          <div className='project-item'>
          <Card sx={{ minWidth: 275, bgcolor: '#48484a' }}>
            <CardContent>
              <Typography variant='h5' component='div' color="white" gutterBottom>
                Distributed Chess Engine
              </Typography>
              <Divider color='white'/>
              <Typography variant="h5" component="div" color="white">
                December 2021
              </Typography>
              <Typography variant="body1" color='white'>
                As my final project for my Distributed Systems course in the Fall of 2021, I created a chess solver which utilizes a distributed system to increase the strength of moves that can be generated by a single node chess engine. 
              </Typography>
            </CardContent>
            <CardActions>
              <Button target="_blank" href="https://www.chess.mlee43.me" size="small">Demo</Button>
              <Button target="_blank" href="https://github.com/gjakubik/distChessEngine" size="small">Github Repo</Button>
              <Button target="_blank" href="/components/ChessPaper.js" size="small">Paper</Button>
            </CardActions>
          </Card>
          </div>
          <div className="project-item">
          <Card sx={{minWidth: 275, bgcolor: '#48484a' }}>
            <CardContent>
              <Typography variant='h5' component='div' color="white" gutterBottom>
                Better AWS Availability Website
              </Typography>
              <Divider color='white'/>
              <Typography variant="h5" component="div" color="white">
                July 2021
              </Typography>
              <Typography variant="body1" color='white'>
                During my internship with Trek10 in the summer of 2021, I created a website which improves upon the official AWS documentation and displays pertinent service availability information in a clean, readable table. 
              </Typography>
            </CardContent>
            <CardActions>
              <Button target="_blank" href="https://awsservices.info" size="small">Website</Button>
            </CardActions>
          </Card>
          </div>
          <div className="project-item">
          <Card sx={{minWidth: 275, bgcolor: '#48484a' }}>
            <CardContent>
              <Typography variant='h5' component='div' color="white" gutterBottom>
                Golf Predictor
              </Typography>
              <Divider color='white'/>
              <Typography variant="h5" component="div" color="white">
                December 2021
              </Typography>
              <Typography variant="body1" color='white'>
                For my final project in my Data Science course in the Fall semester of 2021, I worked with a group of classmates on designing a machine learning algorithm which predicts the rankings of PGA Tour golfers for a given year. 
              </Typography>
            </CardContent>
            <CardActions>
              <Button target="_blank" href="https://github.com/gjakubik/golfPredictor" size="small">GitHub Repo</Button>
              <Button target="_blank" href="" size="small">Paper</Button>
            </CardActions>
          </Card>
          </div>
          <div className="project-item">
          <Card sx={{minWidth: 275, bgcolor: '#48484a' }}>
            <CardContent>
              <Typography variant='h5' component='div' color="white" gutterBottom>
                Portfolio (This Website!)
              </Typography>
              <Divider color='white'/>
              <Typography variant="h5" component="div" color="white">
                January 2022
              </Typography>
              <Typography variant="body1" color='white'>
                I made this website using ReactJS and mui and it is hosted on my virtual private server through DigitalOcean. I highly recommend mui components as they are an easy way to spruce up the look of your website!
              </Typography>
            </CardContent>
            <CardActions>
              <Button target="_blank" href="https://www.mlee43.me" size="small">Website</Button>
              <Button target="_blank" href="https://github.com/michaeldlee1/personal-website" size="small">GitHub Repo</Button>
            </CardActions>
          </Card>
          </div>
        </div>
    </div>
  );
}

export default Projects;