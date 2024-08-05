import React, { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { pink } from "@mui/material/colors";

import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const PAGES = [];

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear session, remove JWT, etc.)
    navigate("/"); // Redirect to the login page
  };

  return (
    <React.Fragment>
      <AppBar position="absolute" sx={{ background: "#0e103d" ,width:'100%'}}>
        <Toolbar>
          <Button
            variant="link"
            color="default"
            startIcon={<HomeIcon sx={{ color: "white" }} />}
            href="/"
          >
           Bahria Town Lahore
          </Button>
          {/* <Button
            variant="link"
            color="default"
            // startIcon={<HomeIcon sx={{ color: "white" }} />}
            // href="/"
            style={{marginLeft:'320px',fontSize:'20px'}}
          >
            Billing System Reports
          </Button> */}
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem" }}>
                BTR
              </Typography>
            </>
          ) : (
            <>
              <Tabs
                sx={{ margin: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) => (
                  <Tab label={page} to={page} component={Link} />
                ))}
              </Tabs>
              {/* <Button
                variant="link"
                color="inherit"
                startIcon={<LogoutIcon />}
                href="/"
              >
                Logout
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>

      
    </React.Fragment>
  );
};

export default Navbar;
