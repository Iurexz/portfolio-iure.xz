import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({
  shellClass,
  navItems,
  activeSection,
  isMenuOpen,
  onToggleMenu,
  onNavigate,
}) {
  return (
    <header
      className={`${shellClass} sticky top-4 z-50 mt-4 rounded-full border border-white/15 bg-black/60 px-4 py-3 backdrop-blur-md`}
    >
      <div className="flex items-center justify-between gap-4">
        <a
          href="#inicio"
          className="font-display text-lg font-bold tracking-[0.12em] md:ml-6 ml-3"
          onClick={(event) => onNavigate(event, "inicio")}
        >
          IURE.XZ
        </a>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Navegacao principal desktop">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => onNavigate(event, item.id)}
              className={`relative rounded-full px-3 py-1.5 text-sm transition-all duration-300 ${
                activeSection === item.id ? "text-white" : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {activeSection === item.id ? (
                <motion.span
                  layoutId="desktop-nav-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-blue-300/45 bg-blue-500/20"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                />
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 md:hidden"
          aria-label="Abrir menu"
          aria-expanded={isMenuOpen}
          onClick={onToggleMenu}
        >
          <span
            className={`block h-0.5 w-4 bg-white transition-transform duration-200 ${
              isMenuOpen ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-4 bg-white transition-transform duration-200 ${
              isMenuOpen ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            className="mt-3 grid gap-1 rounded-2xl border border-white/15 bg-black/85 p-3 md:hidden"
            aria-label="Navegacao principal mobile"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(event) => onNavigate(event, item.id)}
                className={`rounded-lg px-2 py-1 text-sm transition-colors duration-200 hover:bg-white/5 hover:text-white ${
                  activeSection === item.id ? "bg-white/5 text-white" : "text-[var(--muted)]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
