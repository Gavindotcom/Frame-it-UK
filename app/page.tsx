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

        <a href="/contact" className="navBtn">
          Get a Quote
        </a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">Bespoke Sports Memorabilia Framing</p>

          <h1>Frame the moment. Keep the memory.</h1>

          <p className="sub">
            Premium bespoke framing for shirts, signed memorabilia and sporting
            keepsakes. Designed around your item, your story and your space.
          </p>

          <div className="heroButtons">
            <a href="/contact" className="primary">
              Get a Quote
            </a>

            <a href="/services" className="secondary">
              View Services
            </a>
            <a href="/football-shirt-framing-scotland" className="secondary">
  Football Shirt Framing Scotland
</a>
          </div>

          <div className="trust">
            <span>UK based</span>
            <span>Hand finished</span>
            <span>From £75</span>
          </div>
        </div>

        <div className="heroCard imageHeroCard">
          <img
            src="/images/hero.PNG"
            alt="Frame It UK"
            className="heroImage"
          />
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">What We Do</p>

        <h2>Turn sporting memories into display pieces.</h2>

        <p className="sub">
          Whether it’s a signed shirt, a match-worn item, a medal, gloves or a
          club gift, Frame It UK creates clean, premium displays that protect
          the memory and make it stand out.
        </p>

        <div className="grid">
          {[
            "Shirt Framing",
            "Signed Memorabilia",
            "Presentation Displays",
          ].map((item) => (
            <div className="card" key={item}>
              <h3>{item}</h3>

              <p>
                Bespoke layouts, premium finishes and display-ready framing.
              </p>
            </div>
          ))}
        </div>

        <div className="heroButtons">
          <a href="/services" className="primary">
            View All Services
          </a>
        </div>
      </section>

      <div className="divider" />

      <section className="how">
        <p className="eyebrow">Why Choose Frame It UK</p>

        <h2>Built with care, finished with pride.</h2>

        <div className="grid">
          <div className="card">
            <h3>Hand finished</h3>
            <p>
              Every display is prepared with care, from the shirt layout to the
              final finish.
            </p>
          </div>

          <div className="card">
            <h3>Bespoke layouts</h3>
            <p>
              Your frame is designed around the item, the story and how you want
              it displayed.
            </p>
          </div>

          <div className="card">
            <h3>Scotland based</h3>
            <p>
              A personal service for collectors, clubs, parents, players and
              sports fans.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Customer Feedback</p>

        <h2>Made for moments that matter.</h2>

        <div className="grid">
          <div className="card">
            <h3>“Absolutely delighted.”</h3>
            <p>
              The finished frame looked better than I imagined. A brilliant way
              to display a special shirt.
            </p>
          </div>

          <div className="card">
            <h3>“Quality finish.”</h3>
            <p>
              Great attention to detail and the whole process was easy from
              start to finish.
            </p>
          </div>

          <div className="card">
            <h3>“Perfect gift.”</h3>
            <p>
              We had a shirt framed as a presentation piece and it looked
              fantastic.
            </p>
          </div>
        </div>
      </section>

      <section className="how">
        <p className="eyebrow">How It Works</p>

        <h2>Simple, personal and bespoke.</h2>

        <div className="steps">
          <div>
            <strong>01</strong>
            <p>Tell us what you want framed</p>
          </div>

          <div>
            <strong>02</strong>
            <p>We agree the style and layout</p>
          </div>

          <div>
            <strong>03</strong>
            <p>Your item is framed and finished</p>
          </div>
        </div>

        <div className="heroButtons">
          <a href="/how-it-works" className="secondary">
            See How It Works
          </a>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to frame your sporting memory?</h2>

        <p>
          Send us a photo of your item and we’ll come back with options.
        </p>

        <a href="/contact" className="primary">
          Start Your Quote <a href="/football-shirt-framing-scotland" className="secondary">
  Football Shirt Framing Scotland
</a>
        </a>
      </section>
    </main>
  );
}
