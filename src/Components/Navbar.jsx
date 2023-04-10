import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  alignContents: "center",
}));

const Navbar = () => {
  const [open, setopen] = useState(false);
  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            VALA
          </Typography>
          <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
          <Search>
            <InputBase placeholder="Search..." />
          </Search>
          <Icons>
            <Badge
              badgeContent={4}
              color="error"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Mail />
            </Badge>
            <Badge
              badgeContent={4}
              color="error"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              <Notifications />
            </Badge>
            <Avatar
              sx={{ height: 30, width: 30 }}
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              onClick={(e) => setopen(true)}
            />
          </Icons>
          <Menu
            id="basic-menu"
            // anchorEl={anchorEl}
            open={open}
            aria-labelledby="basic-demo-button"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            onClose={(e) => setopen(false)}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
