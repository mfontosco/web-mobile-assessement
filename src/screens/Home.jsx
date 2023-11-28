import NavBar from '../component/NavBar';
import { Box } from '@chakra-ui/react';

const Home = ({ children }) => {
  return (
    <Box border={"2px solid red"} top={"0"} h={"100vh"} position="relative" bg="#fcfcfc" overflowY={"auto"} >
      <Box padding="20px" position="relative" overflowY="auto">
        {children}
      </Box>

      <Box display={{ base: "block", md: "none" }} position="sticky" bottom="0" left="0" right="0">
        <NavBar />
      </Box>
    </Box>
  );
};

export default Home;
