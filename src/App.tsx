import React from "react";
import { ToastContainer } from "react-toastify";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Box } from "@mui/material";

import { useStore } from "./store";

import Home from "./pages/Home";
import AppHeader from "./components/AppHeader";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: "100vh",
        width: "100%",
      }}
    >
      <ToastContainer />
      <Router>
        <AppHeader />
        <Box
          sx={{
            height: "calc(100vh - 96px)",
            overflowY: "auto",
            marginTop: "96px",
            "*": {
              boxSizing: "border-box",
            },
          }}
        >
          <Box>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </Box>
  );
};

export default App;
