/* ==========================================================================
   Sixolab LLC — Master Frontend Orchestration & Motion Engine
   Zero-3D-Hover Policy: 2D Planar Physics, Ambient WebGL/Canvas & GSAP Engine
   ========================================================================== */

// 53 Capabilities Master Dataset
const SIXOLAB_SERVICES = [
  // 01 Sixolab LLC — Connect & Operate (9 capabilities)
  { id: 'SIX-01', cat: 'sixolab', code: '01', title: 'Business Strategy', desc: 'Long-term direction, positioning and growth planning across the group and inside client engagements.', vertical: 'Sixolab LLC // GROUP' },
  { id: 'SIX-02', cat: 'sixolab', code: '02', title: 'Venture Development', desc: 'Identifying, structuring and launching new companies and products within the ecosystem.', vertical: 'Sixolab LLC // GROUP' },
  { id: 'SIX-03', cat: 'sixolab', code: '03', title: 'Operations', desc: 'Shared processes, standards and delivery systems that keep every company running consistently.', vertical: 'Sixolab LLC // GROUP' },
  { id: 'SIX-04', cat: 'sixolab', code: '04', title: 'Partnerships', desc: 'Alliances with technology providers, brands, agencies and institutions that extend what the group can deliver.', vertical: 'Sixolab LLC // GROUP' },
  { id: 'SIX-05', cat: 'sixolab', code: '05', title: 'Business Development', desc: 'Matching each client to the right company and shaping proposals that span disciplines.', vertical: 'Sixolab LLC // GROUP' },
  { id: 'SIX-06', cat: 'sixolab', code: '06', title: 'Cross-company Projects', desc: 'Coordinating engagements that need technology, creative and production to work as one team.', vertical: 'Sixolab LLC // GROUP' },
  { id: 'SIX-07', cat: 'sixolab', code: '07', title: 'Strategic Investments / New Ventures', desc: 'Backing and building new businesses that strengthen and fit the ecosystem.', vertical: 'Sixolab LLC // GROUP' },
  { id: 'SIX-08', cat: 'sixolab', code: '08', title: 'Brand & Portfolio Management', desc: 'Governing how each company is positioned and how the group presents as one portfolio.', vertical: 'Sixolab LLC // GROUP' },
  { id: 'SIX-09', cat: 'sixolab', code: '09', title: 'Client Relationships', desc: 'A single point of accountability for clients working with more than one company.', vertical: 'Sixolab LLC // GROUP' },

  // 02 Gitlink IT Solutions — BUILD / Technology (15 capabilities)
  { id: 'GIT-01', cat: 'gitlink', code: '10', title: 'Custom Software Development', desc: 'Bespoke software engineered around your workflows, instead of forcing your business into off-the-shelf tools.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-02', cat: 'gitlink', code: '11', title: 'Web Applications', desc: 'Fast, secure and scalable browser-based applications, portals and customer-facing platforms.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-03', cat: 'gitlink', code: '12', title: 'Enterprise Software', desc: 'Robust systems for large teams: role-based access, reporting, integrations and long-term maintainability.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-04', cat: 'gitlink', code: '13', title: 'AI Solutions', desc: 'Practical AI built around real business problems: assistants, analysis, content and decision support.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-05', cat: 'gitlink', code: '14', title: 'AI Integration', desc: 'Embedding AI into your existing products and processes so it increases leverage, not complexity.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-06', cat: 'gitlink', code: '15', title: 'SaaS Development', desc: 'Designing and building subscription software products, from first MVP through to scale.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-07', cat: 'gitlink', code: '16', title: 'Business Automation', desc: 'Removing repetitive manual work through automated workflows and system-to-system handoffs.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-08', cat: 'gitlink', code: '17', title: 'Mobile Applications', desc: 'iOS and Android applications with clean UX and dependable backends (Native Swift/Kotlin, React Native & Flutter).', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-09', cat: 'gitlink', code: '18', title: 'APIs & Integrations', desc: 'Connecting your tools, data and third-party services into one system that works together.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-10', cat: 'gitlink', code: '19', title: 'Cloud & Digital Infrastructure', desc: 'Hosting, deployment, security and scaling foundations that keep products fast and online.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-11', cat: 'gitlink', code: '20', title: 'Internal Business Systems', desc: 'Inventory, CRM, operations and management tools tailored to how your company actually runs.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-12', cat: 'gitlink', code: '21', title: 'Dashboards & Digital Platforms', desc: 'Live visibility into data and operations, plus platforms that bring users, content and transactions together.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-13', cat: 'gitlink', code: '22', title: 'Technical Consulting', desc: 'Architecture reviews, technology selection and roadmaps, before you commit budget to the wrong build.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-14', cat: 'gitlink', code: '23', title: 'Website & E-Commerce Engineering', desc: 'Business & portfolio websites, WooCommerce & Shopify online stores, high-converting landing pages (<2s load speed), Core Web Vitals optimization, and headless/custom CMS.', vertical: 'Gitlink IT Solutions // BUILD' },
  { id: 'GIT-15', cat: 'gitlink', code: '24', title: 'Digital Marketing & Operational Support', desc: 'Data-driven SEO, Social Media Marketing (SMM), Search Engine Marketing (SEM), 24/7 dedicated support, monthly performance reporting, and data operations.', vertical: 'Gitlink IT Solutions // BUILD' },

  // 03 Xenon Studios — CREATE / Brand & Experience (12 capabilities)
  { id: 'XEN-01', cat: 'xenon', code: '25', title: 'Brand Strategy', desc: 'Positioning, audience, messaging and personality: the thinking that comes before any visual.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-02', cat: 'xenon', code: '26', title: 'Creative Direction', desc: 'One creative vision guiding every touchpoint, campaign and piece of content.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-03', cat: 'xenon', code: '27', title: 'Brand Identity', desc: 'Logo, typography, color and tone assembled into an identity that is recognizable and ownable.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-04', cat: 'xenon', code: '28', title: 'Graphic Design', desc: 'Print and digital collateral, packaging and marketing material with premium finish.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-05', cat: 'xenon', code: '29', title: 'UI/UX Design', desc: 'Research-led interface and experience design for apps, platforms and digital products.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-06', cat: 'xenon', code: '30', title: 'Web Design', desc: 'Websites and landing pages designed to carry the brand and convert the visitor.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-07', cat: 'xenon', code: '31', title: 'Motion Design', desc: 'Animated identities, explainers and interface motion where every movement has a reason.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-08', cat: 'xenon', code: '32', title: 'Campaign Creative', desc: 'Concepts and assets built around a single campaign objective across channels.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-09', cat: 'xenon', code: '33', title: 'Social Media Creative', desc: 'Platform-native content systems that keep a brand consistent and noticed.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-10', cat: 'xenon', code: '34', title: 'Digital Experiences', desc: 'Interactive, immersive and web-based experiences that bring a brand to life.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-11', cat: 'xenon', code: '35', title: 'Content Design', desc: 'Decks, editorial and presentations structured and designed to communicate clearly.', vertical: 'Xenon Studios // CREATE' },
  { id: 'XEN-12', cat: 'xenon', code: '36', title: 'Visual Systems', desc: 'Scalable design systems and guidelines so every future asset stays on brand.', vertical: 'Xenon Studios // CREATE' },

  // 04 One Percent — PRODUCE / Film & Visual Execution (19 capabilities)
  { id: 'ONE-01', cat: 'onepercent', code: '37', title: 'Creative Direction', desc: 'The concept, treatment and visual language that guides a production from idea to final frame.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-02', cat: 'onepercent', code: '38', title: 'Production Management', desc: 'Scheduling, budgeting, crew, locations and logistics, so shoots run on time and on plan.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-03', cat: 'onepercent', code: '39', title: 'Commercial Production', desc: 'End-to-end production for commercial campaigns across broadcast and digital.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-04', cat: 'onepercent', code: '40', title: 'TVCs (Television Commercials)', desc: 'Television commercials crafted for high-impact brand awareness in seconds.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-05', cat: 'onepercent', code: '41', title: 'Advertising Films', desc: 'Narrative-driven advertising films for product launches and brand campaigns.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-06', cat: 'onepercent', code: '42', title: 'Brand Films', desc: 'Longer-form films that communicate who a brand is and what it stands for.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-07', cat: 'onepercent', code: '43', title: 'Corporate Films', desc: 'Company profiles, internal communication and stakeholder films with polish.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-08', cat: 'onepercent', code: '44', title: 'Product Films', desc: 'Cinematic product showcases that make features feel desirable.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-09', cat: 'onepercent', code: '45', title: 'Documentary Production', desc: 'Real stories, told with depth, patience and a documentary eye.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-10', cat: 'onepercent', code: '46', title: 'Music Videos', desc: 'Visual storytelling built around sound, rhythm and artist identity.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-11', cat: 'onepercent', code: '47', title: 'Cinematography', desc: 'Camera, lighting and composition that give every frame a cinematic feel.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-12', cat: 'onepercent', code: '48', title: 'Photography', desc: 'Commercial, product and brand photography with a consistent visual standard.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-13', cat: 'onepercent', code: '49', title: 'Videography', desc: 'Fast, reliable video capture for events, content and documentation.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-14', cat: 'onepercent', code: '50', title: 'Editing', desc: 'Story-first editing: pacing, structure and rhythm that hold attention.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-15', cat: 'onepercent', code: '51', title: 'Color Grading', desc: 'Color that sets mood and keeps a whole project visually consistent.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-16', cat: 'onepercent', code: '52', title: 'Motion Graphics', desc: 'Titles, animation and graphic layers that clarify and elevate the edit.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-17', cat: 'onepercent', code: '53', title: 'VFX (Visual Effects)', desc: 'Visual effects, compositing and cleanup that make the impossible shot possible.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-18', cat: 'onepercent', code: '54', title: 'Sound Design', desc: 'Layered sound, mix and music, because sound does more of the work than people notice.', vertical: 'One Percent // PRODUCE' },
  { id: 'ONE-19', cat: 'onepercent', code: '55', title: 'Post-Production Masters', desc: 'The complete finishing pipeline, from offline cut to final masters and deliverables.', vertical: 'One Percent // PRODUCE' },
];

document.addEventListener('DOMContentLoaded', () => {
  // Register GSAP plugins if available
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  }

  initPreloader();
  initAmbientCanvas();
  initCursor();
  initSpotlightCards();
  initMagneticButtons();
  initElasticDividers();
  initStickyNav();
  initAnatomyInteractiveStrip();
  initCapabilitiesDirectory();
  initScopeConfigurator();
  initAccordionSlabs();
  initClipboardButtons();
});

