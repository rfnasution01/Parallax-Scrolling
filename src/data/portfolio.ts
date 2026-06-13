export const portfolio = {
	profile: {
		name: "Nara Aksara",
		initials: "NA",
		role: "Fresh Graduate Frontend Developer",
		tagline: "Membangun antarmuka web yang cepat, rapi, dan terasa hidup saat discroll.",
		description:
			"Lulusan Informatika yang fokus pada React, TypeScript, dan UI motion yang tetap aksesibel. Saya mengubah kebutuhan bisnis menjadi pengalaman digital yang jelas, ringan, dan mudah digunakan HRD maupun pengguna akhir.",
		location: "Bandung, Indonesia",
		resumeUrl: "/CV-Nara-Aksara.pdf",
		availability: "Siap untuk Junior Frontend Role, internship lanjutan, dan project kolaboratif.",
	},
	socials: [
		{ label: "Email", href: "mailto:nara.aksara@example.com" },
		{ label: "LinkedIn", href: "https://linkedin.com/in/naraaksara" },
		{ label: "GitHub", href: "https://github.com/naraaksara" },
	],
	about: {
		title: "Dari fresh graduate menjadi problem solver yang siap berkontribusi.",
		body:
			"Saya terbiasa menerjemahkan brief menjadi user flow, wireframe, hingga implementasi React yang reusable. Dalam setiap project, saya menjaga tiga hal: keterbacaan kode, performa halaman, dan detail interaksi yang membantu pengguna fokus pada informasi penting.",
		metrics: [
			{ value: "8+", label: "project kampus & personal" },
			{ value: "92", label: "skor Lighthouse terbaik" },
			{ value: "3", label: "bulan pengalaman magang" },
		],
	},
	skills: [
		{ name: "React + TypeScript", level: 88, detail: "Reusable component, hooks, state lifting" },
		{ name: "Tailwind CSS", level: 90, detail: "Responsive layout, design token, dark UI" },
		{ name: "UI/UX Fundamentals", level: 78, detail: "Wireframe, accessibility, user journey" },
		{ name: "Animation & Motion", level: 72, detail: "Micro-interaction, CSS transform, parallax concept" },
		{ name: "REST API Integration", level: 76, detail: "Fetch lifecycle, loading state, error handling" },
		{ name: "Git Collaboration", level: 82, detail: "Branching, pull request, code review basics" },
	],
	projects: [
		{
			title: "HireFlow Dashboard",
			description:
				"Dashboard rekrutmen dummy untuk memantau kandidat, pipeline interview, dan prioritas follow-up HRD dalam satu tampilan ringkas.",
			impact: "Mengurangi waktu scanning data kandidat dari 5 menit menjadi simulasi 45 detik.",
			tags: ["React", "TypeScript", "Dashboard"],
			link: "#",
			accent: "cyan",
		},
		{
			title: "KarsaLearn Landing Page",
			description:
				"Landing page edukasi dengan struktur hero, benefit, pricing, dan CTA yang dioptimalkan untuk konversi mobile-first.",
			impact: "Mencapai skor Lighthouse Performance 92 pada build produksi Vite.",
			tags: ["Tailwind", "Responsive", "UX Writing"],
			link: "#",
			accent: "violet",
		},
		{
			title: "Motion Portfolio Concept",
			description:
				"Eksperimen portofolio naratif berbasis scroll dengan layer background, reveal card, dan efek depth yang tetap nyaman dibaca.",
			impact: "Menerapkan reduced motion fallback dan layout tetap terbaca tanpa JavaScript.",
			tags: ["Parallax", "Accessibility", "CSS"],
			link: "#",
			accent: "cyan-violet",
		},
	],
	contact: {
		email: "nara.aksara@example.com",
		phone: "+62 812 3456 7890",
		cta: "Tertarik mengundang saya interview? Mari mulai dari percakapan singkat.",
	},
} as const;
