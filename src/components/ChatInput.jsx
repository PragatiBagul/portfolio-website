export default function ChatInput() {
  return (
    <div className="mt-10 flex items-center w-full max-w-md mx-auto
                    rounded-full bg-white dark:bg-gray-800
                    shadow-md px-4 py-3
                    border border-gray-200 dark:border-gray-700">

      <input
        placeholder="Ask me anything..."
        className="flex-1 bg-transparent outline-none text-sm
                   text-gray-800 dark:text-gray-100
                   placeholder-gray-400"
      />

      <button className="ml-2 w-9 h-9 rounded-full bg-black dark:bg-white
                         text-white dark:text-black
                         flex items-center justify-center
                         hover:scale-105 transition">
        →
      </button>
    </div>
  );
}
