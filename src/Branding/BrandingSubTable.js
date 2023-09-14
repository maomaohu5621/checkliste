import React, { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const SubTable = ({ subTableDataBranding }) => {
    const [selectedColorByRow1, setSelectedColorByRow1] = useState({});
    const [selectedColorByRow2, setSelectedColorByRow2] = useState({});
    const [selectedColorByRow3, setSelectedColorByRow3] = useState({});

    const handleColorChange1 = (itemId, selectedColor) => {
        setSelectedColorByRow1((prevSelectedColorByRow) => ({
            ...prevSelectedColorByRow,
            [itemId]: selectedColor,
        }));
    };
    const handleColorChange2 = (itemId, selectedColor) => {
        setSelectedColorByRow2((prevSelectedColorByRow) => ({
            ...prevSelectedColorByRow,
            [itemId]: selectedColor,
        }));
    };
    const handleColorChange3 = (itemId, selectedColor) => {
        setSelectedColorByRow3((prevSelectedColorByRow) => ({
            ...prevSelectedColorByRow,
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
                        <div key={item.id}>
                            <TableRow>
                                <TableCell colSpan={5}>{item.art_nr}</TableCell>
                            </TableRow>
                            <TableRow key={item.id}>
                                <TableCell></TableCell>
                                <TableCell>
                                    {item.aufgabe_a && (
                                        <div>
                                            <div>Aufgabe: </div>
                                            {item.aufgabe_a}

                                            <div className="fett-o" style={{ color: selectedColorByRow1[item.id] }}>O</div>
                                            <span>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`radio_${item.id}_1`}
                                                        value="grey"
                                                        checked={selectedColorByRow1[item.id] === "grey"}
                                                        onChange={() => handleColorChange1(item.id, "grey")}
                                                    /> Nachhaken
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`radio_${item.id}_1`}
                                                        value="green"
                                                        checked={selectedColorByRow1[item.id] === "green"}
                                                        onChange={() => handleColorChange1(item.id, "green")}
                                                    /> Fertig
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`radio_${item.id}_1`}
                                                        value="red"
                                                        checked={selectedColorByRow1[item.id] === "red"}
                                                        onChange={() => handleColorChange1(item.id, "red")}
                                                    /> Spät
                                                </label>
                                            </span>
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell>

                                    {item.aufgabe_b && (
                                        <div>
                                            <div>Aufgabe: </div>
                                            {item.aufgabe_b}

                                            <div className="fett-o" style={{ color: selectedColorByRow2[item.id] }}>O</div>
                                            <span>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`radio_${item.id}_2`}
                                                        value="grey"
                                                        checked={selectedColorByRow2[item.id] === "grey"}
                                                        onChange={() => handleColorChange2(item.id, "grey")}
                                                    /> Nachhaken
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`radio_${item.id}_2`}
                                                        value="green"
                                                        checked={selectedColorByRow2[item.id] === "green"}
                                                        onChange={() => handleColorChange2(item.id, "green")}
                                                    /> Fertig
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`radio_${item.id}_2`}
                                                        value="red"
                                                        checked={selectedColorByRow2[item.id] === "red"}
                                                        onChange={() => handleColorChange2(item.id, "red")}
                                                    /> Spät
                                                </label>
                                            </span>
                                        </div>
                                    )}
                                </TableCell>
                                <TableCell>
                                    {item.aufgabe_c && (
                                        <div>
                                            <div>Aufgabe: </div>
                                            {item.aufgabe_c}

                                            <div className="fett-o" style={{ color: selectedColorByRow3[item.id] }}>O</div>
                                            <span>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`radio_${item.id}_3`}
                                                        value="grey"
                                                        checked={selectedColorByRow3[item.id] === "grey"}
                                                        onChange={() => handleColorChange3(item.id, "grey")}
                                                    /> Nachhaken
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`radio_${item.id}_3`}
                                                        value="green"
                                                        checked={selectedColorByRow3[item.id] === "green"}
                                                        onChange={() => handleColorChange3(item.id, "green")}
                                                    /> Fertig
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={`radio_${item.id}_3`}
                                                        value="red"
                                                        checked={selectedColorByRow3[item.id] === "red"}
                                                        onChange={() => handleColorChange3(item.id, "red")}
                                                    /> Spät
                                                </label>
                                            </span></div>
                                    )}
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
