import {Box,Text,Flex,CircularProgress,CircularProgressLabel} from '@chakra-ui/react'
import { FaConciergeBell } from "react-icons/fa";
import { MdOutlineSavings } from "react-icons/md";


const CategoryBreakdown =()=>{
    return (
        <Box className="category-breakdown">
        <Text fontWeight="500" lineHeight={"24px"} fontSize="21px" color="black">Category Breakdown</Text>
        <Flex justifyContent={"space-between"} gap="2" alignItems={"center"}  mt="4">
           <Box display={"flex"} gap={"2"}>
            
            <Box bg={"#F4E9CD"} style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden" }}>
      <CircularProgress value={40} size="40px" color="#C89104" thickness="4px">
        <CircularProgressLabel
          
          color="#C89104"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FaConciergeBell size="20px" color="#C89104" />
        </CircularProgressLabel>
      </CircularProgress>
    </Box>
            
            <Box display={"flex"} justifyContent={"center"}  flexDir={"column"}>
                <Text fontWeight={"500"} fontSize={"14px"} lineHeight={"24px"}>Food and Drink</Text>
                <Text>40%</Text>
            </Box>
           </Box> 
           <Box fontWeight="400" fontSize="16px" display={"flex"} justifyContent={"center"}  flexDir={"column"}>
                <Text fontWeight="400" fontSize="16px" color={"#001233"} lineHeight={"30.5px"} display={"flex"}>&#x20A6;20,000/<Text color='#C1C4CD'>&#x20A6;42,000</Text></Text>
                
            </Box>
        </Flex>
        <Flex justifyContent={"space-between"} alignItems={"center"} mt="2">
           <Box display={"flex"} gap={"2"}>
            <Box bg="rgba(3, 138, 57, 0.2)" style={{ width: "40px", height: "40px", borderRadius: "50%", overflow: "hidden" }}> 
            <CircularProgress value={40} size="40px" color='#038A39' thickness="4px"> {/* Adjust the size to make it bigger */}
        <CircularProgressLabel color='#038A39' fontWeight="bold" display={"flex"} justifyContent={"center"}><MdOutlineSavings  size="20px" color='#038A39'/></CircularProgressLabel>
      </CircularProgress>
            </Box>
            <Box display={"flex"} justifyContent={"center"}  flexDir={"column"}>
                <Text>Savings</Text>
                <Text>40%</Text>
            </Box>
           </Box> 
           <Box fontWeight="400" fontSize="16px" display={"flex"} justifyContent={"center"}  flexDir={"column"}>
           <Text fontWeight="400" fontSize="16px" color={"#001233"} lineHeight={"30.5px"} display={"flex"}>&#x20A6;10,000/<Text color='#C1C4CD'>&#x20A6;24,000</Text></Text>
                
            </Box>
        </Flex>
        </Box>
    )
}

export default CategoryBreakdown