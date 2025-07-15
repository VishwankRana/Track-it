import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


export default function BasicDatePicker({ date, setDate }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={dayjs(date)}
                onChange={(newValue) => {
                    if (newValue) {
                        setDate(newValue.format('YYYY-MM-DD'));
                    }
                }}
                slotProps={{
                    textField: {
                        id: "transaction-date",
                        fullWidth: true,
                        variant: "outlined",
                        InputProps: {
                            sx: {
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
                    }
                }}
            />
        </LocalizationProvider>
    );
}