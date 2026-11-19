import React, { useState } from 'react';
import './mermasin.css';

const HISTORY_DATA = [
    {
        year: '2026',
        text: 'Բանկը բացեց նոր «Աջափնյակ» մասնաճյուղը, կնքեց նոր միջազգային համագործակցության պայմանագրեր, մասնակցեց միջազգային կոնֆերանսների, արժանացավ հեղինակավոր մրցանակների և կյանքի կոչեց Երևանը գունավորող street art-երը։'
    },
    {
        year: '2025',
        text: 'Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ ՓԲԸ-ից ԲԲԸ-ի: Evoca-ն և EBRD-ն ստորագրեցին համագործակցության համաձայնագիր։ Ներկայացվեց Evoca Travel Card-ը։ Մեկնարկեցին Evoca Partners Club-ն և Evoca Benefits նախագիծը։'
    },
    {
        year: '2024',
        text: 'Evocabank-ը ձեռք է բերել նոր միջազգային գործընկերներ, այդ թվում՝ EIB Global-ը, հովանավորել մի շարք նախագծեր, ներկայացրել իր նոր EvocaHOME օվերդրաֆտը, ինչպես նաև արժանացել միջազգային մրցանակների։'
    },
    {
        year: '2023',
        text: 'Evocabank-ը թողարկել է նոր, գերժամանակակից EvocaTOUCH 2 և EvocaINVEST հավելվածները։ Գործընկերներին է ներկայացրել Evoca Digital քարտը, Action օնլայն վարկը, Էլեկտրոնային ստորագրության e-Sign համակարգը։'
    },
    {
        year: '2022',
        text: 'Evoca-ն համալրել է կանոնադրական կապիտալը 3 մլրդ դրամով: Թողարկել է պարտատոմսեր։ Ներկայացրել է Visa Vision քարտը։ ՀայՓոստի հետ սկսել է համագործակցություն՝ հարմարավետ և հասանելի ֆինտեխ ծառայությունների գծով։ Գործարկել է Evoca mobile POS-ը։'
    },
    {
        year: '2021',
        text: 'Evoca-ի նոր, կրեատիվ լուծումներով կայքը Awwwards թիմի կողմից արժանացել է 2 մրցանակի: Բանկը ներկայացրել է իր Evoca Gift Card-ը: Բանկը 2 փուլով թողարկել է պարտատոմսեր, այդ թվում՝ online տարբերակով:'
    },
    {
        year: '2020',
        text: 'Evocabank-ը յուրահատուկ կերպով նշեց իր 3 և Բանկի հիմնադրման 30-ամյակը՝ առաջին անգամ Հայաստանում կազմակերպելով լուսային դրոն շոու: 300 դրոն միաժամանակ լուսավորեցին Երևանի երկինքը՝ շնորհավորելով Evocabank-ի տարեդարձը:'
    },
    {
        year: '2019',
        text: 'Evocabank-ի Վարչության նախագահի տեղակալ Կարեն Եղիազարյանը նշանակվել է Բանկի Վարչության նախագահ: Ներկայացվել է Visa Infinite քարտը: Բանկը դարձել է Եվրատեսիլ 2019-ի հեռարձակման գլխավոր հովանավոր։'
    },
    {
        year: '2018',
        text: 'Evocabank-ը երկրորդ տարին անընդմեջ Global Finance հեղինակավոր ամսագրի կողմից ճանաչվել է Լավագույն սպառողական թվային բանկը Հայաստանում: Ներկայացվել են ArCa-MIR և Shopping Card քարտերը:'
    },
    {
        year: '2017',
        text: 'Բանկը վերանվանվել է Evocabank-ի՝ փոխելով իր ռազմավարությունը և բիզնես մոդելը՝ անցնելով mobile-first ֆորմատի: Անդամակցել է VISA վճարային համակարգին: Ներկայացրել է SingleTOUCH օնլայն վարկատեսակը:'
    },
    {
        year: '2016',
        text: 'Բանկի նորմատիվային ընդհանուր կապիտալը գերազանցել է ԿԲ սահմանած 30 մլրդ. ՀՀ դրամ նվազագույն պահանջը: Բանկը փոխեց իր կազմակերպաիրավական ձևը՝ վերակազմավորվելով ՍՊԸ-ից ՓԲԸ-ի:'
    },
    {
        year: '2015',
        text: 'Ներդրվել է Prometey Mobile բջջային հավելվածը և իրականացվել է հավելվածի՝ Իվետա Մուկուչյանի մասնակցությամբ գովազդային արշավը, որի շրջանակներում թողարկվել է հատուկ բրենդավորված քարտ: Գործարկվել է Prometey Token անվտանգության բջջային հավելվածն App Store-ում և Play Store-ում:'
    },
    {
        year: '2012',
        text: 'Միացել է "UNIStream" դրամական փոխանցումների համակարգին: "Global Finance" ամսագիրը, երկրորդ տարին անդընդմեջ, Բանկին ճանաչել է որպես աշխարհի լավագույն ենթապահառու բանկերից մեկը և 2012թ. «Լավագույն ենթապահառու բանկը» Հայաստանում:'
    },
    {
        year: '2008',
        text: 'Առաջին անգամ Հայաստանում` Բանկը թողարկել և Շվեյցարական առաջատար բանկերից մեկին է վաճառել սեփական ոչ փաստաթղթային առանց ապահովվածության պարտատոմսեր:'
    },
    {
        year: '2006',
        text: 'Ստացել է «MasterCard Europe» վճարային համակարգի աֆիլիատ անդամի կարգավիճակ: Սկսել է թողարկել «Maestro», «MasterCard Standard», «MasterCard Gold», «MasterCard Business» տիպի պլաստիկ քարտեր:'
    },
    {
        year: '2005',
        text: 'Դարձել է «Արմենիան Քարդ» ՓԲԸ բաժնետեր և «ԱրՔա» վճարային համակարգի լիիրավ անդամ:'
    },
    {
        year: '2000',
        text: 'Անդամակցել է S.W.I.F.T. միջազգային փոխանցումների համակարգին:'
    },
    {
        year: '1993',
        text: 'Լիցենզավորվել է ՀՀ Կենտրոնական բանկի կողմից` թիվ 27 ընդհանուր արտոնագրով:'
    },
    {
        year: '1990',
        text: 'Բանկը հիմնադրվել է 1990թ. և մինչև 2017թ. գործել է Պրոմեթևս և Պրոմեթեյ Բանկ անուններով:'
    }
];

