import "../styles/login.css"

export const Login = () => {
    return (
        <div>
            <img id="reka" src="reka.jpg" />
            <div className="navbar">
                <div NamclassName="dropdown">
                    <a href="#home">Home</a>
                </div>
                <img src="logo_ezl.png" alt="Logo image" />

            </div>

            {/* <!-- תפריט בחירה--> */}
            <div NamclassName="userNamePassword">
                <div NamclassName="imgcontainer">
                    <img src="img_avatar2.png" alt="Avatar" NamclassName="avatar" />
                </div>
                <label for="Email" id="email"></label>
                <input type="text" placeholder="Enter E-mail" name="uname" required />

                <label for="psw" ></label>
                <input type="password" placeholder="Enter Password" name="psw" />

                <button type="submit" >submit</button>
            </div>

            <div NamclassName="container">
            </div>
        </div>


    );
}
