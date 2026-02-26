import api from '../api/axios'

export const getAvailabilityCourts = async (sport_id, date) => {
    const res = await api.get(`/availability/courts`, {
        params: {
            sport_id,
            date,
        },
    })
    return res.data;
}


// export const getSportsById = async (id) => {
//     const res = await api.get(`/sports/${id}`);
//     return res.data;
// }