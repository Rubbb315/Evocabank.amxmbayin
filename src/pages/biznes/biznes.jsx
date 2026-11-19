import React, { useState } from "react";
import "./biznes.css";

const BUSINESS_LOANS = [
  {
    id: "aragh-biznes-vark",
    title: "Արագ բիզնես վարկ/վարկային գիծ",
    description:
      "Արագ ֆինանսավորում Ձեր բիզնեսի զարգացման համար միայն երաշխավորությամբ և ցածր տոկոսադրույքով՝",
    image: "https://www.evoca.am/images-cache/loans/1/17721008940374/415x261.png",
    metrics: [
      { top: "Մինչև", value: "60 ամիս", bottom: "Ժամկետ" },
      { top: "Մինչև", value: "30 մլն ֏", bottom: "Սահմանաչափ կամ համարժեք արտարժույթ" },
      { top: "", value: "9.22%-17.89%", bottom: "Տարեկան տոկոսադրույք" },
    ],
  },
  {
    id: "tekstil-nermutsman-vark",
    title: "Տեքստիլ ոլորտում հումքի ներմուծմանն ուղղված վարկ",
    description:
      "Evocabank-ը տրամադրում է բիզնես վարկ՝ տեքստիլ հումքի ներմուծման համար։ Շտապեք դիմել, զարգացնել Ձեր բիզնեսը և դառնալ ոլորտում մրցունակ՝",
    image: "https://www.evoca.am/images-cache/loans/1/17749381045652/415x261.png",
    metrics: [
      { top: "Մինչև", value: "36 ամիս", bottom: "Ժամկետ" },
      { top: "Մինչև", value: "500 մլն ֏", bottom: "Սահմանաչափ կամ համարժեք արտարժույթ" },
      { top: "", value: "8%", bottom: "Տոկոսադրույքի սուբսիդավորման չափ" },
    ],
  },
  {
    id: "verafinansavorum",
    title: "Բիզնես վարկերի վերաֆինանսավորում",
    description:
      "Տեղափոխեք Ձեր բիզնես վարկը Evocabank, ստացեք վարկի վերաֆինանսավորում և լրացուցիչ ֆինանսավորում՝ ավելի հարմար պայմաններով՝",
    image: "https://www.evoca.am/images-cache/loans/1/17822121684763/415x261.png",
    metrics: [
      { top: "Վերաֆինանսավորում", value: "36-120 ամիս", bottom: "Ժամկետ" },
      { top: "Գումար", value: "15մլն-500մլն", bottom: "ՀՀ դրամ կամ համարժեք արտարժույթ" },
      { top: "Սկսած", value: "ՀՀ դրամ՝ 12%", bottom: "Տարեկան անվանական տոկոսադրույք" },
      { top: "Սկսած", value: "ԱՄՆ դոլար՝ 9%", bottom: "Տարեկան անվանական տոկոսադրույք" },
    ],
  },
  {
    id: "partatomserov-vark",
    title: "Պարտատոմսերով ապահովված վարկ",
    description:
      "Ստացեք վարկ՝ Բանկի պարտատոմսերի գրավով և շարունակեք զարգացնել Ձեր բիզնեսը՝",
    image: "https://www.evoca.am/images-cache/loans/1/17848707149538/415x261.png",
    metrics: [],
  },
  {
    id: "khoshor-ev-pmq-vark",
    title: "Խոշոր և ՓՄՁ բիզնես վարկ",
    description:
      "Զարգացրեք Ձեր բիզնեսը Evocabank-ի հետ փոխշահավետ պայմաններով՝",
    image: "https://www.evoca.am/images-cache/loans/1/16148637167789/415x261.jpg",
    metrics: [
      { top: "Մինչև", value: "4 մլրդ ֏", bottom: "կամ համարժեք արտարժույթ" },
      { top: "Մինչև", value: "180", bottom: "ամիս" },
      { top: "Սկսած", value: "8.2%-ից", bottom: "տոկոսադրույք" },
    ],
  },
  {
    id: "evoca-go",
    title: "Evoca GO",
    description:
      "Օգտվեք Եվրոպական Ներդրումային Բանկի (ԵՆԲ) կողմից ֆինանսավորվող ծրագրի շրջանակներում վարկավորման փոխշահավետ հնարավորությունից՝",
    image: "https://www.evoca.am/images-cache/loans/1/1614870243661/415x261.jpg",
    metrics: [
      { top: "Մինչև", value: "500 մլն. ֏", bottom: "Սահմանաչափ" },
      { top: "Մինչև", value: "90 ամիս", bottom: "Մարման ժամկետ" },
      { top: "", value: "10.5 % ֏", bottom: "Տոկոսադրույք" },
      { top: "Մինչև", value: "30 ամիս", bottom: "Առանց գումարի արտոնյալ ժամկետ (ոչ արտադրություն)" },
    ],
  },
  {
    id: "vark-gqg-energa",
    title: "Վարկեր ԳՀԳ - Էներգաարդյունավետություն ՓՄՁ-ների համար ծրագիր",
    description:
      "Եթե Դուք ցանկանում եք ձեռք բերել ԵԱ սարքավորումներ և մեքենաներ կամ իրականացնել այլ էներգաարդյունավետ ներդրումներ, այս վարկատեսակը Ձեզ համար է՝",
    image: "https://www.evoca.am/images-cache/loans/1/16148681592638/415x261.jpg",
    metrics: [
      { top: "Մինչև", value: "500 մլն. ֏", bottom: "Սահմանաչափ" },
      { top: "Մինչև", value: "5 տարի", bottom: "Մարման ժամկետ" },
      { top: "Սկսած", value: "9%-ից", bottom: "Տոկոսադրույք" },
    ],
  },
  {
    id: "avandi-gravov-vark",
    title: "Ավանդի գրավով ապահովված վարկ / վարկային սահմանաչափ",
    description:
      "Մի՛ օգտագործեք կուտակված ֆինանսավորումները. Ձեր ֆինանսական խնդիրները կարգավորելու համար մենք ավելի շահավետ տարբերակ ունենք՝",
    image: "https://www.evoca.am/images-cache/loans/1/16142658362638/415x261.jpg",
    metrics: [
      { top: "առավելագույնը մինչև", value: "95%", bottom: "Սահմանաչափ" },
      { top: "արտարժույթի դեպքում մինչև", value: "80%", bottom: "Սահմանաչափ" },
    ],
  },
  {
    id: "kfw-kanach-finansavorum",
    title: "KFW ծրագիր՝ Բիզնեսի կանաչ ֆինանսավորում",
    description:
      "Եթե ցանկանում եք իրականացնել էներգախնայողության և էներգախնայող ներդրումներ բիզնեսի ծախսերը կրճատելու և արդյունավետությունը բարձրացնելու նպատակով, այս ֆինանսավորումը Ձեզ համար է՝",
    image: "https://www.evoca.am/images-cache/loans/1/16148706367372/415x261.jpg",
    metrics: [
      { top: "առավելագույնը մինչև", value: "10 մլն. ֏", bottom: "Սահմանաչափ (միկրո)" },
      { top: "", value: "9.5%", bottom: "Տարեկան անվանական տոկոսադրույքը (մինչև 1 % դեպքում ֆինանսական տոկոսադրույքը մինչև 10.5%)" },
      { top: "", value: "10.25%", bottom: "Տարեկան անվանական տոկոսադրույքը (1.1 %-ից դեպքում ֆինանսական տոկոսադրույքը մինչև 10.75%)" },
      { top: "Մինչև", value: "120 ամիս", bottom: "Մարման ժամկետ (մինչև 1 %-ի դեպքում)" },
    ],
  },
  {
    id: "parz-biznes-vark",
    title: "Պարզ բիզնես վարկ",
    description:
      "Ստացեք Պարզ բիզնես վարկ՝ անշարժ գույքի ապահովմամբ և ցածր տարեկան տոկոսադրույք՝ Վարկի տրամադրման վերաբերյալ որոշումը կայացվում է ընդամենը 2-4 աշխատանքային օրվա ընթացքում՝",
    image: "https://www.evoca.am/images-cache/loans/1/1614869229831/415x261.jpg",
    metrics: [
      { top: "Մինչև", value: "50 մլն. ֏", bottom: "Սահմանաչափ (կամ համարժեք արտարժույթ)" },
      { top: "Մինչև", value: "60 ամիս", bottom: "Մարման ժամկետ" },
      { top: "Սկսած", value: "7.5%-ից", bottom: "Տոկոսադրույք" },
    ],
  },
  {
    id: "hashvi-varkavorum",
    title: "Հաշվի վարկավորում",
    description:
      "Հանդիսանո՞ւմ եք Evocabank-ի հաշվետեր հաճախորդ առնվազն 1 տարի, ուրեմն Evocabank-ը կօգնի հոգալ Ձեր բիզնեսի ընթացիկ ծախսերը՝",
    image: "https://www.evoca.am/images-cache/loans/1/16148678149192/415x261.jpg",
    metrics: [
      { top: "առավելագույնը", value: "500 մլն ֏", bottom: "կամ համարժեք արտարժույթ" },
      { top: "առավելագույնը", value: "12 ամիս", bottom: "ժամկետ" },
      { top: "Սկսած", value: "7%-ից", bottom: "Տոկոսադրույք" },
    ],
  },
  {
    id: "biznes-vark-12",
    title: "Բիզնես վարկ / Ծրագիր 12",
    description: "Բիզնեսի զարգացման և ընթացիկ ծախսերի ֆինանսավորման ծրագիր՝",
    image: "https://www.evoca.am/images-cache/loans/1/16148665659945/415x261.jpg",
    metrics: [],
  },
  {
    id: "biznes-vark-13",
    title: "Բիզնես վարկ / Ծրագիր 13",
    description: "Բիզնեսի զարգացման և ընթացիկ ծախսերի ֆինանսավորման ծրագիր՝",
    image: "https://www.evoca.am/images-cache/loans/1/16148696068365/415x261.jpg",
    metrics: [],
  },
  {
    id: "biznes-vark-14",
    title: "Բիզնես վարկ / Ծրագիր 14",
    description: "Բիզնեսի զարգացման և ընթացիկ ծախսերի ֆինանսավորման ծրագիր՝",
    image: "https://www.evoca.am/images-cache/loans/1/16394873850552/415x261.png",
    metrics: [],
  },
];

