import React, { useState } from 'react';
import Header from '../Header';
import highLevelBereiche from './highLevelBereiche.json';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Collapse from '@mui/material/Collapse';
import Accordion from '@mui/material/Accordion';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';
import SubTable from './BereicheSubTable';
import { Link } from 'react-router-dom';

const HighLevelBereiche = () => {
    const [expandedRow, setExpandedRow] = useState(null);
    const handleRowClick = (id) => {
        if (expandedRow === id) {
            setExpandedRow(null);
        } else {
            setExpandedRow(id);
        }
    };
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
    };
    return (
        <div>
            <Header />
            <h1>High Level nach Bereiche</h1>
            <TableContainer component={Paper}>
                <Table aria-label="expandable table">
                    <TableHead className='table-head'>
                        <TableRow>
                            <TableCell />
                            <TableCell>
                                <span>Bereiche</span>
                            </TableCell>
                            <TableCell>
                                <span>Status</span>
                            </TableCell>
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {highLevelBereiche.map((item, id) => (
                            <React.Fragment key={id}>
                                <TableRow>
                                    <TableCell className='table-cell' align="center">
                                        <IconButton
                                            aria-label="expand row"
                                            size="small"
                                            onClick={() => handleRowClick(id)}>
                                            {expandedRow === id ? (
                                                <ExpandLessIcon />
                                            ) : (
                                                <ExpandMoreIcon />
                                            )}
                                        </IconButton></TableCell>
                                    <TableCell className='table-cell'>
                                        <Link to={item.bereiche}>
                                            {item.bereiche}
                                        </Link>
                                    </TableCell>
                                    <TableCell className='table-cell'
                                        style={{ color: getColorStatus(item.status) }}>
                                        <span className='fett-o'>O</span>
                                    </TableCell>
                                    <TableCell className='table-cell' />

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
                        ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default HighLevelBereiche;