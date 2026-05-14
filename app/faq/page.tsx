export default function FAQ() {
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
        <p className="eyebrow">Frequently Asked Questions</p>

        <h1>
          Everything you need to know before framing your item.
        </h1>

        <p className="sub">
          Common questions about our bespoke sports memorabilia framing service.
        </p>
      </section>

      <section className="section">

        <div className="grid">

          <div className="card">
            <h3>How much does framing cost?</h3>

            <p>
              Framing starts from £75 depending on the size, layout and extras included.
            </p>
          </div>

          <div className="card">
            <h3>How long does framing take?</h3>

            <p>
              Most orders are completed within 7–10 working days.
            </p>
          </div>

          <div className="card">
            <h3>Can I include photos or plaques?</h3>

            <p>
              Yes. We offer custom layouts with photos, captions, plaques and certificates.
            </p>
          </div>

          <div className="card">
            <h3>Do you frame signed shirts?</h3>

            <p>
              Absolutely. Signed football shirts are one of our most popular framing requests.
            </p>
          </div>

          <div className="card">
            <h3>Do you offer UK delivery?</h3>

            <p>
              Yes. Collection and UK delivery options are available.
            </p>
          </div>

          <div className="card">
            <h3>Can you frame other memorabilia?</h3>

            <p>
              We can frame medals, gloves, boots, programmes, photos and other sporting items.
            </p>
          </div>

        </div>

      </section>

      <section className="cta">
        <h2>Still have a question?</h2>

        <p>
          Send us a message and we’ll help you choose the best framing option.
        </p>

        <a href="/contact" className="primary">
          Contact Us
        </a>
      </section>

    </main>
  );
}
