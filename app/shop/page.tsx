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
};

const products: Product[] = [
  {
    name: "Standard Shirt Frame",
    price: "£85",
    description:
      "A clean, professionally finished football shirt frame, handmade in Scotland.",
    image: "/images/work/brazil.webp",
    paymentLink: "PASTE_STRIPE_LINK_1_HERE",
    badge: "Popular",
  },
  {
    name: "Presentation Shirt Frame",
    price: "£POA",
    description:
      "A premium presentation layout with photographs, plaque and personalised design.",
    image: "/images/work/mcginn.webp",
    paymentLink: "PASTE_STRIPE_LINK_2_HERE",
  },
  {
    name: "Custom Artwork Frame",
    price: "£POA",
    description:
      "Your shirt combined with bespoke artwork to create a completely individual display.",
    image: "/images/work/aasgaard.webp",
    paymentLink: "PASTE_STRIPE_LINK_3_HERE",
  },
];

function isStripeLink(link: string) {
  return link.startsWith("https://buy.stripe.com/");
}

export default function ShopPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          FRAME IT UK
        </Link>

        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/#designs">Designs</Link>
          <Link href="/#gallery">Gallery</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Frame It UK Shop</p>

        <h1>
          Frame the moments
          <br />
          that matter.
        </h1>

        <p className={styles.intro}>
          Choose from a small selection of our most popular framing
          options and pay securely online.
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

              {isStripeLink(product.paymentLink) ? (
                <a
                  href={product.paymentLink}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.buyButton}
                >
                  Buy Now
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
        <p className={styles.eyebrow}>How it works</p>

        <h2>Simple from order to frame.</h2>

        <div className={styles.steps}>
          <div>
            <span>01</span>
            <h3>Choose your frame</h3>
            <p>
              Select the framing option that best suits what you
              have in mind.
            </p>
          </div>

          <div>
            <span>02</span>
            <h3>Pay securely</h3>
            <p>
              Complete your payment through our secure Stripe
              checkout.
            </p>
          </div>

          <div>
            <span>03</span>
            <h3>We design it with you</h3>
            <p>
              We’ll then arrange your shirt, photos, wording and
              final design with you.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.bespoke}>
        <div>
          <p className={styles.eyebrow}>Something different?</p>

          <h2>
            Looking for something
            <br />
            completely bespoke?
          </h2>

          <p>
            Double frames, boots, medals, LED displays, custom
            artwork and unique memorabilia pieces are quoted
            individually.
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
