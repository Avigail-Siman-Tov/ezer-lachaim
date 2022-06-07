import "../styles/welcome.css"
import Navbar from "./Navbar";
import { FaHome } from "react-icons/fa"
import { ISourceOptions, Particles, Main } from "react-tsparticles";
// import Particles from "react-tsparticles";
// import Main from "react-tsparticles";
// import {Particles, ISourceOptions, Main } from "react-tsparticles";
import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

export const Welcome = () => {
  setTimeout(function () { window.location = "/new-volunteer" }, 1000);
  // const options: ISourceOptions = {
  //   preset: "seaAnemone",
  // };
  // const initialize = (instance: Main) => {
  //   loadSeaAnemonePreset(instance);
  // };

  // return <Particles options={options} init={initialize} />;
  // tsParticles.load("tsparticles", {
  //   preset: "seaAnemone",
  //   particles: {
  //     move: {
  //       speed: 2
  //     }
  //   }
  // });
  return (
    <div>
      <div className="navbar">
        <a href="/"> <div className="btn_home"><FaHome />Home </div></a>
        <img src="/logo_ezl.png" alt="Logo image" />
      </div>
      <Navbar />
      <div>
        <div id="tsparticles"></div>
        <div class="text">
          ברוך בואך!
        </div>
      </div>
    </div>
  );
}