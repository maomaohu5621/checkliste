import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Select, MenuItem } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const SubTable = ({ subTableData }) => {
    const getColorStatus = (status) => {
        switch (status) {
            case 'Fertig':
                return '#00bc12';
            case 'Spät':
                return 'red';
            case 'Überfällig':
                return 'orange';
            default:
                return 'gray';
        }
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value);
    };
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, subTableData.length);
    const displayedData = subTableData.slice(startIndex, endIndex);

    return (
        // <div>Bereiche SubTable....</div>
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead className="subtable-head">
                    <TableRow>
                        <TableCell align="center">Ampel</TableCell>
                        <TableCell>AuftragsNr</TableCell>
                        <TableCell>Lager</TableCell>
                        <TableCell>Eventstart</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayedData.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell
                                align="center"
                                style={{ color: getColorStatus(item.status) }}><span className="fett-o">O</span></TableCell>
                            <TableCell>{item.auftragsnr}</TableCell>
                            <TableCell>{item.lager}</TableCell>
                            <TableCell>{item.event_date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="rows-per-page filter-frame subtable-pagination">
                <span>Zeilen pro Seite anzeigen: </span>
                <Select
                    value={rowsPerPage}
                    onChange={handleRowsPerPageChange}
                >
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </Select>
                <Pagination
                    count={Math.ceil(subTableData.length / rowsPerPage)}
                    page={currentPage}
                    onChange={(event, value) => setCurrentPage(value)}
                />
            </div>


        </TableContainer>
    )
};

export default SubTable;