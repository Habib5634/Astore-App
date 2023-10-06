import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Handbags from "./Pages/Collections/Handbags/Handbags";


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/collections/handbags' element={<Handbags/>}/>
    </Routes>
      
    </>
  );
}

export default App;
