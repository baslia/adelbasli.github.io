const researchItems = [
  {
    role: "Hackathon Judge",
    org: "Devpost",
    orgUrl: "https://digitomize.com/hackathons/25639",
    location: "USA (2025)",
    linkText: "Batch 09 Hackathon",
    linkUrl: "https://northof0-open-ended.devpost.com",
  },
  {
    role: "Hackathon Judge",
    org: "AiGoLearning",
    orgUrl: "https://aigolearning.org",
    location: "France (2025)",
    linkText: "Future Hacks 7 2025",
    linkUrl: "https://aigolearning.org/futurehacks/index.html",
  },
  {
    role: "Hackathon Judge",
    org: "NextAI",
    orgUrl: null,
    location: "France (2025)",
    linkText: "Bugfix Hacks",
    linkUrl: "https://nextai-hack-students-only.devpost.com",
  },
  {
    role: "Hackathon Judge",
    org: "Hackathon Raptors",
    orgUrl: "https://www.raptors.dev",
    location: "France (2025)",
    linkText: "Smart Browser Extensions Hackathon",
    linkUrl: "http://browserbuddy.net",
  },
  {
    role: "Hackathon Winner",
    org: "French Government",
    orgUrl:
      "https://agriculture.gouv.fr/hackathon-donnees-alimentaires-les-laureats-de-la-premiere-edition",
    location: "France (2024)",
    linkText: "Food Data Hackathon",
    linkUrl:
      "https://www.numerique.gouv.fr/agenda/hackathon-donnees-alimentaires/",
  },
  {
    role: "Trainer",
    org: "EUROSAE",
    orgUrl: null,
    location: "France (2024)",
    linkText: "The renewal of artificial intelligence",
    linkUrl: "https://www.eurosae.com/en/",
  },
  {
    role: "AI Contributor",
    org: "Open Food Facts",
    orgUrl: null,
    location: "Remote (2018 - Now)",
    linkText: "Collaborative food products database",
    linkUrl: "https://world.openfoodfacts.org",
  },
  {
    role: "Author",
    org: "AlChE",
    orgUrl: null,
    location: "USA (2015)",
    linkText:
      "Batch Process Monitoring By Dynamic Time Warping and K-means Clustering",
    linkUrl:
      "https://www-test.aiche.org/conferences/aiche-annual-meeting/2015/proceeding/paper/244p-batch-process-monitoring-dynamic-time-warping-and-k-means-clustering",
  },
  {
    role: "Contributor",
    org: "MIT",
    orgUrl: null,
    location: "USA (2011)",
    linkText:
      "Generalization Bounds for Learning with Linear, Polygonal, Quadratic and Conic Side Knowledge",
    linkUrl: "https://arxiv.org/abs/1405.7764",
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Academic Research & Open Source Contribution
      </h2>
      <ul className="space-y-2">
        {researchItems.map((item, i) => (
          <li key={i} className="bg-muted text-muted-foreground p-2 rounded">
            {item.role},{" "}
            {item.orgUrl ? (
              <a
                href={item.orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                <strong>{item.org}</strong>
              </a>
            ) : (
              <strong>{item.org}</strong>
            )}
            , {item.location} -{" "}
            <a
              href={item.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {item.linkText}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
