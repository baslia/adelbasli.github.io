import Image from "next/image"

export function ProfileSection() {
  return (
    <section id="profile" className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Profile
      </h2>
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Image
          src="/images/my_picture.jpeg"
          alt="Adel Basli"
          width={300}
          height={300}
          className="rounded-full mx-auto md:mx-0 flex-shrink-0 h-auto"
        />
        <div className="flex flex-col gap-4">
          <p>
            I am a highly motivated and results-oriented data science leader
            with <strong>over 11 years of experience</strong> in leveraging
            machine learning and AI to drive business value. Throughout my
            career, I have focused on applying AI to improve{" "}
            <strong>health, wellness, and nutrition</strong>. Some of my
            significant accomplishments include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Led automation initiatives that{" "}
              <strong>improved efficiency and reduced costs</strong> by millions
              of dollars
            </li>
            <li>
              Developed and deployed innovative machine learning models that{" "}
              <strong>
                increased revenue, reduced risks, and improved decision-making
                processes
              </strong>
            </li>
            <li>
              <strong>Built and managed</strong> high-performing data science
              teams, fostering a collaborative and agile environment
            </li>
            <li>
              Possess a strong educational background in engineering and data
              science, with a Master{"'"}s degree from{" "}
              <strong>Ecole Centrale Paris</strong> and experience at{" "}
              <strong>MIT Sloan School of Management</strong>
            </li>
          </ul>
          <p>
            In my current role as{" "}
            <strong>Team Lead Data Science & AI</strong> at Label Insight, I am
            responsible for leading a team of data scientists in developing and
            deploying cutting-edge AI solutions to support dietitians.
          </p>
        </div>
      </div>
    </section>
  )
}
