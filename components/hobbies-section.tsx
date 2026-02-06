const hobbies = [
  "Badminton",
  "Soccer",
  "Cinema",
  "Music",
  "Running",
  "Travel",
  "Technology",
]

export function HobbiesSection() {
  return (
    <section className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Hobbies
      </h2>
      <div className="flex flex-wrap gap-3">
        {hobbies.map((hobby) => (
          <span
            key={hobby}
            className="bg-muted text-muted-foreground px-4 py-2 rounded transition-colors hover:bg-border"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  )
}
