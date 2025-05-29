import { useState } from "react";

const sections = {
  about: {
    title: "About",
    content: (
      <>
        I'm currently:
        <br /><br />
        - studying computer science @ <span className="text-blue-300 font-semibold">uoft</span>
        <br />
        - interning as a software engineer @ <span className="text-blue-300 font-semibold">sentri ai</span>
        <br />
        - working as a founding engineer @ <span className="text-blue-300 font-semibold">aeira</span>
        <br />
        - eating more and more food everyday
        <br />
        - hoping the <span className="text-orange-400 font-semibold">knicks</span> win the nba finals
        <br /><br />
        Let's connect about anything here!
      </>
    )
  },
  experience: {
    title: "Experience", 
    content: (
      <>
        I've worked on/as a:
        <br /><br />
        • software engineer intern @ <span className="text-blue-300 font-semibold">sentri ai</span>
        <br />
        &nbsp;&nbsp;- building software for law firms
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
    content: (
      <>
        I've created:
        <br /><br />
        • <span className="font-semibold">Freats</span>
        <br />
        &nbsp;&nbsp;- My personal food blog, with <span className="text-yellow-400">5000+ views</span> and <span className="text-yellow-400">15+ articles</span>
        <br />
        &nbsp;&nbsp;- Built with <span className="text-cyan-400">Javascript</span>, <span className="text-cyan-400">MongoDB</span>, <span className="text-cyan-400">Express.js</span>, and <span className="text-cyan-400">Node.js</span>
        <br /><br />
        • <span className="font-semibold">Reponote</span>
        <br />
        &nbsp;&nbsp;- AI README generator for <span className="text-yellow-400">150+ users</span>, generating <span className="text-yellow-400">250+ README's</span>
        <br />
        &nbsp;&nbsp;- Built with <span className="text-cyan-400">Next.js</span>, <span className="text-cyan-400">Supabase</span>, <span className="text-cyan-400">Stripe</span>, and <span className="text-cyan-400">OpenRouter</span>
        <br /><br />
        • <span className="font-semibold">Qnect</span>
        <br />
        &nbsp;&nbsp;- Blind dating app leveraging AI to match users
        <br />
        &nbsp;&nbsp;- Built with <span className="text-cyan-400">Vue.js</span>, <span className="text-cyan-400">MongoDB</span>, and <span className="text-cyan-400">Groq</span>
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 font-mono relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 text-left">
            <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-3 leading-tight">
              Hi, I'm Fred!
            </h1>
            
            <p className="text-base text-blue-200 mb-2 font-light">
              Studying cs @ uoft
            </p>
            <p className="text-sm text-gray-200 mb-4 leading-relaxed">
              I love working in fast-paced environments and building exciting products.
            </p>
            
            <div className="flex space-x-4 mb-6">
              <a href="https://github.com/fredh2006" className="group" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/fred-he-7ba540329/" className="group" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:fredhe56@gmail.com" className="group" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5 text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
            <div className="bg-slate-800/50 px-5 py-3 border-b border-slate-700/50 flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-300 text-xs font-medium">portfolio.terminal</span>
            </div>

            <div className="p-5">
              <p className="text-gray-200 mb-3 text-sm">
                <span className="text-green-400">$</span> available commands: about, experience, projects
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.keys(sections).map((section) => (
                  <button
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm ${
                      activeSection === section
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-slate-700/50 text-gray-200 hover:bg-slate-600/50 border border-slate-600/50 hover:text-white'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>

              <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/30">
                <div className="text-gray-100 leading-relaxed text-sm font-mono">
                  {sections[activeSection as keyof typeof sections].content}
                </div>
              </div>

              <div className="flex items-center space-x-2 mt-3 pt-3 border-t border-slate-700/30">
                <span className="text-green-400 text-sm">$</span>
                <span className="text-gray-300 text-sm">fredhe@portfolio:~/{activeSection}</span>
                <span className="text-green-400 animate-pulse ml-2 text-sm">█</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
