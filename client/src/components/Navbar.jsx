import '../styles/navbar.css'
import logo from '../logo_ezl.png'
import { IconName } from "react-icons/di";
import { FaHome } from "react-icons/fa";
import { Icon } from '@iconify/react';

function Navbar() {
    return (
        // <!-- סרגל עליון -->
        <div>
            <div className="navbar">
               {/* <a href="/"> <div className="btn_home"><FaHome/>דף הבית </div></a> */}
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            
            {/* <!-- סרגל תחתון --> */}
            <div className="navbarr2">         
                <div class="centered">
                    <a href="" class="wh"><Icon icon="akar-icons:whatsapp-fill" /></a>
                    <a href="tel:03-3-730-440" class="ph"><Icon icon="bxs:phone" /></a>
                    <a href="mailto: info@ezla.org.il" class="ma"><Icon icon="ci:mail-open" /></a>
                    <a href="https://www.ezla.org.il/" class="si"><Icon icon="dashicons:admin-site-alt2" /></a>
                    <a href="https://www.facebook.com/ezer.lahaim/" class="fa"><Icon icon="cib:facebook-f" /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;

