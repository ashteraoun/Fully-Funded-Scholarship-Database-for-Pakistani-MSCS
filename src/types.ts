export interface CountryInfo {
  id: string;
  name: string;
  flag: string;
  region: string;
  educationSystem: string;
  bestUniversities: string[];
  costWithoutScholarship: string;
  scholarshipOpportunities: string[];
  visaSuccessRate: string;
  jobOpportunities: string;
  prOpportunities: string;
  salaryAfterGraduation: string;
  livingCost: string;
  applicationTimeline: string;
  intakeMonths: string[];
  advantages: string[];
  disadvantages: string[];
}

export interface ScholarshipInfo {
  id: string;
  officialName: string;
  country: string;
  whoCanApply: string;
  eligibility: string[];
  requiredCGPA: string;
  ieltsRequirement: string;
  requiredExperience: string;
  benefits: string[];
  monthlyStipend: string;
  tuitionCoverage: string;
  airTicket: string;
  accommodation: string;
  healthInsurance: string;
  duration: string;
  selectionProcess: string;
  acceptanceRate: string;
  requiredDocuments: string[];
  officialApplicationProcess: string;
  officialWebsite: string;
}

export interface MonthTask {
  month: string;
  year: number;
  phase: string;
  title: string;
  keyActions: string[];
  importantDeadlines: string[];
  proTip: string;
}

export interface DocDetail {
  id: string;
  name: string;
  purpose: string;
  whyRequired: string;
  whoIssuesIt: string;
  templateOrSample?: string;
  tips: string[];
  commonMistakes: string[];
  category: 'personal' | 'academic' | 'experience' | 'financial' | 'legal';
}

export interface AttestationStep {
  documentType: string;
  sequence: string[];
  authorityName: string;
  karachiOfficeLocation: string;
  lahoreOfficeLocation: string;
  islamabadOfficeLocation: string;
  onlineProcess: string;
  physicalProcess: string;
  courierProcess: string;
  feesApprox: string;
  commonProblems: string[];
  solutions: string[];
}

export interface Chapter {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  readingTimeMinutes: number;
  sections: {
    id: string;
    title: string;
    content: string;
    bullets?: string[];
    callout?: {
      type: 'tip' | 'warning' | 'note' | 'karachi-special';
      title: string;
      message: string;
    };
    tableData?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  faqs?: { question: string; answer: string }[];
  summary: string[];
  checklist: string[];
  actionPlan: { step: number; task: string; targetDeadline: string }[];
}

export interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

export interface TrackerItem {
  id: string;
  title: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'submitted';
  category: string;
  notes?: string;
  deadline?: string;
}

export interface ProfContact {
  id: string;
  professorName: string;
  university: string;
  country: string;
  researchArea: string;
  email: string;
  emailSentDate?: string;
  followUpDate?: string;
  status: 'draft' | 'sent' | 'replied_positive' | 'replied_negative' | 'no_reply';
  notes?: string;
}
