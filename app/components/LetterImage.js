"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LetterImage() {
    return (
        <section className="relative w-full bg-white">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="relative w-full"
            >
                <Image
                    src="/letter.png"
                    alt="A handwritten letter"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                    className="block"
                />
            </motion.div>
        </section>
    );
}
