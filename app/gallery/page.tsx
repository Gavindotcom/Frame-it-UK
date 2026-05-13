export default function Gallery() {
  const items = [
    "Football Shirt Display",
    "Signed Shirt Frame",
    "Match-Worn Memorabilia",
    "Boxing Glove Display",
    "Medal Presentation",
    "Programme & Ticket Frame",
  ];

  return (
    <main className="site">
      <nav className="nav">
        <div className="logo">FRAME IT UK</div>

        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/contact">Contact</a>
        </div>

        <a href="/contact" className="navBtn">Get a Quote</a>
      </nav>

      <section className="section">
        <p className="eyebrow">Gallery</p>
        <h1>Display inspiration for your sporting memories.</h1>
        <p className="sub">
          A preview of the type of bespoke framing options available. Real customer examples will be added soon.
        </p>
      </section>

      <section className="section galleryGrid">
        {items.map((item) => (
          <div className="galleryItem" key={item}>
            <div className="galleryFrame">
              <div className="galleryIcon">▣</div>
            </div>
            <h3>{item}</h3>
            <p>Bespoke layout, premium finish and display-ready framing.</p>
          </div>
        ))}
      </section>

      <section className="cta">
        <h2>Have something ready to frame?</h2>
        <p>Send us a photo and we’ll suggest the best display style.</p>
        <a href="/contact" className="primary">Start Your Quote</a>
      </section>
    </main>
  );
}
