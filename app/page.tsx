import Image from "next/image";

type WorkItem = {
  src: string;
  title: string;
  subtitle?: string;
  position?: string;
};

type DesignItem = {
  src: string;
  title: string;
  copy: string;
  position?: string;
};

const whatsappBase = "https://wa.me/447464768508";

const quoteMessage = encodeURIComponent(
  "Hi Frame It UK, I'd like a quote for a bespoke frame."
);

const quoteHref = `${whatsappBase}?text=${quoteMessage}`;


/* -----------------------------
   RECENT WORK
------------------------------ */

const recentWork: WorkItem[] = [
  {
    src: "/images/work/brazil.webp",
    title: "Brazil National Team",
    subtitle: "Signed Shirt",
    position: "50% 46%",
  },
  {
    src: "/images/work/kerr.webp",
    title: "Kerr",
    subtitle: "Presentation Frame",
    position: "50% 50%",
  },
  {
    src: "/images/work/mcginn.webp",
    title: "McGinn",
    subtitle: "Signed Shirt with Photos",
    position: "50% 54%",
  },
  {
    src: "/images/work/celtic.webp",
    title: "Celtic FC",
    subtitle: "Multi-Signed Shirt",
    position: "50% 50%",
  },
  {
    src: "/images/work/mull.jpg.jpg",
    title: "Mulligan",
    subtitle: "Custom Mount Design",
    position: "50% 39%",
  },
];


/* -----------------------------
   DESIGN OPTIONS
------------------------------ */

const designs: DesignItem[] = [
  {
    src: "/images/work/brazil.webp",
    title: "Classic Shirt Frame",
    copy: "A clean, timeless layout that keeps your shirt at the centre.",
    position: "50% 45%",
  },
  {
    src: "/images/work/mcginn.webp",
    title: "Photo Display",
    copy: "Add personal photos and a plaque to tell the full story.",
    position: "50% 55%",
  },
  {
    src: "/images/work/assgaard-hero.jpeg.jpg",
    title: "Custom Artwork Frame",
    copy: "Bespoke artwork designed around your shirt and the moment.",
    position: "50% 25%",
  },
  {
    src: "/images/work/mull.jpg.jpg",
    title: "Special Presentation Frame",
    copy: "Custom mounts, club colours and presentation details.",
    position: "50% 41%",
  },
  {
    src: "/images/work/Double.jpeg.png",
    title: "Double Shirt Frame",
    copy: "Two shirts brought together in one statement display.",
    position: "50% 50%",
  },
  {
    src: "/images/work/bespoke.jpeg.jpg",
    title: "Fully Bespoke",
    copy: "Unique displays built around your item, your story and your ideas.",
    position: "50% 50%",
  },
];


/* -----------------------------
   MORE WORK
------------------------------ */

const moreWork: WorkItem[] = [
  {
    src: "/images/work/stevenson.webp",
    title: "Stevenson",
    position: "50% 50%",
  },
  {
    src: "/images/work/bespoke.jpeg.jpg",
    title: "Bespoke Design",
    position: "50% 50%",
  },
  {
    src: "/images/work/dinamo.webp",
    title: "Dinamo Zagreb",
    position: "50% 41%",
  },
  {
    src: "/images/work/brazil.webp",
    title: "Brazil",
    position: "50% 46%",
  },
  {
    src: "/images/work/kerr-alt.webp",
    title: "Kerr",
    position: "50% 50%",
  },
  {
    src: "/images/work/mcginn-alt.webp",
    title: "McGinn",
    position: "50% 47%",
  },
];


