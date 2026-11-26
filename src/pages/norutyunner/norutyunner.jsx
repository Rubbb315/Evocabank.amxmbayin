import React, { useState } from 'react';
import './norutyunner.css';

const CATEGORIES = [
  'Գլխավոր',
  'Բանկային',
  'Հարցազրույցներ',
  'Պրոդուկտներ',
  'Նորարարություններ',
  'Կենսակերպ',
  'Մրցանակներ',
  'CSR',
  'Այլ',
];

const NEWS_DATA = {
  featuredTop: {
    id: 'featured-1',
    category: 'Բանկային',
    title: 'Evocabank-ը թողարկել է պարտատոմսեր՝ դրամով, դոլարով ու եվրոյով',
    description:
      'Evoca-ն թողարկել է դրամով 10.5%, դոլարով 5.5% և եվրոյով 4% եկամտաբերությամբ պարտատոմսեր՝ ֏15 մլրդ, $15 մլն և €5 մլն ընդհանուր ծավալով։',
    date: '09.11.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17942090889803/780x585.png',
  },
  mainSectionLeft: {
    id: 'main-left-1',
    category: 'Մրցանակներ',
    title: 'Evocabank-ը՝ AMX AWARDS 2026-ի մրցանակակիր',
    description:
      'Evocabank-ը AMX AWARDS 2026-ի շրջանակում արժանացել է «Պետական պարտատոմսերի համակարգի լավագույն շուկա ստեղծող» մրցանակին։',
    date: '18.06.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17815943976247/616x462.png',
  },
  mainSectionRight: [
    {
      id: 'grid-1',
      category: 'Մրցանակներ',
      title: 'Evocabank․ Լավագույն ՓՄՁ բանկը Հայաստանում՝ երկրորդ...',
      date: '08.05.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17784860353078/450x295.png',
    },
    {
      id: 'grid-2',
      category: 'Պրոդուկտներ',
      title: 'Քո Crypto հաշիվը՝ արդեն EvocaTOUCH-ում',
      date: '27.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17722002491716/450x295.png',
    },
    {
      id: 'grid-3',
      category: 'Հարցազրույցներ',
      title: 'Կարեն Եղիազարյանի հարցազրույցը Los Angeles Times...',
      date: '25.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17720089281517/450x295.png',
    },
    {
      id: 'grid-4',
      category: 'Բանկային',
      title: 'Evocabank-ի «Արաբկիր» մասնաճյուղն արդեն բաց է',
      date: '13.01.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17683825017248/450x295.jpg',
    },
  ],
  featuredBottom: {
    id: 'featured-2',
    category: 'Բանկային',
    title: 'Գործարքների արգելափակում 1 կոճակով',
    description:
      'Հուլիսի 1-ից EvocaTOUCH հավելվածում ու EvocaONLINE համակարգում հասանելի կլինի նոր՝ «Գործարքների արգելափակում» ֆունկցիոնալը։',
    date: '01.06.2026',
    image: 'https://www.evoca.am/images-cache/news/1/17852444643548/780x585.png',
  },
  bottomGrid: [
    {
      id: 'bottom-1',
      category: 'Կենսակերպ',
      title: 'Evocabank-ը նոր գույներ է տալիս մեր քաղաքին',
      date: '13.06.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17812556342544/438x328.png',
    },
    {
      id: 'bottom-2',
      category: 'Բանկային',
      title: 'ESG կառավարման համակարգը Evocabank-ում',
      date: '10.04.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17757342882486/438x328.png',
    },
    {
      id: 'bottom-3',
      category: 'Բանկային',
      title: 'Evocabank-ը միացել է AmCham Armenia-ին',
      date: '10.02.2026',
      image: 'https://www.evoca.am/images-cache/news/1/17707319421286/438x328.png',
    },
  ],
};

