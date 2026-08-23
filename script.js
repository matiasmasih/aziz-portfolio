const themeButton = document.getElementById("themeButton");
const languageButton = document.getElementById("languageButton");

let finnishMode = false;

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

const english = {
  aboutNav: "About",
  skillsNav: "Skills",
  projectsNav: "Projects",
  experienceNav: "Experience",
  educationNav: "Education",
  contactNav: "Contact",

  heroEyebrow: "SOFTWARE DEVELOPER · FINLAND",
  heroText:
    "I build practical web and software projects with a focus on clean interfaces, useful features, and continuous learning.",

  viewProjects: "View Projects",
  downloadCV: "Download CV",

  aboutEyebrow: "01 · ABOUT",
  aboutTitle: "Building skills through real projects.",
  aboutText1:
    "I am a software developer student in Finland. My learning path combines software development studies with practical work experience and personal projects.",
  aboutText2:
    "I enjoy building applications, working with databases, creating web interfaces, and improving projects step by step.",

  skillsEyebrow: "02 · SKILLS",
  skillsTitle: "Tools I work with.",

  projectsEyebrow: "03 · PROJECTS",
  projectsTitle: "Selected work.",

  experienceEyebrow: "04 · EXPERIENCE",
  experienceTitle: "Work and practical experience.",

  educationEyebrow: "05 · EDUCATION",
  educationTitle: "Education.",

  careerEyebrow: "06 · CAREER",
  careerTitle: "From learning to building.",
  careerText:
    "My goal is to grow into a professional software developer by building real applications, strengthening my technical foundation, and gaining more professional experience in Finland.",

  contactEyebrow: "07 · CONTACT",
  contactTitle: "Let's build something useful.",
  contactText:
    "My professional contact information will be added here."
};

const finnish = {
  aboutNav: "Minusta",
  skillsNav: "Taidot",
  projectsNav: "Projektit",
  experienceNav: "Työkokemus",
  educationNav: "Koulutus",
  contactNav: "Yhteys",

  heroEyebrow: "OHJELMISTOKEHITTÄJÄ · SUOMI",
  heroText:
    "Rakennan käytännöllisiä verkko- ja ohjelmistoprojekteja. Keskityn selkeisiin käyttöliittymiin, hyödyllisiin ominaisuuksiin ja jatkuvaan oppimiseen.",

  viewProjects: "Katso projektit",
  downloadCV: "Lataa CV",

  aboutEyebrow: "01 · MINUSTA",
  aboutTitle: "Kehitän osaamistani oikeiden projektien avulla.",
  aboutText1:
    "Olen Suomessa opiskeleva ohjelmistokehittäjä. Opintoni yhdistyvät käytännön työkokemukseen ja omiin ohjelmistoprojekteihini.",
  aboutText2:
    "Pidän sovellusten rakentamisesta, tietokannoista, verkkosivuista ja projektien kehittämisestä vaihe vaiheelta.",

  skillsEyebrow: "02 · TAIDOT",
  skillsTitle: "Teknologiat, joita käytän.",

  projectsEyebrow: "03 · PROJEKTIT",
  projectsTitle: "Valittuja projekteja.",

  experienceEyebrow: "04 · TYÖKOKEMUS",
  experienceTitle: "Työ- ja käytännön kokemus.",

  educationEyebrow: "05 · KOULUTUS",
  educationTitle: "Koulutus.",

  careerEyebrow: "06 · URA",
  careerTitle: "Oppimisesta rakentamiseen.",
  careerText:
    "Tavoitteeni on kasvaa ammatilliseksi ohjelmistokehittäjäksi rakentamalla oikeita sovelluksia, vahvistamalla teknistä osaamistani ja hankkimalla lisää työkokemusta Suomessa.",

  contactEyebrow: "07 · YHTEYS",
  contactTitle: "Rakennetaan jotain hyödyllistä.",
  contactText:
    "Ammatilliset yhteystietoni lisätään tähän."
};

function updateLanguage(language) {
  document.querySelector('a[href="#about"]').textContent = language.aboutNav;
  document.querySelector('a[href="#skills"]').textContent = language.skillsNav;
  document.querySelector('a[href="#projects"]').textContent = language.projectsNav;
  document.querySelector('a[href="#experience"]').textContent = language.experienceNav;
  document.querySelector('a[href="#education"]').textContent = language.educationNav;
  document.querySelector('a[href="#contact"]').textContent = language.contactNav;

  document.querySelector("#home .eyebrow").textContent =
    language.heroEyebrow;

  document.querySelector(".hero-text").textContent =
    language.heroText;

  document.querySelector(".hero-buttons .primary").textContent =
    language.viewProjects;

  document.querySelector(
    '.hero-buttons .button:not(.primary)'
  ).textContent = language.downloadCV;

  document.querySelector("#about .eyebrow").textContent =
    language.aboutEyebrow;

  document.querySelector("#about h2").textContent =
    language.aboutTitle;

  document.querySelector(
    "#about .two-column p:first-child"
  ).textContent = language.aboutText1;

  document.querySelector(
    "#about .two-column p:last-child"
  ).textContent = language.aboutText2;

  document.querySelector("#skills .eyebrow").textContent =
    language.skillsEyebrow;

  document.querySelector("#skills h2").textContent =
    language.skillsTitle;

  document.querySelector("#projects .eyebrow").textContent =
    language.projectsEyebrow;

  document.querySelector("#projects h2").textContent =
    language.projectsTitle;

  document.querySelector("#experience .eyebrow").textContent =
    language.experienceEyebrow;

  document.querySelector("#experience h2").textContent =
    language.experienceTitle;

  document.querySelector("#education .eyebrow").textContent =
    language.educationEyebrow;

  document.querySelector("#education h2").textContent =
    language.educationTitle;

  document.querySelector(".career .eyebrow").textContent =
    language.careerEyebrow;

  document.querySelector(".career h2").textContent =
    language.careerTitle;

  document.querySelector(".career .large-text").textContent =
    language.careerText;

  document.querySelector("#contact .eyebrow").textContent =
    language.contactEyebrow;

  document.querySelector("#contact h2").textContent =
    language.contactTitle;

  document.querySelector("#contact p:not(.eyebrow)").textContent =
    language.contactText;
}

languageButton.addEventListener("click", () => {
  finnishMode = !finnishMode;

  if (finnishMode) {
    updateLanguage(finnish);
    languageButton.textContent = "FI";
  } else {
    updateLanguage(english);
    languageButton.textContent = "EN";
  }
});
