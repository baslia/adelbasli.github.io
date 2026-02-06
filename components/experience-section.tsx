interface Job {
  title: string
  company: string
  companyUrl: string
  location: string
  period: string
  tags: string[]
  bullets: string[]
}

const jobs: Job[] = [
  {
    title: "Team Lead Data Science & AI - General Manager",
    company: "Label Insight",
    companyUrl:
      "https://nielseniq.com/global/en/landing-page/label-insight/",
    location: "Chicago, USA",
    period: "06/2025 - present",
    tags: ["Nutrition"],
    bullets: [
      "Managed the Data Science & AI function, directing three cross-functional teams in data capture, attribution, and labeling, and overseeing 25+ associates across multiple international locations.",
      "Exercised complete authority over employment, professional development, and performance for a team of senior data science professionals, in addition to comprehensive oversight of the departmental budget and resource allocation.",
      "Formulated and directed the function's three-year strategic plan, driving critical AI initiatives that enhanced competitive advantage and resulted in a 65% improvement in data processing automation and 35% reduction in processing time.",
      "Architected and deployed autonomous AI Agents using LangChain and RAG to automate complex data enriching and labeling workflows, reducing manual intervention by 82%.",
    ],
  },
  {
    title: "Team Lead Data Science & AI - Functional Manager",
    company: "Label Insight",
    companyUrl:
      "https://nielseniq.com/global/en/landing-page/label-insight/",
    location: "Paris, France",
    period: "10/2023 - 05/2025",
    tags: ["Nutrition"],
    bullets: [
      "Led automation initiatives for maintaining over 27,000 product attributes and taxonomies by collaborating with dietitians, food scientists, and chemists, achieving a 50% automation rate in 2024 and 80% in 2025.",
      "Managed cross-functional partnerships across three functional teams, comprising 25 associates, by collaborating closely with data science and engineering teams and subject-matter experts to optimize data foundation systems.",
      "Led data science initiatives for Label Insight driving strategic projects that propelled data-based decision-making processes, achieving a 35% increase in operational efficiency, reducing data processing costs by 20%, and enhancing predictive analytics accuracy by 25%.",
      "Managed design and implementation of data science and deep learning systems, achieving a 35% improvement in system efficiency and a 20% increase in data accuracy.",
      "Collaborated with engineers and product managers to establish data science goals and practices for a 5-person team, increasing team productivity by 25% and reducing delivery times by 15%.",
      "Led strategic code implementation for 50+ daily deployments, achieving a 30% increase in deployment success rate.",
      "Managed financial operations (FinOps) for cost-effective data science solutions, reducing operational costs by 20% while maintaining performance. Additionally, prioritized data initiatives based on ROI and alignment with business goals.",
      "Developed and implemented an advanced outlier correction model utilizing GenAI, LangChain, and RAG technologies, significantly enhancing data quality and reducing errors by 50%. Additionally, integrated Elasticsearch to improve data accuracy, reducing manual decision-making by 27%.",
    ],
  },
  {
    title: "Lead Data Scientist",
    company: "Label Insight",
    companyUrl:
      "https://nielseniq.com/global/en/landing-page/label-insight/",
    location: "Chicago, USA",
    period: "01/2023 - 10/2023",
    tags: ["Nutrition"],
    bullets: [
      "Led Scrum ceremonies, promoting Agile methodologies.",
      "Developed GenAI-based classifier with LLM, saving $3MM/yr in data transformation costs.",
      "Deployed scalable real-time data system on AWS, reducing processing time by 40% and ensuring fault tolerance.",
      "Used Amazon Personalize for real-time recommendations, increasing CTR by 30% and AOV by 25%.",
      "Implemented innovative data science solutions such as RAG and prompt engineering within BAU processes, leveraging generative AI technologies to optimize operations time and reduce delayed deliveries by 40%, thereby driving strategic advancements.",
    ],
  },
  {
    title: "Senior Machine Learning Engineer - R&D Lead",
    company: "Nielsen IQ",
    companyUrl: "https://nielseniq.com/global/en/",
    location: "Chicago, USA",
    period: "01/2021 - 12/2022",
    tags: ["Nutrition", "Market Research"],
    bullets: [
      "Led a team of 6 in supporting complex machine learning application rollout across 9 servers.",
      "Implemented CI/CD in cloud migration, improving Mean Time to Repair (MTTR) by 80%.",
      "Directed research on Transformer and LSTM algorithms, achieving 5% accuracy gain.",
      "Optimized scalable NLP system with transformer architectures, improving language generation by 10%.",
      "Built stacking ensemble combining machine learning and deep learning algorithms, improving accuracy by 14% and automating predictive tool deployment.",
    ],
  },
  {
    title: "Data Operations Transformation Lead",
    company: "The Nielsen Company",
    companyUrl: "https://www.nielsen.com",
    location: "Chicago, USA",
    period: "01/2019 - 12/2020",
    tags: ["Nutrition", "Market Research"],
    bullets: [
      "Leveraged machine learning to optimize operations and drive innovation across a portfolio of 8 global business units.",
      "Achieved $5 million cost reduction by replacing classifiers with Neural Networks, CNNs, and NLP.",
      "Automated custom reports using Python, SQL, and Hive, reducing SLA by two days.",
      "Developed autoML platform, generating $12 million in incremental revenue and cost savings.",
      "Led research, development, and deployment efforts, building, enhancing, and pushing a portfolio of 60,000+ models to production.",
    ],
  },
  {
    title: "Senior Data Scientist",
    company: "The Nielsen Company",
    companyUrl: "https://www.nielsen.com",
    location: "Paris, France",
    period: "01/2016 - 12/2018",
    tags: ["FMCG", "Market Research"],
    bullets: [
      "Developed machine learning models for customer segmentation, increasing customer retention by 8%.",
      "Used MapReduce for Big Data processing and ETL, reducing M&A integration timeline by six months.",
      "Deployed unsupervised item coding system using fuzzy matching, generating $400,000 in additional revenue.",
      "Built production server for intensive algorithms, reducing computational costs by 30%.",
      "Implemented web scraping and email content identification, reducing manual work by 75%.",
    ],
  },
  {
    title: "Data Scientist",
    company: "Air Liquide",
    companyUrl: "https://www.airliquide.com",
    location: "Newark, USA",
    period: "03/2014 - 12/2015",
    tags: ["Industry", "Healthcare"],
    bullets: [
      "Developed predictive tools for liquid gas demand forecasting, reducing inventory costs by 15%.",
      "Created process control tool to ensure membrane fiber quality, saving $500,000 annually and increasing efficiency by 18%.",
      "Used stochastic modeling to optimize risk/return ratios, increasing revenue by 10% and reducing potential losses by 8%.",
    ],
  },
  {
    title: "Actuary Intern",
    company: "AXA France",
    companyUrl: "https://www.axa.com",
    location: "Paris, France",
    period: "06/2013 - 12/2013",
    tags: ["Insurance"],
    bullets: [
      "Led and executed key internal research projects, resulting in the development and deployment of a new density function.",
      "Enhanced financial modeling accuracy, contributing to an improvement in regulatory reporting standards.",
      "Collaborated with cross-functional teams to integrate data-driven methodologies, supporting 3 major regulatory initiatives.",
    ],
  },
  {
    title: "Business Controller Intern",
    company: "Airbus",
    companyUrl: "https://www.airbus.com/en",
    location: "Munich, Germany",
    period: "09/2011 - 08/2012",
    tags: ["Aerospace"],
    bullets: [
      "Assisted in establishing target settings for key financial metrics over a five-year period.",
      "Conducted comprehensive benchmarking and scenario analyses to evaluate internal financial performance, identifying variances between forecasts and actual results.",
      "Leveraged VBA and FACTS+ to automate processes, enhance data accuracy, and streamline financial reporting.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Professional Experience
      </h2>
      <div className="space-y-6">
        {jobs.map((job, i) => (
          <div key={i} className="border-l-4 border-primary pl-4">
            <h3 className="text-lg font-semibold text-card-foreground">
              {job.title},{" "}
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {job.company}
              </a>{" "}
              - {job.location}
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="ml-2 inline-block text-xs px-2 py-0.5 rounded bg-accent text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{job.period}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
              {job.bullets.map((bullet, j) => (
                <li key={j}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
