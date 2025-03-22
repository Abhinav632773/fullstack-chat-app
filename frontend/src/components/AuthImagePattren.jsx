import React, { memo } from "react";
import { motion } from "framer-motion";

const AuthImagePattern = memo(() => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center bg-gray-800 text-center p-12">
      <h2 className="text-2xl font-semibold text-gray-200">Join our community</h2>
      <p className="text-gray-200 mt-2">
        Connect with friends, share moments, and stay in touch with your loved ones.
      </p>

      {/* Animated 3x3 Grid */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="w-20 h-20 bg-gray-700 rounded-lg"
            animate={{
              filter: ["brightness(100%)", "brightness(150%)", "brightness(100%)"],
            }}
            transition={{
              duration: 4 ,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7, // Stagger animation, each box starts 0.7s after the previous one
            }}
          />
        ))}
      </div>
    </div>
  );
});

export default AuthImagePattern;
