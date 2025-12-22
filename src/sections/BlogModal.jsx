export default function BlogModal({ blog, onClose }) {
  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/70
        flex items-center justify-center
        px-4
      "
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-6xl h-[85vh]
          bg-neutral-900
          rounded-2xl
          flex flex-col
          border border-neutral-800
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800">
          <h3 className="text-sm font-medium truncate">
            {blog.title}
          </h3>

          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Iframe */}
        <iframe
          src={blog.link}
          title={blog.title}
          className="flex-1 w-full"
        />

        {/* Footer */}
        <div className="px-5 py-3 border-t border-neutral-800 text-right">
          <a
            href={blog.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-400 hover:underline"
          >
            Open in new tab ↗
          </a>
        </div>
      </div>
    </div>
  );
}
