import  {Heading,Box,Flex,Text} from '@chakra-ui/react'
const Header =()=>{
    return (
        <Box mb="10px">
            <Flex mb="10px"  alignItems="center" justifyContent="space-between">
                <Heading as="h1" size="lg" fontSize="28px" fontWeight="Bold">Budget</Heading>
            </Flex>
            <Flex alignItems="center" gap="2" mb>
            <Box fontSize="14px" h={"30px"} w={"30px"} bg={"#80b1e2"} color={"#1e76cd"} display={"flex"}
            justifyContent={"center"} alignItems={"center"} borderRadius={"50%"}>&#x20A6;</Box>
            <Text fontSize="14px" fontWeight="400px">Monthly Budget</Text>
            </Flex>
        </Box>
    )
}

export default Header