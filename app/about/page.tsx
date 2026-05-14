export default function About() {
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
        <p className="eyebrow">About Frame It UK</p>

        <h1>
          Premium sports memorabilia framing, built around the story.
        </h1>

        <p className="sub">
          Frame It UK was created from a passion for football, sport and the memories
          attached to every shirt, medal and signed piece.
          Based in Scotland, we specialise in bespoke sports memorabilia framing
          designed to turn personal moments into premium display pieces.
        </p>
      </section>

      <section className="section">
        <div className="grid">

          <div className="card">
            <h3>Built For Collectors</h3>
            <p>
              Whether it’s a signed professional shirt, a child’s first football top,
              a cup final memory or a match-worn piece, every frame is designed
              around the importance of the item.
            </p>
          </div>

          <div className="card">
            <h3>Premium Finish</h3>
            <p>
              Every display is carefully planned using premium materials,
              clean layouts and modern presentation styles to create
              a professional finish worthy of display.
            </p>
          </div>

          <div className="card">
            <h3>Bespoke Design</h3>
            <p>
              No two pieces are the same. From mount colours and layouts
              to photos, nameplates and additional memorabilia,
              every frame is tailored to the customer.
            </p>
          </div>

        </div>
      </section>

      <section className="how">
        <p className="eyebrow">Why Choose Us</p>

        <h2>
          More than framing.
          Preserving memories.
        </h2>

        <div className="steps">

          <div>
            <strong>01</strong>
            <p>Professional handcrafted presentation</p>
          </div>

          <div>
            <strong>02</strong>
            <p>Modern premium framing styles</p>
          </div>

          <div>
            <strong>03</strong>
            <p>Designed around your item and story</p>
          </div>

          <div>
            <strong>04</strong>
            <p>Trusted by football fans and collectors</p>
          </div>

        </div>
      </section>

      <section className="cta">
        <h2>Ready to frame your memory?</h2>

        <p>
          Send us a photo of your item and we’ll help create the perfect display.
        </p>

        <a href="/contact" className="primary">
          Get a Quote
        </a>
      </section>

      

    </main>
  );
}
