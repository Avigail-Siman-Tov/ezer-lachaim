import "../styles/choose.css"
import { Icon } from '@iconify/react';
import Navbar from "../components/Navbar";

export const Choose = () => {

    return (
        <div>
            <Navbar/>
            <div className="row">
                <div className="picture">
                    <img src="a.png" alt="logo" />
                    <button className="btnDetails">להזמנת נסיעה</button>
                </div>
                <div className="picture1">
                    {/* <Icon icon="healthicons:ui-user-profile-negative" color="#356d9c" className="profil" /> */}
                    <img src="profil.png" alt="logo" />
                    <button class="btnTravel">להזנת נתונים אישיים</button>
                </div>
            </div>

        </div>

    );
}