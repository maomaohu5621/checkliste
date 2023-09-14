import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const SubTable = ({ subTableDataBranding, sendColor }) => {
    const [textColorByRow1, setTextColorByRow1] = useState({});
    const [textColorByRow2, setTextColorByRow2] = useState({});
    const [textColorByRow3, setTextColorByRow3] = useState({});

    const handleColorChange1 = (itemId, selectedColor) => {
        setTextColorByRow1((prevTextColorByRow) => ({
            ...prevTextColorByRow,
            [itemId]: selectedColor,
        }));
    };
    const handleColorChange2 = (itemId, selectedColor) => {
        setTextColorByRow2((prevTextColorByRow) => ({
            ...prevTextColorByRow,
            [itemId]: selectedColor,
        }));
    };
    const handleColorChange3 = (itemId, selectedColor) => {
        setTextColorByRow3((prevTextColorByRow) => ({
            ...prevTextColorByRow,
            [itemId]: selectedColor,
        }));
    };

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead className="subtable-head">
                    <TableRow>
                        <TableCell>ArtikelNr</TableCell>
                        <TableCell />
                        <TableCell />
                        <TableCell />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subTableDataBranding.map((item) => (
                        <div>
                            <TableRow >
                                <TableCell colSpan={5}>{item.art_nr}</TableCell>
                            </TableRow>
                            <TableRow key={item.id}>
                                <TableCell></TableCell>
                                <TableCell>
                                <div>Aufgabe: </div>
                                <div>{item.aufgabe_a}</div>
                                <span className="fett-o" style={{ color: textColorByRow1[item.id] }}>O</span>
                                    <span>
                                        <select value={textColorByRow1[item.id] || ''}
                                            onChange={(e) => handleColorChange1(item.id, e.target.value)}>
                                            <option>Status auswählen</option>
                                            <option value="grey">Nachhaken</option>
                                            <option value="green">Fertig</option>
                                            <option value="red">Spät</option>
                                        </select>
                                    </span>
                                </TableCell>
                                <TableCell>
                                    
                                </TableCell>
                                <TableCell>
                                <div>Aufgabe: </div>
                                <div>{item.aufgabe_b}</div>
                                    <span className="fett-o" style={{ color: textColorByRow2[item.id] }}>O</span>
                                    <span>
                                        <select value={textColorByRow2[item.id] || ''}
                                            onChange={(e) => handleColorChange2(item.id, e.target.value)}>
                                            <option>Status auswählen</option>
                                            <option value="grey">Nachhaken</option>
                                            <option value="green">Fertig</option>
                                            <option value="red">Spät</option>
                                        </select>
                                    </span>
                                </TableCell>
                                <TableCell>
                                <div>Aufgabe: </div>
                                <div>{item.aufgabe_c}</div>
                                    <span className="fett-o" style={{ color: textColorByRow3[item.id] }}>O</span>
                                    <span>
                                        <select value={textColorByRow3[item.id] || ''}
                                            onChange={(e) => handleColorChange3(item.id, e.target.value)}>
                                            <option>Status auswählen</option>
                                            <option className="grey" value="grey">Nachhaken</option>
                                            <option className="green" value="green">Fertig</option>
                                            <option value="red">Spät</option>
                                        </select>
                                    </span>
                                </TableCell>
                            </TableRow>
                        </div>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SubTable;
