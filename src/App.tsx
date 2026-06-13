import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

const navItems = ["about", "skills", "projects", "contact"];

function App() {
	return (
		<main className="relative min-h-screen overflow-hidden bg-[#0B0F19] text-white">
			<div className="pointer-events-none fixed inset-0 z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(6,182,212,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.16),transparent_28%)]" />
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
}

function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 50);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "h-16 bg-[#0B0F19]/80 shadow-lg shadow-cyan-950/20 backdrop-blur-xl" : "h-24 bg-transparent backdrop-blur-0"}`}>
			<nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
				<a href="#hero" className="font-heading text-lg font-extrabold tracking-tight">
					<span className="text-cyan-300">{portfolio.profile.initials}</span> / {portfolio.profile.name}
				</a>
				<div className="hidden gap-7 text-sm text-slate-300 md:flex">
					{navItems.map((item) => (
						<a key={item} href={`#${item}`} className="nav-link capitalize">
							{item}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}

function Hero() {
	return (
		<section id="hero" className="relative isolate min-h-screen overflow-hidden px-6 pt-32">
			<div className="parallax-bg absolute inset-0 z-10 opacity-25" />
			<div className="pointer-events-none absolute right-[-6rem] top-28 z-20 hidden h-80 w-80 rounded-full bg-[#1E2640] blur-3xl md:block" />
			<div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
				<div className="relative z-30">
					<p className="section-label">{portfolio.profile.role}</p>
					<h1 className="hero-title mt-5 max-w-5xl font-heading text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
						{portfolio.profile.tagline}
					</h1>
					<p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">{portfolio.profile.description}</p>
					<div className="mt-9 flex flex-wrap gap-4">
						<a className="btn-primary" href="#projects">Lihat Project</a>
						<a className="btn-ghost" href={portfolio.profile.resumeUrl}>Download CV</a>
					</div>
				</div>
				<div className="relative z-20 mx-auto w-full max-w-md">
					<div className="initial-orb parallax-mid mx-auto flex aspect-square items-center justify-center rounded-[3rem] border border-white/10 bg-[#1E2640]/70 shadow-2xl shadow-violet-950/30">
						<span className="font-heading text-8xl font-extrabold text-white/90 md:text-9xl">{portfolio.profile.initials}</span>
					</div>
					<div className="relative z-30 -mt-12 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Available for</p>
						<h2 className="mt-3 text-xl font-semibold leading-7">{portfolio.profile.availability}</h2>
						<div className="mt-5 grid gap-2 text-sm text-slate-300">
							<p>{portfolio.profile.location}</p>
							{portfolio.socials.map((social) => <a key={social.label} href={social.href} className="text-cyan-200 transition hover:text-violet-300">{social.label} →</a>)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function About() {
	const words = portfolio.about.body.split(" ");
	return (
		<section id="about" className="section-shell">
			<p className="section-label">About</p>
			<div className="mt-6 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
				<h2 className="section-title reveal-up">{portfolio.about.title}</h2>
				<div>
					<p className="word-reveal text-lg leading-9 text-slate-300">{words.map((word, index) => <span key={`${word}-${index}`}>{word} </span>)}</p>
					<div className="mt-9 grid gap-4 sm:grid-cols-3">
						{portfolio.about.metrics.map((metric) => <div key={metric.label} className="depth-card p-5"><strong className="font-heading text-3xl text-cyan-300">{metric.value}</strong><p className="mt-2 text-sm text-slate-400">{metric.label}</p></div>)}
					</div>
				</div>
			</div>
		</section>
	);
}

function Skills() {
	return (
		<section id="skills" className="relative border-y border-white/10 bg-white/[0.03]">
			<div className="section-shell">
				<p className="section-label">Toolkit</p>
				<h2 className="section-title mt-6 reveal-up">Skill yang relevan untuk role frontend junior.</h2>
				<div className="mt-10 grid gap-5 md:grid-cols-2">
					{portfolio.skills.map((skill) => (
						<div key={skill.name} className="depth-card group p-6">
							<div className="flex items-start justify-between gap-4">
								<div><h3 className="text-xl font-semibold">{skill.name}</h3><p className="mt-2 text-sm text-slate-400">{skill.detail}</p></div>
								<span className="opacity-0 text-sm font-semibold text-cyan-300 transition group-hover:opacity-100">{skill.level}%</span>
							</div>
							<div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-800"><div className="skill-fill h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" style={{ width: `${skill.level}%` }} /></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

function Projects() {
	return (
		<section id="projects" className="section-shell">
			<p className="section-label">Projects</p>
			<h2 className="section-title mt-6 reveal-up">Bukti kemampuan melalui card reveal interaktif.</h2>
			<div className="mt-10 grid gap-6 lg:grid-cols-3">
				{portfolio.projects.map((project, index) => (
					<a key={project.title} href={project.link} className="project-card group">
						<div className="project-visual"><div className={`project-gradient accent-${project.accent}`} /><span>0{index + 1}</span></div>
						<div className="p-6">
							<h3 className="text-xl font-semibold">{project.title}</h3>
							<p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>
							<p className="mt-4 translate-y-2 text-sm font-medium text-cyan-200 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{project.impact}</p>
							<div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">{tag}</span>)}</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}

function Contact() {
	return (
		<section id="contact" className="relative px-6 py-24">
			<div className="contact-magnet absolute inset-x-0 bottom-0 z-10 h-72 rounded-t-[50%] bg-gradient-to-t from-cyan-500/15 to-transparent" />
			<div className="relative z-30 mx-auto max-w-6xl rounded-[2rem] border border-cyan-300/20 bg-[#10182A]/90 p-8 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl md:p-12">
				<p className="section-label">Contact</p>
				<h2 className="mt-4 max-w-3xl font-heading text-4xl font-bold tracking-tight md:text-5xl">{portfolio.contact.cta}</h2>
				<div className="mt-8 flex flex-wrap gap-4">
					<a className="btn-primary" href={`mailto:${portfolio.contact.email}`}>Email saya</a>
					<a className="btn-ghost" href={`tel:${portfolio.contact.phone}`}>{portfolio.contact.phone}</a>
				</div>
			</div>
		</section>
	);
}

export default App;
