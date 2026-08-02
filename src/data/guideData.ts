import { Chapter } from '../types';

export const chaptersData: Chapter[] = [
  {
    id: 1,
    slug: 'introduction',
    title: 'CHAPTER 1: Introduction & Master’s Roadmap',
    subtitle: 'Why Study Abroad, Fully Funded Scholarships, Early Preparation & Common Pitfalls',
    readingTimeMinutes: 12,
    sections: [
      {
        id: 'why-study-abroad',
        title: '1.1 Why Study a Master’s in Computer Science Abroad?',
        content: `Pursuing a Master of Science in Computer Science (MSCS) abroad opens doors to world-class Artificial Intelligence labs, high-performance computing clusters, global industry networks, and massive career acceleration. For Pakistani graduates—especially from tech hubs like Karachi, Lahore, and Islamabad—an international MSCS is a transformative step that bridges local software engineering foundation with cutting-edge global innovation.`,
        bullets: [
          'Direct Access to Tech Innovation: Study at universities partnered directly with Google, Meta, Apple, ASML, Samsung, and Microsoft.',
          'High Post-Graduation Earnings: Starting MSCS salaries range from $60,000 to $145,000/year depending on destination country.',
          'Specialized Research Tracks: Master advanced domains like Deep Learning, Autonomous Systems, Quantum Computing, Cybersecurity, and Distributed Systems.',
          'Global Mobility & Career Pathways: Post-study work visas (1 to 3 years) allowing smooth transition into international tech roles and Permanent Residency.'
        ]
      },
      {
        id: 'why-fully-funded',
        title: '1.2 Why Choose a Fully Funded Scholarship?',
        content: `Self-funding an international MSCS degree can cost between $30,000 and $100,000 USD in tuition and living expenses—an impossible burden for most middle-class Pakistani households. A Fully Funded Scholarship eliminates this financial barrier completely.`,
        bullets: [
          '100% Tuition Fee Waiver: University tuition is paid directly by the scholarship funding body.',
          'Monthly Tax-Free Living Stipend: Monthly grants ranging from €900 to $2,500 USD (~PKR 250,000 to PKR 700,000/month) covering rent, food, and utilities.',
          'Round-Trip Air Tickets: International flights between Pakistan (Karachi/Islamabad/Lahore) and target country.',
          'Health Insurance & Visa Subsidies: Comprehensive health insurance and exemption from visa processing fees.'
        ],
        callout: {
          type: 'tip',
          title: 'The Power of Full Funding',
          message: 'Winning a fully funded scholarship means you graduate with ZERO student debt, allowing you to focus 100% on research, internships, and career growth!'
        }
      },
      {
        id: 'why-early-prep',
        title: '1.3 Why Start Preparation 12 to 18 Months Early?',
        content: `The scholarship application cycle for 2027-2028 intakes begins as early as August 2026. Document attestation (HEC, IBCC, MOFA), official English testing (IELTS/TOEFL), GRE preparation, supervisor cold emailing, and drafting Statements of Purpose require months of dedicated effort. Starting early ensures you never miss tight deadliness.`,
        callout: {
          type: 'karachi-special',
          title: 'Karachi Applicant Notice',
          message: 'Document verification at BSEK/BIEK and HEC Regional Center Gulshan-e-Iqbal can take 2 to 4 weeks. Always initiate attestation at least 6 months before your target application deadline!'
        }
      },
      {
        id: 'common-mistakes-intro',
        title: '1.4 Common Mistakes Pakistani Students Make',
        content: `Every year, thousands of brilliant Pakistani computer science graduates miss out on fully funded scholarships due to avoidable administrative errors.`,
        bullets: [
          'Mistake 1: Relying on generic AI-generated Statement of Purpose essays without technical depth or personal research alignment.',
          'Mistake 2: Missing dual registration requirements (e.g., applying on foreign portal but missing HEC Pakistan nomination portal).',
          'Mistake 3: Waiting until the last week to request recommendation letters from busy university professors.',
          'Mistake 4: Discrepancy in spelling across Passport, CNIC, and Matric Marksheets causing attestation rejections.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is it possible to secure a fully funded scholarship with a 3.0 CGPA?',
        answer: 'Yes! Fully funded scholarships evaluate candidates holistically. Strong open-source projects, high IELTS scores, research papers, and a compelling Statement of Purpose easily compensate for a 3.0 CGPA.'
      }
    ],
    summary: [
      'An international MSCS unlocks world-class research, high salaries ($60k-$145k), and global work opportunities.',
      'Fully funded scholarships cover tuition, monthly stipend, flights, and medical insurance.',
      'Preparation MUST start 12-18 months prior (Aug 2026 for 2027-2028 intakes).'
    ],
    checklist: [
      'Check Passport expiry date (must be valid beyond 2029).',
      'Audit BSCS CGPA & calculate equivalent percentage.',
      'List 5 target fully funded scholarships matching your profile.'
    ],
    actionPlan: [
      { step: 1, task: 'Create target scholarship spreadsheet tracker', targetDeadline: 'August 15, 2026' },
      { step: 2, task: 'Request official sealed transcripts from university registrar', targetDeadline: 'August 31, 2026' }
    ]
  },
  {
    id: 2,
    slug: 'countries',
    title: 'CHAPTER 2: Comprehensive 27 Country Analysis',
    subtitle: 'Education Systems, Tuition Costs, PR Pathways, Salaries & Intake Timelines for MSCS',
    readingTimeMinutes: 35,
    sections: [
      {
        id: 'country-overview',
        title: '2.1 Strategic Country Selection Matrix',
        content: `Choosing the right country for your Master’s in Computer Science depends on your priorities: research prestige, tuition cost, post-study work visa length, Permanent Residency (PR) pathways, and monthly living expenses. Below is an exhaustive breakdown of 27 global destinations suitable for Pakistani MSCS applicants.`
      }
    ],
    summary: [
      '27 global destinations analyzed with specs for tuition, living cost, visa success, and PR pathways.',
      'Top choice for tuition-free quality: Germany, Austria, and Public Universities in Europe.',
      'Top choice for highest starting salaries ($95k-$145k): USA, Switzerland, and Singapore.'
    ],
    checklist: [
      'Filter 27 countries based on your budget, CGPA, and career goals.',
      'Identify whether your target country requires language proficiency (e.g. German, Japanese, Korean).'
    ],
    actionPlan: [
      { step: 1, task: 'Shortlist 3 primary countries and 2 fallback countries', targetDeadline: 'September 15, 2026' }
    ]
  },
  {
    id: 3,
    slug: 'scholarships',
    title: 'CHAPTER 3: Major Global Fully Funded Scholarships',
    subtitle: 'Deep-Dive into Fulbright, Erasmus Mundus, DAAD, MEXT, GKS, CSC, SINGA, RTP & More',
    readingTimeMinutes: 40,
    sections: [
      {
        id: 'scholarship-overview',
        title: '3.1 Understanding Scholarship Categories',
        content: `Scholarships fall into three main categories: Government-Funded National Grants (Fulbright, DAAD, MEXT, GKS, Stipendium Hungaricum, Chevening), University Merit Fellowships & Assistantships (TA/RA in USA & Canada), and Regional Consortium Awards (Erasmus Mundus Joint Master Degrees).`
      }
    ],
    summary: [
      'Over 20 major fully funded scholarship schemes detailed with eligibility and stipend rates.',
      'Pakistan is consistently among the top recipient countries globally for Erasmus Mundus, Stipendium Hungaricum, and CSC China.',
      'Graduate Teaching/Research Assistantships in the USA pay $1,500 - $2,800/month and waive 100% tuition.'
    ],
    checklist: [
      'Review eligibility criteria for Fulbright, Erasmus, DAAD, and Stipendium Hungaricum.',
      'Note down exact portal opening dates for your shortlisted scholarships.'
    ],
    actionPlan: [
      { step: 1, task: 'Gather required documents for your top 3 scholarship choices', targetDeadline: 'October 1, 2026' }
    ]
  },
  {
    id: 4,
    slug: 'timeline',
    title: 'CHAPTER 4: Month-by-Month Master Admission Roadmap',
    subtitle: 'Complete Strategic Timeline from August 2026 to September 2028',
    readingTimeMinutes: 20,
    sections: [
      {
        id: 'timeline-intro',
        title: '4.1 Execution Phase Breakdown',
        content: `Applying for 2027-2028 intakes requires a structured 24-month timeline. Phase 1 (Aug-Sept 2026): Foundation & Testing -> Phase 2 (Oct-Nov 2026): Document Crafting & Supervisor Outreach -> Phase 3 (Dec 2026 - Feb 2027): Application Submissions -> Phase 4 (Mar-May 2027): Interviews & Offers -> Phase 5 (June-Aug 2027): Visa & Departure -> Phase 6 (Sept 2027 - Sept 2028): Master’s Studies & Tech Internships.`
      }
    ],
    summary: [
      'Month-by-month roadmap spanning August 2026 through September 2028.',
      'Critical deadlines fall between November 2026 and February 2027 for major fully funded scholarships.'
    ],
    checklist: [
      'Bookmark the interactive roadmap tab in this guide to mark completed tasks monthly.'
    ],
    actionPlan: [
      { step: 1, task: 'Set monthly calendar reminders for key application milestones', targetDeadline: 'August 1, 2026' }
    ]
  },
  {
    id: 5,
    slug: 'documents',
    title: 'CHAPTER 5: Essential Document Preparation Guide',
    subtitle: 'Crafting SOPs, Resumes, LORs, Research Proposals & Portfolios for MSCS',
    readingTimeMinutes: 30,
    sections: [
      {
        id: 'doc-intro',
        title: '5.1 Mastering Application Materials',
        content: `Your application documents represent your academic identity. A stellar Statement of Purpose (SOP), clean GitHub portfolio, well-structured CV, and compelling Recommendation Letters (LORs) are the core pillars that turn an ordinary applicant into a scholarship winner.`
      }
    ],
    summary: [
      'Over 25 essential documents explained with purpose, issuer, tips, and templates.',
      'The Statement of Purpose (SOP) must be tailored specifically with professor names and lab details.'
    ],
    checklist: [
      'Draft SOP master template and request 3 recommendation letters early.',
      'Pin top 3 coding projects on GitHub with architecture diagrams and READMEs.'
    ],
    actionPlan: [
      { step: 1, task: 'Complete first draft of Statement of Purpose (SOP)', targetDeadline: 'October 15, 2026' }
    ]
  },
  {
    id: 6,
    slug: 'attestation',
    title: 'CHAPTER 6: Comprehensive Pakistani Degree Attestation Guide',
    subtitle: 'Complete Walkthrough for Matric, Inter, Bachelor, HEC, IBCC, MOFA & Foreign Embassies',
    readingTimeMinutes: 25,
    sections: [
      {
        id: 'attestation-intro',
        title: '6.1 The Legal Attestation Hierarchy in Pakistan',
        content: `Document attestation in Pakistan follows a strict legal sequence. You CANNOT jump directly to MOFA or an Embassy without completing the base level verification first.`,
        callout: {
          type: 'warning',
          title: 'Strict Order Rule',
          message: 'Matric/Inter documents MUST be verified by Board (BSEK/BIEK) -> Attested by IBCC -> Attested by MOFA. Bachelor Degree MUST be verified by University -> Attested by HEC -> Attested by MOFA!'
        }
      },
      {
        id: 'karachi-centers',
        title: '6.2 Karachi Office Locations & Contact Points',
        content: `For Pakistani students living in Karachi, here are the key official centers:`,
        bullets: [
          'BSEK (Secondary Board): Block 5, Nazimabad, Karachi (Matric verification).',
          'BIEK (Intermediate Board): Bakhtiyari Youth Center, North Nazimabad, Karachi (Intermediate verification).',
          'IBCC Regional Office: Federal B Area, Block 14, near Water Pump, Karachi.',
          'HEC Regional Center: Block 1, Scheme 24, Gulshan-e-Iqbal, near NIPA Chowrangi, Karachi.',
          'MOFA Camp Office: Main Shahrah-e-Faisal, near FTC Building, Karachi.',
          'Police Khidmat Markaz: DIG South Office Clifton / Saddar / Nazimabad (Police Clearance).'
        ]
      }
    ],
    summary: [
      'Complete sequence defined: School -> Board -> IBCC -> HEC -> MOFA -> Foreign Embassy.',
      'Karachi offices identified in Gulshan, FB Area, Nazimabad, and Shahrah-e-Faisal.',
      'TCS Courier service offers convenient door-to-door HEC and IBCC attestation.'
    ],
    checklist: [
      'Verify name spellings across CNIC, Passport, and Matric Certificate.',
      'Schedule HEC e-Portal appointment for degree attestation.'
    ],
    actionPlan: [
      { step: 1, task: 'Submit documents to HEC e-Portal for online scrutiny', targetDeadline: 'September 1, 2026' }
    ]
  },
  {
    id: 7,
    slug: 'country-docs',
    title: 'CHAPTER 7: Country-Wise Required Documents Comparison',
    subtitle: 'Mandatory Document Matrices for USA, Germany, Japan, Korea, China, Europe & Australia',
    readingTimeMinutes: 15,
    sections: [
      {
        id: 'matrix-intro',
        title: '7.1 Country Requirement Overview',
        content: `Different countries enforce distinct mandatory document rules. While the USA focuses heavily on GRE and SOP, Germany requires strict VPD/Uni-Assist verification, Korea requires Apostilled/MOFA parents FRC certificates, and Japan requires Embassy MEXT physical forms.`
      }
    ],
    summary: [
      'Document requirements categorized across all major regions.',
      'Always verify exact document checklists on target university and embassy websites.'
    ],
    checklist: [
      'Ensure you have country-specific forms (e.g. Foreigner Physical Exam for China, FRC for Korea).'
    ],
    actionPlan: [
      { step: 1, task: 'Create country document binder for shortlisted choices', targetDeadline: 'October 30, 2026' }
    ]
  },
  {
    id: 8,
    slug: 'application-process',
    title: 'CHAPTER 8: End-to-End Application & Professor Hunting',
    subtitle: 'University Selection, Cold Email Strategy, Interviews & Offer Acceptance',
    readingTimeMinutes: 20,
    sections: [
      {
        id: 'cold-email-strategy',
        title: '8.1 Cold Emailing Strategy for Research Supervisors',
        content: `Cold emailing professors is the most effective method to secure Research Assistantships (RA) and supervisor-based scholarships in USA, Canada, Korea, and Japan. Write concise 150-200 word emails referencing a specific paper published by the professor in 2024-2026.`
      }
    ],
    summary: [
      'Cold email professors with personalized technical pitch referencing their 2024-2026 publications.',
      'Follow up after 7-10 days if no response received.'
    ],
    checklist: [
      'Draft 3 professor cold email templates and build professor contact tracker.'
    ],
    actionPlan: [
      { step: 1, task: 'Send 10 targeted cold emails to MSCS professors', targetDeadline: 'October 15, 2026' }
    ]
  },
  {
    id: 9,
    slug: 'visa-guide',
    title: 'CHAPTER 9: Student Visa Guide & Financial Proofs',
    subtitle: 'Country-Wise Visa Documentation, Bank Statements, Blocked Accounts & Interview Tips',
    readingTimeMinutes: 22,
    sections: [
      {
        id: 'visa-prep',
        title: '9.1 Mastering Visa Documentation',
        content: `Securing an admission offer is only half the battle. Passing the student visa interview requires clean financial documentation, proof of genuine student intent, and strong ties to return to Pakistan.`
      }
    ],
    summary: [
      'Prepare genuine bank statements maintaining smooth funds for 6 months.',
      'Practice non-immigrant intent answers for US F-1 visa interviews.'
    ],
    checklist: [
      'Open bank account and ensure steady balance maintenance.',
      'Obtain Police Clearance Certificate from Police Khidmat Markaz Karachi.'
    ],
    actionPlan: [
      { step: 1, task: 'Audit bank statement balance and financial proof documents', targetDeadline: 'May 1, 2027' }
    ]
  },
  {
    id: 10,
    slug: 'checklists',
    title: 'CHAPTER 10: Complete Pakistani Student Master Checklists',
    subtitle: 'Phase-by-Phase Checklists for Application, Admission, Visa, Travel & Arrival',
    readingTimeMinutes: 15,
    sections: [
      {
        id: 'master-checklist',
        title: '10.1 Master Execution Checklists',
        content: `Use these comprehensive checklists to verify every critical item before moving to the next stage of your study abroad journey.`
      }
    ],
    summary: [
      'Complete pre-application, pre-admission, pre-visa, pre-travel, and post-arrival checklists provided.'
    ],
    checklist: [
      'Tick off every checklist item in the Interactive Checklist module.'
    ],
    actionPlan: [
      { step: 1, task: 'Perform full document audit against Master Checklist', targetDeadline: 'June 1, 2027' }
    ]
  },
  {
    id: 11,
    slug: 'official-resources',
    title: 'CHAPTER 11: Official Resources & Verified Portals',
    subtitle: 'Directory of Official Government, University & Testing Body Websites',
    readingTimeMinutes: 10,
    sections: [
      {
        id: 'official-links',
        title: '11.1 Official Verification Portals',
        content: `Never rely on unofficial agents or third-party blogs when official government portals exist. Below is the verified list of official links for Pakistani students.`,
        bullets: [
          'HEC Pakistan e-Portal: https://eportal.hec.gov.pk',
          'IBCC Online Attestation: https://attest.ibcc.edu.pk',
          'MOFA Pakistan: https://mofa.gov.pk',
          'Directorate of Passports Pakistan: https://dgip.gov.pk',
          'USEFP Fulbright Pakistan: https://usefp.org',
          'DAAD Germany: https://daad.de',
          'Erasmus Mundus Catalogue: https://erasmus-plus.ec.europa.eu',
          'Stipendium Hungaricum: https://stipendiumhungaricum.hu',
          'Embassy of Japan in Pakistan (MEXT): https://pk.emb-japan.go.jp',
          'Study in Korea (GKS): https://studyinkorea.go.kr',
          'Chinese Scholarship Council (CSC): https://campuschina.org',
          'IELTS Official: https://ielts.org',
          'ETS TOEFL & GRE: https://ets.org'
        ]
      }
    ],
    summary: [
      'All links verified directly from official government and scholarship agency sources.'
    ],
    checklist: [
      'Bookmark all official portals in your web browser.'
    ],
    actionPlan: [
      { step: 1, task: 'Create portal accounts on HEC, IBCC, and target scholarship portals', targetDeadline: 'August 31, 2026' }
    ]
  }
];
