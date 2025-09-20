import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './CircularLoading.css';

export const CircularLoading = () => {
  return (
    <div className="loading-container">
      <Box>
        <CircularProgress size="6rem" />
      </Box>
    </div>
  );
};
