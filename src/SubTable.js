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
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subTableData.map((item) => (
                        <TableRow key={item.id}>
                            <TableCell>{item.art_nr}</TableCell>
                            <TableCell>
                                <div>{item.aufgabe_a}</div>
                                <span className="fett-o" style={{ color: textColorByRow1[item.id] }}>O</span>

                                <span>
                                    <select value={textColorByRow1[item.id] || ''}
                                        onChange={(e) => handleColorChange1(item.id, e.target.value)}>
                                        <option value="grey">Nachhaken</option>
                                        <option value="green">Fertig</option>
                                        <option value="red">Spät</option>
                                    </select>
                                </span>
                            </TableCell>

                            <TableCell>
                            <div>{item.aufgabe_b}</div>
                                <span className="fett-o" style={{ color: textColorByRow2[item.id] }}>O</span>
                                <span>
                                    <select value={textColorByRow2[item.id] || ''}
                                        onChange={(e) => handleColorChange2(item.id, e.target.value)}>
                                        <option value="grey">Nachhaken</option>
                                        <option value="green">Fertig</option>
                                        <option value="red">Spät</option>
                                    </select>
                                </span>
                            </TableCell>
                            <TableCell>
                            <div>{item.aufgabe_c}</div>
                                <span className="fett-o" style={{ color: textColorByRow3[item.id] }}>O</span>
                                <span>
                                    <select value={textColorByRow3[item.id] || ''}
                                        onChange={(e) => handleColorChange3(item.id, e.target.value)}>
                                        <option className="grey" value="grey">Nachhaken</option>
                                        <option className="green" value="green">Fertig</option>
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
