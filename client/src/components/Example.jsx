import "../styles/welcome.css"
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa"


export const Example = () => {
  
  return (
    <div>
      <div className="navbar">
        <a href="/"> <div className="btn_home"><FaHome />Home </div></a>
        <img src="/logo_ezl.png" alt="Logo image" />
      </div>
      <Navbar />  
    </div>
  );
}