export default function About() {
  return (
    <main className="site">
      <nav className="nav">
        <div className="logo">FRAME IT UK</div>

        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <a href="/contact" className="navBtn">
          Get a Quote
        </a>
      </nav>

      <section className="section">
        <p className="eyebrow">About Frame It UK</p>

        <h1>
          Premium sports memorabilia framing built around your story.
        </h1>

        <p className="sub">
          Frame It UK creates bespoke framed displays for signed shirts,
          match-worn kits, medals, photos and sporting memories.
          Every piece is individually designed and hand finished in Scotland.
        </p>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>Hand Finished</h3>
            <p>
              Every frame is individually assembled with attention to detail,
              layout and presentation quality.
            </p>
          </div>

          <div className="card">
            <h3>Built Around Your Item</h3>
            <p>
              Shirt layouts, mount colours, photos, plaques and spacing are all
              designed specifically for your memorabilia.
            </p>
          </div>

          <div className="card">
            <h3>Scotland Based</h3>
            <p>
              Based in Scotland and working with customers across the UK for
              football shirts, signed memorabilia and sporting displays.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Customer Feedback</p>

        <div className="grid">
          <div className="card">
            <p>
              “Absolutely brilliant quality. The frame exceeded expectations.”
            </p>
            <h3>★★★★★</h3>
          </div>

          <div className="card">
            <p>
              “Perfect gift for my son. Professional from start to finish.”
            </p>
            <h3>★★★★★</h3>
          </div>

          <div className="card">
            <p>
              “The signed shirt looks unbelievable on the wall.”
            </p>
            <h3>★★★★★</h3>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to frame your piece?</h2>

        <p>
          Send us a photo of your item and we’ll recommend the best layout.
        </p>

        <a href="/contact" className="primary">
          Get a Quote
        </a>
      </section>
    </main>
  );
}
