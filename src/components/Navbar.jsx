// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../../public/NUZA-logo.png"
// const Navbar = () => {
//     return (
//         <nav className="bg-[#7B6DFF] text-white p-4 shadow-lg">
//     <div className="container mx-auto flex justify-between items-center">
//         <img src={logo} alt="Logo" className="h-8" /> {/* Replace with your image path */}
//         <div className="space-x-4">
//             <Link to="/" className="hover:underline">Login</Link>
//             <Link to="/signup" className="hover:underline">Sign Up</Link>
//             <Link to="/dashboard" className="hover:underline">Dashboard</Link>
//         </div>
//     </div>
// </nav>


//     );
// };

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/NUZA-logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#7B6DFF] text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <img src={logo} alt="Logo" className="h-8" />

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white text-2xl focus:outline-none"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {menuOpen && (
                <div className="absolute right-4 bg-white text-[#7B6DFF] px-6 py-4 shadow-md">
                    <ul className="flex flex-col gap-4 text-lg font-semibold">
                        <li>
                            <Link to="/customers" onClick={() => setMenuOpen(false)}>
                                Nuza for Customers
                            </Link>
                        </li>
                        <li>
                            <Link to="/business" onClick={() => setMenuOpen(false)}>
                                Nuza for Business
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
