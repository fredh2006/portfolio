import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function meta() {
  return [
    { title: "Projects - Fred He" },
    {
      name: "description",
      content: "My projects and work",
    },
  ];
}

export default function Projects() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily: "Crimson Text, Georgia, Palatino, Times New Roman, serif",
        background: "#ffffff",
      }}
    >
      {/* Animated Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 1000px at 20% 30%, rgba(167, 139, 250, 0.25) 0%, rgba(219, 234, 254, 0.15) 40%, transparent 70%), radial-gradient(circle 900px at 80% 70%, rgba(99, 102, 241, 0.2) 0%, rgba(237, 233, 254, 0.15) 40%, transparent 70%), radial-gradient(circle 800px at 50% 50%, rgba(147, 197, 253, 0.18) 0%, rgba(254, 242, 242, 0.12) 40%, transparent 70%)",
          zIndex: 0,
        }}
      ></div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -30px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
        `,
        }}
      />

      {/* Header */}
      <header className="relative z-10">
        <div className="max-w-4xl mx-auto px-8 pt-6 pb-2 flex items-center justify-between border-b border-neutral-200">
          <Link to="/" className="text-base font-normal text-neutral-500 hover:text-neutral-900 transition-colors">
            home
          </Link>

          <nav className="flex gap-2 text-lg">
            <a
              href="https://github.com/fredh2006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:text-neutral-500 transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/fred-he"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:text-neutral-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="mailto:fredhe56@gmail.com"
              className="text-neutral-900 hover:text-neutral-500 transition-colors"
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
            Things I've built and worked on.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              2025
            </time>
            <div className="flex-1">
              <a
                href="https://reponote.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-neutral-800 leading-relaxed group-hover:text-neutral-900 hover:underline"
              >
                Reponote
              </a>
              <p className="text-sm text-neutral-500 mt-1">
                AI README generator for developers. 150+ users, 250+ READMEs generated.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              2024
            </time>
            <div className="flex-1">
              <a
                href="https://www.youtube.com/watch?v=k2-dmvFxZMg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-neutral-800 leading-relaxed group-hover:text-neutral-900 hover:underline"
              >
                Qnect
              </a>
              <p className="text-sm text-neutral-500 mt-1">
                Blind dating app leveraging AI to match users based on personality and interests.
              </p>
            </div>
          </div>

          <div className="flex items-baseline gap-12 py-3 border-b border-neutral-200 transition-colors group">
            <time
              className="text-sm text-neutral-500 w-28 flex-shrink-0 tracking-wide"
              style={{ fontFamily: "DM Sans, sans-serif", fontWeight: "400" }}
            >
              2023
            </time>
            <div className="flex-1">
              <a
                href="https://freats.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-neutral-800 leading-relaxed group-hover:text-neutral-900 hover:underline"
              >
                Freats
              </a>
              <p className="text-sm text-neutral-500 mt-1">
                Food blog with 5000+ views and 15+ articles about restaurants and food culture.
              </p>
            </div>
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
        </div>
      </footer>
    </div>
  );
}
