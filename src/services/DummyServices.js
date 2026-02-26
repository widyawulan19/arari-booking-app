import courts from '../data/courts.json'

export const getCourtBySportAndDate = async (sportId, date) => {

    await new Promise((r) => setTimeout(r, 500));

    const result = courts.data
        .filter(court => court.sport_id === Number(sportId))
        .map(court => ({
            ...court,
            available: court.is_active
        }));

    return result;
};