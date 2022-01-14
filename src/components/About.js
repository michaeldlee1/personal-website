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
            
          </div>
        </div>
    </div>
  );
}

export default About;