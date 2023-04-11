import { Box } from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
  return (
    <>
      <Box flex={3} p={2}>
        <Post
          image={
            "https://images.pexels.com/photos/1840142/pexels-photo-1840142.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
        <Post
          image={
            "https://images.pexels.com/photos/2768483/pexels-photo-2768483.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
        <Post
          image={
            "https://images.pexels.com/photos/12523003/pexels-photo-12523003.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
        <Post
          image={
            "https://images.pexels.com/photos/15847991/pexels-photo-15847991.jpeg?auto=compress&cs=tinysrgb&w=600"
          }
        />
      </Box>
    </>
  );
};

export default Feed;
