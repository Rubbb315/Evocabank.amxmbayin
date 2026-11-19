import React, { useState, useMemo } from 'react';
import './varker.css';

const LOANS_DATA = [
  {
    id: 1,
    category: 'unsecured',
    currency: ['AMD'],
    title: 'Անգրավ սպառողական վարկ',
    description:
      'Նոր նպատակներ, անսպասելի ծախսեր կամ վաղուց պլանավորված գնումներ․ Evocabank-ի անգրավ սպառողական վարկը կօգնի կյանքի կոչել Ձեր ծրագրերը՝ առանց գույքի գրավադրման։',
    metrics: [
      { value: 'մինչև 10 մլն. ֏', label: 'Գումար' },
      { value: 'մինչև 60 ամիս', label: 'Ժամկետ' },
      { value: 'սկսած 19%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 2,
    category: 'auto',
    currency: ['AMD'],
    title: 'Ավտոմեքենայի ձեռքբերման նպատակով վարկ',
    description:
      'Նոր ավտոմեքենա գնելու որոշու՞մ եք կայացրել, արդեն ընտրե՞լ եք մակնիշը, մոդելը և գույնը: Evocabank-ը կօգնի ավարտին հասցնել Ձեր որոշումը։',
    metrics: [
      { value: 'մինչև 50 մլն. ֏', label: 'Գումար' },
      { value: 'մինչև 84 ամիս', label: 'Ժամկետ' },
      { value: 'սկսած 13%-ից', label: 'Տոկոսադրույք' },
      { value: 'սկսած 10%-ից', label: 'Կանխավճար' },
    ],
  },
  {
    id: 3,
    category: 'secured',
    currency: ['AMD'],
    title: 'Գույքի գրավով ապահովված վարկ',
    description:
      'Ստացիր քեզ անհրաժեշտ ֆինանսավորումը՝ գրավադրելով անշարժ գույք կամ տրանսպորտային միջոց։',
    metrics: [
      { value: 'մինչև 150 մլն. ֏', label: 'Գումար' },
      { value: '24-180 ամիս', label: 'Վարկի մարման ժամկետ (անշարժ)' },
      { value: 'մինչև 60 ամիս', label: 'Վարկի մարման ժամկետ (շարժական)' },
      { value: 'Սկսած 14%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 4,
    category: 'unsecured',
    currency: ['AMD'],
    title: 'Արևային կայանների ձեռք բերման վարկ EvocaPOWER',
    description:
      'Քո տան էլեկտրաէներգիան արևից, իսկ վարկը՝ Evoca-ից։ EvocaPOWER վարկատեսակը տրամադրվում է առանց կանխավճարի, գրավի և բանկ այցելելու անհրաժեշտության։',
    metrics: [
      { value: 'Մինչև 5 մլն. ֏', label: 'Գումար' },
      { value: 'Մինչև 60 ամիս', label: 'Ժամկետ' },
      { value: 'Սկսած 0%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 5,
    category: 'secured',
    currency: ['AMD'],
    title: 'Ոսկու գրավով (լոմբարդային) վարկ',
    description:
      'Ձևակերպե՛ք ոսկյա իրերի գրավով վարկեր Evocabank-ի մասնաճյուղերում հաշված րոպեների ընթացքում և ստացե՛ք վարկ ոսկու գնահատված արժեքի մինչև 150%-ի չափով։',
    metrics: [
      { value: 'մինչև 50 մլն. ֏', label: 'Գումար' },
      { value: '3-60 ամիս', label: 'Ժամկետ' },
      { value: 'սկսած 15.5%-ից', label: 'Տոկոսադրույք' },
      { value: 'մինչև 150%', label: 'Վարկ / գրավ հարաբերակցություն' },
    ],
  },
  {
    id: 6,
    category: 'installment',
    currency: ['AMD'],
    title: 'Տեղում Ապառիկ',
    description:
      'Ցանկանո՞ւմ ես ձեռք բերել քո նախընտրած ապրանքը կամ օգտվել ծառայությունից, բայց չես ցանկանում ամբողջ գումարը վճարել միանգամից։ Օգտվիր Evoca-ի տեղում ապառիկից։',
    metrics: [
      { value: 'մինչև 5 մլն. ֏', label: 'Գումար' },
      { value: 'մինչև 60 ամիս', label: 'Ժամկետ' },
      { value: 'Սկսած 0%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 7,
    category: 'unsecured',
    currency: ['AMD'],
    title: 'Evoca աշխատավարձային փաթեթի շրջանակում տրամադրվող վարկ',
    description:
      'Աշխատավա՞րձ ես ստանում մեր բանկային քարտով և ունե՞ս ընթացիկ ծախսերի հետ կապված խնդիրներ. Evocabank-ը Ձեզ կտրամադրի շահավետ պայմաններով վարկ։',
    metrics: [],
  },
  {
    id: 8,
    category: 'mortgage',
    currency: ['AMD'],
    title: 'Բնակարանային հիփոթեքային վարկեր Բանկի ռեսուրսով',
    description:
      'Ձեռք բերեք Ձեր նախընտրած բնակարանը հիփոթեքային վարկավորման միջոցով։',
    metrics: [
      { value: 'մինչև 80 մլն. ֏', label: 'Գումար' },
      { value: 'մինչև 240 ամիս', label: 'Ժամկետ' },
      { value: 'սկսած 13.2%', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 9,
    category: 'online',
    currency: ['AMD'],
    title: 'Action',
    description:
      'Action online վարկ կարող ես ստանալ EvocaTOUCH հավելվածի միջոցով՝ 24/7 ռեժիմով, ցանկացած վայրից և ցանկացած ժամի։',
    metrics: [
      { value: 'մինչև 10 մլն ֏', label: 'Սահմանաչափ' },
      { value: 'մինչև 60 ամիս', label: 'Մարման ժամկետ' },
      { value: 'սկսած 18%-ից', label: 'Տարեկան անվանական տոկոսադրույք' },
    ],
  },
  {
    id: 10,
    category: 'mortgage',
    currency: ['AMD'],
    title: 'Հիփոթեքային վարկ ԼՂ-ից բռնի տեղահանված ընտանիքներին',
    description:
      'Evocabank-ը միշտ ձեր կողքին է։ Առաջարկում ենք հատուկ պայմաններով հիփոթեքային վարկեր Լեռնային Ղարաբաղից բռնի տեղահանված ընտանիքներին:',
    metrics: [
      { value: 'մինչև 55 մլն ֏', label: 'Գումար' },
      { value: 'մինչև 120 ամիս', label: 'Մարման ժամկետ' },
      { value: '13%', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 11,
    category: 'mortgage',
    currency: ['AMD'],
    title: 'Հողամասի ձեռքբերման վարկ',
    description:
      'Փնտրո՞ւմ ես հողատարածք՝ քո երազանքների տունը կառուցելու, հանգստի գոտի ստեղծելու կամ այլ նպատակների համար։ Դու արդեն գտել ես այն։',
    metrics: [
      { value: 'մինչև 80 մլն. ֏', label: 'Գումար' },
      { value: 'մինչև 240 ամիս', label: 'Ժամկետ' },
      { value: 'սկսած 14%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 12,
    category: 'unsecured',
    currency: ['AMD'],
    title: 'Միկրովերանորոգման վարկ Բանկի ռեսուրսներով',
    description:
      'Պլանավորո՞ւմ ես բնակարանի վերանորոգում։ Ստացիր Evocabank-ի միկրովերանորոգման վարկ և օգտվիր պետական սուբսիդավորման հնարավորությունից։',
    metrics: [
      { value: 'մինչև 5 մլն. ֏', label: 'Գումար' },
      { value: '60 ամիս', label: 'Ժամկետ' },
      { value: '17%', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 13,
    category: 'auto',
    currency: ['AMD'],
    title: 'Ֆիզիկական անձանց տրանսպորտային միջոցների լիզինգ',
    description:
      'Ձեռք բեր քո երազանքների մեքենան Evocabank-ի լիզինգի միջոցով՝ ճկուն պայմաններով և մատչելի գնով:',
    metrics: [
      { value: 'Մինչև 50 մլն ֏', label: 'Գումար' },
      { value: 'Մինչև 60 ամիս', label: 'Ժամկետ' },
      { value: 'Սկսած 14%-ից', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 14,
    category: 'online',
    currency: ['AMD'],
    title: 'Վճարային քարտով օվերդրաֆտ (վարկային քարտ)',
    description:
      'Ունես չնախատեսված ծախսե՞ր. Evocabank-ի Online Օվերդրաֆտը լավագույն կարճաժամկետ լուծումն է: 24/7 հասանելիություն և առանց փաստաթղթաշրջանառության:',
    metrics: [
      { value: 'մինչև 10 մլն ֏', label: 'Սահմանաչափ' },
      { value: '36 ամիս', label: 'Մարման ժամկետ' },
      { value: 'սկսած 16%-ից', label: 'Տարեկան անվանական տոկոսադրույք' },
    ],
  },
  {
    id: 15,
    category: 'secured',
    currency: ['AMD'],
    title: 'Անհատական վարկ «Ներդրումային»',
    description:
      'Ոչ թե վարկ, այլ ներդրում․ գիտեի՞ր, որ Evoca-ի միջոցով դու կարող ես ձեռք բերել անշարժ կամ շարժական գույք արտերկրում և ստանալ լրացուցիչ եկամուտներ։',
    metrics: [
      { value: 'մինչև 350 մլն ֏', label: 'Գումար' },
      { value: 'մինչև 240 ամիս', label: 'Մարման ժամկետ' },
      { value: '15%', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 16,
    category: 'mortgage',
    currency: ['AMD'],
    title: 'Ավտոկայանատեղիի ձեռքբերման վարկ',
    description:
      'Evocabank-ի նոր վարկատեսակով վերջապես կարող ես ձեռք բերել սեփական ավտոկայանատեղի և մոռանալ մեքենան կանգնեցնելու անհարմարությունների մասին:',
    metrics: [
      { value: 'մինչև 8 մլն ֏', label: 'Գումար' },
      { value: 'մինչև 60 ամիս', label: 'Մարման ժամկետ' },
      { value: '16%', label: 'Տոկոսադրույք' },
    ],
  },
  {
    id: 17,
    category: 'unsecured',
    currency: ['AMD'],
    title: 'Հեծանիվի ձեռքբերման վարկ',
    description:
      'Evoca-ն տրամադրում է հեծանիվի ձեռքբերման վարկ մասնագիտական ուսումնական հաստատությունների ուսանողների և աշխատակիցների համար՝ պետական սուբսիդավորմամբ։',
    metrics: [
      { value: 'Մինչև 300,000 ֏', label: 'Գումար' },
      { value: 'Մինչև 36 ամիս', label: 'Ժամկետ' },
      { value: 'Սկսած 16%-ից', label: 'Տոկոսադրույք' },
      { value: '16%', label: 'Պետության կողմից սուբսիդավորվող տոկոսադրույք' },
    ],
  },
  {
    id: 18,
    category: 'mortgage',
    currency: ['AMD', 'USD', 'EUR'],
    title: 'Ոչ ռեզիդենտ ֆիզ․ անձանց համար բնակարանային հիփոթեքային վարկ',
    description:
      'Ձեռք բեր քո երազանքների բնակարանը Evocabank-ի հիփոթեքային վարկավորման միջոցով։',
    metrics: [
      { value: 'մինչև 80 մլն. ֏', label: 'Գումար (Համարժեք արտարժույթ)' },
      { value: 'մինչև 180 ամիս', label: 'Ժամկետ' },
      { value: 'սկսած 8.2%-ից', label: 'Ֆիքսված տոկոսադրույք' },
      { value: 'սկսած 7.7%-ից', label: 'Լողացող տոկոսադրույք' },
    ],
  },
  {
    id: 19,
    category: 'unsecured',
    currency: ['AMD'],
    title: 'Վերանորոգման վարկ EvocaHOME',
    description:
      'Ցանկանո՞ւմ ես վերանորոգել բնակարանդ կամ պլանավորու՞մ ես գնել նոր կահույք։ Evoca-ի կողմից առաջարկվող նոր օվերդրաֆտի միջոցով դու կստեղծես քո երազանքների բնակարանը՝ ամենահարմար պայմաններով։',
    metrics: [
      { value: 'մինչև 10 մլն ֏', label: 'Գումար' },
      { value: 'մինչև 60 ամիս', label: 'Մարման ժամկետ' },
      { value: '16%', label: 'Տոկոսադրույք' },
    ],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'Բոլորը' },
  { id: 'secured', label: 'Գրավով ապահովված սպառողական վարկեր' },
  { id: 'unsecured', label: 'Անգրավ սպառողական վարկեր' },
  { id: 'mortgage', label: 'Հիփոթեքային վարկեր' },
  { id: 'auto', label: 'Ավտոմեքենաների ձեռքբերման ֆինանսավորում' },
  { id: 'installment', label: 'Ապառիկ' },
  { id: 'online', label: 'Օնլայն վարկեր' },
];

const CURRENCIES = [
  { id: 'ALL', label: 'Բոլորը' },
  { id: 'AMD', label: '֏' },
  { id: 'USD', label: '$' },
  { id: 'EUR', label: '€' },
];

export default function Varker() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCurrency, setSelectedCurrency] = useState('ALL');
  const [activeLoan, setActiveLoan] = useState(null);

  const filteredLoans = useMemo(() => {
    return LOANS_DATA.filter((loan) => {
      const matchCategory =
        selectedCategory === 'all' || loan.category === selectedCategory;
      const matchCurrency =
        selectedCurrency === 'ALL' || loan.currency.includes(selectedCurrency);
      return matchCategory && matchCurrency;
    });
  }, [selectedCategory, selectedCurrency]);

  return (
    <div className="evoca-loans-page">
      <header className="evoca-loans-header">
        <nav className="evoca-breadcrumb" aria-label="Breadcrumb">
          <span>Անհատ</span>
          <span className="evoca-breadcrumb-sep">/</span>
          <span className="evoca-breadcrumb-current">Վարկեր</span>
        </nav>
        <h1 className="evoca-page-title">Վարկեր</h1>
      </header>

      <section className="evoca-filters-section">
        <div className="evoca-filter-group">
          <span className="evoca-filter-label">Ֆիլտրեր</span>
          <div className="evoca-pills-row">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`evoca-pill ${
                  selectedCategory === cat.id ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="evoca-currency-group">
          <div className="evoca-pills-row">
            {CURRENCIES.map((curr) => (
              <button
                key={curr.id}
                type="button"
                className={`evoca-pill evoca-currency-pill ${
                  selectedCurrency === curr.id ? 'active' : ''
                }`}
                onClick={() => setSelectedCurrency(curr.id)}
              >
                {curr.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="evoca-loans-list">
        {filteredLoans.length === 0 ? (
          <div className="evoca-empty-state">
            Ընտրված ֆիլտրերով վարկատեսակներ չեն գտնվել։
          </div>
        ) : (
          filteredLoans.map((loan) => (
            <article key={loan.id} className="evoca-loan-card">
              <div className="evoca-loan-card-body">
                <h2 className="evoca-loan-title">{loan.title}</h2>
                <p className="evoca-loan-desc">{loan.description}</p>

                {loan.metrics.length > 0 && (
                  <div className="evoca-loan-metrics">
                    {loan.metrics.map((m, idx) => (
                      <div key={idx} className="evoca-metric-item">
                        <span className="evoca-metric-value">{m.value}</span>
                        <span className="evoca-metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="evoca-loan-card-actions">
                <button
                  type="button"
                  className="evoca-details-btn"
                  onClick={() => setActiveLoan(loan)}
                >
                  Մանրամասն
                </button>
              </div>
            </article>
          ))
        )}
      </main>

      {activeLoan && (
        <div
          className="evoca-modal-backdrop"
          onClick={() => setActiveLoan(null)}
        >
          <div
            className="evoca-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="evoca-modal-header">
              <h3>{activeLoan.title}</h3>
              <button
                type="button"
                className="evoca-modal-close"
                onClick={() => setActiveLoan(null)}
                aria-label="Փակել"
              >
                ✕
              </button>
            </div>
            <p className="evoca-modal-desc">{activeLoan.description}</p>
            {activeLoan.metrics.length > 0 && (
              <div className="evoca-modal-metrics">
                {activeLoan.metrics.map((m, idx) => (
                  <div key={idx} className="evoca-metric-item">
                    <span className="evoca-metric-value">{m.value}</span>
                    <span className="evoca-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="evoca-modal-footer">
              <button
                type="button"
                className="evoca-details-btn"
                onClick={() => setActiveLoan(null)}
              >
                Փակել
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}