import { useEffect, useState } from "react";
import './tripList.css'
const TripList = () => {
  const [trips, setTrips] = useState([]);
  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setTrips(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="trip-list">
      <h1>Users</h1>
      <ul>
        {trips.map( (item) => {
          return (
            <li key={item.id}>
              <span>{item.id} </span>
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TripList;
