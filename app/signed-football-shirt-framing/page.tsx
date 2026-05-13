export const metadata = {
  title: "Signed Football Shirt Framing | Frame It UK",
  description:
    "Premium signed football shirt framing by Frame It UK. Bespoke framing for autographed shirts, collector memorabilia and presentation displays.",
};

export default function SignedFootballShirtFraming() {
  return (
    <main className="site">
      <nav className="nav">
        <div className="logo">FRAME IT UK</div>

        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>

        <a href="/contact" className="navBtn">
          Get a Quote
        </a>
      </nav>

      <section className="section">
        <p className="eyebrow">Signed Football Shirt Framing</p>

        <h1>Premium framing for signed football shirts.</h1>

        <p className="sub">
          Preserve autographed football shirts with bespoke framing layouts,
          premium finishes and handcrafted presentation displays.
        </p>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>Collector Displays</h3>

            <p>
              Designed for signed shirts, limited editions and valuable
              memorabilia collections.
            </p>
          </div>

          <div className="card">
            <h3>Presentation Frames</h3>

            <p>
              Ideal for gifts, awards, milestones and framed sporting memories.
            </p>
          </div>

          <div className="card">
            <h3>Bespoke Layouts</h3>

            <p>
              Custom mount colours, plaques, photos and display options
              available.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Designed around your shirt.</h2>

        <p className="sub">
          Every signed shirt frame is individually designed to suit the item,
          the signature placement and the overall display style.
        </p>
      </section>

      <section className="cta">
        <h2>Ready to frame your signed shirt?</h2>

        <p>
          Upload your item and we’ll create a bespoke quote and layout idea.
        </p>

        <a href="/contact" className="primary">
          Build Your Quote
        </a>
      </section>
    </main>
  );
}
