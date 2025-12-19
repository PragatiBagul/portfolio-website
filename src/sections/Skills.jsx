const skillGroups = [
  {
    title: "Machine Learning & AI",
    skills: [
      "Supervised & Unsupervised Learning",
      "Feature Engineering",
      "Gradient Boosting (XGBoost, LightGBM)",
      "NLP & Embeddings",
      "CNNs",
      "SHAP & Explainability",
      "Cross-Validation",
      "Class Imbalance Handling",
      "Target Encoding",
      "Probability Calibration",
    ],
  },
  {
    title: "Deep Learning & NLP",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Transformers",
      "BERT",
      "Tokenization",
      "Attention Models",
    ],
  },
  {
    title: "MLOps & Deployment",
    skills: [
      "MLflow",
      "Model Versioning & Experiment Tracking",
      "Inference APIs (FastAPI / Flask)",
      "Docker & Kubernetes (EKS)",
      "AWS Lambda",
      "CI/CD",
      "Data Pipelines",
      "Model Monitoring (Drift, Performance Decay)",
    ],
  },
  {
    title: "Cloud & Distributed Systems",
    skills: [
      "AWS (S3, Lambda, RDS, CloudWatch)",
      "Networking & Load Balancers",
      "EMR Clusters & Pods",
      "Kafka",
      "Redis MQ",
      "Distributed Systems",
      "Microservices Architecture",
    ],
  },
  {
    title: "Backend & System Design",
    skills: [
      "Data Structures & Algorithms",
      "Java (Spring Boot, Security, JPA, Microservices)",
      "Python (Django, ML & Data Science)",
      "REST APIs",
      "Design Patterns",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "jQuery",
    ],
  },
  {
    title: "Databases",
    skills: [
      "SQL & RDBMS",
      "NoSQL",
      "MongoDB",
      "DynamoDB",
      "Liquibase",
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      "Git",
      "JIRA",
      "Bitbucket",
      "Splunk",
      "Sonar",
    ],
  },
];

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 space-y-8">
      <h2 className="text-2xl font-semibold">Skills</h2>

      <div className="space-y-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                {group.title}
              </h3>


            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1.5 rounded-full text-sm
                             bg-gray-100 dark:bg-gray-700
                             text-gray-800 dark:text-gray-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
