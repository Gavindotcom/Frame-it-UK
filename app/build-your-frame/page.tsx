"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./build.module.css";

const mountColours: Record<string, string> = {
  Black: "#171717",
  White: "#f4f2ed",
  Blue: "#173d73",
  Red: "#7e202b",
  Green: "#185239",
};

export default function BuildYourFramePage() {
  const [design, setDesign] = useState("Classic");
  const [mountColour, setMountColour] = useState("Black");
  const [plaque, setPlaque] = useState("Yes");
  const [plaqueText, setPlaqueText] = useState("");
  const [glazing, setGlazing] = useState("Perspex");

  const summary = useMemo(
    () => ({
      design,
      mountColour,
      plaque,
      plaqueText,
      glazing,
    }),
    [design, mountColour, plaque, plaqueText, glazing]
  );

  const whatsappMessage = encodeURIComponent(
    `Hi Frame It UK, I'd like this frame configuration:

Design: ${summary.design}
Frame size: A1
Frame colour: Black
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
        <p className={styles.eyebrow}>Frame It UK</p>

        <h1>Build Your Frame</h1>

        <p>
          Choose your preferred layout and customise the finishing
          touches. Every frame is handmade to order.
        </p>
      </section>

      <div className={styles.builder}>
        <section className={styles.options}>

          {/* DESIGN */}

          <fieldset>
            <legend>
              <span>01</span>
              Choose Your Design
            </legend>

            <div className={styles.designChoices}>
              <label
                className={
                  design === "Classic"
                    ? styles.selectedDesign
                    : styles.designChoice
                }
              >
                <input
                  type="radio"
                  name="design"
                  checked={design === "Classic"}
                  onChange={() => setDesign("Classic")}
                />

                <strong>Classic</strong>

                <small>
                  Shirt, club badge and plaque in a clean,
                  traditional layout.
                </small>
              </label>

              <label
                className={
                  design === "Photo Display"
                    ? styles.selectedDesign
                    : styles.designChoice
                }
              >
                <input
                  type="radio"
                  name="design"
                  checked={design === "Photo Display"}
                  onChange={() => setDesign("Photo Display")}
                />

                <strong>Photo Display</strong>

                <small>
                  Shirt with two photographs and a centred
                  personalised plaque.
                </small>
              </label>
            </div>
          </fieldset>

          {/* SIZE */}

          <fieldset>
            <legend>
              <span>02</span>
              Frame Size
            </legend>

            <div className={styles.fixedOption}>
              <strong>A1</strong>

              <span>595 × 841mm</span>

              <small>
                Our standard shirt framing size
              </small>
            </div>
          </fieldset>

          {/* FRAME */}

          <fieldset>
            <legend>
              <span>03</span>
              Frame Colour
            </legend>

            <div className={styles.fixedOption}>
              <span className={styles.blackSwatch} />

              <strong>Black</strong>

              <small>
                Premium black frame moulding
              </small>
            </div>
          </fieldset>

          {/* MOUNT */}

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
                    onClick={() => setMountColour(name)}
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
              Personalised Plaque
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
              Frame Front
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
                    onChange={() => setGlazing(option)}
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

        {/* LIVE PREVIEW */}

        <aside className={styles.summary}>
          <div className={styles.stickySummary}>
            <p className={styles.eyebrow}>
              Live Preview
            </p>

            <h2>{design}</h2>

            <div className={styles.previewStage}>
              <div className={styles.previewFrame}>
                <div className={styles.frameInnerEdge}>
                  <div
                    className={styles.previewMount}
                    style={{
                      backgroundColor:
                        mountColours[mountColour],
                    }}
                  >

                    {/* CLASSIC */}

                    {design === "Classic" && (
                      <div className={styles.classicLayout}>
                        <div className={styles.clubBadge}>
                          CLUB
                        </div>

                        <div className={styles.mainAperture}>
                          <ShirtPreview />
                        </div>

                        {plaque === "Yes" && (
                          <Plaque
                            text={plaqueText}
                          />
                        )}
                      </div>
                    )}

                    {/* PHOTO DISPLAY */}

                    {design === "Photo Display" && (
                      <div className={styles.photoLayout}>
                        <div className={styles.mainAperture}>
                          <ShirtPreview />
                        </div>

                        <div className={styles.bottomRow}>
                          <div className={styles.photoPlaceholder}>
                            PHOTO
                          </div>

                          {plaque === "Yes" ? (
                            <Plaque
                              text={plaqueText}
                            />
                          ) : (
                            <div />
                          )}

                          <div className={styles.photoPlaceholder}>
                            PHOTO
                          </div>
                        </div>
                      </div>
                    )}

                    <div
                      className={
                        glazing === "Glass"
                          ? styles.glassReflectionStrong
                          : styles.glassReflection
                      }
                    />
                  </div>
                </div>
              </div>

              <div className={styles.frameShadow} />
            </div>

            <dl className={styles.summaryList}>
              <div>
                <dt>Design</dt>
                <dd>{design}</dd>
              </div>

              <div>
                <dt>Size</dt>
                <dd>A1 – 595 × 841mm</dd>
              </div>

              <div>
                <dt>Frame</dt>
                <dd>Black</dd>
              </div>

              <div>
                <dt>Mount</dt>
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
          </div>
        </aside>
      </div>
    </main>
  );
}


function Plaque({
  text,
}: {
  text: string;
}) {
  return (
    <div className={styles.realPlaque}>
      {text || "YOUR PERSONALISED PLAQUE"}
    </div>
  );
}


function ShirtPreview() {
  return (
    <svg
      viewBox="0 0 300 350"
      className={styles.shirtSvg}
    >
      <defs>
        <linearGradient
          id="shirtBlue"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop
            offset="0%"
            stopColor="#315f91"
          />

          <stop
            offset="100%"
            stopColor="#162f52"
          />
        </linearGradient>
      </defs>

      <path
        d="
          M91 49
          L61 65
          L29 116
          L67 141
          L91 116
          L91 298
          L209 298
          L209 116
          L233 141
          L271 116
          L239 65
          L209 49
          L181 37
          C173 59 160 69 150 69
          C140 69 127 59 119 37
          Z
        "
        fill="url(#shirtBlue)"
      />

      <path
        d="
          M119 37
          C128 54 138 62 150 62
          C162 62 172 54 181 37
          L168 31
          C163 42 157 47 150 47
          C143 47 137 42 132 31
          Z
        "
        fill="#f5f5f5"
      />

      <text
        x="150"
        y="180"
        textAnchor="middle"
        fill="white"
        fontSize="58"
        fontWeight="700"
        fontFamily="Arial"
      >
        10
      </text>
    </svg>
  );
}
