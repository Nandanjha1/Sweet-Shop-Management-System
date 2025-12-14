import { useEffect, useState } from "react";
import API from "../services/api";
import SweetCard from "../components/SweetCard";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [sweets, setSweets] = useState([]);

  const fetchSweets = async () => {
    const res = await API.get("/sweets");
    setSweets(res.data);
  };

  const purchase = async (id) => {
    await API.post(`/sweets/${id}/purchase`);
    fetchSweets();
  };

  useEffect(() => {
    fetchSweets();
  }, []);

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 p-6">
        {sweets.map((s) => (
          <SweetCard key={s._id} sweet={s} onPurchase={purchase} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
