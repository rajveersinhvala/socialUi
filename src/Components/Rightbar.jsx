import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <>
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={300}>
            Online Friends
          </Typography>
          <AvatarGroup>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar>+3</Avatar>
          </AvatarGroup>
          <Typography variant="h6" fontWeight={300} mt={3} mb={3}>
            Latest Posts
          </Typography>
          <ImageList cols={3} rowHeight={164}>
            <ImageListItem>
              <img
                src="https://images.pexels.com/photos/13356439/pexels-photo-13356439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="1"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://images.pexels.com/photos/6195166/pexels-photo-6195166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="2"
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://images.pexels.com/photos/15520825/pexels-photo-15520825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="3"
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={300} mt={3} mb={3}>
            Latest Conversations
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  alt="Remy Sharp"
                  src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600"
                />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Box>
    </>
  );
};

export default Rightbar;
