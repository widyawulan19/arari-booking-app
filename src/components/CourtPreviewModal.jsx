import { Link, useNavigate } from "react-router-dom";
import '../styles/components/CourtPreviewModal.css'
import { LuClock, LuWind } from "react-icons/lu";
import { formatDate } from "./FormatDate";
import badmintonImg from '../assets/badminton-court.jpeg';
import tenisImg from '../assets/tenis-card.jpeg';
import padelImg from '../assets/padel-card.jpeg'
import { FaRegCircleCheck } from "react-icons/fa6";
import { FiAlertCircle } from "react-icons/fi";
import { IoCalendarClear, IoCloseCircleOutline, IoFlash } from "react-icons/io5";
import { useEffect } from "react";

const CourtPreviewModal = ({ open, onClose, courts,date, sportName }) => {

  const navigate = useNavigate();

    useEffect(() => {
      const cards = document.querySelectorAll(".court-item");

      const observer = new IntersectionObserver(
          (entries) => {
          entries.forEach((entry) => {
              if(entry.isIntersecting){
              entry.target.classList.add("active");
              }
          });
          },
          {
          threshold: 0.25,
          }
      );

      cards.forEach((card) => observer.observe(card));
    }, []);
    

    // console.log("SPORT NAME FROM HERO:", sportName);
    // console.log("Data courts dari hero:", courts)
    console.log('date diteruskan dari hero:', date);
    if (!open) return null;

    //   fungsi mapping image 
    const sportImageMap = {
    badminton: badmintonImg,
    tenis: tenisImg,
    padel: padelImg,
    };

    const getSportImage = () => {
    if (!sportName) return badmintonImg;

    const name = sportName.toLowerCase();

    const key = Object.keys(sportImageMap).find((k) =>
        name.includes(k)
    );

    return sportImageMap[key] || badmintonImg;
    };

    const navigateToCourtSlots = (court) => {
  navigate('/court-slot', {
    state: {
      court,
      selectedDate: date,
      sportName
    }
  });
};



  return(
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="court-modal-box">

            <header className="header-container">
              <div className="nav-header">
                <h3>{sportName} Available Courts</h3>
                <IoCloseCircleOutline onClick={onClose} className="close-modal"/>
              </div>
              <div className="text-header">
                <p className="text-text">Select a court to see specific hourly slots</p>
                <div className="date">
                  {/* <IoCalendarClear/> */}
                  <p>{formatDate(date)}</p>
                </div>
              </div>
            </header>

            <div className="modal-body-box">
                <div className="modal-body">

                  {courts.length === 0 ? (
                    <p>No courts available</p>
                  ) : (
                    courts.map((court) => (
                      <div key={court.court_id} className="court-item">
                        <div className="court-cover">
                          <img src={getSportImage()}  alt="" />
                          <span className={court.court_availabel ? "status-on" : "status-off"}>
                            {court.court_availabel ? <><FaRegCircleCheck/> Available</> : <><FiAlertCircle/> Maintenance</>}
                          </span>
                        </div>

                        <div className="court-desc-cont">
                          <div className="court-desc">
                            <span>{court.court_name}</span>
                            <p><LuWind className="wind-icon"/> {court.court_desc}</p>
                          </div>

                          <div className="court-info-container">
                            <div className="avail-box">
                              <h4>AVAILABILITY</h4>
                              <p><LuClock className="ava-icon"/> - Slots Left</p>
                            </div>
                            <div className="rating-box">
                              <h4>RATING</h4>
                              <p><IoFlash className="rating-icon"/> 4.5/5.0</p>
                            </div>
                          </div>

                          <div className="court-button">
                            <button onClick={() => navigateToCourtSlots(court)}>
                              Select Slots
                            </button>
                          </div>
                        </div>
                      
                      </div>
                    ))
                  )}

                </div>
              </div>
            
            <div className="modal-footer">
              <p>Login untuk memilih jam & booking</p>
              <Link to="/login" className="login-btn">
                Login to Continue
              </Link>
            </div>    

            
        </div>
      </div>
    </div>
  )
};

export default CourtPreviewModal;
