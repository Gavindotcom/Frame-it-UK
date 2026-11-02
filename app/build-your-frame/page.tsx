"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./build.module.css";

const frameColours = {
  Black: "#111111",
  White: "#f4f4f1",
  Silver: "#a7a7a7",
};

const mountColours = {
  Black: "#1c1c1c",
  White: "#f8f7f2",
  Ivory: "#eee6d2",
};

export default function BuildYourFramePage() {
  const [size, setSize] = useState("A1 – 595 × 841mm");
  const [frameColour, setFrameColour] = useState("Black");
  const [mount, setMount] = useState("Double Mount");
  const [mountColour, setMountColour] = useState("Black");
  const [plaque, setPlaque] = useState("Yes");
  const [plaqueText, setPlaqueText] = useState("");
  const [glazing, setGlazing] = useState("Perspex");

  const summary = useMemo(
    () => ({
      size,
      frameColour,
      mount,
      mountColour,
      plaque,
      plaqueText,
      glazing,
    }),
    [
      size,
      frameColour,
      mount,
      mountColour,
      plaque,
      plaqueText,
      glazing,
    ]
  );

  const whatsappMessage = encodeURIComponent(
    `Hi Frame It UK, I'd like this frame configuration:

Frame size: ${summary.size}
Frame colour: ${summary.frameColour}
Mount: ${summary.mount}
Mount colour: ${summary.mountColour}
Plaque: ${summary.plaque}
Plaque wording: ${
      summary.plaque === "Yes"
        ? summary.plaqueText || "To be confirmed"
        : "No plaque"
    }
Front: ${summary.glazing}`
  );

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          FRAME IT UK
        </Link>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
        </nav>
      </header>

      <section className={styles.intro}>
        <p className={styles.eyebrow}>
          Frame It UK
        </p>

        <h1>Build Your Frame</h1>

        <p>
          Create your own personalised frame. Choose the
          size, finish, mount, plaque and front to suit your
          shirt and your space.
        </p>
      </section>

      <div className={styles.builder}>
        <section className={styles.options}>

          {/* SIZE */}

          <fieldset>
            <legend>
              <span>01</span>
              Frame Size
            </legend>

            <div className={styles.choiceGrid}>
              {[
                "A1 – 595 × 841mm",
                "Large – 700 × 1040mm",
                "Double – 815 × 1200mm",
                "Custom Size",
              ].map((option) => (
                <label
                  key={option}
                  className={
                    size === option
                      ? styles.selectedChoice
                      : styles.choice
                  }
                >
                  <input
                    type="radio"
                    name="size"
                    value={option}
                    checked={size === option}
                    onChange={() => setSize(option)}
                  />

                  {option}
                </label>
              ))}
            </div>
          </fieldset>


          {/* FRAME COLOUR */}

          <fieldset>
            <legend>
              <span>02</span>
              Frame Colour
            </legend>

            <div className={styles.colourChoices}>
              {Object.entries(frameColours).map(
                ([name, colour]) => (
                  <button
                    type="button"
                    key={name}
                    onClick={() =>
                      setFrameColour(name)
                    }
                    className={
                      frameColour === name
                        ? styles.selectedColour
                        : styles.colourButton
                    }
                  >
                    <span
                      style={{
                        backgroundColor: colour,
                      }}
                    />

                    {name}
                  </button>
                )
              )}
            </div>
          </fieldset>


          {/* MOUNT */}

          <fieldset>
            <legend>
              <span>03</span>
              Mount Option
            </legend>

            <div className={styles.choiceGrid}>
              {[
                "Single Mount",
                "Double Mount",
                "Custom Artwork",
              ].map((option) => (
                <label
                  key={option}
                  className={
                    mount === option
                      ? styles.selectedChoice
                      : styles.choice
                  }
                >
                  <input
                    type="radio"
                    name="mount"
                    value={option}
                    checked={mount === option}
                    onChange={() => setMount(option)}
                  />

                  {option}
                </label>
              ))}
            </div>
          </fieldset>


          {/* MOUNT COLOUR */}

          <fieldset>
            <legend>
              <span>04</span>
              Mount Colour
            </legend>

            <div className={styles.colourChoices}>
              {Object.entries(mountColours).map(
                ([name, colour]) => (
                  <button
                    type="button"
                    key={name}
                    onClick={() =>
                      setMountColour(name)
                    }
                    className={
                      mountColour === name
                        ? styles.selectedColour
                        : styles.colourButton
                    }
                  >
                    <span
                      style={{
                        backgroundColor: colour,
                      }}
                    />

                    {name}
                  </button>
                )
              )}
            </div>
          </fieldset>


          {/* PLAQUE */}

          <fieldset>
            <legend>
              <span>05</span>
              Plaque
            </legend>

            <div className={styles.choiceGrid}>
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className={
                    plaque === option
                      ? styles.selectedChoice
                      : styles.choice
                  }
                >
                  <input
                    type="radio"
                    name="plaque"
                    checked={plaque === option}
                    onChange={() => setPlaque(option)}
                  />

                  {option === "Yes"
                    ? "Add a plaque"
                    : "No plaque"}
                </label>
              ))}
            </div>

            {plaque === "Yes" && (
              <div className={styles.plaqueInput}>
                <label htmlFor="plaqueText">
                  Plaque wording
                </label>

                <textarea
                  id="plaqueText"
                  value={plaqueText}
                  onChange={(e) =>
                    setPlaqueText(e.target.value)
                  }
                  placeholder="e.g. John McGinn – Scotland – 2026"
                  maxLength={180}
                />

                <small>
                  {plaqueText.length}/180 characters
                </small>
              </div>
            )}
          </fieldset>


          {/* FRONT */}

          <fieldset>
            <legend>
              <span>06</span>
              Front
            </legend>

            <div className={styles.choiceGrid}>
              {["Perspex", "Glass"].map((option) => (
                <label
                  key={option}
                  className={
                    glazing === option
                      ? styles.selectedChoice
                      : styles.choice
                  }
                >
                  <input
                    type="radio"
                    name="glazing"
                    checked={glazing === option}
                    onChange={() =>
                      setGlazing(option)
                    }
                  />

                  <div>
                    <strong>{option}</strong>

                    <small>
                      {option === "Perspex"
                        ? "Suitable for courier delivery"
                        : "Collection or specialist delivery"}
                    </small>
                  </div>
                </label>
              ))}
            </div>
          </fieldset>
        </section>


        {/* SUMMARY */}

        <aside className={styles.summary}>
          <div className={styles.stickySummary}>
            <p className={styles.eyebrow}>
              Your Frame
            </p>

            <h2>Build Summary</h2>


            {/* SIMPLE LIVE PREVIEW */}

            <div
              className={styles.previewFrame}
              style={{
                backgroundColor:
                  frameColours[
                    frameColour as keyof typeof frameColours
                  ],
              }}
            >
              <div
                className={styles.previewMount}
                style={{
                  backgroundColor:
                    mountColours[
                      mountColour as keyof typeof mountColours
                    ],
                }}
              >
                <div className={styles.previewShirt}>
                  SHIRT
                </div>

                {plaque === "Yes" && (
                  <div className={styles.previewPlaque}>
                    {plaqueText || "YOUR PLAQUE"}
                  </div>
                )}
              </div>
            </div>


            <dl className={styles.summaryList}>
              <div>
                <dt>Size</dt>
                <dd>{size}</dd>
              </div>

              <div>
                <dt>Frame</dt>
                <dd>{frameColour}</dd>
              </div>

              <div>
                <dt>Mount</dt>
                <dd>{mount}</dd>
              </div>

              <div>
                <dt>Mount colour</dt>
                <dd>{mountColour}</dd>
              </div>

              <div>
                <dt>Plaque</dt>
                <dd>
                  {plaque === "Yes"
                    ? plaqueText || "Yes"
                    : "No"}
                </dd>
              </div>

              <div>
                <dt>Front</dt>
                <dd>{glazing}</dd>
              </div>
            </dl>


            <div className={styles.pricePlaceholder}>
              <span>Your Price</span>

              <strong>
                Pricing to be added
              </strong>
            </div>


            <a
              href={`https://wa.me/447464768508?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className={styles.orderButton}
            >
              Send My Configuration
              <span>→</span>
            </a>

            <p className={styles.note}>
              We’ll replace this with secure Stripe
              checkout once the option prices are added.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
