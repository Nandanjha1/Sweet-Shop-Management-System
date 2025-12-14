import { useEffect, useState } from "react";
import API from "../services/api";
import SweetCard from "../components/SweetCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
    const [sweets, setSweets] = useState([]);
    const [filters, setFilters] = useState({
        name: "",
        category: "",
        minPrice: "",
        maxPrice: ""
    });

    const searchSweets = async () => {
        const query = new URLSearchParams(filters).toString();
        const res = await API.get(`/sweets/search?${query}`);
        setSweets(res.data);
    };

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
            <div className="max-w-6xl mx-auto p-6">
                <div className="flex gap-2 p-4">
                    <input placeholder="Name" className="border p-2"
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })} />

                    <input placeholder="Category" className="border p-2"
                        onChange={(e) => setFilters({ ...filters, category: e.target.value })} />

                    <input placeholder="Min Price" className="border p-2"
                        onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />

                    <input placeholder="Max Price" className="border p-2"
                        onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />

                    <button onClick={searchSweets}
                        className="bg-pink-500 text-white px-4">
                        Search
                    </button>
                </div>


                <h2 className="text-2xl font-bold mb-6 text-center">
                    Available Sweets 🍭
                </h2>

                {sweets.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No sweets available
                    </p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {sweets.map((s) => (
                            <SweetCard key={s._id} sweet={s} onPurchase={purchase} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;
