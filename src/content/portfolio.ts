// Contenido editable del portafolio. Para agregar un proyecto, añade un objeto a `projects`.
export type Lang = "es" | "en";
type T = { es: string; en: string };
const t = (es: string, en: string): T => ({ es, en });

export const contact = {
  email: "tsmonse25@gmail.com",
  linkedin: "https://www.linkedin.com/in/m0nsets25",
};

export const ui = {
  nav: { about: t("Sobre mí", "About"), experience: t("Experiencia", "Experience"), projects: t("Proyectos", "Projects"), skills: t("Habilidades", "Skills"), education: t("Formación", "Education"), contact: t("Contacto", "Contact") },
  role: t("Ingeniera en Gestión Empresarial", "Business Management Engineer"),
  heroTitle: t("Analizando para mejorar.", "Analyzing to improve."),
  heroSub: t("Análisis de Datos | Calidad | Mejora Continua", "Data Analytics | Quality | Continuous Improvement"),
  heroIntro: t(
    "Soy Ingeniera en Gestión Empresarial con experiencia en proyectos de calidad, mejora continua y análisis de datos. Me apasiona transformar información en decisiones estratégicas, identificar oportunidades de mejora y contribuir a resultados medibles.",
    "I am a Business Management Engineer with experience in quality, continuous improvement and data analysis projects. I am passionate about turning information into strategic decisions, identifying improvement opportunities and contributing to measurable results.",
  ),
  ctaJourney: t("Conoce mi trayectoria", "Explore my journey"),
  ctaContact: t("Contactar", "Contact me"),
  valueLabel: t("Propuesta de valor", "Value proposition"),
  value: t(
    "Transformar datos en información útil para comprender problemas, fundamentar decisiones, optimizar procesos e impulsar la mejora continua.",
    "Turning data into useful information to understand problems, support decisions, optimize processes and drive continuous improvement.",
  ),
  aboutTitle: t("Sobre mí", "About me"),
  aboutText: [
    t(
      "Combino la gestión empresarial con el análisis de datos y las herramientas de calidad. Me interesa unir el análisis cuantitativo con la comprensión de los procesos organizacionales para identificar riesgos, resolver problemas y mejorar resultados.",
      "I combine business management with data analysis and quality tools. I am interested in bringing quantitative analysis together with an understanding of organizational processes to identify risks, solve problems and improve results.",
    ),
    t(
      "Busco desarrollarme en Data Analytics, Business Intelligence, Quality, Continuous Improvement, Process Improvement y Project Management, en cualquier industria donde los datos y los procesos marquen la diferencia.",
      "I aim to grow in Data Analytics, Business Intelligence, Quality, Continuous Improvement, Process Improvement and Project Management, in any industry where data and processes make the difference.",
    ),
  ],
  strengthsTitle: t("Fortalezas", "Strengths"),
  strengths: [
    t("Pensamiento analítico", "Analytical thinking"),
    t("Resolución de problemas", "Problem solving"),
    t("Aprendizaje continuo", "Continuous learning"),
    t("Organización y disciplina", "Organization & discipline"),
    t("Comunicación", "Communication"),
    t("Colaboración multidisciplinaria", "Cross-functional collaboration"),
    t("Orientación a resultados", "Results orientation"),
  ],
  quote: t(
    "Los datos permiten comprender lo que sucede; la mejora continua permite transformar ese conocimiento en resultados.",
    "Data helps us understand what is happening; continuous improvement turns that knowledge into results.",
  ),
  experienceTitle: t("Experiencia profesional", "Professional experience"),
  projectsTitle: t("Proyectos destacados", "Featured projects"),
  problem: t("Contexto", "Context"),
  method: t("Metodología", "Methodology"),
  result: t("Contribución", "Contribution"),
  viewDoc: t("Ver documentación", "View documentation"),
  skillsTitle: t("Habilidades y herramientas", "Skills & tools"),
  educationTitle: t("Educación y certificaciones", "Education & certifications"),
  certsLabel: t("Certificaciones", "Certifications"),
  goalTitle: t("Objetivo profesional", "Career objective"),
  goal: t(
    "Mi objetivo es desarrollarme en organizaciones donde pueda integrar la analítica de datos, la gestión de calidad y la mejora continua para generar soluciones basadas en evidencia, optimizar procesos y contribuir a la toma de decisiones.",
    "My goal is to grow within organizations where I can integrate data analytics, quality management and continuous improvement to create evidence-based solutions, optimize processes and support decision-making.",
  ),
  mobility: t("Disponible para movilidad nacional dentro de México", "Available for relocation anywhere in Mexico"),
  contactTitle: t("Construyamos oportunidades de mejora.", "Let's build opportunities for improvement."),
  contactText: t(
    "Estoy abierta a nuevas oportunidades profesionales, proyectos de colaboración y conexiones de networking relacionadas con analítica de datos, calidad y mejora continua.",
    "I am open to new career opportunities, collaboration projects and networking connections related to data analytics, quality and continuous improvement.",
  ),
  location: t("Ubicación", "Location"),
  availability: t("Disponibilidad", "Availability"),
  availabilityValue: t("Abierta a movilidad nacional", "Open to nationwide relocation"),
  sendEmail: t("Enviar correo", "Send email"),
  visitLinkedin: t("Ver LinkedIn", "View LinkedIn"),
  downloadCv: t("Descargar CV", "Download CV"),
  cvEs: t("CV en español (PDF)", "CV in Spanish (PDF)"),
  cvEn: t("CV en inglés (PDF)", "CV in English (PDF)"),
};

