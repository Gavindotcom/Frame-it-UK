import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Frame It UK",

  description:
    "Learn more about Frame It UK, a Scotland-based specialist in bespoke football shirt framing and sports memorabilia displays.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Frame It UK",
    description:
      "Bespoke football shirt and sports memorabilia framing, handmade in Scotland.",
    url: "/about",
  },
};

const whatsappMessage = encodeURIComponent(
  "Hi Frame It UK, I'd like to discuss having a shirt or piece of memorabilia framed."
);

const whatsappHref =
  `https://wa.me/447464768508?text=${whatsappMessage}`;

export default function AboutPage() {
  return (
    <main>

      {/* ========================================
          HEADER
      ======================================== */}

      <header className="siteHeader">

        <Link
          className="brand"
          href="/"
          aria-label="Frame It UK home"
        >
          FRAME IT UK
        </Link>

        <nav
          className="nav"
          aria-label="Main navigation"
        >
          <Link href="/">
            Home
          </Link>

          <Link href="/#designs">
            Designs
          </Link>

          <Link href="/#gallery">
            Gallery
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/shop">
            Shop
          </Link>

          <Link href="/#quote">
            Quote
          </Link>
        </nav>

      </header>


      {/* ========================================
          ABOUT HERO
      ======================================== */}

      <section
        className="section"
        style={{
          paddingTop: "110px",
          paddingBottom: "90px",
        }}
      >

        <div
          style={{
            maxWidth: "1000px",
          }}
        >

          <p className="eyebrow">
            About Frame It UK
          </p>

          <h1
            style={{
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 400,
              fontSize: "clamp(3rem, 7vw, 6.5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              margin: "0 0 35px",
            }}
          >
            More than a shirt.
            <br />
            More than a frame.
          </h1>

          <p
            style={{
              maxWidth: "720px",
              color: "#66645f",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Frame It UK was created from a love of football,
            sport and the memories attached to the items we
            choose to keep. Based in Scotland, we create
            bespoke football shirt and sports memorabilia
            displays built around the story behind each piece.
          </p>

        </div>

      </section>


      {/* ========================================
          THREE VALUES
      ======================================== */}

      <section
        className="section"
        style={{
          background: "#efede8",
        }}
      >

        <div className="centerHeading">

          <p className="eyebrow">
            What Matters To Us
          </p>

          <h2>
            Designed around
            <br />
            what matters to you.
          </h2>

        </div>


        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >

          <AboutCard
            number="01"
            title="Built Around the Story"
            copy="A match-worn shirt, a signed piece, a child's first football top or a memory from a special game can mean far more than the item itself. The finished frame should reflect that."
          />

          <AboutCard
            number="02"
            title="Individually Designed"
            copy="We design the display around your memorabilia rather than forcing every item into the same template. Photos, plaques, club colours and custom artwork can all become part of the finished piece."
          />

          <AboutCard
            number="03"
            title="Handmade in Scotland"
            copy="Every frame is individually assembled and finished by hand, with attention given to the layout, presentation and details that make the finished display feel special."
          />

        </div>

      </section>


      {/* ========================================
          BRAND STATEMENT
      ======================================== */}

      <section
        className="madeForYou"
        style={{
          gridTemplateColumns: "1fr",
        }}
      >

        <div
          className="madeCopy"
          style={{
            maxWidth: "850px",
          }}
        >

          <p className="eyebrow">
            Why Frame It UK
          </p>

          <h2>
            The item is important.
            <br />
            But so is the memory.
          </h2>

          <p>
            Some shirts represent a favourite player.
            Others mark a match, a season, a career or
            something personal.
          </p>

          <p>
            That&apos;s why we approach each frame as an
            individual piece rather than simply mounting
            a shirt inside a box.
          </p>

          <Link
            className="textLink"
            href="/#gallery"
          >
            See our work
            <span aria-hidden="true">
              →
            </span>
          </Link>

        </div>

      </section>


      {/* ========================================
          WHAT WE FRAME
      ======================================== */}

      <section className="section">

        <div className="centerHeading">

          <p className="eyebrow">
            What We Frame
          </p>

          <h2>
            From football shirts
            <br />
            to complete displays.
          </h2>

          <p>
            From simple, clean shirt framing to large
            completely bespoke pieces, the design is
            built around the memorabilia.
          </p>

        </div>


        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >

          <AboutCard
            number="01"
            title="Football Shirts"
            copy="Signed, match-worn, replica and personally significant football shirts."
          />

          <AboutCard
            number="02"
            title="Sports Memorabilia"
            copy="Boots, medals, tickets, photographs and other sporting keepsakes."
          />

          <AboutCard
            number="03"
            title="Photo Displays"
            copy="Shirts combined with player photographs and personalised plaques."
          />

          <AboutCard
            number="04"
            title="Bespoke Pieces"
            copy="Double frames, custom artwork, special presentations and completely unique displays."
          />

        </div>

      </section>


      {/* ========================================
          HOW WE WORK
      ======================================== */}

      <section
        className="section"
        style={{
          background: "#efede8",
        }}
      >

        <div className="sectionHeading sectionHeadingLine">

          <div>

            <p className="eyebrow">
              Our Approach
            </p>

            <h2>
              From idea
              <br />
              to finished frame.
            </h2>

          </div>

        </div>


        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >

          <ProcessStep
            number="01"
            title="Tell us the story"
            copy="Send us a photograph of the shirt or memorabilia and tell us what you have in mind."
          />

          <ProcessStep
            number="02"
            title="Choose the design"
            copy="We work through the layout, photographs, plaque, mount and any additional details."
          />

          <ProcessStep
            number="03"
            title="We build it"
            copy="Your display is individually prepared, assembled and finished."
          />

          <ProcessStep
            number="04"
            title="Ready to display"
            copy="The finished piece is ready to become part of your home, office or collection."
          />

        </div>

      </section>


      {/* ========================================
          CTA
      ======================================== */}

      <section
        className="quoteSection"
        id="quote"
      >

        <p className="eyebrow lightEyebrow">
          Have Something To Frame?
        </p>

        <h2>
          Tell us the story.
        </h2>

        <p>
          Send us a photo of your shirt or memorabilia
          and we&apos;ll help you decide how best to display it.
        </p>

        <div className="buttonRow quoteButtons">

          <a
            className="button whatsappButton"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
            <span aria-hidden="true">
              →
            </span>
          </a>

        </div>

      </section>


      {/* ========================================
          FOOTER
      ======================================== */}

      <footer className="footer">

        <div>

          <Link
            className="brand footerBrand"
            href="/"
          >
            FRAME IT UK
          </Link>

          <p>
            Bespoke framing. Bigger stories.
          </p>

        </div>


        <div className="footerLinks">

          <Link href="/">
            Home
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/shop">
            Shop
          </Link>

          <Link href="/#gallery">
            Gallery
          </Link>

          <a
            href="https://www.instagram.com/fram3_it"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href={whatsappHref}
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
   ABOUT CARD
======================================== */

function AboutCard({
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
        minHeight: "220px",
        padding: "1.7rem",
        background: "#ffffff",
        borderTop: "2px solid #11110f",
      }}
    >

      <span
        style={{
          color: "#8a857d",
          fontSize: "0.68rem",
          fontWeight: 600,
        }}
      >
        {number}
      </span>

      <h3
        style={{
          margin: "2rem 0 0.8rem",
          fontFamily:
            'Georgia, "Times New Roman", serif',
          fontSize: "1.35rem",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#66645f",
          fontSize: "0.82rem",
          lineHeight: 1.65,
        }}
      >
        {copy}
      </p>

    </article>
  );
}


/* ========================================
   PROCESS STEP
======================================== */

function ProcessStep({
  number,
  title,
  copy,
}: {
  number: string;
  title: string;
  copy: string;
}) {
  return (
    <div
      style={{
        borderTop: "2px solid #11110f",
        paddingTop: "1.4rem",
      }}
    >

      <span
        style={{
          display: "block",
          marginBottom: "2rem",
          color: "#8a857d",
          fontSize: "0.68rem",
          fontWeight: 700,
        }}
      >
        {number}
      </span>

      <h3
        style={{
          margin: "0 0 0.8rem",
          fontFamily:
            'Georgia, "Times New Roman", serif',
          fontWeight: 400,
          fontSize: "1.3rem",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#66645f",
          lineHeight: 1.65,
          fontSize: "0.82rem",
        }}
      >
        {copy}
      </p>

    </div>
  );
}
