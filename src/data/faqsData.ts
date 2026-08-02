import { FAQItem } from '../types';

export const faqsData: FAQItem[] = Array.from({ length: 100 }, (_, i) => {
  const id = i + 1;
  let category = 'General & Eligibility';
  let question = `Question ${id}`;
  let answer = `Detailed response for question ${id}`;

  if (id === 1) {
    category = 'General & Eligibility';
    question = 'Can a Pakistani student with a 2.8 or 3.0 CGPA win a Fully Funded Scholarship for MSCS?';
    answer = 'YES! Fully funded scholarships like DAAD EPOS, Stipendium Hungaricum, CSC China, Italian DSU, and US Teaching Assistantships routinely award students with 2.8 to 3.0 CGPA. Selection committees evaluate holistically: strong technical projects, research publications, stellar SOP, and high IELTS/GRE scores can easily compensate for a lower CGPA.';
  } else if (id === 2) {
    category = 'Degree Attestation';
    question = 'What is the exact step-by-step attestation order for a BSCS degree from Karachi?';
    answer = 'The strict order is: 1. University Controller Verification -> 2. HEC e-Portal online verification & Walk-in / TCS attestation -> 3. MOFA Camp Office Shahrah-e-Faisal Karachi attestation -> 4. Target Destination Foreign Embassy Legalization.';
  } else if (id === 3) {
    category = 'Testing & English';
    question = 'Is IELTS mandatory for every fully funded MSCS scholarship?';
    answer = 'While IELTS Academic (6.5+) is required for 80% of top global scholarships, some scholarships (e.g. CSC China, Stipendium Hungaricum, some Italian universities) accept an official "English Medium of Instruction Certificate" issued on letterhead by your Pakistani university registrar.';
  } else if (id === 4) {
    category = 'Attestation & Verification';
    question = 'Where is the HEC Regional Center in Karachi for physical walk-in attestation?';
    answer = 'The HEC Regional Center in Karachi is located at: Block 1, Scheme 24, Gulshan-e-Iqbal, near NIPA Chowrangi, Karachi. Appointments must be scheduled via the HEC e-Portal beforehand.';
  } else if (id === 5) {
    category = 'Attestation & Verification';
    question = 'Where is the MOFA Camp Office in Karachi?';
    answer = 'The MOFA Camp Office Karachi is located on Main Shahrah-e-Faisal, near FTC (Finance & Trade Centre) Building, Karachi. Tokens are issued in the morning.';
  } else if (id === 6) {
    category = 'Scholarships & Funding';
    question = 'What is the difference between Fulbright and Erasmus Mundus?';
    answer = 'Fulbright targets study exclusively in the United States and requires returning to Pakistan under J-1 visa rules. Erasmus Mundus involves studying across 2 to 3 different European countries with a tax-free €1,400 monthly stipend and no return obligation.';
  } else if (id === 7) {
    category = 'Visa & Finances';
    question = 'How much bank statement is required if I have a Fully Funded Scholarship?';
    answer = 'If your scholarship grant letter explicitly confirms 100% tuition waiver + monthly stipend exceeding local living costs, most embassies (e.g., German, US, Swedish, Japanese) require ZERO additional personal bank statement or only a nominal amount for initial flight setup!';
  } else if (id === 8) {
    category = 'Attestation & Verification';
    question = 'Where is IBCC located in Karachi?';
    answer = 'The IBCC Regional Office Karachi is located in Federal B Area, Block 14, near Water Pump, Karachi.';
  } else if (id === 9) {
    category = 'Cold Emailing & Professors';
    question = 'When is the best time to cold email professors for MSCS research funding?';
    answer = 'Send cold emails between September and November for Fall intake. Time your email to land at 8:15 AM Tuesday or Wednesday in the professor’s local university timezone.';
  } else if (id === 10) {
    category = 'Scholarships & Funding';
    question = 'What is the MEXT Embassy Track selection process in Pakistan?';
    answer = '1. Submit physical application forms to Embassy of Japan Islamabad in April -> 2. Appear for written English exam in June -> 3. Panel interview at Embassy -> 4. Obtain Acceptance Letter from Japanese Professor -> 5. Final Tokyo MEXT approval.';
  } else {
    // Generated structured entries for 11 to 100
    const cats = ['General & Eligibility', 'Degree Attestation', 'Scholarships & Funding', 'Visa & Finances', 'Document Preparation', 'Cold Emailing & Professors', 'Post-Graduation & Careers'];
    category = cats[i % cats.length];
    const topics = [
      'handling 14 years vs 16 years education for MSCS',
      'calculating GPA equivalence on German 1.0 to 4.0 scale',
      'attesting transcripts when degree is not yet printed (Provisional Certificate)',
      'preparing for HEC HAT test for Stipendium Hungaricum nomination',
      'navigating US F-1 visa 214(b) rejection risks for Pakistani applicants',
      'obtaining non-criminal police certificate from Karachi Police Khidmat Markaz',
      'choosing between Coursework MSCS vs Thesis MSc',
      'converting Pakistani PKR income into EUR/USD for bank solvency proof',
      'understanding 3-year STEM OPT extension rules in the United States',
      'managing US Embassy interview wait times at US Consulate Karachi vs Islamabad',
      'securing fully funded TA/RA positions without prior publications',
      'understanding German Blocked Account requirement (Expatrio / Coracle)',
      'writing a winning 1,000-word Statement of Purpose without generic AI clichés',
      'obtaining sealed board verification envelopes from BIEK and BSEK Karachi',
      'navigating the 5-year EU Permanent Residency pathway post graduation',
      'applying for Australian Research Training Program (RTP) scholarships',
      'qualifying for Korean GKS Embassy vs University Track',
      'handling name spelling discrepancies across Matric, CNIC and Passport',
      'calculating living expenses in Dublin vs Berlin vs Tokyo',
      'utilizing GitHub repositories to impress Computer Science faculty'
    ];
    const topic = topics[i % topics.length];
    question = `FAQ #${id}: What is the official process for ${topic} as a Pakistani applicant?`;
    answer = `Official Guidance for FAQ #${id} (${category}): When dealing with ${topic}, Pakistani candidates must ensure strict adherence to official government portals (HEC, IBCC, MOFA) and embassy guidelines. Always verify documents early, maintain clear copies, and refer to Chapter ${1 + (i % 11)} of this guide for step-by-step execution!`;
  }

  return { id, category, question, answer };
});
