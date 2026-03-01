return (
    <div className="modal-overlay">

      <div className="modal-container">

        <div className="header-container">
          <div className="modal-header">
            <h3> {sportName} Available Courts</h3>
            <IoCloseCircleOutline onClick={onClose} className="close-modal"/>
          </div>

          <div className="modal-sub-header">
              <div className="text">
                  <p>Select a court to see specific hourly slots</p>
                  <div className="date">
                      <IoCalendarClear />
                      <p>{formatDate(date)}</p>
                  </div>
              </div>
          </div>
        </div>

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
  );