export default function HomePage() {
  return (
    <main>

      {/* =============================
          HEADER
      ============================== */}

      <header className="siteHeader">

        <a
          className="brand"
          href="#top"
          aria-label="Frame It UK home"
        >
          FRAME IT UK
        </a>

        <nav
          className="nav"
          aria-label="Main navigation"
        >
          <a href="#designs">
            Designs
          </a>

          <a href="#gallery">
            Gallery
          </a>

          <a href="#quote">
            Quote
          </a>
        </nav>

      </header>


      {/* =============================
          HERO
      ============================== */}

      <section
        className="hero"
        id="top"
      >

        <div className="heroCopy">

          <p className="eyebrow">
            Bespoke sports memorabilia framing
          </p>

          <h1>
            Your shirt.
            <br />
            Your memories.
            <br />
            Framed.
          </h1>

          <p className="heroText">
            Bespoke football shirt and memorabilia framing,
            handmade in Scotland.
          </p>


          <div className="buttonRow">

            <a
              className="button buttonDark"
              href="#designs"
            >
              View Designs
              <span aria-hidden="true">
                →
              </span>
            </a>


            <a
              className="button buttonLight"
              href={quoteHref}
              target="_blank"
              rel="noreferrer"
            >
              Get a Quote
            </a>

          </div>


          <div
            className="benefits"
            aria-label="Frame It UK benefits"
          >

            <div>
              <span
                className="benefitIcon"
                aria-hidden="true"
              >
                ◇
              </span>

              <span>
                Premium quality
                <br />
                materials
              </span>
            </div>


            <div>
              <span
                className="benefitIcon"
                aria-hidden="true"
              >
                ✦
              </span>

              <span>
                Handmade
                <br />
                in Scotland
              </span>
            </div>


            <div>
              <span
                className="benefitIcon"
                aria-hidden="true"
              >
                ▣
              </span>

              <span>
                UK delivery
                <br />
                available
              </span>
            </div>

          </div>

        </div>


        {/* NEW HERO IMAGE */}

        <div
          className="heroVisual"
          aria-label="Custom artwork frame example"
        >

          <Image
            src="/images/work/assgaard-hero.jpeg.jpg"
            alt="Framed Aasgaard match worn signed Rangers football shirt"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className="heroImage"
          />

        </div>

      </section>



      {/* =============================
          RECENT WORK
      ============================== */}

      <section
        className="section"
        id="gallery"
      >

        <div className="sectionHeading sectionHeadingLine">

          <div>

            <p className="eyebrow">
              Portfolio
            </p>

            <h2>
              Recent Work
            </h2>

          </div>


          <a href="#more-work">
            View More
            <span aria-hidden="true">
              →
            </span>
          </a>

        </div>


        <div className="recentGrid">

          {recentWork.map((item) => (

            <article
              className="workCard"
              key={item.title}
            >

              <div className="workImageWrap">

                <Image
                  src={item.src}
                  alt={`${item.title} framed by Frame It UK`}
                  fill
                  sizes="(max-width: 700px) 70vw, (max-width: 1100px) 33vw, 20vw"
                  className="workImage"
                  style={{
                    objectPosition: item.position,
                  }}
                />

              </div>


              <h3>
                {item.title}
              </h3>


              {item.subtitle && (
                <p>
                  {item.subtitle}
                </p>
              )}

            </article>

          ))}

        </div>

      </section>



      {/* =============================
          CHOOSE YOUR DESIGN
      ============================== */}

      <section
        className="section designsSection"
        id="designs"
      >

        <div className="centerHeading">

          <p className="eyebrow">
            Find your style
          </p>

          <h2>
            Choose Your Design
          </h2>

          <p>
            A range of framing styles to suit your shirt,
            your story and your space.
          </p>

        </div>


        <div className="designGrid">

          {designs.map((design) => (

            <article
              className="designCard"
              key={design.title}
            >

              <div className="designImageWrap">

                <Image
                  src={design.src}
                  alt={`${design.title} by Frame It UK`}
                  fill
                  sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 17vw"
                  className="workImage"
                  style={{
                    objectPosition: design.position,
                  }}
                />

              </div>


              <div className="designCopy">

                <h3>
                  {design.title}
                </h3>

                <p>
                  {design.copy}
                </p>

              </div>

            </article>

          ))}

        </div>

      </section>



      {/* =============================
          MADE FOR YOU
      ============================== */}

      <section className="madeForYou">

        <div className="madeCopy">

          <p className="eyebrow">
            Made for you
          </p>


          <h2>
            Individually designed.
            <br />
            Handmade in Scotland.
          </h2>


          <p>
            Every frame is designed around your shirt and
            your story. From signed shirts and match-worn
            kits to photographs, plaques, custom mounts and
            bespoke artwork, we create a display that feels
            personal to you.
          </p>


          <a
            className="textLink"
            href="#designs"
          >
            Explore the designs
            <span aria-hidden="true">
              →
            </span>
          </a>

        </div>


        <div className="madeVisual">

          <Image
            src="/images/work/mcginn-alt.webp"
            alt="Close detail of bespoke football shirt framing"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className="madeImage"
          />

        </div>

      </section>



      {/* =============================
          MORE OF OUR WORK
      ============================== */}

      <section
        className="section"
        id="more-work"
      >

        <div className="sectionHeading sectionHeadingLine">

          <div>

            <p className="eyebrow">
              More examples
            </p>

            <h2>
              More of Our Work
            </h2>

          </div>


          <a
            href={quoteHref}
            target="_blank"
            rel="noreferrer"
          >
            Start Your Frame
            <span aria-hidden="true">
              →
            </span>
          </a>

        </div>


        <div className="moreGrid">

          {moreWork.map((item) => (

            <article
              className="miniCard"
              key={item.title}
            >

              <div className="miniImageWrap">

                <Image
                  src={item.src}
                  alt={`${item.title} framing example`}
                  fill
                  sizes="(max-width: 700px) 50vw, (max-width: 1100px) 33vw, 17vw"
                  className="workImage"
                  style={{
                    objectPosition: item.position,
                  }}
                />

              </div>


              <h3>
                {item.title}
              </h3>

            </article>

          ))}

        </div>

      </section>



      {/* =============================
          QUOTE
      ============================== */}

      <section
        className="quoteSection"
        id="quote"
      >

        <p className="eyebrow lightEyebrow">
          Ready when you are
        </p>


        <h2>
          Shirt framing from £85
        </h2>


        <p>
          Bespoke designs quoted individually.
        </p>


        <div className="buttonRow quoteButtons">

          <a
            className="button whatsappButton"
            href={quoteHref}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>


          <a
            className="button quoteOutline"
            href={quoteHref}
            target="_blank"
            rel="noreferrer"
          >
            Request a Quote
          </a>

        </div>

      </section>



      {/* =============================
          FOOTER
      ============================== */}

      <footer className="footer">

        <div>

          <a
            className="brand footerBrand"
            href="#top"
          >
            FRAME IT UK
          </a>

          <p>
            Bespoke framing. Bigger stories.
          </p>

        </div>


        <div className="footerLinks">

          <a
            href="https://www.instagram.com/fram3_it"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>


          <a
            href="https://www.facebook.com/share/1EDtE1bXL7/"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>


          <a
            href={quoteHref}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

        </div>


        <p className="copyright">
          © 2026 Frame It UK
        </p>

      </footer>

    </main>
  );
}