/* ==========================================================================
   1. Multi-Stage Knight & S-O-L Preloader Choreography
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('sixo-preloader');
  if (!preloader) return;

  const isLoaded = sessionStorage.getItem('sixo_loaded');

  if (isLoaded && typeof gsap !== 'undefined') {
    // Returning view: Rapid 0.45s shutter wipe bypass
    gsap.timeline({
      onComplete: () => {
        preloader.style.display = 'none';
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }
    })
    .to('#shutter-top', { yPercent: -100, duration: 0.45, ease: 'power3.inOut' })
    .to('#shutter-bottom', { yPercent: 100, duration: 0.45, ease: 'power3.inOut' }, 0)
    .to(preloader.querySelector('.relative.z-10'), { opacity: 0, duration: 0.2 }, 0);
    return;
  }

  // First session view: Full 3.2-second Knight's Gambit Choreography
  if (typeof gsap !== 'undefined') {
    const preloaderTl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        sessionStorage.setItem('sixo_loaded', 'true');
        preloader.style.display = 'none';
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }
    });

    const counterObj = { val: 0 };
    const counterEl = document.getElementById('preloader-counter');
    const statusEl = document.getElementById('preloader-status');
    const calloutEl = document.getElementById('anatomy-callout');

    preloaderTl
      .to(counterObj, {
        val: 100,
        duration: 2.3,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (counterEl) counterEl.textContent = String(Math.floor(counterObj.val)).padStart(3, '0') + '%';
        }
      }, 0)
      .to('#path-l-base', { strokeDashoffset: 0, duration: 0.55 }, 0.2)
      .call(() => {
        if (calloutEl) calloutEl.textContent = '[ O — SPACE : ECOSYSTEM CORE ]';
        if (statusEl) statusEl.textContent = '[ 01 // GITLINK IT SOLUTIONS : BUILD ]';
      }, null, 0.7)
      .to('#path-o-space', { strokeDashoffset: 0, duration: 0.6 }, 0.7)
      .call(() => {
        if (calloutEl) calloutEl.textContent = '[ S — FLOW : CONTINUITY ]';
        if (statusEl) statusEl.textContent = '[ 02 // XENON STUDIOS : CREATE ]';
      }, null, 1.25)
      .to('#path-s-flow', { strokeDashoffset: 0, duration: 0.55 }, 1.25)
      .call(() => {
        if (calloutEl) calloutEl.textContent = '[ KNIGHT — STRATEGY & FORESIGHT ]';
        if (statusEl) statusEl.textContent = '[ 03 // ONE PERCENT : PRODUCE ]';
      }, null, 1.75)
      .to('#path-knight-strategy', { strokeDashoffset: 0, duration: 0.55 }, 1.75)
      .to('#preloader-wordmark', { y: '0%', duration: 0.6, ease: 'power4.out' }, 1.85)
      .to('#preloader-tagline', { opacity: 1, duration: 0.4 }, 2.1)
      .to('#modular-grid-circles', { opacity: 0, scale: 1.15, duration: 0.4 }, 2.2)
      .to('#sixo-preloader > .relative', { opacity: 0, y: -20, duration: 0.35 }, 2.55)
      .to('#shutter-top', { yPercent: -100, duration: 0.85, ease: 'expo.inOut' }, 2.65)
      .to('#shutter-bottom', { yPercent: 100, duration: 0.85, ease: 'expo.inOut' }, 2.65)
      .from('.hero-line', { yPercent: 110, duration: 0.9, stagger: 0.12, ease: 'power4.out' }, 2.75);
  } else {
    // Fallback if GSAP is blocked
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1500);
  }
}

/* ==========================================================================
   2. Ambient 3D Volumetric Canvas (Background Only — Strictly Zero 3D Tilt)
   ========================================================================== */
