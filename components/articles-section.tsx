"use client"

import { useState } from "react"

interface ArticleCategory {
  label: string
  articles: { title: string; url: string }[]
}

const categories: ArticleCategory[] = [
  {
    label: "ML/Gen AI",
    articles: [
      { title: "Image Background Removal without Training", url: "https://medium.com/p/24598c36acbf" },
      { title: "A Performance Showdown of Low-Cost LLMs (GPT-4o mini, GPT-4.1 nano, and Beyond)", url: "https://medium.com/@adelbasli/a-performance-showdown-of-low-cost-llms-gpt-4o-mini-gpt-4-1-nano-and-beyond-32f0d9e54f11" },
      { title: "RASCEF: A Framework for Crafting Laser-Focused AI Prompts", url: "https://medium.com/p/00b7f970c291" },
      { title: "My Guide to Fine-Tuning Top_p and Temperature in LLMs", url: "https://medium.com/p/2e7dac30658d" },
      { title: "Prompt Injection Tactics: Hacking LLM Apps from the Inside Out", url: "https://medium.com/p/fe6dd1c2b86c" },
    ],
  },
  {
    label: "Nutrition",
    articles: [
      { title: "The Decades-Late Ban: How Open Data Allows Consumers to Bypass Regulatory Failure", url: "https://medium.com/@adelbasli/the-decades-late-ban-how-open-data-allows-consumers-to-bypass-regulatory-failure-9077ea486917" },
      { title: "Beyond the Label: Decoding Food Processing with NOVA and Python", url: "https://medium.com/@adelbasli/beyond-the-label-decoding-food-processing-with-nova-and-python-5ff12334d63e" },
      { title: "The Open Data Revolution in Food", url: "https://medium.com/@adelbasli/the-open-data-revolution-in-food-6686ebe4aa8e" },
      { title: 'The "Invisible" Ingredient In Your Food: Should You Be Worried About Hexane?', url: "https://medium.com/@adelbasli/the-invisible-ingredient-in-your-food-should-you-be-worried-about-hexane-c1ff80a76e9a" },
      { title: "Decoding Food Labels: Comparing Nutri-Score, HFSS, and Guiding Stars for a Healthier Path", url: "https://medium.com/@adelbasli/decoding-food-labels-comparing-nutri-score-hfss-and-guiding-stars-for-a-healthier-path-bb5ac219047d" },
      { title: "HFSS vs. Nutriscore: Charting a Path Towards a Unified Global Nutrition Label", url: "https://medium.com/@adelbasli/hfss-vs-nutriscore-charting-a-path-towards-a-unified-global-nutrition-label-157aeff15f99" },
      { title: "The Fall of Nutri-Score and the Rise of Open Food Facts: Why Transparency Matters More Than Ever", url: "https://medium.com/nutritional-insights/the-fall-of-nutri-score-and-the-rise-of-open-food-facts-why-transparency-matters-more-than-ever-c104053537bc" },
      { title: "Calorie Counts: Manufacturers vs. Science with Open Food Facts Data", url: "https://medium.com/pythoneers/calorie-counts-manufacturers-vs-science-with-open-food-facts-data-e14b3aaac2e6" },
      { title: "Predicting Added Sugar in Food Products Using Machine Learning and Open Food Facts Data", url: "https://medium.com/@adelbasli/predicting-added-sugar-in-food-products-using-machine-learning-and-open-food-facts-data-3afb60daea00" },
      { title: "Using Open Food Facts Data to Verify Nutri-Score Consistency", url: "https://medium.com/@adelbasli/using-open-food-facts-data-to-verify-nutri-score-consistency-799056250f69" },
      { title: "Why the Nutri-Score Should Be Implemented in the United States", url: "https://medium.com/p/6d8c8ccb5d37" },
      { title: "The Optimal Macronutrients Ratio for Your Fitness Goals", url: "https://medium.com/p/bd525e4e6d0d" },
      { title: "How to Save Cheese: Why Italy Rejected Nutri-Score", url: "https://medium.com/p/54b0e0227ec6" },
    ],
  },
  {
    label: "Quantitative Finance",
    articles: [
      { title: "10 Paths to Uncover Stock Market Inefficiencies", url: "https://medium.com/insiderfinance/10-paths-to-uncover-stock-market-inefficiencies-191cd8ffeada" },
      { title: "Understanding Your Portfolio: A Guide to Reading and Interpreting KPIs", url: "https://medium.com/pythoneers/understanding-your-portfolio-a-guide-to-reading-and-interpreting-kpis-352d26099e2c" },
      { title: "The Black-Litterman Model: A smart integration of our market view", url: "https://ai.gopubby.com/the-black-litterman-model-an-approach-to-portfolio-diversification-00c36c747042" },
      { title: "Warren Buffett's Stock-Picking Secrets: A Python-Driven Approach", url: "https://medium.com/p/c3c55c8386a8" },
      { title: "10 Actionable Trading Ideas for Beginners", url: "https://medium.com/p/7206507b4c2f" },
      { title: "The 3-Day Dip That Predicts Market Moves (Backed by Python)", url: "https://wire.insiderfinance.io/the-3-day-dip-that-predicts-market-moves-backed-by-python-4e7038056e9b" },
      { title: "Learning to Trade: A Deep Dive into Self-Reinforcement Learning for Stock Trading", url: "https://medium.com/p/f85d30fd9b2d" },
    ],
  },
  {
    label: "Leadership",
    articles: [
      { title: "The Subtle Art of Mark Manson: A Counterintuitive Guide to Living a Good Life", url: "https://medium.com/@adelbasli/the-subtle-art-of-mark-manson-a-counterintuitive-guide-to-living-a-good-life-2fcffe65084f" },
      { title: "Leading with Atomic Habits", url: "https://medium.com/p/1ef0862b6949" },
      { title: "My Secrets to Managing High-Performing Data Science and AI Teams", url: "https://medium.com/p/76f2bfbcaa0c" },
      { title: "The Art of Asking Great Questions: Mastering the Pillars of Effective Inquiry", url: "https://medium.com/p/7faa5e69e65d" },
    ],
  },
  {
    label: "Emotional Intelligence",
    articles: [
      { title: "Why You'll Likely Break Your New Year's Resolutions by January 9th (and How to Beat the Odds)", url: "https://medium.com/p/5253e8be283e" },
      { title: "Practical Strategies to Overcome Overthinking", url: "https://medium.com/@adelbasli/practical-strategies-to-overcome-overthinking-41389c8e626c" },
      { title: "Why Emotional Intelligence Matters More Than Ever", url: "https://medium.com/p/c174beb03ccf" },
      { title: "My Science-Backed Guide to Studying Smarter", url: "https://medium.com/p/60e22b61bd79" },
    ],
  },
  {
    label: "Python",
    articles: [
      { title: "Beyond the Basics: 10 Powerful Pandas Tips and Functions That Will Transform Your Data Workflow", url: "https://medium.com/@adelbasli/beyond-the-basics-10-powerful-pandas-tips-and-functions-that-will-transform-your-data-workflow-74e5c59d4c7f" },
      { title: "Master PyCharm Like a Pro: Top Tips for Boosting Your Productivity", url: "https://medium.com/@adelbasli/master-pycharm-like-a-pro-top-tips-for-boosting-your-productivity-20737ace4afa" },
      { title: "Unlocking Deeper Insights: A Comprehensive Guide to Causal Inference with Python", url: "https://medium.com/@adelbasli/unlocking-deeper-insights-a-comprehensive-guide-to-causal-inference-with-python-fcc129874613" },
    ],
  },
]

export function ArticlesSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  return (
    <section className="bg-card text-card-foreground rounded-lg shadow p-6 scroll-mt-16">
      <h2 className="text-2xl font-bold border-b-2 border-secondary pb-2 mb-4 text-card-foreground">
        Articles
      </h2>
      <div className="flex flex-wrap gap-3 mb-4">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() =>
              setOpenCategory(openCategory === cat.label ? null : cat.label)
            }
            className="px-4 py-2 bg-gradient-to-br from-accent to-blue-500 text-accent-foreground rounded-lg font-semibold shadow hover:shadow-md transition-all hover:-translate-y-0.5 text-sm"
          >
            {cat.label}
          </button>
        ))}
      </div>
      {categories.map(
        (cat) =>
          openCategory === cat.label && (
            <ul key={cat.label} className="space-y-2">
              {cat.articles.map((article) => (
                <li
                  key={article.url}
                  className="bg-muted text-muted-foreground p-2 rounded"
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {article.title}
                  </a>
                </li>
              ))}
            </ul>
          )
      )}
    </section>
  )
}
