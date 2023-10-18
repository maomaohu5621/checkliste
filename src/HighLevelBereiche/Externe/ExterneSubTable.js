import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ExterneAufgaben from './ExterneAufgaben';

const SubTable = ({ subTableDataExterne }) => {

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead className="subtable-head">
                    <TableRow>
                        <TableCell>ArtikelNr</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subTableDataExterne.map((item) => (
                        <div key={item.id}>
                            <TableRow>
                                <TableCell><span className="left-space">{item.art_nr}</span></TableCell>
                            </TableRow>
                            <TableRow>
                                <ExterneAufgaben aufgabenExterne={item.aufgabenExterne} />
                            </TableRow>                            
                        </div>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SubTable;
