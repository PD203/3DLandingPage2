import React, { useState } from 'react';
import openMenu from "../assets/menu.svg";
import closeMenu from "../assets/close.svg";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/news">
                    News
                </Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/gallery">
                    Gallery
                </Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/students">
                    For Students
                </Link>
            </li>
            <li className="nav-li">
                <Link className="nav-link" to="/about">
                    About
                </Link>
            </li>
        </ul>
    );
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed inset-x-0 z-20 w-full py-2 backdrop-blur-lg bg-primary/40">
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a
                        href="/"
                        className="text-4xl font-bold transition-colors text-neutral-400 hover:text-white"
                    >
                        Cosmos
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
                    >
                        <img
                            src={isOpen ? closeMenu : openMenu}
                            className="w-6 h-6"
                            alt="toggle"
                        />
                    </button>
                    <nav className="hidden  sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    className="block overflow-hidden text-center sm:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, }}
                    style={{ maxHeight: "100vh" }}
                >
                    <nav className="pb-5">
                        <Navigation />
                    </nav>
                </motion.div>
            )}
        </div>
    );
};

export default Navbar;