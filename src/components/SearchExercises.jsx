/** @format */

import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { fetchData , exerciseOptions } from "../utils/fetchData";
const SearchExercises = () => {
    const [search, setSearch] = useState('')
    const handleSearch = async () => {
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions )
            console.log(exercisesData)
            
        }
    }
  return (
    <Stack alignItems={"center"} mt='37px' justifyContent={"center"} p='20px'>
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb='50px'
        textAlign={"center"}>
        Awesome Exercises You <br /> should Know
      </Typography>
      <Box position={"relative"} mb='72px'>
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: {lg: '800px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
          placeholder='Search Exercises'
          type='text'
        />
        <Button onClick={handleSearch} sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: {
                lg: '175px', xs: '80px'
            },
            fontSize: {lg: '20px', xs: '14px'},
            height: '56px',
            position: 'absolute',
            right: '0'
        }} className='search-btn'>Search</Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
