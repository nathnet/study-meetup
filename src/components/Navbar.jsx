import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  SwipeableDrawer,
} from "@material-ui/core";
import { useStyles } from "../styles/Navbar.js";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => setAnchorEl(!anchorEl);
  const handleClose = () => setAnchorEl(false);
  const handleLinkClose = (link) => {
    history.push(`/${link}`);
    handleClose();
  };
  const MENU = [
    {
      link: "host",
      name: "Host a session",
    },
    {
      link: "sessions",
      name: "Join a session",
    },
  ];

  return (
    <div className="Navbar">
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            onClick={handleClick}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="left"
            open={anchorEl}
            onClose={handleClose}
            onOpen={handleClick}
          >
            {MENU.map((item) => (
              <MenuItem
                key={item.link}
                onClick={() => handleLinkClose(item.link)}
              >
                {item.name}
              </MenuItem>
            ))}
          </SwipeableDrawer>

          <Typography variant="h6" color="inherit">
            Study App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
