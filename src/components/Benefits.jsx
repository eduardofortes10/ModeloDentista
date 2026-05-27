import { benefits } from '../data';

export default function Benefits() {
  return (
    <section id="diferenciais" className="section-padding bg-mist">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="eyebrow bg-white">Diferenciais</span>
            <h2 className="section-title">Por que escolher a Sorriso Prime?</h2>
            <p className="section-text">
              A experiência foi pensada para unir organização, acolhimento e clareza em cada etapa do atendimento.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article key={benefit.title} className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <Icon className="text-aqua" size={24} />
                  <h3 className="mt-4 text-lg font-bold text-navy">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
