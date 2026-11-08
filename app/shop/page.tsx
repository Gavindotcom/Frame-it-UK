import Image from "next/image";
import Link from "next/link";
import styles from "./shop.module.css";

type Product = {
  name: string;
  price: string;
  description: string;
  image: string;
  paymentLink: string;
  badge?: string;
  type: "memorabilia" | "service";
};

const products: Product[] = [
  {
    name: "Benjamin Nygren Home Shirt – Player Edition Framed Display",
    price: "£199",
    description:
      "2025/26 Benjamin Nygren home shirt, professionally presented in our premium Player Edition frame. Featuring bold NYGREN lettering, precision-cut mount with white bevel detailing and a premium Perspex front. Glass is available for collection or specialist delivery.",
    image: "/images/PXL_20261108_164806919.jpg",
    paymentLink: "https://buy.stripe.com/4gMbIUaXP3dG3Xz0WSeME02",
    badge: "COA PROVIDED",
    type: "memorabilia",
  },

  {
    name: "QPR 2026/27 Glen Kamara Match-Worn Home Shirt – MWS Authenticated Player Edition",
    price: "£249.99",
    description:
      "Authentic Glen Kamara match-worn QPR 2026/27 home shirt, worn in the 4–1 home victory over Derby County on 14 October 2026. Professionally presented in our premium Player Edition frame with KAMARA lettering, white bevel detailing and three player photographs. Frame size 594 × 841 mm. Perspex is suitable for standard courier delivery; glass is available for collection or specialist delivery.",
    image: "/images/Coming Soon.png",
    paymentLink: "https://buy.stripe.com/fZu28kc1TdSkalXdJEeME03",
    badge: "MATCH-WORN | FABRICKS TECHNOLOGY",
    type: "memorabilia",
  },

  {
    name: "Scotland 2020/21 Ryan Christie Signed Home Shirt – Player Edition Framed Display",
    price: "£149.99",
    description:
      "Signed Ryan Christie Scotland 2020/21 home shirt, professionally presented in our premium black Player Edition frame. Featuring CHRISTIE lettering, precision-cut black mount with white bevel detailing and three player photographs. Frame size 594 × 841 mm. Perspex is suitable for standard courier delivery; glass is available for collection or specialist delivery.",
    image: "/images/Coming Soon.png",
    paymentLink: "https://buy.stripe.com/00w9AMd5XaG83Xz7lgeME01",
    badge: "COA PROVIDED",
    type: "memorabilia",
  },

  {
    name: "Beşiktaş 2025/26 Rıdvan Yılmaz Match-Worn Home Shirt – MWS Authenticated Player Edition",
    price: "£249.99",
    description:
      "Authentic match-worn Beşiktaş 2025/26 home shirt worn by Rıdvan Yılmaz and authenticated by MatchWornShirt. Professionally presented in our premium black Player Edition frame with RIDVAN lettering, precision-cut mount, white bevel detailing and three player photographs. Frame size 594 × 841 mm. Perspex is suitable for standard courier delivery; glass is available for collection or specialist delivery.",
    image: "/images/Coming Soon.png",
    paymentLink: "https://buy.stripe.com/eVqaEQ3vneWo65H0WSeME04",
    badge: "MATCH-WORN | FABRICKS TECHNOLOGY",
    type: "memorabilia",
  },

  {
    name: "Wolves 2025/26 Squad-Signed Home Shirt – Player Edition Framed Display",
    price: "£199",
    description:
      "Wolverhampton Wanderers 2025/26 home shirt, squad signed and sourced from MatchWornShirt. Professionally presented in our premium black A1 Player Edition frame with WOLVES lettering, precision-cut black mount, white bevel detailing and three player photographs. Frame size 594 × 841 mm. Perspex is suitable for standard courier delivery; glass is available for collection or specialist delivery.",
    image: "/images/Coming Soon.png",
    paymentLink: "https://buy.stripe.com/cNi9AMc1T5lO65H8pkeME05",
    badge: "SIGNED | FABRICKS TECHNOLOGY",
    type: "memorabilia",
  },

  {
    name: "Hibernian 2025/26 Jack Iredale Signed Match-Worn Shirt – Player Edition",
    price: "£124.99",
    description:
      "Authentic signed match-worn Jack Iredale Hibernian 2025/26 shirt, worn during Hibs' 2–1 victory over Rangers at Ibrox on 13 May 2026 and authenticated by MatchWornShirt using Fabricks technology. Presented in our premium black Player Edition frame with IREDALE lettering, white bevel detailing and three player photographs. Frame size 594 × 841 mm.",
    image: "/images/Coming Soon.png",
    paymentLink: "https://buy.stripe.com/bJe9AM0jb5lOcu58pkeME06",
    badge: "SIGNED MATCH-WORN | FABRICKS",
    type: "memorabilia",
  },

  {
    name: "Classic Shirt Framed Display",
    price: "£87.99",
    description:
      "Our Classic Shirt Framed Display provides a clean, timeless presentation built around your shirt. This listing is for customers who have already agreed their framing requirements with Frame It UK. The image is for illustration purposes only.",
    image: "/images/work/brazil.webp",
    paymentLink: "https://buy.stripe.com/dRm4gs8PHg0scu5bBweME07",
    badge: "PRE-ARRANGED SERVICE",
    type: "service",
  },

  {
    name: "Framed Shirt Photo Display",
    price: "£97.99",
    description:
      "Our Framed Shirt Photo Display combines your shirt with selected photographs and a personalised presentation layout. This listing is for customers who have already agreed their framing requirements with Frame It UK. The image is for illustration purposes only.",
    image: "/images/work/mcginn-alt.webp",
    paymentLink: "https://buy.stripe.com/6oUaEQ9TL7tW79L7lgeME08",
    badge: "PRE-ARRANGED SERVICE",
    type: "service",
  },

  {
    name: "Custom Artwork Frame",
    price: "£169.99",
    description:
      "Our Custom Artwork Frame combines your shirt with bespoke artwork created around the player, club or moment being celebrated. This listing is for customers who have already agreed their framing requirements with Frame It UK. The image is for illustration purposes only.",
    image: "/images/work/aasgaard.webp",
    paymentLink: "https://buy.stripe.com/dRm5kwgi9eWo0Ln350eME09",
    badge: "PRE-ARRANGED SERVICE",
    type: "service",
  },
];

