import { useEffect, useRef, useState } from "react"
import "../styles/homePage.css"

// import {FaCaretDown} from "react-icons/fa"


export const HomePage = () => {

    const IMAGES = ["/i1.jpg", "/i2.jpg", "/i3.jpg"];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const interval = useRef(null);

    function switchImage() 
    {
        if (currentImageIndex < 2) 
        {
            setCurrentImageIndex(prev => prev + 1)
        }
        else 
        {
            setCurrentImageIndex(0);
        }
    }

    useEffect(() => {
        interval.current = setInterval(switchImage, 1000);
        return () => clearInterval(interval.current);
    }, [])


    // const [showMore, setShowMore] = useState(false);

    return (
        // <!-- סרגל עליון -->
        <div>
            <div className="navbar">
                <div className="dropdown">
                    <button className="dropbtn">כניסה
                        {/* <i class='fa-solid fa-caret-down'></i> */}
                    </button>
                    <div className="dropdown-content">
                        <a href="#1">מתנדב חדש</a>
                        <a href="#2">מתנדב קיים</a>
                        <a href="#3">חולה</a>
                        <a href="#4">מנהל</a>
                    </div>
                </div>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <div className="slideshow-container">
                <img src={IMAGES[currentImageIndex]} />
            </div>


            {/* <!-- תמונות מונפשות קוד --> */}
            <div >
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            {/* <!-- מלל --> */}
            <div className="explantion">
                <div className="title_Exp">אגף ההסעות</div>
                <div className="textExp">
                    הסעות לחולים ומבקריהם על ידי צי של אמבולנסים ורכבים בהתנדבות. חוסכים בזמן יקר וחשוב
                </div>
                <button className="details">לפרטים נוספים</button>
                {/* <Link to='/search'> רשימת מתנדבים</Link> */}
            </div>
        </div>
    );
}

