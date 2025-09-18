// config.ts
export const siteConfig = {
  name: "Ashwin Chockkalingam",
  title: "Business Analytics, Operations & Strategy",
  description: "Portfolio website of Ashwin Chockkalingam",
  accentColor: "#4182ad",
  social: {
    email: "ashwin.chockkalingam@sjsu.edu",
    linkedin: "https://linkedin.com/in/ashwinchock/",
    github: "https://github.com/ashrcho",
  },
  aboutMe:
    "I’m an Economics graduate with experience in business analysis, financial modeling, and data strategy. Through internships and projects, I’ve worked on models, dashboards, and making strategic recommendations. I bring a mix of analytical skills and business insight, making me well-suited to bridge data and strategy. I’m currently pursuing opportunities in business analytics, finance, and strategy/operations.",
  skills: ["Python", "SQL", "R", "Microsoft Excel", "Tableau", "SAP"],

  projects: [
    {
      name: "Sales KPI Dashboard",
      description:
        "Comprehensive Sales & Product Performance Dashboard developed using data from an eCommerce dataset.",
      link: "https://public.tableau.com/app/profile/ashwin.chockkalingam/viz/theLookecommerceSalesDashboard/RevenueProfitablity",
      skills: ["BigQuery SQL", "Tableau", "Key-Performance-Indicators"],
    },
    {
      name: "Predicting Customer Churn in Python",
      description:
        "Machine learning model that predicts how likely customers are to churn, achieving 93% accuracy.",
      link: "https://fullstackextensions.com/?ref=devportfolio",
      skills: ["Python", "Machine Learning"],
    },
  ],

  experience: [
    {
      company: "Vetri Labs",
      title: "Business Analyst Intern",
      dateRange: "Feb 2024 - Jan 2025",
      bullets: [
        "Built a financial model in Excel projecting 1–2 year growth, used by the CEO and leadership team to assess funding strategies and refine business goals.",
        "Analyzed regional competitors’ market share, pricing, and customer segments to highlight differentiation opportunities and define the company’s unique value proposition.",
        "Initiated and led the development of the company’s SBA Growth Accelerator Fund application by compiling financial data and crafting strategic proposals that strengthened the company’s case for federal funding.",
      ],
    },
    {
      company: "Fernweh Group",
      title: "Finance Intern",
      dateRange: "Sep 2023 - Jan 2024",
      bullets: [
        "Managed and cleaned 10,000+ rows of employee expense data in Excel to support monthly operating cost reports.",
        "Reconciled internal records with financial statements to ensure reporting accuracy for the VP of Finance.",
      ],
    },
  ],

  education: [
    {
      school: "San Jose State University",
      degree: "Bachelor of Science in Economics",
      dateRange: "2023 - 2025",
    },
    {
      school: "University of California San Diego Extended Studies",
      degree: "Statistics for Data Analytics",
      dateRange: "2025",
    },
  ],
} as const;
