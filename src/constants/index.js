import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import web from "../assets/certifications/web.png";
import SQL from "../assets/certifications/SQL.png";
import Python from "../assets/certifications/Python.png";
import Git from "../assets/certifications/Git.png";
import Analisis_de_datos from "../assets/certifications/Analisis_de_datos.png";
import Full_Stack from "../assets/certifications/Full_Stack.png";
import Full_Stack_Part2 from "../assets/certifications/Full_Stack_Part2.png";


export const HERO_CONTENT = ``;

export const ABOUT_TEXT = ``;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Desarrollo Web y Aplicaciones de Escritorio",
    company: "Freelancer Remoto",
    description: `Diseñe y desarrolle soluciones empresariales full-stack, incluyendo
 aplicaciones SPA y sistemas de gestión con React y Django, logrando mejorar la eficiencia operativa de
 clientes - Automatización de tareas repetitivas con Python, reduciendo tiempos de
 ejecución. Tambien cuento con la experiencia de asesoría técnica a emprendedores y pymes para la transformación
 digital de sus negocios.`,
    technologies: ["Javascript", "React.js", "Python", "Django", "HTML", "CSS", "PyQt6", "WordPress"],
  },
  {
    year: "2024 - 2025",
    role: "Consultor IT - Desarrollador Web",
    company: "Ingeniería Quilicura",
    description: `Diseñé e implementé el sitio web corporativo con WordPress, optimizado para SEO y
 conversión, aumentando la visibilidad online en un 70%. - Administración de servidores, dominios (BlueHosting) y
 configuraciones técnicas avanzadas (DNS, backups, seguridad básica). - Implementación de procesos
 digitales con HubSpot CRM para gestión de leads y clientes. - Automatización de análisis de cotizaciones
 con herramientas de Excel y Power Query - Configuración y optimización de campaña en Google ADS para aumentar clicks y conversiones con clientes `,
    technologies: ["WordPress ", "Excel", "PowerQuery", "Google ADS", "HubSpot"],
  },
  {
    year: "2023 - 2024",
    role: "Administrador de Contenido",
    company: "Visanaccesorios",
    description: `Automatización de ajustes de precios mediante scripts con Python, eliminando
 errores manuales y reduciendo tiempos operativos en un 80%. - Rediseño completo del sitio e
 commerce con estructura escalable para más de 500 productos. - Colaboración con el equipo de ventas
 para optimizar conversiones y mejorar experiencia del cliente online.`,
    technologies: ["Python", "WordPress", "WooCommerce", "MySQL", "SQL"],
  },
  {
    year: "2017 - 2018",
    role: "Ayudante Técnico en Computación",
    company: "IPLACEX",
    description: `Diagnóstico y resolución de fallas críticas en más de 100 equipos informáticos,
 mejorando el tiempo de respuesta técnica. - Asistencia directa a estudiantes y docentes,
 contribuyendo a mantener la continuidad operativa de los laboratorios de computación y celulares.`,
    technologies: ["Windows", "Linux", "AnyDesk", "Antivirus / Antimalware", "CCleaner"],
  },
];

export const PROJECTS = [
  {
    title: "BunnyDoro",
    image: project1,
    link: "https://www.youtube.com/watch?v=olHRM1f_cXc",
    description:
      "Un proyecto que consiste en una aplicación de escritorio con formato pomodoro personalizable. El lenguaje de programación utilizado para este proyecto fue Python, y se empleó una librería llamada PyQt6 junto con 4 de sus módulos: QtWidgets, QtCore, QtGui y QtMultimedia. Fue empaquetado en un solo archivo ejecutable a través de PyInstaller. Los GIF, fondos, íconos, textos y botones fueron diseñados por mi clienta.",
    technologies: ["Python", "PyQt6", "PyInstaller"],
  },
  {
    title: "Sistema web empresarial con Django",
    image: project2,
    link: "https://www.youtube.com/watch?v=4NpuQKW6Z3Q",
    description:
      "Este proyecto está diseñado con Django e implica conocimiento avanzado en Python (POO y CRUD), HTML, CSS (en este caso Bootstrap) y, en algunos casos, JavaScript (para interactividad en la web). Para los datos del sistema se utilizó SQL y uno de sus motores de base de datos para poder almacenarlos; en este caso utilizó PostgreSQL. Finalmente, para relacionar las tablas se utilizó el ORM de Django.",
    technologies: ["Django", "Python", "HTML", "CSS Bootstrap", "SQL", "PostgreSQL"],
  },
  {
    title: "Gestor de productos Con Tkinter",
    image: project3,
    link: "https://www.youtube.com/watch?v=aErUlS8yL34",
    description:
      "Este es un proyecto de una aplicación de escritorio con la funcionalidad de servir como gestor. En este ejemplo se diseñó como un gestor de libros para una librería. El lenguaje usado para este proyecto es Python y se utilizó la librería Tkinter. Como base de datos para guardar todos los registros se utilizó SQLite, la cual se manipuló con comandos SQL a través de la librería sqlite de Python. Finalmente, se empaquetó utilizando PyInstaller.",
    technologies: ["Python", "Tkinter", "SQL", "SQLite", "PyInstaller"],
  },
  {
    title: "Pagina web de ingenieriaquilicura",
    image: project4,
    link: "https://ingenieriaquilicura.cl/",
    description:
      "Se desarrolló esta página web para la empresa Ingeniería Quilicura, participando como desarrollador WordPress. Se utilizó el CMS WordPress con el tema premium Woodmart y se configuraron diversos plugins profesionales como Elementor Pro, Revolution Slider, Rank Math SEO, Join.chat, Fluent Forms, entre otros. También se realizó la configuración de copias de seguridad y la integración con Google Ads para aumentar el tráfico y las conversiones de clientes.",
    technologies: ["CMS Wordpress", "Elementor Pro", "Rank Math SEO", "Google Ads"],
  },
];

export const CONTACT = {
  address: "Copiapó, Atacama, Chile",
  phoneNo: "+56 9 4697 7016",
  email: "diego.v.diaz123@gmail.com",
};


export const CERTIFICATES = [
  {
    title: "Full-Stack",
    img: Full_Stack,
    link: "https://www.acreditta.com/credential/354d60cb-f549-4a46-973b-516c5372e9f9?utm_source=copy&resource_type=badge&resource=354d60cb-f549-4a46-973b-516c5372e9f9"
  },
  {
    title: "Full-Stack parte 2",
    img: Full_Stack_Part2,
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-da62a6ee-1abf-4b36-a1f5-c752882f12e7.pdf"
  },
  {
    title: "Desarrollo y programacion web",
    img: web,
    link: "https://www.linkedin.com/in/diego-valdes-diaz/details/certifications/1755114526081/single-media-viewer/?type=DOCUMENT&profileId=ACoAAEgUcPYB94VKolucooHb8WdOIJJa8AF1--U"
  },
  {
    title: "Analisis de datos",
    img: Analisis_de_datos,
    link: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/UDF4UQMZ5RXU"
  },
  {
    title: "SQL",
    img: SQL,
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-0497ebac-632d-4bae-b61c-19ffcd78e4d5.pdf"
  },
  {
    title: "Python",
    img: Python,
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-748d099a-fa0e-4e59-b0fa-bf8ab1b82425.pdf"
  },
  {
    title: "Git",
    img: Git,
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-59aeea6a-0b87-4755-8bc2-39a262899c68.pdf"
  },
]