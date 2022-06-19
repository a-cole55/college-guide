import React, { useState } from 'react';
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

export default function SearchBar({placeholder, data}){

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const wordSearched = event.target.value;
        //clearing input functionality
        setWordEntered(wordSearched)

        //search through data and filter for correlating data
        const newlyFiltered = data.filter((value) => {
            return value.name.toLowerCase().includes(wordSearched.toLowerCase());
        })

        //open and close data box
        if (wordSearched === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newlyFiltered)
        }
    };
    const clearInput = () => {
        // empty data from array/list of search results
        setFilteredData([]);
        //remove text from input bar
        setWordEntered("");
    }

    return(
        <div  className='search'>
            <div className='searchInputs'>
                <input 
                type="text" 
                placeholder={placeholder}
                value={wordEntered}
                onChange={handleFilter} 
                />
                <div className='searchIcon'>
                    {filteredData.length === 0 ? (
                    <SearchIcon /> 
                    ) : (
                    <CloseIcon id="clearbtn" onClick={clearInput} /> 
                )}
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className='dataResult'>
                {filteredData.map((value, key) => {
                    return (
                    <a className="dataItem" href={value.url} target="_blank" rel="noopener noreferrer">
                        {/* target blank allows you to open url in new tab */}
                        <p>{value.name}</p>
                    </a>
                    );
                })}
            </div>
            )

            }
            
        </div>
    )
}
