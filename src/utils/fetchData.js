/** @format */

const api = process.env.REACT_APP_RAPID_API_KEY;
const key = '87169f1224msh8562716f5943164p104b6ajsn2f58d3620d10'
console.log(key, 'here')
console.log(api)
export const exerciseOptions = {
  method: "GET",
 headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
