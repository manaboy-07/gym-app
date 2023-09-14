/** @format */

import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
  return (
    <Box
      id='exercise'
      sx={{
        mx: { lg: "110px" },
      }}
      mt='50px'
      p='20pz'>
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack
        direction={"row"}
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap='wrap'
        justifyContent={"center"}>
        {exercises.map((exercise, index) => (
          <p>{exercise.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
