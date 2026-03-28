/* ---- Navbar scroll behaviour ---- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('scrollTop').classList.toggle('show', window.scrollY > 400);
});

/* ---- Mobile menu ---- */
function openMenu()  { 
  document.getElementById('mobileMenu').classList.add('open');    
  document.body.style.overflow='hidden'; 
}
function closeMenu() { 
  document.getElementById('mobileMenu').classList.remove('open'); 
  document.body.style.overflow=''; 
}

/* ---- Intersection Observer — fade-in on scroll ---- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { 
    if (e.isIntersecting) { 
      e.target.classList.add('visible'); 
    } 
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ============================================================
   MULTI-LANGUAGE SYSTEM
============================================================ */
const translations = {
  fr: {
    lang_label:            'Langue :',
    nav_home:              'Accueil',
    nav_courses:           'Cours',
    nav_about:             'À propos',
    badge:                 'ASU · Projet 2026',
    hero_title_1:          'FORMATION MS',
    slogan:                '"Aza matahotra hanao diso, satria raha tsy diso ny zavatra izay tsy ho ainao mihitsy ny hanitsy azy !!"',
    btn_download:          'Télécharger les cours',
    btn_about:             'À propos',
    role:                  'Auteur & Formateur',
    scroll:                'Défiler',
    section_download_tag:  '📚 Ressources',
    section_download_title:'Téléchargez vos cours',
    section_download_sub:  'Cliquez sur le cours que vous souhaitez télécharger.',
    word_title:            'Formation Word PDF',
    word_desc:             'Maîtrisez la mise en page, les styles, les tableaux et la mise en forme professionnelle de documents.',
    excel_title:           'Formation Excel PDF',
    excel_desc:            'Apprenez les formules, les tableaux croisés dynamiques, la visualisation de données et l\'automatisation.',
    ppt_title:             'Formation PowerPoint PDF',
    ppt_desc:              'Créez des présentations percutantes avec des animations, des graphiques et un design professionnel.',
    pdf_format:            'Format PDF',
    download_btn:          'Télécharger',
    about_tag:             '👤 À propos du formateur',
    about_title:           'RAKOTONIAINA',
    about_desc:            'Formateur professionnel spécialisé dans les outils Microsoft Office, passionné par la transmission du savoir et l\'autonomisation des apprenants grâce aux technologies numériques.',
    stat_courses:          'Cours',
    stat_year:             'Promotion',
    stat_project:          'Projet',
    footer_text:           '© 2026 ASU | Formation par ',
  },
  en: {
    lang_label:            'Language:',
    nav_home:              'Home',
    nav_courses:           'Courses',
    nav_about:             'About',
    badge:                 'ASU · Project 2026',
    hero_title_1:          'MS TRAINING',
    slogan:                '"Don\'t be afraid to make mistakes — because without mistakes, you\'ll never learn how to fix them!!"',
    btn_download:          'Download Courses',
    btn_about:             'About',
    role:                  'Author & Trainer',
    scroll:                'Scroll',
    section_download_tag:  '📚 Resources',
    section_download_title:'Download Your Courses',
    section_download_sub:  'Click on the course you want to download.',
    word_title:            'Word Training PDF',
    word_desc:             'Master page layout, styles, tables and professional document formatting.',
    excel_title:           'Excel Training PDF',
    excel_desc:            'Learn formulas, pivot tables, data visualization and automation.',
    ppt_title:             'PowerPoint Training PDF',
    ppt_desc:              'Create impactful presentations with animations, charts and professional design.',
    pdf_format:            'PDF Format',
    download_btn:          'Download',
    about_tag:             '👤 About the Trainer',
    about_title:           'RAKOTONIAINA',
    about_desc:            'Professional trainer specializing in Microsoft Office tools, passionate about knowledge sharing and empowering learners through digital technologies.',
    stat_courses:          'Courses',
    stat_year:             'Class of',
    stat_project:          'Project',
    footer_text:           '© 2026 ASU | Training by ',
  },
  mg: {
    lang_label:            'Fiteny:',
    nav_home:              'Fandraisana',
    nav_courses:           'Fianarana',
    nav_about:             'Momba',
    badge:                 'ASU · Tetikasa 2026',
    hero_title_1:          'FIANARANA MS',
    slogan:                '"Aza matahotra hanao diso, satria raha tsy diso ny zavatra izay tsy ho ainao mihitsy ny hanitsy azy !!"',
    btn_download:          'Hisintona ny fianarana',
    btn_about:             'Momba',
    role:                  'Mpanoratra & Mpampianatra',
    scroll:                'Hidina',
    section_download_tag:  '📚 Loharanon-tsavoana',
    section_download_title:'Sintony ny fianarana',
    section_download_sub:  'Tsindrio ny fianarana tianao hosintomina.',
    word_title:            'Fianarana Word PDF',
    word_desc:             'Mahay ny fanefana pejy, ny style, ny tabilao ary ny fanaovana taratasy amin\'ny fomba matihanina.',
    excel_title:           'Fianarana Excel PDF',
    excel_desc:            'Mianara ny formula, ny pivot table, ny fanehoana angona ary ny automation.',
    ppt_title:             'Fianarana PowerPoint PDF',
    ppt_desc:              'Mamorona fampisehoana mahery vaika miaraka amin\'ny animation, grafika ary dizainy matihanina.',
    pdf_format:            'Endrika PDF',
    download_btn:          'Sintona',
    about_tag:             '👤 Momba ny mpampianatra',
    about_title:           'RAKOTONIAINA',
    about_desc:            'Mpampianatra matihanina momba ny fitaovana Microsoft Office, mazoto amin\'ny fampitana fahalalana sy fanafahana ny mpianatra amin\'ny alalan\'ny teknolojia nomerika.',
    stat_courses:          'Fianarana',
    stat_year:             'Taom-baovao',
    stat_project:          'Tetikasa',
    footer_text:           '© 2026 ASU | Nampianarin\' i ',
  }
};

let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === lang.toUpperCase());
  });
  /* update html lang attr */
  document.documentElement.lang = lang === 'mg' ? 'mg' : lang;
}
