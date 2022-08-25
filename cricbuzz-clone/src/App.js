// import logo from './logo.svg';
import './App.css';
import Crickbuzz from './Components/crickbuzz';
import GetMatches from './Components/GetMatches';

import Footer from './FOOTER/Footer';


import AllRoute from './Route/AllRoute';

// import Homepage from './HomePage/Home_Page';


// import getMatches from './Components/GetMatches';

function App() {
  return (
    <div className="App">
        <Crickbuzz/>
        <GetMatches/>
      
       
        <AllRoute/>
        <Footer/>
       
     
       {/* <getMatches/> */}

    
      

      
         
    </div>
  );
}

export default App 
