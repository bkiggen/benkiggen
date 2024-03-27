import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";
import colors from "../../styles/colors";

type WorkCardT = {
  linkTo: string;
  title: string;
  description: string;
  color: string;
  image?: string;
};

const WorkCard = ({ linkTo, title, description, color, image }: WorkCardT) => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        boxSizing: "border-box",
        padding: "3px",
      }}
    >
      <Box>
        <Link to={linkTo}>
          <Box
            sx={{
              width: "100%",
              paddingTop: "64%",
              position: "relative",
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "2px",
              }}
            />
          </Box>
          <Box
            sx={{
              padding: "40px",
              background: color,
              borderRadius: "0 0 2px 2px",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "white",
                fontWeight: "700",
                fontSize: "32px",
                fontFamily: "var(--display-font)",
                marginBottom: "4px",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "500",
                fontSize: "18px",
                fontFamily: "var(--body-font)",
                lineHeight: "26px",
              }}
            >
              {description}
            </Typography>
          </Box>
        </Link>
      </Box>
    </Grid>
  );
};

export default WorkCard;
