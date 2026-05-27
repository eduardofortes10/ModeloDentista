import { CheckCircle2 } from 'lucide-react';

const points = ['Planejamento claro', 'Comunicação transparente', 'Atendimento com horário marcado'];

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
        <div>
          <span className="eyebrow">Sobre a clínica</span>
          <h2 className="section-title">Um espaço moderno para cuidar da saúde bucal com tranquilidade</h2>
          <p className="section-text">
            A Clínica Sorriso Prime nasceu com o objetivo de oferecer um atendimento odontológico mais humano, moderno e confortável. Nosso compromisso é cuidar da saúde bucal de cada paciente com atenção, transparência e qualidade.
          </p>
          <div className="mt-8 grid gap-3">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                <CheckCircle2 className="text-aqua" size={20} />
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg bg-navy p-6 text-white shadow-soft">
          <p className="text-sm font-semibold text-aqua">Nossa abordagem</p>
          <h3 className="mt-3 text-2xl font-bold">Cuidado individual, orientação simples e ambiente acolhedor.</h3>
          <p className="mt-4 leading-7 text-slate-200">
            Cada consulta é conduzida com escuta, avaliação responsável e explicação dos próximos passos, para que o paciente participe das decisões com segurança.
          </p>
        </div>
      </div>
    </section>
  );
}
