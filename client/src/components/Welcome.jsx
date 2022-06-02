import "../styles/welcome.css"
import Navbar from "./Navbar";

export const Welcome = () => {
  setTimeout(function () { window.location = "/new-volunteer" }, 1000);
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