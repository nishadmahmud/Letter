"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Cloud, Heart, Star, Sparkles } from "lucide-react";

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

const Episodes = [
  {
    title: "Episode One",
    subtitle: "When You Became My Home",
    text: [
      "Before you, I was a character wandering without a plot.",
      "Then you appeared - like the warm heroine who quietly rewrites the whole story.",
      "You didn't come with fireworks. You came like spring sunlight after a long winter… soft, patient, slowly turning my life warm.",
      "You grounded me. You shaped me. You made me better without ever asking me to change.",
      "And somehow… you became my safe place."
    ],
    image: "/couple_walking.png",
    theme: "warm"
  },
  {
    title: "Episode Two",
    subtitle: "Adventures on Two Wheels",
    text: [
      "Imagine this scene:",
      "The camera follows two bicycles rolling down a quiet road. Wind brushing through hair. Sunlight dancing on your smile.",
      "Those cycling days… They felt like freedom. Like two kids running away from the world.",
      "Like a slice-of-life anime where time slows down because the moment is too precious to rush.",
      "If life were a movie, those scenes would be the ones I'd rewind again and again."
    ],
    image: "/episode_two.png", // Placeholder: Cycling
    placeholderText: "Imagine us cycling here... A gentle breeze, a glowing sky, and you - always beside me.",
    theme: "breeze"
  },
  {
    title: "Episode Three",
    subtitle: "Food Adventures & Silly Moments",
    text: [
      "Our food adventures deserve their own OVA.",
      "Us exploring new spots, trying dishes we couldn't pronounce, sometimes finding heaven, sometimes asking, 'Why did we order this again??'",
      "But even the worst food became funny with you. Even the simplest meal became special with you."
    ],
    image: "/episode_three.png",
    placeholderText: "A picture of us eating together... Your smile glowing like soft anime lighting.",
    theme: "fun"
  },
  {
    title: "Episode Four",
    subtitle: "Our Walks, Tours & Hidden Corners",
    text: [
      "Some of my favorite episodes of us are the ones where nothing dramatic happens - just walking, touring, exploring random places.",
      "From quiet paths to busy streets, from new cities to hidden corners of our hometown, everything feels more alive with you.",
      "When we walk together, it feels like the background music changes, the world slows down, and the colors become warmer."
    ],
    image: "/episode_four.png",
    placeholderText: "A photo from our travels... Two characters wandering through a world that feels brighter simply because they're together.",
    theme: "adventure"
  },
  {
    title: "Episode Five",
    subtitle: "Intimate Moments — The Quiet Magic",
    text: [
      "Not intimate in a physical sense… but in the way anime shows intimacy:",
      "- The way you lean on me when you're tired",
      "- The way you laugh at my stupid jokes",
      "- The way your eyes soften when you look at me",
      "- The way we sit quietly, doing nothing, but everything feels complete",
      "Those soft, quiet moments… that's the kind of intimacy that stays with me.",
      "You don't even realize it, but you saved me in ways I can't explain."
    ],
    image: "/episode_five.png",
    placeholderText: "Us, quiet and close... The world fading away until it's just the two of us.",
    theme: "intimate"
  },
  {
    title: "Episode Six",
    subtitle: "The Future Arc",
    text: [
      "When I imagine the future, the art style turns warm, cozy, golden.",
      "A little home with soft lights. A kitchen where we cook and argue about salt.",
      "A couch where we cuddle and watch silly shows. Maybe a small family - chaos, laughter, love.",
      "Our future doesn't need to be perfect. It just needs to be ours."
    ],
    image: "/episode_six.png",
    placeholderText: "Our future family... A peaceful ending with a warm glow.",
    theme: "dream"
  },
  {
    title: "Final Episode",
    subtitle: "My Promise to You",
    text: [
      "Ruma, I promise…",
      "To be your partner in every adventure.",
      "To stand by you when the world gets heavy.",
      "To cheer for your dreams like you've always cheered for mine.",
      "To hold your heart carefully, gently, always.",
      "To love you in every season - even in the episodes where life gets difficult.",
      "You are my favorite story. My comfort character. My safe place."
    ],
    image: null,
    theme: "promise"
  }
];

export default function LetterSection() {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* Intro */}
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="font-display text-5xl md:text-7xl text-blue-900 mb-6">My Dearest Ruma,</h2>
          <p className="max-w-2xl text-xl md:text-2xl text-gray-600 leading-relaxed font-light italic">
            "If our love were an anime, this would be the moment where the screen fills with soft stars, a gentle piano starts playing, and the narrator whispers: 'And this… is the story of the girl who changed his world.'"
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-48 pb-32">
          {Episodes.map((episode, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="flex w-full flex-col items-center gap-12"
            >
              {/* Episode Title Card */}
              <div className="text-center mb-4">
                <span className="block text-sm font-display font-bold tracking-[0.3em] text-blue-400 uppercase mb-2">
                  {episode.title}
                </span>
                <h3 className="font-script text-5xl md:text-6xl text-gray-800">
                  {episode.subtitle}
                </h3>
              </div>

              {/* Cinematic Text Box */}
              <div className="relative max-w-3xl w-full p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-sm border-l-4 border-blue-200">
                {episode.text.map((line, i) => (
                  <p key={i} className="text-lg md:text-xl text-gray-700 leading-loose mb-4 font-light">
                    {line}
                  </p>
                ))}
              </div>

              {/* Cinematic Image / Placeholder */}
              {(episode.image || episode.placeholderText) && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative w-full max-w-4xl overflow-hidden rounded-sm shadow-2xl"
                >
                  {episode.image ? (
                    <Image
                      src={episode.image}
                      alt={episode.subtitle}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  ) : (
                    <div className="relative h-[400px] w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-white/50">
                      <div className="text-center p-8">
                        <p className="font-script text-3xl text-blue-300 mb-4 opacity-80">
                          Scene Loading...
                        </p>
                        <p className="text-gray-500 italic font-light max-w-md mx-auto">
                          "{episode.placeholderText}"
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Transition to Proposal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-center mt-20"
          >
            <p className="font-script text-3xl text-blue-300">And now... one last question.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
