import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    navigate("/login");
  };

  return (
    <form onSubmit={submit} className="max-w-sm mx-auto mt-20">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input className="border p-2 w-full mb-2" placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input className="border p-2 w-full mb-2" placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input className="border p-2 w-full mb-2" type="password" placeholder="Password"
        onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button className="bg-pink-500 text-white w-full py-2">
        Register
      </button>
    </form>
  );
}

export default Register;
