import Image from "next/image";
import Link from "next/link";

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


/* ========================================
   STRUCTURED DATA
======================================== */

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://frame-it-uk.com/#business",

  name: "Frame It UK",

  url: "https://frame-it-uk.com",

  description:
    "Bespoke football shirt framing and sports memorabilia framing handmade in Scotland.",

  image:
    "https://frame-it-uk.com/images/work/assgaard-hero.jpeg.jpg",

  priceRange: "£85+",

  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Scotland",
    },
    {
      "@type": "Country",
      name: "United Kingdom",
    },
  ],

  sameAs: [
    "https://www.instagram.com/fram3_it",
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",

    name: "Football Shirt Framing Services",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Classic Football Shirt Framing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Football Shirt Photo Display",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Artwork Football Shirt Frame",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Double Football Shirt Frame",
        },
      },
    ],
  },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "How much does football shirt framing cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Frame It UK football shirt framing starts from £85. Bespoke layouts, artwork, photographs, double frames and specialist displays are quoted individually.",
      },
    },

    {
      "@type": "Question",
      name: "Can you frame signed and match-worn football shirts?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Frame It UK frames signed shirts, match-worn shirts, replica shirts and other sports memorabilia.",
      },
    },

    {
      "@type": "Question",
      name: "Do you offer delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "UK delivery is available on suitable frames. Perspex may be recommended for courier delivery, while glass-fronted frames may require collection or specialist delivery.",
      },
    },

    {
      "@type": "Question",
      name: "Can I choose my own frame design?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Frame It UK offers classic shirt frames, photo displays, custom artwork, presentation frames, double shirt frames and fully bespoke displays.",
      },
    },
  ],
};


/* ========================================
   RECENT WORK
======================================== */

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
    src: "/images/work/dinamo.webp",
    title: "Dinamo Zagreb",
    subtitle: "Custom Mount Design",
    position: "50% 39%",
  },
];


/* ========================================
   DESIGN OPTIONS
======================================== */

const designs: DesignItem[] = [
  {
    src: "/images/work/brazil.webp",
    title: "Classic Shirt Frame",
    copy:
      "A clean, timeless presentation that keeps the shirt at the centre.",
    position: "50% 45%",
  },

  {
    src: "/images/work/mcginn.webp",
    title: "Photo Display",
    copy:
      "Combine your shirt with photographs and a personalised plaque.",
    position: "50% 55%",
  },

  {
    src: "/images/work/aasgaard.webp",
    title: "Custom Artwork Frame",
    copy:
      "Bespoke artwork created around your shirt, player or memorable moment.",
    position: "50% 25%",
  },

  {
    src: "/images/work/dinamo.webp",
    title: "Special Presentation Frame",
    copy:
      "Custom mounts, club colours and premium presentation details.",
    position: "50% 41%",
  },

  {
    src: "/images/work/Double.jpeg.png",
    title: "Double Shirt Frame",
    copy:
      "Two shirts brought together in one large statement display.",
    position: "50% 50%",
  },

  {
    src: "/images/work/bespoke.jpeg.jpg",
    title: "Fully Bespoke",
    copy:
      "Unique displays created around your memorabilia, story and ideas.",
    position: "50% 50%",
  },
];


