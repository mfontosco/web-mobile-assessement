import {Box,Flex} from "@chakra-ui/react"
import { PiHouseThin } from "react-icons/pi";
import { GoReport } from "react-icons/go";
import { MdOutlineBarChart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
const NavBar =()=>{
    return (
        <Box >
            <Box boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
        background="#ffffff"  p={"2"}>
                <Flex  justifyContent="space-between" gap="2">
                    <Box display="flex" flexDir="column" gap={"2"} justifyContent="center" alignItems="center">
                    <PiHouseThin size="24px" color="#707480"/>
                    <h4 color="#707480">Home</h4>
                    
                    </Box>
                    <Box display="flex" flexDir="column" gap={"2"} justifyContent="center" alignItems="center">
                    
                    <BiSolidReport color="#707480" size="24px"/>
                    <h4 color="#707480">
                    Report
                    </h4></Box>
                    <Box display="flex" flexDir="column" gap={"2"} justifyContent="center" alignItems="center">
                    <GoReport size="24px" color="#707480" />
                    <h2 color="#707480" >Chat</h2>
                    </Box>
                    <Box display="flex" gap={"2"} flexDir="column" justifyContent="center" alignItems="center">
                    <MdOutlineBarChart size="24px" bg="#0466C8" color="#0466C8"/>
                    <h4 color="#001233">Budget</h4>
                    </Box>
                    <Box display="flex" gap={"2"} flexDir="column" justifyContent="center" alignItems="center">
                    <FaRegUser size="24px" color="#707480"/>
                    <h4 color="#707480">Profile</h4></Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default NavBar