/* ==========================================================================    ✏️  EDIT ME: ALL SITE CONTENT LIVES IN THIS FILE.
   Replace the placeholder text below with the doctor's real information.
   Everything else on the page updates automatically.
   ========================================================================== */

const DOCTOR_DATA = {

  /* ---------- BASIC INFO ---------- */
  name: "Dr. Sameena Tabassum",                // Full display name
  firstName: "Sameena",                        // Used for monogram initials
  credentials: "MBBS",                     // Shown as eyebrow text in the hero
  title: "Doc in Training. A Writer at Heart",        // Job title / specialty
  tagline: "Caring for children with curiosity, attention and purpose, and learning from every family along the way",
  photo: "assets/photo.jpg",                   // Set to an image path (e.g. "assets/dr-mitchell.jpg") to show a real photo; leave "" for the initials monogram
  location: "",

  /* ---------- HERO STATS (shown in the strip under the hero) ---------- */
  stats: [
    { value: 5, suffix: "+", label: "Publications & Writings" },
    { value: 5, suffix: "", label: "Languages Spoken" },
    { value: 5, suffix: "", label: "Professional Memberships" },
    { value: 5, suffix: "+", label: "Years of Medical Training" }
  ],

  /* ---------- ABOUT ---------- */
  aboutParagraphs: [
    "I am a trainee doc, lifelong learner, and storyteller who finds meaning in the spaces where medicine meets humanity.",
    "My philosophy is simple: every patient deserves to be treated with the same care and attention I would want for my own family. I believe in combining the latest evidence-based medicine with genuine listening, so that each treatment plan is as personal as the patient behind it.",
    "Medicine has taught me to listen closely, to patients, to families, and to the stories behind a diagnosis. Writing has given me another way to do the same. Over the years, I\u2019ve written about medicine, childhood, healthcare, and the people who make each experience memorable.",
    "I bring these two worlds together: a collection of my writing, reflections, and ideas from the journey of becoming a physician."
  ],
  credentialChips: ["MBBS"],
  languages: ["English", "Urdu", "Telugu", "Tamil", "Hindi", "Learning Spanish"],
  memberships: [
    "American Academy of Pediatrics",
    "Andhra Pradesh  Medical Council",
    "Global Association of Indian Medical Students",
    "Medical Students Association of India",
    "Newborn Brain Society"
  ],

  /* ---------- My Writings (most recent first) ---------- */
  publications: [
    {
      year: "2026",
      title: "Drug Induced Liver Injury with Tuberculosis Treatment",
      journal: "Liver Fellow Network, American Association for the Study of Liver Diseases",
      link: "https://www.aasld.org/liver-fellow-network/core-series/clinical-pearls/drug-induced-liver-injury-tuberculosis-treatment"
    },
    {
      year: "2026",
      title: "Rare, But Not Remote",
      journal: "American Academy of Pediatrics: Section on Global Health, SOGH 2026, Volume 7, Number 1, Page 44, Spring 2026",
      link: "https://images.magnetmail.net/images/clients/AAP_MASTER/attach/SOGH/SOGH_Newsletter_Spring_2026_Vol_7_No_1.pdf"
    },
    {
      year: "2025",
      title: "Global Resilience: Redefining Global Disaster Management Strategies, Lessons from COVID-19 & the Call for United Action",
      journal: "Lexicon, 52nd Edition, Around the World",
      link: "https://www.lexiconin.com/52/global-resilience-redefining-global-disaster-management-strategies-lessons-from-covid-19-the-call-for-united-action/"
    },
    {
      year: "2024",
      title: "A Special Teacher's Day Memory (the power of a second chance) & THE PATIENT'S CORNER: BEDSIDE CHRONICLES, GOOGLING A DIAGNOSIS",
      journal: "AIIMS ATMAN Bimonthly Magazine, Volume 3 Issue 5, Designed Theme: Thank You Teachers (Page 11)",
      link: "https://drive.google.com/file/d/1T4_ol1xooMaS7_stPkn3NtTphjsRz08g/view?usp=sharing"
    },
    {
      year: "2023",
      title: "Recognising The Warning Signs Of Stroke: Act F.A.S.T.",
      journal: "International Society for Chronic Illnesses",
      link: "https://www.isci.info/post/recognising-the-warning-signs-of-a-stroke-act-f-a-s-t"
    }
  ],



  /* ---------- GOALS & VISION ---------- */
  visionQuote: "\u201CStill learning. Still writing. Still finding my way.\u201D",
  goals: [
    {
      title: "Patient Care",
      description: "Provide attentive, family-centered care to every child and family I meet, and keep learning from each of them along the way."
    },
    {
      title: "Writing",
      description: "Grow my body of writing about medicine, childhood, and healthcare, and keep giving voice to the stories behind a diagnosis."
    },
    {
      title: "Global Health",
      description: "Deepen my work in global child health, from the AAP Section on Global Health to communities close to home."
    }
  ],

  /* ---------- REFERRING PHYSICIANS / COLLABORATION ---------- */
  referral: {
    heading: "For Colleagues & Collaborators",
    text: "I welcome collaboration with clinicians, educators, and writers working in child health and global medicine, whether it's a shared project, a referral question, or a writing partnership.",
    cta: "Get in Touch",
    email: "sameenatabassumb@gmail.com"
  },



  /* ---------- CONTACT ---------- */
  contact: {
    email: "sameenatabassumb@gmail.com"
  },

  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sameena-tabassum-740901263/" }
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
    topicOptions: []
  }
};