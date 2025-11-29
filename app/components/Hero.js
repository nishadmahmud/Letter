"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={ref} className="relative h-screen w-full overflow-hidden">
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/hero_background.png" // We need to move the asset here
                    alt="Starry Night Anime Room"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            <motion.div
                style={{ y: textY }}
                className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-display text-6xl md:text-8xl drop-shadow-lg"
                >
                    A Letter For You
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="mt-4 font-script text-2xl md:text-3xl font-light tracking-wide drop-shadow-md"
                >
                    Scroll down to open...
                </motion.p>
            </motion.div>
        </div>
    );
}
