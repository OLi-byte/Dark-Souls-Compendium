import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './Pages/DetailsPage/DetailsPage';
import Home from './Pages/Home/Home';

const App = () => {
    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='weapon/:name' element={<Details />} />
            </Routes>
        </Router>       
     );
}
 
export default App;