const KEY_VALUES = [
    {
        id: '01',
        title: 'Human-first',
        description:
            'Առաջին տեղում միշտ մարդիկ են՝ մեր հաճախորդները, էքսպերտների թիմը և հասարակությունը։ Չէ՞ որ աշխարհում ամեն ինչ արվում է մարդկանց կողմից մարդկանց համար։'
    },
    {
        id: '02',
        title: 'Նորարարություն',
        description:
            'Նորարարությունը մեր ԴՆԹ-ի մասն է, իսկ փոփոխությունն այսօր միակ հաստատունն է։ Մենք բաց ենք և պատրաստակամ զարգանալու համար։'
    },
    {
        id: '03',
        title: 'Դրական ազդեցություն',
        description:
            'Մենք ձգտում ենք ունենալ դրական ազդեցություն և նպաստել աշխարհն ավելի լավը դարձնելուն։'
    }
];

const CSR_ITEMS = [
    'Նորագույն տեխնոլոգիաների զարգացում, նորարար նախաձեռնություններ, startup-եր,',
    'Երիտասարդության կրթական, գիտական և մշակութային նախաձեռնություններ,',
    'Հասարակական կարևոր նշանակություն ունեցող նախաձեռնություններ,',
    'Հասարակության առավել խոցելի խմբեր, մասնավորապես՝ ծնողազուրկ կամ հատուկ խնամքի տակ գտնվող երեխաներ:'
];

const BRAND_COLORS = [
    {
        name: 'Սպիտակ',
        hex: '#FFFFFF',
        border: true,
        meaning: 'Սպիտակը խորհրդանշում է նորը:'
    },
    {
        name: 'Մոխրագույն',
        hex: '#6E7175',
        border: false,
        meaning: 'Մոխրագույնը խորհրդանշում է նորագույն տեխնոլոգիաների կիրառումը:'
    },
    {
        name: 'Մանուշակագույն',
        hex: '#6E2B8B',
        border: false,
        meaning: 'Մանուշակագույնը երիտասարդության, ստեղծարարության և նորարարության գույնն է:'
    }
];

