import "../styles/thanks.css"
export const Thanks = () => {
  setTimeout(function(){ window.location="/new-volunteer" },1000);
  return (
    <div>

      {/* <!-- סרגל עליון --> */}
      <div className="navbar">
        <button className="btn1"><i className="fa fa-home"></i> Home</button>
        <img src="logo_ezl.png" alt="Logo image" />
      </div>
      <div class="text">
       ברוך בואך!
      </div>
    </div>
  );
}