import '../styles/navbar.css'
import { Icon } from '@iconify/react';

function Navbar() {
    return (
        <div>
            {/* <!-- סרגל תחתון --> */}
            <div className="navbarr2">
                <div className="centered">
                    <a href="https://wa.me/+97233730440" rel="noopener noreferrer" className="wh"><Icon icon="akar-icons:whatsapp-fill" /></a>
                    <a href="tel:03-3-730-440" className="ph"><Icon icon="bxs:phone" /></a>
                    <a href="mailto: info@ezla.org.il" className="ma"><Icon icon="ci:mail-open" /></a>
                    <a href="https://www.ezla.org.il/" className="si"><Icon icon="dashicons:admin-site-alt2" /></a>
                    <a href="https://www.facebook.com/ezer.lahaim/" className="fa"><Icon icon="cib:facebook-f" /></a>
                </div>
            </div>
        </div>
    )
}
export default Navbar;

