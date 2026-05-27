import { ArrowRight } from 'lucide-react';
import { treatments, whatsappUrl } from '../data';

export default function Treatments() {
  return (
    <section id="tratamentos" className="section-padding bg-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Tratamentos</span>
          <h2 className="section-title">Cuidado odontológico para diferentes necessidades</h2>
          <p className="section-text">
            Serviços organizados para prevenção, acompanhamento e tratamentos indicados com transparência após avaliação profissional.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment) => {
            const Icon = treatment.icon;
            return (
              <article key={treatment.title} className="card p-6">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-mist text-ocean">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-navy">{treatment.title}</h3>
                <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{treatment.description}</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ocean transition hover:text-navy">
                  Agendar
                  <ArrowRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
