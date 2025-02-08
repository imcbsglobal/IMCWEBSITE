import { useState, useEffect } from "react";
import { db, auth, database } from "../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Fetch customers from Firestore
  const fetchCustomers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "customers"));
      const customerList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setCustomers(customerList);
    } catch (err) {
      console.error("Error fetching customers:", err);
    }
  };

  // Add customer to Firestore
  const handleAddCustomer = async (e) => {
    e.preventDefault();
    if (!newCustomer.name || !newCustomer.email) {
      setError("Both fields are required.");
      return;
    }
    try {
      await addDoc(collection(db, "customers"), newCustomer);
      setNewCustomer({ name: "", email: "" });
      setError("");
      fetchCustomers(); // Refresh the customer list
      alert("Customer added successfully!");
    } catch (err) {
      console.error("Error adding customer:", err);
    }
  };

  // Logout admin
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logout successful.");
      navigate("/login");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Customer</h2>
        <form onSubmit={handleAddCustomer} className="space-y-4 bg-white p-6 rounded-md shadow-md">
          <input
            type="text"
            placeholder="Customer Name"
            value={newCustomer.name}
            onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
            className="block w-full p-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Customer Email"
            value={newCustomer.email}
            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
            className="block w-full p-2 border rounded-md"
          />
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add Customer
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Customer List</h2>
        <div className="bg-white p-6 rounded-md shadow-md">
          {customers.length > 0 ? (
            <ul>
              {customers.map((customer) => (
                <li key={customer.id} className="p-2 border-b">
                  {customer.name} ({customer.email})
                </li>
              ))}
            </ul>
          ) : (
            <p>No customers found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
