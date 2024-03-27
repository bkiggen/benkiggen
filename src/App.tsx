import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useStore } from "./store";
import Home from "./pages/Home";
import AppHeader from "./components/AppHeader";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  // Directly access setIsShrunk from the store
  const setIsShrunk = useStore((state) => state.setIsShrunk);
  const isShrunk = useStore((state) => state.isShrunk);
  const offset = isShrunk ? "56px" : "96px";
  const scrollableDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollableDivRef.current) {
        // Call setIsShrunk directly with the new value
        setIsShrunk(scrollableDivRef.current.scrollTop > 100);
      }
    };

    const div = scrollableDivRef.current;
    if (div) {
      div.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener("scroll", handleScroll);
      }
    };
    // Adding setIsShrunk as a dependency to useEffect
  }, [setIsShrunk]);

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        height: "100vh",
        width: "100%",
      }}
    >
      <Router>
        <AppHeader />
        <Box
          ref={scrollableDivRef}
          sx={{
            height: `calc(100vh - ${offset})`,
            overflowY: "auto",
            marginTop: `${offset}`,
            "*": {
              boxSizing: "border-box",
            },
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Box>
      </Router>
    </Box>
  );
};

export default App;
