export default function Footer() {
  return (
    <footer className="mt-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 text-sm text-gray-500 dark:text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Pragati Bagul</span>

        <span className="text-xs">
          Built with React · Tailwind · Framer Motion
        </span>
      </div>
    </footer>
  );
}
