import '../App.css';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'


/* helper function to calculate viewport width */
function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return (v * w) / 100;
}

function About(){
    return(
    <div className='App'>
        <div className='section-title'>About Me</div>
        <div className='about-block'>
          <div className='about-blurb'>
              Hi! My name is Michael Lee and I am a senior Computer Science major at the University of Notre Dame.<br></br>
              Outside of class, I work as a Teaching Assistant for Systems Programming and Operating Systems. In my free time I enjoy reading, playing video games, and biking as well as spending time with my friends and family.<br></br><br></br>

              All areas of computer science interest me, but I am particularly interested in data science, systems programming, and computing theory. I am a hard-working, motivated individual driven by my love of learning and desire to have a positive impact on those around me.
          </div>
        </div>
    </div>
  );
}

export default About;