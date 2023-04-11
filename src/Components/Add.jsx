import AddIcon from "@mui/icons-material/Add";
import { Fab, Tooltip } from "@mui/material";
import React from "react";

const Add = () => {
  return (
    <>
      <Tooltip title="Post">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
    </>
  );
};

export default Add;
