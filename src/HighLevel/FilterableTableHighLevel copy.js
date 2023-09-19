import React, { useState } from 'react';
import Header from '../Header';
import {  Select, MenuItem } from '@mui/material';
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
import SubTable from './SubTableHighLevel';
import data from './data.json';

const FilterableTableHighLevel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedField, setSortedField] = useState(null);
  const [sortedOrder, setSortedOrder] = useState('asc');
  const [expandedRow, setExpandedRow] = useState(null);
  const [selectedLager, setSelectedLager] = useState('All');
  const locations = ['All', ...new Set(data.map((item) => item.lager))];
  

  const handleLagerChange = (event) => {
    setSelectedLager(event.target.value);
  };


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

  const filteredData = data.filter(
    (item) =>
      (selectedLager === 'All' || item.lager === selectedLager) &&
      (item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.auftragsnr.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.event_date.toLowerCase().includes(searchTerm.toLowerCase()))
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

  const getColorStatus=(status)=>{
    switch(status){
        case 'Fertig':
            return 'green';
        case 'Spät':
            return 'red';
        case 'Nachhaken':
            return 'grey';
        default:
            return 'black';
    }
} 

  return (
    <div>
      <Header />
      <h1>High Level</h1>
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
        <div className='filter-frame'>
          <span>Filter nach dem Lager: </span>
          <Select
            value={selectedLager}
            onChange={handleLagerChange}
          >
            {locations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
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
                  active={sortedField === 'event_date'}
                  direction={sortedField === 'event_date' ? sortedOrder : 'asc'}
                  onClick={() => handleSort('event_date')}
                >
                  Eventstart
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody >
            {sortedData.map((item, id) => (
              <React.Fragment key={id}>
                <TableRow>
                  <TableCell className='table-cell'>
                    <IconButton
                      aria-label="expand row"
                      size="small"
                      onClick={() => handleRowClick(id)}
                    >
                      {expandedRow === id ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell className='table-cell' style={{color: getColorStatus(item.status)}}><span className='fett-o'>O</span></TableCell>
                  <TableCell className='table-cell'>{item.auftragsnr}</TableCell>
                  <TableCell className='table-cell'>{item.lager}</TableCell>
                  <TableCell className='table-cell'>{item.event_date}</TableCell>


                </TableRow>
                <TableRow>
                  <TableCell colSpan={5}>

                    <Collapse in={expandedRow === id} timeout="auto" unmountOnExit>
                      <Accordion>
                        <SubTable subTableData={item.subTableData} />
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

export default FilterableTableHighLevel;
