
import { Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';





function App() {
 const [mens , setmens] = useState(false)
 const [womens , setwomens] = useState(false)
 const [kids , setkids] = useState(false)
 
 const navigate = useNavigate

 const onClicked = (val)=>{
       if(val==="mens"){
         <>
          {setmens(true)}
          {setwomens(false)}
          {setkids(false)}
         { navigate("/mens")}
         </>
       }
      else if(val==="womens"){
        <>
         {setwomens(true) }
         {setmens(false)}
         {setkids(false)}
         
        </>
      }
      else if(val==="kids"){
        <>
         {setwomens(false) }
         {setmens(false)}
         {setkids(true)}
       
        </>
      }
 }

  return (
    <div className="App">
     <Box style={{height:"50px" , width:"100%" , border:"1px solid red" , backgroundColor:"red" ,
      position:"fixed",
      top:"0px",
     
      zIndex:"999",
    }}>

       <Box height={"100%"} alignItems={"end"} marginLeft="150px"  width={"fit-content"}>
        
       <Button  
     style={{
       backgroundColor: mens ? "white" : "#e11b23",
       color: mens? "black" : "white",
     }}
       onClick={()=> onClicked("mens")}  height={"100%"}><Link to={"/mens"}>MENS</Link></Button>
       
       
       
        <Button 
          style={{
            backgroundColor: womens? "white" : "#e11b23",
            color: womens? "black" : "white",
          }}
            onClick={()=> onClicked("womens")}
        
        height={"100%"}><Link to={"/womens"}>WOMENS</Link></Button>
      
      
      
      
        <Button
         style={{
          backgroundColor: kids? "white" : "#e11b23",
          color: kids? "black" : "white",
        }}
          onClick={()=> onClicked("kids")}
        
        height={"100%"}><Link to={"/kids"}>KIDS</Link></Button>
       </Box>
       

    </Box>
      <NavBar />
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;