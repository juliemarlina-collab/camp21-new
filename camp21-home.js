/* ========================================================================== 
   CAMP21: SYNERGISING LITERACIES 2026 - V11 / V14 5-ZONE HOMEPAGE FRAMEWORK
   Purpose: clean homepage hierarchy, override legacy V8/V9 card conflicts safely.
   ========================================================================== */

:root {
  --v11-indigo: #170846;
  --v11-purple: #2d126d;
  --v11-pink: #f52f91;
  --v11-orange: #ff6a3d;
  --v11-gold: #d9af37;
  --v11-bg-light: #fffaf6;
  --v11-text-main: #20103e;
  --v11-text-muted: #5b5770;
  --v11-shadow-soft: 0 12px 30px rgba(32, 16, 62, 0.08);
  --v11-shadow-hover: 0 20px 45px rgba(32, 16, 62, 0.15);
  --v11-radius: 24px;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  color: var(--v11-text-main);
  background: #fff;
  font-family: Inter, "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
img { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
.wide { width: min(1200px, calc(100% - 40px)); margin: 0 auto; }

/* --------------------------------------------------------------------------
   GLOBAL TYPOGRAPHY + BUTTONS
   -------------------------------------------------------------------------- */
.section-tag {
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  color: var(--v11-purple);
  text-transform: uppercase;
  letter-spacing: .08em;
  font-weight: 900;
  font-size: .78rem;
  margin-bottom: .85rem;
}
.section-title {
  margin: 0;
  color: var(--v11-indigo);
  font-size: clamp(2rem, 4vw, 4.2rem);
  line-height: 1;
  letter-spacing: -.04em;
  font-weight: 900;
}
.section-desc {
  margin: 1rem 0 0;
  max-width: 720px;
  color: var(--v11-text-muted);
  font-size: 1.02rem;
  line-height: 1.7;
}
.accent {
  background: linear-gradient(90deg, var(--v11-pink), var(--v11-orange));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 1.45rem;
  border-radius: 999px;
  font-weight: 900;
  border: 1.5px solid transparent;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
}
.btn:hover { transform: translateY(-2px); }
.btn-primary {
  color: #fff;
  background: linear-gradient(90deg, var(--v11-pink), var(--v11-orange));
  box-shadow: 0 12px 24px rgba(245,47,145,.22);
}
.btn-secondary,
.btn-outline {
  background: #fff;
  color: var(--v11-indigo);
  border-color: var(--v11-indigo);
}
.btn-small { min-height: 40px; padding: 0 1rem; font-size: .86rem; }

/* --------------------------------------------------------------------------
   HEADER - CLEAN, COMPACT NAVIGATION
   -------------------------------------------------------------------------- */
.site-header.v11-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255,255,255,.88);
  backdrop-filter: blur(18px);
  padding: 1rem 0 .7rem;
}
.v11-nav-wrap {
  min-height: 62px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 999px;
  padding: .45rem .6rem .45rem .7rem;
  background: var(--v11-indigo);
  box-shadow: var(--v11-shadow-soft);
}
.v11-brand {
  display: inline-flex;
  align-items: center;
  gap: .65rem;
  min-width: 190px;
  color: #fff;
}
.v11-brand .brand-logo { width: 34px; height: 34px; object-fit: contain; border-radius: 999px; background: #fff; }
.v11-brand .brand-text strong { display: block; color: #fff; font-weight: 900; line-height: 1; font-size: 1rem; }
.v11-brand .brand-text span { display: block; color: #ffe36b; font-size: .68rem; text-transform: uppercase; font-weight: 900; }
.v11-main-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .22rem;
  flex: 1;
}
.v11-main-nav a,
.dropdown-trigger {
  color: #fff;
  font-weight: 900;
  font-size: .82rem;
  padding: .72rem .78rem;
  border-radius: 999px;
  white-space: nowrap;
}
.v11-main-nav a:hover,
.v11-main-nav a.active,
.dropdown-trigger:hover { background: rgba(255,255,255,.12); }
.v11-nav-actions { display: inline-flex; align-items: center; gap: .55rem; }
.v11-nav-actions .lang { color: #fff; border: 1.5px solid var(--v11-gold); border-radius: 999px; padding: .72rem .95rem; font-weight: 900; font-size: .82rem; }
.v11-nav-actions .menu-btn { display: none; color: #fff; background: transparent; border: 0; font-size: 1.4rem; }
.nav-dropdown { position: relative; }
.dropdown-menu {
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  min-width: 250px;
  border-radius: 18px;
  background: #fff;
  padding: .55rem;
  box-shadow: var(--v11-shadow-hover);
  border: 1px solid rgba(32,16,62,.08);
  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: .2s ease;
}
.dropdown-menu a { color: var(--v11-indigo); display: block; border-radius: 12px; padding: .75rem .85rem; }
.dropdown-menu a:hover { background: #fff3f9; }
.nav-dropdown:hover .dropdown-menu { opacity: 1; pointer-events: auto; transform: translateY(0); }

/* --------------------------------------------------------------------------
   ZONE 1: THE HERO - REFERENCE LAYOUT + GOLDEN BACKGROUND
   -------------------------------------------------------------------------- */
.v11-hero-section {
  position: relative;
  background:
    linear-gradient(90deg, rgba(255,255,255,.78), rgba(255,250,246,.68)),
    url('../assets/decor/batik-corner-gold.png'),
    linear-gradient(135deg, #ffffff 0%, var(--v11-bg-light) 100%) !important;
  background-size: cover, cover, auto !important;
  background-position: center, center, center !important;
  padding: 4rem 0 5rem;
  overflow: hidden;
}
.v11-hero-section::before,
.v11-hero-section::after,
.hero-bg-golden { display: none !important; content: none !important; }
.v11-hero-grid {
  display: grid !important;
  grid-template-columns: 1.1fr 0.9fr !important;
  gap: 3rem !important;
  align-items: center !important;
}
.v11-hero-copy {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  gap: 1.25rem !important;
  justify-content: center !important;
}
.v11-hero-copy .hero-badge {
  width: 90px !important;
  height: auto !important;
  margin: 0 !important;
  filter: drop-shadow(0 6px 16px rgba(32,16,62,0.12)) !important;
}
.hero-microtag { margin: -.6rem 0 0; color: var(--v11-pink); font-weight: 900; }
.hero-title { margin: .2rem 0 0; line-height: .92; letter-spacing: -.055em; font-weight: 900; }
.hero-title .hero-camp { display: block; color: var(--v11-indigo); font-size: clamp(3.6rem, 7vw, 6.3rem); }
.hero-title .hero-main {
  display: block;
  max-width: 760px;
  font-size: clamp(3.4rem, 6.5vw, 5.7rem);
  background: linear-gradient(90deg, var(--v11-pink), var(--v11-orange));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.v11-hero-copy .hero-subtitle {
  margin: 0 !important;
  max-width: 90% !important;
  color: var(--v11-text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  font-weight: 650;
}
.hero-meta { display: flex; flex-wrap: wrap; gap: .85rem; margin-top: .2rem; }
.meta-pill {
  display: inline-flex;
  align-items: center;
  gap: .65rem;
  padding: .85rem 1.2rem;
  border-radius: 999px;
  background: rgba(255,255,255,.9);
  border: 1.5px solid rgba(217,175,55,.35);
  color: var(--v11-indigo);
  font-weight: 900;
  box-shadow: 0 10px 26px rgba(32,16,62,.06);
}
.meta-icon { width: 22px; height: 22px; display: inline-grid; place-items: center; border-radius: 50%; background: var(--v11-indigo); color: #fff; font-size: .7rem; }
.meta-icon.pink { background: var(--v11-pink); }
.hero-actions { display: flex; flex-wrap: wrap; gap: .9rem; }
.v11-hero-visual {
  position: relative !important;
  padding: 0 !important;
  border: none !important;
  border-radius: 28px !important;
  overflow: hidden !important;
  box-shadow: var(--v11-shadow-hover) !important;
  background: transparent !important;
  height: 100% !important;
  min-height: 450px !important;
}
.v11-hero-visual::before { content: none !important; display: none !important; }
.v11-hero-visual img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  display: block !important;
}
.hero-location-chip {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  background: #fff;
  color: var(--v11-indigo);
  padding: .65rem 1rem;
  border-radius: 999px;
  font-size: .82rem;
  font-weight: 900;
  box-shadow: 0 10px 24px rgba(32,16,62,.12);
}
.v11-hero-stat {
  position: absolute !important;
  right: 20px !important;
  bottom: 20px !important;
  z-index: 10 !important;
  margin: 0 !important;
  background: var(--v11-indigo) !important;
  color: #fff !important;
  padding: 1.2rem 1.5rem !important;
  border-radius: 16px !important;
  border: 1px solid rgba(255,255,255,.18) !important;
  box-shadow: 0 16px 30px rgba(23,8,70,.25);
  transform: scale(.88) !important;
  transform-origin: bottom right !important;
}
.v11-hero-stat strong { display: block; color: #ffe36b; font-size: 4rem; line-height: .8; font-weight: 950; }
.v11-hero-stat .hero-stat-title { display: block; margin-top: .55rem; font-size: 1.35rem; font-weight: 950; }
.v11-hero-stat span:last-child { display: block; color: rgba(255,255,255,.85); font-size: .88rem; margin-top: .15rem; }

/* --------------------------------------------------------------------------
   ZONE 2: CHOOSE YOUR PATHWAY (Dark Portal Section)
   -------------------------------------------------------------------------- */
.v11-pathway-section {
  background: linear-gradient(135deg, var(--v11-indigo), var(--v11-purple));
  color: #fff;
  padding: 5rem 0;
}
.v11-pathway-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.2rem;
  margin-top: 2.5rem;
  align-items: stretch;
}
.v11-pathway-card {
  display: flex;
  flex-direction: column;
  min-height: 220px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--v11-radius);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}
.v11-pathway-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--v11-pink);
}
.v11-pathway-card .pathway-icon { font-size: 2rem; margin-bottom: 1rem; }
.v11-pathway-card h3 { color: #fff; margin: 0 0 .5rem; font-size: 1.05rem; }
.v11-pathway-card p { margin: 0; font-size: .86rem; color: rgba(255,255,255,.74); line-height: 1.6; }
.v11-pathway-card .pathway-link { margin-top: auto; padding-top: 1.2rem; color: #ffe36b; font-weight: 900; }

/* --------------------------------------------------------------------------
   ZONE 3: PROGRAMME SNAPSHOT
   -------------------------------------------------------------------------- */
.v11-programme-section {
  background: #ffffff;
  padding: 5rem 0;
}
.v11-programme-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;
  align-items: stretch;
}
.v11-day-card {
  display: flex;
  flex-direction: column;
  min-height: 220px;
  background: var(--v11-bg-light);
  border: 1px solid rgba(32, 16, 62, 0.05);
  border-radius: var(--v11-radius);
  padding: 2rem;
  box-shadow: var(--v11-shadow-soft);
  transition: all 0.3s ease;
}
.v11-day-card:hover { box-shadow: var(--v11-shadow-hover); transform: translateY(-4px); }
.v11-day-badge {
  display: inline-block;
  align-self: flex-start;
  background: var(--v11-pink);
  color: #fff;
  font-weight: 900;
  font-size: .8rem;
  padding: .4rem 1rem;
  border-radius: 999px;
  margin-bottom: 1rem;
}
.v11-day-card h3 { color: var(--v11-indigo); margin: 0 0 .5rem; font-size: 1.22rem; }
.v11-day-card p { font-size: .92rem; color: var(--v11-text-muted); line-height: 1.65; margin: 0; }
.programme-cta { margin-top: 2rem; }

/* --------------------------------------------------------------------------
   ZONE 4: LEARNING FRAMEWORK
   -------------------------------------------------------------------------- */
.v11-framework-section {
  background: var(--v11-bg-light);
  padding: 5rem 0;
  border-top: 1px solid rgba(32, 16, 62, 0.05);
}
.v11-framework-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2.5rem;
  align-items: stretch;
}
.v11-framework-col {
  background: rgba(255,255,255,.72);
  padding: 2rem;
  border-left: 3px solid var(--v11-gold);
  border-radius: 0 var(--v11-radius) var(--v11-radius) 0;
  box-shadow: 0 10px 24px rgba(32,16,62,.05);
}
.v11-framework-col h3 { color: var(--v11-indigo); margin: 0 0 1rem; }
.v11-framework-col p { font-size: .92rem; color: var(--v11-text-muted); line-height: 1.65; margin: 0; }
.sdg-mini-row { display: flex; flex-wrap: wrap; gap: .45rem; margin-top: 1rem; }
.sdg-mini-row span { background: #fff; border: 1px solid rgba(32,16,62,.08); border-radius: 999px; padding: .42rem .72rem; font-weight: 900; font-size: .78rem; color: var(--v11-purple); }

/* --------------------------------------------------------------------------
   ZONE 5: QUICK ACCESS / FINAL CTA + FOOTER
   -------------------------------------------------------------------------- */
.v11-final-cta {
  background: linear-gradient(135deg, var(--v11-indigo), var(--v11-purple));
  color: #fff;
  padding: 4.5rem 0;
}
.v11-final-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: rgba(255,255,255,.07);
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 28px;
  padding: 2rem;
}
.v11-final-card h2 { color: #fff; margin: 0; font-size: clamp(1.8rem, 4vw, 3.2rem); }
.v11-final-card p { color: rgba(255,255,255,.72); margin: .5rem 0 0; }
.v11-final-buttons { display: flex; gap: .85rem; flex-wrap: wrap; }
.site-footer {
  background: #100331 !important;
  color: #fff;
  padding: 4rem 0 2rem;
}
.footer-grid-v11 {
  display: grid;
  grid-template-columns: 1.25fr 1fr 1fr 1.3fr;
  gap: 2rem;
}
.footer-grid-v11 h4 { margin: 0 0 1rem; color: #fff; }
.footer-grid-v11 p,
.footer-grid-v11 a { color: rgba(255,255,255,.72); line-height: 1.7; display: block; margin: .4rem 0; }
.footer-brand-mini { display: flex; align-items: center; gap: .75rem; margin-bottom: 1rem; }
.footer-brand-mini img { width: 54px; height: 54px; object-fit: contain; background: #fff; border-radius: 50%; }
.footer-logos-standardized { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .7rem; }
.logo-card { background: #fff; border-radius: 14px; min-height: 62px; display: grid; place-items: center; padding: .5rem; }
.logo-card img { max-height: 44px; object-fit: contain; }
.footer-bottom-v11 { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,.1); color: rgba(255,255,255,.58); text-align: center; font-size: .85rem; }

/* --------------------------------------------------------------------------
   MOBILE RESPONSIVENESS
   -------------------------------------------------------------------------- */
@media (max-width: 1080px) {
  .v11-main-nav { display: none; }
  .v11-nav-actions .menu-btn { display: inline-flex; }
  .v11-nav-wrap { width: min(100% - 24px, 1200px); }
  .v11-pathway-grid { grid-template-columns: repeat(3, 1fr); }
  .v11-programme-grid { grid-template-columns: repeat(2, 1fr); }
  .footer-grid-v11 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .wide { width: min(100% - 28px, 1200px); }
  .v11-header .brand-text span { display: none; }
  .v11-nav-actions .lang { display: none; }
  .v11-hero-section { padding: 2.4rem 0 3.2rem; }
  .v11-hero-grid { grid-template-columns: 1fr !important; text-align: left; gap: 2rem !important; }
  .v11-hero-copy { align-items: flex-start !important; }
  .v11-hero-visual { min-height: 320px !important; }
  .hero-title .hero-camp { font-size: clamp(3rem, 15vw, 4.5rem); }
  .hero-title .hero-main { font-size: clamp(3rem, 14vw, 4.25rem); }
  .v11-pathway-grid,
  .v11-programme-grid,
  .v11-framework-grid { grid-template-columns: 1fr; }
  .v11-framework-col { border-left: none; border-top: 3px solid var(--v11-gold); border-radius: var(--v11-radius); }
  .v11-final-card { flex-direction: column; align-items: flex-start; }
  .footer-grid-v11 { grid-template-columns: 1fr; }
}
