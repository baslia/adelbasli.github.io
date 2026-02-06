import Image from "next/image"

const educationEntries = [
  {
    degree: "MSc in Engineering, Ingénieur Centralien",
    institution: "Ecole Centrale Paris, Paris, France (2009-2013)",
    url: "https://www.centralesupelec.fr/en",
    logo: "/images/ecole_centrale_paris_logo.png",
    logoAlt: "Ecole Centrale Paris Logo",
    description:
      "Prestigious and selective Grandes Ecoles, with a primary focus on Computer Science, Quantitative Research and Applied Mathematics.",
    courses:
      "Data Mining & Machine Learning, Computer Vision & Image Recognition, Risk & Uncertainty Modeling, Optimization, Time Series Analysis & Forecasting.",
  },
  {
    degree: "Visiting Student",
    institution: "MIT SLOAN School of Management, Cambridge, USA (2011)",
    url: "https://mitsloan.mit.edu/",
    logo: "/images/mit_logo.jpg",
    logoAlt: "MIT Logo",
    description:
      "Research: How different types of side knowledge can reduce the hypothesis space and improve the generalization performance of supervised learning algorithms.",
    courses:
      "Statistical Reasoning and Data Modeling, Statistical Learning and Data Mining, Statistical Inference in High-Dimensional Settings, Artificial Intelligence.",
  },
  {
    degree: "Classes Prépa",
    institution: "Lycée Kleber, Strasbourg, France (2006-2009)",
    url: "https://lycee-kleber.com.fr/cpge-scientifiques/",
    logo: "/images/kleber_logo.png",
    logoAlt: "Classes Prépa Logo",
    description:
      "Specialization: Intensive preparation in Mathematics, Physics, and Engineering Sciences to qualify for entry into prestigious Grandes Écoles",
    courses:
      "Advanced Mathematics, Theoretical Physics, Engineering Sciences, Computer Science, Philosophy, Modern Languages.",
  },
]

export function EducationSection() {
  return (
    <section id="education" className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Education
      </h2>
      <div className="space-y-6">
        {educationEntries.map((entry) => (
          <div key={entry.degree}>
            <h3 className="text-lg font-semibold text-card-foreground">{entry.degree}</h3>
            <div className="flex items-start gap-4 mt-2">
              <Image
                src={entry.logo}
                alt={entry.logoAlt}
                width={85}
                height={85}
                className="flex-shrink-0 object-contain"
              />
              <div>
                <p>
                  <strong>
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {entry.institution}
                    </a>
                  </strong>
                </p>
                <p className="mt-1 text-sm">{entry.description}</p>
                <p className="mt-1 text-sm">
                  <span className="font-medium">Relevant Courses:</span>{" "}
                  {entry.courses}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
