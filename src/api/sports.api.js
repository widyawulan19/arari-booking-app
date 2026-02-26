import sports from '../data/sports.json';

export const getSportsAPI = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sports.data);
        }, 300)
    })
}