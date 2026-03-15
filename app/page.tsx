import StatsCounter from './components/StatsCounter';
import CareerTimeline from './components/CareerTimeline';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#ffffff", color: "#1a1a1a" }}>
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* Hero */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Kyle DeCubellis
          </h1>
          <p className="text-lg md:text-xl font-medium mb-6" style={{ color: "#1e3a5f" }}>
            VP of Product &nbsp;|&nbsp; Hardware Leader &nbsp;|&nbsp; Builder
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: "#6b7280" }}>
            15+ years building consumer electronics products from concept to
            mass production. 5 patents. Currently building iOS/Android apps with
            AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:kyledecubellis@gmail.com" className="btn-pill">
              kyledecubellis@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/kdecubellis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
            >
              LinkedIn
            </a>
          </div>
        </section>

        {/* Stats — no divider above, lets it breathe right after hero */}
        <StatsCounter />

        <Divider />

        {/* About */}
        <section className="mb-20">
          <SectionLabel>About</SectionLabel>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: "#6b7280" }}>
            Product and hardware leader who&apos;s built and scaled consumer
            electronics at Bose, Hatch, and Raycon. I build product orgs, manage
            China manufacturing, ship physical products at scale, and use AI
            tools to move faster than teams 10x my size. Based in Massachusetts.
          </p>
        </section>

        <Divider />

        {/* Experience — visual timeline */}
        <section className="mb-20">
          <SectionLabel>Experience</SectionLabel>
          <CareerTimeline />
        </section>

        <Divider />

        {/* Current Projects */}
        <section className="mb-20">
          <SectionLabel>Current Projects</SectionLabel>
          <div className="space-y-4">
            <ProjectCard
              title="AI-Powered Product Operations"
              description="Built automated VOC analysis, competitive intelligence agents, and generative content pipelines reducing operational workload 87%."
            />
            <ProjectCard
              title="Cross-Platform Mobile Development"
              description="Building native iOS/Android applications using AI development tools, specializing in BLE device integrations."
            />
            <ProjectCard
              title="Web Development"
              description="Designing and deploying websites for local businesses using Next.js, Tailwind, and Vercel."
            />
          </div>
        </section>

        <Divider />

        {/* Patents */}
        <section className="mb-20">
          <SectionLabel>Patents</SectionLabel>
          <div className="space-y-4">
            <PatentItem
              number="US20210341762A1"
              title="Modular acoustic systems"
              url="https://patents.google.com/patent/US20210341762A1"
            />
            <PatentItem
              number="US10820088B2"
              title="Active noise reduction earphone"
              url="https://patents.google.com/patent/US10820088B2"
            />
            <PatentItem
              number="US20170034615A1"
              title="Integration of Sensors into Earphones"
              url="https://patents.google.com/patent/US20170034615A1"
            />
            <PatentItem
              number="US9635448B2"
              title="T-shaped Joint in a headphone cord"
              url="https://patents.google.com/patent/US9635448B2"
            />
          </div>
        </section>

        <Divider />

        {/* Contact */}
        <section className="mb-16">
          <SectionLabel>Contact</SectionLabel>
          <p className="text-base mb-6" style={{ color: "#6b7280" }}>
            Open to conversations about product strategy, hardware, and AI.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:kyledecubellis@gmail.com" className="text-sm font-medium link-accent">
              kyledecubellis@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/kdecubellis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium link-accent"
            >
              linkedin.com/in/kdecubellis
            </a>
          </div>
        </section>

        <footer
          className="text-xs pt-8 border-t"
          style={{ color: "#9ca3af", borderColor: "#e5e7eb" }}
        >
          Kyle DeCubellis &copy; {new Date().getFullYear()}
        </footer>
      </main>
    </div>
  );
}

function Divider() {
  return <hr className="mb-20" style={{ borderColor: "#e5e7eb" }} />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold uppercase tracking-widest mb-6"
      style={{ color: "#1e3a5f" }}
    >
      {children}
    </p>
  );
}

function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="project-card">
      <p className="text-sm font-semibold mb-2">{title}</p>
      <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
        {description}
      </p>
    </div>
  );
}

function PatentItem({
  number,
  title,
  url,
}: {
  number: string;
  title: string;
  url: string;
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-3">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs font-mono link-accent"
      >
        {number}
      </a>
      <span className="text-sm" style={{ color: "#6b7280" }}>
        {title}
      </span>
    </div>
  );
}
