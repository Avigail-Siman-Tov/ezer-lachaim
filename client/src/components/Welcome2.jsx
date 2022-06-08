import "../styles/welcome.css"
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa"

export const Welcome2 = () => {
  setTimeout(function () { window.location = "/search" }, 1000);
  return (
    <div>
      <div className="navbar">
                 <a href="/"> <div className="btn_home"><FaHome/>Home</div></a>
                 <img src="/logo_ezl.png" alt="Logo image" />
            </div>
      <Navbar />
      <div>
        <div className="text">
          ברוך בואך!
        </div>
      </div>
    </div>
  );
}