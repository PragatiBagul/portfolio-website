import { motion } from "framer-motion";
export default function Objective() {
  return (
    <div>
     <motion.h4
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  className="mt-4 text-sm md:text-base font-medium
             text-center tracking-wide
             text-gray-500 dark:text-gray-400
             max-w-2xl mx-auto"
>
  Machine Learning · Natural Language · Financial Markets · Data Science
</motion.h4>
      <motion.h2
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  className="mt-6 text-2xl md:text-3xl font-semibold
             text-center tracking-tight
             text-gray-700 dark:text-gray-300
             max-w-2xl mx-auto"
>
  Building Progressive Intelligence
</motion.h2>
    </div>
  );
}
