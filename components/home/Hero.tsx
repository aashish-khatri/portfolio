import Link from 'next/link';
import ThemeDial from './ThemeDial';

const tokens = [
  { name: 'bg', v: 'var(--p-bg)' },
  { name: 'bg-2', v: 'var(--p-bg2)' },
  { name: 'line', v: 'var(--p-line)' },
  { name: 'muted', v: 'var(--p-muted)' },
  { name: 'ink', v: 'var(--p-ink)' },
  { name: 'accent', v: 'var(--p-accent)' },
];

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1320px] px-6 md:px-10 pt-10 md:pt-16 pb-16 md:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14 items-start">
        <div className="lg:col-span-7">
          <h1 className="t-display max-w-[11ch]">
            I build the screen, and the system behind it.
          </h1>
          <p className="t-lede mt-10 max-w-[38ch] text-text-secondary">
            I&apos;m Aashish Khatri, a design engineer working across frontend and mobile, in Flutter and React, from Noida. I care about type, motion and the rules that keep an interface consistent after the first release.
          </p>
          <div className="mt-8 flex gap-8">
            <Link href="/#work" className="link-ul">See the work</Link>
            <a href="mailto:aashishkhatri809@gmail.com" className="link-ul">Email me</a>
          </div>
        </div>

        {/* The specimen: one token set, five palettes. Turning the dial re-themes the whole site. */}
        <aside className="lg:col-span-5 lg:col-start-8 lg:pt-3" aria-labelledby="specimen-title">
          <div className="border border-border-primary">
            <div className="px-6 pt-6 pb-5 border-b border-border-primary">
              <h2 id="specimen-title" className="t-small text-text-muted">This site&apos;s palette</h2>
              <div className="mt-3"><ThemeDial /></div>
            </div>
            <div className="px-6 py-6 grid grid-cols-6 gap-2">
              {tokens.map((t) => (
                <div key={t.name}>
                  <div className="aspect-square border border-border-primary" style={{ background: t.v }} />
                  <div className="mt-1.5 text-xs text-text-muted">{t.name}</div>
                </div>
              ))}
            </div>
            <div className="px-6 pb-6 flex items-end justify-between gap-6">
              <div>
                <div className="font-display text-5xl leading-none">Aa</div>
                <div className="t-small text-text-muted mt-2">Instrument Serif, Schibsted Grotesk</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-block px-3 py-1.5 t-small bg-primary text-bg-primary">Button</span>
                <span className="inline-block px-3 py-1.5 t-small text-accent border border-accent">Tag</span>
              </div>
            </div>
          </div>
          <p className="mt-3 t-small text-text-muted max-w-[52ch]">
            Five palettes, one set of tokens. Pick one and the whole site, including the blog, follows. Your choice is remembered on this device.
          </p>
        </aside>
      </div>
    </section>
  );
}
