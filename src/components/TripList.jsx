// style
import "./tripList.css";
// package
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
//
//
//
const TripList = () => {
  //
  //
  //
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
  const { data: trips, isPending, error } = useFetch(url);
  //
  //
  //
  console.log("effect");

  if (isPending) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="loading">
        <h1>Error {error}</h1>
      </div>
    );
  }

  //
  //
  //
  return (
    <div className="trip-list">
      <h1>Users</h1>
      <ul>
        {trips &&
          trips.map((item) => {
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
