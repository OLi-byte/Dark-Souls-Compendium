import { useState } from 'react';
import './Search.css';

const Search = ( {fetchInputValue} ) => {
    const [inputData, setInputData] = useState("");
    return ( 
        <div className='search_wrapper'>
            <input 
            className='search_input' 
            placeholder='Search...' 
            onChange={(e) => setInputData(e.target.value)} 
            value={inputData}
            onKeyPress={(e) => {
                if(e.key === "Enter") {
                    fetchInputValue(inputData);
                    setInputData("");
                }
            }}/>
        </div>
     );
}
 
export default Search;
