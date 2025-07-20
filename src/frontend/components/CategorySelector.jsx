import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function CategorySelectIndicator({ category, setCategory }) {
    return (
        <Select
            placeholder="Category"
            value={category}
            onChange={(e, newValue) => setCategory(newValue)}
            indicator={<KeyboardArrowDown />}
            sx={{
                width: 140,
                [`& .${selectClasses.indicator}`]: {
                    transition: '0.2s',
                    [`&.${selectClasses.expanded}`]: {
                        transform: 'rotate(-180deg)',
                    },
                },
            }}
        >
            <Option value="Food">Food</Option>
            <Option value="Groceries">Groceries</Option>
            <Option value="Rent">Rent</Option>
            <Option value="Shopping">Shopping</Option>
            <Option value="Healthcare">Healthcare</Option>
            <Option value="Entertainment">Ent   ertainment</Option>
            <Option value="Travel">Travel</Option>
            <Option value="Gym">Gym</Option>
            <Option value="Other">Other</Option>
        </Select>
    );
}