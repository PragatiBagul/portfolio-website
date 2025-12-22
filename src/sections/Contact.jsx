export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 md:px-10">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm text-center">
        
        <h2 className="text-2xl font-semibold mb-4">
          Let’s Connect
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          If you’d like to collaborate, discuss opportunities, or just say hi,
          feel free to reach out.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pragati-prashant-bagul/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2
                       px-6 py-3 rounded-full
                       bg-gray-900 text-white
                       hover:opacity-90 transition"
          >
            <span className="text-lg">🔗</span>
            <span>LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="mailto:thepragatibagul@outlook.com"
            className="flex items-center justify-center gap-2
                       px-6 py-3 rounded-full
                       border border-gray-300 dark:border-gray-600
                       hover:bg-gray-100 dark:hover:bg-gray-700
                       transition"
          >
            <span className="text-lg">📧</span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}
