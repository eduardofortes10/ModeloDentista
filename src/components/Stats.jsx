import { stats } from '../data';

export default function Stats() {
  return (
    <section className="bg-navy py-12 text-white">
      <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-lg border border-white/10 bg-white/6 p-6">
            <p className="text-3xl font-extrabold text-aqua">{stat.value}</p>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-200">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
