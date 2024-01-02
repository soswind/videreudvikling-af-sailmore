import React, { useState, useEffect } from 'react';
import './App.css';
import Profile from './components/Profile';
import find_gast_image from '../src/images/GAST_pexels.jpeg';

export default function FindGaster() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/find_crew.php')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      }) 
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
    <div>
      <img className="find-gast-image" src={find_gast_image} alt="Find Gast Image" />
      <h1 className="h1-on-find-gast">Find Gaster</h1>
      <p className="p-on-find-gast">
        Here you can see all the Gasts who are seeking a captain. You can contact them
        by sending them a message, if you want them to be a part of your crew for the next journey.
      </p>

    <div className='profiles-container'>
      <Profile data={data} />
      </div>
    </div>
    
  );
}
