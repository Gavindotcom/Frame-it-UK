export default function Home() {
  return (
    <main className="site">
      <nav className="nav">
        <div className="logo">FRAME IT UK</div>

        <div className="navLinks">
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <a href="/contact" className="navBtn">
          Get a Quote
        </a>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">
            Bespoke Sports Memorabilia Framing
          </p>

          <h1>
            Frame the moment.
            <br />
            Keep the memory.
          </h1>

          <p className="sub">
            Premium bespoke framing for signed shirts,
            sporting memorabilia and presentation displays.
          </p>

          <div className="heroButtons">
            <a href="/contact" className="primary">
              Build Your Quote
            </a>

            <a href="/gallery" className="secondary">
              View Gallery
            </a>
          </div>

          <div className="trust">
            <span>Hand Finished</span>
            <span>Scotland Based</span>
            <span>UK Delivery</span>
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
        <p className="eyebrow">Recent Work</p>

        <h2>
          Built around the story behind the shirt.
        </h2>

        <div className="homeGallery">
          {[
            "/images/gallery-1.PNG",
            "/images/gallery-2.PNG",
            "/images/gallery-3.PNG",
            "/images/gallery-15 .JPG",
          ].map((image) => (
            <div className="galleryItem" key={image}>
              <img
                src={image}
                alt="Frame It UK framed shirt"
                className="galleryRealImage"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Our Services</p>

        <h2>
          Bespoke framing for every sporting memory.
        </h2>

        <div className="grid">
          <div className="card">
            <h3>Football Shirt Framing</h3>

            <p>
              Signed shirts, match-worn kits,
              presentation pieces and collector displays.
            </p>
          </div>

          <div className="card">
            <h3>Signed Memorabilia</h3>

            <p>
              Gloves, boots, photos,
              medals and premium collector pieces.
            </p>
          </div>

          <div className="card">
            <h3>Presentation Displays</h3>

            <p>
              Club awards, retirement gifts,
              team presentations and bespoke layouts.
            </p>
          </div>
        </div>

        <div className="heroButtons">
          <a href="/services" className="primary">
            Explore Services
          </a>
        </div>
      </section>

      <section className="cta">
        <h2>
          Ready to frame your sporting memory?
        </h2>

        <p>
          Upload your item and we’ll build a bespoke framing quote.
        </p>

        <a href="/contact" className="primary">
          Start Your Quote
        </a>
      </section>
    </main>
  );
}
