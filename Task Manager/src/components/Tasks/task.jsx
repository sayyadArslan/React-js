import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function TaskCard({ title, value, icon, color, percent }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [count, setCount] = useState(0);

  // Count-up animation
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1200;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);
    }
  }, [isInView, value]);

  // Animate card when visible
  useEffect(() => {
    if (isInView) controls.start({ scale: 1, opacity: 1 });
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.4 }}
      className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg flex flex-col justify-center items-center hover:scale-105 transition-transform"
    >
      <div className={`text-4xl mb-3 ${color}`}>{icon}</div>
      <h3 className="text-lg text-gray-300">{title}</h3>

      {/* Count Up Number */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-white mt-1"
      >
        {count}
      </motion.p>

      {/* Progress Bar */}
      <div className="w-full mt-4">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Progress</span>
          <span>{percent}%</span>
        </div>
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full ${color} rounded-full`}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}
