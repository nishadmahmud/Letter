"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Frown, PartyPopper, Cloud, Star, Sparkles } from "lucide-react";
import clsx from "clsx";

const FloatingIcons = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Soft Color Clouds */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute bottom-[20%] left-[20%] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            {/* Floating Icons */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-blue-200/40"
                    initial={{
                        x: Math.random() * 100 + "vw",
                        y: Math.random() * 100 + "vh",
                        scale: Math.random() * 0.5 + 0.5,
                        opacity: 0,
                    }}
                    animate={{
                        y: [null, Math.random() * -100],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 5,
                    }}
                >
                    {i % 4 === 0 ? <Cloud size={64} /> :
                        i % 4 === 1 ? <Heart size={48} /> :
                            i % 4 === 2 ? <Star size={32} /> :
                                <Sparkles size={40} />}
                </motion.div>
            ))}
        </div>
    );
};

export default function ProposalSection() {
    const [response, setResponse] = useState(null); // 'yes' or 'no'

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-white overflow-hidden px-4 py-20">
            <FloatingIcons />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center"
            >
                <h2 className="font-display text-4xl md:text-6xl text-pink-500 drop-shadow-sm mb-12 leading-tight">
                    Will you go on a date with me?
                </h2>

                {!response ? (
                    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setResponse('yes')}
                            className="group relative flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-pink-600 hover:shadow-pink-500/30 font-display"
                        >
                            <Heart className="h-6 w-6 fill-white transition-transform group-hover:animate-bounce" />
                            Yes, I'd love to!
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setResponse('no')}
                            className="group relative flex items-center gap-3 rounded-full bg-gray-400 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-gray-500 hover:shadow-gray-400/30 font-display"
                        >
                            <Frown className="h-6 w-6 text-white" />
                            No, I'm busy...
                        </motion.button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-8 text-center"
                    >
                        {response === 'yes' ? (
                            <>
                                <p className="font-script text-5xl md:text-7xl text-pink-600 drop-shadow-sm">
                                    Yay! Happy 2nd Anniversary! ❤️
                                </p>
                                <p className="mt-6 text-2xl font-body text-gray-700">
                                    I can't wait to celebrate with you.
                                </p>
                                <div className="mt-8 flex justify-center gap-4">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ y: 0 }}
                                            animate={{ y: -20 }}
                                            transition={{
                                                repeat: Infinity,
                                                repeatType: "reverse",
                                                duration: 0.5,
                                                delay: i * 0.1
                                            }}
                                        >
                                            <Heart className="h-8 w-8 fill-pink-500 text-pink-500" />
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <p className="font-script text-5xl md:text-7xl text-blue-600 drop-shadow-sm">
                                    Too bad! We're going anyway! 😜
                                </p>
                                <p className="mt-6 text-2xl font-body text-gray-700">
                                    (You can't escape my love that easily!)
                                </p>
                                <div className="mt-8 flex justify-center gap-4">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                    >
                                        <PartyPopper className="h-12 w-12 text-blue-500" />
                                    </motion.div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}
