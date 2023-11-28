import { Text,Box,Flex,Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import Progress from './Progress';
import CategoryBreakdown from './CategoryBreakdown';

const NavTab = () => {
  return (
    <Tabs position="relative" variant="unstyled" mt="10px" overflowY={"auto"}>
      <TabList>
        <Flex justifyContent="space-between" gap="20" alignItems="center">
        <Box display="flex">
        <Tab _hover={{ color: 'blue.500' }}>This Month</Tab>
        <Tab _hover={{ color: 'blue.500' }}>Last Month</Tab></Box>
        <Box>...</Box>
        </Flex>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" width="50%" />
      <TabPanels>
        <TabPanel>
          {/* <p>one!</p> */}
        </TabPanel>
        <TabPanel display={"flex"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
            <Progress mb="5px" />
            <Text pl={"20px"} fontWeight={"400"} mt="5px" mb={"5px"}>Amount spent so far</Text>
            <Text display={"flex"} color="#0466C8" fontSize="16px" lineHeight={"30px"} fontWeight="400">&#x20A6;50,000/<Text color={"#67A2DC"}>&#x20A6;120,000</Text></Text>
            {/* <CategoryBreakdown/> */}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavTab;
