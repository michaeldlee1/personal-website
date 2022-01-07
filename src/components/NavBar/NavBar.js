import React, { useState } from 'react';
import { useHistory }      from 'react-router-dom';

import AppBar     from '@mui/material/AppBar';
import Box        from '@mui/material/Box';
import Toolbar    from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button     from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon   from '@mui/icons-material/Menu';
import List         from '@mui/material/List';
import Divider      from '@mui/material/Divider';
import ListItem     from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import '../../App.css';
import {PAGES} from '../../constants.js';
import {Link} from "react-router-dom";
import { NoEncryption } from '@mui/icons-material';

const listContainer = {
    display: 'flex',
    flexDirection: 'row',
    order: 1,
    padding: 0,
    color: '#FFFF'
  };

const textSize = {
    fontSize: "45px",
}

function NavBar(){
    return(
        <Box>
            <List style={listContainer}>
                {PAGES.map((page) => (
                    <ListItem button component={Link} to={page.link} key={page.id}>
                    <ListItemText primary={page.name} style={textSize} />
                </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default NavBar;