import React, { useState } from 'react';
import { Box, CircularProgress, TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledItem = styled(Box)`
  margin: 8px;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function removeObjectsWithNullValues(arr) {
    return arr.filter(obj => obj.temp);
}

const Task1 = () => {
    const [loading, setLoading] = useState(false);
    const [weatherData, setWeatherData] = useState([]);
    const [city, setCity] = useState('');
    const [error, setError] = useState(null);

    const handleInputChange = (event) => {
        setCity(event.target.value);
    };

    const handleButtonClick = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://3.90.85.119:8000/weather?city=${city}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setWeatherData(removeObjectsWithNullValues(data));
            setError(null);
        } catch (error) {
            setWeatherData([]);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }} mt={3}>
                <TextField
                    label="City"
                    variant="outlined"
                    value={city}
                    onChange={handleInputChange}
                    sx={{ mr: 1 }}
                />
                <Button variant="contained" onClick={handleButtonClick} disabled={loading}>
                    {loading ? <CircularProgress size={24} /> : 'Get Weather'}
                </Button>
            </Box>
            {error && <p>Please, enter correct city</p>}
                {loading && (
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "center" }} p={5}>
                        <CircularProgress />
                    </Box>
                )}
            {!loading && weatherData && (
                <StyledBox>
                    {weatherData.map((data) => (
                        <StyledItem key={data.datetime}>
                            <div>{data.datetime}</div>
                            <div>{data.temp}°C</div>
                            <div>{data.conditions}</div>
                        </StyledItem>
                    ))}
                </StyledBox>
            )}
        </div>
    );
};

export default Task1;
