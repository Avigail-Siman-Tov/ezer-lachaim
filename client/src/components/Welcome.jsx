
import "../styles/welcome.css"
export const Welcome = () => {
  setTimeout(function () { window.location = "/new-volunteer" }, 2000);
  return (
    <div>
      <div className="screenBackground">
      <a href="https://usecheck.com/"
       className="btn-shine" target="_blank">welcome </a>
      </div>
    </div>
  );
}




