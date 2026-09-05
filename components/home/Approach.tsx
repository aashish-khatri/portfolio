import { experienceData } from '@/data/experience';

const principles = [
  {
    lead: 'Rules live in tests, not in a wiki.',
    body: 'Layer boundaries and naming are checked by architecture tests, and CI greps for regression-guard markers in source and fails if the matching test is missing. A rule nobody can break by accident is the only kind that survives a deadline.',
  },
  {
    lead: 'Motion is written, not imported.',
    body: 'Splash convergence, a network that ignites, a verified-node pulse, a carousel driven by its own controller. Custom painters cost more up front and are the reason a product feels like one hand made it.',
  },
  {
    lead: 'The empty state is the first screen.',
    body: 'A reviewer with no permissions granted still needs a useful screen. Cold-start and empty states get their own sweep and their own build before anything else ships.',
  },
];

export default function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-[1320px] px-6 md:px-10 py-16 md:py-28 scroll-mt-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
        <div className="hidden lg:block lg:col-span-1 rail"><span className="rail-node" /></div>
        <div className="lg:col-span-11">
          <h2 className="t-section">How I work</h2>
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10">
            {principles.map((p) => (
              <p key={p.lead} className="max-w-[40ch] text-text-secondary">
                <strong className="text-text-primary font-medium">{p.lead}</strong> {p.body}
              </p>
            ))}
          </div>

          <div className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-8">
            <h3 className="md:col-span-3 t-title">Experience</h3>
            <ol className="md:col-span-9 hairline-rows border-t border-border-primary">
              {experienceData.map((e) => (
                <li key={e.id} className="py-8 grid grid-cols-1 md:grid-cols-9 gap-x-10 gap-y-3">
                  <div className="md:col-span-3">
                    <div className="text-lg">{e.role}</div>
                    <div className="text-text-muted">{e.company}</div>
                    <div className="t-small text-text-muted mt-1">{e.period}</div>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-text-secondary max-w-[62ch]">{e.description}</p>
                    <ul className="mt-4 space-y-2 t-small text-text-secondary max-w-[68ch] list-disc pl-5 marker:text-text-subtle">
                      {e.achievements.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  </div>
                </li>
              ))}
              <li className="py-8 grid grid-cols-1 md:grid-cols-9 gap-x-10 gap-y-3">
                <div className="md:col-span-3">
                  <div className="text-lg">Integrated B.Tech and M.Tech, Information Technology</div>
                  <div className="text-text-muted">ABV-IIITM Gwalior</div>
                  <div className="t-small text-text-muted mt-1">2018 to 2023</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
