import Image from 'next/image';
import Link from 'next/link';
import { projectsData } from '@/data/projects';

function Links({ links, githubUrl }: { links?: { label: string; href: string }[]; githubUrl?: string }) {
  const all = [...(links ?? []), ...(githubUrl ? [{ label: 'Source on GitHub', href: githubUrl }] : [])];
  if (!all.length) return null;
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2">
      {all.map((l) => (
        <Link key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="link-ul">{l.label}</Link>
      ))}
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-[1320px] px-6 md:px-10 py-16 md:py-28 scroll-mt-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
        <div className="hidden lg:block lg:col-span-1 rail"><span className="rail-node is-accent" /></div>
        <div className="lg:col-span-11">
          <h2 className="t-section">Work</h2>
          <div className="mt-12 md:mt-16 hairline-rows border-y border-border-primary">
            {projectsData.map((p) => (
              <article key={p.id} className="py-10 md:py-14 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-6">
                <div className="md:col-span-3 t-small text-text-muted">
                  <div>{p.kind}, {p.year}</div>
                  <div className="mt-1">{p.techStack.join(', ')}</div>
                  {p.stats && (
                    <dl className="mt-5 hairline-rows border-t border-border-primary">
                      {p.stats.map((s) => (
                        <div key={s.label} className="flex items-baseline justify-between py-2">
                          <dt>{s.label}</dt>
                          <dd className="font-display text-2xl leading-none text-text-primary">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
                <div className={p.image ? 'md:col-span-4' : 'md:col-span-8'}>
                  <h3 className="t-title">{p.title}</h3>
                  <p className="mt-3 text-text-secondary max-w-[58ch]">{p.description}</p>
                  <div className="mt-5"><Links links={p.links} githubUrl={p.githubUrl} /></div>
                </div>
                {p.image && (
                  <div className="md:col-span-5 relative aspect-[16/10] overflow-hidden bg-bg-secondary self-start">
                    <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 768px) 40vw, 92vw" className="object-cover object-top" />
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