/* ========================================
   MORE WORK
======================================== */

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

      {/* ========================================
          SEO STRUCTURED DATA
      ======================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />


      {/* ========================================
          HEADER
      ======================================== */}

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

          <Link href="/shop">
            Shop
          </Link>

          <a href="#quote">
            Quote
          </a>
        </nav>

      </header>


      {/* ========================================
          HERO
      ======================================== */}

      <section
        className="hero"
        id="top"
      >

        <div className="heroCopy">

          <p className="eyebrow">
            Football Shirt Framing in Scotland
          </p>

          <h1>
            Your shirt.
            <br />
            Your memories.
            <br />
            Framed.
          </h1>

          <p className="heroText">
            Bespoke football shirt framing, signed shirt
            framing and sports memorabilia displays,
            handmade in Scotland and available across the UK.
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


        <div
          className="heroVisual"
          aria-label="Bespoke football shirt frame"
        >

          <Image
            src="/images/work/assgaard-hero.jpeg.jpg"
            alt="Bespoke framed football shirt by Frame It UK"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            className="heroImage"
          />

        </div>

      </section>


      {/* ========================================
          RECENT WORK
      ======================================== */}

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


      {/* ========================================
          DESIGNS
      ======================================== */}

      <section
        className="section designsSection"
        id="designs"
      >

        <div className="centerHeading">

          <p className="eyebrow">
            Find Your Style
          </p>

          <h2>
            Choose Your Design
          </h2>

          <p>
            From traditional shirt framing to completely
            bespoke presentation pieces, every display is
            designed around your memorabilia.
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


      {/* ========================================
          MADE FOR YOU
      ======================================== */}

      <section className="madeForYou">

        <div className="madeCopy">

          <p className="eyebrow">
            Made For You
          </p>

          <h2>
            Individually designed.
            <br />
            Handmade in Scotland.
          </h2>

          <p>
            Every frame is designed around your shirt and
            your story. From signed and match-worn shirts
            to photographs, plaques, custom mounts and
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
            alt="Bespoke football shirt framing by Frame It UK"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className="madeImage"
          />

        </div>

      </section>


      {/* ========================================
          SHOP CTA
      ======================================== */}

      <section
        className="section"
        style={{
          textAlign: "center",
          background: "#fbfaf7",
        }}
      >

        <div
          style={{
            maxWidth: "780px",
            margin: "0 auto",
          }}
        >

          <p className="eyebrow">
            Frame It UK Shop
          </p>

          <h2
            style={{
              marginBottom: "1.25rem",
            }}
          >
            Shop Framed Memorabilia
          </h2>

          <p
            style={{
              maxWidth: "620px",
              margin: "0 auto",
              color: "#66645f",
              fontFamily:
                'Georgia, "Times New Roman", serif',
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            Browse selected framed shirts and
            pre-arranged framing services, with secure
            online payment.
          </p>

          <div
            className="buttonRow"
            style={{
              justifyContent: "center",
            }}
          >

            <Link
              href="/shop"
              className="button buttonDark"
            >
              Visit The Shop
              <span aria-hidden="true">
                →
              </span>
            </Link>

          </div>

        </div>

      </section>


      {/* ========================================
          TRUST
      ======================================== */}

      <section
        className="section"
        style={{
          background: "#efede8",
        }}
      >

        <div className="centerHeading">

          <p className="eyebrow">
            Why Frame It UK
          </p>

          <h2>
            Your memorabilia.
            <br />
            In safe hands.
          </h2>

        </div>


        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "1rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >

          <TrustCard
            number="01"
            title="Handmade in Scotland"
            copy="Every display is individually assembled and finished by hand."
          />

          <TrustCard
            number="02"
            title="Bespoke Design"
            copy="Your shirt, photographs and memorabilia shape the final design."
          />

          <TrustCard
            number="03"
            title="Secure Payments"
            copy="Online purchases are processed securely through Stripe."
          />

          <TrustCard
            number="04"
            title="UK Delivery"
            copy="Delivery is available on suitable frames throughout the UK."
          />

        </div>

      </section>


      {/* ========================================
          MORE WORK
      ======================================== */}

      <section
        className="section"
        id="more-work"
      >

        <div className="sectionHeading sectionHeadingLine">

          <div>

            <p className="eyebrow">
              More Examples
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


      {/* ========================================
          FAQ
      ======================================== */}

      <section
        className="section"
        style={{
          background: "#fbfaf7",
        }}
      >

        <div
          style={{
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >

          <div
            className="centerHeading"
            style={{
              marginBottom: "3rem",
            }}
          >

            <p className="eyebrow">
              Frequently Asked Questions
            </p>

            <h2>
              A Few Things
              <br />
              You Might Want to Know
            </h2>

          </div>


          <div>

            <FAQ
              question="How much does shirt framing cost?"
              answer="Football shirt framing starts from £85. More complex designs such as photo displays, custom artwork, double frames and fully bespoke pieces are quoted individually."
            />

            <FAQ
              question="Can you frame signed or match-worn shirts?"
              answer="Yes. We regularly frame signed shirts, match-worn shirts, replica shirts and other sports memorabilia."
            />

            <FAQ
              question="Can I include photographs or a plaque?"
              answer="Yes. Photographs, personalised plaques, club badges, tickets and other memorabilia can all be incorporated into your display."
            />

            <FAQ
              question="Do you offer delivery?"
              answer="UK delivery is available on suitable frames. Perspex may be recommended for courier delivery. Glass-fronted frames may require collection or specialist delivery."
            />

            <FAQ
              question="How do I get started?"
              answer="Send us a WhatsApp message with a photograph of your shirt or memorabilia and an idea of the design you would like. We can then discuss the layout and provide a quote."
            />

          </div>

        </div>

      </section>


      {/* ========================================
          QUOTE CTA
      ======================================== */}

      <section
        className="quoteSection"
        id="quote"
      >

        <p className="eyebrow lightEyebrow">
          Ready When You Are
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


      {/* ========================================
          FOOTER
      ======================================== */}

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

          <Link href="/shop">
            Shop
          </Link>

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


/* ========================================
   TRUST CARD
======================================== */

function TrustCard({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy: string;
}) {
  return (
    <article
      style={{
        padding: "1.5rem",
        background: "#ffffff",
        borderTop: "2px solid #11110f",
      }}
    >

      <span
        style={{
          color: "#8a857d",
          fontSize: "0.68rem",
        }}
      >
        {number}
      </span>

      <h3
        style={{
          margin: "1.4rem 0 0.65rem",
          fontFamily:
            'Georgia, "Times New Roman", serif',
          fontWeight: 400,
          fontSize: "1.25rem",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#66645f",
          fontSize: "0.8rem",
          lineHeight: 1.55,
        }}
      >
        {copy}
      </p>

    </article>
  );
}


/* ========================================
   FAQ ITEM
======================================== */

function FAQ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details
      style={{
        borderTop: "1px solid #d8d5ce",
        padding: "1.3rem 0",
      }}
    >

      <summary
        style={{
          cursor: "pointer",
          listStyle: "none",
          fontFamily:
            'Georgia, "Times New Roman", serif',
          fontSize: "1.15rem",
        }}
      >
        {question}
      </summary>

      <p
        style={{
          maxWidth: "760px",
          margin: "1rem 0 0",
          color: "#66645f",
          fontSize: "0.85rem",
          lineHeight: 1.65,
        }}
      >
        {answer}
      </p>

    </details>
  );
}
