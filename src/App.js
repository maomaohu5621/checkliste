import React from 'react';
import Home from './Home';
import FilterableTableHighLevel from './HighLevel/FilterableTableHighLevel';
import HighLevelBereiche from './HighLevelBereiche/HighLevelBereiche';
import VertriebFilterableTable from './HighLevelBereiche/Vertrieb/VertriebFilterableTable';
import MarketingFilterableTable from './HighLevelBereiche/Marketing/MarketingFilterableTable';
import BrandingFilterableTable from './HighLevelBereiche/Branding/BrandingFilterableTable';
import EntwicklungFilterableTable from './HighLevelBereiche/Entwicklung/EntwicklungFilterableTable';
import SupportFilterableTable from './HighLevelBereiche/Support/SupportFilterableTable';
import EinkaufFilterableTable from './HighLevelBereiche/Einkauf/EinkaufFilterableTable';
import KundenFilterableTable from './HighLevelBereiche/Kunden/KundenFilterableTable';
import ExterneFilterableTable from './HighLevelBereiche/Externe/ExterneFilterableTable';
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
          <Route path="/highlevelbereiche/vertrieb" element={<VertriebFilterableTable />} />
          <Route path="/highlevelbereiche/marketing" element={<MarketingFilterableTable />} />
          <Route path="/highlevelbereiche/entwicklung" element={<EntwicklungFilterableTable />} />
          <Route path="/highlevelbereiche/support" element={<SupportFilterableTable />} />
          <Route path="/highlevelbereiche/einkauf" element={<EinkaufFilterableTable />} />
          <Route path="/highlevelbereiche/kunden" element={<KundenFilterableTable />} />
          <Route path="/highlevelbereiche/externe" element={<ExterneFilterableTable />} />
        </Routes>        
      </Router>
      
    </div>
  );
};

export default App;







