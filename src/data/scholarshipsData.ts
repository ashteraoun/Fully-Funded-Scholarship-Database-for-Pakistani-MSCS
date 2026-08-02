import { ScholarshipInfo } from '../types';

export const scholarshipsData: ScholarshipInfo[] = [
  {
    id: 'fulbright_usa',
    officialName: 'Fulbright Master’s Scholarship Program (USEFP Pakistan)',
    country: 'United States',
    whoCanApply: 'Pakistani citizens residing in Pakistan with a minimum 16 years of formal education (BSCS/BSIT/BS Soft Eng).',
    eligibility: [
      'Pakistani passport holder residing in Pakistan throughout application.',
      '16 years of education (BS 4-year degree) from an HEC recognized university.',
      'Strong academic record (Minimum 3.0/4.0 CGPA recommended).',
      'Graduate Record Examination (GRE) General Test score (Minimum 138-145 Verbal, 155-160 Quant required).',
      'Demonstrated commitment to return to Pakistan post-study.'
    ],
    requiredCGPA: '3.0 / 4.0 or 70%+ aggregate',
    ieltsRequirement: 'TOEFL iBT (80+) or IELTS (6.5+) required after shortlisting',
    requiredExperience: 'Fresh graduates eligible; 1-2 years work/research experience preferred',
    benefits: [
      'Full tuition fee coverage for up to 2 years MSCS program',
      'Monthly living stipend ($1,400 - $2,500/month depending on university state)',
      'Health insurance (ASPE medical coverage)',
      'Round-trip economy airfare tickets (Karachi/Lahore/Islamabad to USA & back)',
      'Textbook & settling-in allowances',
      'J-1 Visa sponsorship & placement assistance'
    ],
    monthlyStipend: '$1,400 - $2,500 / month',
    tuitionCoverage: '100% Full Waiver',
    airTicket: 'Fully Covered (Round-trip)',
    accommodation: 'Covered via monthly stipend & university housing options',
    healthInsurance: 'Fully Covered (ASPE Benefits)',
    duration: 'Up to 24 Months (2 Years)',
    selectionProcess: 'Initial application review -> GRE screening -> Panel Interview at USEFP Islamabad/Lahore -> Principal Nomination -> IIE US University Placement -> Visa',
    acceptanceRate: '~3% - 5% (Highly prestigious, ~150 Master awardees selected out of 3,000+ Pakistani applicants annually)',
    requiredDocuments: [
      'Complete USEFP Online Application',
      '3 Letters of Recommendation (LORs)',
      'Statement of Purpose (SOP - 1,000 words)',
      'Personal Statement (1,000 words)',
      'Official Academic Transcripts & Degrees (HEC attested preferred)',
      'Official GRE Score Report',
      'Pakistani CNIC and Passport copy'
    ],
    officialApplicationProcess: 'Submit online via USEFP portal (www.usefp.org) before May deadline annually.',
    officialWebsite: 'https://www.usefp.org'
  },
  {
    id: 'knight_hennessy_stanford',
    officialName: 'Knight-Hennessy Scholars at Stanford University',
    country: 'United States',
    whoCanApply: 'Global candidates of any nationality applying to any graduate program at Stanford University, including MS in Computer Science.',
    eligibility: [
      'Bachelor degree earned within 7 years of application.',
      'Must apply to Knight-Hennessy Scholars AND separately apply to Stanford MSCS department.',
      'Demonstrated leadership, civic mindset, and out-of-the-box thinking.'
    ],
    requiredCGPA: '3.8+ / 4.0 (Top 1-2% of graduating class)',
    ieltsRequirement: 'TOEFL iBT 100+ or IELTS 7.5+',
    requiredExperience: 'Leadership & high-impact projects or startups',
    benefits: [
      'Full tuition waiver for Stanford MSCS',
      'Living stipend covering room, board, and personal expenses (~$45,000/year)',
      'Annual travel stipend for 1 round-trip flight to Pakistan',
      'Access to King Global Leadership Program'
    ],
    monthlyStipend: '~$3,500 / month',
    tuitionCoverage: '100% Full Waiver',
    airTicket: '1 Annual Flight Covered',
    accommodation: 'Covered via Living Stipend',
    healthInsurance: 'Fully Covered by Stanford',
    duration: 'Up to 2 Years for MSCS',
    selectionProcess: 'Dual application -> Video submission -> Immersion Weekend at Stanford campus -> Final Selection',
    acceptanceRate: '< 1% (Ultra-competitive globally)',
    requiredDocuments: [
      'Knight-Hennessy Application + Stanford MSCS Application',
      'Resume / CV',
      '3 Recommendation Letters',
      'Two short essays and one long essay',
      'Video submission (2 minutes)',
      'GRE score report'
    ],
    officialApplicationProcess: 'Submit Knight-Hennessy application by October, followed by Stanford MSCS department application in December.',
    officialWebsite: 'https://knight-hennessy.stanford.edu'
  },
  {
    id: 'ta_ra_ga_usa',
    officialName: 'Graduate Teaching & Research Assistantships (TA/RA/GA)',
    country: 'United States',
    whoCanApply: 'Admitted graduate students in MS or PhD Computer Science programs at US Public and Private Universities.',
    eligibility: [
      'Admitted into MSCS program.',
      'Strong technical skills (Coding, Algorithms, Machine Learning, Data Structures) for RA.',
      'High Spoken English proficiency (TOEFL Speaking 26+ or IELTS Speaking 8.0) for TA.'
    ],
    requiredCGPA: '3.3+ / 4.0',
    ieltsRequirement: 'IELTS 7.0+ or TOEFL 90+',
    requiredExperience: 'Prior undergraduate TA experience, GitHub portfolio, or research publications',
    benefits: [
      '100% Full or 50% Out-of-State Tuition Remission',
      'Monthly salary/stipend ($1,500 - $2,800/month) for 20 hours/week work',
      'Subsidized or free University Health Insurance'
    ],
    monthlyStipend: '$1,500 - $2,800 / month',
    tuitionCoverage: '100% Full Tuition Remission',
    airTicket: 'Self-funded (or covered by supervisor start-up fund)',
    accommodation: 'Covered via Assistantship Monthly Stipend',
    healthInsurance: 'Covered by University Employee Health Plan',
    duration: '1 to 2 Years (Renewed per semester based on performance)',
    selectionProcess: 'Direct application to MSCS department, faculty cold emailing, or on-campus interview upon arrival.',
    acceptanceRate: '20% - 35% in research universities for qualified CS students',
    requiredDocuments: [
      'University MSCS Application',
      'SOP emphasizing research fit',
      'GitHub repository link / Research publications',
      'TOEFL/IELTS Speaking score breakdown',
      'Direct emails to US Professors'
    ],
    officialApplicationProcess: 'Indicate interest in Assistantship on university application form and email professors directly before applying.',
    officialWebsite: 'https://www.gradschools.com'
  },
  {
    id: 'erasmus_mundus',
    officialName: 'Erasmus Mundus Joint Master Degrees (EMJMD)',
    country: 'Europe (Multiple Consortium Countries - e.g. France, Italy, Germany, Spain, Finland)',
    whoCanApply: 'Students worldwide holding a Bachelor’s degree in Computer Science, Software Engineering, Mathematics, or related field.',
    eligibility: [
      'BS degree in CS or STEM discipline.',
      'High academic standing.',
      'Must study in at least TWO different European countries during the 2-year program.'
    ],
    requiredCGPA: '3.2+ / 4.0',
    ieltsRequirement: 'IELTS 6.5+ (No sub-score below 6.0) or TOEFL 90+',
    requiredExperience: 'Projects, internships, or publications relevant to consortium track',
    benefits: [
      '100% Full tuition fee exemption',
      '€1,400 / month living allowance for 24 months (Tax-Free!)',
      '€3,000 / year travel and installation grant',
      'Comprehensive Schengen medical insurance'
    ],
    monthlyStipend: '€1,400 / month (~PKR 420,000/mo)',
    tuitionCoverage: '100% Fully Waived',
    airTicket: 'Covered via €3,000 Annual Travel Allowance',
    accommodation: 'Covered via monthly stipend',
    healthInsurance: 'Fully Covered (EU Standard Health Scheme)',
    duration: '24 Months (2 Years)',
    selectionProcess: 'Consortium application submission -> Document evaluation -> Online Interview (for some tracks) -> Final Results in March/April',
    acceptanceRate: '~2% - 4% (Pakistan is consistently among Top 3 winner countries globally!)',
    requiredDocuments: [
      'Consortium online application',
      'CV in Europass format',
      'Motivation Letter (SOP tailored to consortium mobility track)',
      '2 LORs',
      'Transcript and Degree (HEC attested)',
      'English Proficiency Certificate / IELTS',
      'Proof of Residence (Issued by Union Council / Govt)'
    ],
    officialApplicationProcess: 'Apply directly through specific EMJMD consortium website (e.g., BDMA, SECCLO, MERIT, DMKD) between October and January.',
    officialWebsite: 'https://erasmus-plus.ec.europa.eu/master-programmes'
  },
  {
    id: 'daad_epos_germany',
    officialName: 'DAAD Development-Related Postgraduate Courses (EPOS)',
    country: 'Germany',
    whoCanApply: 'Professionals from developing countries (including Pakistan) with at least 2 years of professional work experience.',
    eligibility: [
      '4-year Bachelor degree in CS, Engineering, or related field.',
      'Minimum 2 years of post-graduation professional work experience in industry or academia.',
      'Degree earned within the last 6 years.'
    ],
    requiredCGPA: '2.8+ / 4.0 or German equivalent 2.5 or better',
    ieltsRequirement: 'IELTS 6.5+ or TOEFL 80+',
    requiredExperience: 'Mandatory 2 Years Post-Graduation Full-Time Work Experience',
    benefits: [
      'Monthly stipend of €934',
      '100% Tuition waiver at German public universities',
      'Travel allowance (Airfare Pakistan to Germany & return)',
      'Health, accident, and personal liability insurance',
      '2-month preparatory German language course'
    ],
    monthlyStipend: '€934 / month',
    tuitionCoverage: '100% Covered',
    airTicket: 'Fully Covered',
    accommodation: 'Covered via monthly stipend & student dorms',
    healthInsurance: 'Fully Covered',
    duration: '12 to 24 Months',
    selectionProcess: 'Direct application to DAAD EPOS course -> University screening -> DAAD final award approval',
    acceptanceRate: '~5% - 8%',
    requiredDocuments: [
      'DAAD application form',
      'Hand-signed CV (Europass format)',
      'Hand-signed Letter of Motivation (current reference to job)',
      'Employer Recommendation Letter',
      'Certificate of Employment proving 2+ years experience',
      'HEC attested degree & transcript'
    ],
    officialApplicationProcess: 'Submit application directly to the university offering the DAAD EPOS course between August and October.',
    officialWebsite: 'https://www.daad.de'
  },
  {
    id: 'stipendium_hungaricum',
    officialName: 'Stipendium Hungaricum Scholarship Programme',
    country: 'Hungary',
    whoCanApply: 'Pakistani citizens applying through the official HEC Pakistan nominating agency portal.',
    eligibility: [
      'Pakistani/AJK national.',
      '16 years of education (BSCS/BS Software Eng).',
      'Must clear the HEC Higher Education Aptitude Test (HAT).',
      'Must be nominated by HEC Pakistan.'
    ],
    requiredCGPA: '2.8+ / 4.0 or 65%+',
    ieltsRequirement: 'IELTS 6.0+ or English Proficiency Certificate from university',
    requiredExperience: 'None required (Fresh graduates welcome)',
    benefits: [
      'Full 100% Tuition Fee Exemption',
      'Monthly living stipend of HUF 43,700/month (~€110) for MS',
      'Free dormitory place OR monthly housing allowance of HUF 40,000/month',
      'Health insurance up to HUF 65,000/year'
    ],
    monthlyStipend: 'HUF 43,700 + HUF 40,000 Housing Allowance',
    tuitionCoverage: '100% Covered',
    airTicket: 'Self-funded airfare',
    accommodation: 'Free Dormitory or HUF 40,000 Allowance',
    healthInsurance: 'Fully Covered',
    duration: '2 Years (4 Semesters)',
    selectionProcess: 'Apply on HEC Portal & Stipendium Portal by Jan 15 -> Clear HEC HAT Exam -> HEC Nominates Candidate -> Hungarian University Entrance Exam/Interview -> Award Letter',
    acceptanceRate: '~10% - 15% for HEC nominated candidates',
    requiredDocuments: [
      'Stipendium Hungaricum Online Application',
      'HEC Online Application + HAT Test Result',
      'Motivation Letter',
      'IELTS / English Proficiency Certificate',
      'Medical Certificate from registered hospital',
      'Transcripts & Degrees with HEC attestation'
    ],
    officialApplicationProcess: 'Submit dual applications on Tempus Public Foundation portal and HEC Pakistan portal before mid-January deadline.',
    officialWebsite: 'https://stipendiumhungaricum.hu'
  },
  {
    id: 'mext_japan',
    officialName: 'MEXT Japanese Government Scholarship (Monbukagakusho)',
    country: 'Japan',
    whoCanApply: 'Pakistani citizens under 35 years of age holding 16 years of education.',
    eligibility: [
      'Pakistani passport holder.',
      'Born on or after April 2, 1992 (for 2027 intake).',
      'BS in Computer Science or Engineering.',
      'Pass written screening (English) and interview at Embassy of Japan in Islamabad.'
    ],
    requiredCGPA: '3.0+ / 4.0',
    ieltsRequirement: 'IELTS 6.5+ or TOEFL 80+ (Japanese language NOT mandatory, taught in English)',
    requiredExperience: 'None required',
    benefits: [
      '100% Full Tuition Waiver at National Japanese Universities',
      'Monthly stipend of ¥144,000 / month (~PKR 280,000/mo, Tax-Free!)',
      'Round-trip economy airfare (Karachi/Islamabad to Tokyo)',
      '6-Month Intensive Japanese Language Preparatory Course if needed',
      'Exemption from university entrance examination fees'
    ],
    monthlyStipend: '¥144,000 / month (~$1,000 USD)',
    tuitionCoverage: '100% Fully Waived',
    airTicket: 'Fully Covered (Round-trip)',
    accommodation: 'University Dormitory / Private Apartment funded by stipend',
    healthInsurance: 'Covered via National Health Insurance',
    duration: '2 Years (plus 6 months Research Student prep if needed)',
    selectionProcess: 'Application to Embassy of Japan in Pakistan (April-May) -> Written Exam & Interview in Islamabad (June-July) -> Primary Nomination -> Letter of Acceptance from Japanese Professor -> Final MEXT Tokyo Approval (Feb)',
    acceptanceRate: '~2% - 4% (Embassy Recommendation Track)',
    requiredDocuments: [
      'MEXT Application Form & Field of Study/Research Plan',
      'Attested Transcripts and Degree Certificates',
      'Recommendation Letter from University Dean/Professor',
      'Medical Certificate on MEXT format',
      'Abstract of Thesis / Research Papers'
    ],
    officialApplicationProcess: 'Download forms from Embassy of Japan in Pakistan website in April and submit physical documents to Islamabad Embassy by deadline.',
    officialWebsite: 'https://www.pk.emb-japan.go.jp'
  },
  {
    id: 'gks_south_korea',
    officialName: 'Global Korea Scholarship (GKS Graduate Track)',
    country: 'South Korea',
    whoCanApply: 'Pakistani citizens under 40 years old holding a Bachelor degree.',
    eligibility: [
      'Applicant and parents must be Pakistani citizens.',
      'Under 40 years of age.',
      'CGPA above 80% or 2.64/4.0 on GPA scale.',
      'Choose Embassy Track (Apply via Korean Embassy Islamabad) OR University Track (Apply direct to Korean University).'
    ],
    requiredCGPA: '2.8+ / 4.0 or 80% aggregate',
    ieltsRequirement: 'IELTS 6.5+ or TOPIK Level 3+ gives bonus points',
    requiredExperience: 'None required',
    benefits: [
      '100% Full Tuition Waiver',
      'Monthly Stipend of ₩1,000,000 / month (~$750 USD)',
      '1-Year Korean Language Training fully paid',
      'Round-trip Airfare tickets',
      'Settlement allowance (₩200,000) + Research allowance + Medical Insurance'
    ],
    monthlyStipend: '₩1,000,000 / month',
    tuitionCoverage: '100% Fully Covered',
    airTicket: 'Fully Covered (Round-trip)',
    accommodation: 'Dormitory or Off-campus housing',
    healthInsurance: 'Fully Covered',
    duration: '3 Years (1 Year Language + 2 Years MSCS)',
    selectionProcess: '1st Round Screening (Embassy or University) -> 2nd Round NIIED Evaluation -> 3rd Round University Admissions -> Final Winner Announcement in June',
    acceptanceRate: '~3% - 5%',
    requiredDocuments: [
      'GKS Application Form & Personal Statement',
      'Statement of Purpose / Study Plan',
      '1 Recommendation Letter in sealed envelope',
      'GKS Applicant Agreement & Medical Checkup',
      'Apostilled / MOFA attested Transcripts and Degrees',
      'Proof of Citizenship (Applicant & Parents Family Registration Certificate - FRC)'
    ],
    officialApplicationProcess: 'Submit physical documents to Korean Embassy in Islamabad (Embassy Track) in February OR direct to university (University Track).',
    officialWebsite: 'https://www.studyinkorea.go.kr'
  },
  {
    id: 'csc_china',
    officialName: 'Chinese Government Scholarship (CSC - High Level Graduate Program Type B)',
    country: 'China',
    whoCanApply: 'Non-Chinese citizens under 35 applying for Master’s degrees in China.',
    eligibility: [
      'Pakistani citizen with BS Computer Science/Software Engineering.',
      'Under 35 years of age.',
      'Apply directly to Chinese Universities via CSC Portal Type B.'
    ],
    requiredCGPA: '2.8+ / 4.0',
    ieltsRequirement: 'IELTS 6.0+ or English Medium Instruction Certificate',
    requiredExperience: 'Professor acceptance letter strongly recommended',
    benefits: [
      '100% Full Tuition Waiver',
      'Free University On-Campus Dormitory Accommodation',
      'Monthly Stipend of RMB 3,000 / month (~PKR 120,000/mo)',
      'Comprehensive Medical Insurance in China'
    ],
    monthlyStipend: 'RMB 3,000 / month',
    tuitionCoverage: '100% Covered',
    airTicket: 'Self-funded (or provided by specific university bonus)',
    accommodation: 'Free On-Campus University Housing',
    healthInsurance: 'Fully Covered',
    duration: '2 to 3 Years',
    selectionProcess: 'Find Professor -> Secure Acceptance Letter -> Apply on CSC Portal Type B + University Portal -> University Pre-admission -> CSC Final Verification -> JW201 Visa Form Issued',
    acceptanceRate: '~12% - 18% with Professor Acceptance Letter',
    requiredDocuments: [
      'CSC Online Application Form (Type B)',
      'Notarized / MOFA attested Transcripts and BS Degree',
      'Study Plan / Research Proposal (800+ words)',
      '2 Recommendation Letters from Professors',
      'Pre-acceptance Letter from Chinese Professor (Very Important!)',
      'Foreigner Physical Examination Form',
      'Non-Criminal Record Certificate (Police Clearance Certificate)'
    ],
    officialApplicationProcess: 'Complete CSC online application (campuschina.org) and university application portal before March 31.',
    officialWebsite: 'https://www.campuschina.org'
  },
  {
    id: 'singa_singapore',
    officialName: 'Singapore International Graduate Award (SINGA)',
    country: 'Singapore',
    whoCanApply: 'International students with a passion for research and excellent academic records pursuing PhD or Direct-PhD after BSCS/MSCS at NUS, NTU, SUTD, or A*STAR labs.',
    eligibility: [
      'Open to all international graduates.',
      'Strong passion for CS, AI, Cybersecurity, or Data Science research.',
      'Good spoken and written English skills.'
    ],
    requiredCGPA: '3.5+ / 4.0',
    ieltsRequirement: 'IELTS 6.5+ or TOEFL 85+ (or University English Medium Certificate)',
    requiredExperience: 'Research thesis, GitHub projects, or paper publications preferred',
    benefits: [
      '100% Full Tuition Fee Coverage for 4 years',
      'Monthly Stipend of SGD 2,700/month (increased to SGD 3,200/month after passing qualifying exam)',
      'One-time Airfare Grant of up to SGD 1,500',
      'One-time Settling-in Allowance of SGD 1,000'
    ],
    monthlyStipend: 'SGD 2,700 - 3,200 / month (~PKR 550,000 - 650,000/mo)',
    tuitionCoverage: '100% Covered',
    airTicket: 'Up to SGD 1,500 Grant',
    accommodation: 'University Graduate Hall Housing funded via stipend',
    healthInsurance: 'Covered via Singapore University Medical Insurance',
    duration: '4 Years (Direct PhD/Master-PhD track)',
    selectionProcess: 'Online Application -> Shortlisting by A*STAR / NUS / NTU -> Online Technical Panel Interview -> Selection Notice',
    acceptanceRate: '~3% - 5%',
    requiredDocuments: [
      'SINGA Online Application Form',
      'Passport copy',
      'Academic Transcripts (English translated & HEC attested)',
      '2 Recommendation Letters',
      'Personal Statement & Research Interest Essay'
    ],
    officialApplicationProcess: 'Submit application online via A*STAR portal before December 1 (for August intake).',
    officialWebsite: 'https://www.a-star.edu.sg/singa'
  },
  {
    id: 'rtp_australia',
    officialName: 'Australian Government Research Training Program (RTP Scholarship)',
    country: 'Australia',
    whoCanApply: 'International students applying for Master by Research or PhD in Computer Science at Australian universities.',
    eligibility: [
      'High academic merit (First Class Honors or BS 3.5+ CGPA).',
      'Proven research capacity (Publications or BS Thesis).',
      'Admitted to an Australian University MS by Research program.'
    ],
    requiredCGPA: '3.5+ / 4.0',
    ieltsRequirement: 'IELTS 6.5+ (No band below 6.0) or TOEFL 85+',
    requiredExperience: 'Mandatory BS Thesis or published conference/journal paper',
    benefits: [
      'RTP Fee Offset (100% Tuition Fee Waiver)',
      'RTP Stipend of AUD 35,000 - 37,000 / year (Tax-Free!)',
      'Overseas Student Health Cover (OSHC) for duration of stay',
      'Relocation and thesis allowance'
    ],
    monthlyStipend: '~AUD 2,950 / month',
    tuitionCoverage: '100% Fully Waived',
    airTicket: 'Covered via Relocation Grant',
    accommodation: 'Funded via monthly tax-free stipend',
    healthInsurance: 'Fully Covered (OSHC)',
    duration: '2 Years for Master by Research',
    selectionProcess: 'Secure Australian Supervisor -> Submit University Research Application -> Automatically considered for RTP ranking -> Award Notification',
    acceptanceRate: '~4% - 6%',
    requiredDocuments: [
      'University Graduate Research Application',
      'Supervisor Acceptance / Expressions of Interest (EOI)',
      'Research Proposal (1,500 words)',
      'Curriculum Vitae highlighting publications',
      '2 Referees Reports',
      'HEC Attested Degree and Transcripts'
    ],
    officialApplicationProcess: 'Apply directly through target Australian university research portal between August and October.',
    officialWebsite: 'https://www.education.gov.au/research-block-grants/research-training-program'
  },
  {
    id: 'eiffel_france',
    officialName: 'Eiffel Excellence Scholarship Program',
    country: 'France',
    whoCanApply: 'Top international candidates up to 25 years old applying for Master’s programs in France (specifically Engineering / Computer Science / AI).',
    eligibility: [
      'Non-French nationality.',
      'Up to 25 years old for Master level.',
      'Must be nominated directly by a French Higher Education Institution (Students cannot apply directly to Campus France).'
    ],
    requiredCGPA: '3.5+ / 4.0',
    ieltsRequirement: 'IELTS 6.5+ (or French B2 if French track)',
    requiredExperience: 'Academic excellence and leadership',
    benefits: [
      'Monthly allowance of €1,181 / month',
      'International round-trip airfare (Pakistan to France)',
      'National health insurance & Supplemental health insurance',
      'Cultural activities allowance & housing search priority'
    ],
    monthlyStipend: '€1,181 / month',
    tuitionCoverage: 'Tuition waived by French Public Universities for Eiffel holders',
    airTicket: 'Fully Covered (Round-trip)',
    accommodation: 'Priority CROUS student housing reservation',
    healthInsurance: 'Fully Covered',
    duration: '12 to 24 Months',
    selectionProcess: 'Apply to French University -> University selects top candidates and submits Eiffel nomination to Campus France Paris -> Results announced in April',
    acceptanceRate: '~6% - 10%',
    requiredDocuments: [
      'University Master’s Application',
      'CV & Motivation Essay',
      'Academic Transcripts and Class Ranking Certificate',
      'Proficiency in English / French'
    ],
    officialApplicationProcess: 'Submit university admission application early (by November) so the French university nominates you for Eiffel before January deadline.',
    officialWebsite: 'https://www.campusfrance.org/en/eiffel-scholarship-program-of-excellence'
  }
];
