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
  const { pathname } = useLocation();

  return (
    <Grid
      item
      xs={12}
      md={6}
      lg={4}
      sx={{
        boxSizing: "border-box",
        padding: "3px",

        "&:hover": {
          "& .cardText": {
            color: colors.whisperMint,
          },
        },
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
              minHeight: "200px",
              padding: "40px",
              background: color,
              borderRadius: "0 0 2px 2px",
            }}
          >
            <Typography
              className="cardText"
              variant="h6"
              sx={{
                color: "white",
                fontWeight: "600",
                fontSize: "1.5em",
              }}
            >
              {title}
            </Typography>
            <Typography
              className="cardText"
              variant="body1"
              sx={{
                color: "white",
                fontWeight: "500",
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
