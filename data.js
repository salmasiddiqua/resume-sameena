/* ==========================================================================
   ✏️  EDIT ME — ALL SITE CONTENT LIVES IN THIS FILE.
   Replace the placeholder text below with the doctor's real information.
   Everything else on the page updates automatically.
   ========================================================================== */

const DOCTOR_DATA = {

  /* ---------- BASIC INFO ---------- */
  name: "Dr. Sameena Tabbasum",                // Full display name
  firstName: "Sameena",                        // Used for monogram initials
  credentials: "MD, FACC",                     // Shown as eyebrow text in the hero
  title: "Interventional Cardiologist",        // Job title / specialty
  tagline: "Compassionate heart care, driven by research — helping patients live longer, healthier lives.",
  photo: "",                                   // Set to an image path (e.g. "assets/dr-mitchell.jpg") to show a real photo; leave "" for the initials monogram
  location: "Boston, Massachusetts, USA",

  /* ---------- HERO STATS (shown in the strip under the hero) ---------- */
  stats: [
    { value: 18, suffix: "+", label: "Years of Practice" },
    { value: 12, suffix: "k+", label: "Patients Treated" },
    { value: 50, suffix: "+", label: "Papers Published" },
    { value: 15, suffix: "", label: "Awards & Honors" }
  ],

  /* ---------- ABOUT ---------- */
  aboutParagraphs: [
    "Dr. Sameena Tabbasum is an interventional cardiologist with nearly two decades of experience treating complex coronary and valvular heart disease. She is board-certified in cardiovascular disease and interventional cardiology, and serves as Director of the Cardiac Catheterization Laboratory at Tabbasum Heart & Vascular Clinic in Boston.",
    "Her philosophy is simple: every patient deserves to be treated with the same care and attention she would want for her own family. She believes in combining the latest evidence-based medicine with genuine listening, so that each treatment plan is as personal as the patient behind it.",
    "Beyond the catheterization lab, Dr. Mitchell is an active clinical researcher investigating novel stent technologies and is a passionate advocate for preventive heart health in underserved communities."
  ],
  credentialChips: ["MBBS", "MD", "FACC", "FSCAI"],
  languages: ["English", "Spanish"],
  memberships: [
    "American College of Cardiology",
    "Society for Cardiovascular Angiography & Interventions",
    "American Heart Association"
  ],

  /* ---------- SERVICES / SPECIALTIES ---------- */
  services: [
    {
      title: "Coronary Angioplasty & Stenting",
      description: "Minimally invasive treatment for blocked arteries using balloon angioplasty and drug-eluting stents.",
      tag: "Procedure"
    },
    {
      title: "Structural Heart Interventions",
      description: "TAVR, mitral clip, and other catheter-based repairs for heart valve disease — no open surgery needed.",
      tag: "Procedure"
    },
    {
      title: "Heart Failure Management",
      description: "Personalized medication, device, and lifestyle plans to help you live well with a weakened heart.",
      tag: "Condition"
    },
    {
      title: "Hypertension & Cholesterol Care",
      description: "Modern prevention strategies to control blood pressure and cholesterol and reduce heart-attack risk.",
      tag: "Prevention"
    },
    {
      title: "Second Opinions",
      description: "A thorough review of your diagnosis and treatment plan by an expert — typically within 48 hours.",
      tag: "Service"
    },
    {
      title: "Preventive Heart Screening",
      description: "Comprehensive risk assessment with advanced imaging and personalized prevention roadmaps.",
      tag: "Prevention"
    }
  ],

  /* ---------- STUDIES / EDUCATION (most recent first) ---------- */
  education: [
    {
      period: "2004 – 2008",
      degree: "Fellowship, Interventional Cardiology",
      institution: "Massachusetts General Hospital, Harvard Medical School",
      detail: "Advanced training in complex coronary intervention, structural heart disease, and intracoronary imaging."
    },
    {
      period: "2001 – 2004",
      degree: "Residency, Internal Medicine",
      institution: "Johns Hopkins Hospital, Baltimore",
      detail: "Chief resident in the final year; recipient of the Osler Resident Teaching Award."
    },
    {
      period: "1997 – 2001",
      degree: "Doctor of Medicine (MD)",
      institution: "Johns Hopkins University School of Medicine",
      detail: "Graduated with honors (AOA); research thesis on endothelial function in early atherosclerosis."
    },
    {
      period: "1993 – 1997",
      degree: "Bachelor of Medicine, Bachelor of Surgery (MBBS)",
      institution: "University of Toronto, Faculty of Medicine",
      detail: "Graduated with distinction; recipient of the Governor General's Academic Medal."
    }
  ],

  /* ---------- WORK EXPERIENCE (most recent first) ---------- */
  experience: [
    {
      period: "2014 – Present",
      role: "Director, Cardiac Catheterization Laboratory",
      organization: "Tabbasum Heart & Vascular Clinic",
      location: "Boston, MA",
      highlights: [
        "Lead a 24-person team performing over 1,800 interventional procedures annually.",
        "Established a radial-first access program, reducing bleeding complications by 40%.",
        "Mentor fellows and early-career interventionalists through the clinic's teaching program."
      ]
    },
    {
      period: "2010 – 2014",
      role: "Attending Interventional Cardiologist",
      organization: "Brigham and Women's Hospital",
      location: "Boston, MA",
      highlights: [
        "Performed high-volume PCI and structural interventions, including TAVR program development.",
        "Served on the hospital's STEMI quality-improvement committee.",
        "Co-authored institutional guidelines for antiplatelet therapy after stenting."
      ]
    },
    {
      period: "2008 – 2010",
      role: "Staff Cardiologist",
      organization: "Massachusetts General Hospital",
      location: "Boston, MA",
      highlights: [
        "Provided inpatient and outpatient cardiovascular care across the general cardiology service.",
        "Contributed to the coronary imaging research group studying IVUS-guided stenting."
      ]
    }
  ],

  /* ---------- ACHIEVEMENTS & AWARDS ---------- */
  achievements: [
    {
      title: "Distinguished Clinician Award",
      year: "2023",
      organization: "American College of Cardiology",
      description: "Recognized for sustained excellence in patient care and clinical leadership in interventional cardiology."
    },
    {
      title: "Best Research Presentation",
      year: "2021",
      organization: "SCAI Annual Meeting",
      description: "For the multicenter study on bioresorbable scaffolds in diabetic patients."
    },
    {
      title: "Women in Cardiology Leadership Award",
      year: "2019",
      organization: "American Heart Association",
      description: "Honored for mentoring women in interventional cardiology and advancing diversity in the field."
    },
    {
      title: "Fellow of the Society for Cardiovascular Angiography & Interventions",
      year: "2014",
      organization: "SCAI",
      description: "Elected fellowship in recognition of expertise and contributions to interventional cardiology."
    },
    {
      title: "Master Clinician Award",
      year: "2012",
      organization: "Brigham and Women's Hospital",
      description: "Peer-nominated award for exemplary bedside care and clinical teaching."
    },
    {
      title: "Osler Resident Teaching Award",
      year: "2004",
      organization: "Johns Hopkins Hospital",
      description: "Awarded to the resident with the most outstanding contribution to medical education."
    }
  ],

  /* ---------- PAPERS PUBLISHED (most recent first) ---------- */
  publications: [
    {
      year: "2025",
      title: "Three-Year Outcomes of Bioresorbable Scaffolds in Diabetic Patients: A Multicenter Registry",
      authors: "Tabbasum S, Chen R, Alvarez J, et al.",
      journal: "Journal of the American College of Cardiology: Cardiovascular Interventions",
      link: "#" // Paste a DOI / PubMed URL when available
    },
    {
      year: "2024",
      title: "Radial Versus Femoral Access in Primary PCI: An Updated Meta-Analysis",
      authors: "Tabbasum S, Okafor T, Delgado P, et al.",
      journal: "Catheterization and Cardiovascular Interventions",
      link: "#"
    },
    {
      year: "2023",
      title: "Machine Learning Prediction of Stent Restenosis from Intravascular Imaging",
      authors: "Tabbasum S, Huang L, Svensson K, et al.",
      journal: "Circulation: Cardiovascular Imaging",
      link: "#"
    },
    {
      year: "2022",
      title: "Sex Differences in Outcomes After Transcatheter Aortic Valve Replacement",
      authors: "Tabbasum S, Patel R, Kim J, et al.",
      journal: "American Heart Journal",
      link: "#"
    },
    {
      year: "2020",
      title: "Early Discharge After Uncomplicated STEMI: A Propensity-Matched Analysis",
      authors: "Tabbasum S, Garcia M, Nguyen H, et al.",
      journal: "European Heart Journal — Acute Cardiovascular Care",
      link: "#"
    },
    {
      year: "2018",
      title: "Physician Communication and Medication Adherence After PCI: A Longitudinal Study",
      authors: "Tabbasum S, Williams D, O'Brien K, et al.",
      journal: "Patient Education and Counseling",
      link: "#"
    }
  ],

  /* ---------- CURRENT RESEARCH ---------- */
  research: [
    {
      title: "AI-Guided PCI Planning",
      description: "Multicenter trial using machine learning on IVUS/OCT imaging to plan stent sizing and reduce restenosis rates.",
      status: "Ongoing",               // use: Ongoing / Clinical Trial / Grant-funded
      statusClass: "ongoing"
    },
    {
      title: "Bioresorbable Scaffolds in High-Risk Patients",
      description: "Five-year follow-up study evaluating safety and efficacy of bioresorbable scaffolds in diabetic and multivessel disease.",
      status: "Clinical Trial",
      statusClass: "trial"
    },
    {
      title: "Community Heart-Health Screening",
      description: "Grant-funded program bringing free cardiovascular screening and education to underserved neighborhoods across Boston.",
      status: "Grant-funded",
      statusClass: "grant"
    }
  ],

  /* ---------- GOALS & VISION ---------- */
  visionQuote: "\u201CMy goal is a future where no patient faces heart disease alone — where prevention, research, and compassionate care work together to give everyone a longer, fuller life.\u201D",
  goals: [
    {
      title: "Patient Care",
      description: "Expand access to advanced, affordable cardiac care — including same-week appointments and second-opinion services."
    },
    {
      title: "Research",
      description: "Publish findings from the AI-guided PCI trial and bring personalized, imaging-based stent planning into routine practice."
    },
    {
      title: "Community",
      description: "Train 100 community health workers in CPR and heart-health education over the next five years."
    }
  ],

  /* ---------- FAQ ---------- */
  faqs: [
    {
      q: "How quickly can I get an appointment?",
      a: "New patients are usually seen within 1–2 weeks. Urgent concerns are triaged daily by our clinical team, and second opinions are typically reviewed within 48 hours."
    },
    {
      q: "Do you accept my insurance?",
      a: "We work with most major insurance plans, including Medicare and Medicaid. Send us a message with your plan name and we'll verify your coverage before your visit."
    },
    {
      q: "What should I bring to my first visit?",
      a: "Bring your photo ID, insurance card, a list of current medications, and any recent test results or records. Arriving 15 minutes early lets us get you checked in smoothly."
    },
    {
      q: "Is a second opinion worth it?",
      a: "If you've been told you need heart surgery or a complex procedure, a second opinion is almost always worthwhile. We review your records, re-examine your imaging, and give you a clear, honest recommendation."
    },
    {
      q: "How long is recovery after stenting?",
      a: "Most patients go home the same day or the next morning. You can typically return to desk work within a week and full activity within 2–4 weeks — your team gives you a detailed plan."
    },
    {
      q: "Is this website form confidential?",
      a: "Yes. Your message is encrypted in transit and only our clinical team sees it. We use it to respond to you and never share your information. For anything urgent, please call the clinic instead."
    }
  ],

  /* ---------- REFERRING PHYSICIANS ---------- */
  referral: {
    heading: "For Referring Physicians",
    text: "We accept direct referrals for complex coronary, valvular, and structural heart cases. You'll receive a same-day acknowledgement, rapid scheduling for your patient, and a full consult report within 48 hours of the visit.",
    cta: "Refer a Patient",
    email: "referrals@sameenatabbasum.example"
  },

  /* ---------- INSURANCE & CLINIC INFO ---------- */
  insurance: ["Medicare", "Medicaid", "Blue Cross Blue Shield", "Aetna", "Cigna", "UnitedHealthcare", "Harvard Pilgrim"],
  directionsNote: "Free validated parking in the Beacon Street garage. Entrance is on the Charles Street side, 4th floor.",
  emergencyNote: "For a medical emergency, call 911 or go to the nearest emergency room. This site is not monitored 24/7.",

  /* ---------- TESTIMONIALS ---------- */
  testimonials: [
    {
      quote: "Dr. Mitchell took the time to explain every step of my procedure and made me feel like a person, not a patient. I trusted her completely.",
      name: "Margaret T.",
      role: "Patient, 68"
    },
    {
      quote: "After my heart attack, her team coordinated everything — from rehab to medication — and I'm back to running. I can't thank her enough.",
      name: "James R.",
      role: "Patient, 54"
    },
    {
      quote: "As a referring physician, I value her judgment and her swift communication. She is the colleague I would want for my own family.",
      name: "Dr. Anita Rao",
      role: "Primary Care Physician"
    }
  ],

  /* ---------- CONTACT DETAILS ---------- */
  contact: {
    clinic: "Tabbasum Heart & Vascular Clinic",
    address: "200 Beacon Street, Suite 400, Boston, MA 02116",
    email: "sameena.tabbasum@example.com",
    phone: "+1 (617) 555-0134",
    phoneHref: "+16175550134",
    hours: "Mon – Fri: 8:00 AM – 5:00 PM",
    responseNote: "Questions are typically answered within 1–2 business days. For urgent concerns, please call the clinic directly."
  },

  social: [
    { label: "LinkedIn",  url: "#" },
    { label: "Google Scholar", url: "#" },
    { label: "ORCID",    url: "#" },
    { label: "X (Twitter)", url: "#" }
  ],

  /* ---------- ASK-A-QUESTION FORM SETTINGS ----------
     To receive question submissions by email (free, no server needed):
       1. Create a free account at https://formspree.io
       2. Create a new form and copy its form ID (e.g. "mzbqkxyz")
       3. Paste it below. Submissions will be emailed to the address
          you set in Formspree.
     Leave empty ("") to keep the form working with an on-page notice. */
  form: {
    formspreeFormId: "",
    topicOptions: [
      "General question",
      "Appointment request",
      "Second opinion",
      "Treatment inquiry",
      "Research collaboration",
      "Media inquiry"
    ]
  }
};