function initAmbientCanvas() {
  const canvas = document.getElementById('sixo-ambient-3d');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let time = 0;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function renderFrame() {
    time += 0.007;
    ctx.clearRect(0, 0, width, height);

    // Volumetric Atmospheric Light Cone (Huly inspired: Sixo Orange -> Crimson -> Wine -> Obsidian)
    const grad = ctx.createRadialGradient(
      width * 0.72, height * 0.18, 10,
      width * 0.55, height * 0.45, Math.max(width, height) * 0.68
    );
    grad.addColorStop(0, 'rgba(255, 90, 31, 0.09)');
    grad.addColorStop(0.32, 'rgba(107, 15, 18, 0.18)');
    grad.addColorStop(0.68, 'rgba(48, 5, 7, 0.12)');
    grad.addColorStop(1, 'rgba(8, 8, 8, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // 3D Projected Wireframe Ribbon Curves (S-O-L geometry)
    ctx.strokeStyle = 'rgba(245, 245, 245, 0.045)';
    ctx.lineWidth = 1;
    const cx = width * 0.70;
    const cy = height * 0.46;
    const radius = Math.min(width, height) * 0.28;

    for (let ring = 0; ring < 3; ring++) {
      ctx.beginPath();
      for (let i = 0; i <= 64; i++) {
        const theta = (i / 64) * Math.PI * 2;
        const x3d = Math.cos(theta + time + ring * 0.4) * radius;
        const y3d = Math.sin(theta * 2 + time * 0.7) * (radius * 0.55);
        const z3d = Math.sin(theta + time + ring) * 140;
        const scale = 420 / (420 + z3d);
        const px = cx + x3d * scale;
        const py = cy + y3d * scale;

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();
    }

    requestAnimationFrame(renderFrame);
  }
  requestAnimationFrame(renderFrame);
}

/* ==========================================================================
   3. Custom 2D Planar Cursor Follower
   ========================================================================== */
function initCursor() {
  const dot = document.getElementById('sixo-cursor-dot');
  const ring = document.getElementById('sixo-cursor-ring');
  if (!dot || !ring || window.innerWidth < 1024) return;

  if (typeof gsap !== 'undefined') {
    const dotX = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.22, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.22, ease: 'power3.out' });

    window.addEventListener('mousemove', (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    });
  } else {
    window.addEventListener('mousemove', (e) => {
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
  }

  // Hover states
  document.querySelectorAll('a, button, input, select, .magnetic-btn, .sixo-spotlight-card, [role="tab"]').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('is-hovering'));
    el.addEventListener('mouseleave', () => ring.classList.remove('is-hovering'));
  });
}

