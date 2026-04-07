// // import projects from "../data/projects.json";
// // import ProjectCard from "./ProjectCard";

// // export default function Projects() {
// //   return (
// //     <section className="h-full overflow-y-auto px-6 py-6">
      
// //       <div className="max-w-5xl mx-auto">
        
// //         <h2 className="text-2xl font-semibold mb-6">
// //           🧠 Projects
// //         </h2>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //           {projects.map((project) => (
// //             <ProjectCard key={project.id} project={project} />
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// import { useState } from "react";
// import projects from "../data/projects.json";
// import ProjectCard from "./ProjectCard";
// import ProjectModal from "./ProjectModal";

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState(null);

//   return (
//     <section className="h-full overflow-y-auto px-6 py-6">
//       <div className="max-w-5xl mx-auto">

//         <h2 className="text-2xl font-semibold mb-6">
//           🧠 Projects
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {projects.map((project) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//               onClick={setSelectedProject}
//             />
//           ))}
//         </div>

//         {/* Modal */}
//         {selectedProject && (
//           <ProjectModal
//             project={selectedProject}
//             onClose={() => setSelectedProject(null)}
//           />
//         )}

//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import projects from "../data/projects.json";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    // <section className="h-full overflow-y-auto px-6 py-6">
    //   <div className="max-w-5xl mx-auto">
        <section className="max-w-5xl mx-auto px-6 md:px-10">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
        

        <h2 className="text-2xl font-semibold mb-6">🧠 Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}   // ✅ IMPORTANT
            />
          ))}
        </div>

        {/* ✅ Modal render */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}