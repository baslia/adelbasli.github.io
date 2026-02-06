"use client"

import { useState } from "react"

const skills = [
  "Data Science: Machine Learning, MCP, Agent, Statistical Analysis, Predictive Modeling, Hypothesis Testing",
  "Programming Languages: Python, R, SQL",
  "Machine Learning Libraries: Scikit-learn, TensorFlow, PyTorch, Keras",
  "Cloud Computing: AWS, Microsoft Azure, Google Cloud Platform (GCP)",
  "Data Visualization Tools: Matplotlib, Seaborn, Tableau, Microsoft Power BI, Excel",
  "Big Data Technologies: Hadoop, Apache Spark, Hive, Pig",
  "Software and Tools: Jupyter Notebook, RStudio, Anaconda, Git, Jira, CircleCI",
  "Project Management: Agile Methodologies, Scrum, Kanban, Jira, Microsoft Project",
  "Soft Skills: Presentation, Planning, Organization, Creative Problem-Solving, Teamwork, Active Listening, Adaptability, Analytical Thinking",
]

export function SkillsSection() {
  const [showSkills, setShowSkills] = useState(false)

  return (
    <section id="skills" className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Skills
      </h2>
      {showSkills && (
        <ul className="space-y-2 mb-4">
          {skills.map((skill, i) => (
            <li key={i} className="bg-muted text-muted-foreground p-2 rounded">
              {skill}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={() => setShowSkills(!showSkills)}
        className="px-4 py-2 bg-gradient-to-br from-accent to-blue-500 text-accent-foreground rounded-lg font-semibold shadow hover:shadow-md transition-all hover:-translate-y-0.5"
      >
        {showSkills ? "Show Less" : "Show More"}
      </button>
    </section>
  )
}
