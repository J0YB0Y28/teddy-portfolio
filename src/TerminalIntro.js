import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BackgroundParticles from "./BackgroundParticles";

export default function TerminalIntro() {
  const [lines, setLines] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [done, setDone] = useState(false);
  const [history, setHistory] = useState([]);
  // eslint-disable-next-line
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Une seule variable "theme" => "light" | "dark" | "hacker"
  const [theme, setTheme] = useState("light");

  // Langue par défaut "fr"
  const [lang, setLang] = useState("fr");

  // Commandes valides
  const validCommands = [
    "start", "hello", "run",
    "dark", "light", "hackermode",
    "help", "clear", "about", "cv",
    "lang fr", "lang en"
  ];

  // Textes FR / EN
  const translations = {
    fr: {
      welcome: "Tape 'help' pour voir les commandes disponibles.",
      launching: "Lancement du portfolio...",
      availableCommands: "Commandes disponibles :",
      commandNotFound: "Commande introuvable :",
      seeHelp: "Tape 'help' pour la liste des commandes.",
      switchDark: "Passage au thème sombre",
      switchLight: "Passage au thème clair",
      switchHacker: "Passage en HACKERMODE",
      alreadyDark: "Tu es déjà en thème sombre.",
      alreadyLight: "Tu es déjà en thème clair.",
      alreadyHacker: "Tu es déjà en HACKERMODE.",
      helpList: [
        "- start / hello / run : Lancer le portfolio",
        "- dark / light / hackermode : Basculer le thème",
        "- help : Afficher ce menu",
        "- clear : Nettoyer le terminal",
        "- about : Informations sur moi",
        "- cv : Ouvrir mon CV",
        "- lang fr / lang en : Changer la langue",
      ],
      aboutLines: [
        "Je suis Teddy Kana, passionné par le développement, le hacking éthique et le coaching de soccer.",
        "Tape 'start' pour explorer mon univers 🚀"
      ],
      cvOpening: "Ouverture du CV... ✅",
      hackerWelcome: [
        "🧠 Bienvenue en HACKERMODE...",
        "Déchaînement de la puissance...",
        "Accès accordé ✅"
      ],
      languageSetTo: "Langue définie sur ",
    },
    en: {
      welcome: "Type 'help' to see available commands.",
      launching: "Launching portfolio...",
      availableCommands: "Available commands:",
      commandNotFound: "Command not found:",
      seeHelp: "Type 'help' to see commands.",
      switchDark: "Switched to dark theme",
      switchLight: "Switched to light theme",
      switchHacker: "Switched to HACKERMODE",
      alreadyDark: "You're already in dark mode.",
      alreadyLight: "You're already in light mode.",
      alreadyHacker: "You're already in HACKERMODE.",
      helpList: [
        "- start / hello / run : Launch portfolio",
        "- dark / light / hackermode : Switch theme",
        "- help : Show this help menu",
        "- clear : Clear the terminal",
        "- about : About me",
        "- cv : Open my CV",
        "- lang fr / lang en : Switch language",
      ],
      aboutLines: [
        "I am Teddy Kana, passionate about development, ethical hacking, and soccer coaching.",
        "Type 'start' to explore my world 🚀"
      ],
      cvOpening: "Opening CV... ✅",
      hackerWelcome: [
        "🧠 Welcome to HACKERMODE...",
        "Unleashing full potential...",
        "Access granted ✅"
      ],
      languageSetTo: "Language set to ",
    }
  };

  // useEffect => focus, recup theme, recup lang
  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    // applique la classe body.* 
    document.documentElement.classList.remove("light", "dark", "hacker");
    document.documentElement.classList.add(savedTheme);

    const savedLang = localStorage.getItem("lang");
    if (savedLang === "en" || savedLang === "fr") {
      setLang(savedLang);
    }

    setLines([translations[savedLang || "fr"].welcome]);
    // eslint-disable-next-line
  }, []);

  // enregistre la langue
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // enregistre le theme
  useEffect(() => {
    localStorage.setItem("theme", theme);
    // On enlève toutes les classes => on applique la classe du theme
    document.body.classList.remove("light", "dark", "hacker");
    document.body.classList.add(theme);
  }, [theme]);

  const handleCommand = (input) => {
    const lower = input.trim().toLowerCase();

    // Si l'utilisateur tape start / hello / run
    if (["start", "hello", "run"].includes(lower)) {
      setLines((prev) => [
        ...prev,
        `teddy@portfolio:~$ ${input}`,
        translations[lang].launching
      ]);
      setTimeout(() => {
        setDone(true);
        navigate("/home");
      }, 1500);
      return;
    }

    if (lower === "help") {
      setLines((prev) => [
        ...prev,
        `teddy@portfolio:~$ ${input}`,
        translations[lang].availableCommands,
        ...translations[lang].helpList
      ]);
      return;
    }

    if (lower === "clear") {
      setLines([]);
      return;
    }

    if (lower === "about") {
      setLines((prev) => [
        ...prev,
        `teddy@portfolio:~$ ${input}`,
        ...translations[lang].aboutLines
      ]);
      return;
    }

    if (lower === "cv") {
      setLines((prev) => [
        ...prev,
        `teddy@portfolio:~$ ${input}`,
        translations[lang].cvOpening
      ]);
      window.open("/cv_tk.pdf", "_blank");
      return;
    }

    if (lower === "hackermode") {
      // si theme = 'hacker' => already
      if (theme === "hacker") {
        setLines((prev) => [
          ...prev,
          `teddy@portfolio:~$ ${input}`,
          translations[lang].alreadyHacker
        ]);
      } else {
        setTheme("hacker");
        setLines((prev) => [
          ...prev,
          `teddy@portfolio:~$ ${input}`,
          ...translations[lang].hackerWelcome
        ]);
      }
      return;
    }

    if (lower === "dark") {
      if (theme === "dark") {
        setLines((prev) => [
          ...prev,
          `teddy@portfolio:~$ ${input}`,
          translations[lang].alreadyDark
        ]);
      } else {
        setTheme("dark");
        setLines((prev) => [
          ...prev,
          `teddy@portfolio:~$ ${input}`,
          translations[lang].switchDark
        ]);
      }
      return;
    }

    if (lower === "light") {
      if (theme === "light") {
        setLines((prev) => [
          ...prev,
          `teddy@portfolio:~$ ${input}`,
          translations[lang].alreadyLight
        ]);
      } else {
        setTheme("light");
        setLines((prev) => [
          ...prev,
          `teddy@portfolio:~$ ${input}`,
          translations[lang].switchLight
        ]);
      }
      return;
    }

    // gestion lang en / fr
    if (lower.startsWith("lang ")) {
      const newLang = lower.split(" ")[1];
      if (newLang === "en") {
        setLang("en");
        setLines((prev) => [
          ...prev,
          `teddy@portfolio:~$ ${input}`,
          translations.en.languageSetTo + "English"
        ]);
      } else if (newLang === "fr") {
        setLang("fr");
        setLines((prev) => [
          ...prev,
          `teddy@portfolio:~$ ${input}`,
          translations.fr.languageSetTo + "Français"
        ]);
      } else {
        setLines((prev) => [
          ...prev,
          `teddy@portfolio:~$ ${input}`,
          "lang [en|fr] ?"
        ]);
      }
      return;
    }

    // commande invalide
    setLines((prev) => [
      ...prev,
      `teddy@portfolio:~$ ${input}`,
      `${translations[lang].commandNotFound} ${input}`,
      translations[lang].seeHelp
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setHistory((prev) => [...prev, userInput]);
      setHistoryIndex(history.length + 1);
      handleCommand(userInput);
      setUserInput("");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = validCommands.find((cmd) =>
        cmd.startsWith(userInput.toLowerCase())
      );
      if (match) setUserInput(match);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const newIndex = prev > 0 ? prev - 1 : 0;
        setUserInput(history[newIndex] || "");
        return newIndex;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistoryIndex((prev) => {
        const newIndex = prev < history.length ? prev + 1 : history.length;
        setUserInput(history[newIndex] || "");
        return newIndex;
      });
    }
  };

  // auto-complétion
  const suggestion = validCommands.find(
    (cmd) => cmd.startsWith(userInput.toLowerCase()) && userInput !== ""
  );

  // ----- Rendu final -----
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <BackgroundParticles />
      
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // container transparent => on voit mieux les particules
          backgroundColor: "transparent",
          color: theme === "hacker" ? "#0f0" : "#a3e635",
          position: "relative",
          zIndex: 10,
          padding: "2rem",
        }}
        className="font-mono overflow-auto"
      >
        <motion.h1
          className="text-5xl font-bold mb-8 text-center select-none"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.03 },
            },
          }}
          style={{ color: "#ba8ee3" }}
        >
          {"Teddy Kana's Portfolio".split("").map((char, i) => (
            <motion.span
              key={i}
              style={{ display: "inline-block", cursor: "pointer" }}
              whileHover={{ scale: 1.3 }}
              className="transition-transform duration-150"
            >
              {char}
            </motion.span>
          ))}{" "}
          <motion.span
            style={{ display: "inline-block", cursor: "pointer" }}
            whileHover={{ scale: 1.3 }}
            className="transition-transform duration-150"
          >
            ☀️
          </motion.span>
        </motion.h1>
        
        {/* Message d'information visuel */}
        <div
          className="mb-6 px-4 py-2 rounded-lg text-center text-sm font-medium"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            color: "#facc15",
            maxWidth: "700px"
          }}
        >
          Cliquez ou bougez le curseur n'importe où sur la page pour interagir avec l’arrière-plan animé ✨
        </div>


        {/* Terminal box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "100%",
            maxWidth: "700px",
            border: theme === "hacker" ? "2px solid #00ff00" : "2px solid #a3e635",
            borderRadius: "8px",
            // Fond noir transparent, pour voir encore plus les particules
            backgroundColor: "rgba(0,0,0,0.7)",
            padding: "1rem",
            backdropFilter: "blur(4px)",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          }}
        >
          {lines.map((line, idx) => (
            <div key={idx} style={{ whiteSpace: "pre-wrap", lineHeight: "1.5" }}>
              {line}
            </div>
          ))}

          {!done && (
            <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
              <span>teddy@portfolio:~$ </span>
              <input
                ref={inputRef}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  width: "100%",
                  // fluo si hacker, sinon lime clair
                  color: theme === "hacker" ? "#00ff00" : "#d9f99d",
                  paddingLeft: "4px",
                }}
                placeholder={
                  lang === "fr"
                    ? "tape une commande (ex: help, lang en, dark...)"
                    : "type a command (e.g. help, lang fr, dark...)"
                }
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
          )}

          {suggestion && suggestion !== userInput.toLowerCase() && !done && (
            <div style={{ marginTop: "0.25rem", fontSize: "0.9rem", opacity: 0.7 }}>
              ➜ Auto-complete suggestion: <strong>{suggestion}</strong>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
