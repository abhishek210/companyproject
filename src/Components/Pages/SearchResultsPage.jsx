import React from 'react'
import {useSelector} from "react-redux"
const SearchResultsPage = () => {
    const {data1} = useSelector((storedata)=>{
        return storedata;
    })
    
  return (
    <div className='card'>
       hello
    </div>
  )
}

export default SearchResultsPage