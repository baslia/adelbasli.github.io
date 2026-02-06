const certifications = [
  {
    name: "Diploma in Human Nutrition",
    url: "https://alison.com/course/diploma-in-human-nutrition-revised-2017",
    detail: "(Score: 93/100) (Nov. 2024) — Alison",
  },
  {
    name: "MLS-C01",
    url: "https://aws.amazon.com/certification/certified-machine-learning-specialty/",
    detail:
      "(AWS Certified Machine Learning - Specialty - Score: 910/1000) (Nov. 2023) — AWS",
  },
  {
    name: "SAA-C03",
    url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    detail: "(AWS Solutions Architect Associate) (Oct. 2023) — AWS",
  },
  {
    name: "CLF-C01",
    url: "https://aws.amazon.com/fr/certification/certified-cloud-practitioner/",
    detail: "(AWS Certified Cloud Practitioner) (Aug. 2023) — AWS",
  },
  {
    name: "CAPM",
    url: "https://www.pmi.org/certifications/certified-associate-capm",
    detail:
      "(Certified Associate in Project Management) (Jan. 2022) — PMI",
  },
  {
    name: "AZ-900",
    url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/?practice-assessment-type=certification",
    detail: "(Microsoft Azure Fundamentals) (Dec. 2021) — Microsoft",
  },
]

const credlyBadgeIds = [
  "4338baaa-9ea4-4839-8786-d737db2c70a5",
  "12087193-129b-429a-9a40-a88f66c148f0",
  "b3ad2da3-fcd0-4e2c-a98c-b653e2d164bf",
  "ac821b84-5d51-4d4b-8838-bb49fd69d44c",
  "23fd7864-1723-4182-a977-254d94522453",
  "1ba63d19-0727-43f4-89e1-8e2287395fcb",
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Online Courses & Certifications
      </h2>
      <ul className="space-y-2">
        {certifications.map((cert) => (
          <li
            key={cert.name}
            className="bg-muted text-muted-foreground p-2 rounded"
          >
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
            >
              {cert.name}
            </a>{" "}
            {cert.detail}
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-4 mt-6 overflow-x-auto">
        {credlyBadgeIds.map((id) => (
          <div key={id} className="flex-shrink-0">
            <a
              href={`https://www.credly.com/badges/${id}/public_url`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              <div className="w-[120px] h-[120px] bg-muted rounded-lg flex items-center justify-center text-xs text-muted-foreground text-center p-2">
                View Badge on Credly
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
