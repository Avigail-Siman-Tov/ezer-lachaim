// import "../styles/welcome.css"
// import Navbar from "./Navbar";
// import { FaHome } from "react-icons/fa"
// import { ISourceOptions, Particles, Main } from "react-tsparticles";
// // import Particles from "react-tsparticles";
// // import Main from "react-tsparticles";
// // import {Particles, ISourceOptions, Main } from "react-tsparticles";
// import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

// // import React from "react";
// // import "./styles.css";
// import Particles from "react-tsparticles";
// import { loadConfettiShape } from "tsparticles-shape-confetti";


// export const Welcome = () => {
//   setTimeout(function () { window.location = "/new-volunteer" }, 1000);
//   // const options: ISourceOptions = {
//   //   preset: "seaAnemone",
//   // };
//   // const initialize = (instance: Main) => {
//   //   loadSeaAnemonePreset(instance);
//   // };

//   // return <Particles options={options} init={initialize} />;
//   // tsParticles.load("tsparticles", {
//   //   preset: "seaAnemone",
//   //   particles: {
//   //     move: {
//   //       speed: 2
//   //     }
//   //   }
//   // });
// //   return (
// //     <div>
// //       <div className="navbar">
// //         <a href="/"> <div className="btn_home"><FaHome />Home </div></a>
// //         <img src="/logo_ezl.png" alt="Logo image" />
// //       </div> 
// //       {/* <Navbar /> */}
// //       <div>
// //         <div id="tsparticles"></div>
// //         <div class="text">
// //           ברוך בואך!
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// var tsp;

// const loadConfetti = (tsparticles) => {
//   loadConfettiShape(tsparticles);

//   tsp = tsparticles;
// };

// const loaded = (container) => {
//   tsp.setOnClickHandler((e, particles) => {
//     console.log(particles.length);
//   });
// };

// // export default function App() {
//   return (
//     <Particles
//       id="tsparticles"
//       init={loadConfetti}
//       loaded={loaded}
//       options={{
//         fullScreen: {
//           enable: true
//         },
//         particles: {
//           number: {
//             value: 0
//           },
//           color: {
//             value: ["b03e3e", "#6c6c6c", "#4a7945", "#356D9C", "#ea6b4c"]
//           },
//           shape: {
//             type: "confetti",
//             options: {
//               confetti: {
//                 type: ["circle", "square"]
//               }
//             }
//           },
//           opacity: {
//             value: 1,
//             animation: {
//               enable: true,
//               minimumValue: 0,
//               speed: 2,
//               startValue: "max",
//               destroy: "min"
//             }
//           },
//           size: {
//             value: 7,
//             random: {
//               enable: true,
//               minimumValue: 3
//             }
//           },
//           life: {
//             duration: {
//               sync: true,
//               value: 5
//             },
//             count: 1
//           },
//           move: {
//             enable: true,
//             gravity: {
//               enable: true,
//               acceleration: 20
//             },
//             speed: 50,
//             decay: 0.05,
//             direction: "none",
//             outModes: {
//               default: "destroy",
//               top: "none"
//             }
//           }
//         },
//         interactivity: {
//           detectsOn: "window",
//           events: {
//             resize: true
//           }
//         },
//         detectRetina: true,
//         background: {
//           color: "ebe9eb"
//         },
//         responsive: [
//           {
//             maxWidth: 700,
//             options: {
//               particles: {
//                 move: {
//                   speed: 30,
//                   decay: 0.05
//                 }
//               }
//             }
//           }
//         ],
//         emitters: [
//           {
//             direction: "top-right",
//             rate: {
//               delay: 0.1,
//               quantity: 10
//             },
//             position: {
//               x: 0,
//               y: 50
//             },
//             size: {
//               width: 0,
//               height: 0
//             }
//           }
//         ]
//       }}
//     />
//   );
// }


import Particles from "react-tsparticles"; // import the tsParticles component
import { loadConfettiShape } from "tsparticles-shape-confetti"; // import the confetti shape
export const Welcome = () => {
<<<<<<< Updated upstream
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
        <div className="text">
          ברוך בואך!
        </div>
      </div>
    </div>
  );
=======
   setTimeout(function () { window.location = "/new-volunteer" }, 1000);
const loadConfetti = (tsparticles) => {
  loadConfettiShape(tsparticles);
}; // create a function that loads the confetti shape in the tsParticles instance
return(
<Particles
      id="tsparticles"
      init={loadConfetti}
      options={{ /* omitted for brevity, it's the same written before */ }} />
);
>>>>>>> Stashed changes
}