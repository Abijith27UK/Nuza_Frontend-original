import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 768; // Tailwind's `md` breakpoint
            const company = document.querySelector("#company");
            const forBusiness = document.querySelector("#for-business");
            const nuzaBranding = document.querySelector("#nuza-branding");

            if (isMobile) {
                company.style.order = "1";
                forBusiness.style.order = "2";
                nuzaBranding.style.order = "3";
            } else {
                company.style.order = "0";
                forBusiness.style.order = "0";
                nuzaBranding.style.order = "0";
            }
        };

        // Add event listener on resize
        window.addEventListener("resize", handleResize);
        // Initial call
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <footer
            style={{
                background: "linear-gradient(to right, #5c28c5, #c93cb7, #5c28c5)",
                fontFamily: "'Poppins', sans-serif",
            }}
            className="text-white py-8"
        >
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-start text-center">
                {/* Left Section: Company */}
                <div id="company" className="w-full md:w-1/3 text-left space-y-3">
                    {/* <h4 className="text-lg font-bold mb-2">Company</h4> */}
                    {/* <ul className="space-y-1 text-sm">
                        <li>
                        <Link to="/about" className="hover:underline">About us</Link>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Terms
                            </a>
                        </li>
                    </ul> */}
                </div>

                {/* Center Section: NUZA Branding */}
                <div id="nuza-branding" className="w-full md:w-1/3 flex flex-col items-center space-y-4">
                    <div>
                        <p className="text-lg font-medium">Incubated in</p>
                        {/* Placeholder for Images */}
                        <div className="flex items-center justify-center space-x-4 mt-2">
                            <div className="w-20 h-20 rounded-lg  flex items-center justify-center">
                                <img
                                    src="IITM_Logo.png"
                                    alt="iitm Logo"
                                    className="h-20 w-20 object-contain"
                                />
                            </div>
                            <div className="w-20 h-20  flex items-center justify-center">
                                <img
                                    src="nirmaan_logo.png"
                                    alt="nirmaam logo"
                                    className="h-20 w-20 object-contain"
                                />
                            </div>
                        </div>
                    </div>
                    {/* NUZA Text */}
                    <div className="text-3xl font-bold tracking-wide">NUZA</div>
                    {/* Address */}
                    <p className="text-sm leading-relaxed">
                        Nuza, Sudha & Shankar Innovation Hub,<br />
                        IIT Madras, Chennai, India 600036, IN
                    </p>
                    <a
                        href="mailto:contact@nuza.in"
                        className="text-sm  hover:underline  transition"
                    >
                        contact@nuza.in
                    </a>
                </div>

                {/* Right Section: For Business */}
                <div id="for-business" className="w-full md:w-1/3 text-right space-y-3 ">
                    {/* <h4 className="text-lg font-bold mb-2">For Business</h4>
                    <ul className="space-y-1 text-sm text">
                        <li>
                            <a href="#" className="hover:underline">
                                For partners
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Partner with us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                App for business
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 text-2xl mt-6">
                <a
                    href="https://www.instagram.com/nuzaapp?igsh=Z3JnN2FpNHh3NGUy"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram className="hover:bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] transition duration-300 rounded-lg" />
                </a>
                <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                >
                    <FaYoutube className="hover:text-[#FF0000] transition duration-300" />
                </a>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin className="hover:text-[#0077B5] transition duration-300" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
