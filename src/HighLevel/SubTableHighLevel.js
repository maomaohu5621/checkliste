import React from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const SubTable = ({ subTableData }) => {
     const getColorVertrieb=(vertrieb)=>{
        switch(vertrieb){
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
    const getColorMarketing=(marketing)=>{
        switch(marketing){
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
    const getColorBranding=(branding)=>{
        switch(branding){
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
    const getColorEntwicklung=(entwicklung)=>{
        switch(entwicklung){
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
    const getColorSupport=(support)=>{
        switch(support){
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
    const getColorEinkauf=(einkauf)=>{
        switch(einkauf){
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
    const getColorKunden=(kunden)=>{
        switch(kunden){
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
    const getColorExterne=(externe)=>{
        switch(externe){
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
         <TableContainer component={Paper}>
            <Table size="small">
                <TableHead className="subtable-head">
                    <TableRow>                        
                        <TableCell>ArtikelNr</TableCell>
                        <TableCell>Vertrieb</TableCell>
                        <TableCell>Marketing</TableCell>
                        <TableCell>Branding</TableCell>
                        <TableCell>Entwicklung</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Einkauf</TableCell>
                        <TableCell>Kunden</TableCell>
                        <TableCell>Externe</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subTableData.map((item) => (
                        <TableRow key={item.id}>                            
                            <TableCell>{item.art_nr}</TableCell>
                            <TableCell style={{color: getColorVertrieb(item.vertrieb)}}><span className="fett-o-s">O</span></TableCell>
                            <TableCell style={{color: getColorMarketing(item.marketing)}}><span className="fett-o-s">O</span></TableCell>
                            <TableCell style={{color: getColorBranding(item.branding)}}><span className="fett-o-s">O</span></TableCell>
                            <TableCell style={{color: getColorEntwicklung(item.entwicklung)}}><span className="fett-o">O</span></TableCell>
                            <TableCell style={{color: getColorSupport(item.support)}}><span className="fett-o-s">O</span></TableCell>
                            <TableCell style={{color: getColorEinkauf(item.einkauf)}}><span className="fett-o-s">O</span></TableCell>
                            <TableCell style={{color: getColorKunden(item.kunden)}}><span className="fett-o-s">O</span></TableCell>
                            <TableCell style={{color: getColorExterne(item.externe)}}><span className="fett-o-s">O</span></TableCell>                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer> 
        // <div>SubTable</div>
    );
};

export default SubTable;
