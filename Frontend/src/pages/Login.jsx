import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        const res = await API.post("/auth/login", form);
        localStorage.setItem("token", res.data.token);
        navigate("/");
    };

    return (
        <form onSubmit={submit} className="max-w-sm mx-auto mt-20">
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <input
                className="border p-2 w-full mb-2"
                placeholder="Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
                className="border p-2 w-full mb-2"
                type="password"
                placeholder="Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button className="bg-pink-500 text-white w-full py-2">
                Login
            </button>
            <p className="mt-4 text-center">
                Don’t have an account?{" "}
                <Link to="/register" className="text-pink-600 font-bold">
                    Register
                </Link>
            </p>
        </form>
    );
}

export default Login;
