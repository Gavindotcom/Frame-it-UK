export const metadata = {
  title: "Sports Memorabilia Framing Edinburgh | Frame It UK",
  description:
    "Bespoke sports memorabilia framing in Edinburgh and Scotland. Premium framing for football shirts, signed memorabilia, medals, gloves and presentation displays.",
};

export default function SportsMemorabiliaFramingEdinburgh() {
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
        <p className="eyebrow">Sports Memorabilia Framing Edinburgh</p>

        <h1>Premium framing for sporting memories.</h1>

        <p className="sub">
          Frame It UK creates bespoke sports memorabilia displays for customers
          across Edinburgh, Scotland and the UK.
        </p>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>Football Shirts</h3>
            <p>Signed shirts, match-worn kits and club presentation pieces.</p>
          </div>

          <div className="card">
            <h3>Signed Memorabilia</h3>
            <p>Photos, gloves, boots, programmes, medals and collector items.</p>
          </div>

          <div className="card">
            <h3>Bespoke Displays</h3>
            <p>Custom layouts, mount colours, plaques, photos and extras.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Start your bespoke frame.</h2>
        <p>Upload a photo and we’ll recommend the best display option.</p>

        <a href="/contact" className="primary">
          Build Your Quote
        </a>
      </section>
    </main>
  );
}
