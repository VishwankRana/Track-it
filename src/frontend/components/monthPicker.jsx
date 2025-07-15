import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import dayjs from 'dayjs';

export default function BasicMonthSelect({ setSelectedMonth }) {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const [month, setMonth] = React.useState(months[dayjs().month()]);

    const handleChange = (event) => {
        const selectedMonthName = event.target.value;
        setMonth(selectedMonthName);

        const monthIndex = months.indexOf(selectedMonthName);
        setSelectedMonth(monthIndex);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth variant="standard" sx={{ backgroundColor: 'transparent' }}>
                <Select
                    value={month}
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                        backgroundColor: 'transparent',
                        fontFamily: "monospace",
                        fontSize: '50px',
                        border: 'none',
                        boxShadow: 'none',
                        '&:before': { borderBottom: 'none' },
                        '&:after': { borderBottom: 'none' },
                        '& .MuiSelect-select': {
                            color: 'red',
                        }
                    }}
                >
                    {months.map((monthName) => (
                        <MenuItem key={monthName} value={monthName} sx={{ color: 'red' }}>
                            {monthName}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
