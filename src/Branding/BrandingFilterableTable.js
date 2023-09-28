import React, { useState } from 'react';
import Header from '../Header';
import { Select, MenuItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';
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

const BrandingFilterableTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedField, setSortedField] = useState(null);
  const [sortedOrder, setSortedOrder] = useState('asc');
  const [expandedRow, setExpandedRow] = useState(null);

  const [selectedLager, setSelectedLager] = useState('All');
  const [selectedDateFilter, setSelectedDateFilter] = useState('all');
  const locations = ['All', ...new Set(dataBranding.map((item) => item.lager))];

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);



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

  const handleDateFilterChange = (event) => {
    setSelectedDateFilter(event.target.value);
  };

  const calculateDateDifference = (eventDate, daysDifference) => {
    const today = new Date();
    const eventDateObj = new Date(eventDate);
    const timeDiff = eventDateObj - today;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
    return daysDiff;
  };

  const filteredData = dataBranding.filter((item) =>
    (selectedLager === 'All' || item.lager === selectedLager) &&
    (item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.auftragsnr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.event_date.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedDateFilter === 'all' ||
      (selectedDateFilter === '30' && calculateDateDifference(item.event_date, 30) <= 30) ||
      (selectedDateFilter === '60' && calculateDateDifference(item.event_date, 60) <= 60) ||
      (selectedDateFilter === '90' && calculateDateDifference(item.event_date, 90) <= 90))
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

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
  };
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, sortedData.length);
  const displayedData = sortedData.slice(startIndex, endIndex);

  const getColorStatus = (status) => {
    switch (status) {
      case 'Fertig':
        return 'green';
      case 'Spät':
        return 'red';
      case 'Überfällig':
        return 'orange';
      default:
        return 'grey';
    }
  }

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
        <div className="filter-frame">
          <span>Filter nach Eventstart: </span>
          <Select value={selectedDateFilter} onChange={handleDateFilterChange}>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="30">Heute + 30 Tage</MenuItem>
            <MenuItem value="60">Heute + 60 Tage</MenuItem>
            <MenuItem value="90">Heute + 90 Tage</MenuItem>
          </Select>
        </div>

        <div className="rows-per-page filter-frame">
          <span>Zeilen pro Seite anzeigen: </span>
          <Select
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
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
            {displayedData.map((item) => (
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
                  <TableCell className='table-cell' style={{color:getColorStatus(item.status)}}>

                    <span className='fett-o' >O</span>
                  </TableCell>
                  <TableCell className='table-cell'>{item.auftragsnr}</TableCell>
                  <TableCell className='table-cell'>{item.lager}</TableCell>
                  <TableCell className='table-cell'>{item.event_date}</TableCell>
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
        <Pagination
          count={Math.ceil(sortedData.length / rowsPerPage)}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
        />
      </TableContainer>
    </div>
  );
};

export default BrandingFilterableTable;
