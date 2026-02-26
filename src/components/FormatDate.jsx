export const formatDate = (date) => {
  const d = new Date(date);

  const day = d.getDate();
  const year = d.getFullYear();

  const months = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  const weeks = [
    "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"
  ];

  const month = months[d.getMonth()];
  const week = weeks[d.getDay()];

  return `${week} ${day} ${month}, ${year}`;
};
