import {Box,Flex} from "@chakra-ui/react"
import { PiHouseThin } from "react-icons/pi";
import { GoReport } from "react-icons/go";
import { MdOutlineBarChart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";

const SideBar = () => {
  return (
    <Box minH={"100%"} right={"1000"} w={"200px"} bg={"gray"} mr={"20px"} position={"fixed"} left={"0"} top={"0"}>
      <Flex  justifyContent="space-between" flexDir="column" gap="5" py={"20px"}>
                    <Box display="flex" mt={"20px"}  gap={"2"} justifyContent="center" alignItems="center">
                    <PiHouseThin size="24px"/>
                    <h4>Home</h4>
                    
                    </Box>
                    <Box display="flex"  gap={"2"} justifyContent="center" alignItems="center">
                    
                    <BiSolidReport size="24px"/>
                    <h4>
                    Report
                    </h4></Box>
                    <Box display="flex"  gap={"2"} justifyContent="center" alignItems="center">
                    <GoReport size="24px" />
                    <h2 >Chat</h2>
                    </Box>
                    <Box display="flex" gap={"2"}  justifyContent="center" alignItems="center">
                    <MdOutlineBarChart size="24px" bg="#0466C8" color="#0466C8"/>
                    <h4>Budget</h4>
                    </Box>
                    <Box display="flex" gap={"2"}  justifyContent="center" alignItems="center">
                    <FaRegUser size="24px"/>
                    <h4>Profile</h4></Box>
                </Flex>
    </Box>
  )
}

export default SideBar