function isStripeLink(link: string) {
  return link.startsWith("https://buy.stripe.com/");
}

const productSchema = {
  "@context": "https://schema.org",
  "@graph": products
    .filter((product) => product.type === "memorabilia")
    .map((product) => ({
      "@type": "Product",
      name: product.name,
      description: product.description,
      image: `https://frame-it-uk.com${product.image}`,
      brand: {
        "@type": "Brand",
        name: "Frame It UK",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: product.price.replace("£", ""),
        availability: "https://schema.org/InStock",
        url: product.paymentLink,
      },
    })),
};

export default function ShopPage() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />

      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          FRAME IT UK
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/#designs">Designs</Link>
          <Link href="/#gallery">Gallery</Link>
          <Link href="/#quote">Quote</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Frame It UK Shop</p>

        <h1>
          Framed memorabilia.
          <br />
          Made to stand out.
        </h1>

        <p className={styles.intro}>
          Shop selected authentic and signed framed football memorabilia (all with COA),
          or securely pay for a framing service you have already arranged
          with Frame It UK.
        </p>
      </section>

      <section className={styles.products}>
        {products.map((product) => (
          <article className={styles.card} key={product.name}>
            <div className={styles.imageWrap}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 750px) 100vw, 33vw"
                className={styles.image}
              />

              {product.badge && (
                <span className={styles.badge}>
                  {product.badge}
                </span>
              )}
            </div>

            <div className={styles.cardContent}>
              <div className={styles.productHeading}>
                <h2>{product.name}</h2>
                <span>{product.price}</span>
              </div>

              <p>{product.description}</p>

              {product.type === "service" && (
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    marginTop: "0.5rem",
                  }}
                >
                  Please only purchase after discussing your frame with us.
                </p>
              )}

              {isStripeLink(product.paymentLink) ? (
                <a
                  href={product.paymentLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.buyButton}
                >
                  {product.type === "memorabilia"
                    ? "Buy Now"
                    : "Pay For Your Frame"}

                  <span aria-hidden="true">→</span>
                </a>
              ) : (
                <span className={styles.disabledButton}>
                  Payment link to be added
                </span>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className={styles.howItWorks}>
        <p className={styles.eyebrow}>Buying from Frame It UK</p>

        <h2>Simple and secure.</h2>

        <div className={styles.steps}>
          <div>
            <span>01</span>

            <h3>Choose your item</h3>

            <p>
              Buy one of our available framed memorabilia pieces or select
              a framing service you have already arranged with us.
            </p>
          </div>

          <div>
            <span>02</span>

            <h3>Pay securely</h3>

            <p>
              Complete payment through our secure Stripe checkout.
            </p>
          </div>

          <div>
            <span>03</span>

            <h3>Collection or delivery</h3>

            <p>
              We will confirm the appropriate collection or delivery
              arrangements for your frame.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.bespoke}>
        <div>
          <p className={styles.eyebrow}>Have your own shirt?</p>

          <h2>
            Create something
            <br />
            completely bespoke.
          </h2>

          <p>
            From classic football shirt frames to custom artwork,
            double shirt displays, boots, medals and LED framing,
            we can create something around your memorabilia.
          </p>
        </div>

        <Link href="/#quote" className={styles.quoteButton}>
          Request a Quote
          <span aria-hidden="true">→</span>
        </Link>
      </section>

      <footer className={styles.footer}>
        <div>
          <Link href="/" className={styles.brand}>
            FRAME IT UK
          </Link>

          <p>Bespoke framing. Bigger stories.</p>
        </div>

        <p>© 2026 Frame It UK</p>
      </footer>
    </main>
  );
}
