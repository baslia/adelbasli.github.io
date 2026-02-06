const expertiseAreas = [
  "Agile Project Management",
  "Data Pipelines - ETL",
  "Team Leadership & Management",
  "Deep Learning",
  "AI Agents & Orchestration - MCP",
  "CI/CD Pipelines",
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Areas of Expertise
      </h2>
      <div className="flex flex-wrap gap-3">
        {expertiseAreas.map((area) => (
          <span
            key={area}
            className="bg-muted text-muted-foreground px-4 py-2 rounded transition-colors hover:bg-border"
          >
            {area}
          </span>
        ))}
      </div>
    </section>
  )
}
