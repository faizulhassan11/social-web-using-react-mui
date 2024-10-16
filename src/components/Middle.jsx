import { Box } from "@mui/material";
import Post from "./Post";

const Middle = () => {
  return (
    <Box flex={4} p={2} ml={5} mr={5}>
      <Post />
      {/* <Post /> */}
    </Box>
  );
};

export default Middle;
