export interface Project {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  context: string;
  strategicObjective: string;
  execution: {
    tools: string[];
    approach: string;
  };
  outcome: {
    results: string[];
    metrics: string[];
  };
  leadershipImpact: string;
  imageUrl: string;
  videoUrl?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "employee-training-tracker",
    name: "Automated Employee Training Compliance Tracker",
    category: "HR & Talent",
    shortDescription: "Reduced onboarding time by 40% by automating compliance tracking and training assignments.",
    fullDescription: "A comprehensive training compliance system that eliminated an 8-year documentation gap while reducing administrative overhead by 95%.",
    context: "The organization faced an 8-year compliance gap in employee training documentation, with critical records scattered across unstructured notes and disparate files. The HR Director spent 4+ hours per employee manually consolidating training history, creating significant operational inefficiency and legal exposure.",
    strategicObjective: "Achieve 100% regulatory compliance while reducing training administration time by 95%, enabling HR to scale operations without additional headcount or budget.",
    execution: {
      tools: ["Google Sheets", "Advanced Formulas", "Data Validation", "Conditional Formatting", "Automated Reminders"],
      approach: "Designed centralized database architecture with real-time compliance tracking, automated alerts for upcoming renewals, and one-minute update workflow. Built with zero budget using existing Google Workspace infrastructure."
    },
    outcome: {
      results: [
        "Eliminated 8-year compliance gap within 2 weeks",
        "Reduced tracking time from 4 hours to less than 1 minute per employee",
        "Zero budget expenditure",
        "System scaled to 200+ employees without additional resources",
        "100% audit-ready documentation"
      ],
      metrics: ["95% time savings", "100% compliance", "$0 cost", "2-week deployment"]
    },
    leadershipImpact: "Identified critical compliance risk invisible to executive team. Designed and deployed solution in 10 days without external vendors. Created sustainable infrastructure supporting 5x headcount growth. Freed HR Director to focus on strategic initiatives vs. administrative tasks. Established template replicated across 3 other departments.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    videoUrl: "",
    tags: ["HR", "Automation", "Operations", "Compliance"]
  },
  {
    slug: "departmental-pll-financial-modeling",
    name: "Departmental P&L & Financial Modeling",
    category: "Finance",
    shortDescription: "Created dynamic P&L templates for department heads to forecast burn rate and optimize OpEx.",
    fullDescription: "Strategic financial governance framework enabling data-driven decision-making across departments.",
    context: "Department heads lacked visibility into their financial performance and forecasting capabilities, leading to budget overruns and reactive decision-making.",
    strategicObjective: "Empower department leaders with self-service financial tools to drive accountability and strategic resource allocation.",
    execution: {
      tools: ["Google Sheets", "Financial Modeling", "Dashboard Design", "Data Visualization"],
      approach: "Developed dynamic P&L templates with automated calculations, scenario planning, and real-time variance analysis. Created training program for non-finance leaders."
    },
    outcome: {
      results: [
        "Reduced budget variance by 35%",
        "Enabled monthly forecasting vs. quarterly",
        "Decreased finance team administrative burden by 60%",
        "Improved cross-departmental financial literacy"
      ],
      metrics: ["35% better accuracy", "60% time savings", "100% adoption"]
    },
    leadershipImpact: "Bridged gap between finance and operations. Created culture of financial accountability. Enabled CEO to delegate budget decisions with confidence.",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    videoUrl: "",
    tags: ["Finance", "Strategy", "Excel", "Governance"]
  },
  {
    slug: "n8n-workflow-automation",
    name: "N8N Workflow Automation",
    category: "Systems",
    shortDescription: "Designed complex n8n workflows to bridge gaps between CRM, Slack, and Email, eliminating manual data entry.",
    fullDescription: "Enterprise automation architecture connecting disparate systems for seamless operational flow.",
    context: "Critical business data was siloed across CRM, communication platforms, and email, requiring manual data entry and creating information lag.",
    strategicObjective: "Eliminate manual data transfer and create real-time information flow across the technology stack.",
    execution: {
      tools: ["n8n", "API Integrations", "Webhooks", "CRM", "Slack", "Gmail"],
      approach: "Mapped all data touchpoints and designed automated workflows for lead management, internal communications, and customer follow-ups. Implemented error handling and monitoring."
    },
    outcome: {
      results: [
        "Eliminated 15+ hours per week of manual data entry",
        "Reduced response time from 24 hours to instant",
        "Zero data loss or duplication",
        "Scalable to 10x current volume"
      ],
      metrics: ["15 hrs/week saved", "100% automation", "0 errors"]
    },
    leadershipImpact: "Transformed operational velocity. Enabled team to focus on high-value work vs. administrative tasks. Created foundation for future AI integration.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    videoUrl: "",
    tags: ["Automation", "Tech Stack", "Efficiency", "Systems"]
  },
  {
    slug: "strategic-yearly-roadmap",
    name: "Strategic Yearly Roadmap",
    category: "Strategy",
    shortDescription: "Developed the master roadmap aligning 5 departments to the CEO's 3-year vision.",
    fullDescription: "Comprehensive strategic planning framework ensuring organizational alignment and execution velocity.",
    context: "Multiple departments were working in silos with misaligned priorities, causing resource conflicts and slowed execution.",
    strategicObjective: "Create unified strategic roadmap ensuring all departments work toward common organizational goals.",
    execution: {
      tools: ["Google Slides", "Strategic Frameworks", "OKR System", "Stakeholder Interviews"],
      approach: "Conducted executive interviews, mapped dependencies, created quarterly milestones with clear ownership and success metrics."
    },
    outcome: {
      results: [
        "Aligned 5 departments to single strategic vision",
        "Reduced strategic misalignment meetings by 70%",
        "Improved cross-departmental collaboration score by 45%",
        "Accelerated key initiative delivery by 3 months"
      ],
      metrics: ["70% fewer meetings", "45% better collaboration", "3 months faster"]
    },
    leadershipImpact: "Became the connective tissue between CEO vision and departmental execution. Created accountability framework that outlasted tenure.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "",
    tags: ["Strategy", "Planning", "Leadership", "Alignment"]
  },
  {
    slug: "grant-eligibility-framework",
    name: "Grant Eligibility Framework",
    category: "Finance",
    shortDescription: "One-page summary framework that determined eligibility for $2M in government grants.",
    fullDescription: "Strategic assessment framework identifying and securing non-dilutive funding opportunities.",
    context: "Organization was leaving significant government grant money on the table due to lack of systematic eligibility tracking.",
    strategicObjective: "Identify and secure non-dilutive funding to support growth without equity dilution.",
    execution: {
      tools: ["Google Sheets", "Research Databases", "Compliance Frameworks", "Financial Analysis"],
      approach: "Created scoring matrix evaluating 50+ grant opportunities, built compliance tracking system, coordinated application process."
    },
    outcome: {
      results: [
        "Identified $2M in eligible grant funding",
        "Secured $500K in first application cycle",
        "Created repeatable application process",
        "Zero external consultant fees"
      ],
      metrics: ["$2M identified", "$500K secured", "$0 consultant cost"]
    },
    leadershipImpact: "Directly contributed to bottom line without dilution. Built capability that continues generating value. Demonstrated strategic financial thinking beyond traditional CoS scope.",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    videoUrl: "",
    tags: ["Finance", "Compliance", "Research", "Funding"]
  },
  {
    slug: "product-management-lifecycle",
    name: "Product Management Lifecycle",
    category: "Product",
    shortDescription: "Oversaw the product lifecycle from ideation to launch, coordinating between engineering and sales.",
    fullDescription: "End-to-end product coordination ensuring market-fit and successful go-to-market execution.",
    context: "Product launches were delayed due to poor cross-functional coordination between engineering, sales, and marketing teams.",
    strategicObjective: "Streamline product launch process to reduce time-to-market and improve launch success rate.",
    execution: {
      tools: ["Jira", "Product Roadmaps", "Go-to-Market Frameworks", "Stakeholder Management"],
      approach: "Created launch playbook with clear milestones, ownership, and communication protocols. Facilitated weekly cross-functional syncs."
    },
    outcome: {
      results: [
        "Reduced time-to-market by 40%",
        "Improved launch success rate from 60% to 90%",
        "Eliminated last-minute launch fires",
        "Created repeatable launch framework"
      ],
      metrics: ["40% faster launch", "90% success rate", "100% on-time"]
    },
    leadershipImpact: "Became the orchestrator of product success. Built bridges between technical and commercial teams. Created institutional knowledge that scaled beyond individual contributors.",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    videoUrl: "",
    tags: ["Product", "Cross-functional", "Agile", "Launch"]
  }
];