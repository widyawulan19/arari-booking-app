import bookingData from "../data/bookingData.json"

/*
  =====================================
  GET ALL SPORTS
  =====================================
*/
export const getSports = async () => {
    // simulate async API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(bookingData);
        }, 200);
    });
};



/*
  =====================================
  GET COURTS BY SPORT + DATE
  (date dipakai nanti untuk logic slot)
  =====================================
*/
export const getCourtBySportAndDate = async (sportName, date) => {
    const sport = bookingData.find(
        (item) => item.name === sportName
    );

    if (!sport) return [];

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sport.courts || []);
        }, 200);
    });
};



/*
  =====================================
  GENERATE SLOT FROM OPERATING HOURS
  =====================================
*/
// const generateSlots = (openTime, closeTime) => {
//     const slots = [];

//     const openHour = parseInt(openTime.split(":")[0]);
//     const closeHour = parseInt(closeTime.split(":")[0]);

//     for (let i = openHour; i < closeHour; i++) {
//         slots.push(`${String(i).padStart(2, "0")}:00`);
//     }

//     return slots;
// };



/*
  =====================================
  GET SLOTS BY COURT
  =====================================
*/
export const getSlotsByCourt = async (
    sportName,
    courtId,
    selectedDate
) => {
    const sport = bookingData.find(
        (item) => item.name === sportName
    );

    if (!sport) return [];

    const day = new Date(selectedDate).getDay();

    const operating = sport.operating_hours.find(
        (item) => item.day_of_week === day
    );

    if (!operating) return [];

    const slots = generateSlots(
        operating.open_time,
        operating.close_time
    );

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(slots);
        }, 200);
    });
};

export const getAvailabilityCourtsAPI = async (sportId, date) => {
    // convert date -> day index (0-6)
    const day = new Date(date).getDay();

    // cari sport
    const sport = bookingData.find((s) => s.id === sportId);

    if (!sport) return [];

    // cari jam operational sesuai hari
    const operating = sport.operating_hours.find(
        (o) => o.day_of_week === day
    );

    if (!operating) return [];

    // mapping courts -> shape seperti BE
    return sport.courts.map((court) => ({
        sportId: sport.id,
        sportName: sport.name,
        court_id: court.id,
        court_name: court.name,
        court_availabel: true, // dummy selalu available
        court_desc: "",
        open_time: operating.open_time,
        close_time: operating.close_time,
        price: court.price_per_hour
    }));
};

export const generateSlots = (court, selectedDate) => {
    const slots = [];

    let start = new Date(`2026-01-01T${court.open_time}`);
    const end = new Date(`2026-01-01T${court.close_time}`);

    while (start < end) {
        const next = new Date(start.getTime() + 60 * 60000);

        const startStr = start.toTimeString().slice(0, 5);
        const endStr = next.toTimeString().slice(0, 5);


        const isBooked = court.bookings?.some(b =>
            b.date === selectedDate &&
            b.start_time === startStr
        );

        slots.push({
            start: startStr,
            end: endStr,
            price: court.price,
            status: isBooked ? "booked" : "available"
        });

        start = next;
    }

    return slots;
};