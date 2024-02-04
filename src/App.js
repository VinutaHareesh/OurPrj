import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import Header from './componet/header';
// import Footer from './componet/footer';
import FirstComp from './componet/firstComp'
//import logo from './logo.svg';
import FroentPage from './pages/froentPage';
import ComingSoon from './pages/comingSoon';

function App() {
  return (
     <> 
        {/* <Header></Header>

        <Footer ></Footer> */}
        {/* <FirstComp></FirstComp> */}
        {/* <img src={logo} alt="My Logo" />  */}

<FroentPage></FroentPage> 

{/* <ComingSoon></ComingSoon> */}

    </>
  );
}

export default App;
