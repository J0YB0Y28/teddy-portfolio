// MainInterface.js amélioré
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaArrowUp, FaDatabase, FaLaptop, FaLinux, FaUbuntu,
  FaPython, FaFlask, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaJsSquare, FaUserShield,
  FaMoon, FaSun, FaEnvelope, FaFilePdf, FaRobot, FaServer, FaWindows, FaWordpress    
} from "react-icons/fa";
import {
  SiCplusplus, SiTailwindcss, SiMysql, SiOpencv
} from "react-icons/si";

const projects = [
  {
    title: "Brick Breaker Game",
    image: "/images/brick_breaker.png",
    description: "Un jeu arcade interactif en HTML/CSS/JS. Il inclut des niveaux, effets sonores et un design mobile-friendly.",
    demoLink: "https://j0yb0y28.github.io/brick-breaker-game-main/"
  },
  {
    title: "Movie App",
    image: "/images/movie-app.png",
    description: "Application web pour explorer les films récents avec affichage des trailers grâce à l’API TMDB.",
    demoLink: "https://j0yb0y28.github.io/movie-app/"
  },
  {
    title: "Spaceship Game",
    image: "/images/spaceship-game.png",
    description: "Jeu de duel spatial rétro avec IA et effets dynamiques en HTML/CSS/JS.",
    demoLink: "https://j0yb0y28.github.io/Spaceship_Game/"
  },
  {
    title: "Power 4 Game",
    image: "/images/power4.png",
    description: "Jeu Puissance 4 moderne avec IA, animations et choix du joueur.",
    demoLink: "https://power4-app-j0yb0y28.vercel.app/"
  },
  {
    title: "Gender & Age Detection",
    image: "/images/gender-age-app.png",
    description: "Détection de genre et âge avec OpenCV. Frontend React, backend Flask.",
    demoLink: "https://gender-age-app-j0yb0y28.vercel.app/"
  },
  {
    title: "Emotion Detection App",
    image: "/images/emotion-app.png",
    description: "Détection d’émotions avec OpenCV/IA. Flux webcam + dashboard dynamique.",
    demoLink: "https://emotion-app-j0yb0y28.vercel.app/"
  }
];

