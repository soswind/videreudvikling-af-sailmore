import React, { useEffect, useState } from 'react';
import SeafareItem from './SeafareItem';

const Seafares = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/seafares.php')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log(data); // Log the data to the console
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="SeafareItems">
      <SeafareItem data={data} />
    </div>
  )
}


export default Seafares;