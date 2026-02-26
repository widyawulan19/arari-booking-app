import React, { useEffect, useState } from 'react'
import { getSports } from '../../api/sports.api';

function Sports() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const result = await getSports();
        setData(result);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Sports</h2>

      {data.map((sport) => (
        <div key={sport.id}>
          {sport.name}
        </div>
      ))}

    </div>
  );
}

export default Sports;