const FOOTER_BANK_LINKS = [
  "Մեր մասին",
  "Ղեկավարություն",
  "Բաժնետերեր",
  "Հաշվետվություններ",
  "Իրավական ակտեր",
  "Սակագներ",
  "Օտարվող գույք",
  "Կառուցապատողներ",
  "Գործընկեր ավտոսրահներ",
  "Սակագների արխիվ",
];

const FOOTER_USEFUL_LINKS = [
  "Հաճախորդի իրավունքները (Բողոքի ներկայացման կանոններ)",
  "Հաճախորդի ռեզիդենտության չափանիշներ",
  "Կարգավորում",
  "Գաղտնիության քաղաքականություն",
  "Ֆին. հաշտարար",
  "Ֆինանսական հանցագործությունների կանխարգելում",
  "Հղումներ Բանկի քարտապանների համար",
];

const FOOTER_OTHER_LINKS = [
  "EvocaONLINE",
  "Պահատուփեր",
  "Հաճախ տրվող հարցեր",
  "Հայտարարություններ",
  "Dlibrary",
  "Բուկլետներ",
  "Հետադարձ կապ",
  "Կայքի քարտեզ",
];

export default function Biznes() {
  const [activeTopTab, setActiveTopTab] = useState("Բիզնես");
  const [activeNavItem, setActiveNavItem] = useState("Վարկեր");
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="evoca-biznes-page">
      {/* Top Utility Bar */}
      <div className="top-utility-bar">
        <div className="container top-utility-inner">
          <div className="top-utility-left">
            {["Անհատ", "Բիզնես", "Ակնթարթային վճարումներ", "Մեր մասին", "Նորություններ", "Բլոգ", "Կարիերա"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className={`top-utility-link ${activeTopTab === item ? "is-active" : ""}`}
                  onClick={() => setActiveTopTab(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="top-utility-right">
            <span className="utility-dropdown">Առցանց հայտեր ▾</span>
            <span className="utility-dropdown">Հետադարձ կապ ▾</span>
            <div className="utility-icons" aria-hidden="true">
              <span>📍</span>
              <span>?</span>
              <span>🌐</span>
              <span>🔍</span>
              <span>☰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="main-header">
        <div className="container main-header-inner">
          <a href="#top" className="brand-logo" aria-label="Evoca">
            <span className="brand-logo-text">evoca</span>
          </a>

          <nav className="main-nav" aria-label="Հիմնական մենյու">
            {[
              "Վարկեր",
              "Լիզինգ",
              "Հաշիվներ",
              "Ավանդներ",
              "Արժեթղթերի շուկա",
              "Առևտրի ֆինանսավորում",
              "Դիջիթալ",
              "Այլ",
            ].map((nav) => (
              <button
                key={nav}
                type="button"
                className={`main-nav-item ${activeNavItem === nav ? "is-active" : ""}`}
                onClick={() => setActiveNavItem(nav)}
              >
                {nav}
              </button>
            ))}
          </nav>

          <button type="button" className="evoca-online-btn">
            EvocaONLINE
          </button>
        </div>
      </header>

      {/* Purple Sub-Header Strip */}
      <div className="purple-subbar">
        <div className="container">
          <div className="purple-subbar-pill">Բիզնես վարկեր</div>
        </div>
      </div>

      {/* Breadcrumbs & Page Title */}
      <main id="top" className="biznes-main">
        <div className="container">
          <div className="breadcrumbs" aria-label="Breadcrumb">
            <span>🏠</span>
            <span>›</span>
            <span>Բիզնես</span>
            <span>›</span>
            <span>Վարկեր</span>
            <span>›</span>
            <span>Բիզնես վարկեր</span>
          </div>

          <h1 className="page-title">Բիզնես վարկեր</h1>

          {/* Loans List */}
          <section className="loans-list" aria-label="Բիզնես վարկերի ցանկ">
            {BUSINESS_LOANS.map((loan) => (
              <article key={loan.id} className="loan-card">
                <div className="loan-image-box">
                  <img
                    src={loan.image}
                    alt={loan.title}
                    className="loan-image"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling.style.display = "flex";
                    }}
                  />
                  <div className="loan-image-fallback">3D Նկար</div>
                </div>

                <div className="loan-content">
                  <h2 className="loan-title">{loan.title}</h2>
                  <p className="loan-description">{loan.description}</p>

                  {loan.metrics.length > 0 && (
                    <div className="loan-metrics">
                      {loan.metrics.map((metric, idx) => (
                        <div key={idx} className="metric-item">
                          {metric.top && <span className="metric-top">{metric.top}</span>}
                          <span className="metric-value">{metric.value}</span>
                          {metric.bottom && <span className="metric-bottom">{metric.bottom}</span>}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="loan-actions">
                    <button
                      type="button"
                      className="btn-details"
                      onClick={() => setSelectedLoan(loan)}
                    >
                      Մանրամասն <span className="btn-chevron">›</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="biznes-footer">
        <div className="container">
          <div className="footer-updated">Թարմացվել է՝ 04/10/2024 12:10</div>

          <div className="footer-grid">
            <div className="footer-brand-col">
              <div className="footer-logo">
                <span>evoca</span>
                <span className="footer-logo-sub">BANK</span>
              </div>
              <p className="footer-address">
                ք. Երևան, 0010,
                <br />
                Հանրապետության 44/2
              </p>
              <p className="footer-license">
                Evocabank-ը վերահսկվում է
                <br />
                Հայաստանի Հանրապետության
                <br />
                Կենտրոնական բանկի կողմից
              </p>
              <p className="footer-copyright">
                1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ
                <br />
                ՊԱՇՏՊԱՆՎԱԾ ԵՆ
              </p>
            </div>

            <div className="footer-col">
              <h3 className="footer-col-title">Բանկի մասին</h3>
              <ul>
                {FOOTER_BANK_LINKS.map((link) => (
                  <li key={link}>
                    <a href={`#${link}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-col-title">Օգտակար հղումներ</h3>
              <ul>
                {FOOTER_USEFUL_LINKS.map((link) => (
                  <li key={link}>
                    <a href={`#${link}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-col">
              <h3 className="footer-col-title">Այլ հղումներ</h3>
              <ul>
                {FOOTER_OTHER_LINKS.map((link) => (
                  <li key={link}>
                    <a href={`#${link}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-contact-col">
              <div className="footer-socials" aria-label="Սոցիալական ցանցեր">
                <span>f</span>
                <span>◎</span>
                <span>▶</span>
                <span>in</span>
              </div>

              <div className="store-badges">
                <div className="store-badge">Download on the App Store</div>
                <div className="store-badge">GET IT ON Google Play</div>
              </div>

              <div className="footer-contact-links">
                <a href="#branches">Բանկի հասցեները և աշխատաժամերը</a>
                <a href="#contact">Կապ մեզ հետ</a>
                <a href="tel:+37410605555">+374 10 605555</a>
                <a href="tel:8444">8444</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-disclaimer-bar">
          <div className="container footer-disclaimer-inner">
            <p className="footer-disclaimer-text">
              Հարգելի՛ այցելու, Կայքի որևէ տեղեկատվության վերաբերյալ տարբեր կարծիքներ չքննարկելու, ինչպես նաև առանձին դեպքերում ոչ
              ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով։ «Եվոկաբանկ» ՓԲԸ-ն պատասխանատվություն չի կրում իր
              ինտերնետային կայքում հղված այլ ինտերնետային կայքերի բովանդակության ստուգության և արժանահավատության, այնտեղ տեղադրված գովազդների,
              ինչպես նաև երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետևանքների համար։
            </p>

            <div className="footer-badges" aria-label="Գործընկեր և կարգավորող նշաններ">
              <span className="mini-badge">FININFO</span>
              <span className="mini-badge">abcfinance.am</span>
              <span className="mini-badge">ARCA</span>
              <span className="mini-badge">ACRA</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Call & Online Chat Widget */}
      <div className="floating-widgets">
        <a href="tel:+37410605555" className="floating-call-btn" aria-label="Զանգահարել">
          📞
        </a>

        {chatOpen && (
          <div className="chat-popup">
            <div className="chat-popup-header">
              <span>Առցանց խորհրդատվություն</span>
              <button type="button" onClick={() => setChatOpen(false)}>
                ✕
              </button>
            </div>
            <p className="chat-popup-body">
              Բարև Ձեզ։ Ինչպե՞ս կարող ենք օգնել բիզնես վարկի ընտրության հարցում։
            </p>
          </div>
        )}

        <button
          type="button"
          className="floating-chat-btn"
          onClick={() => setChatOpen((prev) => !prev)}
        >
          Գրեք մեզ, մենք օնլայն ենք !
        </button>
      </div>

      {/* Loan Details Modal */}
      {selectedLoan && (
        <div className="loan-modal-backdrop" onClick={() => setSelectedLoan(null)}>
          <div className="loan-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="loan-modal-close"
              onClick={() => setSelectedLoan(null)}
              aria-label="Փակել"
            >
              ✕
            </button>
            <h3>{selectedLoan.title}</h3>
            <p>{selectedLoan.description}</p>

            {selectedLoan.metrics.length > 0 && (
              <div className="modal-metrics-grid">
                {selectedLoan.metrics.map((m, i) => (
                  <div key={i} className="modal-metric-card">
                    <small>{m.top}</small>
                    <strong>{m.value}</strong>
                    <span>{m.bottom}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}