import {
  Box,
  Container,
  Divider,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import Add from "./Components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
