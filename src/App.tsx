import { useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { cinematicPortfolio } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

const splitWords = (text: string) => text.split(" ").map((word, index) => <span key={`${word}-${index}`}>{word} </span>);
const splitChars = (text: string) => text.split("").map((char, index) => <span key={`${char}-${index}`}>{char}</span>);

function App() {
	const [activePanel, setActivePanel] = useState(0);

	useLayoutEffect(() => {
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const isMobile = window.innerWidth <= 1024;
		let lenis: Lenis | undefined;
		const lenisTicker = (time: number) => lenis?.raf(time * 1000);

		if (!reduceMotion) {
			lenis = new Lenis({
				duration: 1.2,
				easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
				orientation: "vertical",
				gestureOrientation: "vertical",
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 1.5,
			});
			lenis.on("scroll", ScrollTrigger.update);
			gsap.ticker.add(lenisTicker);
			gsap.ticker.lagSmoothing(0);
		}

		const ctx = gsap.context(() => {
			if (reduceMotion) return;

			gsap.to("#hero .bg-media-container", {
				yPercent: 15,
				ease: "none",
				scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
			});

			const showNav = gsap.from(".navbar", { yPercent: -100, paused: true, duration: 0.4 }).progress(1);
			ScrollTrigger.create({
				start: "top top",
				end: "max",
				onUpdate: (self) => (self.direction === 1 ? showNav.reverse() : showNav.play()),
			});

			gsap.timeline({ scrollTrigger: { trigger: "#intro", start: "top top", end: "+=100%", pin: true, scrub: 1 } })
				.from("#intro-text span", { opacity: 0.1, stagger: 0.1, ease: "power2.out" })
				.from("#intro .bg-media-container", { filter: "blur(20px)", scale: 1.1 }, 0);

			if (!isMobile) {
				ScrollTrigger.create({
					trigger: "#about-pinned",
					start: "top top",
					end: "+=300%",
					pin: true,
					scrub: true,
					onUpdate: (self) => setActivePanel(self.progress < 0.33 ? 0 : self.progress < 0.66 ? 1 : 2),
				});

				gsap.utils.toArray<HTMLElement>(".about-img").forEach((img) => {
					gsap.fromTo(img, { scale: 0.8 }, { scale: 1, scrollTrigger: { trigger: "#about-pinned", start: "top top", end: "+=300%", scrub: true } });
				});

				const panels = gsap.utils.toArray<HTMLElement>(".work-panel");
				gsap.to(panels, {
					xPercent: -100 * (panels.length - 1),
					ease: "none",
					scrollTrigger: { trigger: "#work-horizontal", pin: true, scrub: 1, start: "top top", end: () => `+=${document.querySelector<HTMLElement>(".work-wrapper")?.offsetWidth ?? 0}` },
				});
				gsap.to(".scroll-progress-bar", {
					scaleX: 1,
					ease: "none",
					scrollTrigger: { trigger: "#work-horizontal", start: "top top", end: () => `+=${document.querySelector<HTMLElement>(".work-wrapper")?.offsetWidth ?? 0}`, scrub: true },
				});
			}

			gsap.utils.toArray<HTMLElement>(".process-step").forEach((step) => {
				gsap.fromTo(step.querySelector(".bg-media-container"), { yPercent: -10 }, { yPercent: 10, ease: "none", scrollTrigger: { trigger: step, start: "top bottom", end: "bottom top", scrub: true } });
				gsap.from(step.querySelector(".text-overlay"), { opacity: 0, y: 50, scrollTrigger: { trigger: step, start: "top center", end: "top center-=200", scrub: true } });
			});

			gsap.from("#testimonial-quote span", { opacity: 0, y: 20, stagger: 0.02, duration: 1, ease: "power2.out", scrollTrigger: { trigger: "#testimonial", start: "top center+=100", toggleActions: "play none none reverse" } });
			gsap.from(".cta-title", { scale: 0.95, letterSpacing: "-0.06em", duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: "#contact", start: "top bottom", toggleActions: "play none none reverse" } });
		});

		return () => {
			ctx.revert();
			gsap.ticker.remove(lenisTicker);
			lenis?.destroy();
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	return (
		<main>
			<Navbar />
			<Hero />
			<Intro />
			<AboutPinned activePanel={activePanel} />
			<WorkShowcase />
			<ProcessCinematic />
			<Testimonial />
			<Contact />
		</main>
	);
}

function Navbar() {
	return (
		<header className="navbar">
			<a href="#hero" aria-label="Back to hero">AK / 2026</a>
			<nav aria-label="Primary navigation">
				{cinematicPortfolio.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
			</nav>
		</header>
	);
}

function Hero() {
	return (
		<section id="hero" className="cinematic-section hero-frame">
			<div className="bg-media-container"><img src={cinematicPortfolio.media.hero} alt="Cinematic camera crew in moody light" /></div>
			<div className="section-gradient" />
			<div className="hero-content text-overlay">
				<p>{cinematicPortfolio.profile.caption}</p>
				<h1>{cinematicPortfolio.profile.name}</h1>
				<span>{cinematicPortfolio.profile.role}</span>
			</div>
		</section>
	);
}

function Intro() {
	return (
		<section id="intro" className="cinematic-section intro-story">
			<div className="bg-media-container"><img src={cinematicPortfolio.media.intro} alt="Director watching a monitor on a film set" /></div>
			<div className="section-gradient" />
			<p id="intro-text" className="text-overlay">{splitWords(cinematicPortfolio.intro.copy)}</p>
		</section>
	);
}

function AboutPinned({ activePanel }: { activePanel: number }) {
	return (
		<section id="about-pinned" className="cinematic-section about-pinned">
			<div className="about-copy text-overlay">
				{cinematicPortfolio.aboutPanels.map((panel, index) => (
					<article key={panel.kicker} className={activePanel === index ? "is-active" : ""}>
						<p>{panel.kicker}</p>
						<h2>{panel.text}</h2>
					</article>
				))}
			</div>
			<div className="about-visuals">
				{cinematicPortfolio.aboutPanels.map((panel, index) => (
					<img key={panel.image} className={`about-img ${activePanel === index ? "is-active" : ""}`} src={panel.image} alt={`${panel.kicker.toLowerCase()} visual study`} />
				))}
			</div>
		</section>
	);
}

function WorkShowcase() {
	return (
		<section id="work-horizontal" className="cinematic-section work-horizontal">
			<div className="progress-track"><div className="scroll-progress-bar" /></div>
			<div className="work-wrapper">
				{cinematicPortfolio.works.map((work) => (
					<article key={work.title} className="work-panel">
						<img src={work.image} alt={`${work.title} ${work.meta} still`} />
						<div className="section-gradient" />
						<div className="work-copy text-overlay">
							<p>{work.meta}</p>
							<h2>{work.title}</h2>
							<a href={work.link}>Request treatment</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

function ProcessCinematic() {
	return (
		<section className="process-cinematic" aria-label="Production process">
			{cinematicPortfolio.process.map((step) => (
				<article key={step.copy} className="cinematic-section process-step">
					<div className="bg-media-container"><img src={step.image} alt={`${step.copy.split("—")[0]} production stage`} /></div>
					<div className="section-gradient" />
					<h2 className="text-overlay">{step.copy}</h2>
				</article>
			))}
		</section>
	);
}

function Testimonial() {
	return (
		<section id="testimonial" className="cinematic-section testimonial-anthem">
			<div className="bg-media-container"><video src={cinematicPortfolio.media.testimonialVideo} autoPlay muted loop playsInline /></div>
			<div className="section-gradient" />
			<div className="text-overlay">
				<blockquote id="testimonial-quote">{splitChars(cinematicPortfolio.testimonial.quote)}</blockquote>
				<cite>{cinematicPortfolio.testimonial.credit}</cite>
			</div>
		</section>
	);
}

function Contact() {
	return (
		<section id="contact" className="cinematic-section contact-finale">
			<div className="bg-media-container"><img src={cinematicPortfolio.media.contact} alt="Dark cinematic landscape at dawn" /></div>
			<div className="section-gradient" />
			<div className="text-overlay">
				<h2 className="cta-title">{cinematicPortfolio.contact.title}</h2>
				<a className="cta-button" href={cinematicPortfolio.contact.briefHref}>{cinematicPortfolio.contact.cta}</a>
				<footer>
					{cinematicPortfolio.contact.links.map((link) => <a key={link.label} href={link.href}>{link.label}</a>)}
				</footer>
			</div>
		</section>
	);
}

export default App;
