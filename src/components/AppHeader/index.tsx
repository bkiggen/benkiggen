import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import colors from "../../styles/colors";
// import NavItem from "./NavItem";

const AppHeader = () => {
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  // const token = localStorage.getItem("userToken");

  const onLogout = async () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        background: "#1c1c1c",
        height: "72px",
        width: "calc(100% - 50px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 24px",
        marginBottom: "36px",
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            marginRight: "48px",
          }}
        >
          <Link to="/">
            <Typography
              sx={{
                color: colors.darkMint,
                fontSize: "32px",
                fontWeight: "600",
              }}
            >
              benjamin kiggen
            </Typography>
          </Link>
          <Box sx={{ display: "flex", marginTop: "-4px" }}>
            <Link to="/">
              <Typography
                sx={{
                  color: colors.lightGrey,
                  fontSize: "18px",
                  fontWeight: "600",
                  marginRight: "12px",
                }}
              >
                projects
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                sx={{
                  color: colors.lightGrey,
                  fontSize: "18px",
                  fontWeight: "600",
                  marginRight: "12px",
                }}
              >
                resume
              </Typography>
            </Link>
            <Link to="/">
              <Typography
                sx={{
                  color: colors.lightGrey,
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                contact
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
          onClick={onLogout}
        >
          <GitHubIcon sx={{ color: colors.darkMint, fontSize: "42px" }} />
        </Link>
      </Box>
    </Box>
  );
};

export default AppHeader;
