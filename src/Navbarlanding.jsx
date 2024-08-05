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
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from "@mui/icons-material/Home";
import Cookies from 'js-cookie';

const HeaderMUI = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  // State for dropdown menus
  const [anchorElMaintenance, setAnchorElMaintenance] = useState(null);
  const [anchorElNetMetering, setAnchorElNetmetring] = useState(null);
  const [anchorElSettings, setAnchorElSettings] = useState(null);

  // Function to handle opening dropdown menus
  const handleDropdownClick = (event, dropdownName) => {
    if (dropdownName === "Maintenance") {
      setAnchorElMaintenance(event.currentTarget);
    } else if (dropdownName === "NetMetering") {
      setAnchorElNetmetring(event.currentTarget);
    } else if (dropdownName === "Settings") {
      setAnchorElSettings(event.currentTarget);
    }
  };

  // Function to handle closing dropdown menus
  const handleDropdownClose = (dropdownName) => {
    if (dropdownName === "Maintenance") {
      setAnchorElMaintenance(null);
    } else if (dropdownName === "NetMetering") {
      setAnchorElNetmetring(null);
    } else if (dropdownName === "Settings") {
      setAnchorElSettings(null);
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear JWT token from cookies
    Cookies.remove("jwtToken");
    // Navigate to the login page
    navigate("/");
  };

  return (
    <React.Fragment>
      <AppBar position="absolute" sx={{ background: "#063970" }}>
        <Toolbar>
          <Button
            variant="link"
            color="default"
            startIcon={<HomeIcon sx={{ color: pink[700] }} />}
            href="/"
          >
            Home
          </Button>

          {/* Tabs and Dropdowns */}
          <Tabs
            sx={{ margin: "auto" }}
            textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Tab
              label="Maintenance"
              aria-controls="menu-maintenance"
              aria-haspopup="true"
              onClick={(e) => handleDropdownClick(e, "Maintenance")}
            />
          </Tabs>

          {/* Maintenance Dropdown Menu */}
          <Menu
            id="menu-maintenance"
            anchorEl={anchorElMaintenance}
            open={Boolean(anchorElMaintenance)}
            onClose={() => handleDropdownClose("Maintenance")}
          >
            <MenuItem
              component={Link}
              to="/dashBoard"
              onClick={() => handleDropdownClose("Maintenance")}
            >
              Maintenance Dashboard
            </MenuItem>
            <MenuItem
              component={Link}
              to="/AmountPaidUnpaid"
              onClick={() => handleDropdownClose("NetMetering")}
            >
              Amount Paid /Unpaid
            </MenuItem>
            <MenuItem
              component={Link}
              to="/BillsPaidUnpaid"
              onClick={() => handleDropdownClose("NetMetering")}
            >
              Bills Paid /Unpaid
            </MenuItem>
          </Menu>

          {/* Settings Dropdown Menu */}
          <Menu
            id="menu-settings"
            anchorEl={anchorElSettings}
            open={Boolean(anchorElSettings)}
            onClose={() => handleDropdownClose("Settings")}
          >
            {/* You can add more MenuItem components here */}
          </Menu>

          {/* Logout Button */}
          <Button
            variant="link"
            color="inherit"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default HeaderMUI;
