export default function Contact() {
  return (
    <main className="site">
      <nav className="nav">
        <div className="logo">FRAME IT UK</div>

        <div className="navLinks">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/gallery">Gallery</a>
        </div>

        <a href="/contact" className="navBtn">
          Get a Quote
        </a>
      </nav>

      <section className="section">
        <p className="eyebrow">Get a Quote</p>

        <h1>Tell us about your item.</h1>

        <p className="sub">
          Send us a few details and we’ll come back with framing options,
          pricing and next steps.
        </p>
      </section>

      <section className="section">
        <div className="contactWrap">
          <form
            className="contactForm"
            action="https://formspree.io/f/xojrzvao"
            method="POST"
          >
            <div className="formGroup">
              <label>Name</label>
              <input type="text" name="name" placeholder="Your name" required />
            </div>

            <div className="formGroup">
              <label>Email</label>
              <input type="email" name="email" placeholder="Your email" required />
            </div>

            <div className="formGroup">
              <label>Phone</label>
              <input type="text" name="phone" placeholder="Your phone number" />
            </div>

            <div className="formGroup">
              <label>Item Type</label>
              <select name="itemType" required>
                <option value="">Select an option</option>
                <option>Football Shirt</option>
                <option>Signed Memorabilia</option>
                <option>Boxing Gloves</option>
                <option>Medals & Programmes</option>
                <option>Presentation Display</option>
                <option>Other</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Collection or Delivery</label>
              <select name="collectionOrDelivery">
                <option value="">Select an option</option>
                <option>Collection</option>
                <option>Delivery</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Message</label>
              <textarea
                name="message"
                rows={6}
                placeholder="Tell us about your item, framing ideas or preferred style."
                required
              ></textarea>
            </div>

            <input type="hidden" name="_subject" value="New Frame It UK Quote Request" />

            <button className="primary" type="submit">
              Request Quote
            </button>
          </form>

          <div className="contactInfo">
            <div className="card">
              <h3>Bespoke Service</h3>
              <p>Every frame is designed individually around your item and layout.</p>
            </div>

            <div className="card">
              <h3>Collection & Delivery</h3>
              <p>Scotland-based collection and secure UK-wide return delivery options.</p>
            </div>

            <div className="card">
              <h3>Pricing</h3>
              <p>Framing starts from £75 depending on size, layout and extras.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Preserve the memory properly.</h2>
        <p>Frame It UK creates premium display pieces designed to last.</p>
      </section>
    </main>
  );
}
