import "../styles/welcome.css"
import Navbar from "./Navbar";

export const Welcome2 = () => {
  setTimeout(function () { window.location = "/search" }, 1000);
  return (
    <div>
      <Navbar />
      <div>
        <div class="text">
          ברוך בואך!
        </div>
      </div>
    </div>
  );
}