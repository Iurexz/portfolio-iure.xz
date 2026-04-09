export default function Footer({ shellClass }) {
  return (
    <footer className={`${shellClass} border-t border-white/10 pb-8 pt-4`}>
      <p className="text-xs text-[var(--muted)]">
        © {new Date().getFullYear()} Iure XZ. Todos os direitos reservados.
      </p>
    </footer>
  );
}
