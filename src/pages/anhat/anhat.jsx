import { Link } from "react-router-dom";
import "./anhat.css";

function Anhat(){
    return(
        <>
            <header>
                <div className="divfirsttexts">
                    <Link to="/">Անհատ</Link>
                    <Link to="/biznes">Բիզնես</Link>
                    <Link to="/akntartayinvcharum">Ակնթարթային վճարումներ</Link>
                    <Link to="/mermasin">Մեր մասին</Link>
                    <Link to="/norutyunner">Նորություններ</Link>
                    <Link to="/blog">Բլոգ</Link>
                    <Link to="/kariera">Կարիերա</Link>
                </div>
                <div className="divselect">
                        <div className="firstselect">
                            <select name="Առցանց հայտեր">
                                <option value="">Առցանց հայտեր</option>
                                <option value="">ՓՄՁ վարկավորում</option>
                                <option value="">Visa Infinite</option>
                                <option value="">MasterCard Gold</option>
                                <option value="">Visa Gold</option>
                            </select>
                        </div>
                    <div className="secondselect">
                        <select name="Հետադարձ կապ">
                            <option value="">Հետադարձ կապ</option>
                            <option value="">+374 10 605555</option>
                            <option value="">+374 98 205555</option>
                            <option value="">+374 99 605555</option>
                            <option value="">8444</option>
                            <option value="">Պատվիրել զանգ</option>
                        </select>
                    </div>
                </div>
                <div className="divendheader">
                    <i class="fa fa-map-marker"></i>
                    <i class="fa fa-search"></i>
                    <i class="fa fa-reorder"></i>
                </div>
            </header>
            <br />
            <main>
                <div className="divhencheaderitakic">
                   <div className="divforevocabankh1">
                       <h1 className="evocah1">EVOCA</h1>
                   </div>
                   <div className="divtextsmnacaclinker">
                       <Link to="/varker">Վարկեր</Link>
                       <Link to="/qarter">Քարտեր</Link>
                       <Link to="/avandner">Ավանդներ</Link>
                       <Link to="/hashivner">Հաշիվներ</Link>
                       <Link to="/poxancumner">Փոխանցումներ</Link>
                       <Link to="/arjetxter">Արժեթղթեր</Link>
                       <Link to="/EvocaSALARY">EvocaSALARY</Link>
                       <Link to="/EvocaTOUCH">EvocaTOUCH</Link>
                   </div>
                   <div className="divevocaonline">
                        <button className="btnevocaonline">EvocaONLINE</button>
                   </div>
                </div>
                <br /><br />
                <div className="divhipoteqayinvarker">
                    <div className="divhpimejitexter">
                        <h1>Հիփոթեքային վարկեր <br /> Evocabank-ում` ամենահարմար <br /> պայմաններով</h1>
                        <p>Ձե՛ռք բեր քո երազանքի բնակարանը` ցածր տոկոսադրույքով:</p>
                        <button className="btnimanalavelin">Իմանալ ավելին</button>
                    </div>
                    <div className="divhpinkar">
                        <img src="https://www.evoca.am/images-cache/sliders/1/16178035964191/79381d3e68fdf7ec25c5837a19ce5821-577x486.jpg" alt="" />
                    </div>
                </div>
                <br /><br /><br /><br /><br />
                <div className="divqrcodeevocatouch">
                    <div className="divforimgofqrcodeikox">
                        <img src="https://www.evoca.am/img/temp/biometric/face2.png" alt="" />
                    </div>
                    <div className="divtextsqrcodeiny">
                        <div className="divtexts1qrcode">
                            <h1>Դարձիր Evocabank-ի հաճախորդ <br /> բիոմետրիկ նույնականացմամբ</h1>
                            <p>Սկանավորի՛ր QR կոդը, ներբեռնի՛ր EvocaTOUCH <br /> հարմարավետ հավելվածը, ստեղծի՛ր քո հաշիվը և <br /> ստացիր քարտ</p>
                        </div>
                        <div className="divtexts2qrcode">
                            <img className="qrcodeimg" src="https://www.evoca.am/img/biometric-section-QR-Code.png" alt="" />
                            <button className="btnimanalavelin">Իմանալ ավելին</button>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <div className="divqarterarcaclassic">
                    <div className="divkoxiqarter">
                        <div>
                            <img className="imgkoxiqarter" src="https://www.evoca.am/images-cache/cards/1/17404717113297/415x261.png" alt="" />
                            <p>Dalma Gift Card</p>
                        </div>
                        <div>
                            <img className="imgkoxiqarter" src="https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png" alt="" />
                            <p>Arca Classic</p>
                        </div>
                        <div>
                            <img className="imgkoxiqarter" src="https://www.evoca.am/images-cache/cards/1/17881574661708/415x261.png" alt="" />
                            <p>Arca-UnionPay</p>
                        </div>
                    </div>
                    <div className="divmejtexiqart">
                        <img className="mejtexiqart" src="https://www.evoca.am/images-cache/cards/1/17404717644263/415x261.png" alt="" />
                    </div>
                    <div className="divmejtexqiqartimasin">
                        <h1>Arca Classic</h1>
                        <p>Ձեռք բեր ArCa Classic քարտը և կատարիր քո <br /> գործարքները մեր նորաոճ քարտի օգնությամբ: <br /><br />
                        Ընդամենը մեկ հպում EvocaTOUCH հավելվածում <br /> և վերջ: Քարտը կարող ես ստանալ նույնիսկ <br /> առանց Բանկ այցելելու՝ հավելվածում նշելով <br /> առաքման տարբերակը: Evocabank-ը մշտապես <br /> հոգում է քո հարմարավետության մասին:
                        </p>
                        <button className="btnmanramasn">Մանրամասն</button>
                    </div>
                </div>
                <div className="divonlineyevmobaylbanking">
                    <div className="div2imgheraxosnoutbook">
                        <img className="imgnoutbook" src="https://www.evoca.am/images-cache/banners/1/16170067683633/485x304.jpg" alt="" />
                        <img className="imgheraxos" src="https://www.evoca.am/images-cache/banners/1/16153622710205/140x300.jpg" alt="" />
                    </div>
                    <div className="divonlinemobayltexts">
                        <div className="textsonlinemobayl">
                            <h1 className="forwhitetext">Օնլայն և մոբայլ բանկինգ</h1>
                            <p className="forwhitetext">Evocabank-ը արագ, պարզ և նորարար ծառայություններ <br /> մատուցող բանկ է, որն առանձնանում է <br /> տեղեկատվական նորագույն տեխնոլոգիաների ակտիվ <br /> կիրառմամբ:</p>
                        </div>
                        <div className="divqrcodeappstore">
                            <img src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png" alt="" />
                            <p className="forwhitetext">Ներբեռնել հավելվածները`</p>  
                            <a className="forwhitetext" href="https://apps.apple.com/am/app/evocatouch/id970309076">App.store</a>
                            <a className="forwhitetext" href="https://play.google.com/store/apps/details?id=am.prometeybank.mobilebank&hl=en&gl=US"  >Google Play</a>
                        </div>
                    </div>
                </div>
                <div className="divverjinnorutyunner">
                    <div className="divuxakitextihamar">
                        <h1>Վերջին նորությունները</h1>
                        <button className="btnbolornorutyunnery">Բոլոր նորությունները</button>
                    </div>
                    <div className="divhencnorutyunnery">
                        <div className="divskzbi3">
                            <div className="divnkar1">
                                <img className="imgnkarnerforall" src="https://www.evoca.am/images-cache/news/1/17942090889803/439x320.png" alt="" />
                                <div className="divforspitakivritext">
                                    <p>Բանկային</p>
                                    <h2>Evocabank-ը թողարկել է <br /> պարտատոմսեր՝ դրամով, դոլարով ու…</h2>
                                    <p className="pfordata">09.11.2026</p>
                                </div>
                            </div>
                            <div className="divnkar2">
                                <img className="imgnkarnerforall" src="https://www.evoca.am/images-cache/news/1/17939507034916/439x320.png" alt="" />
                                <div className="divforspitakivritext">
                                    <p>Կենսակերպ</p>
                                    <h2>Evocabank-ը՝ TOON EXPO. INVEST <br /> 2026 Vol. 2-ին</h2>
                                    <p className="pfordata">06.11.2026</p>
                                </div>
                            </div>
                            <div className="divnkar3">
                                <img src="https://www.evoca.am/images-cache/news/1/17943953431384/439x320.png" alt="" className="imgnkarnerforall" />
                                <div className="divforspitakivritext">
                                    <p>Կենսակերպ</p>
                                    <h2>Կայացավ Evoca Conference 2026-ը</h2>
                                    <p className="pfordata">06.11.2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <br /><br />
            <footer>
                <div className="divfooteriskizb">
                    <div className="div1gic">
                        <h1 className="evocabankh1verjin">evocabank</h1>
                        <p>ք. Երևան, 0010, <br /> Հանրապետության 44/2</p>
                        <p><b>Evocabank-ը վերահսկվում է <br /> Հայաստանի Հանրապետության <br /> Կենտրոնական բանկի կողմից</b></p>
                        <p className="pforgraytext">1990 - 2026, © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ <br /> ՊԱՇՏՊԱՆՎԱԾ ԵՆ</p>
                    </div>
                    <div className="divgic2">
                        <p><b>Բանկի մասին</b></p>
                        <p>Մեր մասին</p>
                        <p>Ղեկավարություն</p>
                        <p>Բաժնետերեր</p>
                        <p>Հաշվետվություններ</p>
                        <p>Իրավական ակտեր</p>
                        <p>Սակագներ</p>
                        <p>Օտարվող գույք</p>
                        <p>Կառուցապատողներ</p>
                        <p>Գործընկեր ավտոսրահներ</p>
                        <p>Սակագների արխիվ</p>
                    </div>
                    <div className="divgic3">
                        <p><b>Օգտակար հղումներ</b></p>
                        <p>Հաճախորդի իրավունքները <br /> (Բողոքի ներկայացման <br /> կանոններ)</p>
                        <p>Հաճախորդի <br /> ռեզիդենտության <br /> չափանիշներ</p>
                        <p>Կարգավորում</p>
                        <p>Գաղտնիության <br /> քաղաքականություն</p>
                        <p>Ֆին. հաշտարար</p>
                        <p>Ֆինանսական <br /> հանցագործությունների <br /> կանխարգելում</p>
                        <p>Հղումներ Բանկի <br /> քարտապանների <br /> համար</p>
                    </div>
                    <div className="divgic4">
                        <p><b>Այլ հղումներ</b></p>
                        <p>EvocaONLINE</p>
                        <p>Պահատուփեր</p>
                        <p>Հաճախ տրվող հարցեր</p>
                        <p>Հայտարարություններ</p>
                        <p>Dibrary</p>
                        <p>Բուկլետներ</p>
                        <p>Հետադարձ կապ</p>
                        <p>Կայքի քարտեզ</p>
                    </div>
                    <div className="divgic5">
                        <p className="verjingicguyn">Բանկի հասցեները և <br /> աշխատաժամերը</p>
                        <p className="verjingicguyn">Կապ մեզ հետ</p>
                        <p className="verjingicguyn">+374 10 605555</p>
                        <p className="verjingicguyn">8444</p>
                    </div>
                </div>
                <div className="verjindiv">
                    <p className="pforgraytext">Հարգելի' այցելու, Կայքի որեւէ տեղեկատվության վերաբերյալ տարբեր լեզուներում անհամապատասխանություն, ինչպես նաեւ ռուսերեն եւ անգլերեն լեզուներում ոչ <br /> ամբողջական նյութ տեսնելու դեպքում խնդրում ենք առաջնորդվել հայերեն տարբերակով: "Էվոկաբանկ" ԲԲԸ-ն պատասխանատվություն չի կրում իր <br /> ինտերնետային կայքում հղված այլ անձանց ինտերնետային կայքերի բովանդակության ստույգության եւ արժանահավատության, այնտեղ տեղադրված գովազդների, <br /> ինչպես նաեւ երրորդ անձանց կողմից այդ կայքերում տեղադրված տեղեկատվության օգտագործման հնարավոր հետեւանքների համար:</p>
                </div>
            </footer>            
        </>
    )
}

export default Anhat