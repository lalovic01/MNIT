export const siteContent = {
  en: {
    brand: {
      name: 'MNIT',
      tagline: 'Web development, design, SEO and hosting that turn traffic into revenue.',
      email: 'hello@mnit.dev',
      baseUrl: 'https://mnit.dev',
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
      hire: 'Hire Me',
    },
    home: {
      eyebrow: '2026-ready digital execution',
      headline: 'Web Experiences That Convert Visitors Into Clients',
      subheadline:
        'MNIT builds strategic websites with conversion-focused UX, performance-driven code, and SEO architecture that helps businesses rank faster and sell more.',
      primaryCta: 'Hire Me',
      secondaryCta: 'View Work',
      trustPoints: [
        'Conversion-first UX decisions',
        'SEO and performance built in from day one',
        'Delivery process built for speed and clarity',
      ],
      metrics: [
        { value: '42+', label: 'Projects launched' },
        { value: '96%', label: 'Client retention' },
        { value: '3.2x', label: 'Avg. lead growth after redesign' },
      ],
      processTitle: 'How MNIT Works',
      process: [
        {
          title: 'Discover',
          description: 'We define goals, target users, and the exact conversion path before a single pixel is shipped.',
        },
        {
          title: 'Design',
          description: 'You get high-clarity UI/UX decisions that reduce friction and keep your brand premium and trustworthy.',
        },
        {
          title: 'Build & Launch',
          description: 'Production-grade code, technical SEO, hosting setup, and optimization so your website performs from day one.',
        },
      ],
    },
    about: {
      title: 'About MNIT',
      intro:
        'MNIT is a web developer brand focused on business outcomes, not vanity metrics. Every project is designed to increase trust, improve user flow, and generate measurable leads.',
      blocks: [
        {
          title: 'Who I Am',
          text: 'I am a full-stack web developer and UI/UX specialist who blends technical depth with design precision to create websites people remember and businesses can scale on.',
        },
        {
          title: 'What I Do',
          text: 'I design and build high-performance websites, redesign outdated digital products, implement SEO foundations, and handle deployment so clients have one accountable partner.',
        },
        {
          title: 'Why Choose MNIT',
          text: 'You get strategic communication, transparent delivery, and a website engineered to increase conversions, not just look modern.',
        },
      ],
    },
    services: {
      title: 'Services',
      subtitle: 'Everything needed to launch or upgrade a serious digital presence.',
      items: [
        {
          title: 'Website Development',
          description: 'Custom React-based websites engineered for speed, maintainability, and lead generation.',
          outcomes: ['Component architecture', 'Performance optimization', 'Scalable codebase'],
        },
        {
          title: 'UI/UX Design',
          description: 'Interfaces that guide users naturally from first impression to action.',
          outcomes: ['User flow mapping', 'Wireframes and visual systems', 'Conversion-focused layouts'],
        },
        {
          title: 'Website Redesign',
          description: 'Transform outdated websites into modern, credible, and conversion-ready platforms.',
          outcomes: ['Audit and strategy', 'Content hierarchy rebuild', 'Modernized visual identity'],
        },
        {
          title: 'SEO Optimization',
          description: 'Technical and on-page SEO setup that improves discoverability and relevance.',
          outcomes: ['Semantic structure', 'Metadata and content strategy', 'Core Web Vitals improvements'],
        },
        {
          title: 'Hosting & Deployment',
          description: 'Reliable deployment pipelines and hosting setup for secure, fast delivery.',
          outcomes: ['Vercel / GitHub deployment', 'Domain and SSL setup', 'Release and rollback readiness'],
        },
      ],
    },
    portfolio: {
      title: 'Selected Work',
      subtitle: 'Projects built to solve real business problems and create measurable momentum.',
      projects: [
        {
          name: 'SaaS Growth Dashboard',
          description: 'Redesigned onboarding and dashboard workflows, improving trial-to-paid conversion.',
          tech: ['React', 'Tailwind', 'Analytics'],
          image: '/projects/project-saas.svg',
          link: '#',
        },
        {
          name: 'Clinic Booking Platform',
          description: 'Accessible booking flow with SEO-rich service pages for local search growth.',
          tech: ['React', 'Node', 'SEO'],
          image: '/projects/project-clinic.svg',
          link: '#',
        },
        {
          name: 'E-commerce Redesign',
          description: 'Rebuilt storefront architecture with better product discovery and checkout clarity.',
          tech: ['React', 'UX', 'Performance'],
          image: '/projects/project-commerce.svg',
          link: '#',
        },
        {
          name: 'Agency Lead Website',
          description: 'High-impact brand presentation with conversion-first landing structure.',
          tech: ['Vite', 'Framer Motion', 'Copywriting'],
          image: '/projects/project-agency.svg',
          link: '#',
        },
        {
          name: 'Real Estate Showcase',
          description: 'Interactive property experience with fast filtering and map-based navigation.',
          tech: ['React', 'Maps', 'UI Design'],
          image: '/projects/project-estate.svg',
          link: '#',
        },
        {
          name: 'Personal Brand Site',
          description: 'Premium personal brand positioning designed to attract high-ticket clients.',
          tech: ['Design System', 'SEO', 'Hosting'],
          image: '/projects/project-brand.svg',
          link: '#',
        },
      ],
    },
    contact: {
      title: 'Start Your Project',
      subtitle: 'Tell me what you need and I will respond with a clear plan and timeline.',
      emailLabel: 'Prefer email?',
      form: {
        name: 'Your name',
        email: 'Email address',
        company: 'Company (optional)',
        message: 'Project goals and details',
        submit: 'Send Project Request',
        success: 'Thanks. Your request has been submitted successfully.',
        error: 'Please fill in name, email, and project details.',
      },
      ctaTitle: 'Need a faster start?',
      ctaText: 'Book a free strategy call and get immediate guidance on your next website move.',
      ctaButton: 'Book Discovery Call',
    },
    notFound: {
      title: 'Page Not Found',
      text: 'The page you requested is not available.',
      action: 'Return Home',
    },
    footer: {
      text: 'MNIT builds conversion-focused web experiences with strategy, design, and full-stack execution.',
    },
    seo: {
      home: {
        title: 'MNIT | Web Developer Portfolio, Design, SEO & Hosting',
        description:
          'MNIT builds modern websites with web development, UI/UX design, redesign, SEO optimization, and hosting deployment services.',
        path: '/',
      },
      about: {
        title: 'About MNIT | Web Developer Brand',
        description:
          'Learn about MNIT, a full-stack web developer brand focused on high-converting websites, UX clarity, and long-term growth.',
        path: '/about',
      },
      services: {
        title: 'MNIT Services | Development, Design, SEO, Hosting',
        description:
          'Explore MNIT services: website development, UI/UX design, website redesign, SEO optimization, and hosting deployment.',
        path: '/services',
      },
      portfolio: {
        title: 'MNIT Portfolio | Web Projects and Case Results',
        description:
          'See selected MNIT portfolio projects with conversion-focused UX, scalable code, and SEO-driven digital outcomes.',
        path: '/portfolio',
      },
      contact: {
        title: 'Contact MNIT | Start Your Website Project',
        description:
          'Contact MNIT to start your web project, redesign, SEO strategy, or hosting and deployment setup.',
        path: '/contact',
      },
      notFound: {
        title: 'MNIT | Page Not Found',
        description: 'The page you requested could not be found on the MNIT website.',
        path: '/404',
      },
    },
  },
  sr: {
    brand: {
      name: 'MNIT',
      tagline: 'Web razvoj, dizajn, SEO i hosting koji pretvaraju posete u klijente.',
      email: 'hello@mnit.dev',
      baseUrl: 'https://mnit.dev',
    },
    nav: {
      home: 'Početna',
      about: 'O meni',
      services: 'Usluge',
      portfolio: 'Portfolio',
      contact: 'Kontakt',
      hire: 'Angažuj me',
    },
    home: {
      eyebrow: 'Digitalna realizacija spremna za 2026',
      headline: 'Web Iskustva Koja Pretvaraju Posetioce U Klijente',
      subheadline:
        'MNIT gradi strateške sajtove sa UX-om fokusiranim na konverzije, performansama na nivou produkcije i SEO strukturom koja pomaže bržem rangiranju i većoj prodaji.',
      primaryCta: 'Angažuj me',
      secondaryCta: 'Pogledaj radove',
      trustPoints: [
        'UX odluke fokusirane na konverzije',
        'SEO i performanse ugrađeni od prvog dana',
        'Proces isporuke optimizovan za brzinu i jasnoću',
      ],
      metrics: [
        { value: '42+', label: 'Lansirana projekta' },
        { value: '96%', label: 'Zadržavanje klijenata' },
        { value: '3.2x', label: 'Prosečan rast leadova posle redizajna' },
      ],
      processTitle: 'Kako MNIT Radi',
      process: [
        {
          title: 'Analiza',
          description: 'Definišemo ciljeve, korisnike i put konverzije pre nego što krenemo sa dizajnom.',
        },
        {
          title: 'Dizajn',
          description: 'Dobijaš UI/UX rešenja koja smanjuju trenje i grade premium utisak brenda.',
        },
        {
          title: 'Razvoj i lansiranje',
          description: 'Kod spreman za produkciju, tehnički SEO, hosting i optimizacija za snažan start.',
        },
      ],
    },
    about: {
      title: 'O MNIT brendu',
      intro:
        'MNIT je web developer brend fokusiran na poslovne rezultate, ne na površne metrike. Svaki projekat je osmišljen da poveća poverenje, poboljša korisnički tok i donese merljive upite.',
      blocks: [
        {
          title: 'Ko sam ja',
          text: 'Ja sam full-stack web developer i UI/UX specijalista koji spaja tehničku dubinu i precizan dizajn kako bi nastali sajtovi koji ostaju u pamćenju i podržavaju rast biznisa.',
        },
        {
          title: 'Šta radim',
          text: 'Dizajniram i razvijam brze sajtove, redizajniram zastarele digitalne proizvode, postavljam SEO osnovu i vodim deployment kako bi klijent imao jednog odgovornog partnera.',
        },
        {
          title: 'Zašto MNIT',
          text: 'Dobijaš jasnu komunikaciju, transparentnu isporuku i sajt projektovan da povećava konverzije, a ne samo da izgleda moderno.',
        },
      ],
    },
    services: {
      title: 'Usluge',
      subtitle: 'Sve što je potrebno za ozbiljan digitalni nastup.',
      items: [
        {
          title: 'Razvoj web sajta',
          description: 'Prilagođeni React sajtovi optimizovani za brzinu, održavanje i generisanje leadova.',
          outcomes: ['Komponentna arhitektura', 'Optimizacija performansi', 'Skalabilan kod'],
        },
        {
          title: 'UI/UX dizajn',
          description: 'Interfejsi koji prirodno vode korisnika od prvog utiska do akcije.',
          outcomes: ['Mapiranje korisničkog toka', 'Wireframe i vizuelni sistemi', 'Layout fokusiran na konverzije'],
        },
        {
          title: 'Redizajn sajta',
          description: 'Transformacija zastarelih sajtova u moderne i kredibilne platforme.',
          outcomes: ['Audit i strategija', 'Nova hijerarhija sadržaja', 'Savremen vizuelni identitet'],
        },
        {
          title: 'SEO optimizacija',
          description: 'Tehnički i on-page SEO koji poboljšava vidljivost i relevantnost.',
          outcomes: ['Semantička struktura', 'Meta i content strategija', 'Core Web Vitals poboljšanja'],
        },
        {
          title: 'Hosting i deployment',
          description: 'Pouzdano postavljanje i puštanje sajta uz sigurnu infrastrukturu.',
          outcomes: ['Vercel / GitHub deployment', 'Domen i SSL podešavanje', 'Spremnost za release i rollback'],
        },
      ],
    },
    portfolio: {
      title: 'Odabrani radovi',
      subtitle: 'Projekti napravljeni da reše konkretne poslovne izazove.',
      projects: [
        {
          name: 'SaaS Growth Dashboard',
          description: 'Redizajn onboarding i dashboard tokova koji je povećao trial-to-paid konverziju.',
          tech: ['React', 'Tailwind', 'Analytics'],
          image: '/projects/project-saas.svg',
          link: '#',
        },
        {
          name: 'Clinic Booking Platform',
          description: 'Pristupačan booking tok uz SEO servisne stranice za lokalni rast.',
          tech: ['React', 'Node', 'SEO'],
          image: '/projects/project-clinic.svg',
          link: '#',
        },
        {
          name: 'E-commerce Redesign',
          description: 'Nova arhitektura prodavnice sa boljim pronalaženjem proizvoda i checkout tokom.',
          tech: ['React', 'UX', 'Performance'],
          image: '/projects/project-commerce.svg',
          link: '#',
        },
        {
          name: 'Agency Lead Website',
          description: 'Snažna prezentacija brenda sa landing strukturom fokusiranom na upite.',
          tech: ['Vite', 'Framer Motion', 'Copywriting'],
          image: '/projects/project-agency.svg',
          link: '#',
        },
        {
          name: 'Real Estate Showcase',
          description: 'Interaktivno iskustvo nekretnina sa brzim filtriranjem i map navigacijom.',
          tech: ['React', 'Maps', 'UI Design'],
          image: '/projects/project-estate.svg',
          link: '#',
        },
        {
          name: 'Personal Brand Site',
          description: 'Premium lični brend pozicioniranje za privlačenje klijenata veće vrednosti.',
          tech: ['Design System', 'SEO', 'Hosting'],
          image: '/projects/project-brand.svg',
          link: '#',
        },
      ],
    },
    contact: {
      title: 'Pokrenimo projekat',
      subtitle: 'Pošalji šta ti je potrebno i dobićeš jasan plan i vremenski okvir.',
      emailLabel: 'Više voliš email?',
      form: {
        name: 'Tvoje ime',
        email: 'Email adresa',
        company: 'Kompanija (opciono)',
        message: 'Ciljevi i detalji projekta',
        submit: 'Pošalji upit za projekat',
        success: 'Hvala. Tvoj upit je uspešno poslat.',
        error: 'Unesi ime, email i detalje projekta.',
      },
      ctaTitle: 'Treba ti brži start?',
      ctaText: 'Zakaži besplatan strategijski poziv i odmah dobiješ smernice za sledeći korak.',
      ctaButton: 'Zakaži discovery poziv',
    },
    notFound: {
      title: 'Stranica nije pronađena',
      text: 'Stranica koju tražiš nije dostupna.',
      action: 'Nazad na početnu',
    },
    footer: {
      text: 'MNIT gradi web iskustva fokusirana na konverzije kroz strategiju, dizajn i full-stack realizaciju.',
    },
    seo: {
      home: {
        title: 'MNIT | Portfolio web developera, dizajn, SEO i hosting',
        description:
          'MNIT izrađuje moderne sajtove kroz web razvoj, UI/UX dizajn, redizajn, SEO optimizaciju i hosting deployment usluge.',
        path: '/',
      },
      about: {
        title: 'O MNIT | Web developer brend',
        description:
          'Saznaj više o MNIT brendu, full-stack pristupu i fokusu na sajtove koji donose merljive rezultate.',
        path: '/about',
      },
      services: {
        title: 'MNIT usluge | razvoj, dizajn, SEO, hosting',
        description:
          'Pogledaj MNIT usluge: razvoj web sajta, UI/UX dizajn, redizajn, SEO optimizacija i hosting deployment.',
        path: '/services',
      },
      portfolio: {
        title: 'MNIT portfolio | web projekti i rezultati',
        description:
          'Pogledaj odabrane MNIT projekte sa UX fokusom na konverzije, skalabilnim kodom i SEO strategijom.',
        path: '/portfolio',
      },
      contact: {
        title: 'Kontakt MNIT | Pokreni svoj web projekat',
        description:
          'Kontaktiraj MNIT za novi sajt, redizajn, SEO strategiju ili hosting/deployment podršku.',
        path: '/contact',
      },
      notFound: {
        title: 'MNIT | Stranica nije pronađena',
        description: 'Tražena stranica nije pronađena na MNIT sajtu.',
        path: '/404',
      },
    },
  },
}
