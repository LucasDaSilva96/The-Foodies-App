'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

type MotionDivProps = {
  children: React.ReactNode;
};

export function MotionDiv({ children }: MotionDivProps) {
  const param = usePathname();

  return (
    <AnimatePresence key={param}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
