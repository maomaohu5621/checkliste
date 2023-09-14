import React from 'react';
import Home from './Home';
import FilterableTableHighLevel from './HighLevel/FilterableTableHighLevel';
import BrandingFilterableTable from './Branding/BrandingFilterableTable'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';


const App = () => {

  return (
    <div>
      <Router>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/highlevel" element={<FilterableTableHighLevel />} />
          <Route path="/branding" element={<BrandingFilterableTable />} />
        </Routes>        
      </Router>
      
    </div>
  );
};

export default App;







