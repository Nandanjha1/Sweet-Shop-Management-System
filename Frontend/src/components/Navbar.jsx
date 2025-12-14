import { Link, useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

function Navbar() {
  const navigate = useNavigate();
  const role = getUserRole();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-pink-600 text-white">
      <h1 className="font-bold text-xl">🍬 Sweet Shop</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Dashboard</Link>
        {role === "admin" && (
          <Link to="/admin" className="hover:underline">Admin Panel</Link>
        )}
        <button onClick={logout} className="bg-white text-pink-600 px-3 py-1 rounded">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
