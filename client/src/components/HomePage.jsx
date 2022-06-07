
import { useEffect, useRef, useState } from "react"
import "../styles/homePage.css"
import { Icon } from '@iconify/react';
import Navbar from "./Navbar";

const IMAGES = ["/i1.jpg", "/i2.jpg", "/i3.jpg", "/i4.jpg", "/i5.jpg", "/i6.jpg"];

export const HomePage = () => {
    const [readMore, setReadMore] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const interval = useRef(null);

    const extraaContentRef = useRef();

    function switchImage() {
        setCurrentImageIndex(currentIndex => currentIndex < IMAGES.length - 1 ? currentIndex + 1 : 0);
    }

    function contentButtonOnclick() {
        setReadMore(prev => !prev);
        // extraaContentRef.current?.scrollIntoView();
    }

    useEffect(() => {
        interval.current = setInterval(switchImage, 1700);
        return () => clearInterval(interval.current);
    }, [])


    const extraContent = <div ref={extraaContentRef}>
        <br />
        <br />
        <img src="i7.jpg" />
        <br />
        <br />
        <div className="extra-content">
            באמצעות אגף ההסעות מתבצעות מידי יום עשרות נסיעות לבתי חולים ומרפאות.
            המתנדבים היקרים לוקחים את החולים ומבקריהם באמבולנסים וברכבים עד לבית חולים וחוסכים זמן יקר וחשוב.
            מעבר לחסכון של הזמן והורדת הטירחה של נסיעה בדרכים אחרות מאפשר אגף ההסעות למשפחות החולים לבקר יותר את החולה ולתת לו כח לחיים
        </div>
    </div>
    const btn = readMore ? <button className="details" >הסתר פרטים<br></br><Icon icon="fa:angle-double-up" />
    </button> : <button className="details">לפרטים נוספים<br></br><Icon icon="fa:angle-double-down" /></button>
    return (
        // <!-- סרגל עליון -->
        <div>
            <div className="navbar">
                <div className="dropdown">
                    <button className="dropbtnn">כניסה
                        <Icon icon="ic:baseline-arrow-drop-down" />
                    </button>
                    <div className="dropdown-content">
                        <a href="/welcome">מתנדב חדש</a>
                        <a href="/login">מתנדב קיים</a>
                        <a href="/BookingShuttle">מטופל</a>
                        {/* <a href="/login">מנהל</a> */}
                    </div>
                </div>
                <img src="/logo_ezl.png" alt="Logo image" />
            </div>
            <div className="slideshow-container">
                <img src={IMAGES[currentImageIndex]} />
            </div>
            <div className="slideshowDots">
                {IMAGES.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${currentImageIndex === idx ? " active" : ""}`}
                        onClick={() => {
                            setCurrentImageIndex(idx);
                        }}
                    ></div>
                ))}
            </div>

            {/* <!-- מלל --> */}
            <div className="explantion">
                <div className="title_Exp">אגף ההסעות</div>
                <div className="textExp">
                    הסעות לחולים ומבקריהם על ידי צי של אמבולנסים ורכבים בהתנדבות. חוסכים בזמן יקר וחשוב
                </div>
                <div className="btn_details">
                    <a className="read-more-link" onClick={contentButtonOnclick}><div>{btn}</div></a>
                    {readMore && extraContent}
                </div>
            </div>

            <Navbar/>
        </div>
    );
}
       {/* <div className="flex-container">
                    <div>
                        <a href="mailto: info@ezla.org.il"><Icon icon="ci:mail-open" color="white" /></a>
                    </div>
                    <div>
                        <a href="tel:03-3-730-440"><Icon icon="bxs:phone" color="white" /></a>
                    </div>
                    <div>
                        <a href=""><Icon icon="akar-icons:whatsapp-fill" color="white" /></a>
                    </div>
                </div> */}