export const experience = [
  {
    org: "Fundación Televisa | Programa Tecnolochicas",
    role: t("Instructora de Tecnología", "Technology Instructor"),
    period: t("2026 – Actualidad", "2026 – Present"),
    items: [
      t("Impartición de sesiones formativas para desarrollar competencias tecnológicas y digitales.", "Delivering training sessions to develop technological and digital skills."),
      t("Planificación de actividades, acompañamiento y seguimiento del aprendizaje de las participantes.", "Planning activities, mentoring and tracking participants' learning progress."),
    ],
  },
  {
    org: "Beneficencia Española de Puebla",
    role: t("Practicante Profesional / Asistente de Calidad", "Professional Intern / Quality Assistant"),
    period: t("Agosto 2025 – Julio 2026", "August 2025 – July 2026"),
    items: [
      t("Análisis y seguimiento de indicadores de calidad y seguridad del paciente.", "Analysis and monitoring of quality and patient-safety indicators."),
      t("Identificación de riesgos y oportunidades de mejora.", "Identification of risks and improvement opportunities."),
      t("Aplicación de herramientas de análisis de causa raíz.", "Application of root cause analysis tools."),
      t("Participación en documentación y preauditorías para Distintivo H.", "Participation in documentation and pre-audits for the Distintivo H certification."),
      t("Colaboración en el desarrollo de SIREA, sistema digital de reporte de eventos adversos y cuasi fallas.", "Collaboration in developing SIREA, a digital reporting system for adverse events and near misses."),
    ],
  },
];

