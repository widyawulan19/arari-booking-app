import React, { useEffect, useState } from 'react';
import '../../styles/Landing/Hero.css';

import { MdOutlineSportsBasketball } from "react-icons/md";
import { LuCalendar } from 'react-icons/lu';
import { FiSearch } from "react-icons/fi";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CourtPreviewModal from '../../components/CourtPreviewModal';
import { getAvailabilityCourtsAPI, getSports } from '../../api/bookingData.api';

const Hero = () => {

  // STATE
  const [sports, setSports] = useState([]);
  const [selectedSport, setSelectedSport] = useState("");
  const [selectedSportName, setSelectedSportName] = useState("");
  const [openSportDropdown, setOpenSportDropdown] = useState(false);

  const [date, setDate] = useState(null);
  const [status] = useState(null);
  const [courts, setCourts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // LOAD SPORTS
  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      // const res = await getSports();
      const res = await getSports();
      setSports(res.data || res);
    } catch (err) {
      console.error(err);
    }
  };

  // SELECT SPORT
  const handleSelectSport = (sport) => {
    setSelectedSport(sport.id);
    setSelectedSportName(sport.name);
    setOpenSportDropdown(false);
  };

  // SEARCH AVAILABILITY
  const handleSearch = async () => {
    if (!selectedSport || !date) {
      alert("Sport dan tanggal wajib dipilih");
      return;
    }

    // convert date -> yyyy-mm-dd
    const formattedDate = date.toISOString().split("T")[0];

    try {
      // const res = await getAvailabilityCourts(selectedSport, formattedDate);
      const res = await getAvailabilityCourtsAPI(selectedSport, formattedDate);

      // setCourts(res.data || []);
      setCourts(res || []);
      setOpenModal(true);

    } catch (err) {
      console.error(err);
      setCourts([]);
      setOpenModal(true);
    }
  };

  return (
    <div className='hero-container'>
      <div className="hero-content">

        <div className="hero-text">
          <h2>Find Your Perfect <span>Court</span></h2>
          <h5>
            Book pro-grade Badminton and Tennis courts in seconds.
            Your next match starts here.
          </h5>
        </div>

        {/* SEARCH BOX */}
        <div className="search-hero">

          {/* SPORT */}
          <div className="location">
            <MdOutlineSportsBasketball />

            <div
              className="custom-select"
              onClick={() => setOpenSportDropdown(!openSportDropdown)}
            >
              {selectedSportName || "Select Sport"}
            </div>

            {openSportDropdown && (
              <ul className="dropdown-list">
                {sports.map((sport) => (
                  <li
                    key={sport.id}
                    onClick={() => handleSelectSport(sport)}
                  >
                    {sport.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* DATE MODERN CALENDAR */}
          <div className="date">
            <LuCalendar />

            <DatePicker
              selected={date}
              onChange={(d) => setDate(d)}
              placeholderText="Select Date"
              minDate={new Date()}
              dateFormat="dd MMM yyyy"
              className="custom-date-picker"
              popperPlacement="bottom-start"
            />
          </div>

          {/* SEARCH BUTTON */}
          <button
            className='hero-search-btn'
            onClick={handleSearch}
          >
            <FiSearch style={{ marginRight: '10px' }} />
            <p> Search Sports</p>
           
          </button>

        </div>

        {/* STATUS RESULT */}
        {status && (
          <div style={{ marginTop: "20px" }}>
            {status === "available" ? (
              <span style={{ color: "limegreen" }}>
                Court Available ✅
              </span>
            ) : (
              <span style={{ color: "red" }}>
                Court Not Available ❌
              </span>
            )}
          </div>
        )}

      </div>

      <CourtPreviewModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        courts={courts}
        date={date ? date.toISOString().split("T")[0] : ""}
        sportName={selectedSportName}
      />
    </div>
  );
};

export default Hero;


// import React, { useEffect, useState } from 'react';
// import '../../styles/Landing/Hero.css';

// import { MdOutlineSportsBasketball } from "react-icons/md";
// import { LuCalendar } from 'react-icons/lu';
// import { FiSearch } from "react-icons/fi";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import { getSports, getSportsAPI } from '../../api/sports.api';
// import { getAvailabilityCourts } from '../../api/availability.api';
// import CourtPreviewModal from '../../components/CourtPreviewModal';
// import { getCourtBySportAndDate } from '../../services/DummyServices';
// import { getCourtsBySportAPI } from '../../api/courts.api';

// const Hero = () => {

//   // STATE
//   const [sports, setSports] = useState([]);
//   const [selectedSport, setSelectedSport] = useState("");
//   const [selectedSportName, setSelectedSportName] = useState("");
//   const [openSportDropdown, setOpenSportDropdown] = useState(false);

//   const [date, setDate] = useState(null);
//   const [status, setStatus] = useState(null);
//   const [courts, setCourts] = useState([]);
//   const [openModal, setOpenModal] = useState(false);

//   // LOAD SPORTS
//   useEffect(() => {
//     fetchSports();
//   }, []);

//   const fetchSports = async () => {
//     try {
//       // const res = await getSports();
//       const res = await getSportsAPI();
//       setSports(res.data || res);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // SELECT SPORT
//   const handleSelectSport = (sport) => {
//     setSelectedSport(sport.id);
//     setSelectedSportName(sport.name);
//     setOpenSportDropdown(false);
//   };

//   // SEARCH AVAILABILITY
//   const handleSearch = async () => {
//     if (!selectedSport || !date) {
//       alert("Sport dan tanggal wajib dipilih");
//       return;
//     }

//     // convert date -> yyyy-mm-dd
//     const formattedDate = date.toISOString().split("T")[0];

//     try {
//       const res = await getAvailabilityCourts(selectedSport, formattedDate);
//       // const res = await getCourtsBySportAPI(selectedSport)

//       setCourts(res.data || []);
//       setOpenModal(true);

//     } catch (err) {
//       console.error(err);
//       setCourts([]);
//       setOpenModal(true);
//     }
//   };

//   return (
//     <div className='hero-container'>
//       <div className="hero-content">

//         <div className="hero-text">
//           <h2>Find Your Perfect <span>Court</span></h2>
//           <h5>
//             Book pro-grade Badminton and Tennis courts in seconds.
//             Your next match starts here.
//           </h5>
//         </div>

//         {/* SEARCH BOX */}
//         <div className="search-hero">

//           {/* SPORT */}
//           <div className="location">
//             <MdOutlineSportsBasketball />

//             <div
//               className="custom-select"
//               onClick={() => setOpenSportDropdown(!openSportDropdown)}
//             >
//               {selectedSportName || "Select Sport"}
//             </div>

//             {openSportDropdown && (
//               <ul className="dropdown-list">
//                 {sports.map((sport) => (
//                   <li
//                     key={sport.id}
//                     onClick={() => handleSelectSport(sport)}
//                   >
//                     {sport.name}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* DATE MODERN CALENDAR */}
//           <div className="date">
//             <LuCalendar />

//             <DatePicker
//               selected={date}
//               onChange={(d) => setDate(d)}
//               placeholderText="Select Date"
//               minDate={new Date()}
//               dateFormat="dd MMM yyyy"
//               className="custom-date-picker"
//               popperPlacement="bottom-start"
//             />
//           </div>

//           {/* SEARCH BUTTON */}
//           <button
//             className='hero-search-btn'
//             onClick={handleSearch}
//           >
//             <FiSearch style={{ marginRight: '10px' }} />
//             <p> Search Sports</p>
           
//           </button>

//         </div>

//         {/* STATUS RESULT */}
//         {status && (
//           <div style={{ marginTop: "20px" }}>
//             {status === "available" ? (
//               <span style={{ color: "limegreen" }}>
//                 Court Available ✅
//               </span>
//             ) : (
//               <span style={{ color: "red" }}>
//                 Court Not Available ❌
//               </span>
//             )}
//           </div>
//         )}

//       </div>

//       <CourtPreviewModal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         courts={courts}
//         date={date ? date.toISOString().split("T")[0] : ""}
//         sportName={selectedSportName}
//       />
//     </div>
//   );
// };

// export default Hero;


