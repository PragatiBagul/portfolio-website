import { useState } from "react";
import { motion } from "framer-motion";
import DocsModal from "../components/DocsModal";

/**
 * Put images/videos inside:
 * public/projects/
 */

const projects = [
  {
    title: "Large-Scale Retrieval & Ranking System",
    description:
      "Production-grade multi-stage search engine combining lexical, dense, neural retrieval and learning-to-rank.",
    highlights: [
      "Reduced retrieval latency to milliseconds using FAISS IVF-PQ",
      "Improved MRR@10, nDCG@10, Recall@100 over BM25 baselines",
      "Deployed scalable FastAPI service with caching & Docker",
    ],
    tech: ["Python", "FAISS", "XGBoost", "FastAPI", "Docker"],
    media: {
      type: "video", // "image" | "video"
      src: "/projects/search-system.mp4",
    },
    docs: {
      title: "Search Infrastructure – Design & Evaluation",
      content: `
This system implements a modern multi-stage retrieval pipeline:

• BM25 + Dense ANN retrieval
• FAISS IVF-PQ for low-latency search
• XGBoost Learning-to-Rank
• Offline evaluation (MRR, nDCG, Recall)

The focus was on relevance, scalability, and production reliability.
      `,
    },
    github: "https://github.com/your-github/search-system",
  },

  {
    title: "NYC Taxi Trip Duration Prediction",
    description:
      "Large-scale ETA prediction system using geospatial and temporal feature engineering.",
    highlights: [
      "Processed 1M+ trips with geohashing & directional features",
      "Reduced error using XGBoost & CatBoost with Bayesian tuning",
      "Built real-time inference API with async batching",
    ],
    tech: ["Python", "XGBoost", "CatBoost", "SHAP", "FastAPI"],
    media: {
      type: "image",
      src: "/projects/eta-prediction.png",
    },
    docs: {
      title: "Geospatial ETA Prediction – Approach",
      content: `
Key components of this system:

• Feature engineering using distance, bearing, geohashing
• Gradient boosting with Bayesian hyperparameter tuning
• SHAP-based explainability for traffic patterns
• Low-latency FastAPI inference service
      `,
    },
    github: "https://github.com/your-github/eta-prediction",
  },

  {
    title: "Multimodal Retrieval & RAG System",
    description:
      "CLIP-based multimodal retrieval system with RAG-powered reasoning using LLaMA.",
    highlights: [
      "Indexed 10K+ image-text embeddings with FAISS",
      "Enabled millisecond semantic lookup",
      "Integrated LLaMA for context-aware generation",
    ],
    tech: ["PyTorch", "CLIP", "FAISS", "LLaMA", "RAG"],
    media: {
      type: "video",
      src: "/projects/multimodal-rag.mp4",
    },
    docs: {
      title: "Multimodal Retrieval & RAG",
      content: `
This project combines multimodal retrieval with generation:

• CLIP for shared embedding space
• FAISS for fast ANN retrieval
• RAG pipeline using LLaMA
• End-to-end API-backed system
      `,
    },
    github: "https://github.com/your-github/multimodal-rag",
  },
];

export default function Projects() {
  const [activeDocs, setActiveDocs] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
      <h2 className="text-2xl font-semibold">Projects</h2>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1,
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
          >
            {/* Media */}
            {project.media && (
              <div className="mb-5 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                {project.media.type === "video" ? (
                  <video
                    src={project.media.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full"
                  />
                ) : (
                  <img
                    src={project.media.src}
                    alt={project.title}
                    className="w-full"
                  />
                )}
              </div>
            )}

            {/* Title + Tech */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs
                               bg-gray-100 dark:bg-gray-700
                               text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              {project.highlights.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => setActiveDocs(project.docs)}
                className="px-4 py-2 rounded-full text-sm
                           bg-gray-100 dark:bg-gray-700
                           hover:bg-gray-200 dark:hover:bg-gray-600
                           transition"
              >
                View Docs
              </button>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm
                           border border-gray-300 dark:border-gray-600
                           hover:bg-gray-100 dark:hover:bg-gray-700
                           transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Docs Modal */}
      <DocsModal
        open={!!activeDocs}
        onClose={() => setActiveDocs(null)}
        title={activeDocs?.title}
        content={activeDocs?.content}
      />
    </section>
  );
}