export type Project = {
  tag: T;
  title: T;
  problem: T;
  method: T;
  result: T | T[];
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    tag: t("Calidad · Sector automotriz", "Quality · Automotive"),
    title: t("Mejora de la calidad en el sector automotriz | Adient", "Quality improvement in the automotive sector | Adient"),
    problem: t("Riesgos en el área de corte y recuperación de tejidos de un proveedor automotriz Tier 1.", "Risks in the fabric cutting and recovery area of a Tier 1 automotive supplier."),
    method: t("Aplicación de AMFE de proceso (PFMEA) para identificar y evaluar riesgos.", "Application of Process FMEA (PFMEA) to identify and assess risks."),
    result: t("Contribuyó a la reducción de costos asociados a desperdicios y a la mejora de la calidad.", "Contributed to reducing waste-related costs and improving quality."),
    tags: ["PFMEA", "Quality Management", "Risk Analysis", "Continuous Improvement"],
    link: "https://drive.google.com/file/d/1JzhaSeGzAL_mqNaGM7RCvp9kBKkMPhLF/view?usp=sharing",
  },
  {
    tag: t("Ciencia de datos", "Data science"),
    title: t("Intensidad migratoria y remesas en México", "Migration intensity and remittances in Mexico"),
    problem: t("Análisis de la relación entre la intensidad migratoria y las remesas recibidas en México con datos trimestrales 2013–2024. Proyecto de la certificación Junior en Ciencia de Datos.", "Analysis of the relationship between migration intensity and remittances received in Mexico using quarterly data 2013–2024. Project for the Junior Data Science certification."),
    method: t("Limpieza y transformación de datos, análisis exploratorio y estadístico, desarrollo y evaluación de modelos predictivos.", "Data cleaning and transformation, exploratory and statistical analysis, development and evaluation of predictive models."),
    result: t("Identificación de tendencias y relaciones, con visualización y comunicación de resultados.", "Identification of trends and relationships, with visualization and communication of results."),
    tags: ["Python", "Pandas", "Statistical Analysis", "Data Visualization"],
    link: "https://colab.research.google.com/drive/1V8EgO6DfzRoFhLz-ItKBbeyK05TUEFuO?usp=sharing",
  },
  {
    tag: t("Mejora de procesos · Salud", "Process improvement · Healthcare"),
    title: t("SIREA | Sistema de reporte digital", "SIREA | Digital reporting system"),
    problem: t("Necesidad de recopilar de forma estructurada los eventos adversos y cuasi fallas en el ámbito hospitalario.", "Need for structured collection of adverse events and near misses in a hospital setting."),
    method: t("Participación en el desarrollo de un sistema digital de reporte.", "Participation in developing a digital reporting system."),
    result: t("Fortalecer la recopilación de información, su análisis y la identificación de oportunidades de mejora.", "Strengthening information gathering, its analysis and the identification of improvement opportunities."),
    tags: ["Process Improvement", "KPI Analysis", "Root Cause Analysis", "Data Collection"],
  },
];

export const skills = [
  { icon: "chart", title: t("Data Analytics", "Data Analytics"), items: ["Excel", "Power BI", "Python", "SQL", "Statistical Analysis", "Data Visualization", "KPI Analysis", "Data Cleaning"] },
  { icon: "quality", title: t("Calidad y Mejora Continua", "Quality & Continuous Improvement"), items: ["IATF 16949:2016", "ISO 9001", "PFMEA", "Root Cause Analysis", "Ishikawa", "5 Whys", "Pareto Analysis", "Process Improvement", "Lean Manufacturing", "Six Sigma"] },
  { icon: "pm", title: t("Gestión de Negocios y Proyectos", "Business & Project Management"), items: ["Project Management", "Strategic Planning", "Business Analysis", "Risk Analysis", "Agile Methodologies", "Cross-functional Collaboration"] },
  { icon: "lang", title: t("Idiomas", "Languages"), items: [], langs: [[t("Español", "Spanish"), t("Nativo", "Native")], [t("Inglés", "English"), t("B2", "B2")], [t("Alemán", "German"), t("A2", "A2")]] as [T, T][] },
];

export const education = {
  school: "Instituto Tecnológico de Puebla",
  degree: t("Ingeniería en Gestión Empresarial", "Business Management Engineering"),
  period: "2020 – 2025",
  certs: [
    { name: t("Ciencia de Datos Jr", "Junior Data Science"), issuer: "Tecnolochicas México / Fundación Televisa", year: "2026" },
    { name: t("Auditor Interno en Sistemas de Calidad IATF 16949:2016 bajo lineamientos de ISO 19011:2018", "Internal Auditor for IATF 16949:2016 Quality Systems under ISO 19011:2018 guidelines"), issuer: "M&T Management & Technology México", year: "2025" },
  ],
};
