import { useState } from 'react';
import './Header.css';
import DarkSouls_logo from '../../assets/DarkSouls_logo.png';

const Header = ( {fetchShowText} ) => {
    const [showText, setShowText] = useState(false);
    return ( 
        <div className='Header'>
            <div className='logo_wrapper'>
            <img className='logo' 
            src={DarkSouls_logo} 
            alt='HeaderLogo' />
            </div>
            <div className='Header_wrapper'>
            <h2>Dark Souls Compendium</h2>
            <button className='button_about' onClick={() => {
                if(showText === false) {
                    setShowText(true);
                } else {
                    setShowText(false);
                }
                fetchShowText(showText);
            }}>About</button>
            </div>
        </div>
     );
}
 
export default Header;
