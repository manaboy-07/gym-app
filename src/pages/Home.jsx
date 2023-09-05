/** @format */

import React, {useState} from "react";
import { Link } from "react-router-dom";
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import { Stack, Box } from "@mui/material";
import SearchExercises from '../components/SearchExercises'
import Logo from "../assets/images/Logo.png";
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
     <h1>Home</h1>
    </Box>
  );
};

export default Home;
