import React from 'react';
import 
{
    AppBar, 
    Toolbar, 
    Typography, 
    // Button, 
    IconButton, 
    Menu, 
    MenuItem
} from '@material-ui/core'
import {useStyles} from '../styles/Navbar.js'
import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => 
{
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const MENU =
    [
        {
            link:"host",
            name:" Host a session"
        },
        {
            link:"sessions",
            name:" Join a session"
        },
    ]

    return (
        <div className='Navbar'>
            <AppBar position="static">
                <Toolbar variant="dense">
                    
                    <IconButton edge="start" onClick={handleClick} className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                    </IconButton>
                        <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        >

                        {
                            MENU.map(item =><a href={`/${item.link}`}><MenuItem onClick={handleClose}>{item.name}</MenuItem></a>)
                        }

                        </Menu>
                    
                    <Typography variant="h6" color="inherit">
                    Study App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;
