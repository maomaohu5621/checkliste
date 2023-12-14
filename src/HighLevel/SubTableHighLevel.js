import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const SubTable = ({ subTableData }) => {
    const getColorVertrieb = (vertrieb) => {
        switch (vertrieb) {
            case 'Fertig':
                return '#00bc12';
            case 'Spät':
                return 'red';
            case 'Nachhaken':
                return 'grey';
            default:
                return 'black';
        }
    }
    const getColorMarketing = (marketing) => {
        switch (marketing) {
            case 'Fertig':
                return '#00bc12';
            case 'Spät':
                return 'red';
            case 'Nachhaken':
                return 'grey';
            default:
                return 'black';
        }
    }
    const getColorBranding = (branding) => {
        switch (branding) {
            case 'Fertig':
                return '#00bc12';
            case 'Spät':
                return 'red';
            case 'Nachhaken':
                return 'grey';
            default:
                return 'black';
        }
    }
    const getColorEntwicklung = (entwicklung) => {
        switch (entwicklung) {
            case 'Fertig':
                return '#00bc12';
            case 'Spät':
                return 'red';
            case 'Nachhaken':
                return 'grey';
            default:
                return 'black';
        }
    }
    const getColorSupport = (support) => {
        switch (support) {
            case 'Fertig':
                return '#00bc12';
            case 'Spät':
                return 'red';
            case 'Nachhaken':
                return 'grey';
            default:
                return 'black';
        }
    }
    const getColorEinkauf = (einkauf) => {
        switch (einkauf) {
            case 'Fertig':
                return '#00bc12';
            case 'Spät':
                return 'red';
            case 'Nachhaken':
                return 'grey';
            default:
                return 'black';
        }
    }
    const getColorKunden = (kunden) => {
        switch (kunden) {
            case 'Fertig':
                return '#00bc12';
            case 'Spät':
                return 'red';
            case 'Nachhaken':
                return 'grey';
            default:
                return 'black';
        }
    }
    const getColorExterne = (externe) => {
        switch (externe) {
            case 'Fertig':
                return '#00bc12';
            case 'Spät':
                return 'red';
            case 'Überfällig':
                return 'orange';
            default:
                return 'grey';
        }
    }

    return (
        <TableContainer component={Paper}>
            <div className="substable-scroll-area" role="region" aria-labelledby="caption" tabindex="0">
                <Table size="small">
                    <TableHead className="subtable-head">
                        <TableRow>
                            <TableCell className="subtable-sticky-left">ArtikelNr</TableCell>
                            <TableCell className="subtable-sticky-top">Vertrieb</TableCell>
                            <TableCell className="subtable-sticky-top">Marketing</TableCell>
                            <TableCell className="subtable-sticky-top">Branding</TableCell>
                            <TableCell className="subtable-sticky-top">Entwicklung</TableCell>
                            <TableCell className="subtable-sticky-top">Support</TableCell>
                            <TableCell className="subtable-sticky-top">Einkauf</TableCell>
                            <TableCell className="subtable-sticky-top">Kunden</TableCell>
                            <TableCell className="subtable-sticky-top">Externe</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {subTableData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell className="subtable-sticky-left">{item.art_nr}</TableCell>
                                <TableCell style={{ color: getColorVertrieb(item.vertrieb) }}><span className="fett-o-s">O</span></TableCell>
                                <TableCell style={{ color: getColorMarketing(item.marketing) }}><span className="fett-o-s">O</span></TableCell>
                                <TableCell style={{ color: getColorBranding(item.branding) }}><span className="fett-o-s">O</span></TableCell>
                                <TableCell style={{ color: getColorEntwicklung(item.entwicklung) }}><span className="fett-o">O</span></TableCell>
                                <TableCell style={{ color: getColorSupport(item.support) }}><span className="fett-o-s">O</span></TableCell>
                                <TableCell style={{ color: getColorEinkauf(item.einkauf) }}><span className="fett-o-s">O</span></TableCell>
                                <TableCell style={{ color: getColorKunden(item.kunden) }}><span className="fett-o-s">O</span></TableCell>
                                <TableCell style={{ color: getColorExterne(item.externe) }}><span className="fett-o-s">O</span></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </TableContainer>
    );
};

export default SubTable;
