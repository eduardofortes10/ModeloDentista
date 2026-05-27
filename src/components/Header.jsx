import { Menu, MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import { clinicInfo, navLinks, whatsappUrl } from '../data';
import ToothLogo from './ToothLogo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/92 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-11 w-11 place-items-center rounded-lg bg-navy text-aqua">
            <ToothLogo className="h-7 w-7" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold text-navy sm:text-lg">{clinicInfo.name}</span>
            <span className="hidden text-xs font-medium text-slate-500 sm:block">Odontologia moderna</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 transition hover:text-ocean">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
            <MessageCircle size={18} />
            Agendar consulta
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-navy lg:hidden"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-page py-4">
            <nav className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-ocean"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary mt-4 w-full" onClick={closeMenu}>
              <MessageCircle size={18} />
              Agendar consulta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
