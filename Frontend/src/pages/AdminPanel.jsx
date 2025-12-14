import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminPanel() {
    const [sweets, setSweets] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [restockQty, setRestockQty] = useState("");

    const [sweet, setSweet] = useState({
        name: "",
        category: "",
        price: "",
        quantity: "",
    });

    /* Fetch all sweets */
    const fetchSweets = async () => {
        const res = await API.get("/sweets");
        setSweets(res.data);
    };

    useEffect(() => {
        fetchSweets();
    }, []);

    /* Add Sweet */
    const addSweet = async () => {
        await API.post("/sweets", sweet);
        alert("Sweet added");
        fetchSweets();
    };

    /* Select Sweet for Update */
    const selectSweet = (s) => {
        setSelectedId(s._id);
        setSweet({
            name: s.name,
            category: s.category,
            price: s.price,
            quantity: s.quantity,
        });
    };

    /* Update Sweet */
    const updateSweet = async () => {
        if (!selectedId) return alert("Select a sweet first");
        await API.put(`/sweets/${selectedId}`, sweet);
        alert("Sweet updated");
        fetchSweets();
    };

    /* Delete Sweet */
    const deleteSweet = async (id) => {
        await API.delete(`/sweets/${id}`);
        alert("Sweet deleted");
        fetchSweets();
    };

    /* Restock Sweet */
    const restockSweet = async (id) => {
        await API.post(`/sweets/${id}/restock`, { quantity: restockQty });
        alert("Sweet restocked");
        setRestockQty("");
        fetchSweets();
    };

    return (
        <>
            <Navbar />

            <div className="max-w-md mx-auto mt-10">
                <h2 className="font-bold text-xl mb-4">
                    {selectedId ? "Update Sweet" : "Add Sweet"}
                </h2>

                <input className="border p-2 w-full mb-2" placeholder="Name"
                    value={sweet.name}
                    onChange={(e) => setSweet({ ...sweet, name: e.target.value })} />

                <input className="border p-2 w-full mb-2" placeholder="Category"
                    value={sweet.category}
                    onChange={(e) => setSweet({ ...sweet, category: e.target.value })} />

                <input className="border p-2 w-full mb-2" placeholder="Price"
                    value={sweet.price}
                    onChange={(e) => setSweet({ ...sweet, price: e.target.value })} />

                <input className="border p-2 w-full mb-2" placeholder="Quantity"
                    value={sweet.quantity}
                    onChange={(e) => setSweet({ ...sweet, quantity: e.target.value })} />

                {!selectedId ? (
                    <button onClick={addSweet}
                        className="bg-pink-600 text-white px-4 py-2">
                        Add Sweet
                    </button>
                ) : (
                    <button onClick={updateSweet}
                        className="bg-blue-500 text-white px-4 py-2">
                        Update Sweet
                    </button>
                )}
            </div>

            {/* Sweet List */}
            <div className="max-w-3xl mx-auto mt-10">
                <h3 className="font-bold text-lg mb-4">All Sweets</h3>

                {sweets.map((s) => (
                    <div key={s._id} className="flex justify-between border p-2 mb-2">
                        <span>{s.name} (Stock: {s.quantity})</span>

                        <div className="space-x-2">
                            <button
                                onClick={() => selectSweet(s)}
                                className="bg-yellow-500 text-white px-2">
                                Edit
                            </button>

                            <button
                                onClick={() => deleteSweet(s._id)}
                                className="bg-red-500 text-white px-2">
                                Delete
                            </button>

                            <input
                                placeholder="Qty"
                                className="border w-16 px-1"
                                onChange={(e) => setRestockQty(e.target.value)}
                            />

                            <button
                                onClick={() => restockSweet(s._id)}
                                className="bg-green-600 text-white px-2">
                                Restock
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default AdminPanel;
