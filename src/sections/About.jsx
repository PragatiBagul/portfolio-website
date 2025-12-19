export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 space-y-10">
      
      {/* About Me */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Software engineer with <span className="font-semibold">3+ years of experience</span> building and
          operating scalable, production ML systems across search, ranking, NLP,
          and geospatial prediction. Strong foundation in computer science
          fundamentals, data structures, and system design, with hands-on
          experience designing end-to-end ML pipelines from model development to
          low-latency deployment on cloud-native infrastructure.
        </p>
      </div>

      {/* Education + Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Education */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl">🎓</span>
            <h3 className="text-lg font-semibold">Education</h3>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <p className="font-medium">B.Tech in Computer Science</p>
              <p className="text-sm text-gray-500">VJTI, Mumbai · 2022</p>
            </div>

            <div>
              <p className="font-medium">Diploma in Computer Science</p>
              <p className="text-sm text-gray-500">
                Government Polytechnic, Nashik · 2019
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xl">🏆</span>
            <h3 className="text-lg font-semibold">Achievements</h3>
          </div>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
            <li>🎉 J.P. Morgan Performance Excellence Award (Cloud Migration)</li>
            <li>🎤 Toastmasters Best Grammarian & Table Topic Master (5×)</li>
            <li>☁️ AWS Certified Solutions Architect – Associate</li>
          </ul>
        </div>
      </div>

      {/* Connect */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl">📍</span>
          <h3 className="text-lg font-semibold">Connect</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700
                       text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700
                       text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            GitHub ↗
          </a>

          <a
            href="https://medium.com/@your-medium"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700
                       text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Medium ↗
          </a>
        </div>
      </div>
    </section>
  );
}
