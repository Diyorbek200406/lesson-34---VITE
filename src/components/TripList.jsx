import { useEffect, useState } from "react";
import "./tripList.css";
const TripList = () => {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  console.log("effect");
  useEffect(() => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setTrips(data));
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  return (
    <div className="trip-list">
      <h1>Users</h1>
      <ul>
        {trips.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.id} </span>
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
      <div className="filters">
        <button
          onClick={() => {
            setUrl("https://jsonplaceholder.typicode.com/users?id=1");
            console.log("btn");
          }}
        >
          European trips
        </button>
        <button
          onClick={() => {
            setUrl("https://jsonplaceholder.typicode.com/users");
            console.log("Btn2");
          }}
        >
          All trips
        </button>
      </div>
    </div>
  );
};

export default TripList;
