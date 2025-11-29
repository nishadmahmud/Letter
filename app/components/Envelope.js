"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

export default function Envelope({ onOpen }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
            onOpen && onOpen();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center py-20">
            <motion.div
                className="relative cursor-pointer"
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="relative h-64 w-80 md:h-80 md:w-96">
                    {/* Placeholder for envelope images - using CSS for now if images fail */}
                    {!isOpen ? (
                        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-blue-200 shadow-xl border-4 border-blue-300">
                            <div className="text-center">
                                <p className="font-script text-3xl text-blue-800">For You</p>
                                <p className="text-sm text-blue-600">(Click to Open)</p>
                            </div>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 flex items-end justify-center"
                        >
                            <div className="h-full w-full rounded-lg bg-blue-100 shadow-xl border-4 border-blue-200 opacity-50"></div>
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: -50, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="absolute bottom-10 h-3/4 w-3/4 bg-white shadow-md p-4"
                            >
                                <p className="font-script text-xl text-gray-800">My Dearest...</p>
                            </motion.div>
                        </motion.div>
                    )}

                    {/* Real images will go here when generated */}
                    {/* 
            <Image
                src={isOpen ? "/envelope_open.png" : "/envelope_closed.png"}
                alt="Envelope"
                fill
                className="object-contain"
            />
            */}
                </div>
            </motion.div>
        </div>
    );
}
