import { Link } from "react-router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function meta() {
  return [
    { title: "Fred He" },
    {
      name: "description",
      content: "My personal website. Take a peak into my life!",
    },
  ];
}

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const estTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Toronto",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(estTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily: "Crimson Text, Georgia, Palatino, Times New Roman, serif",
        background: "#F8F6EE",
      }}
    >

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-4xl mx-auto px-8 pt-6 pb-2 flex items-center justify-between border-b border-neutral-200">
          <Link to="/projects" className="text-base font-normal text-neutral-500 hover:text-neutral-900 transition-colors">
            projects
          </Link>

          <nav className="flex gap-2 text-lg">
            <a
              href="https://github.com/fredh2006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-950 hover:text-neutral-600 transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/fred-he"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-950 hover:text-neutral-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:fredhe56@gmail.com"
              className="text-neutral-950 hover:text-neutral-600 transition-colors"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        {/* Intro */}
        <div className="mb-20">
          <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
            Hey, I'm Fred. Studying CS @ University of Toronto & Founding Engineer @ <a href="https://milieuskin.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Milieu</a>.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              currently
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Accelerating microbiome consciousness @ Milieu and trying to reach GM in TFT
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              10/30/2025
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              <a href="https://lolchess.gg/profile/na/confucius-sage/set15" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Hit Masters in TFT
              </a>
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              10/23/2025
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Went to SF for Boost VC Bio Residency & meeting the team
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              9/4/2025
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Offered & accepted role @ <a href="https://milieuskin.com" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Milieu</a>
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              9/1/2025
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Started sophmore year at University of Toronto
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              6/20/2025
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Built software for law firms @ <a href="https://sentriai.xyz" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Sentri</a>
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              1/1/2025
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Built campus marketplaces @ <a href="https://empor.ca" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ background: 'linear-gradient(135deg, #ec4899, #f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Empor</a>
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              9/5/2024
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Started freshman year at University of Toronto
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              2/15/2024
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Got into Univerity of Toronto
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              8/1/2023
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Started Freats, my food blog
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              9/10/2020
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Took first CS class - AP Computer Science Principles
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              11/14/2018
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Introduced to League of Legends
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              1/10/2010
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Moved from Shanghai to Canada
            </p>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              12/21/2006
            </time>
            <p className="text-base text-neutral-800 flex-1 leading-relaxed group-hover:text-neutral-900">
              Born in Shanghai, China
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 max-w-4xl mx-auto px-8 py-8 mt-20">
        <div className="border-t border-neutral-200 pt-8 flex items-center justify-between">
          <p
            className="text-sm text-neutral-400"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Made with love in Toronto
          </p>
          <p
            className="text-sm text-neutral-400"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Toronto, CA · {time}
          </p>
        </div>
      </footer>
    </div>
  );
}
