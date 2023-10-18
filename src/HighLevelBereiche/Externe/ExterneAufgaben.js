import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

const ExterneAufgaben = ({ aufgabenExterne }) => {
    const [selectedOptions, setSelectedOptions] = React.useState(() => {
        const initialOptions = {};
        aufgabenExterne.forEach(item => {
            initialOptions[item.id] = 'Nachhacken';
        });
        return initialOptions;
    });

    const handleChange = (id, option) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [id]: option
        }));
    };

    const controlProps = (id, item) => ({
        checked: selectedOptions[id] === item,
        onChange: () => handleChange(id, item),
        value: item,
        name: `color-radio-button-demo-${id}-${item}`,
        inputProps: { 'aria-label': item },
    });

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                {aufgabenExterne.map((item) => (
                    <div key={item.id}>
                        <TableBody>
                            <TableRow>
                                <TableCell />
                                <TableCell>
                                    <div>{item.aufgabe_content}</div>
                                    <div>                                        
                                       <FormControlLabel  label="Nachhacken" control={<Radio {...controlProps(item.id, 'Nachhacken')} color="default"  size="small" />} />
                                       <FormControlLabel  label="Fertig" control={ <Radio {...controlProps(item.id, 'Fertig')} color="success"  size="small" />} />                                       
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </div>
                ))}
            </Table>
        </TableContainer>
    )
};
export default ExterneAufgaben;
