import { useEffect, useState } from "react";

const TripList = () => {
  const [trips, setTrips] = useState([]);
  console.log(trips);
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
    <div>
      <h1>TripList</h1>
    </div>
  );
};

export default TripList;
