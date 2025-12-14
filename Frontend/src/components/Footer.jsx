function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">
            <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Brand */}
                <div>
                    <h2 className="text-xl font-bold text-white">🍬 Sweet Shop</h2>
                    <p className="mt-2 text-sm">
                        A modern sweet shop management system built using the MERN stack.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Dashboard</li>
                        <li>Admin Panel</li>
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </div>

                {/* Copyright */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-2">About</h3>
                    <p className="text-sm">
                        © {new Date().getFullYear()} Sweet Shop Management System.
                        <br />
                        Built by <span className="text-pink-400 font-semibold">Nandan Kumar</span>.
                    </p>
                </div>

            </div>

            <div className="text-center text-xs text-gray-400 border-t border-gray-700 py-3">
                Made with ❤️ using React, Tailwind, Node.js & MongoDB
            </div>
        </footer>
    );
}

export default Footer;
