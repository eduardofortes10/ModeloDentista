import { StarIcon, testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="avaliacoes" className="section-padding bg-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="eyebrow">Avaliações</span>
          <h2 className="section-title">Experiências reais, com linguagem profissional e responsável</h2>
          <p className="section-text">
            Depoimentos fictícios para representar a percepção de pacientes sobre atendimento, organização e acolhimento.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="card p-6">
              <div className="mb-5 flex gap-1 text-aqua" aria-label="Avaliação 5 de 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="leading-7 text-slate-600">{testimonial.text}</p>
              <p className="mt-5 font-bold text-navy">{testimonial.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
