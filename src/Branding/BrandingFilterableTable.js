import React, { useState } from 'react';
import Header from '../Header';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Collapse from '@mui/material/Collapse';
import Accordion from '@mui/material/Accordion';
import TableSortLabel from '@mui/material/TableSortLabel';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SubTable from './BrandingSubTable';
import dataBranding from './dataBranding.json';

const FilterableTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedField, setSortedField] = useState(null);
  const [sortedOrder, setSortedOrder] = useState('asc');
  const [expandedRow, setExpandedRow] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (field) => {
    if (field === sortedField) {
      setSortedOrder(sortedOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedField(field);
      setSortedOrder('asc');
    }
  };

  const filteredData = dataBranding.filter((item) =>
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.auftragsnr.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lager.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.eventstart.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortedOrder === 'asc') {
      return a[sortedField] < b[sortedField] ? -1 : 1;
    } else {
      return a[sortedField] > b[sortedField] ? -1 : 1;
    }
  });

  const handleRowClick = (id) => {
    if (expandedRow === id) {
      setExpandedRow(null);
    } else {
      setExpandedRow(id);
    }
  };


  return (
    <div>
      <Header />
      <h1>Branding</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div className="searchbar">
          <InputBase
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="expandable table">
          <TableHead className='table-head'>
            <TableRow>
              <TableCell />
              <TableCell>
                <TableSortLabel
                  active={sortedField === 'status'}
                  direction={sortedField === 'status' ? sortedOrder : 'asc'}
                  onClick={() => handleSort('status')}
                >
                  Ampel
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedField === 'auftragsnr'}
                  direction={sortedField === 'auftragsnr' ? sortedOrder : 'asc'}
                  onClick={() => handleSort('auftragsnr')}
                >
                  AuftragsNr
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedField === 'lager'}
                  direction={sortedField === 'lager' ? sortedOrder : 'asc'}
                  onClick={() => handleSort('lager')}
                >
                  Lager
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortedField === 'eventstart'}
                  direction={sortedField === 'eventstart' ? sortedOrder : 'asc'}
                  onClick={() => handleSort('eventstart')}
                >
                  Eventstart
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody >
            {sortedData.map((item) => (
              <React.Fragment key={item.id}>
                <TableRow>
                  <TableCell className='table-cell'>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleRowClick(item.id)}
                    >
                      {expandedRow === item.id ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell className='table-cell' >
                   {/* <span className='fett-o' style={{ color: textColor }}>O {textColor}</span> */}
                   {/* <span className='fett-o' style={{ color: textColor[item.id] }}>O {textColor[item.id]}</span> */}
                    <span className='fett-o' >O</span> 
                    </TableCell>
                  <TableCell className='table-cell'>{item.auftragsnr}</TableCell>
                  <TableCell className='table-cell'>{item.lager}</TableCell>
                  <TableCell className='table-cell'>{item.eventstart}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>
                    <Collapse in={expandedRow === item.id} timeout="auto" unmountOnExit>
                      <Accordion>
                        <SubTable
                          subTableDataBranding={item.subTableDataBranding}                          
                         />
                      </Accordion>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FilterableTable;
