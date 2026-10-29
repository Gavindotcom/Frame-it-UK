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
  name: "Benjamin Nygren Home Shirt – Player Edition Framed Display",
  price: "£199",
  description: `2025/26 Benjamin Nygren home shirt, professionally presented in our premium Player Edition frame. Featuring bold NYGREN lettering, precision-cut mount with white bevel detailing and a premium Perspex front. Glass requires collection or specialist delivery and is not suitable for standard courier delivery.`,
  image: "/images/work/YOUR-IMAGE-NAME",
  paymentLink: "https://buy.stripe.com/4gMbIUaXP3dG3Xz0WSeME02",
  badge: "COA Provided",
},
  {
    name: "QPR 2026/27 Glen Kamara Match-Worn Home Shirt – MWS Authenticated Player Edition",
    price: "£249.99",
    description:
      "An authentic match-worn QPR 2026/27 home shirt worn by Glen Kamara, in the 4-1 home win against Derby County 14/10/26. Professionally presented in our premium black Player Edition frame, featuring bold KAMARA lettering, precision-cut mount with white bevel detailing and three player photographs. Available with glass front for collection only, or Perspex for standard courier delivery. A unique collector's piece for any QPR supporter. Frame size 594 x 841 mm",
    image: "/images/work/YOUR-IMAGE-NAME",
    paymentLink: "https://buy.stripe.com/fZu28kc1TdSkalXdJEeME03",
    badge: "Authentic Match-Worn Shirt | Fabricks Technology",
  },
  {
    name: "Scotland 2020/21 Ryan Christie Signed Home Shirt – Player Edition Framed Display",
    price: "£149.99",
    description:
      "A Ryan Christie signed Scotland 2020/21 home shirt, professionally presented in our premium black Player Edition frame. Featuring bold CHRISTIE lettering, precision-cut black mount with white bevel detailing and three player photographs. Available with glass front for collection or specialist delivery, or Perspex for standard courier delivery. A stunning collector's piece celebrating Scottish international football. Frame Size 594 x 841 mm",
    image: "/images/work/YOUR-IMAGE-NAME",
    paymentLink: "https://buy.stripe.com/00w9AMd5XaG83Xz7lgeME01",
    badge: "COA provided",
  },
   {
    name: "Beşiktaş 2025/26 Rıdvan Yılmaz Match-Worn Home Shirt – MWS Authenticated Player Edition",
    price: "£249.99",
    description:
      "An authentic match-worn Beşiktaş 2025/26 home shirt worn by Rıdvan Yılmaz, fully authenticated by MatchWornShirt (MWS). Professionally presented in our premium black Player Edition frame, featuring bold RIDVAN lettering, precision-cut mount with white bevel detailing and three player photographs.vAvailable with glass front for collection or specialist delivery, or Perspex for standard courier delivery.vA unique collector's piece for any Beşiktaş supporter. Frame size 594 x 841 mm",
    image: "/images/work/YOUR-IMAGE-2.jpg",
    paymentLink: "https://buy.stripe.com/eVqaEQ3vneWo65H0WSeME04",
    badge: "Authentic Match-Worn Shirt | Fabricks Technology",
  },
   {
    name: "Wolves 2025/26 Squad-Signed Home Shirt – Player Edition Framed Display",
    price: "£199",
    description:
      "A Wolverhampton Wanderers 2025/26 home shirt, squad signed and sourced from MatchWornShirt (MWS). Professionally presented in our premium black A1 Player Edition frame, featuring bold WOLVES lettering, precision-cut black mount with white bevel detailing and three player photographs. Available with glass front for collection or specialist delivery, or Perspex for standard courier delivery. A fantastic collector's piece for any Wolves supporter. Frame size 594 x 841 mm",
    image: "/images/work/YOUR-IMAGE-2.jpg",
    paymentLink: "https://buy.stripe.com/cNi9AMc1T5lO65H8pkeME05",
    badge: "Authentic Match-Worn Shirt | Fabricks Technology",
  },
   {
    name: "Hibernian 2025/26 Jack Iredale Signed Match-Worn Shirt – Player Edition",
    price: "£124.99",
    description:
      "An authentic, signed match-worn Jack Iredale Hibernian 2025/26 shirt, worn during Hibs' memorable 2–1 victory over Rangers at Ibrox on 13 May 2026. Fully authenticated by MatchWornShirt (MWS) using Fabricks technology.Presented in our premium black Player Edition frame, featuring IREDALE lettering, white bevel detailing and three player photographs. Glass front available for collection or specialist delivery; Perspex for standard courier delivery. Frame Size 594 x 841mm.",
    image: "/images/work/YOUR-IMAGE-2.jpg",
    paymentLink: "https://buy.stripe.com/bJe9AM0jb5lOcu58pkeME06",
    badge: "Authentic Match-Worn Shirt | Fabricks Technology",
  },
   {
    name: "Classic Shirt Framed Display",
    price: "£87.99",
    description:
      "This is our Classic shirt frame display online purchase price. This image is for illustration purposes only. You are purchasing a pre-agreed service by paying through this option. For more details please get in touch by requesting a quote",
    image: "/images/work/brazil.webp",
    paymentLink: "https://buy.stripe.com/dRm4gs8PHg0scu5bBweME07",
    badge: "PRE-ARRANGED SERVICE",
  },
   {
    name: "Framed Shirt Photo Display",
    price: "£97.99",
    description:
      "This is our Framed Shirt Photo Display online purchase price. This image is for illustration purposes only. You are purchasing a pre-agreed service by paying through this option. For more details please get in touch by requesting a quote",
    image: "/images/mcginn-alt.webp",
    paymentLink: "https://buy.stripe.com/6oUaEQ9TL7tW79L7lgeME08",
    badge: "PRE-ARRANGED SERVICE",
  },
  {
    name: "Custom Artwork Frame",
    price: "£139.99",
    description:
      "This is our Custom Artwork Frame online purchase price. This image is for illustration purposes only. You are purchasing a pre-agreed service by paying through this option. For more details please get in touch by requesting a quote",
    image: "/images/aasgaard.webp",
    paymentLink: "https://buy.stripe.com/dRm5kwgi9eWo0Ln350eME09",
    badge: "PRE-ARRANGED SERVICE",
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
