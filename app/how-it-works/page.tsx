export default function HowItWorks() {
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
        <a href="/contact" className="navBtn">Get a Quote</a>
      </nav>

      <section className="section">
        <p className="eyebrow">How It Works</p>
        <h1>Simple, personal and built around your item.</h1>
        <p className="sub">
          From the first message to the finished frame, we keep the process clear,
          simple and bespoke to your memorabilia.
        </p>
      </section>

      <section className="how">
        <div className="steps">
          <div>
            <strong>01</strong>
            <p>Send us a photo of your item</p>
          </div>
          <div>
            <strong>02</strong>
            <p>Choose your frame, mount and layout</p>
          </div>
          <div>
            <strong>03</strong>
            <p>We frame it by hand</p>
          </div>
          <div>
            <strong>04</strong>
            <p>Collect or receive your finished display</p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">What We’ll Ask</p>
        <h2>To give you the right quote.</h2>

        <div className="grid">
          <div className="card">
            <h3>Your item</h3>
            <p>Shirt, gloves, medal, programme, signed photo or another piece of memorabilia.</p>
          </div>

          <div className="card">
            <h3>Your style</h3>
            <p>Clean and classic, bold and club-coloured, or premium presentation style.</p>
          </div>

          <div className="card">
            <h3>Your extras</h3>
            <p>Nameplates, photos, certificates, captions or multi-item layouts.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Start with a photo.</h2>
        <p>Send us your item and we’ll recommend the best framing options.</p>
        <a href="/contact" className="primary">Get a Quote</a>
      </section>
    </main>
  );
}
