import styles from "./Css/Search.module.css";
import Features from "./Components/Features";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";

function Search() {
    return (
      <div>
        <Nav/>
        <Features/>
        <Outlet/>
      </div>    
    );
  }
  
  export default Search;
  