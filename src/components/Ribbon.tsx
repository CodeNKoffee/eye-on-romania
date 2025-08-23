"use client";
import { motion, useReducedMotion } from 'framer-motion';

export default function Ribbon() {
  const reduce = useReducedMotion();
  const variant = {
    animate: { x: [0, 6, 0], y: [0, -2, 0], rotate: [0, 1, 0] },
  };

  return (
    <div className="w-full flex justify-center my-4" aria-hidden>
      <motion.div
        className="flex gap-0 rounded-full overflow-hidden shadow-sm"
        animate={reduce ? undefined : 'animate'}
        variants={variant}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ pointerEvents: 'none' }}
      >
        <div className="w-40 h-2 bg-tricolor-blue" />
        <div className="w-40 h-2 bg-tricolor-yellow" />
        <div className="w-40 h-2 bg-tricolor-red" />
      </motion.div>
    </div>
  );
}
