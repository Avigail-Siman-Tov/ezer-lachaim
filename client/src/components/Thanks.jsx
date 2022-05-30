import "../styles/thanks.css"
import Navbar from "../components/Navbar";

export const Thanks = () => {
  setTimeout(function(){ window.location="/new-volunteer" },1000);
  return (
    <div>
      <Navbar/>
      <div class="text">
       ברוך בואך!
      </div>
    </div>
  );
}