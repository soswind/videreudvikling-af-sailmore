import DashboardSeafareItem from "./DashboardSeafareItem";
import { useState, useEffect } from "react";

const DashboardSeafares = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/dashboard.php')
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
    <div className="DashboardSeafareItems">
      <DashboardSeafareItem data={data} />
    </div>
  )
}

export default DashboardSeafares;