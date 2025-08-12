import React from "react";
import Randy from "../../assets/Randy.jpg";
import Rendy from "../../assets/Rendy.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// Data anggota tim
const TeamSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="xl:flex xl:items-center xl:-mx-4">
                    <div className="xl:w-1/2 xl:mx-4">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                            C0DIFYHUB TEAM
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                        {/* Card Item */}
                        <div className="relative group">
                            <img
                                className="object-cover rounded-xl aspect-square"
                                src={Randy}
                                alt="Randy"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-75 rounded-xl flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <h1 className="text-xl font-semibold text-white capitalize">M.Randy Karna</h1>
                                <p className="mt-2 text-sm text-gray-300 capitalize">Front-End Web Developer</p>
                                <div className="flex mt-4 space-x-3">
                                    <a
                                        href="https://www.linkedin.com/in/randy-karna-7aa6592a8/"
                                        className="text-white hover:text-blue-500 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a
                                        href="https://github.com/Rankarna01"
                                        className="text-white hover:text-gray-400 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub size={24} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/rann_karna10/?next=%2F"
                                        className="text-white hover:text-pink-500 transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <img
                                className="object-cover rounded-xl aspect-square"
                                src={Rendy}
                                alt="Mia"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-75 rounded-xl flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <h1 className="text-xl font-semibold text-white capitalize">M.Rendy Krisna</h1>
                                <p className="mt-2 text-sm text-gray-300 capitalize">Web Developer</p>
                                <div className="flex mt-4 space-x-3">
                                    <a
                                        href="https://www.linkedin.com/in/rendy-krisna-27b6362a5/"
                                        className="text-white hover:text-blue-500 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedin size={24} />
                                    </a>
                                    <a
                                        href="https://github.com/Rendkrisna19"
                                        className="text-white hover:text-gray-400 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub size={24} />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/renndydev/"
                                        className="text-white hover:text-pink-500 transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram size={24} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
