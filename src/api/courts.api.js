import courts from '../data/courts.json';

export const getCourtsBySportAPI = async (sportId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filtered = courts.data.filter(
                (courts) => courts.sport_id === sportId
            );
            resolve(filtered);
        }, 300);
    })
}