/* ==========================================================================
   4. 2D Planar Spotlight Card Tracker
   ========================================================================== */
function initSpotlightCards() {
  document.querySelectorAll('.sixo-spotlight-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    });
  });
}

/* ==========================================================================
   5. 2D Planar Magnetic Buttons
   ========================================================================== */
function initMagneticButtons() {
  if (typeof gsap === 'undefined' || window.innerWidth < 1024) return;

  document.querySelectorAll('.magnetic-btn').forEach((btn) => {
    const xTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3.out' });
    const yTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3.out' });

    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      xTo(relX * 0.22);
      yTo(relY * 0.22);
    });

    btn.addEventListener('mouseleave', () => {
      xTo(0);
      yTo(0);
    });
  });
}

/* ==========================================================================
   6. Elastic SVG Bezier Divider Physics (Cuberto Inspired)
   ========================================================================== */
function initElasticDividers() {
  document.querySelectorAll('.sixo-elastic-svg').forEach((svg) => {
    const path = svg.querySelector('.sixo-elastic-path');
    if (!path) return;
    const ctrl = { y: 20 };

    svg.addEventListener('mousemove', (e) => {
      const rect = svg.getBoundingClientRect();
      ctrl.y = (e.clientY - rect.top);
      path.setAttribute('d', `M 0 20 Q 720 ${ctrl.y} 1440 20`);
      path.setAttribute('stroke', '#FF5A1F');
    });

    svg.addEventListener('mouseleave', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(ctrl, {
          y: 20,
          duration: 1.1,
          ease: 'elastic.out(1, 0.25)',
          onUpdate: () => {
            path.setAttribute('d', `M 0 20 Q 720 ${ctrl.y} 1440 20`);
          },
          onComplete: () => path.setAttribute('stroke', '#737373')
        });
      } else {
        path.setAttribute('d', 'M 0 20 Q 720 20 1440 20');
        path.setAttribute('stroke', '#737373');
      }
    });
  });
}

