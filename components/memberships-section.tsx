const memberships = [
  {
    title: "Senior Member",
    org: "Institute of Electrical and Electronics Engineers (IEEE)",
    url: "https://www.ieee.org",
  },
  {
    title: "Member",
    org: "Association Française pour l'Intelligence Artificielle (AfIA)",
    url: "https://afia.asso.fr",
  },
  {
    title: "Member",
    org: "Ingénieurs et Scientifiques de France (IESF)",
    url: "https://repertoire.iesf.fr/#profile/7381c3ff9f28538b79cd37c2c5f216ad",
  },
]

export function MembershipsSection() {
  return (
    <section className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Professional Memberships
      </h2>
      <ul className="space-y-2">
        {memberships.map((m) => (
          <li key={m.org} className="bg-muted text-muted-foreground p-2 rounded">
            <a
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              {m.title}, <strong>{m.org}</strong>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
