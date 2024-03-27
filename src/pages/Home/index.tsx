import React from "react";

import { Grid } from "@mui/material";

import WorkCard from "./WorkCard";
import workItems from "./mockWorkItems";

const Home = () => {
  return (
    <Grid container sx={{ paddingTop: "120px", paddingBottom: "120px" }}>
      {workItems.map((workItem) => (
        <WorkCard
          key={workItem.title}
          title={workItem.title}
          linkTo={workItem.link}
          description={workItem.description}
          color={workItem.color}
          image={workItem.image}
        />
      ))}
    </Grid>
  );
};

export default Home;
