import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-mist">
      <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <span className="eyebrow bg-white">FAQ</span>
          <h2 className="section-title">Perguntas frequentes</h2>
          <p className="section-text">
            Informações iniciais para facilitar o contato e orientar o agendamento da avaliação.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="rounded-lg border border-white bg-white shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-navy"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {faq.question}
                  <ChevronDown className={`shrink-0 transition ${isOpen ? 'rotate-180 text-aqua' : 'text-slate-400'}`} size={20} />
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
