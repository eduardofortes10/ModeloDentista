import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { clinicInfo, navLinks, whatsappUrl } from '../data';
import ToothLogo from './ToothLogo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-lg bg-aqua text-navy">
              <ToothLogo className="h-7 w-7" />
            </span>
            <span className="text-lg font-extrabold">{clinicInfo.name}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-slate-300">
            Modelo fictício de landing page para uma clínica odontológica moderna, criado para portfólio freelancer.
          </p>
          <div className="mt-5 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#inicio"
                aria-label="Rede social fictícia"
                className="grid h-10 w-10 place-items-center rounded-md bg-white/10 text-slate-200 transition hover:bg-aqua hover:text-navy"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Links rápidos</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-slate-300 transition hover:text-aqua">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Contato</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">{clinicInfo.address}</p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-aqua">
            <MessageCircle size={18} />
            {clinicInfo.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-page text-center text-xs text-slate-400">
          © 2026 Clínica Sorriso Prime. Modelo fictício para portfólio freelancer.
        </div>
      </div>
    </footer>
  );
}