function Mermasin() {
    const [activeYearIndex, setActiveYearIndex] = useState(0);

    const handlePrevYear = () => {
        setActiveYearIndex((prev) => (prev > 0 ? prev - 1 : HISTORY_DATA.length - 1));
    };

    const handleNextYear = () => {
        setActiveYearIndex((prev) => (prev < HISTORY_DATA.length - 1 ? prev + 1 : 0));
    };

    const currentHistory = HISTORY_DATA[activeYearIndex];

    return (
        <div className="mermasin-page">
            {/* 1. Breadcrumbs & Hero / Ընդհանուր տեղեկատվություն */}
            <section className="mermasin-hero">
                <div className="mermasin-container">
                    <nav className="mermasin-breadcrumbs" aria-label="Breadcrumb">
                        <span>Մեր մասին</span>
                        <span className="breadcrumb-sep">/</span>
                        <span>Evoca-ի մասին</span>
                        <span className="breadcrumb-sep">/</span>
                        <span className="breadcrumb-active">Ընդհանուր</span>
                    </nav>

                    <div className="hero-grid">
                        <div className="hero-left">
                            <span className="section-badge">Ընդհանուր</span>
                            <h1 className="hero-title">Ընդհանուր տեղեկատվություն</h1>
                        </div>
                        <div className="hero-right">
                            <p className="hero-lead">
                                <strong>Evocabank-ը</strong> արագ, պարզ և նորարար ծառայություններ մատուցող բանկ է,
                                որն առանձնանում է տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ կիրառմամբ:
                            </p>
                            <p className="hero-text">
                                Մենք հատուկ ուշադրություն ենք դարձնում մոբայլ ծառայությունների զարգացմանը: Մենք
                                աշխատում ենք <strong>mobile-first</strong> ֆորմատով՝ յուրաքանչյուր նոր ծառայություն
                                նախագծելիս՝ նախևառաջ հաշվի ենք առնելու դրա՝ հավելվածով օգտագործման հարմարավետությունը:
                            </p>
                            <div className="hero-highlight">
                                Աշխարհը թվային է դառնում, և մենք պատրաստ ենք դրան:
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Մեր տեսլականը և Մեր առաքելությունը */}
            <section className="mermasin-vision-mission">
                <div className="mermasin-container">
                    <div className="vm-grid">
                        <div className="vm-card vm-card--vision">
                            <div className="vm-icon-wrap">
                                <span className="evoca-triangle" />
                            </div>
                            <h2 className="vm-title">Մեր տեսլականը</h2>
                            <p className="vm-text">
                                Դառնալ գլոբալ ֆինտեխ գործընկեր, որը միավորում է լավագույն փորձն ու տեխնոլոգիական
                                նորարարությունները հարմարավետ և ճկուն ծառայություններ ապահովելու համար։
                            </p>
                        </div>

                        <div className="vm-card vm-card--mission">
                            <div className="vm-icon-wrap">
                                <span className="evoca-triangle evoca-triangle--white" />
                            </div>
                            <h2 className="vm-title">Մեր առաքելությունը</h2>
                            <p className="vm-text">
                                Որպես human-first և խելացի ֆինտեխ ընկերություն` մենք հնարավորություն ենք տալիս
                                մարդկանց երազելու ավելի համարձակ, բիզնեսներին` բացահայտելու նոր հորիզոններ, և
                                հասարակությանը՝ կառուցելու ավելի լավ ապագա։
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Բանկի պատմությունը (Interactive Timeline) */}
            <section className="mermasin-history">
                <div className="mermasin-container">
                    <div className="history-header">
                        <h2 className="section-title">Բանկի պատմությունը</h2>
                        <div className="history-controls">
                            <button
                                type="button"
                                className="history-nav-btn"
                                onClick={handlePrevYear}
                                aria-label="Նախորդ տարի"
                            >
                                &#8592;
                            </button>
                            <button
                                type="button"
                                className="history-nav-btn"
                                onClick={handleNextYear}
                                aria-label="Հաջորդ տարի"
                            >
                                &#8594;
                            </button>
                        </div>
                    </div>

                    <div className="history-years-bar" role="tablist">
                        {HISTORY_DATA.map((item, idx) => (
                            <button
                                key={item.year}
                                type="button"
                                role="tab"
                                aria-selected={idx === activeYearIndex}
                                className={`year-pill ${idx === activeYearIndex ? 'year-pill--active' : ''}`}
                                onClick={() => setActiveYearIndex(idx)}
                            >
                                {item.year}
                            </button>
                        ))}
                    </div>

                    <div className="history-display-card">
                        <div className="history-big-year">{currentHistory.year}</div>
                        <div className="history-content">
                            <span className="history-tag">Պատմական ակնարկ • {currentHistory.year}</span>
                            <p className="history-description">{currentHistory.text}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Արժեքներ և առաջնայնություններ */}
            <section className="mermasin-values">
                <div className="mermasin-container">
                    <h2 className="section-title">Արժեքներ և առաջնայնություններ</h2>
                    <div className="values-grid">
                        {KEY_VALUES.map((val) => (
                            <div key={val.id} className="value-card">
                                <span className="value-number">{val.id}</span>
                                <h3 className="value-title">{val.title}</h3>
                                <p className="value-desc">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Կորպորատիվ սոցիալական պատասխանատվություն */}
            <section className="mermasin-csr">
                <div className="mermasin-container">
                    <div className="csr-box">
                        <div className="csr-left">
                            <span className="section-badge">CSR</span>
                            <h2 className="section-title">Կորպորատիվ սոցիալական պատասխանատվություն</h2>
                            <p className="csr-subtitle">
                                Բանկը շարունակաբար աջակցություն է ցուցաբերում հանրության տարբեր խմբերին և
                                հասարակական նախաձեռնություններին հետևյալ ոլորտներում`
                            </p>
                        </div>
                        <div className="csr-right">
                            <ul className="csr-list">
                                {CSR_ITEMS.map((item, index) => (
                                    <li key={index} className="csr-list-item">
                                        <span className="csr-bullet" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Բանկի լոգոտիպը, բրենդբուքը և կորպորատիվ գույները */}
            <section className="mermasin-brand">
                <div className="mermasin-container">
                    <div className="brand-top-grid">
                        <div className="brand-card">
                            <div className="brand-logo-preview">
                                <span className="logo-word">
                                    E<span className="logo-v-arrow">V</span>OCA
                                </span>
                            </div>
                            <h3 className="brand-card-title">Բանկի լոգոտիպը</h3>
                            <p className="brand-card-text">
                                Բանկի լոգոն կազմված է <strong>evolution</strong>՝ էվոլյուցիա բառի արմատից և
                                նմանեցված է <strong>evoke</strong>՝ զարթեցնել բառին: Բառի երկրորդ տառը՝ V-ն,
                                պատկերված է կորացված անկյուններով հավասարակողմ եռանկյան տեսքով և նմանեցված է դեպի
                                աջ և վեր ուղղված սլաքի տեսքով՝ խորհրդանշելով Բանկի ձգտումը դեպի առաջընթաց:
                            </p>
                        </div>

                        <div className="brand-card brand-card--accent">
                            <h3 className="brand-card-title">Բանկի բրենդբուքը</h3>
                            <p className="brand-card-text">
                                Բրենդբուքում կգտնեք Բանկի լոգոյի կիրառման կանոնները, բրենդային գույները,
                                տառատեսակները և բրենդի այլ կարևոր տարրերը:
                            </p>
                            <p className="brand-card-text">
                                Սա պարզապես ուղեցույց չէ, այլ ոգեշնչման աղբյուր՝ ուժեղ և ճանաչելի բրենդ
                                կառուցելու համար։
                            </p>
                            <a
                                href="https://www.evoca.am/hy/general-information-history-key-values"
                                target="_blank"
                                rel="noreferrer"
                                className="brandbook-btn"
                            >
                                Բացել բրենդբուքը &#8599;
                            </a>
                        </div>
                    </div>

                    {/* Կորպորատիվ գույներ */}
                    <div className="brand-colors-section">
                        <h3 className="brand-colors-heading">Բանկի կորպորատիվ գույները</h3>
                        <p className="brand-colors-sub">
                            Բանկի կորպորատիվ գույներն են` սպիտակը, մոխրագույնը և մանուշակագույնը:
                        </p>
                        <div className="colors-grid">
                            {BRAND_COLORS.map((color) => (
                                <div key={color.name} className="color-card">
                                    <div
                                        className={`color-swatch ${color.border ? 'color-swatch--bordered' : ''}`}
                                        style={{ backgroundColor: color.hex }}
                                    />
                                    <div className="color-info">
                                        <h4 className="color-name">{color.name}</h4>
                                        <p className="color-meaning">{color.meaning}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. ISO27001:2026 միջազգային հավաստագիր */}
            <section className="mermasin-iso">
                <div className="mermasin-container">
                    <div className="iso-banner">
                        <div className="iso-badge-box">
                            <span className="iso-label">CERTIFIED</span>
                            <strong className="iso-code">ISO 27001:2026</strong>
                        </div>
                        <div className="iso-content">
                            <h2 className="iso-title">ISO27001:2026 միջազգային հավաստագիր</h2>
                            <p className="iso-subtitle">
                                Evocabank-ը ստացել է ISO27001:2026 միջազգային հավաստագիր
                            </p>
                            <p className="iso-text">
                                Հավաստագիրը վկայում է Բանկում ֆինանսական պրոդուկտների և ծառայությունների, տվյալների
                                բազաների, տեղեկատվության մշակման և պահպանման օբյեկտների, հաճախորդների և բանկային
                                հիմնական գործարքների վերաբերյալ ֆինանսական տեղեկատվության անվտանգ կառավարման
                                համակարգի առկայության մասին:
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Mermasin;