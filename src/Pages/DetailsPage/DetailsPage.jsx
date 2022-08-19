import {useState} from 'react';
import Content from '../../Components/Content/Content';
import Details from '../../Components/Details/Details';
import Header from '../../Components/Header/Header';
import './DetailsPage.css';

const DetailsPage = () => {
    const [valueShowText, setValueShowText] = useState(false);


    return ( 
        <>
        <Header fetchShowText={(showText) => setValueShowText(showText)}/>
        <Content valueShowText={valueShowText}/>
        <Details />
        </>
     );
}
 
export default DetailsPage;