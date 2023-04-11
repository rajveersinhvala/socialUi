import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Image, PersonAddAlt, VideoCameraBack } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 300,
  bgcolor: "background.paper",
  shadow: "md",
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const Add = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        title="Post"
        sx={{ position: "fixed", bottom: 20, left: 15 }}
        onClick={handleOpen}
      >
        <Fab color="primary" aria-label="add" size="medium">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{}}>
            <Typography variant="h6" color="gray" textAlign="center">
              Create Post
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar src=""></Avatar>
              <Typography sx={{ ml: 2 }}> Lorem </Typography>
            </Box>
            <TextField
              id="standard-multiline-static"
              multiline
              fullWidth
              rows={4}
              placeholder="Type..."
              variant="standard"
              sx={{ mt: 2 }}
            />
            <Button sx={{ mt: 2 }} variant="contained">
              Send
            </Button>
            <Stack direction="row" gap={1} mt={4} mb={30}>
              <EmojiEmotionsIcon color="primary" sx={{ cursor: "pointer" }} />
              <Image color="primary" sx={{ cursor: "pointer" }} />
              <VideoCameraBack color="primary" sx={{ cursor: "pointer" }} />
              <PersonAddAlt color="primary" sx={{ cursor: "pointer" }} />
            </Stack>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Add;
