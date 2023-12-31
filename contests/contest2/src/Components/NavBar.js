import React,{useState} from "react";

const Navbar=({onSearch})=>{
    const[searchQuery,setSearchQuery]=useState("");
    const handleSearch=()=>{
        onSearch(searchQuery);
    };

    return(
        <div>
            <input type="text"value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};
export default Navbar;


