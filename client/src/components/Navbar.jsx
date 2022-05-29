import '../styles/navbar.css'
import logo from '../logo_ezl.png'
import { IconName } from "react-icons/di";
import { FaHome } from "react-icons/fa"
import { Icon } from '@iconify/react';

function Navbar() {
    return (
        // <!-- סרגל עליון -->
        <div>
            <div className="navbar">
               <a href="/"> <div className="btn_home"><FaHome/>דף הבית </div></a>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            
            {/* <!-- סרגל תחתון --> */}
            <div className="navbar2">
                <div className="flex-container">
                    <div>
                        <a href="mailto: info@ezla.org.il"><Icon icon="ci:mail-open" color="white" /></a>
                    </div>
                    <div>
                        <a href="tel:03-3-730-440"><Icon icon="bxs:phone" color="white" /></a>
                    </div>
                    <div>
                        <a href=""><Icon icon="akar-icons:whatsapp-fill" color="white" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;

