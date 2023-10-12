import React from 'react';
import Home from './Home';
import FilterableTableHighLevel from './HighLevel/FilterableTableHighLevel';
import BrandingFilterableTable from './Branding/BrandingFilterableTable'
import HighLevelBereiche from './HighLevelBereiche/HighLevelBereiche';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './css/App.css';


const App = () => {

  return (
    <div>
      <Router>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/highlevel" element={<FilterableTableHighLevel />} />
          <Route path="/highlevelbereiche" element={<HighLevelBereiche />} />
          <Route path="/highlevelbereiche/branding" element={<BrandingFilterableTable />} />
        </Routes>        
      </Router>
      
    </div>
  );
};

export default App;







