import { AttestationStep } from '../types';

export const attestationData: AttestationStep[] = [
  {
    documentType: 'Matriculation (SSC / 10th Class) Marksheet & Certificate',
    sequence: [
      '1. School Character Certificate & Record verification',
      '2. BSEK Karachi Board Verification (Sealed envelope for IBCC)',
      '3. IBCC Attestation (Karachi Regional Office)',
      '4. MOFA Attestation (Ministry of Foreign Affairs Karachi Camp Office)',
      '5. Destination Embassy Legalization (if required)'
    ],
    authorityName: 'Board of Secondary Education Karachi (BSEK) & Inter Board Coordination Commission (IBCC)',
    karachiOfficeLocation: 'BSEK: Block 5, Nazimabad, Karachi. IBCC: Federal B Area, Block 14, near Water Pump, Karachi.',
    lahoreOfficeLocation: 'BISE Lahore: 86-Mozang Road, Lahore. IBCC: Queen’s Road, Lahore.',
    islamabadOfficeLocation: 'FBISE: Sector H-8/4, Islamabad. IBCC Secretariat: Plot No. 25, Street 38, Sector G-10/4, Islamabad.',
    onlineProcess: 'IBCC e-Portal (attest.ibcc.edu.pk): Register account -> Select document details -> Select Walk-in OR TCS Courier Service -> Pay fee online via 1Bill / EasyPaisa -> Schedule appointment.',
    physicalProcess: '1. Visit BSEK Nazimabad for verification counter -> Get sealed verification envelope. 2. Take sealed envelope + original marksheet/certificate to IBCC Office. 3. Submit at counter after token call -> Collect attested documents with QR Code sticker.',
    courierProcess: 'TCS Courier Service authorized by IBCC. Visit designated TCS Express Center in Karachi (Clifton, Gulshan, Saddar) -> Hand over original documents + BSEK sealed envelope + copy of CNIC -> TCS handles IBCC submission and delivers back in 5-7 working days.',
    feesApprox: 'BSEK Verification: ~Rs. 1,200 - 2,000. IBCC Attestation: ~Rs. 1,200 per original document, ~Rs. 600 per copy. MOFA: ~Rs. 500 per document sticker.',
    commonProblems: [
      'Name or Father Name spelling mismatch between Matric Certificate, CNIC, and Passport.',
      'Unsealed or tampered Board Verification envelope rejected by IBCC.',
      'Laminated documents (IBCC cannot affix QR sticker on plastic lamination).'
    ],
    solutions: [
      'Get Board Correction done at BSEK Nazimabad BEFORE applying for IBCC attestation.',
      'Ensure BSEK seals the verification envelope with official stamp across the flap; do NOT open it yourself.',
      'Delaminate documents carefully at a professional print shop prior to appointment.'
    ]
  },
  {
    documentType: 'Intermediate (HSC / 12th Class) Marksheet & Certificate',
    sequence: [
      '1. College Record Clearance',
      '2. BIEK Karachi Board Verification (Sealed envelope)',
      '3. IBCC Attestation (QR code sticker)',
      '4. MOFA Attestation',
      '5. Embassy Attestation'
    ],
    authorityName: 'Board of Intermediate Education Karachi (BIEK) & IBCC',
    karachiOfficeLocation: 'BIEK: Bakhtiyari Youth Center, North Nazimabad, Karachi. IBCC: Block 14, FB Area, Karachi.',
    lahoreOfficeLocation: 'BISE Lahore, Mozang Road & IBCC Lahore.',
    islamabadOfficeLocation: 'FBISE H-8/4 & IBCC Secretariat G-10/4, Islamabad.',
    onlineProcess: 'IBCC Online Portal application. Pay voucher online via Mobile Banking.',
    physicalProcess: 'Visit BIEK North Nazimabad for Board Verification -> Visit IBCC FB Area for ticket token submission.',
    courierProcess: 'TCS Student Express Service available across Karachi.',
    feesApprox: 'BIEK Verification: ~Rs. 1,500. IBCC Attestation: ~Rs. 1,200 per original.',
    commonProblems: [
      'Passing year discrepancies.',
      'Gap certificate missing for private candidates.'
    ],
    solutions: [
      'Verify BIEK record in advance at Nazimabad office.',
      'Obtain official college leaving certificate.'
    ]
  },
  {
    documentType: 'Bachelor Degree (BS Computer Science / Software Engineering 4-Year)',
    sequence: [
      '1. University Controller of Examinations Verification (e.g. FAST NUCES, NED, KU, IBA, SZABIST, SSUET)',
      '2. HEC Higher Education Commission e-Portal Registration & Document Upload',
      '3. HEC Attestation (Walk-in at Gulshan Center OR TCS Courier)',
      '4. MOFA Karachi Camp Office Attestation',
      '5. Foreign Embassy / VFS Legalization'
    ],
    authorityName: 'Higher Education Commission (HEC) Pakistan & Ministry of Foreign Affairs (MOFA)',
    karachiOfficeLocation: 'HEC Regional Center Karachi: Block 1, Scheme 24, Gulshan-e-Iqbal, near NIPA Chowrangi, Karachi. MOFA: Camp Office, Shahrah-e-Faisal, near FTC Building, Karachi.',
    lahoreOfficeLocation: 'HEC Regional Centre: 56-P, Gulberg III, Lahore. MOFA: 106-A, New Muslim Town, Lahore.',
    islamabadOfficeLocation: 'HEC Head Office: Sector H-9, Islamabad. MOFA Headquarters: Constitution Avenue, G-5/1, Islamabad.',
    onlineProcess: 'HEC e-Portal (eportal.hec.gov.pk): Create profile -> Enter profile info & academic history from Matric to BS -> Upload scanned front/back color copies -> Select Walk-in (Karachi Center) OR Courier (TCS) -> Scrutiny by HEC Officers -> After email approval, pay fee voucher -> Schedule walk-in date OR hand over to TCS.',
    physicalProcess: 'For HEC Walk-in: Arrive at HEC Gulshan Karachi Center on scheduled appointment date with original Matric, Inter, BS Transcript, BS Degree + 1 set of photocopies -> Document verification counter -> Collect HEC QR Code embossed stickers on back of original degree and transcript. For MOFA Walk-in: Visit MOFA Camp Office Shahrah-e-Faisal early morning with HEC attested degree -> Buy MOFA digital stamp voucher -> Counter submission -> Collect same day afternoon.',
    courierProcess: 'TCS HEC Express: Hand over HEC approved application form + original documents to TCS Express Center in Karachi -> TCS delivers to HEC -> HEC attests and TCS returns to your doorstep in 10-12 working days.',
    feesApprox: 'HEC Fee: Rs. 1,000 per original document, Rs. 700 per copy. MOFA Fee: Rs. 500 per document stamp. TCS Handling Fee: ~Rs. 800 - 1,200.',
    commonProblems: [
      'Degree not recognized by HEC or university main campus not registered on HEC e-portal.',
      'Transcript missing total credit hours, CGPA, or grading formula on back side.',
      'HEC profile data entry error (e.g., entering wrong passing year or roll number matching transcripts).'
    ],
    solutions: [
      'Ensure your university is HEC recognized and BS program was accredited at time of graduation.',
      'Request University Examination department to issue an official Grading System Certificate on letterhead if missing on transcript.',
      'Double check every transcript number and date on HEC portal before clicking submit.'
    ]
  },
  {
    documentType: 'Police Clearance Certificate (Character Certificate)',
    sequence: [
      '1. Visit Police Khidmat Markaz / Special Branch Office Karachi',
      '2. Fingerprint scanning & background verification',
      '3. Certificate issuance by Senior Superintendent of Police (SSP)',
      '4. MOFA Attestation (Mandatory for Visa Applications)'
    ],
    authorityName: 'Sindh Police Special Branch Karachi / Police Khidmat Markaz',
    karachiOfficeLocation: 'Police Khidmat Markaz Karachi (Multiple branches: DIG South Office Clifton, Central Police Office I.I. Chundrigar Road, Police Station Nazimabad, Saddar). MOFA Camp Office Shahrah-e-Faisal.',
    lahoreOfficeLocation: 'Police Khidmat Markaz PKM Lahore (All major divisions).',
    islamabadOfficeLocation: 'Islamabad Police Khidmat Markaz Sector F-6 / G-11.',
    onlineProcess: 'Sindh Police Online Portal (khidmat.sindhpolice.gov.pk) or Karachi Police App: Fill personal details -> Upload CNIC, Passport, 2 passport size photos -> Select nearest Khidmat Markaz for biometrics appointment.',
    physicalProcess: 'Visit Police Khidmat Markaz with CNIC, Passport, 2 photographs, neighbor CNIC copy -> Bio-metric fingerprinting -> Processing fee payment -> Certificate issued within 3-5 working days -> Take to MOFA Karachi for attestation sticker.',
    courierProcess: 'Physical presence required for biometric fingerprinting at Police Khidmat Markaz Karachi.',
    feesApprox: 'Police Clearance Fee: ~Rs. 500 - 1,000. MOFA Attestation: Rs. 500.',
    commonProblems: [
      'Address mismatch between CNIC and residence location in Karachi.',
      'Expiry of Police clearance (Most embassies require police certificate issued within last 3 to 6 months).'
    ],
    solutions: [
      'Carry utility bill (K-Electric / SSGC) of current residential address in Karachi.',
      'Get Police Clearance 1 month prior to Visa interview, not way in advance.'
    ]
  }
];
