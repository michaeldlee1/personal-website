import '../App.css';
import React from 'react';
import '../App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

function Home(){
    return(
    <div className='App'>
      <div className='hero-block'>
        <div className='hero-image'>
        </div>
        <div className='blurb-pic'></div>
        <div className='hero-blurb'>
          <h2>Computer Science</h2> 
          <h2>University of Notre Dame 2022</h2> 
          <div className="icon-list">
            <Button target="_blank" href="mailto:mlee43@nd.edu"><EmailIcon sx={{ color: "white"}} /></Button>
            <Button target="_blank" href="https://github.com/michaeldlee1"><GitHubIcon sx={{color: "white"}}/></Button>
            <Button target="_blank" href="https://www.linkedin.com/in/michael-lee-ab06aa174/"><LinkedInIcon sx={{color: "white"}}/></Button>
            <Button target="_blank" href="../pdfs/ResumeSpring2022.pdf"><InsertDriveFileIcon sx={{color: "white"}}/></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;