import { motion } from "framer-motion";
export default function Objective() {
  return (
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
  );
}
