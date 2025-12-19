import { motion, AnimatePresence } from "framer-motion";

export default function DocsModal({ open, onClose, title, content }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-50 inset-0 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-lg w-full shadow-lg">
              <h3 className="text-lg font-semibold mb-3">{title}</h3>

              <pre className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
                {content}
              </pre>

              <button
                onClick={onClose}
                className="mt-6 px-4 py-2 rounded-full bg-gray-900 text-white text-sm"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
