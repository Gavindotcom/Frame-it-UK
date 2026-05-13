export const metadata = {
  title: "Football Shirt Framing Scotland | Frame It UK",
  description:
    "Premium football shirt framing in Scotland. Bespoke framed football shirts, signed shirts and sports memorabilia displays by Frame It UK.",
};

export default function FootballShirtFraming() {
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
        <p className="eyebrow">Football Shirt Framing Scotland</p>

        <h1>
          Premium bespoke football shirt framing.
        </h1>

        <p className="sub">
          Frame It UK creates custom football shirt displays for signed shirts,
          match-worn memorabilia, presentation gifts and personal collections.
        </p>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>Signed Shirts</h3>

            <p>
              Preserve signed football shirts with premium framing layouts and
              display finishes.
            </p>
          </div>

          <div className="card">
            <h3>Match-Worn Shirts</h3>

            <p>
              Bespoke framing designed around important sporting memories and
              collector items.
            </p>
          </div>

          <div className="card">
            <h3>Presentation Displays</h3>

            <p>
              Ideal for clubs, coaches, awards and retirement or milestone
              gifts.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why choose Frame It UK?</h2>

        <p className="sub">
          Based in Scotland, Frame It UK provides a bespoke sports memorabilia
          framing service focused on premium finishes, clean layouts and
          handcrafted presentation.
        </p>

        <div className="grid">
          <div className="card">
            <h3>Hand Finished</h3>
            <p>Every frame is individually prepared and assembled.</p>
          </div>

          <div className="card">
            <h3>Custom Layouts</h3>
            <p>
              Designed around your shirt, club colours and preferred display.
            </p>
          </div>

          <div className="card">
            <h3>UK Delivery</h3>
            <p>
              Collection and secure delivery options available throughout the UK.
            </p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to frame your shirt?</h2>

        <p>
          Upload your item and we’ll build a bespoke framing quote around it.
        </p>

        <a href="/contact" className="primary">
          Build Your Quote
        </a>
      </section>
    </main>
  );
}
