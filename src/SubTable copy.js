import React, { useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const SubTable = ({ subTableData }) => {
    const [textColorByRow1, setTextColorByRow1] = useState({});
    const [textColorByRow2, setTextColorByRow2] = useState({});
    const [textColorByRow3, setTextColorByRow3] = useState({});

    const handleColorChange1 = (rowId, selectedColor) => {
        setTextColorByRow1((prevTextColorByRow) => ({
            ...prevTextColorByRow,
            [rowId]: selectedColor,
        }));

        // updateSelectedColor4(e.target.value, selectedColor2, selectedColor3);
    };
    const handleColorChange2 = (rowId, selectedColor) => {
        setTextColorByRow2((prevTextColorByRow) => ({
            ...prevTextColorByRow,
            [rowId]: selectedColor,
        }));

        // updateSelectedColor4(e.target.value, selectedColor2, selectedColor3);
    };
    const handleColorChange3 = (rowId, selectedColor) => {
        setTextColorByRow3((prevTextColorByRow) => ({
            ...prevTextColorByRow,
            [rowId]: selectedColor,
        }));

        // updateSelectedColor4(e.target.value, selectedColor2, selectedColor3);
    };
    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead className="table-head">
                    <TableRow>
                        <TableCell>ArtikelNr</TableCell>
                        <TableCell>Aufgabe 1</TableCell>
                        <TableCell>Aufgabe 2</TableCell>
                        <TableCell>Aufgabe 3</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {subTableData.map((item, id) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.art_nr}</TableCell>
                            <TableCell>
                                <span className="fett-o" style={{ color: textColorByRow1[item.id] }}>O</span>
                                <span>
                                    <select value={textColorByRow1[item.id] || ''}
                                        onChange={(e) => handleColorChange1(item.id, e.target.value)}>
                                        <option value="grey">Kommend</option>
                                        <option value="green">Fertig</option>
                                        <option value="red">Spät</option>
                                    </select>
                                </span>
                            </TableCell>

                            <TableCell>
                                <span className="fett-o" style={{ color: textColorByRow2[item.id] }}>O</span>
                                <span>
                                    <select value={textColorByRow2[item.id] || ''}
                                        onChange={(e) => handleColorChange2(item.id, e.target.value)}>                                        
                                        <option value="grey">Kommend</option>
                                        <option value="green">Fertig</option>
                                        <option value="red">Spät</option>
                                    </select>
                                </span>
                            </TableCell>
                            <TableCell><span className="fett-o" style={{ color: textColorByRow3[item.id] }}>O</span>
                                <span>
                                    <select value={textColorByRow3[item.id] || ''}
                                        onChange={(e) => handleColorChange3(item.id, e.target.value)}>                                        
                                        <option value="grey">Kommend</option>
                                        <option value="green">Fertig</option>
                                        <option value="red">Spät</option>
                                    </select>
                                </span></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <div>SubTable</div>
    );
};

export default SubTable;
