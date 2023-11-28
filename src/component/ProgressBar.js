import {Box,CircularProgress,CircularProgressLabel } from '@chakra-ui/react'
const ProgressBar =()=>{
    return(
        <Box>
            <CircularProgress value={40} color='green.400'>
  <CircularProgressLabel>40%</CircularProgressLabel>
</CircularProgress>
        </Box>
    )
}

export default ProgressBar