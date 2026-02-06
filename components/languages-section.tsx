import Image from "next/image"

const languages = [
  { flag: "/images/france.png", alt: "French Flag", name: "French", level: "Native" },
  { flag: "/images/united-kingdom.png", alt: "UK Flag", name: "English", level: "Fluent" },
  { flag: "/images/germany.png", alt: "German Flag", name: "German", level: "Intermediate — Learning" },
]

export function LanguagesSection() {
  return (
    <section id="languages" className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Languages
      </h2>
      <ul className="space-y-2">
        {languages.map((lang) => (
          <li key={lang.name} className="bg-muted text-muted-foreground p-2 rounded flex items-center gap-2">
            <Image src={lang.flag} alt={lang.alt} width={16} height={16} />
            {lang.name} [{lang.level}]
          </li>
        ))}
      </ul>
    </section>
  )
}
