export default function Home() {
  return (
    <main className="site">
      <nav className="nav">
        <div className="logo">FRAME IT UK</div>

        <div className="navLinks">
  <a href="/services">Services</a>

  <a href="/how-it-works">How It Works</a>

  <a href="/gallery">Gallery</a>

  <a href="/contact">Contact</a>
</div>

        <button className="navBtn">Get a Quote</button>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">
            Bespoke Sports Memorabilia Framing
          </p>

          <h1>
            Frame the moment. Keep the memory.
          </h1>

          <p className="sub">
            Premium framing for shirts, signed memorabilia,
            match-worn items, medals, programmes and
            sporting keepsakes.
          </p>

          <div className="heroButtons">
            <button className="primary">
              Get a Quote
            </button>

            <button className="secondary">
              View Gallery
            </button>
          </div>

          <div className="trust">
            <span>UK based</span>
            <span>Hand finished</span>
            <span>From £75</span>
          </div>
        </div>

        <div className="heroCard">
          <div className="frameMockup">
            <div className="shirt">⚽</div>
            <p>Custom Shirt Display</p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">What We Frame</p>

        <h2>Built around your memory</h2>

        <div className="grid">
          {[
            "Football Shirts",
            "Signed Memorabilia",
            "Match-Worn Shirts",
            "Boxing Gloves",
            "Medals & Programmes",
            "Team Presentations",
          ].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>

              <p>
                Bespoke layouts, premium finishes
                and display-ready framing.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="how">
        <p className="eyebrow">How It Works</p>

        <h2>Simple from start to finish</h2>

        <div className="steps">
          <div>
            <strong>01</strong>
            <p>Send us your item</p>
          </div>

          <div>
            <strong>02</strong>
            <p>Choose your frame style</p>
          </div>

          <div>
            <strong>03</strong>
            <p>We design and frame it</p>
          </div>

          <div>
            <strong>04</strong>
            <p>Collect or receive delivery</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to frame your sporting memory?</h2>

        <p>
          Send us a photo of your item and
          we’ll come back with options.
        </p>

        <button className="primary">
          Start Your Quote
        </button>
      </section>
    </main>
  );
}
