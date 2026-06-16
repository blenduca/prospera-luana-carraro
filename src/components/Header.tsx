import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'O evento', href: '#evento' },
  { label: 'Para quem é', href: '#para-quem' },
  { label: 'Condução', href: '#conducao' },
  { label: 'Inscrição', href: '#inscricao' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/15 bg-secondary">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-5 lg:px-6">
        <a href="#" className="font-serif text-xl md:text-2xl text-white tracking-tight">
          Prospera
        </a>

        <nav className="hidden md:flex items-center gap-5 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inscricao"
            className="rounded-lg border border-white/35 bg-light px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white lg:px-5"
          >
            Garantir vaga
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-white transition"
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`overflow-hidden bg-secondary transition-[max-height] duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-white/70 hover:text-white transition py-2.5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#inscricao"
            onClick={() => setMobileOpen(false)}
            className="mt-3 block rounded-lg border border-white/35 bg-light px-5 py-3 text-center text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white"
          >
            Garantir vaga
          </a>
        </nav>
      </div>
    </header>
  );
}
