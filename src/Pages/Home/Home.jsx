import { useState } from 'react';
import Cards from '../../Components/Cards/Cards';
import Content from '../../Components/Content/Content';
import Header from '../../Components/Header/Header';
import Search from '../../Components/Search/Search';
import './Home.css';

const Home = () => {
    const [valueShowText, setValueShowText] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");
    return ( 
        <div className='wrapper'>
            <Header fetchShowText={(showText) => setValueShowText(showText)}/>
            <Content valueShowText={valueShowText}/>
            <Search fetchInputValue={(inputValue) => setSearchInputValue(inputValue)}/>
            <Cards searchInputValue={searchInputValue}/>
        </div>
     );
}
 
export default Home;
