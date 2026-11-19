
import React from "react";
import "./kariera.css";

const videos = [
  {
    title: "Evoca New Year Corporate Party 2022",
    image: "https://www.evoca.am/images-cache/culture_sliders/1/16760069357338/744x419.jpg",
  },
  {
    title: "EVOCAISLAND Evoca Summer Party 2022",
    image: "https://www.evoca.am/images-cache/culture_sliders/1/16760071256254/744x419.jpg",
  },
  {
    title: "Attention!!! You have never seen anything like this",
    image: "https://www.evoca.am/images-cache/culture_sliders/1/16335942010669/744x419.png",
  },
  {
    title: "Purple photoshoot with Evocabank",
    image: "https://www.evoca.am/images-cache/culture_sliders/1/16196069660929/744x419.jpg",
  },
  {
    title: "Welcome to Evocabank!",
    image: "https://www.evoca.am/images-cache/culture_sliders/1/16196066065187/744x419.jpg",
  },
  {
    title: "Evoca Corporate Party 2021",
    image: "https://www.evoca.am/images-cache/culture_sliders/1/16412988100187/744x419.jpg",
  },
  {
    title: "Evocabank neon art corporate party",
    image: "https://www.evoca.am/images-cache/culture_sliders/1/16196059430279/744x419.jpg",
  },
];

const employees = [
  {
    words: ["Թրենդային", "Պահանջված", "Ուրախ"],
    name: "Հարություն Սահակյան",
    job: "Անվտանգության մասնագետ",
  },
  {
    words: ["Դինամիկ", "Պրպտող", "Զարգացող"],
    name: "Լիլիթ Գաբոյան",
    job: "Գլխավոր ֆինանսական տնօրեն",
  },
  {
    words: ["Կրեատիվ", "Նորարար", "Մանուշակագույն"],
    name: "Ալլա Զաքարյան",
    job: "Վճարային գործիքների մասնագետ",
  },
  {
    words: ["Գույներ", "Էմոցիաներ", "Նորարարություններ"],
    name: "Գայանե Առաքելյան",
    job: "Մասնաճյուղի կառավարիչ",
  },
];

function Kariera() {
  return (
    <main className="evoca-page">

      <div className="top-menu">
        <div className="top-links">
          <a>Անհատ</a>
          <a>Բիզնես</a>
          <a>Ակնթարթային վճարումներ</a>
          <a>Մեր մասին</a>
          <a>Նորություններ</a>
          <a>Բլոգ</a>
          <a className="active">Կարիերա</a>
        </div>
      </div>

      <header className="main-header">
        <div className="evoca-logo">
          <span>e</span>voca
        </div>

        <div className="header-links">
          <a>Evoca Լայֆ</a>
          <a>Աշխատանք և առավելություններ</a>
        </div>

        <a
          className="online-button"
          href="https://online.evoca.am/"
        >
          EvocaONLINE
        </a>
      </header>

      <nav className="purple-menu">
        <a className="selected">Մշակույթ</a>
        <a>Առավելություններ</a>
        <a>Հաճախ տրվող հարցեր</a>
        <a>Ինչպես ընդունվել աշխատանքի Evocabank-ում</a>
      </nav>

      {/* MAIN IMAGE */}
      <section className="hero-section">
        <img
          src="https://www.evoca.am/images-cache/culture_sliders/1/16760069357338/744x419.jpg"
          alt="Evocabank Culture"
          className="hero-image"
        />

        <div className="hero-card">
          <h1>Մշակույթ</h1>
          <p>
            Evoca-ում աշխատելը հաճելի է: Առօրյան լցված է
            նորարարություններով: Այստեղ տաղանդները
            անընդհատ զարգանում են ու կատարելագործվում:
          </p>
        </div>
      </section>

      {/* WHY EVOCA */}
      <section className="why-section">
        <div className="why-text">
          <span className="purple-label">EVOCA LIFE</span>

          <h2>Ինչո՞ւ աշխատել Evoca-ում</h2>

          <p>
            Բացահայտի՛ր, թե ինչն է Evoca-ն դարձնում
            այդքան յուրահատուկ: Աշխատակիցներն ուրախ են,
            մոտիվացված, իսկ առավելությունների մեծ
            փաթեթն օգնում է հոգ տանել իրենց և ընտանիքների մասին:
          </p>
        </div>

        <img
          src="https://www.evoca.am/file_manager/Career/evoca-girl.jpg"
          alt="Evoca աշխատակից"
          className="why-image"
        />
      </section>

      {/* CULTURE */}
      <section className="culture-section">
        <span className="purple-label">OUR CULTURE</span>

        <h2>Մշակույթ</h2>

        <p>
          Evoca-ում մենք ոչ միայն անում ենք այն, ինչ սիրում ենք,
          այլ նաև կյանքից վերցնում ենք ամեն ինչ:
          Անընդհատ սովորում ենք, մեր փորձը կիսում ենք
          գործընկերների հետ, սպորտով ենք զբաղվում և
          հանգստանում: Միացե՛ք մեզ:
        </p>
      </section>

      {/* VIDEOS */}
      <section className="videos-section">
        <h2>Մեր թիմի կյանքը</h2>

        <div className="videos-grid">
          {videos.map((video, index) => (
            <div className="video-card" key={index}>
              <div className="video-placeholder">
                <img
                  src={video.image}
                  alt={video.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  ▶
                </span>
              </div>

              <h3>{video.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* EMPLOYEES */}
      <section className="employees-section">
        <span className="purple-label">EVOCATEAM</span>

        <h2>
          Հարցրո՛ւ մեր թիմին.
          <br />
          «Ինչպիսի՞ն է Evoca-ն՝ 3 բառով»
        </h2>

        <div className="employees-grid">
          {employees.map((employee, index) => (
            <div className="employee-card" key={index}>
              <div className="employee-words">
                {employee.words.map((word, i) => (
                  <span key={i}>{word}</span>
                ))}
              </div>

              <h3>{employee.name}</h3>
              <p>{employee.job}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="evoca-footer">
        <div className="evoca-logo">
          <span>e</span>voca
        </div>

        <p>
          © 2026 Evocabank. Բոլոր իրավունքները պաշտպանված են։
        </p>
      </footer>

      {/* CHAT */}
      <a
        href="https://www.evoca.am/"
        className="chat-button"
      >
        Գրեք մեզ, մենք օնլայն ենք !
      </a>

    </main>
  );
}

export default Kariera;
