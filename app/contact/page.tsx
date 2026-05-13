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
        <p className="eyebrow">Build Your Frame</p>

        <h1>Create your bespoke display.</h1>

        <p className="sub">
          Tell us about your item, upload a photo and choose your preferred
          framing style.
        </p>
      </section>

      <section className="section">
        <div className="contactWrap">
          <form
            className="contactForm"
            action="https://formspree.io/f/xojrzvao"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="formGroup">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
            </div>

            <div className="formGroup">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>

            <div className="formGroup">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="Your phone number"
              />
            </div>

            <div className="formGroup">
              <label>Item Type</label>

              <select name="itemType" required>
                <option value="">Select item type</option>
                <option>Football Shirt</option>
                <option>Signed Shirt</option>
                <option>Boxing Gloves</option>
                <option>Medals & Programmes</option>
                <option>Presentation Display</option>
                <option>Other Memorabilia</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Frame Colour</label>

              <select name="frameColour">
                <option value="">Select frame colour</option>
                <option>Black</option>
                <option>White</option>
                <option>Oak</option>
                <option>Walnut</option>
                <option>Gold Trim</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Mount Style</label>

              <select name="mountStyle">
                <option value="">Select mount style</option>
                <option>Single Mount</option>
                <option>Double Mount</option>
                <option>Club Colours</option>
                <option>Premium Contrast</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Additions</label>

              <select name="extras">
                <option value="">Select extras</option>
                <option>Name Plaque</option>
                <option>Photos</option>
                <option>Certificate Display</option>
                <option>Multiple Items</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Collection or Delivery</label>

              <select name="delivery">
                <option value="">Select option</option>
                <option>Collection</option>
                <option>Delivery</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div className="formGroup">
              <label>Upload a photo</label>

              <input
                type="file"
                name="photo"
                accept="image/*"
              />
            </div>

            <div className="formGroup">
              <label>Additional Details</label>

              <textarea
                name="message"
                rows={6}
                placeholder="Tell us anything else about your frame idea."
              ></textarea>
            </div>

            <input
              type="hidden"
              name="_subject"
              value="New Frame Builder Request"
            />

            <button className="primary" type="submit">
              Build My Quote
            </button>
          </form>

          <div className="contactInfo">
            <div className="card">
              <h3>Bespoke Layouts</h3>

              <p>
                Every design is tailored around your item, colours and preferred
                display style.
              </p>
            </div>

            <div className="card">
              <h3>Premium Finish</h3>

              <p>
                Hand-finished displays designed to protect and elevate your
                memorabilia.
              </p>
            </div>

            <div className="card">
              <h3>Collection & Delivery</h3>

              <p>
                Scotland-based collection and secure UK-wide delivery options
                available.
              </p>
            </div>

            <div className="card">
              <h3>Pricing</h3>

              <p>
                Bespoke framing starts from £75 depending on layout and extras.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Your memory deserves more than storage.</h2>

        <p>
          Build a premium display piece designed to last for years.
        </p>
      </section>
    </main>
  );
}
