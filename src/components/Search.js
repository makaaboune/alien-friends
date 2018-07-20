import React from 'react';

const Search = ({searchProps}) => {
  return (
    <input className="search mb3 tc" type="search" placeholder="Search Aliens !" onChange={searchProps}/>
  )
}
export default Search;
