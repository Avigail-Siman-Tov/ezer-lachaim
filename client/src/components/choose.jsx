import "../styles/choose.css"
export const choose = () => {

    return (
        <div>
            {/* <!-- סרגל עליון --> */}
            <div className="navbar">
                <div className="dropdown">
                    <button className="btn1"><i className="fa fa-home"></i> Home</button>
                </div>
                <img src="logo_ezl.png" alt="Logo image" />
            </div>

            <div className="row">
                <div className="picture">
                    <img src="Picture.jpg" alt="logo" />
                    <button className="btnDetails">להזמנת נסיעה</button>
                </div>
                <div className="picture1">
                    <img src="picture1.jpg" alt="logo" />
                    <button class="btnTravel">להזנת נתונים אישיים</button>
                </div>
            </div>

        </div>

    );
}
