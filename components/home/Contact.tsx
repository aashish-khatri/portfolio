export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1320px] px-6 md:px-10 py-16 md:py-28 scroll-mt-16">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-10">
        <div className="hidden lg:block lg:col-span-1 rail"><span className="rail-node is-accent" /></div>
        <div className="lg:col-span-11">
          <h2 className="t-section">Say hello</h2>
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-12">
            <div className="md:col-span-6">
              <a href="mailto:aashishkhatri809@gmail.com" className="font-display text-[clamp(1.75rem,3.2vw,2.75rem)] leading-tight link-ul break-all">
                aashishkhatri809@gmail.com
              </a>
              <p className="mt-6 text-text-secondary max-w-[46ch]">
                Founding engineer at Nada. Open to frontend, mobile and design-engineer roles. I reply within a day.
              </p>
              <div className="mt-8 flex gap-6">
                <a href="https://www.linkedin.com/in/aashish--khatri/" target="_blank" rel="noopener noreferrer" className="link-ul">LinkedIn</a>
                <a href="https://github.com/aashish-khatri" target="_blank" rel="noopener noreferrer" className="link-ul">GitHub</a>
              </div>
            </div>
            <form action="https://formspree.io/f/xwpggrkw" method="POST" className="md:col-span-5 md:col-start-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="block t-small text-text-muted">Name<input type="text" name="name" required className="field mt-1" /></label>
                <label className="block t-small text-text-muted">Email<input type="email" name="email" required className="field mt-1" /></label>
              </div>
              <label className="block t-small text-text-muted">Message<textarea name="message" required rows={4} className="field mt-1 resize-none" /></label>
              <button type="submit" className="inline-block px-6 py-3 bg-primary text-bg-primary hover:bg-primary-light transition-colors">Send message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