const Norutyunner = () => {
  const [activeCategory, setActiveCategory] = useState('Գլխավոր');
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const allItems = [
    NEWS_DATA.featuredTop,
    NEWS_DATA.mainSectionLeft,
    ...NEWS_DATA.mainSectionRight,
    NEWS_DATA.featuredBottom,
    ...NEWS_DATA.bottomGrid,
  ];

  const isFiltered = activeCategory !== 'Գլխավոր' || searchQuery.trim() !== '';

  const filteredItems = allItems.filter((item) => {
    const matchesCat =
      activeCategory === 'Գլխավոր' ||
      activeCategory === 'Բոլորը' ||
      item.category === activeCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="evoca-news-page">
      {/* Top Bar */}
      <header className="evoca-header">
        <div className="evoca-top-bar">
          <div className="evoca-container top-bar-inner">
            <nav className="top-nav-links">
              <a href="#anhat">Անհատ</a>
              <a href="#biznes">Բիզնես</a>
              <a href="#akntartayin">Ակնթարթային վճարումներ</a>
              <a href="#mermasin">Մեր մասին</a>
              <a href="#norutyunner" className="active">
                Նորություններ
              </a>
              <a href="#blog">Բլոգ</a>
              <a href="#kariera">Կարիերա</a>
            </nav>

            <div className="top-bar-actions">
              <div className="dropdown-trigger">
                <span>Առցանց հայտեր</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="dropdown-trigger">
                <span>Հետադարձ կապ</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path
                    d="M1 1L5 5L9 1"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="top-icons">
                <button className="icon-btn" title="Մասնաճյուղեր և բանկոմատներ">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </button>
                <button className="icon-btn" title="Հատուկ կարիքներով անձանց համար">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
                  </svg>
                </button>
                <button className="icon-btn" title="Լեզու">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </button>
                <button
                  className="icon-btn"
                  title="Որոնում"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
                  </svg>
                </button>
                <button className="icon-btn menu-bars" title="Մենյու">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Brand Bar */}
        <div className="evoca-brand-bar">
          <div className="evoca-container brand-bar-inner">
            <a href="/" className="evoca-logo">
              evoca
            </a>
            <div className="brand-right">
              {searchOpen && (
                <input
                  type="text"
                  className="news-search-input"
                  placeholder="Որոնել նորություններ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              )}
              <a href="#evocaonline" className="evoca-online-btn">
                EvocaONLINE
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs & Page Title */}
      <div className="evoca-container">
        <div className="breadcrumbs">
          <a href="/" className="home-icon" aria-label="Գլխավոր">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </a>
          <span className="breadcrumb-dot">•</span>
          <span className="breadcrumb-current">Նորություններ</span>
        </div>

        <h1 className="page-title">Նորություններ</h1>

        {/* Filter Pills */}
        <div className="filter-bar">
          <div className="filter-pills">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                className={`filter-pill ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <button
            className={`filter-pill all-btn ${activeCategory === 'Բոլորը' ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory('Գլխավոր');
              setSearchQuery('');
            }}
          >
            Բոլորը <span>&gt;</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      {isFiltered ? (
        <section className="evoca-container filtered-section">
          {filteredItems.length === 0 ? (
            <div className="empty-state">Այս բաժնում նորություններ չեն գտնվել։</div>
          ) : (
            <div className="filtered-grid">
              {filteredItems.map((item) => (
                <article key={item.id} className="news-card">
                  <div className="card-img-wrap">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="card-category-line">
                    <span className="vertical-bar purple"></span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  {item.description && <p className="card-desc">{item.description}</p>}
                  <span className="card-date">{item.date}</span>
                </article>
              ))}
            </div>
          )}
        </section>
      ) : (
        <>
          {/* 1. Top Featured Banner */}
          <section className="featured-banner-section">
            <div className="evoca-container featured-banner-inner">
              <div className="featured-text-col">
                <div className="featured-badge-row">
                  <span className="purple-square"></span>
                  <span className="featured-category">{NEWS_DATA.featuredTop.category}</span>
                </div>
                <h2 className="featured-title">{NEWS_DATA.featuredTop.title}</h2>
                <p className="featured-desc">{NEWS_DATA.featuredTop.description}</p>
                <span className="featured-date">{NEWS_DATA.featuredTop.date}</span>
              </div>

              <div className="featured-img-col">
                <div className="corner-bracket top-left"></div>
                <div className="featured-img-box">
                  <img
                    src={NEWS_DATA.featuredTop.image}
                    alt={NEWS_DATA.featuredTop.title}
                  />
                </div>
                <div className="corner-bracket bottom-left"></div>
              </div>
            </div>
          </section>

          {/* 2. Asymmetric Split News Grid */}
          <section className="evoca-container split-news-section">
            {/* Left Large Card */}
            <article className="split-left-card">
              <div className="split-left-img-wrap">
                <div className="yellow-corner-block"></div>
                <img
                  src={NEWS_DATA.mainSectionLeft.image}
                  alt={NEWS_DATA.mainSectionLeft.title}
                />
              </div>
              <div className="card-category-line">
                <span className="vertical-bar yellow"></span>
                <span>{NEWS_DATA.mainSectionLeft.category}</span>
              </div>
              <h3 className="split-left-title">{NEWS_DATA.mainSectionLeft.title}</h3>
              <p className="split-left-desc">{NEWS_DATA.mainSectionLeft.description}</p>
              <span className="card-date">{NEWS_DATA.mainSectionLeft.date}</span>
            </article>

            {/* Right 2x2 Small Cards Grid */}
            <div className="split-right-grid">
              {NEWS_DATA.mainSectionRight.map((item) => (
                <article key={item.id} className="news-card">
                  <div className="card-img-wrap small-ratio">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="card-category-line">
                    <span className="vertical-bar purple"></span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <span className="card-date">{item.date}</span>
                </article>
              ))}
            </div>
          </section>

          {/* 3. Second Featured Banner (Reversed Layout) */}
          <section className="featured-banner-section reversed">
            <div className="evoca-container featured-banner-inner reversed-inner">
              <div className="featured-img-col">
                <div className="corner-bracket top-right"></div>
                <div className="featured-img-box">
                  <img
                    src={NEWS_DATA.featuredBottom.image}
                    alt={NEWS_DATA.featuredBottom.title}
                  />
                </div>
                <div className="corner-bracket bottom-right"></div>
              </div>

              <div className="featured-text-col right-aligned-text">
                <div className="featured-badge-row">
                  <span className="purple-square"></span>
                  <span className="featured-category">{NEWS_DATA.featuredBottom.category}</span>
                </div>
                <h2 className="featured-title">{NEWS_DATA.featuredBottom.title}</h2>
                <p className="featured-desc">{NEWS_DATA.featuredBottom.description}</p>
                <span className="featured-date">{NEWS_DATA.featuredBottom.date}</span>
              </div>
            </div>
          </section>

          {/* 4. Bottom 3-Column Grid */}
          <section className="evoca-container bottom-three-section">
            <div className="three-col-grid">
              {NEWS_DATA.bottomGrid.map((item) => (
                <article key={item.id} className="news-card">
                  <div className="card-img-wrap medium-ratio">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="card-category-line">
                    <span className="vertical-bar purple"></span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="card-title">{item.title}</h3>
                  <span className="card-date">{item.date}</span>
                </article>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="evoca-footer">
        <div className="footer-top-strip">
          <div className="evoca-container footer-strip-inner">
            <span>Թարմացվել է՝ 19.11.2026 19:51</span>
          </div>
        </div>

        <div className="evoca-container footer-main">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              evoca<span>BANK</span>
            </div>
            <p className="footer-address">
              ՀՀ, ք․ Երևան, 0010,
              <br />
              Հանրապետության 44/2
            </p>
            <p className="footer-legal">
              Բանկը վերահսկվում է Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից
            </p>
            <p className="footer-copyright">© «Էվոկաբանկ» ՓԲԸ</p>
          </div>

          <div className="footer-col">
            <h4>Բանկի մասին</h4>
            <ul>
              <li><a href="#about">Մեր մասին</a></li>
              <li><a href="#leadership">Ղեկավարություն</a></li>
              <li><a href="#branches">Բաժնետերեր</a></li>
              <li><a href="#reports">Հաշվետվություններ</a></li>
              <li><a href="#normative">Իրավական ակտեր</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Օգտակար հղումներ</h4>
            <ul>
              <li><a href="#rights">Հաճախորդի իրավունքները</a></li>
              <li><a href="#consumer">Սպառողի տեղեկատվական ամփոփագրեր</a></li>
              <li><a href="#security">Ֆինանսական անվտանգություն</a></li>
              <li><a href="#calculator">Վարկային հաշվիչ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Այլ հղումներ</h4>
            <ul>
              <li><a href="#online">EvocaONLINE</a></li>
              <li><a href="#bonds">Պարտատոմսեր</a></li>
              <li><a href="#tariffs">Նախկին գործող դրույքներ</a></li>
              <li><a href="#procurement">Գնումներ</a></li>
              <li><a href="#faq">ՀՏՀ</a></li>
            </ul>
          </div>

          <div className="footer-col social-col">
            <div className="social-links">
              <a href="#fb" aria-label="Facebook">f</a>
              <a href="#ig" aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#yt" aria-label="YouTube">▶</a>
              <a href="#in" aria-label="LinkedIn">in</a>
            </div>

            <div className="store-badges">
              <a href="#appstore" className="store-btn">
                <span className="store-small">Download on the</span>
                <span className="store-big">App Store</span>
              </a>
              <a href="#googleplay" className="store-btn">
                <span className="store-small">GET IT ON</span>
                <span className="store-big">Google Play</span>
              </a>
            </div>

            <div className="footer-contact-links">
              <a href="#atm">Բանկի մասնաճյուղեր և բանկոմատներ</a>
              <a href="#contact">Կապ մեզ հետ</a>
              <a href="tel:+37410605555">+374 10 605555</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Norutyunner;