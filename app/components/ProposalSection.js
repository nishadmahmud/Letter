"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Frown, PartyPopper } from "lucide-react";
import clsx from "clsx";

export default function ProposalSection() {
    const [response, setResponse] = useState(null); // 'yes' or 'no'

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-pink-50 px-4 py-20 dark:from-gray-900 dark:to-gray-800">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center"
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
                            className="group relative flex items-center gap-3 rounded-full bg-pink-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-pink-600 hover:shadow-pink-500/30"
                        >
                            <Heart className="h-6 w-6 fill-white transition-transform group-hover:animate-bounce" />
                            Yes, I'd love to!
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setResponse('no')}
                            className="group relative flex items-center gap-3 rounded-full bg-gray-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:bg-gray-600 hover:shadow-gray-500/30"
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
                                <p className="font-script text-5xl text-pink-600">
                                    Yay! Happy 2nd Anniversary! ❤️
                                </p>
                                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
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
                                <p className="font-script text-5xl text-blue-600">
                                    Too bad! We're going anyway! 😜
                                </p>
                                <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
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
