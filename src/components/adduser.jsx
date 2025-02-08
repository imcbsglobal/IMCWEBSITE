import { useState } from "react";
import { database } from "../firebaseConfig";
import { ref, push, set } from "firebase/database";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userRef = ref(database, "users");
    const newUserRef = push(userRef);
    set(newUserRef, { name, email })
      .then(() => {
        setSuccessMessage("User added successfully!");
        setName("");
        setEmail("");
      })
      .catch((err) => {
        console.error("Error adding user: ", err);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-md shadow-md">
        <h2 className="text-xl mb-4 font-semibold">Add User</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="block w-full p-2 mb-3 border rounded-md"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 mb-3 border rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Add User
        </button>
        {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
      </form>
    </div>
  );
}

export default AddUser;
