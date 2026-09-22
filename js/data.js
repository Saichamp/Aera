/* ============================================================
   AERA by Sai — Data Store
   ============================================================ */

const AERA = {
  currentWeek: {
    id: 1,
    theme: "Students",
    emoji: "🎓",
    color: "#4d9eff",
    tagline: "Tools that make studying smarter, not harder.",
    description: "This week we handpicked 6 AI tools that every student should know about — from AI tutors to research assistants that actually work.",
    publishDate: "Sep 20, 2026"
  },

  weeks: [
    { id: 1, theme: "Students",   emoji: "🎓", tagline: "Study smarter, not harder." },
    { id: 2, theme: "Freshers",   emoji: "🚀", tagline: "Launch your career with AI." },
    { id: 3, theme: "Creators",   emoji: "🎨", tagline: "Create content 10× faster." },
    { id: 4, theme: "Developers", emoji: "💻", tagline: "Code, ship, repeat." },
    { id: 5, theme: "Founders",   emoji: "⚡", tagline: "Build, validate, grow." },
  ],

  tools: [
    /* ─ Week 1: Students ─ */
    {
      id: "perplexity",
      name: "Perplexity AI",
      icon: "🔍",
      oneLiner: "AI-powered search that actually cites its sources.",
      description: "Perplexity replaces your research rabbit holes with cited, conversational answers. Perfect for literature reviews, fact-checking, and deep research.",
      audience: "Students",
      week: 1,
      tags: ["Research", "Search", "Study"],
      rating: 5,
      link: "https://perplexity.ai",
      featured: true
    },
    {
      id: "notebooklm",
      name: "NotebookLM",
      icon: "📓",
      oneLiner: "Google's AI that talks to your own documents.",
      description: "Upload your PDFs, notes, and slides — NotebookLM reads them all and lets you have a conversation with your study material.",
      audience: "Students",
      week: 1,
      tags: ["Notes", "Study", "Google"],
      rating: 5,
      link: "https://notebooklm.google.com",
      featured: true
    },
    {
      id: "khanmigo",
      name: "Khanmigo",
      icon: "🧑‍🏫",
      oneLiner: "Your AI tutor that never gives you the answer directly.",
      description: "Built by Khan Academy, Khanmigo guides you through problems with Socratic questioning — so you actually learn, not just copy.",
      audience: "Students",
      week: 1,
      tags: ["Tutoring", "Learning", "STEM"],
      rating: 4,
      link: "https://khanacademy.org/khanmigo",
      featured: true
    },
    {
      id: "notion-ai",
      name: "Notion AI",
      icon: "📝",
      oneLiner: "Your second brain, now with an AI co-pilot.",
      description: "Draft essays, summarize long readings, create study schedules — Notion AI turns your workspace into a true knowledge engine.",
      audience: "Students",
      week: 1,
      tags: ["Productivity", "Writing", "Notes"],
      rating: 4,
      link: "https://notion.so/ai",
      featured: true
    },
    {
      id: "photomath",
      name: "Mathway + AI",
      icon: "🔢",
      oneLiner: "Snap a math problem, get a step-by-step solution.",
      description: "Point your camera at any equation — from algebra to calculus — and get an instant, explained walkthrough. No more staring at unsolved problems.",
      audience: "Students",
      week: 1,
      tags: ["Math", "STEM", "Visual"],
      rating: 4,
      link: "https://mathway.com",
      featured: false
    },
    {
      id: "quizlet-ai",
      name: "Quizlet AI",
      icon: "🃏",
      oneLiner: "Turn any notes into flashcards in seconds.",
      description: "Paste your lecture notes and Quizlet's AI generates a full flashcard deck, study guide, and practice quiz. Exam prep has never been faster.",
      audience: "Students",
      week: 1,
      tags: ["Flashcards", "Memory", "Exam Prep"],
      rating: 4,
      link: "https://quizlet.com",
      featured: false
    },

    /* ─ Freshers ─ */
    {
      id: "rezi",
      name: "Rezi AI",
      icon: "📄",
      oneLiner: "The AI resume builder that beats ATS filters.",
      description: "Rezi analyzes job descriptions and rewrites your resume to pass automated screening — giving freshers a real shot at shortlists.",
      audience: "Freshers",
      week: 2,
      tags: ["Resume", "Job Hunt", "Career"],
      rating: 5,
      link: "https://rezi.ai"
    },
    {
      id: "interviewai",
      name: "Interview Warmup",
      icon: "🎤",
      oneLiner: "Google's free AI mock interviewer.",
      description: "Practice real interview questions with an AI coach that gives instant feedback on your answers, filler words, and body language cues.",
      audience: "Freshers",
      week: 2,
      tags: ["Interview", "Careers", "Google"],
      rating: 4,
      link: "https://grow.google/certificates/interview-warmup/"
    },
    {
      id: "linkedin-ai",
      name: "LinkedIn AI",
      icon: "💼",
      oneLiner: "AI-written job applications that match each role.",
      description: "LinkedIn's built-in AI now rewrites your headline, about section, and cover letters tailored to every job you apply for.",
      audience: "Freshers",
      week: 2,
      tags: ["LinkedIn", "Networking", "Career"],
      rating: 4,
      link: "https://linkedin.com"
    },

    /* ─ Creators ─ */
    {
      id: "runwayml",
      name: "Runway Gen-3",
      icon: "🎬",
      oneLiner: "Turn your text into cinematic video in seconds.",
      description: "Runway's Gen-3 Alpha is the most advanced AI video generator for creators — generate B-roll, transitions, and visual effects from a single prompt.",
      audience: "Creators",
      week: 3,
      tags: ["Video", "Generation", "Visual"],
      rating: 5,
      link: "https://runwayml.com"
    },
    {
      id: "capcut-ai",
      name: "CapCut AI",
      icon: "✂️",
      oneLiner: "Reels-ready edits in one tap.",
      description: "Auto-captions, beat sync, background removal, and viral templates — CapCut's AI features make every creator look like a pro editor.",
      audience: "Creators",
      week: 3,
      tags: ["Video Editing", "Reels", "Content"],
      rating: 5,
      link: "https://capcut.com"
    },
    {
      id: "elevenlabs",
      name: "ElevenLabs",
      icon: "🎙️",
      oneLiner: "Clone your voice or generate any voice imaginable.",
      description: "The most realistic AI voice generator available. Perfect for YouTube narration, podcast intros, and audio content without recording studios.",
      audience: "Creators",
      week: 3,
      tags: ["Voice", "Audio", "Podcast"],
      rating: 5,
      link: "https://elevenlabs.io"
    },

    /* ─ Developers ─ */
    {
      id: "cursor",
      name: "Cursor",
      icon: "⚡",
      oneLiner: "The AI-first code editor that replaces your IDE.",
      description: "Cursor is VS Code reimagined with GPT-4 baked in — tab-complete entire functions, refactor with chat, and debug with context-aware suggestions.",
      audience: "Developers",
      week: 4,
      tags: ["Coding", "IDE", "AI Pair"],
      rating: 5,
      link: "https://cursor.sh"
    },
    {
      id: "v0",
      name: "v0 by Vercel",
      icon: "🔷",
      oneLiner: "Prompt your UI into existence.",
      description: "Describe a UI, get production-ready React + Tailwind code instantly. v0 is the fastest way from idea to shipped component in 2025.",
      audience: "Developers",
      week: 4,
      tags: ["UI", "React", "Frontend"],
      rating: 5,
      link: "https://v0.dev"
    },
    {
      id: "warp",
      name: "Warp Terminal",
      icon: "🖥️",
      oneLiner: "Your terminal, now with an AI command assistant.",
      description: "Type natural language into your terminal and Warp translates it to shell commands. Never forget a git command or awk syntax again.",
      audience: "Developers",
      week: 4,
      tags: ["Terminal", "CLI", "DevTools"],
      rating: 4,
      link: "https://warp.dev"
    },

    /* ─ Founders ─ */
    {
      id: "clay",
      name: "Clay",
      icon: "🏺",
      oneLiner: "AI-powered outreach that knows everything about your leads.",
      description: "Clay scrapes 50+ data sources and uses AI to write hyper-personalized cold emails at scale — the secret weapon of modern GTM teams.",
      audience: "Founders",
      week: 5,
      tags: ["Outreach", "Sales", "GTM"],
      rating: 5,
      link: "https://clay.com"
    },
    {
      id: "gamma",
      name: "Gamma",
      icon: "📊",
      oneLiner: "Your pitch deck, done in 30 seconds.",
      description: "Paste your idea and Gamma builds a beautiful, investor-ready presentation with AI-generated visuals, layouts, and copy. Pitch faster.",
      audience: "Founders",
      week: 5,
      tags: ["Pitch Deck", "Presentations", "Startup"],
      rating: 5,
      link: "https://gamma.app"
    },
    {
      id: "fireflies",
      name: "Fireflies AI",
      icon: "🔥",
      oneLiner: "Every meeting, automatically transcribed and summarized.",
      description: "Fireflies records, transcribes, and creates action-item summaries for every call. Founders never miss a follow-up or forget a key detail again.",
      audience: "Founders",
      week: 5,
      tags: ["Meetings", "Productivity", "Notes"],
      rating: 4,
      link: "https://fireflies.ai"
    },
  ],

  lab: [
    {
      index: "LAB-01",
      title: "ChatGPT vs Perplexity: Which should students use in 2025?",
      excerpt: "We ran both through 40 real student questions. The results surprised us — one clearly wins for research, the other for creative work.",
      tag: "Deep Dive",
      readTime: "6 min read",
      date: "Sep 18, 2026"
    },
    {
      index: "LAB-02",
      title: "We used 5 AI tools to write a college assignment. Here's what happened.",
      excerpt: "One tool wrote it in 3 minutes. Another needed so much prompting it took longer than doing it manually. Honest breakdown inside.",
      tag: "Experiment",
      readTime: "8 min read",
      date: "Sep 12, 2026"
    },
    {
      index: "LAB-03",
      title: "The AI Resume Stack: 4 tools working together for fresher job hunts.",
      excerpt: "We combined Rezi + LinkedIn AI + Perplexity + ChatGPT into a single workflow. From bare CV to interview invite in 72 hours.",
      tag: "Workflow",
      readTime: "5 min read",
      date: "Sep 05, 2026"
    },
  ],

  audiences: [
    { key: "Students",   emoji: "🎓", desc: "Tools for learning, studying, and academic excellence." },
    { key: "Freshers",   emoji: "🚀", desc: "Kick-start your career with AI-powered job tools." },
    { key: "Creators",   emoji: "🎨", desc: "Make content faster, look more professional." },
    { key: "Developers", emoji: "💻", desc: "Ship better code with AI as your co-pilot." },
    { key: "Founders",   emoji: "⚡", desc: "Build, grow, and scale with AI leverage." },
  ],

  social: {
    instagram: "@aerabysai",
    youtube: "AERA by Sai",
    instagramUrl: "#",
    youtubeUrl: "#",
    stats: {
      tools: "40+",
      weeks: "5",
      audiences: "5",
      community: "2K"
    }
  }
};
