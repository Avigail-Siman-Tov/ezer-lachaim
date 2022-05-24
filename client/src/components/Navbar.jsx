import './styles/navbar.css'
import logo from '../logo_ezl.png'
import { IconName } from "react-icons/di";
import {FaHome} from "react-icons/fa"
function Navbar(){

    return (    
    <div className="navbar">
    <div className="dropdown">
        
        <button className="btn1"> <FaHome/> דף הבית</button>
    </div>
   <img width="100" src={logo}/>
</div>
)
}
export default Navbar;

