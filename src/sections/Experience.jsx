export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>

        <div className="space-y-8 text-gray-600 dark:text-gray-300">
          
          {/* Salesforce */}
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Member of Technical Staff — Salesforce
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Jan 2025 – July 2025
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Designed and delivered a secure, scalable credential management platform for enterprise systems
              </li>
              <li>
                Built extensible, API-driven workflows with strong security, compliance, and auditability
              </li>
              <li>
                Improved system reliability through automation, reducing manual intervention by <strong>70%</strong>
              </li>
              <li>
                Owned end-to-end delivery across architecture, backend, UI, and deployment
              </li>
              <li>
                Led and collaborated with cross-functional teams to ship production systems under tight deadlines
              </li>
            </ul>
          </div>

          {/* JPMC */}
          <div>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              Full Stack Software Engineer — J.P. Morgan Chase & Co.
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              Jul 2022 – Jan 2025
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>
                Built and scaled cloud-native backend systems and data pipelines supporting large-scale analytics and model workflows
              </li>
              <li>
                Designed high-throughput batch and search systems, significantly reducing latency and manual processing time
              </li>
              <li>
                Improved observability and system reliability through automated monitoring and alerting
              </li>
              <li>
                Led modernization and cloud migration initiatives, achieving major performance and availability improvements
              </li>
              <li>
                Awarded <strong>Performance Excellence Award</strong> for impact on cloud transformation
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
