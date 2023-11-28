import { Text,Box,Flex,Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react';
import Progress from './Progress';

const NavTab = () => {
  return (
    <Tabs position="relative" variant="unstyled" mt="10px">
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
          <p>one!</p>
        </TabPanel>
        <TabPanel display={"flex"} alignItems={"center"} justifyContent={"center"} flexDir={"column"}>
            <Progress mb="5px" />
            <Text pl={"20px"} fontWeight={"400"} mt="5px" mb={"5px"} >Amount spent so far</Text>
            <Text color="blue" fontSize="16px" lineHeight={"30px"} fontWeight="400">&#x20A6;50,000/&#x20A6;120,000</Text>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavTab;
