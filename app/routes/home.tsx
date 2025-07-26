import { useState, useEffect } from "react";

const sections = {
  about: {
    title: "About",
    content: (isDarkMode: boolean) => (
      <>
        I'm currently:
        <br /><br />
        - studying computer science @ <span className="text-blue-300 font-semibold">uoft</span>
        <br />
        - interning as a software engineer @ <span className="text-blue-300 font-semibold">sentri ai</span> and @ <span className={`font-semibold ${isDarkMode ? 'text-pink-300' : 'text-pink-600'}`}>empor</span>
        <br />
        - working as a founding engineer @ <span className="text-blue-300 font-semibold">aeira</span>
        <br />
        - eating more and more food everyday
        <br />
        - hoping the <span className={`font-semibold ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>knicks</span> win the nba finals (it's doomed)
        <br /><br />
        Let's connect about anything here!
      </>
    )
  },
  experience: {
    title: "Experience", 
    content: (isDarkMode: boolean) => (
      <>
        I've worked on/as a:
        <br /><br />
        • software engineer intern @ <span className="text-blue-300 font-semibold">sentri ai</span>
        <br />
        &nbsp;&nbsp;- building software for law firms
        <br /><br />
        • software engineer intern @ <span className={`font-semibold ${isDarkMode ? 'text-pink-300' : 'text-pink-600'}`}>empor</span>
        <br />
        &nbsp;&nbsp;- building the first marketplace for students
        <br /><br />
        • founding engineer @ <span className="text-blue-300 font-semibold">aeira</span>
        <br />
        &nbsp;&nbsp;- leading the technological development
        <br /><br />
        • junior software engineer @ <span className="text-blue-300 font-semibold">uoft blueprint</span>
        <br />
        &nbsp;&nbsp;- created apps for non-profits
      </>
    )
  },
  projects: {
    title: "Projects",
    content: (isDarkMode: boolean) => (
      <>
        I've created:
        <br /><br />
        • <span className="font-semibold">Freats</span>
        <span className="ml-2">
          <a href="https://github.com/fredh2006/freats" target="_blank" rel="noopener noreferrer" className={`inline-flex align-middle transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://freats.ca" target="_blank" rel="noopener noreferrer" className={`inline-flex align-middle ml-1 transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </span>
        <br />
        &nbsp;&nbsp;- My personal food blog, with <span className={`font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-amber-600'}`}>5000+ views</span> and <span className={`font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-amber-600'}`}>15+ articles</span>
        <br />
        &nbsp;&nbsp;- Built with <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Javascript</span>, <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>MongoDB</span>, <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Express.js</span>, and <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Node.js</span>
        <br /><br />
        • <span className="font-semibold">Reponote</span>
        <span className="ml-2">
          <a href="https://github.com/fredh2006/reponote" target="_blank" rel="noopener noreferrer" className={`inline-flex align-middle transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://reponote.org" target="_blank" rel="noopener noreferrer" className={`inline-flex align-middle ml-1 transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </span>
        <br />
        &nbsp;&nbsp;- AI README generator for <span className={`font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-amber-600'}`}>150+ users</span>, generating <span className={`font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-amber-600'}`}>250+ README's</span>
        <br />
        &nbsp;&nbsp;- Built with <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Next.js</span>, <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Supabase</span>, <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Stripe</span>, and <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>OpenRouter</span>
        <br /><br />
        • <span className="font-semibold">Qnect</span>
        <span className="ml-2">
          <a href="https://github.com/fredh2006/qnect" target="_blank" rel="noopener noreferrer" className={`inline-flex align-middle transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/watch?v=k2-dmvFxZMg" target="_blank" rel="noopener noreferrer" className={`inline-flex align-middle ml-1 transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </span>
        <br />
        &nbsp;&nbsp;- Blind dating app leveraging AI to match users
        <br />
        &nbsp;&nbsp;- Built with <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Vue.js</span>, <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>MongoDB</span>, and <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Groq</span>
      </>
    )
  }
};

export function meta() {
  return [
    { title: "Fred He" },
    { name: "description", content: "Software Engineer and Student" },
  ];
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen font-mono relative overflow-hidden transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      <div className={`absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl transition-colors duration-300 ${
        isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/20'
      }`}></div>
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-300 ${
        isDarkMode ? 'bg-purple-500/5' : 'bg-purple-500/15'
      }`}></div>
      
      <div className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">

          <div className={`mb-6 text-left transform transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className={`text-3xl lg:text-4xl font-bold mb-3 leading-tight transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-gray-900 via-blue-700 to-purple-700 bg-clip-text text-transparent'
            }`}>
              Hi, I'm Fred!
            </h1>
            
            <p className={`text-base mb-2 font-light transition-colors duration-300 ${
              isDarkMode ? 'text-blue-200' : 'text-blue-700'
            }`}>
              Studying cs @ uoft
            </p>
            <p className={`text-sm mb-4 leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-200' : 'text-gray-700'
            }`}>
              I love working in fast-paced environments and building exciting products.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/fredh2006" className={`group transform transition-all duration-300 hover:scale-110 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} target="_blank" rel="noopener noreferrer" style={{ transitionDelay: '300ms' }}>
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/fred-he" className={`group transform transition-all duration-300 hover:scale-110 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} target="_blank" rel="noopener noreferrer" style={{ transitionDelay: '400ms' }}>
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:fredhe56@gmail.com" className={`group transform transition-all duration-300 hover:scale-110 ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`} target="_blank" rel="noopener noreferrer" style={{ transitionDelay: '500ms' }}>
                <svg className={`w-5 h-5 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
                }`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className={`backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`} style={{ 
            transitionDelay: '600ms',
            transitionProperty: 'transform, opacity',
            transitionDuration: '1000ms'
          }}>
            <div className={`transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-slate-800/30 border border-slate-700/50' 
                : 'bg-white/80 border border-gray-300/80'
            }`}>
              <div className={`px-5 py-3 flex items-center space-x-3 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-b border-slate-700/50' 
                  : 'bg-gray-100/70 border-b border-gray-300/70'
              }`}>
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>portfolio.terminal</span>
                
                <div className="flex-1 flex justify-end">
                  <button
                    onClick={toggleTheme}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 flex items-center space-x-2 ${
                      isDarkMode 
                        ? 'bg-slate-700/60 text-yellow-300 hover:bg-slate-600/60 border border-slate-600/50' 
                        : 'bg-white text-gray-800 hover:bg-gray-50 border border-gray-400 shadow-sm'
                    }`}
                    aria-label="Toggle theme"
                  >
                    {isDarkMode ? (
                      <>
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/>
                        </svg>
                        <span>Light</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"/>
                        </svg>
                        <span>Dark</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-5">
                <p className={`mb-3 text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  <span className="text-green-400">$</span> available commands: about, experience, projects
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.keys(sections).map((section, index) => (
                    <button
                      key={section}
                      onClick={() => setActiveSection(section)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transform hover:scale-105 ${
                        activeSection === section
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : isDarkMode
                          ? 'bg-slate-700/60 text-blue-200 hover:bg-slate-600/80 border border-slate-600/40 hover:text-white hover:border-blue-400/50'
                          : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200 hover:text-blue-900 hover:border-blue-300'
                      } ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                      style={{ 
                        transitionProperty: isLoaded 
                          ? 'background-color, border-color, color, transform' 
                          : 'background-color, border-color, color, transform, opacity',
                        transitionDuration: isLoaded ? '200ms' : '300ms',
                        transitionDelay: isLoaded ? '0ms' : `${800 + index * 100}ms`
                      }}
                    >
                      {section}
                    </button>
                  ))}
                </div>

                <div className={`rounded-xl p-4 transition-colors duration-300 ${
                  isDarkMode 
                    ? 'bg-slate-900/50 border border-slate-700/30' 
                    : 'bg-gray-100/80 border border-gray-300/50'
                }`}>
                  <div className={`leading-relaxed text-sm font-mono transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                    {sections[activeSection as keyof typeof sections].content(isDarkMode)}
                  </div>
                </div>

                <div className={`flex items-center space-x-2 mt-3 pt-3 transition-colors duration-300 ${
                  isDarkMode ? 'border-t border-slate-700/30' : 'border-t border-gray-300/50'
                }`}>
                  <span className="text-green-400 text-sm">$</span>
                  <span className={`text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>fredhe@portfolio:~/{activeSection}</span>
                  <span className="text-green-400 animate-pulse ml-2 text-sm">█</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
