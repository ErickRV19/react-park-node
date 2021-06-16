import { Toolbar } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { Typography } from "@material-ui/core";


import React from "react";

export const Navbar = () => {
  return (
    <>
      <AppBar className="AppBar" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className=""
            color=""
            aria-label="menu"
          >
            
          </IconButton>
          <Typography variant="h6" className="">
           Equipo R6
          </Typography>
          
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
