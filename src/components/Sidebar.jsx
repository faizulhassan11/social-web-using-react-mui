import {
  AccountBox,
  Contacts,
  Group,
  Home,
  ModeNight,
  Pages,
  Settings,
  Shop,
  WbSunny as WbSunnyIcon,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Switch,
} from "@mui/material";

const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      paddingRight={5}
      paddingLeft={2}
      paddingY={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#home"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <Pages />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <Shop />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <Contacts />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              component="a"
              href="#simple-list"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderRadius: "8px",
                },
              }}
            >
              <ListItemIcon>
                {mode === "light" ? <ModeNight /> : <WbSunnyIcon />}
              </ListItemIcon>
              <ListItemText primary="Dark Mode" />
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
                checked={mode === "dark"}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
