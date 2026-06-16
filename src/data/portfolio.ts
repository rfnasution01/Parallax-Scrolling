export const cinematicPortfolio = {
	profile: {
		name: "ALEXA KANE",
		role: "DIRECTOR OF PHOTOGRAPHY / VISUAL ARCHITECT",
		caption: "SELECTED PORTFOLIO ARCHIVE • 2026",
		email: "brief@alexakane.studio",
	},
	nav: [
		{ label: "Intro", href: "#intro" },
		{ label: "Method", href: "#about-pinned" },
		{ label: "Work", href: "#work-horizontal" },
		{ label: "Contact", href: "#contact" },
	],
	media: {
		hero: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2200&q=85",
		intro: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?auto=format&fit=crop&w=2200&q=85",
		testimonialVideo: "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
		contact: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85",
	},
	intro: {
		copy: "Light is raw noise. Composition is the filter. I freeze frames not to store memories, but to provoke internal revolutions. Every single pixel must serve the narrative blueprint.",
	},
	aboutPanels: [
		{
			kicker: "THE EYE",
			text: "Born in darkrooms, evolved in digital chaos. I chase the friction between shadows and blinding highlights.",
			image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=85",
		},
		{
			kicker: "THE METHOD",
			text: "No static templates. Every project demands a unique optical identity, custom lenses, and raw human movement.",
			image: "https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?auto=format&fit=crop&w=1600&q=85",
		},
		{
			kicker: "THE PURPOSE",
			text: "Working globally with premium brands to turn commercial briefs into unforgettable short-form cinema.",
			image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=1600&q=85",
		},
	],
	works: [
		{
			title: "01 / ECLIPSE RISING",
			meta: "FASHION FILM",
			image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=85",
			link: "mailto:brief@alexakane.studio?subject=Treatment%20Request%20-%20Eclipse%20Rising",
		},
		{
			title: "02 / SILICON HORIZON",
			meta: "BRAND FILM",
			image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=85",
			link: "mailto:brief@alexakane.studio?subject=Treatment%20Request%20-%20Silicon%20Horizon",
		},
		{
			title: "03 / THE LAST MONOLITH",
			meta: "DOCUMENTARY",
			image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=85",
			link: "mailto:brief@alexakane.studio?subject=Treatment%20Request%20-%20The%20Last%20Monolith",
		},
		{
			title: "04 / CHRONICLES OF DUST",
			meta: "MUSIC VIDEO",
			image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1800&q=85",
			link: "mailto:brief@alexakane.studio?subject=Treatment%20Request%20-%20Chronicles%20of%20Dust",
		},
	],
	process: [
		{
			copy: "01 / DISCOVERY — Stripping the concept down to its core emotional frequency.",
			image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=85",
		},
		{
			copy: "02 / VISUAL SCORE — Drafting custom color profiles, lighting grids, and framing rules.",
			image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=85",
		},
		{
			copy: "03 / EXECUTION — Capturing raw, uncompromised fidelity on high-end cinema sensors.",
			image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?auto=format&fit=crop&w=1800&q=85",
		},
		{
			copy: "04 / REFINEMENT — Frame-by-frame color grading to enforce the psychological tone.",
			image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1800&q=85",
		},
	],
	testimonial: {
		quote: "Alexa doesn't just record what is there. She shapes how the audience feels about what is there. A masterclass in cinematic branding.",
		credit: "— MARCUS VANE, CREATIVE DIRECTOR AT RITUAL LABS",
	},
	contact: {
		title: "LET'S WRITE THE UNFORGETTABLE.",
		cta: "INITIATE BRIEF PROJECT",
		briefHref: "mailto:brief@alexakane.studio?subject=New%20Cinematic%20Brief%20Project",
		links: [
			{ label: "FILM ARCHIVE", href: "#work-horizontal" },
			{ label: "INSTAGRAM", href: "https://instagram.com/" },
			{ label: "LINKEDIN", href: "https://linkedin.com/" },
			{ label: "AWARDS", href: "mailto:brief@alexakane.studio?subject=Awards%20Deck%20Request" },
		],
	},
} as const;
