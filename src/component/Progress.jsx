import { Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

const Progress = () => {
  return (

<Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="10px solid #99c0e7"
      borderRadius="50%"
      width="156px"  // Adjust the width to make it bigger
      height="156px" // Adjust the height to make it bigger
    >
      <CircularProgress value={40} size="150px" color='#0466c8' thickness="4px"> {/* Adjust the size to make it bigger */}
        <CircularProgressLabel color='#0466c8' fontWeight="bold">49%</CircularProgressLabel>
      </CircularProgress>
    </Box>

  );
};

export default Progress;
