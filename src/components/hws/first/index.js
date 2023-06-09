import { Link } from 'react-router-dom';
import {Box, Button} from '@mui/material';

function HW1() {
    return (
        <Box sx={{display: "flex", justifyContent: "center", marginTop: "50px", columnGap: "8px"}}>
            <Button component={Link} to="/hw-1/task-1" variant="contained">
                Go to Task 1
            </Button>
            <Button component={Link} to="/hw-1/task-2" variant="contained">
                Go to Task 2
            </Button>
        </Box>
    );
}

export default HW1;
