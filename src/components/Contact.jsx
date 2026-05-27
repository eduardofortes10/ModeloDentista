import { Navigation, PhoneCall } from 'lucide-react';
import { clinicInfo, contactItems, whatsappUrl } from '../data';

export default function Contact() {
  return (
    <>
      <section id="contato" className="section-padding bg-white">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="eyebrow">Contato</span>
              <h2 className="section-title">Agende sua avaliação com praticidade</h2>
              <p className="section-text">
                Fale com a equipe pelo WhatsApp, confira os horários e encontre a clínica em uma região de fácil acesso.
              </p>

              <div className="mt-8 grid gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex gap-4 rounded-lg border border-slate-100 bg-white p-4 shadow-sm">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-mist text-ocean">
                        <Icon size={22} />
                      </div>
                      <div>
                        <p className="font-bold text-navy">{item.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary mt-8">
                <PhoneCall size={18} />
                Agendar pelo WhatsApp
              </a>
            </div>

            <div className="rounded-lg border border-slate-100 bg-mist p-5 shadow-soft">
              <div className="grid min-h-[420px] place-items-center rounded-lg border border-dashed border-ocean/35 bg-white p-6 text-center">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-lg bg-navy text-aqua">
                    <Navigation size={30} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-navy">Localização</h3>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">{clinicInfo.address}</p>
                  <p className="mt-4 text-sm font-semibold text-ocean">Espaço reservado para mapa incorporado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white">
        <div className="container-page text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Pronto para cuidar melhor do seu sorriso?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-200">
            Agende sua avaliação e dê o primeiro passo para uma saúde bucal melhor.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn-primary mt-8">
            Agendar consulta
          </a>
        </div>
      </section>
    </>
  );
}
