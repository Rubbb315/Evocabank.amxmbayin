import React, { useState } from 'react';
import './qarter.css';

export const cardsData = [
  {
    id: 'mastercard-standard',
    title: 'Mastercard Standard',
    subtitle: 'Աշխատի՛ր ցանկացած տեղում որտեղ էլ լինես. քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն:',
    tags: ['all', 'mastercard'],
    theme: 'theme-purple',
    brand: 'mc',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով մինչև 1 մլն ֏' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '5000 ֏', label: 'Քարտի տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-classic',
    title: 'Visa Classic',
    subtitle: 'Կատարի՛ր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:',
    tags: ['all', 'visa'],
    theme: 'theme-classic',
    brand: 'visa',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.2%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '5,000 ֏', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-digital',
    title: 'Visa Digital',
    subtitle: 'Պատվիրի՛ր Evoca Digital քարտը հենց EvocaTOUCH հավելվածով, և քարտդ կակտիվանա րոպեների ընթացքում',
    tags: ['all', 'digital', 'visa'],
    theme: 'theme-holo',
    brand: 'visa',
    hasChip: false,
    number: '•••• 1234',
    holder: '0.00 $',
    stats: [
      { prefix: '', value: '2%', label: 'Կանխիկացում բանկի բանկոմատներից' },
      { prefix: 'մինչև', value: '4%', label: 'Տարեկան տոկոսային դրույքաչափ՝ դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք' },
      { prefix: '', value: '1000 ֏', label: 'Տարեկան սպասարկում' },
      { prefix: 'մինչև', value: '0.5%', label: 'Քեշբեք' }
    ]
  },
  {
    id: 'mastercard-world-digital',
    title: 'Mastercard World Digital',
    subtitle: 'Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Պատվիրի՛ր թվային քարտդ հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում',
    tags: ['all', 'digital', 'mastercard'],
    theme: 'theme-dark',
    brand: 'mc',
    hasChip: false,
    number: '•••• 1234   10/29',
    holder: '',
    stats: [
      { prefix: '', value: '2%', label: 'Կանխիկացում բանկի բանկոմատներից' },
      { prefix: '', value: '2.5%', label: 'Կանխիկացում ArCa համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով' },
      { prefix: '', value: '1000 ֏', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'digital-gift-card',
    title: 'Digital Gift Card',
    subtitle: 'Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ ինչ նվիրել: Մենք առաջարկում ենք էլեկտրոնային նվերի տարբերակ՝',
    tags: ['all', 'gift', 'mastercard'],
    theme: 'theme-gift',
    brand: 'mc',
    isGift: true,
    number: '•••• 1234',
    holder: '',
    stats: []
  },
  {
    id: 'mastercard-gold',
    title: 'Mastercard Gold',
    subtitle: 'Ընդգծի՛ր կարգավիճակդ քո Mastercard Gold քարտով։',
    tags: ['all', 'premium', 'mastercard'],
    theme: 'theme-gold',
    brand: 'mc',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով մինչև 2 մլն ֏' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '15.000 ֏', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-vision',
    title: 'Visa Vision',
    subtitle: 'Կանխիկացրի՛ր մանրածախ առևտրի վայրերից ու տես Visa Vision քարտի բացառիկ առավելությունները։',
    tags: ['all', 'visa', 'premium'],
    theme: 'theme-vision',
    brand: 'visa',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: []
  },
  {
    id: 'visa-gold',
    title: 'Visa Gold',
    subtitle: 'Նոր կարգավիճակդ բացահայտիր 25.11.2024 թվականից',
    tags: ['all', 'visa', 'premium'],
    theme: 'theme-visa-gold',
    brand: 'visa',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.2%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '15,000 ֏', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'unionpay-gold',
    title: 'UnionPay Gold',
    subtitle: 'Անվտանգ աշխատանքդ արագ և հարմար վճարումով ուղեկցվի:',
    tags: ['all', 'unionpay', 'premium'],
    theme: 'theme-gold',
    brand: 'up',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.5%', label: 'Կանխիկացում' },
      { prefix: '', value: '5 տարի', label: 'Քարտի ժամկետ' },
      { prefix: '', value: '15000 ֏', label: 'Քարտի տարեկան սպասարկման վճար' },
      { prefix: '', value: 'Ամենուր', label: 'Կիրառություն' }
    ]
  },
  {
    id: 'evoca-travel-card',
    title: 'Evoca Travel Card',
    subtitle: 'Սիրո՞ւմ ես ճամփորդել, ուրեմն ժամանակն է ձեռք բերել Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական վստահելի ընկերը:',
    tags: ['all', 'mastercard', 'premium'],
    theme: 'theme-travel',
    brand: 'mc',
    isTravel: true,
    number: 'BOARDING PASS',
    holder: '',
    stats: [
      { prefix: 'մինչև', value: '1.5%', label: 'Cashback պարտատոմսերով ձեռքբերված վճարումների դեպքում' },
      { prefix: 'անվճար', value: '6 մուտք', label: 'Lounge Key պոլիսներ բանկի հաշվով համար' },
      { prefix: 'անվճար', value: '6 անգամ', label: 'Fast track ծառայություն ճանապարհորդության ընթացքում համար' },
      { prefix: '', value: '16.000֏', label: 'Քարտի տարեկան սպասարկում' }
    ]
  },
  {
    id: 'evoca-visa-platinum',
    title: 'Evoca Visa Platinum',
    subtitle: 'Պրեմիում առավելություններ պրեմիում քարտով։',
    tags: ['all', 'visa', 'premium'],
    theme: 'theme-platinum',
    brand: 'visa',
    hasChip: true,
    number: '•••• 1234',
    holder: '',
    stats: [
      { prefix: '', value: '30.000 ֏', label: 'Տարեկան պահպանման վճար' },
      { prefix: 'անվճար', value: '6 մուտք', label: 'Տրամադրվող պոլիսների բանկի պոլիսներ' }
    ]
  },
  {
    id: 'wilco-visa-infinite',
    title: 'Wilco Visa Infinite',
    subtitle: 'Բացահայտի՛ր պրեմիում բանկինգի և անհատականացված ֆինանսական տրամադրվող Wilco Visa Infinite քարտի հետ:',
    tags: ['all', 'visa', 'premium'],
    theme: 'theme-infinite',
    brand: 'visa',
    hasChip: true,
    number: '•••• 1234',
    holder: '',
    stats: []
  },
  {
    id: 'visa-business',
    title: 'Visa Business',
    subtitle: 'Գործությունդ բարելավիր ներկայացուցչական հաշվեհամար կատարող Visa Business քարտով։',
    tags: ['all', 'visa', 'business'],
    theme: 'theme-business',
    brand: 'visa',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.2%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '0.2%', label: 'Բանկի տարածքում POS տերմինալի հաշվից կանխիկացում' }
    ]
  },
  {
    id: 'unionpay-business-platinum',
    title: 'UnionPay Business Platinum',
    subtitle: 'Այս քարտերով կարող էդ կառուցես ձեր գործընկերոջ հաջողության ճանապարհին:',
    tags: ['all', 'unionpay', 'business'],
    theme: 'theme-dark-platinum',
    brand: 'up',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.5%', label: 'Կանխիկացում' },
      { prefix: '', value: '5 տարի', label: 'Քարտի ժամկետ' },
      { prefix: '', value: '15000 ֏', label: 'Քարտի տարեկան սպասարկման վճար' },
      { prefix: '', value: 'Ամենուր', label: 'Կիրառություն' }
    ]
  },
  {
    id: 'evoca-gift-card',
    title: 'Evoca Gift Card',
    subtitle: 'Նվիրի՛ր Evoca Gift Card, և լավագույն նվերը կլինի քոնը։',
    tags: ['all', 'gift'],
    theme: 'theme-gift-grid',
    brand: 'mc',
    isMultiVisual: true,
    number: '•••• 1234',
    holder: '',
    stats: []
  },
  {
    id: 'dalma-gift-card',
    title: 'Dalma Gift Card',
    subtitle: 'Նվերը ընտրելն այնքան դժվար չէ։',
    tags: ['all', 'gift'],
    theme: 'theme-dalma',
    brand: 'arca',
    hasChip: true,
    number: '5000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: []
  },
  {
    id: 'my-ler-gift-card',
    title: 'MyLer Gift Card',
    subtitle: 'Մեկ քարտ, անսահմանափակ արկածներ։',
    tags: ['all', 'gift'],
    theme: 'theme-myler',
    brand: 'arca',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'MYLER GIFT CARD',
    stats: []
  }
];

