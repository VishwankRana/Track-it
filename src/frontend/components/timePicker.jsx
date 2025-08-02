import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import { Box } from '@mui/material';

export default function BasicTimePicker({ time, setTime }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ width: '100%', maxWidth: 350 }}>
                <TimePicker
                    label="Transaction Time"
                    value={time ? dayjs(time, 'HH:mm') : null}
                    onChange={(newValue) => {
                        if (newValue) {
                            setTime(newValue.format('HH:mm'));
                        }
                    }}
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
