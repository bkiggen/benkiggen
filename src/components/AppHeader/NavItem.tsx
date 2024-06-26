import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import colors from "../../styles/colors";

type NavItemT = {
  linkTo: string;
  title: string;
  pathname: string;
};

const NavItem = ({ linkTo, title, pathname }: NavItemT) => {
  const color = pathname === linkTo ? colors.mint : "white";

  return (
    <Box sx={{ marginRight: "48px" }}>
      <Link to={linkTo}>
        <Typography
          variant="h6"
          sx={{
            color,
            fontWeight: "500",
            "&:hover": {
              color: colors.mint,
            },
          }}
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default NavItem;
