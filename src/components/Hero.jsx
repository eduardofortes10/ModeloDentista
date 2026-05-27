import { CalendarDays, CheckCircle2, Clock3, MessageCircle, ShieldCheck, Users } from 'lucide-react';
import heroImage from '../assets/clinica-sorriso-prime-hero.png';
import { whatsappUrl } from '../data';

const highlights = [
  { icon: ShieldCheck, text: 'Atendimento humanizado' },
  { icon: Clock3, text: 'Horários flexíveis' },
  { icon: Users, text: 'Profissionais qualificados' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-mist to-white pt-28 sm:pt-32">
      <div className="container-page grid items-center gap-12 pb-16 pt-6 lg:grid-cols-[1fr_0.92fr] lg:pb-24">
        <div>
          <span className="eyebrow">
            <CheckCircle2 size={16} />
            Clínica odontológica em São Paulo
          </span>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-navy sm:text-5xl lg:text-6xl">
            Cuide do seu sorriso com conforto, tecnologia e confiança
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Atendimento odontológico moderno para cuidar da sua saúde bucal com segurança, atenção e qualidade.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <MessageCircle size={19} />
              Agendar pelo WhatsApp
            </a>
            <a href="#tratamentos" className="btn-secondary">
              <CalendarDays size={19} />
              Conhecer tratamentos
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="rounded-lg border border-white bg-white/80 p-4 shadow-sm">
                  <Icon className="mb-3 text-aqua" size={22} />
                  <p className="text-sm font-bold leading-5 text-navy">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border border-white bg-white shadow-soft">
            <img
              src={heroImage}
              alt="Atendimento acolhedor em uma clínica odontológica moderna"
              className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[560px]"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 rounded-lg border border-slate-100 bg-white p-5 shadow-soft sm:left-auto sm:right-8 sm:w-80">
            <p className="text-sm font-semibold text-slate-500">Consulta com atenção ao seu momento</p>
            <p className="mt-2 text-2xl font-extrabold text-navy">Cuidado claro, acolhedor e bem planejado.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
