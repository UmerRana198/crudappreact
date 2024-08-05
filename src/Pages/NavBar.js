import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { pink } from "@mui/material/colors";
// import btlahore from "../pages/btlahore.jpg";
// import Link from '@material-ui/core/Link';

import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  IconButton,
  useTheme,
} from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { width } from "@mui/system";
// import DrawerComp from "./DrawerComp";
const PAGES = [];
const HeaderMUI = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  // console.log(isMatch);
  return (
    <React.Fragment>
      <AppBar position="static" sx={{ background: "#063970" } } > 
      <Toolbar sx={{ width: "130%" }}>
          {/* <IconButton aria-label="Example" >
                 <HomeIcon sx={{ color: pink[500] }} />
                </IconButton> */}

          <Button
            variant="link"
            color="default"
            startIcon={<HomeIcon sx={{ color: pink[700] }} />}
            href="/"
          >
            Home
          </Button>

          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "1.5rem" }}>
               BTR
              </Typography>
              {/* <DrawerComp /> */}
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
                  // <Tab key={index} label={page} component={Link} >
                  //     </Tab>
                  <Tab label={page} to={page} component={Link} />
                ))}
                {/* <Tab label="Products"></Tab>
                        <Tab label="Products"></Tab>
                        <Tab label="Products"></Tab>
                        <Tab label="Products"></Tab>
                        <Tab label="Products"></Tab> */}
              </Tabs>
             
             
             
             
              <LocalPhoneIcon /> {"  "}042 35341623-24
              {/* <Button
                to="Login"
                component={Link}
                sx={{ marginLeft: "auto" }}
                variant="contained"
              >
                Admin Login{" "}
              </Button> */}
             
            </>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        {PAGES.map((page, index) => (
          <Route key={index} exact path={`/${page}`}>
            {/* Render the component for the page here */}
            {/* For example: <Downloads /> for the "Downloads" page */}
          </Route>
        ))}
      </Routes>
    </React.Fragment>
  );
};

export default HeaderMUI;