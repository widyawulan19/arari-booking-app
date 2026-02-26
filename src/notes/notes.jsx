import sports from "../data/sports.json";

export const getSports = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(sports.data);
    }, 300);
  });
};

import courts from "../data/courts.json";

export const getCourtsBySport = async (sportId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = courts.data.filter(
        (court) => court.sport_id === sportId
      );
      resolve(filtered);
    }, 300);
  });
};