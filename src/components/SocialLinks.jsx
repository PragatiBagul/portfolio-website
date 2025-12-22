import { Linkedin, Github, BookOpen } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        Connect with me
      </p>

      <div className="flex gap-4">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/pragati-prashant-bagul/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full border border-gray-200 dark:border-gray-700
                     text-gray-600 dark:text-gray-400
                     hover:text-black dark:hover:text-white
                     hover:border-gray-400 dark:hover:border-gray-500
                     transition hover:-translate-y-0.5"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/PragatiBagul"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full border border-gray-200 dark:border-gray-700
                     text-gray-600 dark:text-gray-400
                     hover:text-black dark:hover:text-white
                     hover:border-gray-400 dark:hover:border-gray-500
                     transition"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>

        {/* Medium */}
        <a
          href="https://medium.com/@bagulpragati"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full border border-gray-200 dark:border-gray-700
                     text-gray-600 dark:text-gray-400
                     hover:text-black dark:hover:text-white
                     hover:border-gray-400 dark:hover:border-gray-500
                     transition"
          aria-label="Medium"
        >
          <BookOpen size={18} />
        </a>
      </div>
    </div>
  );
}
