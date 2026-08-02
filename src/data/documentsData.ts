import { DocDetail } from '../types';

export const documentsData: DocDetail[] = [
  {
    id: 'passport',
    name: 'Machine-Readable Passport (MRP / E-Passport)',
    purpose: 'Official international identity and travel document required for university registration, scholarships, and visa stamping.',
    whyRequired: 'Universities and foreign embassies require a valid passport with at least 18-24 months validity beyond your intended course start date.',
    whoIssuesIt: 'Directorate General of Immigration & Passports, Government of Pakistan (Executive Passport Offices in Karachi: Clifton, Saddar, Garden East, etc.).',
    templateOrSample: 'Passport Number: A12345678 | Validity: 10 Years | Type: Ordinary International Passport',
    tips: [
      'Always apply for 10-Year validity instead of 5-Year to cover your master’s study and post-study work visa without needing renewal abroad.',
      'Ensure your name, father’s name, and date of birth match your CNIC and Matric Certificate exact spelling.'
    ],
    commonMistakes: [
      'Applying for admission with a passport expiring in less than 6 months.',
      'Discrepancy in spelling between Passport (e.g. "Muhammed") and CNIC ("Muhammad").'
    ],
    category: 'personal'
  },
  {
    id: 'cnic',
    name: 'Computerized National Identity Card (CNIC / Smart Card)',
    purpose: 'Primary proof of Pakistani citizenship for domestic attestation (HEC, IBCC, MOFA) and bank transactions.',
    whyRequired: 'Mandatory for all local Pakistani government verifications and embassy filings.',
    whoIssuesIt: 'NADRA (National Database and Registration Authority) Pakistan.',
    tips: [
      'Ensure Smart CNIC is converted to English format or Smart Chip card.',
      'If living abroad or dual citizen, hold Smart NICOP.'
    ],
    commonMistakes: ['Expired CNIC during HEC/MOFA document submission.'],
    category: 'personal'
  },
  {
    id: 'cv_resume',
    name: 'Academic CV / Resume (Europass or US 2-Page Format)',
    purpose: 'Comprehensive summary of academic achievements, technical projects, programming skills, research publications, and work experience.',
    whyRequired: 'Evaluation committees use CV to instantly gauge technical competence, CGPA, GitHub activity, and relevant CS experience.',
    whoIssuesIt: 'Self-authored.',
    templateOrSample: 'Sections: Education, Technical Skills (Languages, Frameworks, Cloud), Research & Publications, Open-Source / GitHub Projects, Work Experience, Honors & Awards.',
    tips: [
      'For European applications (Erasmus, DAAD), use standard Europass CV format or clean single/two-page LaTeX template.',
      'Include hyperlinked GitHub repositories, LinkedIn profile, and live deployed project URLs.',
      'Quantify achievements: "Optimized database query latency by 42% using Redis caching" instead of "Worked on database".'
    ],
    commonMistakes: [
      'Including personal info like marital status, religion, blood group, or full home address (Not required in US/EU academic CVs).',
      'Using informal email address (e.g. coolguy123@gmail.com instead of firstname.lastname@gmail.com).'
    ],
    category: 'experience'
  },
  {
    id: 'sop',
    name: 'Statement of Purpose (SOP)',
    purpose: '1,000 to 1,500 word narrative essay explaining your academic background, career vision, why this specific MSCS program, and research alignment.',
    whyRequired: 'The single most decisive qualitative document in scholarship and admission committee evaluations.',
    whoIssuesIt: 'Self-authored.',
    templateOrSample: 'Structure: 1. Hook / Research Passion -> 2. Undergraduate CS Foundation & Key Projects -> 3. Professional / Research Gaps -> 4. Why University X & Professors Y/Z -> 5. Long-term Career Vision in Pakistan/Global.',
    tips: [
      'Tailor 20-30% of each SOP specifically to the university: mention specific research labs, course codes, and professor publications.',
      'Show, don’t just tell: explain how a specific obstacle or BS project sparked your interest in AI/Systems.'
    ],
    commonMistakes: [
      'Using generic AI-generated templates without personal stories or technical depth.',
      'Forgetting to change university/program name when reusing SOPs across multiple applications!'
    ],
    category: 'academic'
  },
  {
    id: 'personal_statement',
    name: 'Personal Statement / Diversity Essay',
    purpose: 'Personal narrative detailing your background, financial or socio-economic hardships overcome in Pakistan, and community leadership.',
    whyRequired: 'Required for holistic scholarships (Fulbright, Knight-Hennessy, Chevening) to assess resilience and leadership potential.',
    whoIssuesIt: 'Self-authored.',
    tips: [
      'Focus on personal character, leadership experiences, overcoming adversity in Karachi/Pakistan, and motivation to serve society.',
      'Differentiate clearly from SOP: SOP is technical and academic; Personal Statement is human and personal.'
    ],
    commonMistakes: ['Repeating technical project details already written in SOP.'],
    category: 'academic'
  },
  {
    id: 'motivation_letter',
    name: 'Motivation Letter',
    purpose: '1-page letter addressed to the scholarship selection board (e.g., DAAD, Stipendium Hungaricum, Eiffel) explaining why you deserve the award.',
    whyRequired: 'Used by scholarship panels to rank candidates on motivation, alignment with scholarship goals, and return-home intent.',
    whoIssuesIt: 'Self-authored.',
    tips: [
      'Directly address the core objectives of the scholarship (e.g., DAAD focus on sustainable development; Fulbright focus on mutual understanding).',
      'Keep concise: 500 - 800 words max.'
    ],
    commonMistakes: ['Focusing purely on financial need rather than academic potential and future contribution.'],
    category: 'academic'
  },
  {
    id: 'research_proposal',
    name: 'Research Proposal / Study Plan',
    purpose: 'Detailed 1,500 - 2,500 word technical proposal detailing a research problem in Computer Science, methodology, literature review, and expected outcomes.',
    whyRequired: 'Mandatory for MS by Research, PhD, and supervisor-based scholarships (MEXT, SINGA, Australian RTP, CSC China).',
    whoIssuesIt: 'Self-authored (often in consultation with target supervisor).',
    templateOrSample: 'Sections: Title, Abstract, Introduction & Problem Statement, Literature Review, Research Questions/Hypotheses, Proposed Methodology & Architecture, Work Plan / Timeline (Gantt Chart), Expected Results & References.',
    tips: [
      'Cite recent (2024-2026) peer-reviewed papers from top CS conferences (NeurIPS, CVPR, SIGCOMM, IEEE/ACM).',
      'Ensure feasibility within 2-year master’s timeline.'
    ],
    commonMistakes: [
      'Proposing overly broad or impossible goals (e.g. "Solving Artificial General Intelligence").',
      'Lacking concrete computer science methodology or evaluation metrics.'
    ],
    category: 'academic'
  },
  {
    id: 'lor',
    name: 'Letters of Recommendation (LOR - Academic & Professional)',
    purpose: 'Confidential letters written by professors or job supervisors endorsing your intellectual ability, research potential, and work ethic.',
    whyRequired: 'Provides third-party validation of your academic capabilities and personal integrity.',
    whoIssuesIt: 'University Professors, Department HOD, Final Year Project (FYP) Supervisor, or Industry Manager.',
    tips: [
      'Choose recommender professors who actually know you well and gave you "A" grades or supervised your thesis.',
      'Provide your recommenders with a "Brag Sheet": copy of your CV, SOP draft, grade breakdown, and project summary to help them write specific praise.',
      'Ensure recommenders use official university/company letterhead with official email address (@university.edu.pk).'
    ],
    commonMistakes: [
      'Submitting LORs from free public email addresses (gmail.com/yahoo.com) without explanation letter from university.',
      'Generic praise without specific project examples.'
    ],
    category: 'academic'
  },
  {
    id: 'github_portfolio',
    name: 'GitHub Profile & Software Portfolio',
    purpose: 'Public repository showing clean code, commit history, open-source contributions, and full-stack/AI software projects.',
    whyRequired: 'MSCS admission officers and lab professors inspect GitHub to verify actual programming ability.',
    whoIssuesIt: 'Self-maintained on GitHub.com.',
    tips: [
      'Pin your top 3-4 cleanest repositories with well-written README.md files, architecture diagrams, installation instructions, and live demo links.',
      'Maintain an active commit green grid.'
    ],
    commonMistakes: ['Empty repositories without README documentation or code comments.'],
    category: 'experience'
  },
  {
    id: 'transcripts_degree',
    name: 'Official Academic Transcripts & BS Degree Certificate',
    purpose: 'Official record of courses taken, grades earned, semester-by-semester GPA, and degree completion.',
    whyRequired: 'Legal proof of required educational qualifications.',
    whoIssuesIt: 'Controller of Examinations at your University (e.g. FAST, NED, KU, IBA, NUST).',
    tips: [
      'Get multiple official sealed transcript sets from university registrar.',
      'Complete HEC e-portal attestation early so original degree/transcripts bear QR code verification stickers.'
    ],
    commonMistakes: ['Submitting un-attested or unofficial web portal screenshots.'],
    category: 'academic'
  },
  {
    id: 'bank_statement',
    name: 'Bank Statement & Solvency Certificate',
    purpose: 'Financial proof demonstrating adequate funds to pay tuition and living expenses for visa and university issuance of I-20 / CAS / Admission Letter.',
    whyRequired: 'Mandatory for student visa clearance (US DS-160, German Blocked Account, UK CAS, Italian DSU/Visa).',
    whoIssuesIt: 'Commercial Bank in Pakistan (HBL, Meezan Bank, UBL, Bank Alfalah, Faysal Bank, etc.).',
    templateOrSample: 'Official Bank Cover Letter stating Account Holder Name, Account Number, Balance in PKR and USD equivalent, Account Opening Date, signed & stamped by Branch Manager.',
    tips: [
      'Statement should show smooth maintenance of required funds over at least 6 months (avoid sudden massive bulk deposits right before statement date).',
      'If sponsored by parents, attach Affidavit of Financial Support + Parent CNIC + Tax Returns / Property Proofs.'
    ],
    commonMistakes: [
      'Sudden unexplained large deposit ("Unexplained Sudden Funds") triggering visa rejection.',
      'Bank statement missing official branch stamp or signature.'
    ],
    category: 'financial'
  },
  {
    id: 'police_clearance',
    name: 'Police Clearance Certificate (Character Certificate)',
    purpose: 'Official document certifying no criminal record in Pakistan.',
    whyRequired: 'Required for Schengen visas, South Korea GKS, China CSC, Japan MEXT, and Australia student visas.',
    whoIssuesIt: 'Sindh Police Khidmat Markaz / Special Branch Office Karachi.',
    tips: [
      'Obtain within 30 to 60 days of visa filing so it remains fresh and valid.',
      'Must be attested by MOFA Camp Office Karachi.'
    ],
    commonMistakes: ['Filing expired clearance certificate older than 6 months.'],
    category: 'legal'
  }
];