/* ==========================================================================
   7. Sticky Header & Ecosystem Mega-Menu Switcher
   ========================================================================== */
function initStickyNav() {
  const header = document.getElementById('global-nav');
  const trigger = document.getElementById('eco-switcher-trigger');
  const menu = document.getElementById('eco-switcher-menu');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');

  // Shrink/shadow header on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('shadow-lg', 'bg-obsidian/95', 'py-1');
    } else {
      header?.classList.remove('shadow-lg', 'bg-obsidian/95', 'py-1');
    }
  });

  // Desktop mega menu hover / click
  if (trigger && menu) {
    let timeout;
    const showMenu = () => {
      clearTimeout(timeout);
      menu.classList.remove('hidden');
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(menu, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' });
      }
    };
    const hideMenu = () => {
      timeout = setTimeout(() => {
        menu.classList.add('hidden');
      }, 150);
    };

    trigger.addEventListener('mouseenter', showMenu);
    trigger.addEventListener('mouseleave', hideMenu);
    menu.addEventListener('mouseenter', showMenu);
    menu.addEventListener('mouseleave', hideMenu);
  }

  // Mobile drawer toggle
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }
}

/* ==========================================================================
   8. Brand Philosophy & Knight Anatomy Interactive Strip
   ========================================================================== */
function initAnatomyInteractiveStrip() {
  const stripCols = document.querySelectorAll('[data-anatomy-target]');
  const anatomicalSvg = document.getElementById('anatomy-preview-svg');

  if (!stripCols.length || !anatomicalSvg) return;

  stripCols.forEach((col) => {
    const targetId = col.getAttribute('data-anatomy-target');
    const pathEl = anatomicalSvg.querySelector(`#${targetId}`);

    col.addEventListener('mouseenter', () => {
      if (pathEl) {
        pathEl.setAttribute('stroke', '#FF5A1F');
        pathEl.setAttribute('stroke-width', '18');
        pathEl.style.filter = 'drop-shadow(0 0 14px rgba(255, 90, 31, 0.75))';
      }
    });

    col.addEventListener('mouseleave', () => {
      if (pathEl) {
        const defaultColor = targetId === 'path-knight-strategy' ? '#FF5A1F' : '#F5F5F5';
        pathEl.setAttribute('stroke', defaultColor);
        pathEl.setAttribute('stroke-width', '16');
        pathEl.style.filter = 'none';
      }
    });
  });
}

