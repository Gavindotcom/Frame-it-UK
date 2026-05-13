export default function Gallery() {
  const galleryImages = [
    {
      image: "/images/gallery1.PNG",
      title: "Signed Rangers Shirt",
    },
    {
      image: "/images/gallery2.PNG",
      title: "Signed Celtic Shirt",
    },
    {
      image: "/images/gallery3.PNG",
      title: "Bonnyrigg Rose Display",
    },
    {
      image: "/images/gallery4.PNG",
      title: "Signed Hearts Shirt",
    },
    {
      image: "/images/gallery5.PNG",
      title: "Signed Hibernian Shirt",
    },
    {
      image: "/images/gallery6.PNG",
      title: "Captain Display Frame",
    },
    {
      image: "/images/gallery7.PNG",
      title: "Lawrence Shankland Signed Shirt",
    },
    {
      image: "/images/gallery8.PNG",
      title: "Manchester City Treble Winners Shirt",
    },
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

        <a href="/contact" className="navBtn">
          Get a Quote
        </a>
      </nav>

      <section className="section">
        <p className="eyebrow">Gallery</p>

        <h1>Real frames. Real memories.</h1>

        <p className="sub">
          A selection of completed sports memorabilia framing projects,
          including signed shirts, club displays and bespoke presentation pieces.
        </p>
      </section>

      <section className="galleryGrid">
        {galleryImages.map((item) => (
          <div className="galleryItem" key={item.title}>
            <img
              src={item.image}
              alt={item.title}
              className="galleryImage"
            />

            <h3>{item.title}</h3>

            <p>
              Bespoke layout, premium finish and display-ready framing.
            </p>
          </div>
        ))}
      </section>

      <section className="cta">
        <h2>Have something ready to frame?</h2>

        <p>
          Send us a photo and we’ll suggest the best display style.
        </p>

        <a href="/contact" className="primary">
          Start Your Quote
        </a>
      </section>
    </main>
  );
}
