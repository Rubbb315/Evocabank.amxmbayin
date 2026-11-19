import React, { useState } from 'react';
import './avandner.css';

const depositsData = [
  {
    id: 'classical-deposit',
    title: 'Դասական ավանդ',
    subtitle:
      'Ձեր աճող ապագայի համար առաջարկում ենք ավանդ՝ ճկուն հնարավորություններով: Ձեր խնայողությունները ներդրեք «Դասական» ավանդով՝ կայուն և բարձր եկամտաբերությամբ։',
    tags: ['all', 'deposits'],
    theme: 'theme-deposit-1',
    stats: [
      { prefix: 'նվազագույն', value: '100,000 ֏', label: 'Գումար' },
      { prefix: '', value: '31-1,825 օր', label: 'Ժամկետ' },
      { prefix: 'մինչև', value: '10.5% ֏', label: 'Տոկոսադրույք' },
      { prefix: 'սկզբնական', value: '100,000 ֏', label: 'Համալրման նվազագույն շեմ' }
    ]
  },
  {
    id: 'kids-deposit',
    title: 'Մանկական ավանդ',
    subtitle:
      'Ձեր երեխայի աճող ապագայի համար առաջարկում ենք ներդնել «Մանկական» ավանդը: «Մանկական» ժամկետային ավանդն ընդունվում նաև ծնողական խնամքով՝ երեխաների անունով ներդնելու պայմանով։',
    tags: ['all', 'deposits'],
    theme: 'theme-deposit-2',
    stats: [
      { prefix: 'նվազագույն', value: '100,000 ֏', label: 'Գումար' },
      { prefix: '', value: '18 լրանալը', label: 'Ժամկետ' },
      { prefix: '', value: '9.5% ֏', label: 'Տոկոսադրույք' },
      { prefix: 'նվազագույն', value: '40,000 ֏', label: 'Համալրման նվազագույն շեմ' }
    ]
  },
  {
    id: 'evoca-online-deposit',
    title: 'Ավանդ Evoca Online',
    subtitle:
      'Ցանկանում եք ներդրնել ավանդ բարձր տոկոսադրույքով, բացթողնե՞լ ժամանակը: Բացեք EvocaONLINE ավանդ՝ առանց բանկ այցելելու: Իսկ մնացած բոլոր փաստաթղթերը կապահովենք մեզ մոտ:',
    tags: ['all', 'deposits'],
    theme: 'theme-deposit-3',
    stats: [
      { prefix: 'նվազագույն', value: '100,000 ֏', label: 'Գումար' },
      { prefix: '', value: '31-1,825 օր', label: 'Ժամկետ' },
      { prefix: 'մինչև', value: '10.75% ֏', label: 'Տոկոսադրույք' }
    ]
  }
];

const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function DepositsApp() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const visibleDeposits =
    activeFilter === 'all'
      ? depositsData
      : depositsData.filter((item) => item.tags.includes(activeFilter));

  return (
    <>
      <header className="site-header">
        <div className="top-bar">
          <div className="container top-bar-inner">
            <nav className="top-links">
              <a href="#individual" className="active">
                Անհատ
              </a>
              <a href="#business">Բիզնես</a>
              <a href="#instant-payments">Ակնթարթային վճարումներ</a>
              <a href="#about">Մեր մասին</a>
              <a href="#news">Նորություններ</a>
              <a href="#blog">Բլոգ</a>
              <a href="#careers">Կարիերա</a>
            </nav>

            <div className="top-actions">
              <button type="button" className="dropdown-btn">
                Առցանց հայտեր <span>⌄</span>
              </button>
              <button type="button" className="dropdown-btn">
                Հետադարձ կապ <span>⌄</span>
              </button>

              <div className="header-icons">
                <button type="button" aria-label="Մասնաճյուղեր">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </button>
                <button type="button" aria-label="Օգնություն">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                  </svg>
                </button>
                <button type="button" aria-label="Լեզու">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </button>
                <button type="button" aria-label="Որոնում">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
                <button type="button" aria-label="Մենյու">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="main-nav">
          <div className="container main-nav-inner">
            <a href="#home" className="logo">
              evoca
            </a>
            <nav className="primary-menu">
              <a href="#loans">Վարկեր</a>
              <a href="#cards">Քարտեր</a>
              <a
                href="#deposits"
                className={activeFilter === 'deposits' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveFilter('deposits');
                }}
              >
                Ավանդներ
              </a>
              <a href="#accounts">Հաշիվներ</a>
              <a href="#transfers">Փոխանցումներ</a>
              <a href="#securities">Արժեթղթեր</a>
              <a href="#salary">EvocaSALARY</a>
              <a href="#touch">EvocaTOUCH</a>
            </nav>
            <a href="#online" className="evoca-online-btn">
              EvocaONLINE
            </a>
          </div>
        </div>

        <div className="sub-nav">
          <div className="container sub-nav-inner">
            <a
              href="#all-deposits"
              className={activeFilter === 'all' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter('all');
              }}
            >
              Ավանդներ / Բոլորը
            </a>
          </div>
        </div>
      </header>

      <main className="container main-content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="#home">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </a>
          <span>/</span>
          <a href="#individual">Անհատ</a>
          <span>/</span>
          <a href="#deposits">Ավանդներ</a>
          <span>/</span>
          <span className="current">Ավանդներ</span>
        </nav>

        <h1 className="page-title">Ավանդներ</h1>

        <div className="cards-list">
          {visibleDeposits.map((item) => (
            <article className="card-row" key={item.id}>
              <div className="card-visual-wrapper">
                <div
                  className={`bank-card ${item.theme}`}
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)',
                    color: '#fff',
                    borderRadius: '16px',
                    height: '180px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <span className="evoca-logo" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    evoca deposit
                  </span>
                </div>
                <div className="card-shadow-ellipse" />
              </div>

              <div className="card-info">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-desc">{item.subtitle}</p>

                {item.stats.length > 0 && (
                  <div className="stats-grid">
                    {item.stats.map((stat) => (
                      <div className="stat-item" key={`${item.id}-${stat.label}`}>
                        <span className="stat-prefix">{stat.prefix}</span>
                        <div className="stat-value">{stat.value}</div>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  className="btn-details"
                  onClick={() => setSelectedItem(item)}
                >
                  <span>Մանրամասն</span>
                  <ArrowIcon />
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-col brand-col">
            <div className="footer-logo">
              evoca<span className="footer-bank">BANK</span>
            </div>
            <p className="footer-address">
              ՀՀ, Երևան 0010,
              <br />
              Հանրապետության 43/2
            </p>
            <p className="footer-license">
              Գրանցված և վերահսկվում է
              <br />
              Հայաստանի Հանրապետության
              <br />
              Կենտրոնական բանկի կողմից
            </p>
            <p className="footer-copy">
              1990 - 2026, «Էվոկաբանկ» ՓԲԸ
              <br />
              Բոլոր իրավունքները պաշտպանված են։
            </p>
          </div>
        </div>
      </footer>

      {selectedItem && (
        <div
          className="modal-backdrop open"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedItem(null);
          }}
        >
          <div className="modal-box">
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedItem(null)}
            >
              ×
            </button>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.subtitle}</p>
            <div className="modal-specs">
              {selectedItem.stats.map((s) => (
                <div className="modal-spec-card" key={`${selectedItem.id}-modal-${s.label}`}>
                  <strong>{s.value}</strong>
                  <span>
                    {s.prefix ? `${s.prefix} — ` : ''}
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

