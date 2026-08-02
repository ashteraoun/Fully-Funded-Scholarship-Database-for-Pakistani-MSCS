import { CountryInfo } from '../types';

export const countriesData: CountryInfo[] = [
  {
    id: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    region: 'North America',
    educationSystem: 'Top-tier research ecosystem with 2-year MS in Computer Science offering Thesis and Non-Thesis tracks. Heavy emphasis on coursework, Assistantships (TA/RA), and STEM OPT.',
    bestUniversities: ['MIT', 'Stanford', 'Carnegie Mellon', 'UC Berkeley', 'UIUC', 'UT Austin', 'Georgia Tech', 'Purdue', 'University of Washington'],
    costWithoutScholarship: '$35,000 - $65,000 / year (Tuition + Living)',
    scholarshipOpportunities: ['Fulbright Master’s Scholarship', 'Knight-Hennessy Scholars (Stanford)', 'Graduate Assistantships (TA/RA/GA)', 'University Merit Fellowships'],
    visaSuccessRate: '75% - 85% (High scrutiny on funding proof and post-study intent)',
    jobOpportunities: 'Extremely high for MSCS (Silicon Valley, Seattle, Austin, NYC). 3-Year STEM OPT extension allows working post-graduation.',
    prOpportunities: 'Challenging (H-1B lottery -> EB-2 / EB-3 Green Card process with backlog for Asian applicants, though direct EB-2 NIW possible for high-impact CS research).',
    salaryAfterGraduation: '$95,000 - $145,000 / year (Average starting MSCS salary)',
    livingCost: '$1,200 - $2,200 / month (depending on state/city)',
    applicationTimeline: 'Aug - Dec for Fall intake (12 months prior)',
    intakeMonths: ['Fall (August/September)', 'Spring (January)'],
    advantages: [
      'Unmatched AI, Cloud, and Software research labs and tech giants.',
      'Fully funded Graduate Teaching/Research Assistantships (TA/RA) waive tuition + pay stipend.',
      '3-Year STEM OPT work authorization without immediate visa sponsorship.',
      'Strong Pakistani alumni network in Silicon Valley and academia.'
    ],
    disadvantages: [
      'High application fee ($80-$150 per uni).',
      'GRE requirement in several top tier universities (though many are test-optional).',
      'F-1 Visa interview requires clear non-immigrant intent explanation.'
    ]
  },
  {
    id: 'canada',
    name: 'Canada',
    flag: '🇨🇦',
    region: 'North America',
    educationSystem: '2-year Master of Science (MSc) Thesis-based or Master of Applied Computer Science (MACS) Course-based. Thesis programs are heavily funded by supervisor grants.',
    bestUniversities: ['University of Toronto', 'UBC', 'Waterloo', 'McGill', 'University of Alberta', 'Simon Fraser University', 'McMaster'],
    costWithoutScholarship: 'CAD $25,000 - $48,000 / year',
    scholarshipOpportunities: ['Vanier Canada Graduate Scholarships', 'Research Assistantships (Supervisor Grant)', 'Graduate Teaching Assistantships', 'Trudeau Foundation Scholarships'],
    visaSuccessRate: '70% - 80% (Requires strong financial proof ties to Pakistan)',
    jobOpportunities: 'High in Toronto (Silicon Valley North), Vancouver, Montreal, and Calgary.',
    prOpportunities: 'Very High via Express Entry (Federal Skilled Worker) & Provincial Nominee Programs (PNP) with extra points for Canadian Master’s degree.',
    salaryAfterGraduation: 'CAD $75,000 - $110,000 / year',
    livingCost: 'CAD $1,400 - $2,200 / month',
    applicationTimeline: 'Sept - Jan for Fall intake',
    intakeMonths: ['Fall (September)', 'Winter (January)'],
    advantages: [
      'Clear path to Permanent Residency (PGWP 3-year work permit + PR).',
      'Thesis MSCS programs provide guaranteed minimum funding package.',
      'Family-friendly visa options (Spouse work permit).'
    ],
    disadvantages: [
      'Extremely competitive thesis supervisor hunting.',
      'High housing costs in Toronto & Vancouver.',
      'Strict study permit financial proof checks by IRCC.'
    ]
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe',
    educationSystem: '1-Year Intensive Master’s (MSc) in Computer Science / AI / Data Science. Fast-paced, high academic rigor.',
    bestUniversities: ['Oxford', 'Cambridge', 'Imperial College London', 'UCL', 'Edinburgh', 'Manchester', 'Bristol'],
    costWithoutScholarship: '£22,000 - £38,000 / year',
    scholarshipOpportunities: ['Chevening Scholarship', 'Commonwealth Master’s Scholarship', 'GREAT Scholarships', 'Rhodes Scholarship (Oxford)'],
    visaSuccessRate: '88% - 95% (Point-based system, high success rate with CAS letter)',
    jobOpportunities: 'Strong in London, Cambridge, Edinburgh, and Manchester tech hubs.',
    prOpportunities: 'Moderate via 2-Year Graduate Route Visa followed by Skilled Worker Visa (5 years to Indefinite Leave to Remain - ILTR).',
    salaryAfterGraduation: '£42,000 - £70,000 / year',
    livingCost: '£1,000 - £1,800 / month',
    applicationTimeline: 'Sept - Nov for Chevening/Commonwealth; Rolling for universities',
    intakeMonths: ['September/October', 'January'],
    advantages: [
      '1-year completion saves time and living cost.',
      'World-class universities with global prestige.',
      'High visa approval rate for legitimate CAS holders.'
    ],
    disadvantages: [
      '1-year program is fast and leaves minimal time for internships.',
      'Fully funded UK government scholarships require work experience / leadership.',
      'High tuition without scholarship.'
    ]
  },
  {
    id: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science at Tuition-Free Public Universities (TU9 & Excellence Universities). Focus on research and industrial collaboration.',
    bestUniversities: ['TUM (TU Munich)', 'RWTH Aachen', 'TU Berlin', 'Karlsruhe Institute of Technology (KIT)', 'LMU Munich', 'TU Darmstadt', 'University of Stuttgart'],
    costWithoutScholarship: '€0 Tuition at most public unis (Semester fee: €150-€350). Baden-Württemberg charges €1,500/semester.',
    scholarshipOpportunities: ['DAAD Development-Related Postgraduate Courses (EPOS)', 'DAAD Helmut-Schmidt', 'Deutschlandstipendium', 'Heinrich Böll Foundation'],
    visaSuccessRate: '85% - 92% (Requires Blocked Account ~€11,904 or DAAD scholarship letter)',
    jobOpportunities: 'Extremely High. German IT sector faces massive shortage of software engineers and AI specialists.',
    prOpportunities: 'High (EU Blue Card -> Permanent Residence in 21-27 months with basic German language skills).',
    salaryAfterGraduation: '€52,000 - €75,000 / year',
    livingCost: '€900 - €1,200 / month',
    applicationTimeline: 'Nov - Jan for DAAD; Mar - July for direct Uni-Assist / University admission',
    intakeMonths: ['Winter (October - Main)', 'Summer (April)'],
    advantages: [
      'Tuition-free public education at top global rank unis.',
      '18-month job seeker visa post graduation.',
      'Fastest PR pathway in Western Europe for engineers.',
      'No tuition fee even without a formal scholarship.'
    ],
    disadvantages: [
      'Long German Embassy appointment waiting list in Islamabad/Karachi (must book early!).',
      'Requires strict VPD / Uni-Assist document verification.',
      'German language (B1/B2) helpful for long term local job market.'
    ]
  },
  {
    id: 'france',
    name: 'France',
    flag: '🇫🇷',
    region: 'Europe',
    educationSystem: '2-Year Master of Science / Diplôme d’Ingénieur. High focus on mathematics, artificial intelligence, and software engineering.',
    bestUniversities: ['Institut Polytechnique de Paris (Télécom, Polytechnique)', 'Sorbonne University', 'Université Paris-Saclay', 'ENS Paris-Saclay', 'INSA Lyon'],
    costWithoutScholarship: '€243 - €3,770 / year at public universities',
    scholarshipOpportunities: ['Eiffel Excellence Scholarship', 'Charpak Master’s Scholarship', 'ENS International Selection', 'Erasmus Mundus (French host tracks)'],
    visaSuccessRate: '85% - 90% via Campus France procedures',
    jobOpportunities: 'High in Paris, Sophia Antipolis, and Lyon AI hubs.',
    prOpportunities: 'Accelerated 2-Year residency requirement for PR after holding a French Master’s degree.',
    salaryAfterGraduation: '€45,000 - €65,000 / year',
    livingCost: '€800 - €1,300 / month (CAF housing subsidy available)',
    applicationTimeline: 'Oct - Nov for Eiffel; Jan - April via Campus France',
    intakeMonths: ['September'],
    advantages: [
      'Eiffel Scholarship gives €1,181/month + flights + healthcare.',
      'Government CAF housing allowance reduces rent by 20-40%.',
      'Fast 2-year naturalization/PR eligibility for Master graduates.'
    ],
    disadvantages: [
      'Campus France interview mandatory for Pakistani applicants.',
      'French language skills strongly recommended for daily life.'
    ]
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    region: 'Europe',
    educationSystem: '2-Year Master of Science (Laurea Magistrale) taught 100% in English. Excellent theoretical and engineering foundation.',
    bestUniversities: ['Politecnico di Milano', 'Politecnico di Torino', 'Sapienza University of Rome', 'University of Bologna', 'University of Padua'],
    costWithoutScholarship: '€500 - €3,300 / year (Based on family income bracket / ISEE)',
    scholarshipOpportunities: ['Italian Government MAECI Grant', 'DSU Regional Need-Based Scholarship (100% Tuition + Free Food + €7,000/yr)', 'Invest Your Talent in Italy'],
    visaSuccessRate: '80% - 88% (Requires pre-enrollment via Universitaly portal)',
    jobOpportunities: 'Moderate in Northern Italy (Milan, Turin). High remote job flexibility across EU.',
    prOpportunities: 'EU Long-Term Residence permit after 5 years of legal stay.',
    salaryAfterGraduation: '€32,000 - €48,000 / year',
    livingCost: '€600 - €900 / month',
    applicationTimeline: 'Dec - Mar for university admissions & Universitaly',
    intakeMonths: ['September/October'],
    advantages: [
      'DSU Regional Scholarship is highly accessible for low/middle-income Pakistani families.',
      'Low cost of living compared to Northern Europe.',
      'High number of English-taught CS/AI master programs.'
    ],
    disadvantages: [
      'Italian Embassy Karachi/Islamabad legalizations and DOV (Dichiarazione di Valore) require patience.',
      'Bureaucracy in university administration.'
    ]
  },
  {
    id: 'netherlands',
    name: 'Netherlands',
    flag: '🇳🇱',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science / Software Technology at Dutch Research Universities. Innovation-focused, highly modern labs.',
    bestUniversities: ['TU Delft', 'TU Eindhoven', 'University of Amsterdam (UvA)', 'University of Twente', 'Leiden University', 'Utrecht University'],
    costWithoutScholarship: '€15,000 - €21,000 / year',
    scholarshipOpportunities: ['NL Scholarship (formerly Holland Scholarship)', 'Orange Tulip Scholarship (OTS)', 'TU Delft Excellence Scholarship', 'Justus & Louise van Effen Research Grant'],
    visaSuccessRate: '90% - 95% (Fast-track MVV visa processed directly by university)',
    jobOpportunities: 'Very High (Amsterdam, Eindhoven High Tech Campus, ASML, Booking.com, Philips).',
    prOpportunities: '5-year continuous stay for Permanent Residence; 30% tax ruling for skilled tech expats.',
    salaryAfterGraduation: '€48,000 - €72,000 / year',
    livingCost: '€1,000 - €1,500 / month',
    applicationTimeline: 'Oct - Jan (Early deadline for scholarships)',
    intakeMonths: ['September'],
    advantages: [
      'Nearly 95% of Dutch population speaks English fluently.',
      '1-year "Search Year" (Zoekjaar) orientation visa post-study.',
      'Unmatched European tech ecosystem headquarters.'
    ],
    disadvantages: [
      'Severe student housing shortage across Dutch cities.',
      'High non-EU tuition fee without scholarship.'
    ]
  },
  {
    id: 'sweden',
    name: 'Sweden',
    flag: '🇸🇪',
    region: 'Europe',
    educationSystem: '2-Year MSc in Computer Science / Cybersecurity / Software Engineering. Focus on critical thinking, sustainability, and industrial projects.',
    bestUniversities: ['KTH Royal Institute of Technology', 'Chalmers University of Technology', 'Lund University', 'Uppsala University', 'Linköping University'],
    costWithoutScholarship: 'SEK 120,000 - 160,000 / year (~$11,000 - $15,000)',
    scholarshipOpportunities: ['Swedish Institute Scholarship for Global Professionals (SISGP)', 'KTH Waiver Scholarship', 'Chalmers IPOET Scholarship', 'Lund Global Scholarship'],
    visaSuccessRate: '88% - 94% (Processed via Swedish Migration Agency)',
    jobOpportunities: 'High (Stockholm tech hub - Spotify, Klarna, Ericsson, Volvo).',
    prOpportunities: '4 years of work permit yields permanent residency.',
    salaryAfterGraduation: 'SEK 420,000 - 580,000 / year (~$40k - $55k)',
    livingCost: 'SEK 9,500 - 13,000 / month',
    applicationTimeline: 'Mid-Oct to Mid-Jan via central portal UniversityAdmissions.se',
    intakeMonths: ['Autumn (August/September)'],
    advantages: [
      'Single centralized application portal (UniversityAdmissions.se) for 4 universities.',
      'SI Scholarship covers 100% tuition + SEK 12,000/month stipend + travel grant.',
      'Flat, egalitarian academic culture and high quality of life.'
    ],
    disadvantages: [
      'SI scholarship requires documented leadership and 3,000 hours work experience.',
      'Cold winter climate.'
    ]
  },
  {
    id: 'finland',
    name: 'Finland',
    flag: '🇫🇮',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science / AI / Data Science. World-renowned education standards and tech innovation (Nokia, Linux birthplace).',
    bestUniversities: ['Aalto University', 'University of Helsinki', 'Tampere University', 'University of Oulu', 'LUT University'],
    costWithoutScholarship: '€10,000 - €18,000 / year',
    scholarshipOpportunities: ['Finland Scholarship (100% Tuition + €5,000 relocation grant)', 'Aalto University Tuition Waiver Scholarships (50% or 100%)', 'EDITH & EDUFI Fellowships'],
    visaSuccessRate: '90% - 96% (Fast-track digital residence permit)',
    jobOpportunities: 'High for CS, AI, and Game Development in Helsinki and Tampere.',
    prOpportunities: '4 years of residence on continuous permit gives permanent residency.',
    salaryAfterGraduation: '€42,000 - €62,000 / year',
    livingCost: '€800 - €1,100 / month',
    applicationTimeline: 'Dec - Jan (Joint Application period)',
    intakeMonths: ['September'],
    advantages: [
      'Ranked #1 happiest country in the world.',
      'Generous 2-year post-study work permit.',
      'High award rate of 50-100% tuition waivers for strong academic profiles.'
    ],
    disadvantages: [
      'High living expenses in Helsinki.',
      'Dark winter days.'
    ]
  },
  {
    id: 'norway',
    name: 'Norway',
    flag: '🇳🇴',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science. Research-oriented, modern laboratory facilities.',
    bestUniversities: ['NTNU (Norwegian University of Science and Technology)', 'University of Oslo (UiO)', 'University of Bergen', 'UiT The Arctic University'],
    costWithoutScholarship: 'NOK 130,000 - 180,000 / year (Note: Tuition introduced for non-EU in 2023)',
    scholarshipOpportunities: ['Norwegian Government Quota Scheme (limited)', 'NTNU Institutional Merit Grants', 'Erasmus Mundus tracks'],
    visaSuccessRate: '85% - 90%',
    jobOpportunities: 'Strong in Energy IT, Maritime Software, and Cybersecurity in Oslo & Trondheim.',
    prOpportunities: '3 years on work visa yields PR.',
    salaryAfterGraduation: 'NOK 550,000 - 720,000 / year',
    livingCost: 'NOK 12,000 - 16,000 / month',
    applicationTimeline: 'Oct - Dec',
    intakeMonths: ['August'],
    advantages: [
      'NTNU is a top Nordic engineering powerhouse.',
      'High standard of safety, nature, and living standards.'
    ],
    disadvantages: [
      'Recent introduction of tuition fees for non-EU students.',
      'High proof of funds required for student visa (~NOK 137,907/year).'
    ]
  },
  {
    id: 'denmark',
    name: 'Denmark',
    flag: '🇩🇰',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science / Software Engineering. Heavy emphasis on group work, problem-based learning (PBL), and industrial ties.',
    bestUniversities: ['Technical University of Denmark (DTU)', 'University of Copenhagen (UCPH)', 'Aarhus University', 'Aalborg University'],
    costWithoutScholarship: '€12,000 - €17,000 / year',
    scholarshipOpportunities: ['Danish Government Scholarships (Danish State Tuition Waivers)', 'DTU Institutional Grants'],
    visaSuccessRate: '88% - 93%',
    jobOpportunities: 'Strong in Copenhagen and Aarhus tech districts.',
    prOpportunities: 'Possible after 4-8 years depending on employment and Danish language mastery.',
    salaryAfterGraduation: 'DKK 380,000 - 520,000 / year',
    livingCost: 'DKK 8,000 - 11,000 / month',
    applicationTimeline: 'Nov - Jan 15 for Non-EU applicants',
    intakeMonths: ['September'],
    advantages: [
      'PBL teaching methodology builds practical industry engineering skills.',
      'Danish state scholarship covers full tuition + living stipend for top applicants.'
    ],
    disadvantages: [
      'High taxation rate.',
      'Rigid PR requirements.'
    ]
  },
  {
    id: 'ireland',
    name: 'Ireland',
    flag: '🇮🇪',
    region: 'Europe',
    educationSystem: '1-Year MSc Computer Science / Data Analytics / AI. Direct access to European Headquarters of Google, Meta, Apple, Microsoft, Amazon.',
    bestUniversities: ['Trinity College Dublin (TCD)', 'University College Dublin (UCD)', 'University of Galway', 'University College Cork (UCC)', 'Dublin City University (DCU)'],
    costWithoutScholarship: '€14,000 - €26,000 / year',
    scholarshipOpportunities: ['Government of Ireland International Education Scholarship (GOI-IES - €10,000 stipend + fee waiver)', 'UCD Global Excellence Scholarship', 'TCD Global Postgraduate Award'],
    visaSuccessRate: '82% - 88%',
    jobOpportunities: 'Exceptional (Silicon Docks in Dublin hosts major world tech companies).',
    prOpportunities: 'Critical Skills Employment Permit leads to Stamp 4 PR in 2 years.',
    salaryAfterGraduation: '€45,000 - €70,000 / year',
    livingCost: '€1,100 - €1,700 / month',
    applicationTimeline: 'Oct - Feb',
    intakeMonths: ['September'],
    advantages: [
      'Only major English-speaking country remaining in EU.',
      'Direct pipeline into multinational tech giants in Dublin.',
      'GOI-IES scholarship provides full tuition waiver + €10k living grant.'
    ],
    disadvantages: [
      'Severe Dublin housing crisis.',
      'High cost of living.'
    ]
  },
  {
    id: 'belgium',
    name: 'Belgium',
    flag: '🇧🇪',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science / Cybersecurity. Located at the heart of the European Union with high academic prestige.',
    bestUniversities: ['KU Leuven', 'Ghent University', 'Université Libre de Bruxelles (ULB)', 'Vrije Universiteit Brussel (VUB)'],
    costWithoutScholarship: '€1,000 - €7,000 / year at Flemish public universities',
    scholarshipOpportunities: ['Master Mind Scholarships (Flanders Government - €10,000 grant + fee waiver)', 'KU Leuven Master Grants'],
    visaSuccessRate: '85% - 90%',
    jobOpportunities: 'Strong in Brussels, Ghent, and Leuven R&D hubs.',
    prOpportunities: '5 years legal residence for permanent residency.',
    salaryAfterGraduation: '€40,000 - €60,000 / year',
    livingCost: '€850 - €1,200 / month',
    applicationTimeline: 'Nov - Feb 1 for Non-EU applicants',
    intakeMonths: ['September'],
    advantages: [
      'KU Leuven is consistently ranked among Top 50 worldwide for engineering.',
      'Affordable tuition fee base rate compared to UK/US.',
      'Central position in Europe.'
    ],
    disadvantages: [
      'Strict academic progression standards (credit passing ratios).',
      'Complex administrative processes.'
    ]
  },
  {
    id: 'austria',
    name: 'Austria',
    flag: '🇦🇹',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science / Software Engineering. Highly theoretical and applied technology research.',
    bestUniversities: ['TU Wien (Vienna University of Technology)', 'TU Graz', 'University of Vienna', 'University of Innsbruck'],
    costWithoutScholarship: '€726 per semester for non-EU students',
    scholarshipOpportunities: ['Austria OeAD Scholarships', 'Helmut Veith Stipend for Women in Computer Science (TU Wien)', 'TU Wien Merit Scholarships'],
    visaSuccessRate: '83% - 89%',
    jobOpportunities: 'Good tech market in Vienna and Graz.',
    prOpportunities: 'Red-White-Red Card for skilled workers after graduation.',
    salaryAfterGraduation: '€42,000 - €62,000 / year',
    livingCost: '€850 - €1,150 / month',
    applicationTimeline: 'Sept - Dec / Jan - Sept (Depends on university)',
    intakeMonths: ['Winter (October)', 'Summer (March)'],
    advantages: [
      'Very affordable public tuition (~€1,452/year).',
      'Vienna is repeatedly voted most livable city on Earth.',
      'High safety and quality of life.'
    ],
    disadvantages: [
      'German language competence required for long-term career growth.',
      'Visa processing times can be slow.'
    ]
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science at global elite institutions. Exceptional research funding, world-class labs (CERN, Google Zurich).',
    bestUniversities: ['ETH Zurich', 'EPFL (École Polytechnique Fédérale de Lausanne)', 'University of Zurich', 'University of Geneva'],
    costWithoutScholarship: 'CHF 1,500 - CHF 2,000 / year (Tuition is surprisingly cheap at ETH/EPFL!)',
    scholarshipOpportunities: ['ETH Excellence Scholarship & Opportunity Programme (ESOP)', 'EPFL Master Excellence Fellowships', 'Swiss Government Excellence Scholarships'],
    visaSuccessRate: '80% - 86% (Requires proof of high financial solvency ~CHF 21,000/year)',
    jobOpportunities: 'Extremely lucrative (Google Zurich, Disney Research, Logitech, Novartis).',
    prOpportunities: 'Strict 10-year residency rule for naturalization, though B work permit achievable post-grad for specialized tech roles.',
    salaryAfterGraduation: 'CHF 95,000 - CHF 130,000 / year (Highest in Europe!)',
    livingCost: 'CHF 1,800 - CHF 2,500 / month',
    applicationTimeline: 'Nov 1 - Dec 15 for ETH Zurich / EPFL',
    intakeMonths: ['September'],
    advantages: [
      'ETH Zurich is ranked #7 globally in Computer Science.',
      'Top-tier salaries post graduation.',
      'Low tuition fee despite high living cost.'
    ],
    disadvantages: [
      'Extremely high living expenses.',
      'Highest academic barrier to entry (Top 5% CGPA required).'
    ]
  },
  {
    id: 'spain',
    name: 'Spain',
    flag: '🇪🇸',
    region: 'Europe',
    educationSystem: '1 to 2-Year Master universitario en Informática / Inteligencia Artificial.',
    bestUniversities: ['UPC BarcelonaTech', 'Universidad Politécnica de Madrid (UPM)', 'University of Barcelona', 'Charles III University of Madrid (UC3M)'],
    costWithoutScholarship: '€2,000 - €5,000 / year',
    scholarshipOpportunities: ['MAECED-AECID Scholarships', 'Carolina Foundation Grants', 'UPC Institutional Fellowships'],
    visaSuccessRate: '80% - 85%',
    jobOpportunities: 'Growing tech ecosystem in Barcelona and Madrid.',
    prOpportunities: '5 years of legal stay for permanent residence.',
    salaryAfterGraduation: '€30,000 - €48,000 / year',
    livingCost: '€700 - €1,100 / month',
    applicationTimeline: 'Jan - April',
    intakeMonths: ['September'],
    advantages: [
      'Pleasant Mediterranean climate.',
      'Relatively low tuition and living costs.',
      'Vibrant international student culture.'
    ],
    disadvantages: [
      'Lower starting salaries compared to Germany/Netherlands.',
      'Spanish language needed for local workforce integration.'
    ]
  },
  {
    id: 'hungary',
    name: 'Hungary',
    flag: '🇭🇺',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science / Software Engineering taught in English.',
    bestUniversities: ['Eötvös Loránd University (ELTE)', 'Budapest University of Technology and Economics (BME)', 'University of Debrecen', 'University of Szeged'],
    costWithoutScholarship: '€3,000 - €6,000 / year',
    scholarshipOpportunities: ['Stipendium Hungaricum Scholarship (100% Tuition + Free Dorm/Housing Allowance + Monthly Stipend + Health Insurance)'],
    visaSuccessRate: '88% - 94% (Near 100% success for official Stipendium Hungaricum awardees)',
    jobOpportunities: 'Strong in Budapest (Nokia, Morgan Stanley, SAP, EPAM).',
    prOpportunities: 'EU National Permanent Residence after 3-5 years work.',
    salaryAfterGraduation: 'HUF 7,200,000 - 11,000,000 / year (~€18k - €28k)',
    livingCost: '€500 - €800 / month',
    applicationTimeline: 'Nov - Jan 15 via Stipendium Hungaricum Portal + HEC nomination',
    intakeMonths: ['September'],
    advantages: [
      'Stipendium Hungaricum is one of the most accessible fully funded scholarships for Pakistanis.',
      'HEC Pakistan manages initial screening nomination.',
      'Low cost of living in Central Europe.'
    ],
    disadvantages: [
      'Must clear HEC HAT test for initial nomination.',
      'Hungarian language is complex for daily life (though English is fine in Budapest).'
    ]
  },
  {
    id: 'poland',
    name: 'Poland',
    flag: '🇵🇱',
    region: 'Europe',
    educationSystem: '1.5 to 2-Year MSc Computer Science / Data Science in English.',
    bestUniversities: ['Warsaw University of Technology', 'Jagiellonian University', 'AGH University of Science and Technology', 'University of Warsaw'],
    costWithoutScholarship: '€2,500 - €4,500 / year',
    scholarshipOpportunities: ['Banach Scholarship Programme (NAWA)', 'Ignacy Łukasiewicz Scholarship', 'Poland My First Choice'],
    visaSuccessRate: '82% - 88%',
    jobOpportunities: 'Massive IT outsourcing and development hub in Warsaw and Kraków (Google, Intel, IBM).',
    prOpportunities: 'EU residence permit after 5 years stay.',
    salaryAfterGraduation: 'PLN 80,000 - 130,000 / year (~€18k - €30k)',
    livingCost: '€450 - €700 / month',
    applicationTimeline: 'Dec - Mar for NAWA; May - July for unis',
    intakeMonths: ['October', 'February'],
    advantages: [
      'One of Europe’s largest tech hubs for software developers.',
      'Very low cost of living.',
      'High number of IT job openings.'
    ],
    disadvantages: [
      'Cold winters.',
      'Polish language required for local government interactions.'
    ]
  },
  {
    id: 'czech_republic',
    name: 'Czech Republic',
    flag: '🇨🇿',
    region: 'Europe',
    educationSystem: '2-Year MSc Computer Science / Artificial Intelligence taught in English.',
    bestUniversities: ['Czech Technical University in Prague (CTU)', 'Charles University', 'Brno University of Technology (BUT)', 'Masaryk University'],
    costWithoutScholarship: '€3,000 - €5,000 / year (Free if studied in Czech language!)',
    scholarshipOpportunities: ['Czech Government Scholarships for Developing Countries', 'CTU Merit Scholarships', 'Erasmus+ Mobility Grants'],
    visaSuccessRate: '80% - 86%',
    jobOpportunities: 'Prague and Brno are major IT and AI research clusters in Central Europe.',
    prOpportunities: '5 years of continuous legal residence.',
    salaryAfterGraduation: 'CZK 600,000 - 950,000 / year (~€24k - €38k)',
    livingCost: '€600 - €900 / month',
    applicationTimeline: 'Nov - Feb for Czech Govt Scholarship; Mar - April for Universities',
    intakeMonths: ['September/October'],
    advantages: [
      'CTU Prague is world famous for robotics and AI research.',
      'Centrally located in Europe with active tech employment.',
      'Safe and picturesque cities.'
    ],
    disadvantages: [
      'Nostrification (degree equivalence) process required.',
      'Czech visa appointments require early slot reservation.'
    ]
  },
  {
    id: 'portugal',
    name: 'Portugal',
    flag: '🇵🇹',
    region: 'Europe',
    educationSystem: '2-Year Mestrado em Engenharia Informática e de Computadores.',
    bestUniversities: ['University of Lisbon (Instituto Superior Técnico - IST)', 'University of Porto', 'University of Coimbra', 'NOVA University Lisbon'],
    costWithoutScholarship: '€3,000 - €7,000 / year',
    scholarshipOpportunities: ['FCT Doctoral & Master Fellowships', 'University of Porto Merit Waivers'],
    visaSuccessRate: '80% - 85%',
    jobOpportunities: 'Rapidly growing tech startup hub (Lisbon Web Summit host).',
    prOpportunities: '5 years to Portuguese Citizenship / PR (one of the fastest paths in Western EU).',
    salaryAfterGraduation: '€24,000 - €40,000 / year',
    livingCost: '€650 - €950 / month',
    applicationTimeline: 'Jan - April',
    intakeMonths: ['September'],
    advantages: [
      'Fast 5-year naturalization timeline for EU citizenship.',
      'Sunny climate and hospitable culture.',
      'Lisbon tech ecosystem.'
    ],
    disadvantages: [
      'Lower salary base compared to Northern EU.',
      'Housing costs rising in Lisbon.'
    ]
  },
  {
    id: 'south_korea',
    name: 'South Korea',
    flag: '🇰🇷',
    region: 'Asia',
    educationSystem: '2-Year MSCS / AI / Robotics. Lab-centric model where students join a professor’s research lab (Lab Culture). Highly funded by Samsung, LG, Hyundai.',
    bestUniversities: ['KAIST', 'Seoul National University (SNU)', 'POSTECH', 'GIST', 'DGIST', 'UNIST', 'Korea University', 'Yonsei University'],
    costWithoutScholarship: '$6,000 - $12,000 / year',
    scholarshipOpportunities: ['Global Korea Scholarship (GKS - 100% Tuition + 1 Yr Korean Lang + ₩1,000,000/mo + Airfare)', 'KAIST Full Scholarship', 'GIST / UNIST / DGIST Presidential Fellowships', 'Professor Lab Funding'],
    visaSuccessRate: '88% - 94% (High approval for GKS and KAIST admittees)',
    jobOpportunities: 'High in Hardware, Robotics, AI, Automotive, and Semiconductor software (Samsung, Naver, Kakao, LG).',
    prOpportunities: 'Points-based F-2-7 visa leading to F-5 Permanent Residence for STEM Master graduates.',
    salaryAfterGraduation: '₩45,000,000 - 68,000,000 / year (~$35k - $52k)',
    livingCost: '₩800,000 - 1,200,000 / month',
    applicationTimeline: 'Feb - Mar for GKS Embassy Track; Sept - Oct for Spring KAIST',
    intakeMonths: ['Spring (March - Main)', 'Fall (September)'],
    advantages: [
      'KAIST & GIST guarantee 100% tuition waiver + monthly stipend for almost ALL admitted international students.',
      'Cutting-edge hardware & AI compute infrastructure.',
      'Safe, modern lifestyle.'
    ],
    disadvantages: [
      'Demanding lab culture (long working hours).',
      'Korean language proficiency required for full corporate integration outside tech.'
    ]
  },
  {
    id: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    region: 'Asia',
    educationSystem: '2-Year Master’s Degree (Shushi-katei). Research-intensive lab system under a "Kenkyushitsu" (Professor’s Lab).',
    bestUniversities: ['University of Tokyo (UTokyo)', 'Tokyo Institute of Technology (Tokyo Tech / Science Tokyo)', 'Kyoto University', 'Osaka University', 'Tohoku University', 'Nagoya University'],
    costWithoutScholarship: '¥535,800 / year (~$3,800 at public national universities)',
    scholarshipOpportunities: ['MEXT Japanese Government Scholarship (Embassy & University Recommendation)', 'JASSO Scholarships', 'ADB-Japan Scholarship', 'Honjo International Scholarship'],
    visaSuccessRate: '90% - 96% (COE process via university yields high visa success)',
    jobOpportunities: 'Extremely High. Japan faces severe IT labor shortage; actively recruiting foreign computer scientists.',
    prOpportunities: 'Highly Skilled Professional Visa offers PR in just 1 YEAR for high-scoring STEM Master graduates!',
    salaryAfterGraduation: '¥4,500,000 - 7,500,000 / year (~$32k - $52k)',
    livingCost: '¥100,000 - 160,000 / month',
    applicationTimeline: 'April - May for MEXT Embassy Track in Pakistan; Oct - Dec for University Track',
    intakeMonths: ['October (Main for internationals)', 'April'],
    advantages: [
      'MEXT Scholarship pays full tuition, round-trip flight, and ¥144,000/month (~$1,000) tax-free stipend.',
      'Fastest PR route in Asia (1 year via Highly Skilled Points system).',
      'Ultra-safe, high-tech society.'
    ],
    disadvantages: [
      'MEXT Embassy track screening in Islamabad involves written tests (English/Japanese) and interview.',
      'Japanese language (N3/N2) needed for local corporate office communication.'
    ]
  },
  {
    id: 'china',
    name: 'China',
    flag: '🇨🇳',
    region: 'Asia',
    educationSystem: '2 to 3-Year Master’s in Computer Science / AI / Data Engineering. Massive investments in supercomputing and AI research.',
    bestUniversities: ['Tsinghua University', 'Peking University', 'Zhejiang University', 'Shanghai Jiao Tong University (SJTU)', 'USTC', 'Harbin Institute of Technology', 'Nanjing University'],
    costWithoutScholarship: 'RMB 30,000 - 50,000 / year',
    scholarshipOpportunities: ['Chinese Government Scholarship (CSC - Type A Embassy & Type B University)', 'ANSOM / CAS-TWAS President’s Fellowship', 'Provincial Government Scholarships (e.g. Zhejiang, Jiangsu)', 'Schwarzman Scholars (Tsinghua)'],
    visaSuccessRate: '90% - 95% (X1 Visa issued smoothly with JW201/JW202 form)',
    jobOpportunities: 'Strong in Huawei, Tencent, Alibaba, Baidu, Bytedance, and research institutes.',
    prOpportunities: 'Chinese Permanent Residence card for specialized technical talent and academic researchers.',
    salaryAfterGraduation: 'RMB 220,000 - 400,000 / year (~$30k - $58k)',
    livingCost: 'RMB 2,500 - 4,500 / month',
    applicationTimeline: 'Dec - April for CSC Type B / Universities',
    intakeMonths: ['September'],
    advantages: [
      'CSC scholarship covers 100% tuition, free university dormitory, comprehensive medical insurance, and RMB 3,000/month stipend.',
      'Tsinghua & Peking rival MIT/Stanford in Computer Science publications.',
      'High acceptance capacity for Pakistani STEM graduates.'
    ],
    disadvantages: [
      '3-year master duration at some universities.',
      'Language barrier outside tech campus environment.'
    ]
  },
  {
    id: 'malaysia',
    name: 'Malaysia',
    flag: '🇲🇾',
    region: 'Asia',
    educationSystem: '1.5 to 2-Year MSc Computer Science by Research or Coursework.',
    bestUniversities: ['Universiti Malaya (UM)', 'Universiti Teknologi Malaysia (UTM)', 'Universiti Sains Malaysia (USM)', 'Universiti Putra Malaysia (UPM)'],
    costWithoutScholarship: 'RM 15,000 - 30,000 total program fee (~$3,500 - $7,000)',
    scholarshipOpportunities: ['Malaysian Technical Cooperation Programme (MTCP)', 'Malaysia International Scholarship (MIS)', 'UM / UTM Graduate Research Assistantships (GRA)'],
    visaSuccessRate: '92% - 97% (EMGS Approval Letter)',
    jobOpportunities: 'Regional IT and Shared Services hub in Kuala Lumpur and Penang (Cyberjaya).',
    prOpportunities: 'Employment Pass (Category 1) leads to Resident Pass Talent (RP-T).',
    salaryAfterGraduation: 'RM 48,000 - 84,000 / year (~$11k - $20k)',
    livingCost: 'RM 1,800 - 2,800 / month',
    applicationTimeline: 'May - July for MIS; Year-round for research intake',
    intakeMonths: ['September', 'February'],
    advantages: [
      'Extremely affordable tuition and living expenses.',
      'Muslim-friendly halal environment with large Pakistani diaspora.',
      'High ranking unis (Universiti Malaya in Top 60 global).'
    ],
    disadvantages: [
      'Lower base salary compared to Middle East / Europe.',
      'Competitive government MIS scholarship.'
    ]
  },
  {
    id: 'singapore',
    name: 'Singapore',
    flag: '🇸🇬',
    region: 'Asia',
    educationSystem: '1 to 2-Year MSc / PhD in Computer Science. Global tech benchmark in Asia.',
    bestUniversities: ['National University of Singapore (NUS)', 'Nanyang Technological University (NTU)', 'Singapore Management University (SMU)', 'SUTD'],
    costWithoutScholarship: 'SGD 38,000 - 55,000 / year',
    scholarshipOpportunities: ['SINGA (Singapore International Graduate Award - 100% Tuition + SGD 2,700-3,200/mo stipend + SGD 1,500 airfare)', 'NUS Research Scholarship', 'NTU Research Student Scholarship'],
    visaSuccessRate: '88% - 94% (Student Pass processed via ICA Singapore)',
    jobOpportunities: 'Unmatched in Asia (Asian HQ of Google, Meta, Stripe, ByteDance, Shopee, Grab).',
    prOpportunities: 'High potential via Employment Pass -> Permanent Residency after 2-3 years working in Singapore tech.',
    salaryAfterGraduation: 'SGD 65,000 - 95,000 / year (~$48k - $70k)',
    livingCost: 'SGD 1,500 - 2,400 / month',
    applicationTimeline: 'Oct - Dec 1 for SINGA August intake',
    intakeMonths: ['August', 'January'],
    advantages: [
      'NUS & NTU are ranked #1 and #2 in Asia for Computer Science.',
      'SINGA scholarship pays SGD 2,700-3,200 monthly tax-free stipend (~PKR 550,000+/mo!).',
      'English is primary language of administration and business.'
    ],
    disadvantages: [
      'SINGA is primarily direct PhD or MS leading to PhD.',
      'High room rental costs in Singapore.'
    ]
  },
  {
    id: 'australia',
    name: 'Australia',
    flag: '🇦🇺',
    region: 'Oceania',
    educationSystem: '2-Year Master of Computer Science / Information Technology (Research or Coursework). Group of Eight (Go8) excellence.',
    bestUniversities: ['University of Melbourne', 'UNSW Sydney', 'Australian National University (ANU)', 'University of Sydney', 'Monash University', 'UQ Brisbane'],
    costWithoutScholarship: 'AUD 38,000 - 52,000 / year',
    scholarshipOpportunities: ['Australia Awards Scholarship', 'Research Training Program (RTP Scholarship - 100% Tuition + AUD 35,000/yr stipend)', 'University International Postgraduate Awards (UIPA)'],
    visaSuccessRate: '75% - 82% (Subclass 500 visa requires Genuine Student - GS check)',
    jobOpportunities: 'High in Sydney, Melbourne, and Brisbane tech corridors.',
    prOpportunities: 'Points-based Subclass 189 / 190 / 491 Skilled Independent Visa with regional study extra points.',
    salaryAfterGraduation: 'AUD 80,000 - 115,000 / year',
    livingCost: 'AUD 1,800 - 2,600 / month',
    applicationTimeline: 'July - Oct for Feb intake; Dec - April for July intake',
    intakeMonths: ['Semester 1 (February)', 'Semester 2 (July)'],
    advantages: [
      'RTP scholarship provides guaranteed AUD ~35,000 tax-free yearly stipend.',
      '4-5 years Subclass 485 Temporary Graduate work visa.',
      'High quality of life and multi-cultural society.'
    ],
    disadvantages: [
      'Australia Awards requires returning to Pakistan for 2 years post study.',
      'High proof of funds required for visa if self-funded.'
    ]
  },
  {
    id: 'new_zealand',
    name: 'New Zealand',
    flag: '🇳🇿',
    region: 'Oceania',
    educationSystem: '1.5 to 2-Year Master of Computer Science / Software Engineering.',
    bestUniversities: ['University of Auckland', 'Victoria University of Wellington', 'University of Canterbury', 'University of Otago'],
    costWithoutScholarship: 'NZD 34,000 - 46,000 / year',
    scholarshipOpportunities: ['Manaaki New Zealand Scholarships', 'University of Auckland International Student Excellence Scholarship'],
    visaSuccessRate: '80% - 85%',
    jobOpportunities: 'Moderate in Auckland and Wellington IT market.',
    prOpportunities: 'Straight to Residence pathway for Green List Tier 1 roles (Software Engineer / ICT positions).',
    salaryAfterGraduation: 'NZD 70,000 - 95,000 / year',
    livingCost: 'NZD 1,600 - 2,200 / month',
    applicationTimeline: 'Feb - July for Manaaki NZ Scholarship',
    intakeMonths: ['February', 'July'],
    advantages: [
      'Software Developers on NZ Green List Tier 1 get direct pathway to residence.',
      '3-year Post Study Work Visa.',
      'Stunning natural environment and safe peaceful living.'
    ],
    disadvantages: [
      'Smaller job market compared to Australia/UK.',
      'High airfare cost from Pakistan.'
    ]
  }
];
