
import { Box,Flex } from '@chakra-ui/react';
import NavBar from './component/NavBar';
import Header from './component/Header'
import MoneyCard from  './component/Card'
import NavTab from './component/NavTab'
import './App.css';
import CategoryBreakdown from './component/CategoryBreakdown';
import Home from './screens/Home';

function App() {
  return (
    <Home>
    <Header/>
    <MoneyCard/>
  
   <NavTab/>
 
   <CategoryBreakdown/>
     
      
    </Home>
  );
}

export default App;
