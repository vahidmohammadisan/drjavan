import React, { useState, useEffect } from 'react';
import { Sun, Moon, Instagram, Twitter, Send, Mail, Github, Linkedin, Download, ChevronDown } from 'lucide-react';

const translations = {
  en: {
    home: "Home",
    about: "About Me",
    skillsNav: "Expertise",
    portfolio: "Publications",
    contact: "Contact",
    greeting: "",
    name: "Dr.Saeed ParhizJavan",
    role: "Pharmacist",
    downloadCV: "Visit our pharmacy's webpage",
    aboutText: "A dedicated Pharmacist with over 10 years of experience in pharmaceutical care, medication therapy management, and patient counseling. Specialized in developing personalized medication plans and improving patient outcomes through evidence-based practice.",
    skillsSection: {
      title: "Areas of Expertise",
      clinical: "Pharmacy",
      research: "Pharmaceutical Research",
      patient: "Patient Care",
      management: "Pharmacy Management"
    },
    portfolioSection: {
      title: "Research & Publications",
      viewProject: "Read More"
    },
    contactMe: "Let's Connect",
    contactText: "Available for consultations, research collaborations, or professional inquiries",
    followMe: "Find me on social media",
    rights: "All rights reserved"
  },
  fa: {
    home: "صفحه اصلی",
    about: "درباره من",
    skillsNav: "تخصص‌ها",
    portfolio: "انتشارات",
    contact: "تماس با من",
    greeting: "",
    name: "دکتر سعید پرهیزجوان",
    role: "داروساز",
    downloadCV: "برو به وبسایت داروخانه",
    aboutText: "یک داروساز متعهد با بیش از 10 سال تجربه در مراقبت های دارویی، مدیریت دارودرمانی ، مشاوره دارویی بیمار، مدیریت داروخانه و فعال حوزه داروسازی. متخصص در توسعه برنامه های دارویی شخصی و بهبود نتایج بیمار از طریق تمرین مبتنی بر شواهد.",
    skillsSection: {
      title: "حوزه‌های تخصصی",
      clinical: "داروسازی",
      research: "تحقیقات دارویی",
      patient: "مراقبت از بیمار",
      management: "مدیریت داروخانه"
    },
    portfolioSection: {
      title: "تحقیقات و انتشارات",
      viewProject: "مطالعه بیشتر"
    },
    contactMe: "در ارتباط باشیم",
    contactText: "آماده مشاوره، همکاری‌های تحقیقاتی یا پرسش‌های حرفه‌ای",
    followMe: "من را در شبکه‌های اجتماعی دنبال کنید",
    rights: "تمامی حقوق محفوظ است"
  }
};

const expertiseList = [
  { name: 'Pharmacy', percent: 90 },
  { name: 'Patient Counseling', percent: 95 },
  { name: 'Drug Safety', percent: 85 },
  { name: 'Research Methods', percent: 80 },
  { name: 'Healthcare Management', percent: 75 }
];

const publications = [
  {
    title: 'Drug Interaction Analysis',
    description: 'Research on novel drug interaction patterns in elderly patients',
    image: '/api/placeholder/400/300',
    category: 'Research'
  },
  {
    title: 'Patient Care Innovation',
    description: 'Implementation of AI-driven medication management systems',
    image: '/api/placeholder/400/300',
    category: 'Innovation'
  },
  {
    title: 'Clinical Guidelines',
    description: 'Development of new clinical guidelines for chronic disease management',
    image: '/api/placeholder/400/300',
    category: 'Clinical'
  }
];

const ExpertiseBar = ({ name, percent, theme }) => (
  <div className="mb-6 w-full px-4 md:px-0">
    <div className="flex justify-between mb-2">
      <span className="text-sm md:text-base">{name}</span>
      <span className={`${theme.accent} text-sm md:text-base`}>{percent}%</span>
    </div>
    <div className="h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
      <div 
        className={`h-full rounded-full ${theme.accentBg} transition-all duration-1000`}
        style={{ width: `${percent}%` }}
      />
    </div>
  </div>
);