/* ==========================================================================
   9. Master Capabilities Directory (services.html)
   ========================================================================== */
function initCapabilitiesDirectory() {
  const tableBody = document.getElementById('services-table-body');
  const searchInput = document.getElementById('services-search-input');
  const filterPills = document.querySelectorAll('[data-service-filter]');
  const scopeCounter = document.getElementById('scope-basket-count');
  const scopeTray = document.getElementById('scope-basket-tray');
  const scopeCtaLink = document.getElementById('scope-basket-cta');

  if (!tableBody) return;

  // Track selected capability IDs
  let selectedScope = new Set();

  function renderTable(filter = 'all', query = '') {
    const q = query.toLowerCase().trim();
    const filtered = SIXOLAB_SERVICES.filter((item) => {
      const matchCat = filter === 'all' || item.cat === filter;
      const matchQuery = !q || item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.vertical.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="5" class="py-12 text-center text-neutral-gray font-mono text-sm">
            [ NO CAPABILITIES FOUND MATCHING "${query}" ]
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = filtered.map((s) => {
      const isSelected = selectedScope.has(s.id);
      return `
        <tr class="sixo-spotlight-card border-b border-neutral-subtle/20 hover:bg-carbon transition-colors group">
          <td class="py-5 px-6 font-mono text-xs text-sixo-orange whitespace-nowrap">
            ${s.code} // ${s.id}
          </td>
          <td class="py-5 px-6">
            <h4 class="font-display font-semibold text-base text-neutral-white group-hover:text-sixo-glow transition-colors">
              ${s.title}
            </h4>
          </td>
          <td class="py-5 px-6 text-sm text-neutral-gray leading-relaxed max-w-xl">
            ${s.desc}
          </td>
          <td class="py-5 px-6 whitespace-nowrap">
            <span class="inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase bg-neutral-subtle/15 border border-neutral-subtle/30 text-neutral-white">
              ${s.vertical}
            </span>
          </td>
          <td class="py-5 px-6 text-right whitespace-nowrap">
            <button
              class="scope-toggle-btn px-4 py-2 rounded-full text-xs font-mono font-medium transition-all ${
                isSelected
                  ? 'bg-sixo-orange text-obsidian shadow-orange-glow'
                  : 'bg-carbon border border-neutral-subtle/30 text-neutral-white hover:border-sixo-orange hover:text-sixo-orange'
              }"
              data-id="${s.id}"
              data-title="${s.title}"
            >
              ${isSelected ? '✓ Added to Scope' : '+ Add to Scope'}
            </button>
          </td>
        </tr>
      `;
    }).join('');

    // Re-bind click handlers
    tableBody.querySelectorAll('.scope-toggle-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (selectedScope.has(id)) {
          selectedScope.delete(id);
        } else {
          selectedScope.add(id);
        }
        updateScopeTray();
        renderTable(currentFilter, searchInput ? searchInput.value : '');
      });
    });
  }

  function updateScopeTray() {
    const count = selectedScope.size;
    if (scopeCounter) scopeCounter.textContent = count;
    if (scopeTray) {
      if (count > 0) {
        scopeTray.classList.remove('translate-y-32', 'opacity-0');
        scopeTray.classList.add('translate-y-0', 'opacity-100');
      } else {
        scopeTray.classList.add('translate-y-32', 'opacity-0');
        scopeTray.classList.remove('translate-y-0', 'opacity-100');
      }
    }
    if (scopeCtaLink) {
      const ids = Array.from(selectedScope).join(',');
      scopeCtaLink.href = `contact.html?capabilities=${encodeURIComponent(ids)}`;
    }
  }

  let currentFilter = 'all';
  renderTable('all', '');

  // Filter Pills
  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => {
        p.classList.remove('bg-sixo-orange', 'text-obsidian', 'shadow-orange-glow');
        p.classList.add('bg-carbon', 'text-neutral-gray');
      });
      pill.classList.remove('bg-carbon', 'text-neutral-gray');
      pill.classList.add('bg-sixo-orange', 'text-obsidian', 'shadow-orange-glow');

      currentFilter = pill.getAttribute('data-service-filter') || 'all';
      renderTable(currentFilter, searchInput ? searchInput.value : '');
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      renderTable(currentFilter, e.target.value);
    });
  }
}

