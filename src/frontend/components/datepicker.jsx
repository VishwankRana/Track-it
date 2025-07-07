import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


export default function BasicDatePicker({ date, setDate }) {
    const [selectedDate, setSelectedDate] = React.useState(dayjs());
    const today = dayjs().format("YYYY-MM-DD");

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                value={selectedDate}
                onChange={(newValue) => setSelectedDate(newValue)}

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