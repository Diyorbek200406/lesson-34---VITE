// style import
import "./App.css";
// import React
import { useState } from "react";
// Components import
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import UserList from "./components/userList/UserList";
import NewUserForm from "./components/newUser/newUserForm";

// function arrow

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => user.id != id);
    });
  };
  // close modal
  const closeModal = (e) => {
    if (e.target.className === "overlay") {
      setShowModal(false);
    }
    if (e.key === "Escape") {
      setShowModal(false);
    }
  };

  // add user

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };

  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}
export default App;
