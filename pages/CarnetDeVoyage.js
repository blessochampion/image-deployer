"use strict";(()=>{var e="data",i={apartmentCmsItem:`[${e}=apartment-cms-item]`,countryCode:`[${e}=country-code]`,startingPriceList:`[${e}=starting-price-list]`,price:`[${e}=price]`,discount:`[${e}=discount]`,discountContainer:`[${e}=discount-container]`,currency:`[${e}=currency]`,beHid:`[${e}-be-hid]`,destination:`[${e}=destination]`,offersList:`[${e}=offers-list]`,offersListContainer:`[${e}=offers-list-container]`,listItem:`[${e}=list-item]`,image:`[${e}=image]`,name:`[${e}=name]`,description:`[${e}=description]`,hotelName:`[${e}=hotel-name]`,hotelLink:`[${e}=hotel-link]`,moreDetails:`[${e}=more-details]`,offersPopup:`[${e}=offers-popup]`,offersPopupClose:`[${e}=close-btn]`,hotelReserveLink:`[${e}=hotel-reserve-link]`,hotelVillaReserveLink:`[${e}=hotel-villa-reserve-link]`,languageDropdown:`[${e}=language-dropdown]`,loadingSpinner:`[${e}=loading-spinner]`,cmsFilterEmptyState:"[fs-cmsfilter-element=empty]",startingfromItem:s=>`[${e}-be-hid=${s}]`};var l={DHDICBeach:"gpgos12767",DHDIJMalanga:"gptro12772",DHDIToubana:"gpsai12770",DHDIMahogany:"gpgos12769",DHDILangleyres:"gpgua27143",DHDIJungle:"mqros18592",DHDIJade:"agste21689",DHDIWINDLAND:"zzzzz25376",DHDILeCapMaison:"lcgro30400",DHDIChastenet:"agste21688",DHDILPSoleil:"mqsai18593",DHDISHANTI:"zzzzz25378",DHDIPavillon:"zzzzz25377",DHDIBELLEMARE:"zzzzz25379",DHDIPrincemaurice:"mupos25678",DHDIANAHITA:"zzzzz25380",DHDISamana:"agstm21687",FRANTHTLGrandCaseBe1:"frsai31536",DHDITInn:"ageng20433",DHDIBWaters:"agcro20496",DHDICuisinartgolf:"gpang25884"};var g={AED:"\u062F.\u0625.",AFN:"Af",ALL:"L",AMD:"\u058F",ANG:"\u0192",AOA:"Kz",ARS:"AR$",AUD:"AU$",AWG:"\u0192",AZN:"\u043C\u0430\u043D",BAM:"KM",BBD:"BBD$",BDT:"\u09F3",BGN:"\u043B\u0432.",BHD:"BD",BIF:"FBu",BMD:"$",BND:"B$",BOB:"Bs.",BRL:"R$",BSD:"$",BTN:"Nu.",BWP:"P",BYN:"Br",BZD:"BZ$",CAD:"CA$",CDF:"FC",CHF:"Fr.",CKD:"$",CLP:"CL$",CNY:"CN\xA5",COP:"CO$",CRC:"\u20A1",CUC:"CUC$",CUP:"$MN",CVE:"CV$",CZK:"K\u010D",DJF:"Fdj",DKK:"kr.",DOP:"RD$",DZD:"DA",EGP:"E\xA3",EHP:"Ptas.",ERN:"Nkf",ETB:"Br",EUR:"\u20AC",FJD:"FJ$",FKP:"FK\xA3",FOK:"kr",GBP:"\xA3",GEL:"\u20BE",GGP:"\xA3",GHS:"GH\u20B5",GIP:"\xA3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"G$",HKD:"HK$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20AA",IMP:"\xA3",INR:"Rs.",IQD:"\u062F.\u0639.",IRR:"\uFDFC",ISK:"kr",JEP:"\xA3",JMD:"J$",JOD:"JD",JPY:"\xA5",KES:"KSh",KGS:"\u0441",KHR:"\u17DB",KID:"$",KMF:"CF",KPW:"\u20A9",KRW:"\u20A9",KWD:"KD",KYD:"CI$",KZT:"\u20B8",LAK:"\u20ADN",LBP:"LL.",LKR:"Rs.",LRD:"L$",LSL:"L",LYD:"LD",MAD:"DH",MDL:"L",MGA:"Ar",MKD:"den",MMK:"Ks",MNT:"\u20AE",MOP:"MOP$",MRU:"UM",MUR:"Rs.",MVR:"MRf",MWK:"MK",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"\u20A6",NIO:"C$",NOK:"kr",NPR:"Rs.",NZD:"NZ$",OMR:"OR",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20B1",PKR:"Rs.",PLN:"z\u0142",PND:"$",PRB:"\u0440.",PYG:"\u20B2",QAR:"QR",RON:"L",RSD:"din",RUB:"\u20BD",RWF:"FRw",SAR:"SR",SBD:"SI$",SCR:"Rs.",SDG:"\xA3SD",SEK:"kr",SGD:"S$",SHP:"\xA3",SLL:"Le",SLS:"Sl",SOS:"Sh.So.",SRD:"Sr$",SSP:"SS\xA3",STN:"Db",SVC:"\u20A1",SYP:"LS",SZL:"L",THB:"\u0E3F",TJS:"SM",TMT:"m.",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20B4",UGX:"USh",USD:"$",UYU:"$U",UZS:"\u0441\u0443\u043C",VED:"Bs.",VES:"Bs.F",VND:"\u20AB",VUV:"VT",WST:"T",XAF:"Fr",XCD:"$",XOF:"\u20A3",XPF:"\u20A3",YER:"YR",ZAR:"R",ZMW:"ZK",ZWB:"",ZWL:"Z$",Abkhazia:"",Artsakh:"\u0564\u0580."},u={it:"it_IT",es:"es_ES",fr:"fr_FR",en:"en_GB"};var D="https://deshotelsetdesiles.ccordier.workers.dev/";var m=s=>{let t="?";for(let[a,n]of Object.entries(s))n&&(t+=`${a}=${n}&`);return t};var p=()=>{document.querySelector(i.languageDropdown)?.querySelectorAll("a")?.forEach(a=>{a.addEventListener("click",()=>{setTimeout(()=>{window.location.reload()},800)})})},h=()=>{let s=S();return u[s]},S=()=>localStorage.getItem("wglang")||"fr";var r=class{constructor(t){this.hotelsIds=[],this.itemElements=[],t.querySelectorAll(i.beHid).forEach(a=>{let n=a.getAttribute(`${e}-be-hid`);n&&l[n]&&(this.hotelsIds.push(l[n]),this.itemElements.push(a))}),p()}async getHotelStartingPrice(){for(let t=0;t<this.hotelsIds.length;t++){let a=this.hotelsIds[t],n=this.itemElements[t],o=await this.getHotelStartingPriceData({property:a,locale:h()});if(o){let{quotation:{pricePerNight:I,currency:f}}=o,c=n.querySelector(i.price);c&&(c.innerHTML=I);let d=n.querySelector(i.currency);d&&(d.innerHTML=g[f])}}}async getHotelStartingPriceData(t){let a=D+"startingfrom"+m(t),o=await(await fetch(a)).json();return o.error||!o.data?null:o.data}};window.Webflow||(window.Webflow=[]);window.Webflow.push(async()=>{let s=document.querySelector(i.startingPriceList);s&&await new r(s).getHotelStartingPrice()});})();
