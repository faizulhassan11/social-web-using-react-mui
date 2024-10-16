import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  InputAdornment,
} from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import { Mail, Notifications, Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#424242" : "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  display: "flex",
  alignItems: "center",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Facebook
        </Typography>
        <PublicIcon sx={{ display: { xs: "block", sm: "none" } }} />

        <Search>
          <InputBase
            placeholder="Search.."
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon
                  sx={{
                    color: theme.palette.mode === "dark" ? "white" : "gray",
                  }}
                />
              </InputAdornment>
            }
            sx={{
              width: "100%",
              color: theme.palette.mode === "dark" ? "white" : "black",
              "&::placeholder": {
                color: theme.palette.mode === "dark" ? "white" : "gray",
              },
            }}
          />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2019/08/11/11/28/man-4398724_1280.jpg"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://cdn.pixabay.com/photo/2019/08/11/11/28/man-4398724_1280.jpg"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
