import React from "react";
import BaseLayout from "./layout/BaseLayout";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import RegContextProvider from "./store/register-context";
import { SnackbarProvider } from "notistack";

function App() {


  return (
    <SnackbarProvider maxSnack={3}>
      <RegContextProvider>
        <Box>
          <CssBaseline />
          <BaseLayout />
        </Box>
      </RegContextProvider>
    </SnackbarProvider>
  )
}

export default App;