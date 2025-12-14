import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function AdminPanel() {
  const [sweet, setSweet] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const addSweet = async () => {
    await API.post("/sweets", sweet);
    alert("Sweet added");
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10">
        <h2 className="font-bold text-xl mb-4">Add Sweet</h2>
        <input className="border p-2 w-full mb-2" placeholder="Name"
          onChange={(e) => setSweet({ ...sweet, name: e.target.value })} />
        <input className="border p-2 w-full mb-2" placeholder="Category"
          onChange={(e) => setSweet({ ...sweet, category: e.target.value })} />
        <input className="border p-2 w-full mb-2" placeholder="Price"
          onChange={(e) => setSweet({ ...sweet, price: e.target.value })} />
        <input className="border p-2 w-full mb-2" placeholder="Quantity"
          onChange={(e) => setSweet({ ...sweet, quantity: e.target.value })} />
        <button onClick={addSweet} className="bg-pink-600 text-white px-4 py-2">
          Add
        </button>
      </div>
    </>
  );
}

export default AdminPanel;
