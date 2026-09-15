/* ============================================================================
   CV content — Carlos Rodrigo Rivero
   Source: scripts/generate_cvs.py (same copy as the PDFs)

   Edit ONLY this file to change the content. index.html stays untouched.
   ========================================================================== */

const CONFIG = {
  name: "Carlos Rodrigo Rivero",
  photo: "assets/photo.jpg",

  // Main site. Drives the <link rel="canonical"> so Google knows which one is
  // the original and does not treat this copy as duplicate content.
  canonical: "https://carlosrodrigorivero.web.app",

  email:    "carlosrodrivero@gmail.com",
  site:     "carlosrodrigorivero.web.app",
  github:   "https://github.com/carlosrodrigorivero",
  linkedin: "https://www.linkedin.com/in/carlos-rodrigo-rivero/",
  phone:    "+34 616 98 82 41",

  // false = the phone number is NOT shown on the public site (it is still in
  // the PDFs). Set it to true to show it. See README.md.
  showPhone: false,
};

const EDU = {
  es: [["Doctorado Sist. Información", "EID-URJC · 2022–Actualidad"],
       ["Máster Ciberseguridad + Auditor Seg.", "Esneca · 2025–2026"],
       ["HPS — Habilitación Pers. Seguridad", "CNI"],
       ["Máster Inf. Gráfica & VR", "URJC · Sept 2021 – Mar 2022"],
       ["Grado Ing. Informática", "URJC · Sept 2016 – Jun 2020"],
       ["Inglés C1", "Esc. Oficial de Idiomas · Sept 2020"]],
  en: [["PhD Information Systems", "EID-URJC · 2022–Present"],
       ["MSc Cybersecurity + Security Auditor", "Esneca · 2025–2026"],
       ["HPS — Security Personnel Clearance", "CNI"],
       ["MSc Computer Graphics & VR", "URJC · Sept 2021 – Mar 2022"],
       ["BSc Computer Engineering", "URJC · Sept 2016 – Jun 2020"],
       ["English C1", "Official Language School · Sept 2020"]],
};

const LANGS = {
  es: [["Castellano (nativo)", 5], ["Inglés C1", 4], ["Italiano B2", 3], ["Alemán A1", 1]],
  en: [["Spanish (native)", 5], ["English C1", 4], ["Italian B2", 3], ["German A1", 1]],
};

const UI = {
  // "location" is the city only, deliberately. This file is served publicly.
  es: { profile: "Perfil", lang: "Idioma", download: "Descargar PDF",
        contact: "Contacto", location: "Madrid",
        skip: "Ir al contenido", theme: "Cambiar tema",
        alsoAt: "También en", langName: "Español" },
  en: { profile: "Profile", lang: "Language", download: "Download PDF",
        contact: "Contact", location: "Madrid",
        skip: "Skip to content", theme: "Toggle theme",
        alsoAt: "Also at", langName: "English" },
};

/* --------------------------------------------------------------------------
   PROFILES
   sidebar:  list of sidebar sections. type = bullets | dots | list | edu
   sections: list of body sections.    type = exp | proj | research
   -------------------------------------------------------------------------- */