const skills = [
  { name: "Matériel Informatique", icon: <FaLaptop /> },
  { name: "WIndows", icon: <FaWindows /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Ubuntu", icon: <FaUbuntu /> }, 
  { name: "Serveur Web et API", icon: <FaServer /> },
  { name: "Cybersécurité", icon: <FaUserShield /> },
  { name: "IA", icon: <FaRobot  /> },
  { name: "Wordpress", icon: <FaWordpress /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Flask", icon: <FaFlask /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "React", icon: <FaReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Base de données", icon: <FaDatabase /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "OpenCV", icon: <SiOpencv /> }
];

export default function MainInterface() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDemo, setActiveDemo] = useState(projects[0]);
  const [isDark, setIsDark] = useState(() =>
    typeof window !== "undefined" &&
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setIsDark(true);
    } else {
      document.body.classList.remove("dark");
      setIsDark(false);
    }
  }, []);


  return (
    <div className="transition-colors duration-500 ease-in-out text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-black min-h-screen scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-900 shadow z-50 p-4 flex justify-center gap-6">
        <a href="#parcours">Parcours</a>
        <a href="#apropos">À propos</a>
        <a href="#projects">Projets</a>
        <a href="#demo">Démo</a>
        <a href="#skills">Compétences</a>
        <a href="#contact">Contact</a>
        <button
          onClick={() => {
            const root = document.body;
            const currentlyDark = root.classList.contains("dark");
            const newTheme = currentlyDark ? "light" : "dark";
            root.classList.toggle("dark");
            localStorage.setItem("theme", newTheme);
            setIsDark(!currentlyDark);
          }}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-zinc-700 transition duration-300 hover:scale-110"
        >
          {isDark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </nav>

      <main className="pt-24 px-6 max-w-7xl mx-auto">

        {/* HERO */}
        <section className="flex flex-col items-center text-center gap-4 mb-16">
        <div className="w-48 h-48 md:w-60 md:h-60 overflow-hidden rounded-full shadow-xl">
          <img
            src="/picture.png"
            alt="Teddy Kana"
            className="w-full h-full object-contain"
          />
        </div>
          <h1 className="text-5xl font-bold text-blue-600 mt-4">Teddy Kana</h1>
          <p className="text-lg max-w-xl">
            Développeur passionné, amateur de sécurité informatique, d'IA et de soccer. Ce portfolio est une fenêtre sur mon univers 🌍
          </p>
          <a
            href="/cv_tk.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <FaFilePdf /> Voir mon CV
          </a>
        </section>

        {/* PARCOURS */}
        <section id="parcours" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-center mb-6">🎓 Mon parcours académique</h2>
          <ul className="text-center space-y-4">
            <li><strong><a href="https://www.ulaval.ca/etudes/programmes/baccalaureat-en-genie-logiciel">Baccalauréat en génie logiciel</a></strong> - <a href="https://www.ulaval.ca/">Université Laval</a> (2023 - Actuellement)</li>
            <li><strong><a href="https://www.csfoy.ca/programmes/tous-les-programmes/programmes-preuniversitaires/sciences-de-la-nature-profil-universel">Sciences de la nature</a></strong> - <a href="https://www.csfoy.ca/">Cégep de Sainte-Foy</a> (2021 - 2023)</li>
            <li><strong><a href="https://www.derochebelle.qc.ca/programmes/programme-deducation-internationale-pei/">Programme d’éducation internationale</a></strong> - <a href="https://www.derochebelle.qc.ca/">École secondaire De Rochebelle</a> (2016 - 2021)</li>
          </ul>

          <h2 className="text-3xl font-bold text-center mt-12 mb-6">💼 Mon parcours professionnel</h2>
          <ul className="text-center space-y-4">
            <li><strong>Technicien en réseau informatique</strong> – <a href="https://www.quebec.ca/gouvernement/ministere/famille">Ministère de la Famille</a> (Sept. 2024 – Actuellement)</li>
            <li><strong>Conseiller gouvernement ouvert</strong> – <a href="https://www.quebec.ca/gouvernement/ministeres-organismes/cybersecurite-numerique">Ministère de la Cybersécurité et du Numérique</a> (Mai – Sept. 2024)</li>
            <li><strong>Employé occasionnel</strong> – <a href="https://www.ville.quebec.qc.ca/citoyens/loisirs_sports/installations_sportives/index.aspx">Ville de Québec, parcs & installations</a> (Nov. 2023 – Avril 2024)</li>
            <li><strong>Animateur de groupes</strong> – <a href="https://peps.ulaval.ca/">PEPS, Université Laval</a> (Sept. – Déc. 2023)</li>
            <li><strong>Tuteur scolaire</strong> – <a href="https://www.csfoy.ca/">Cégep de Sainte-Foy</a> (Sept. 2021 – Déc. 2023)</li>
            <li><strong>Coordonnateur de projets</strong> – <a href="https://cqcm.coop/initiatives/ciec">Coopérative jeunesse de Pont-Rouge</a> (Mai – Sept. 2022)</li>
            <li><strong>Entraîneur adjoint élite</strong> – <a href="https://www.cstrident.ca/">CS TRIDENT</a> (Fév. 2024 – Actuellement)</li>
            <li><strong>Entraîneur-animateur jeunes U4-U12</strong> – <a href="https://www.linkedin.com/company/club-de-soccer-caravelles-de-sainte-foy-sillery-ccs-/?originalSubdomain=ca">Caravelles de Ste-Foy</a> / <a href="https://www.cstrident.ca/">CS TRIDENT</a> (Juin 2018 – Actuellement)</li>
            <li><strong>Entraîneur futsal juvénile</strong> – <a href="https://www.derochebelle.qc.ca/">École secondaire De Rochebelle</a> (Oct. 2023 – Actuellement)</li>
            <li><strong>Entraîneur soccer juvénile</strong> – <a href="https://www.derochebelle.qc.ca/">École secondaire De Rochebelle</a> (Sept. 2021 – Actuellement)</li>
          </ul>

        </section>

        {/* À PROPOS */}
        <section id="apropos" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-center mb-6">👨🏿‍💻 À propos de moi</h2>
          <div className="max-w-3xl mx-auto text-center text-lg leading-relaxed">
            <p className="mb-4">
              Je suis Teddy Kana, étudiant en génie logiciel à <a href="https://www.ulaval.ca/">l'Université Laval</a>, passionné par le développement web,
              l’intelligence artificielle, la cybersécurité et le soccer ⚽. 
            </p>
            <p className="mb-4">
              En plus de mes études, je travaille comme entraîneur de soccer pour plusieurs équipes de différents niveau d'âge et je m’investis dans
              divers projets personnels et d'équipe (<a href="https://vaul.fsg.ulaval.ca/en">Véhicule Autonome de l'Université Laval (VAUL)</a> et <a href="http://clubsecuriteinformatique.ift.ulaval.ca/">Club de Sécurité Informatique (CSI)</a>).
            </p>
            <p>
              Mes intérêts incluent le hacking éthique 🧠, la création de contenus, l'entrepreneuriat, le coaching sportif, 
              et l’apprentissage continu à travers des projets concrets. 
              Je cherche à avoir un impact à travers le code, les idées et les gens !
            </p>
          </div>
        </section>

        {/* PROJETS */}
        <section id="projects" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-center mb-8">🚀 Projets</h2>
          <div className="grid md:grid-cols-2 gap-8 place-items-center">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                onClick={() => setSelectedProject(proj)}
                whileHover={{ scale: 1.05 }}
                className="relative cursor-pointer rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden w-full max-w-md"
              >
                <img src={proj.image} alt={proj.title} className="w-full h-60 object-cover" />
                <div className="p-4 bg-white dark:bg-zinc-900">
                  <h3 className="text-xl font-semibold mb-2 text-center">{proj.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{proj.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DÉMO RESPONSIVE */}
        <section id="demo" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-center mb-6">🧪 Démo interactive</h2>
          <p className="text-center mb-4">Sélectionnez un projet à tester directement ci-dessous 👇</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {projects.map((proj, index) => (
              <button
                key={index}
                onClick={() => setActiveDemo(proj)}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${
                  activeDemo.title === proj.title ? "bg-blue-600 text-white" : "border-gray-400 text-gray-700 dark:text-gray-200"
                }`}
              >
                {proj.title}
              </button>
            ))}
          </div>
          <div className="flex justify-center">
            {["Gender & Age Detection", "Emotion Detection App"].includes(activeDemo.title) ? (
              <a
                href={activeDemo.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 text-lg underline hover:text-blue-700"
              >
                Ce projet nécessite la webcam. Cliquez ici pour l’ouvrir dans un nouvel onglet.
              </a>
            ) : (
              <iframe
                src={activeDemo.demoLink}
                title={activeDemo.title}
                width="100%"
                height="600px"
                className="rounded-xl border border-gray-300 dark:border-gray-600 max-w-4xl w-full"
              />
            )}
          </div>
        </section>

        {/* COMPÉTENCES */}
        <section id="skills" className="mb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold text-center mb-8">🧠 Compétences</h2>
          <div className="flex flex-wrap justify-center gap-6 text-4xl">
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center">
                {skill.icon}
                <span className="text-sm mt-2">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="text-center pb-24 scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6">📬 Contact</h2>
          <p className="mb-4">Discutons ensemble !</p>

          <div className="flex flex-wrap justify-center items-center gap-6 mt-4 text-2xl">
            <a href="mailto:kanaboumkwoiit@outlook.com" title="Email" className="hover:text-blue-500">
              <FaEnvelope />
            </a>
            <a href="https://github.com/J0YB0Y28" target="_blank" rel="noreferrer" title="GitHub" className="hover:text-blue-500">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/teddy-kana-6a26832b9/" target="_blank" rel="noreferrer" title="LinkedIn" className="hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="/cv_tk.pdf" target="_blank" rel="noopener noreferrer" title="CV développeur" className="hover:text-blue-500">
              <FaFilePdf />
            </a>
          </div>
        </section>

        {/* MODALE PROJET */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-zinc-800 p-6 rounded-xl max-w-2xl w-full relative text-left"
              >
                <button className="absolute top-2 right-2 text-gray-500 dark:text-gray-300 hover:text-red-500" onClick={() => setSelectedProject(null)}>X</button>
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="mb-4">{selectedProject.description}</p>
                <a href={selectedProject.demoLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">🔗 Accéder à la démo</a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Top */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-xl hover:bg-blue-700">
          <FaArrowUp />
        </button>
      </main>
      {/* Bouton retour vers le terminal */}
      <a
        href="/"
        className="fixed bottom-6 left-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition-transform duration-300 hover:scale-105"
      >
        ⬅️ Terminal
      </a>
    </div>
  );
}
