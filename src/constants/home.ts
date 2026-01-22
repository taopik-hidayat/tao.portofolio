// Home Page Content - Hero, About, Work, Articles, Contact sections
export const HOME_CONTENT = {
  // Hero Section
  hero: {
    greeting: "Hello, I'm",
    name: "Taopik Hidayat",
  },

  // About Section - MENCERITAKAN KETANGGUHAN & KEAMANAN
  about: {
    title: "About",
    content: [
      "I am an independent explorer in the AI and Web3 space. Unlike many, I don't just consume technology; I audit and explore it—from securing mobile environments for crypto assets to advocating for open-source transparency.",
      "Building entirely from a legacy mobile device, I have learned that limitation breeds creativity. My journey is defined by resilience: turning hardware constraints into a discipline of optimization, security awareness, and unyielding persistence."
    ]
  },

  // Work/Projects Section - MENJELASKAN RISET BROWSER & SECURITY ANDA
  work: {
    title: "Current Focus",
    content: "My current research focuses on Mobile-Native Security. I am analyzing browser infrastructures (like Mises and more.) and experimenting with secure seed phrase storage on limited-resource devices. This work demonstrates that the future of Open Source AI must be accessible to everyone, not just those with high-end hardware.",
    linkText: "VIEW RESEARCH",
    linkHref: "/projects"
  },

  // Articles Section - "MANIFESTO" ANDA TENTANG HP JADUL & ADOPSI
  articles: {
    title: "Perspective",
    content: "The Reality of Mobile Web3 Adoption: Exploring the decentralized web exclusively from a legacy Android device has taught me a crucial lesson—security is a mindset, not a spec sheet. I advocate for an AI future that remains open and usable for the global majority, bridging the gap between complex tech and real-world constraints.",
    linkText: "READ THOUGHTS",
    linkHref: "/articles"
  },

  // Contact Section - LEBIH TEGAS & BERKARAKTER
  contact: {
    title: "Contact",
    content: "I am ready to contribute to the open-source narrative. If you value resilience, independent thinking, and a boots-on-the-ground perspective on AI adoption, let's connect.",
    linkText: "LET'S CONNECT",
    linkHref: "/contact"
  }
} as const;
  
