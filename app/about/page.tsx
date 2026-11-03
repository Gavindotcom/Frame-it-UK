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
    <main className="site">

      {/* ========================================
          NAV
      ======================================== */}

      <nav className="nav">

        <Link href="/" className="logo">
          FRAME IT UK
        </Link>

        <div className="navLinks">

          <Link href="/">
            Home
          </Link>

          <Link href="/#designs">
            Designs
          </Link>

          <Link href="/#gallery">
            Gallery
          </Link>

          <Link href="/shop">
            Shop
          </Link>

        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="navBtn"
        >
          Chat on WhatsApp
        </a>

      </nav>


      {/* ========================================
          HERO
      ======================================== */}

      <section className="section">

        <p className="eyebrow">
          About Frame It UK
        </p>

        <h1>
          More than a shirt.
          <br />
          More than a frame.
        </h1>

        <p className="sub">
          Frame It UK was created from a love of football,
          sport and the memories attached to the items we
          keep.
        </p>

        <p className="sub">
          Based in Scotland, we specialise in bespoke
          football shirt framing and sports memorabilia
          displays designed around the story behind each
          piece.
        </p>

      </section>


      {/* ========================================
          WHAT WE DO
      ======================================== */}

      <section className="section">

        <div className="grid">

          <div className="card">

            <p className="eyebrow">
              01
            </p>

            <h3>
              Built Around the Story
            </h3>

            <p>
              A match-worn shirt, a signed piece, a child&apos;s
              first football top or a memory from a special
              game can mean far more than the item itself.
              The frame should reflect that.
            </p>

          </div>


          <div className="card">

            <p className="eyebrow">
              02
            </p>

            <h3>
              Individually Designed
            </h3>

            <p>
              We design each display around the memorabilia
              rather than forcing every item into the same
              template. Photographs, plaques, club colours,
              custom artwork and additional memorabilia can
              all form part of the finished piece.
            </p>

          </div>


          <div className="card">

            <p className="eyebrow">
              03
            </p>

            <h3>
              Handmade in Scotland
            </h3>

            <p>
              Every frame is assembled and finished by hand,
              with careful attention given to layout,
              presentation and the small details that make
              the finished display feel premium.
            </p>

          </div>

        </div>

      </section>


      {/* ========================================
          APPROACH
      ======================================== */}

      <section className="how">

        <p className="eyebrow">
          Our Approach
        </p>

        <h2>
          Your memorabilia.
          <br />
          Your design.
        </h2>

        <div className="steps">

          <div>

            <strong>
              01
            </strong>

            <p>
              Start with the item and the story behind it.
            </p>

          </div>


          <div>

            <strong>
              02
            </strong>

            <p>
              Choose a layout, photographs, plaque or
              artwork that complements it.
            </p>

          </div>


          <div>

            <strong>
              03
            </strong>

            <p>
              We build the display around your chosen
              design.
            </p>

          </div>


          <div>

            <strong>
              04
            </strong>

            <p>
              The finished piece is ready to become part
              of your home, office or collection.
            </p>

          </div>

        </div>

      </section>


      {/* ========================================
          TYPES OF WORK
      ======================================== */}

      <section className="section">

        <p className="eyebrow">
          What We Frame
        </p>

        <h2>
          From football shirts
          <br />
          to complete displays.
        </h2>

        <div className="grid">

          <div className="card">
            <h3>
              Football Shirts
            </h3>

            <p>
              Signed, match-worn, replica and personally
              significant shirts.
            </p>
          </div>


          <div className="card">
            <h3>
              Sports Memorabilia
            </h3>

            <p>
              Boots, medals, tickets, photographs and
              other sporting keepsakes.
            </p>
          </div>


          <div className="card">
            <h3>
              Bespoke Displays
            </h3>

            <p>
              Double shirt frames, custom artwork,
              presentation pieces and one-off designs.
            </p>
          </div>

        </div>

      </section>


      {/* ========================================
          CTA
      ======================================== */}

      <section className="cta">

        <p className="eyebrow">
          Have Something to Frame?
        </p>

        <h2>
          Tell us the story.
        </h2>

        <p>
          Send us a photo of your shirt or memorabilia
          and we&apos;ll help you work out the best way to
          display it.
        </p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="primary"
        >
          Chat on WhatsApp
        </a>

      </section>

    </main>
  );
}
