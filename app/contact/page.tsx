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
          Send us a few details and upload a photo of your item. We’ll come back
          with framing options, pricing and next steps.
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
                <option value="">Select an option</option>
                <option>Football Shirt</option>
               
