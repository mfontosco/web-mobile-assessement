import NavBar from '../component/NavBar';
import { Box } from '@chakra-ui/react';

const Home = ({ children }) => {
  return (
    <Box minH="100vh" position="relative" bg="#fcfcfc" >
      <Box padding="20px" position="relative" overflowY="auto">
        {children}
      </Box>

      <Box display={{ base: "block", md: "none" }} position="absolute" bottom="0" left="0" right="0">
        <NavBar />
      </Box>
    </Box>
  );
};

export default Home;
