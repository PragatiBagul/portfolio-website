import { motion } from "framer-motion";

const actions = [
  { key: "me", label: "Me", emoji: "👋", animation: "wave" },
  { key: "experience", label: "Experience", emoji: "💼", animation: "bounce" },
  { key: "projects", label: "Projects", emoji: "🧠", animation: "bounce" },
  { key: "skills", label: "Skills", emoji: "🛠️", animation: "bounce" },
  { key: "blog", label: "Blogs", emoji: "📝", animation: "sparkle" },
  { key: "contact", label: "Contact", emoji: "📧", animation: "bounce" },
];

const emojiVariants = {
  idle: { y: 0, rotate: 0, scale: 1 },
  bounce: { y: [-2, -6, 0], scale: [1, 1.1, 1] },
  wave: { rotate: [0, 15, -10, 15, 0] },
  sparkle: { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] },
};

export default function ActionCards({ active, onSelect }) {
  return (
    <div className="mt-8 flex gap-4 justify-center flex-wrap">
      {actions.map(({ key, label, emoji, animation }) => (
        <motion.button
          key={key}
          onClick={() => onSelect(key)}
          whileHover={{ y: -4 }}
          className={`w-28 h-20 rounded-xl
            bg-white dark:bg-gray-800
            border
            ${active === key
              ? "border-indigo-400 ring-2 ring-indigo-300"
              : "border-gray-200 dark:border-gray-700"}
            flex flex-col items-center justify-center gap-1
            transition`}
        >
          <motion.span
            className="text-xl"
            variants={emojiVariants}
            initial="idle"
            whileHover={animation}
          >
            {emoji}
          </motion.span>

          <span className="text-sm font-medium">{label}</span>
        </motion.button>
      ))}
    </div>
  );
}