/* ==========================================================================
   10. Multi-Disciplinary Scope Configurator & Brief Portal (contact.html)
   ========================================================================== */
function initScopeConfigurator() {
  const form = document.getElementById('scope-configurator-form');
  const multiCompanyBanner = document.getElementById('multi-company-alert');
  const verticalCheckboxes = document.querySelectorAll('input[name="vertical"]');
  const capabilitiesField = document.getElementById('f-capabilities');
  const successModal = document.getElementById('submission-telemetry-modal');

  // Read URL query parameters for pre-population
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const paramVertical = urlParams.get('vertical');
    const paramCapabilities = urlParams.get('capabilities');
    const paramService = urlParams.get('service');

    if (paramVertical) {
      verticalCheckboxes.forEach((cb) => {
        if (cb.value.toLowerCase() === paramVertical.toLowerCase()) {
          cb.checked = true;
        }
      });
    }

    if (paramCapabilities && capabilitiesField) {
      const ids = paramCapabilities.split(',');
      const titles = ids.map((id) => {
        const found = SIXOLAB_SERVICES.find((s) => s.id === id);
        return found ? found.title : id;
      });
      capabilitiesField.value = titles.join(', ');
    } else if (paramService && capabilitiesField) {
      capabilitiesField.value = paramService;
    }
  } catch (err) {
    console.warn('URL parsing error:', err);
  }

  // Check how many verticals are active
  function checkVerticalsCount() {
    let count = 0;
    verticalCheckboxes.forEach((cb) => {
      if (cb.checked) count++;
    });

    if (multiCompanyBanner) {
      if (count >= 2) {
        multiCompanyBanner.classList.remove('hidden');
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(multiCompanyBanner, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.35 });
        }
      } else {
        multiCompanyBanner.classList.add('hidden');
      }
    }
  }

  verticalCheckboxes.forEach((cb) => {
    cb.addEventListener('change', checkVerticalsCount);
  });
  checkVerticalsCount();

  // Form submission handler
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('f-name')?.value.trim();
      const email = document.getElementById('f-email')?.value.trim();
      const org = document.getElementById('f-org')?.value.trim();
      const brief = document.getElementById('f-brief')?.value.trim();

      if (!name || !email || !org || !brief) {
        alert('Please fill out all required fields: Name, Organization, Work Email, and Business Objective.');
        return;
      }

      form.classList.add('hidden');
      if (successModal) {
        successModal.classList.remove('hidden');
        const summaryName = document.getElementById('modal-client-name');
        const summaryOrg = document.getElementById('modal-client-org');
        if (summaryName) summaryName.textContent = name;
        if (summaryOrg) summaryOrg.textContent = org;
      }
    });
  }
}

/* ==========================================================================
   11. Expandable Accordion Slabs (process.html, ecosystem.html)
   ========================================================================== */
function initAccordionSlabs() {
  document.querySelectorAll('[data-accordion-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const panel = trigger.nextElementSibling;
      const arrow = trigger.querySelector('.accordion-arrow');
      if (!panel) return;

      const isOpen = !panel.classList.contains('hidden');

      if (isOpen) {
        panel.classList.add('hidden');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      } else {
        panel.classList.remove('hidden');
        if (arrow) arrow.style.transform = 'rotate(90deg)';
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(panel, { opacity: 0, y: -8 }, { opacity: 1, y: 0, duration: 0.25 });
        }
      }
    });
  });
}

/* ==========================================================================
   12. Copy-To-Clipboard Buttons & Feedback Toast
   ========================================================================== */
function initClipboardButtons() {
  const toast = document.getElementById('clipboard-toast');

  document.querySelectorAll('[data-copy-text]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const text = btn.getAttribute('data-copy-text');
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        if (toast) {
          toast.classList.remove('opacity-0', 'translate-y-4');
          toast.classList.add('opacity-100', 'translate-y-0');
          setTimeout(() => {
            toast.classList.remove('opacity-100', 'translate-y-0');
            toast.classList.add('opacity-0', 'translate-y-4');
          }, 2400);
        } else {
          const originalText = btn.textContent;
          btn.textContent = '✓ Copied!';
          setTimeout(() => {
            btn.textContent = originalText;
          }, 1800);
        }
      });
    });
  });
}
