// // const colorMap = {
// //   blue: "bg-blue-100 text-blue-700",
// //   green: "bg-green-100 text-green-700",
// //   purple: "bg-purple-100 text-purple-700",
// //   pink: "bg-pink-100 text-pink-700"
// // };

// // export default function ProjectCard({ project }) {
// //   return (
// //     <div className="
// //       rounded-2xl p-6
// //       bg-white
// //       border border-gray-200
// //       shadow-sm
// //       hover:shadow-md
// //       transition-all
// //     ">
      
// //       {/* Category Pill */}
// //       <span className={`
// //         inline-block px-3 py-1 text-sm rounded-full mb-4
// //         ${colorMap[project.color]}
// //       `}>
// //         {project.category}
// //       </span>

// //       {/* Title */}
// //       <h3 className="text-xl font-semibold text-gray-900">
// //         {project.title}
// //       </h3>

// //       {/* Description */}
// //       <p className="mt-3 text-gray-600 leading-relaxed">
// //         {project.description}
// //       </p>

// //       {/* Tags */}
// //       <div className="mt-4 flex flex-wrap gap-2">
// //         {project.tags.map((tag, index) => (
// //           <span
// //             key={index}
// //             className="
// //               px-3 py-1 text-sm
// //               bg-gray-100 text-gray-700
// //               rounded-full
// //             "
// //           >
// //             {tag}
// //           </span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// const colorMap = {
//   blue: "bg-blue-100 text-blue-700",
//   green: "bg-green-100 text-green-700",
//   purple: "bg-purple-100 text-purple-700",
//   pink: "bg-pink-100 text-pink-700"
// };

// export default function ProjectCard({ project }) {
//   return (
//     <div className="
//       rounded-2xl p-6
//       bg-white
//       border border-gray-200
//       shadow-sm
//       hover:shadow-md
//       transition-all
//     ">
      
//       {/* Category Pill */}
//       <span className={`
//         inline-block px-3 py-1 text-sm rounded-full mb-4
//         ${colorMap[project.color]}
//       `}>
//         {project.category}
//       </span>

//       {/* Title */}
//       <h3 className="text-xl font-semibold text-gray-900">
//         {project.title}
//       </h3>

//       {/* Description */}
//       <p className="mt-3 text-gray-600 leading-relaxed">
//         {project.description}
//       </p>

//       {/* Tags */}
//       <div className="mt-4 flex flex-wrap gap-2">
//         {project.tags.map((tag, index) => (
//           <span
//             key={index}
//             className="
//               px-3 py-1 text-sm
//               bg-gray-100 text-gray-700
//               rounded-full
//             "
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function ProjectCard({ project, onClick }) {
//   return (
//     <div
//       onClick={() => onClick(project)}   // ✅ triggers modal
//       className="cursor-pointer rounded-2xl p-6 bg-white border border-gray-200 hover:shadow-md transition-all"
//     >
//       {/* GitHub icon */}
//       <a
//         href={project.github}
//         target="_blank"
//         rel="noreferrer"
//         onClick={(e) => e.stopPropagation()}   // ✅ CRITICAL FIX
//         className="absolute top-4 right-4"
//       >
//         🔗
//       </a>

//       <h3 className="text-xl font-semibold">{project.title}</h3>
//       <p className="mt-2 text-gray-600">{project.description}</p>
//     </div>
//   );
// }

import { Github,Link } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="
        relative cursor-pointer
        rounded-2xl p-6
        bg-white border border-gray-200
        hover:shadow-md transition-all
      "
    >
      {/* Top-right icon container */}
<div className="absolute top-4 right-4 flex items-center gap-3">

  {/* GitHub */}
  {project.github && (
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    title="View on GitHub"
    onClick={(e) => e.stopPropagation()}
    className="text-gray-500 hover:text-black"
  >
    <Github size={18} />
  </a>
)}

  {/* Live */}
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
      title="View Live Demo"
      onClick={(e) => e.stopPropagation()}
      className="text-gray-500 hover:text-black"
    >
      <Link size={18} />
    </a>
  )}

</div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-600 line-clamp-3">
        {project.longDescription || project.description}
      </p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}