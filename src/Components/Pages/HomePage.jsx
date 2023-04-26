import React, { useEffect, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import mystore from '../../Redux/store';
// const url = "https://openlibrary.org/search.json?title="

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const history = useNavigate();
  console.log(searchQuery);
  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
   
  const handleSearchButtonClick = () => {
    if (searchQuery.trim() !== '') {
      history(`/searchRes`);
    //   payload();
    }
  };
     useEffect(()=>{
        fetch(`https://openlibrary.org/search.json?title=${searchQuery}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            mystore.dispatch({
                type:"book",
                payload:data
            })
        })
    },[searchQuery])


  return (
    <div style={{display: "flex", justifyContent: "center"}}>
  <TextField
    label="Search for books"
    value={searchQuery}
    onChange={handleSearchQueryChange}
    variant="outlined"
  />
  <Button variant="contained" color="primary" onClick={handleSearchButtonClick}>
    Search
  </Button>
</div>
  );
}

export default HomePage;
