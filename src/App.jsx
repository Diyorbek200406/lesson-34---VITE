// style import
import "./App.css";
// import React
import { useState } from "react";
// Components import
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import UserList from "./components/userList/UserList";

// function arrow

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      image: "https://picsum.photos/400?random=1",
      firstName: "Diyorbek",
      lastName: "Erkinov",
      age: 19,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 2,
      image: "https://picsum.photos/400?random=2",
      firstName: "Diyorbek",
      lastName: "Erkinov",
      age: 19,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 3,
      image: "https://picsum.photos/400?random=3",
      firstName: "Diyorbek",
      lastName: "Erkinov",
      age: 19,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 4,
      image: "https://picsum.photos/400?random=4",
      firstName: "Diyorbek",
      lastName: "Erkinov",
      age: 19,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 5,
      image: "https://picsum.photos/400?random=5",
      firstName: "Diyorbek",
      lastName: "Erkinov",
      age: 19,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 6,
      image: "https://picsum.photos/400?random=6",
      firstName: "Diyorbek",
      lastName: "Erkinov",
      age: 19,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 7,
      image: "https://picsum.photos/400?random=7",
      firstName: "Diyorbek",
      lastName: "Erkinov",
      age: 19,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 8,
      image: "https://picsum.photos/400?random=8",
      firstName: "Diyorbek",
      lastName: "Erkinov",
      age: 19,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
    {
      id: 9,
      image: "https://picsum.photos/400?random=9",
      firstName: "Diyorbek",
      lastName: "Erkinov",
      age: 19,
      from: "Uzbekistan",
      job: "Frontend Developer",
      gender: "Male",
    },
  ]);
  return (
    <div className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} />
      </main>
      <Footer />
    </div>
  );
}
export default App;