const PublicationCard = ({ project, theme, lang }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 w-full">
    <img src={project.image} alt={project.title} className="w-full object-cover h-48 md:h-56" />
    <div className={`absolute inset-0 flex flex-col justify-end p-4 md:p-6 transition-opacity duration-300 bg-gradient-to-t from-black/80 to-transparent ${theme.text}`}>
      <span className={`${theme.accent} text-xs md:text-sm mb-2`}>{project.category}</span>
      <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
    </div>
  </div>
);

 function PharmacistWebsite() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('fa');
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[lang];

  const darkTheme = {
    bg: 'bg-gray-900',
    text: 'text-white',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-400',
    accentHover: 'hover:text-amber-500',
    button: 'bg-amber-400 text-black hover:bg-amber-500',
    cardBg: 'bg-gray-800'
  };

  const lightTheme = {
    bg: 'bg-white',
    text: 'text-orange-400',
    accent: 'text-orange-600',
    accentBg: 'bg-orange-400',
    accentHover: 'hover:text-orange-300',
    button: 'bg-orange-700 text-white hover:bg-orange-400',
    cardBg: 'bg-gray-50'
  };

  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.home },
    { id: 'about', label: t.about },
    { id: 'skills', label: t.skillsNav },
    { id: 'portfolio', label: t.portfolio },
    { id: 'contact', label: t.contact }
  ];

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 md:py-4 bg-black/80 backdrop-blur-md' : 'py-4 md:py-6'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-4 md:gap-6 items-center">
              <button 
                onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
                className={`${theme.accent} ${theme.accentHover} transition-colors duration-300`}
              >
                {lang === 'fa' ? 'EN' : 'FA'}
              </button>
              <button 
                onClick={() => setIsDark(!isDark)}
                className={`${theme.accent} ${theme.accentHover} transition-colors duration-300`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className={`w-6 h-6 ${theme.accent}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`${theme.accent} ${theme.accentHover} transition-colors duration-300 relative group text-sm`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}>
            <div className="flex flex-col gap-4 pt-4" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${theme.accent} ${theme.accentHover} transition-colors duration-300`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center z-10" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
          <div className="relative w-32 h-32 md:w-48 md:h-48 mb-6 md:mb-8">
            <img
              src="./assets/s.jpg"
              alt="Profile"
              className="rounded-full object-cover animate-pulse"
            />
            <div className="absolute inset-0 rounded-full border-2 border-current animate-spin" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            <span>{t.greeting}</span>{' '}
            <span className={`${theme.accent} animate-pulse`}>{t.name}</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 md:mb-8">{t.role}</p>
          <button className={`${theme.button} px-6 md:px-8 py-2 md:py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 text-sm md:text-base`}>
            {t.downloadCV}
          </button>
          <a href="#about" className="absolute bottom-10 animate-bounce">
            <ChevronDown size={24} className={theme.accent} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${theme.accent}`}>{t.about}</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-center">{t.aboutText}</p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-16 md:py-20 bg-black/5" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${theme.accent}`}>{t.skillsSection.title}</h2>
          <div className="max-w-3xl mx-auto">
            {expertiseList.map((skill) => (
              <ExpertiseBar key={skill.name} {...skill} theme={theme} />
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="portfolio" className="py-16 md:py-20" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${theme.accent}`}>{t.portfolioSection.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publications.map((project) => (
              <PublicationCard key={project.title} project={project} theme={theme} lang={lang} />
            ))}
          </div>
        </div>
      </section>


    <section id="contact" className="py-16 md:py-20 bg-black/5" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
    <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center ${theme.accent}`}>{t.contactMe}</h2>
        <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg md:text-xl mb-8">{t.contactText}</p>
        <div className="flex gap-4 justify-center">
            <a href="https://instagram.com" className={theme.accentHover}><Instagram size={24} /></a>
            <a href="https://twitter.com" className={theme.accentHover}><Twitter size={24} /></a>
            <a href="mailto:example@example.com" className={theme.accentHover}><Mail size={24} /></a>
            <a href="https://github.com" className={theme.accentHover}><Github size={24} /></a>
            <a href="https://linkedin.com" className={theme.accentHover}><Linkedin size={24} /></a>
        </div>
        </div>
    </div>
    </section>


    <footer className="py-6 bg-black/90 text-center text-sm md:text-base text-gray-400">
    <div className="container mx-auto px-4 md:px-6">
        <p>{t.rights}</p>
    </div>
    </footer>
    </div>
);
}

export default PharmacistWebsite;