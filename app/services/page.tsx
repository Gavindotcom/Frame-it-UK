export default function Services() {
  return (
    <main className="site">
      <nav className="nav">
        <div className="logo">FRAME IT UK</div>
        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
        <a href="/contact" className="navBtn">Get a Quote</a>
      </nav>

      <section className="section">
        <p className="eyebrow">Our Services</p>
        <h1>Bespoke framing for every sporting memory.</h1>
        <p className="sub">
          From match-worn shirts to signed memorabilia, Frame It UK creates
          premium display pieces designed around your item, your story and your space.
        </p>
      </section>

      <section className="section">
        <div className="grid">
          {[
            {
              title: "Football Shirt Framing",
              text: "Perfect for signed shirts, match-worn shirts, kids’ first kits, team shirts and special memories."
            },
            {
              title: "Signed Memorabilia",
              text: "Protect and display signed shirts, photos, programmes, boots, gloves and collector pieces."
            },
            {
              title: "Match-Worn Displays",
              text: "Premium layouts for authentic match-worn pieces, with space for nameplates, photos or certificates."
            },
            {
              title: "Boxing Gloves & 3D Items",
              text: "Deep-frame options for gloves, boots, balls and other sporting items that need extra depth."
            },
            {
              title: "Medals, Programmes & Photos",
              text: "Clean, professional displays for medals, tickets, race numbers, programmes and photography."
            },
            {
              title: "Club & Team Presentations",
              text: "Ideal for awards nights, retirement gifts, sponsor gifts, end-of-season presentations and club displays."
            }
          ].map((service) => (
            <div className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="how">
        <p className="eyebrow">Bespoke Options</p>
        <h2>Designed around your item</h2>

        <div className="steps">
          <div>
            <strong>01</strong>
            <p>Frame colour and finish</p>
          </div>
          <div>
            <strong>02</strong>
            <p>Mount colour and layout</p>
          </div>
          <div>
            <strong>03</strong>
            <p>Nameplates and captions</p>
          </div>
          <div>
            <strong>04</strong>
            <p>Photos, certificates or extras</p>
          </div>
        </div>
      </section>

     <section className="cta">
  <h2>Framing starts from £70</h2>

  <p>
    Send us a photo of your item and we’ll recommend the best display option.
  </p>

  <div className="heroButtons">

    <a href="/contact" className="primary">
      Get a Quote
    </a>

    <a
      href="/football-shirt-framing-scotland"
      className="secondary"
    >
      Football Shirt Framing Scotland
    </a>

    <a
      href="/signed-football-shirt-framing"
      className="secondary"
    >
      Signed Football Shirt Framing
    </a>

    <a
      href="/sports-memorabilia-framing-edinburgh"
      className="secondary"
    >
      Memorabilia Framing Edinburgh
    </a>

  </div>
</section>
    </main>
  );
}
