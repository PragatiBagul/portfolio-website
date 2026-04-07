export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/50
        flex items-center justify-center
        px-4
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-3xl max-h-[85vh]
          bg-white rounded-2xl
          overflow-y-auto p-6
        "
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold">
            {project.title}
          </h2>

          <button onClick={onClose} className="text-gray-500">
            ✕
          </button>
        </div>

        {/* Overview */}
        <section className="mb-4">
          <h3 className="font-semibold mb-1">Overview</h3>
          <p className="text-gray-600">{project.details.overview}</p>
        </section>

        {/* Problem */}
        <section className="mb-4">
          <h3 className="font-semibold mb-1">Problem</h3>
          <p className="text-gray-600">{project.details.problem}</p>
        </section>

        {/* Approach */}
        <section className="mb-4">
          <h3 className="font-semibold mb-1">Approach</h3>
          <ul className="list-disc ml-5 text-gray-600">
            {project.details.approach.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Insights */}
        <section className="mb-4">
          <h3 className="font-semibold mb-1">Key Insights</h3>
          <ul className="list-disc ml-5 text-gray-600">
            {project.details.insights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Impact */}
        <section>
          <h3 className="font-semibold mb-1">Impact</h3>
          <p className="text-gray-600">{project.details.impact}</p>
        </section>
      </div>
    </div>
  );
}