const filterOptions = [
  { key: 'all', label: 'Բոլորը' },
  { key: 'visa', label: 'Visa' },
  { key: 'mastercard', label: 'Mastercard' },
  { key: 'unionpay', label: 'UnionPay' },
  { key: 'digital', label: 'Թվային' },
  { key: 'premium', label: 'Պրեմիում' },
  { key: 'business', label: 'Բիզնես' },
  { key: 'gift', label: 'Նվեր քարտեր' }
];

export default function QarterCards() {
  const [activeTag, setActiveTag] = useState('all');

  const filteredCards =
    activeTag === 'all'
      ? cardsData
      : cardsData.filter((card) => card.tags.includes(activeTag));

  return (
    <div className="qarter-page">
      <div className="qarter-filters">
        {filterOptions.map((opt) => (
          <button
            key={opt.key}
            type="button"
            className={`filter-btn ${activeTag === opt.key ? 'active' : ''}`}
            onClick={() => setActiveTag(opt.key)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="qarter-grid">
        {filteredCards.map((card) => (
          <article key={card.id} className={`card-item ${card.theme}`}>
            <div className="card-visual" data-brand={card.brand}>
              {card.hasChip && <div className="card-chip" />}
              <div className="card-number">{card.number}</div>
              {card.holder && <div className="card-holder">{card.holder}</div>}
              {card.isGift && <span className="card-badge">Gift</span>}
              {card.isTravel && <span className="card-badge">Travel</span>}
              {card.isMultiVisual && <span className="card-badge">Multi</span>}
            </div>

            <div className="card-body">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-subtitle">{card.subtitle}</p>

              {card.stats.length > 0 && (
                <ul className="card-stats">
                  {card.stats.map((stat, index) => (
                    <li key={index} className="card-stat-row">
                      <span className="stat-value">
                        {stat.prefix ? `${stat.prefix} ` : ''}
                        {stat.value}
                      </span>
                      <span className="stat-label">{stat.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}