import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { Box } from '@mui/material';

export default function BasicTimePicker({ time, setTime }) {
    const [value, setValue] = React.useState(dayjs());

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ width: '100%', maxWidth: 350 }}> {/* Control the width here */}
                <TimePicker
                    label="Transaction Time"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    slotProps={{
                        textField: {
                            id: "transaction-time",
                            fullWidth: true,
                            InputProps: {
                                sx: {
                                    width: '140px',
                                    backgroundColor: "white",
                                    '& fieldset': {
                                        borderColor: 'black',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'black',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'black',
                                    }
                                }
                            },
                        },
                    }}
                />
            </Box>
        </LocalizationProvider>
    );
}
