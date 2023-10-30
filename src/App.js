import Home from './Home';
import { BrowserRouter , Route ,Routes } from "react-router-dom";
import Services from './Services';
import Pd from './Pd';
import Search from './Search';
import Weather from "./Components/Weather";
import Hotel from "./Components/Hotel";
import Ng from "./Components/Ng";
import Flight from "./Components/Flight";
import Error404 from './Components/Error404';
import Login from './Components/Login';
import Delhi from './Pages/Delhi';
import Mumbai from './Pages/Mumbai';
import Goa from './Pages/Goa';
import Jaipur from './Pages/Jaipur';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/Login" exact  element={<Login/>} />
        <Route path="/binary_brains" exact  element={<Home/>} />
        <Route path="/services" exact  element={<Services/>} />
        <Route path="/Pd" exact  element={<Pd/>}/>
        <Route path="/Search" exact  element={<Search/>} >
         <Route path="Weather" exact  element={<Weather/>} />
         <Route path="Hotel" exact  element={<Hotel/>} />
         <Route path="Ng" exact  element={<Ng/>} />
         <Route path="Flight" exact  element={<Flight/>} />
        </Route>
        <Route path="Delhi" exact  element={<Delhi/>} />
        <Route path="Mumbai" exact  element={<Mumbai/>} />
        <Route path="Goa" exact  element={<Goa/>} />
        <Route path="Jaipur" exact  element={<Jaipur/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