const PROFILES = [
{
  id: "cto",
  accent: "#8A4FFF", sidebarBg: "#19103A", headerBg: "#201548",
  label:    { es: "Director IT", en: "IT Director" },
  pdf:      { es: "pdf/CV_DirectorIT_Innovacion_CarlosRodrigoRivero.pdf",
              en: "pdf/CV_ITDirector_Innovation_CarlosRodrigoRivero.pdf" },
  subtitle: { es: "Director IT · Investigador PhD · Innovación & Defensa Europea",
              en: "IT Director · PhD Researcher · Innovation & European Defence" },
  pitch: {
    es: "Director de IT e investigador doctoral que une ejecución empresarial con innovación académica. Lidero la estrategia tecnológica de Spika Tech mientras investigo la detección temprana del Parkinson mediante realidad virtual e IA (PhD en curso). Experiencia en proyectos del Fondo Europeo de Defensa con Indra, Airbus, Thales y Leonardo. El perfil para quien busca liderazgo tecnológico con visión de futuro.",
    en: "IT Director and doctoral researcher who bridges business execution with academic innovation. I lead Spika Tech's technology strategy while conducting PhD research on early Parkinson detection through VR and AI. I have hands-on experience in European Defence Fund projects in consortia with Indra, Airbus, Thales and Leonardo — the profile for organisations seeking technology leadership with a vision for the future.",
  },
  sidebar: {
    es: [
      { title: "Áreas de Liderazgo", type: "bullets", items: [
        "Estrategia IT / CTO track", "Proyectos EU (EDF)",
        "I+D: HCI / IA / Salud digital", "Detección Parkinson con VR",
        "Infraestructura cloud multi-cloud", "Transformación digital",
        "Equipos técnicos multidisciplinares"] },
      { title: "Stack Tecnológico", type: "dots", items: [
        ["Cloud: GCP / AWS / Azure", 5], ["Angular / TypeScript", 5],
        ["Python / ML / IA", 5], ["Docker / DevOps", 4],
        ["Unity / VR / XR", 4], ["Firebase / PostgreSQL", 4]] },
      { title: "Idiomas", type: "dots", items: LANGS.es },
      { title: "Formación", type: "edu", items: EDU.es },
      { title: "Logros Clave", type: "bullets", items: [
        "EDF: CASSATA · SESIOP · EISNET", "Consorcio: Airbus, Indra, Thales",
        "SaaS en producción: GCP / Azure / AWS", "Disponibilidad inmediata"] },
    ],
    en: [
      { title: "Leadership Areas", type: "bullets", items: [
        "IT Strategy / CTO track", "EU projects (EDF)",
        "R&D: HCI / AI / Digital Health", "Parkinson detection with VR",
        "Multi-cloud infrastructure", "Digital transformation",
        "Multidisciplinary technical teams"] },
      { title: "Technology Stack", type: "dots", items: [
        ["Cloud: GCP / AWS / Azure", 5], ["Angular / TypeScript", 5],
        ["Python / ML / AI", 5], ["Docker / DevOps", 4],
        ["Unity / VR / XR", 4], ["Firebase / PostgreSQL", 4]] },
      { title: "Languages", type: "dots", items: LANGS.en },
      { title: "Education", type: "edu", items: EDU.en },
      { title: "Key Highlights", type: "bullets", items: [
        "EDF: CASSATA · SESIOP · EISNET", "Consortium: Airbus, Indra, Thales",
        "SaaS in production: GCP / Azure / AWS", "Immediate availability"] },
    ],
  },
  sections: {
    es: [
      { title: "Trayectoria Profesional", type: "exp", items: [
        ["Director de IT", "Spika Tech, S.L.", "Dic 2024 – Actualidad", [
          "Definición y ejecución de la estrategia tecnológica corporativa",
          "Gestión del equipo IT; KPIs de disponibilidad, rendimiento y evolución de plataformas",
          "Evaluación e integración de IA, VR y blockchain en la hoja de ruta empresarial",
          "Definición de cuadro de mando tecnológico y reporte ejecutivo trimestral"]],
        ["Jefe de Proyecto — Fondo Europeo de Defensa", "Spika Tech, S.L.", "Sept 2023 – Actualidad", [
          "Representación técnica en consorcios EDF: CASSATA, SESIOP y EISNET",
          "Interlocución directa con Indra, Airbus, Thales y Leonardo; compliance y entregables UE",
          "Presentaciones ante comités de evaluación europeos; coordinación internacional",
          "Gestión del presupuesto europeo y supervisión del compliance financiero ante la CE"]],
        ["Jefe de Desarrollo Web — Blockchain & App Formativa", "Spika Tech, S.L.", "Abr 2022 – Dic 2024", [
          "Arquitectura y desarrollo fullstack de apps blockchain y plataforma formativa",
          "Dirección del equipo de desarrollo; automatización de procesos y CI/CD"]],
        ["ML Engineer — Sensores & Radar (RMMS)", "Grupo SABIO / Spika Tech", "Nov 2021 – Abr 2022", [
          "Modelos ML sobre sensores militares y radar; pipeline completo en Python / Anaconda"]],
      ]},
      { title: "Investigación Doctoral — I+D de Impacto Social", type: "research", items: [
        ["Detección temprana del Parkinson mediante VR e IA",
         "EID-URJC · Doctorado en Sistemas de la Información · 2022 – Actualidad",
         "Diseño y desarrollo de simulaciones en Unity con Leap Motion Controller para captura de movimiento de manos. Aplicación de ML (MediaPipe, Python) para identificar patrones motores predictivos del Parkinson. Proyecto MotionInsight Hub. Cruce de HCI, salud digital e IA."]]},
      { title: "Por qué Carlos Rodrigo Rivero", type: "proj", items: [
        ["Perfil triple único", "Desarrollador → Jefe de Proyecto → Director IT. Visibilidad end-to-end del negocio tecnológico."],
        ["Consorcio EDF de primer nivel", "Colaboración activa con Indra, Airbus, Thales y Leonardo en proyectos de defensa europeos."],
        ["Investigación de impacto social", "Detección de Parkinson en etapas tempranas con VR — donde la tecnología salva vidas."]]},
    ],
    en: [
      { title: "Professional Background", type: "exp", items: [
        ["IT Director", "Spika Tech, S.L.", "Dec 2024 – Present", [
          "Definition and execution of corporate technology strategy",
          "IT team management; availability, performance and platform evolution KPIs",
          "Evaluation and integration of AI, VR and blockchain into the business roadmap",
          "Technology KPI dashboard definition and quarterly executive board reporting"]],
        ["Project Manager — European Defence Fund", "Spika Tech, S.L.", "Sept 2023 – Present", [
          "Technical representation in EDF consortia: CASSATA, SESIOP and EISNET",
          "Direct liaison with Indra, Airbus, Thales and Leonardo; EU compliance and deliverables",
          "Presentations to EU evaluation committees; international team coordination",
          "EU budget management and financial compliance oversight before the European Commission"]],
        ["Web Development Lead — Blockchain & Training Platform", "Spika Tech, S.L.", "Apr 2022 – Dec 2024", [
          "Fullstack architecture and development of blockchain and training apps",
          "Development team leadership; process automation and CI/CD"]],
        ["ML Engineer — Sensors & Radar (RMMS)", "SABIO Group / Spika Tech", "Nov 2021 – Apr 2022", [
          "ML models on military sensors and radar data; full Python / Anaconda pipeline"]],
      ]},
      { title: "Doctoral Research — High-Impact R&D", type: "research", items: [
        ["Early Parkinson detection through VR and AI",
         "EID-URJC · PhD in Information Systems · 2022 – Present",
         "Design and development of Unity simulations with Leap Motion Controller for hand-movement capture. Application of ML (MediaPipe, Python) to identify predictive motor patterns of Parkinson's disease. MotionInsight Hub project. Research at the crossroads of HCI, digital health and artificial intelligence."]]},
      { title: "Why Carlos Rodrigo Rivero", type: "proj", items: [
        ["Unique triple profile", "Developer → Project Manager → IT Director. Full end-to-end visibility of the technology business."],
        ["Top-tier EDF consortium", "Active collaboration with Indra, Airbus, Thales and Leonardo on European defence projects."],
        ["Social-impact research", "Early Parkinson detection using VR — where technology genuinely saves lives."]]},
    ],
  },
},

/* The "Project Manager" and "Developer" profiles were pulled on 15 Sept 2026:
   the site publishes the IT Director one only. They are kept outside this repo,
   in ../web-archive/cv-data-3profiles.js, and their PDFs in CVs/Carlos/.
   The profile switcher hides itself while there is a single profile. */
];
