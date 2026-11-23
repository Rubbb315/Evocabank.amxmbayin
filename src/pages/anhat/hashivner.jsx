import { useState } from "react";
import "./App.css";

const TABS = [
  { id: "saving", label: "Evoca խնայողական հաշիվ" },
  { id: "opening", label: "Հաշիվների բացում և սպասարկում" },
  { id: "metal", label: "Առարկայազուրկ մետաղական հաշիվներ" },
  { id: "nonresident", label: "Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում" },
];

const NAV_ITEMS = [
  "Վարկեր",
  "Քարտեր",
  "Ավանդներ",
  "Հաշիվներ",
  "Փոխանցումներ",
  "Արժեթղթեր",
  "EvocaSALARY",
  "EvocaTOUCH",
];

export default function App() {
  const [activeTab, setActiveTab] = useState("saving");

  const currentTabLabel =
    TABS.find((tab) => tab.id === activeTab)?.label || TABS[0].label;

  return (
    <div className="evoca-accounts-page">
      <header className="account-header">
        <div className="account-header-top">
          <div className="account-logo">
            <span>V</span>
          </div>

          <nav className="account-navigation" aria-label="Գլխավոր մենյու">
            {NAV_ITEMS.map((item) => (
              <span
                key={item}
                className={item === "Հաշիվներ" ? "selected" : undefined}
              >
                {item}
              </span>
            ))}
          </nav>

          <button type="button" className="online-button">
            EvocaONLINE
          </button>

          <button
            type="button"
            className="menu-icon"
            aria-label="Բացել մենյուն"
          >
            ☰
          </button>
        </div>
      </header>

      <div className="account-subnavigation" role="tablist" aria-label="Հաշիվների բաժիններ">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={activeTab === tab.id ? "active" : undefined}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <aside className="account-social" aria-label="Սոցիալական ցանցեր">
        <span>f</span>
        <span>in</span>
        <span>ig</span>
        <span>yt</span>
      </aside>

      <main className="account-main">
        <div className="account-breadcrumb">
          Գլխավոր / Անհատ / Հաշիվներ / <strong>{currentTabLabel}</strong>
        </div>

        <section className="account-content">
          {activeTab === "saving" && (
            <div className="account-tab-panel">
              <h1>Evoca խնայողական հաշիվ</h1>

              <h2>Ինչո՞ւ Evoca խնայողական հաշիվ</h2>

              <h3>Գումարի աճ</h3>
              <p>
                Հաշվիդ դրական մնացորդի նկատմամբ տոկոսները հաշվարկվում են ամեն օր։
              </p>

              <h3>Միշտ հասանելիություն</h3>
              <p>
                Այս պահին հարկավոր չէ գումարդ։ Փոխանցիր այն Evocabank-ում գործող
                քո այլ հաշվին և օգտագործիր։
              </p>

              <h3>Ոչ մի սահմանափակում</h3>
              <p>
                Այստեղ մի փոքր ինչ, հաջողիր ամեն ամիս ավելին շատ։ Չկա պարտադիր
                ժամկետ կամ համալրման նվազագույն գումար։
              </p>

              <h3>Նախընտրելի արժույթ</h3>
              <p>
                Բացիր խնայողական հաշիվ ՀՀ դրամով, ԱՄՆ դոլարով կամ եվրոյով։
              </p>

              <div className="account-highlight-box">
                <h3>Ինչո՞ւ սկսել գումար կուտակել հենց այսօր</h3>
                <p>Քանի որ՝</p>
                <ul>
                  <li>Հաշվի բացումն ու սպասարկումն անվճար են։</li>
                  <li>Բացման և համալրման նվազագույն գումար չկա։</li>
                  <li>Գործարքի նվազագույն չափ չկա։</li>
                  <li>Խնայելու պարտադիր ժամկետ չկա։</li>
                  <li>Հաշիվը կարող ես համալրել ցանկացած պահի։</li>
                </ul>
              </div>

              <h2>Անհրաժեշտ տեղեկատվություն</h2>

              <div className="account-info-block">
                <h4>Անհրաժեշտ փաստաթղթեր</h4>
                <ul>
                  <li>Հաշվի բացման դիմում</li>
                  <li>Անձը հաստատող փաստաթուղթ</li>
                  <li>Բանկի պահանջով այլ փաստաթղթեր</li>
                </ul>
              </div>

              <div className="account-info-block">
                <h4>Երաշխավորված ավանդների սահմանաչափերը</h4>
                <p>
                  Բանկում բացված բանկային հաշիվների դրամական միջոցները
                  երաշխավորվում են ՀՀ օրենսդրությամբ սահմանված կարգով։
                </p>
                <ul>
                  <li>Միայն դրամային ավանդ՝ մինչև 16 միլիոն դրամ։</li>
                  <li>Միայն արտարժութային ավանդ՝ մինչև 7 միլիոն դրամ։</li>
                </ul>
              </div>

              <div className="account-info-block">
                <h4>Խնայողական հաշիվների սպասարկում</h4>
                <p>
                  Հաշիվների սպասարկումը կարգավորվում է ՀՀ օրենսդրությամբ և բանկի
                  պայմաններով։
                </p>
              </div>

              <div className="account-info-block">
                <h4>Խնայողական հաշվի պայմանագրի լուծման պայմաններ</h4>
                <p>Հաշվի պայմանագիրը կարող է լուծվել պայմանագրով սահմանված կարգով։</p>
              </div>

              <div className="account-info-block">
                <h4>Հաշիվ բացելու ընթացակարգ</h4>
                <ul>
                  <li>Հաշիվը կարող ես բացել դրամով, դոլարով և եվրոյով։</li>
                  <li>Հաշիվը կարող ես բացել մասնաճյուղում։</li>
                </ul>
              </div>

              <h2>Փաստաթղթեր</h2>
              <div className="account-documents">
                <a
                  href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Համալիր բանկային ծառայությունների մատուցման պայմաններ
                  <span>↗</span>
                </a>
                <a
                  href="https://www.evoca.am/hy/saving-account"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Խնայողական հաշվի պայմաններ և սակագներ
                  <span>↗</span>
                </a>
              </div>
            </div>
          )}

          {activeTab === "opening" && (
            <div className="account-tab-panel">
              <h1>Հաշիվների բացում և սպասարկում</h1>
              <p>
                Հաշիվներ բացելու համար կարող ես դիմել Գլխամասային գրասենյակ կամ
                ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի» մասնաճյուղի)։
              </p>

              <div className="account-info-block">
                <h4>Անհրաժեշտ փաստաթղթեր</h4>
                <ul>
                  <li>Հաշվի բացման դիմում՝ բանկի ձևանմուշի համաձայն։</li>
                  <li>
                    Անձնագիր և սոցիալական քարտ (կամ այն չունենալու մասին
                    տեղեկանք), կամ միայն նույնականացման քարտ։
                  </li>
                  <li>Այլ փաստաթղթեր՝ բանկի պահանջով։</li>
                </ul>
              </div>

              <h2>Սպասարկում և գործառնություններ</h2>
              <ul>
                <li>
                  Սպասարկումը կատարվում է գործառնական օրվա ընթացքում՝{" "}
                  <strong>09:30–17:00</strong> (առանց ընդմիջման)։
                </li>
                <li>
                  Հաշվի սպասարկումն անվճար է, նվազագույն մնացորդ չի պահանջվում։
                </li>
                <li>
                  Կանխիկ մուտքագրումը հաշվին նստում է նույն բանկային օրը, իսկ
                  մինչև <strong>15:30</strong> ներկայացված վճարման
                  հանձնարարականները կատարվում են նույն բանկային օրը։
                </li>
                <li>
                  Հնարավոր է մուտքագրել և ստանալ դրամական միջոցներ, կատարել
                  փոխանցումներ, փոխարկել արտարժույթ և մարել վարկեր։
                </li>
              </ul>

              <div className="account-info-block">
                <h4>Երաշխավորում և պայմանագրի դադարեցում</h4>
                <p>
                  Գործում է ՀՀ օրենսդրությամբ սահմանված ավանդների երաշխավորման
                  կարգը, իսկ զրոյական մնացորդի և 6 ամիս գործառնություն
                  չկատարելու դեպքում պայմանագիրը կարող է լուծվել։
                </p>
              </div>
            </div>
          )}

          {activeTab === "metal" && (
            <div className="account-tab-panel">
              <h1>Առարկայազուրկ մետաղական հաշիվներ</h1>
              <p>
                Պահանջարկի հաշիվ՝ առարկայազուրկ ոսկու հաշվառման համար, որը
                թույլ է տալիս կատարել անկանխիկ խնայողություններ և օգտվել
                միջազգային շուկայում ոսկու գնի աճից։
              </p>

              <div className="account-highlight-box">
                <h3>Հիմնական հնարավորություններ</h3>
                <ul>
                  <li>
                    Ոսկու վաճառք բանկին կամ փոխանցում քո կամ այլ անձի մետաղական
                    հաշվին (նույն կամ այլ բանկում)։
                  </li>
                  <li>
                    Մետաղական հաշիվը կարող է գրավադրվել (օրինակ՝ ոսկով
                    ապահովված վարկի նպատակով)։
                  </li>
                </ul>
              </div>

              <div className="account-info-block">
                <h4>Անհրաժեշտ փաստաթղթեր</h4>
                <ul>
                  <li>Հաշվի բացման դիմում։</li>
                  <li>
                    Անձնագիր և սոցիալական քարտ (կամ դրա բացակայության տեղեկանք)
                    կամ նույնականացման քարտ։
                  </li>
                  <li>Այլ փաստաթղթեր՝ բանկի պահանջով։</li>
                </ul>
              </div>

              <div className="account-info-block">
                <h4>Կարևոր տեղեկատվություն</h4>
                <p>
                  Առարկայազուրկ մետաղական հաշիվները <strong>չեն հատուցվում</strong>{" "}
                  Ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից։
                </p>
              </div>
            </div>
          )}

          {activeTab === "nonresident" && (
            <div className="account-tab-panel">
              <h1>Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</h1>
              <p>
                Հաշիվներ բացելու հնարավորություն՝ առանց Հայաստան կամ մասնաճյուղ
                այցելելու՝ հեռավար կարգով (ինչպես ֆիզիկական, այնպես էլ
                իրավաբանական անձանց համար)։
              </p>

              <div className="account-highlight-box">
                <h3>Առավելություններ և արժույթներ</h3>
                <ul>
                  <li>
                    Prime կարգավիճակի հնարավորություն, անձնական մենեջերի/օգնականի
                    աջակցություն և սպասարկում աշխարհի ցանկացած կետից։
                  </li>
                  <li>
                    Հասանելի արժույթներ՝{" "}
                    <strong>USD, EUR, RUB, AED, GBP, CHF, CNY, CAD</strong>։
                  </li>
                </ul>
              </div>

              <div className="account-info-block">
                <h4>Անհրաժեշտ փաստաթղթեր (ֆիզիկական անձանց համար)</h4>
                <ul>
                  <li>Անձնագիր և միջազգային անձնագիր։</li>
                  <li>
                    Եկամտի աղբյուրը հաստատող փաստաթղթեր (օրինակ՝ նախորդ տարվա
                    հարկային հայտարարագիր, անշարժ գույքի վաճառքի/վարձակալության
                    պայմանագիր, բաժնետոմսեր կամ արժեթղթեր)։
                  </li>
                </ul>
              </div>

              <div className="account-info-block">
                <h4>Բացման ընթացակարգ և սակագներ</h4>
                <ul>
                  <li>
                    Փաստաթղթերի ուղարկում՝ <strong>primeonline@evoca.am</strong>{" "}
                    հասցեով և առցանց նույնականացում տեսազանգով։
                  </li>
                  <li>
                    Ակտիվացման նվազագույն փոխանցում բանկի դրական որոշումից հետո՝{" "}
                    <strong>50 USD</strong>։
                  </li>
                  <li>
                    Հաշվի բացում՝ <strong>50,000 ՀՀ դրամ</strong>, տարեկան
                    սպասարկում՝ <strong>250,000 ՀՀ դրամ</strong>, փակում՝{" "}
                    <strong>0 ՀՀ դրամ</strong>, անկանխիկ մուտքագրում/փոխանցում՝{" "}
                    <strong>0.5%</strong>։
                  </li>
                </ul>
              </div>
            </div>
          )}
        </section>
      </main>

      <div className="account-floating">
        <button type="button" aria-label="Զանգ">
          ☎
        </button>
        <div>Գրեք մեզ, մենք այստեղ ենք։</div>
      </div>

      <footer className="account-footer">
        <div className="account-footer-inner">
          <div>
            <div className="footer-logo">V</div>
            <p>
              <strong>EVOCABANK</strong>
            </p>
            <p>ք. Երևան, Հանրապետության 44/2</p>
          </div>
          <div>
            <strong>Կապ</strong>
            <p>+374 10 605555</p>
            <p>Կարճ համար՝ 8444</p>
          </div>
          <div>
            <strong>Ծառայություններ</strong>
            <p>Վարկեր</p>
            <p>Քարտեր</p>
            <p>Ավանդներ</p>
          </div>
          <div>
            <strong>Ավելին</strong>
            <p>Հաշիվներ</p>
            <p>Փոխանցումներ</p>
            <p>Արժեթղթեր</p>
          </div>
        </div>
        <div className="account-footer-bottom">
          1990 - 2026 © Բոլոր իրավունքները պաշտպանված են
        </div>
      </footer>
    </div>
  );
}