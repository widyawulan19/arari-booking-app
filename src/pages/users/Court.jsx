import React, { useState } from "react";
import { generateSlots } from "../../api/bookingData.api";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../landing/Navbar";
import '../../styles/users/SlotsCourt.css';
import { IoCalendar, IoCheckmarkCircleOutline, IoChevronBackOutline, IoLocationSharp } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { formatDate } from "../../components/FormatDate";
import { FaCircle, FaRegCircle } from "react-icons/fa6";
import { MdInfo } from "react-icons/md";
import { LuClock } from "react-icons/lu";

const Court = () => {

  const location = useLocation();
  const navigate = useNavigate()

  const court = location.state?.court;
  const selectedDate = location.state?.selectedDate;

  // Hook HARUS sebelum return condition
  const [selectedSlot, setSelectedSlot] = useState([]);
  console.log("isi data court:", court)

  if (!court) {
    return <p>Data court tidak ditemukan</p>;
  }

  const slots = generateSlots(court, selectedDate);
  const selectedSlotData = selectedSlot.map((i) => slots[i]);
  // const selectedSlotData = selectedSlot !== null? slots[selectedSlot] : null;

  const totalPrice = selectedSlotData.reduce(
    (total, slot) => total + slot.price,
    0
  );

  console.log('DATA SLOT:',slots);

  const formatPrice = (price) =>{
    if(!price) return 0;

    return new Intl.NumberFormat("id-ID").format(price)
  }

  const navigateToHome = () =>{
    navigate('/')
  }
  
  return (
    <div className="court-slot-container">
      <Navbar/>

      <div className="slot-box">
        
        <div className="slot-nav">
          <div className="nav">
              <button onClick={navigateToHome}>
                <IoChevronBackOutline/> Back to Court Selection
              </button>

              <h4>Select Your Time</h4>
            </div>
          
          <div className="slot-info">
            <div className="info-left">
                <span><IoLocationSharp className="info-icon"/> {court.court_name} ({court.sportName})</span>
                <span><IoCalendar className="info-icon"/> {formatDate(selectedDate)}</span>
            </div>
            <div className="info-right">
              <button style={{borderRight:'1px solid #ddd'}}><FaRegCircle className="available"/> Available</button>
              <button style={{borderRight:'1px solid #ddd'}}><FaCircle className="selected"/> Selected</button>
              <button><FaCircle className="booked"/> Booked</button>
            </div>
           
          </div>
        </div>
        
        <div className="slot-body">
          
          <div className="slot-body-left">
            <div className="slot-grid">
              {slots.map((slot, index) => (
                <div
                  key={index}
                  className={`
                    slot-card
                    ${slot.status === "booked" ? "booked" : ""}
                    ${selectedSlot.includes(index) ? "active" : ""}
                  `}
                  onClick={() => {
                    if (slot.status === "booked") return;

                    setSelectedSlot((prev) => {
                      if (prev.includes(index)) {
                        // kalau sudah dipilih → remove
                        return prev.filter((i) => i !== index);
                      } else {
                        // kalau belum → add
                        return [...prev, index];
                      }
                    });
                  }}
                >
                  <h4>{slot.start} - {slot.end}</h4>
                  <span>Rp {formatPrice(slot.price)}</span>

                  {slot.status === "booked" && (
                    <p className="occupied">Occupied</p>
                  )}
                </div>
              ))}
            </div>

            <div className="booked-policy">
              <MdInfo className="policy-icon"/>
              <div className="policy-text">
                <h4>Booking Policy</h4>
                <p
                  >Bookings can be cancelled up to 24 hours before the scheduled time for a full refund. Please ensure you arrive 10 minutes before your slot. Gear rentals are available at the front desk.
                </p>
              </div>

            </div>
          </div>

          <div className="slot-summary">

            <div className="summary-header">
              <h4>Reservation Summary</h4>
              <p>Review your selected times below</p>
            </div>

            <div className="summary-body">
              <div className="info">

                <div className="sub-info">
                  <p className="title">Facility</p>
                  <p className="value">{court.court_name} ({court.sportName})</p>
                </div>
                <div className="sub-info">
                  <p className="title">Date</p>
                  <p className="value">{formatDate(selectedDate)}</p>
                </div>

              </div>

              <div className="info">

                <div className="sub-info1">
                  <h4>SELECTED SLOT</h4>
                   {selectedSlotData.length > 0 ? (
                      selectedSlotData.map((slot, i) => (
                        <div key={i} className="time-slot">
                          <p>
                            <LuClock /> {slot.start} - {slot.end}
                          </p>
                          <p style={{ fontWeight: "bold" }}>
                            Rp {formatPrice(slot.price)}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="not-selected">Belum memilih slot</p>
                    )}
                </div>

              </div>

              <div className="info">

                <div className="sub-info">
                  <p className="title">Subtotal</p>
                  <p className="value">Rp {formatPrice(totalPrice)}</p>
                </div>
                <div className="sub-info">
                  <p className="title">Service Fee</p>
                  <p className="value">-</p>
                </div>
                 <div className="total-sub-info">
                  <p className="total-title">Total</p>
                  <p className="total-value">Rp {formatPrice(totalPrice)}</p>
                </div>

              </div>

              <div className="info-submit">
                <button disabled={selectedSlot.length === 0}>Continue to Booking</button>
              </div>

              <div className="text-submit">
                <p>By clicking continue, you agree to our terms of service and court rules.</p>
              </div>

            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Court;