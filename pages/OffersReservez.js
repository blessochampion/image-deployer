"use strict";(()=>{var i="data",l={apartmentCmsItem:`[${i}=apartment-cms-item]`,countryCode:`[${i}=country-code]`,startingPriceList:`[${i}=starting-price-list]`,price:`[${i}=price]`,discount:`[${i}=discount]`,currency:`[${i}=currency]`,beHid:`[${i}-be-hid]`,destination:`[${i}=destination]`,offersList:`[${i}=offers-list]`,listItem:`[${i}=list-item]`,image:`[${i}=image]`,name:`[${i}=name]`,description:`[${i}=description]`,hotelName:`[${i}=hotel-name]`,hotelLink:`[${i}=hotel-link]`,moreDetails:`[${i}=more-details]`,offersPopup:`[${i}=offers-popup]`,offersPopupClose:`[${i}=close-btn]`,hotelReserveLink:`[${i}=hotel-reserve-link]`,hotelVillaReserveLink:`[${i}=hotel-villa-reserve-link]`,languageDropdown:`[${i}=language-dropdown]`,loadingSpinner:`[${i}=loading-spinner]`,cmsFilterEmptyState:"[fs-cmsfilter-element=empty]",startingfromItem:o=>`[${i}-be-hid=${o}]`};var P={DHDICBeach:"gpgos12767",DHDIJMalanga:"gptro12772",DHDIToubana:"gpsai12770",DHDIMahogany:"gpgos12769",DHDILangleyres:"gpgua27143",DHDIJungle:"mqros18592",DHDIJade:"agste21689",DHDIWINDLAND:"zzzzz25376",DHDILeCapMaison:"lcgro30400",DHDIChastenet:"agste21688",DHDILPSoleil:"mqsai18593",DHDISHANTI:"zzzzz25378",DHDIPavillon:"zzzzz25377",DHDIBELLEMARE:"zzzzz25379",DHDIPrincemaurice:"mupos25678",DHDIANAHITA:"zzzzz25380",DHDISamana:"agstm21687",FRANTHTLGrandCaseBe1:"frsai31536",DHDITInn:"ageng20433",DHDIBWaters:"agcro20496",DHDICuisinartgolf:"gpang25884"},h={gpgos12767:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/creole-beach-hotel-spa",codeIPlanet:"FRAN414"},gptro12772:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/le-jardin-malanga",codeIPlanet:"FRAN416"},gpsai12770:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/la-toubana-hotel-spa",codeIPlanet:"FRAN411"},gpgos12769:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/mahogany-hotel-residence-spa",codeIPlanet:"FRAN423"},gpgua27143:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/langley-resort-fort-royal",codeIPlanet:"GPAN32"},mqros18592:{destination:"Dominique",slug:"/hotels-et-villas/jungle-bay-dominica",codeIPlanet:"DMAN1"},agste21689:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/jade-mountain",codeIPlanet:"AGAN6"},zzzzz25376:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/windjammer-landing",codeIPlanet:"LCAN4"},lcgro30400:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/cap-maison",codeIPlanet:"LCLC8"},agste21688:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/anse-chastanet",codeIPlanet:"AGAN5"},mqsai18593:{destination:"Martinique",slug:"/hotels-et-villas/plein-soleil",codeIPlanet:"MQAN16"},zzzzz25378:{destination:"ile Maurice",slug:"/hotels-et-villas/shanti-maurice",codeIPlanet:"MUAN22"},zzzzz25377:{destination:"ile Maurice",slug:"/hotels-et-villas/lux-le-morne",codeIPlanet:"MUAN21"},zzzzz25379:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-belle-mare-plage",codeIPlanet:"MUAN20"},mupos25678:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-le-prince-maurice",codeIPlanet:"MUAN24"},zzzzz25380:{destination:"ile Maurice",slug:"/hotels-et-villas/anahita-the-resort",codeIPlanet:"MUAN19"},agstm21687:{destination:"Saint-Martin",slug:"/hotels-et-villas/la-samanna",codeIPlanet:"FRAN2350"},frsai31536:{destination:"Saint Martin",slug:"/hotels-et-villas/le-grand-case-beach-club",codeIPlanet:"FRFRA3"},ageng20433:{destination:"Antigua",slug:"/hotels-et-villas/the-inn-at-english-harbour",codeIPlanet:"AGAN4"},agcro20496:{destination:"Antigua",slug:"/hotels-et-villas/blue-waters",codeIPlanet:"AGAN1"},gpang25884:{destination:"Anguilla",slug:"/hotels-et-villas/aurora-anguilla-resort-golf-club",codeIPlanet:"GPAN30"}},R={AED:"\u062F.\u0625.",AFN:"Af",ALL:"L",AMD:"\u058F",ANG:"\u0192",AOA:"Kz",ARS:"AR$",AUD:"AU$",AWG:"\u0192",AZN:"\u043C\u0430\u043D",BAM:"KM",BBD:"BBD$",BDT:"\u09F3",BGN:"\u043B\u0432.",BHD:"BD",BIF:"FBu",BMD:"$",BND:"B$",BOB:"Bs.",BRL:"R$",BSD:"$",BTN:"Nu.",BWP:"P",BYN:"Br",BZD:"BZ$",CAD:"CA$",CDF:"FC",CHF:"Fr.",CKD:"$",CLP:"CL$",CNY:"CN\xA5",COP:"CO$",CRC:"\u20A1",CUC:"CUC$",CUP:"$MN",CVE:"CV$",CZK:"K\u010D",DJF:"Fdj",DKK:"kr.",DOP:"RD$",DZD:"DA",EGP:"E\xA3",EHP:"Ptas.",ERN:"Nkf",ETB:"Br",EUR:"\u20AC",FJD:"FJ$",FKP:"FK\xA3",FOK:"kr",GBP:"\xA3",GEL:"\u20BE",GGP:"\xA3",GHS:"GH\u20B5",GIP:"\xA3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"G$",HKD:"HK$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20AA",IMP:"\xA3",INR:"Rs.",IQD:"\u062F.\u0639.",IRR:"\uFDFC",ISK:"kr",JEP:"\xA3",JMD:"J$",JOD:"JD",JPY:"\xA5",KES:"KSh",KGS:"\u0441",KHR:"\u17DB",KID:"$",KMF:"CF",KPW:"\u20A9",KRW:"\u20A9",KWD:"KD",KYD:"CI$",KZT:"\u20B8",LAK:"\u20ADN",LBP:"LL.",LKR:"Rs.",LRD:"L$",LSL:"L",LYD:"LD",MAD:"DH",MDL:"L",MGA:"Ar",MKD:"den",MMK:"Ks",MNT:"\u20AE",MOP:"MOP$",MRU:"UM",MUR:"Rs.",MVR:"MRf",MWK:"MK",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"\u20A6",NIO:"C$",NOK:"kr",NPR:"Rs.",NZD:"NZ$",OMR:"OR",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20B1",PKR:"Rs.",PLN:"z\u0142",PND:"$",PRB:"\u0440.",PYG:"\u20B2",QAR:"QR",RON:"L",RSD:"din",RUB:"\u20BD",RWF:"FRw",SAR:"SR",SBD:"SI$",SCR:"Rs.",SDG:"\xA3SD",SEK:"kr",SGD:"S$",SHP:"\xA3",SLL:"Le",SLS:"Sl",SOS:"Sh.So.",SRD:"Sr$",SSP:"SS\xA3",STN:"Db",SVC:"\u20A1",SYP:"LS",SZL:"L",THB:"\u0E3F",TJS:"SM",TMT:"m.",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20B4",UGX:"USh",USD:"$",UYU:"$U",UZS:"\u0441\u0443\u043C",VED:"Bs.",VES:"Bs.F",VND:"\u20AB",VUV:"VT",WST:"T",XAF:"Fr",XCD:"$",XOF:"\u20A3",XPF:"\u20A3",YER:"YR",ZAR:"R",ZMW:"ZK",ZWB:"",ZWL:"Z$",Abkhazia:"",Artsakh:"\u0564\u0580."},y={it:"it_IT",es:"es_ES",fr:"fr_FR",en:"en_GB"},A={"DERNI\xC8RE MINUTE":"735fe5e0858671cf3a5c14cbcc2470fe","R\xC9SERVEZ T\xD4T":"c5abb23caf056891f3902ff42ae2f9e0"};var M="https://deshotelsetdesiles.ccordier.workers.dev/",O="https://deshotelsetdesiles.i-planet.fr/dhdi-public/searchform.cgi";var H=()=>{document.querySelector(l.languageDropdown)?.querySelectorAll("a")?.forEach(s=>{s.addEventListener("click",()=>{})})},N=()=>{let o=$();return y[o]},$=()=>localStorage.getItem("wglang")||"fr";var S=(o,e)=>`${o.toLowerCase().trim()}-${e.toLowerCase().trim()}`,v=(o,e)=>{let s=$().toUpperCase(),t=h[e].codeIPlanet.toUpperCase();return`${O}?Lang=${s}&currency=${o.toUpperCase()}&HotelCode=${t}`};var T=(o,e,s,t)=>{let{pricePerNight:n,currency:r,plainBookLink:a}=e,c=o.querySelector(l.price);c&&(c.innerHTML=n);let p=o.querySelector(l.currency);p&&(p.innerHTML=R[r]);let u=o.querySelector(l.hotelReserveLink);u&&u.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),window.open(a,"_blank")});let d=o.querySelector(l.hotelVillaReserveLink);if(d&&d.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),window.open(v(r,s),"_blank")}),t){let{fieldData:{"discount-percentage":f}}=t,g=o.querySelector(l.discount);g&&f&&(g.innerHTML=`-${f}%`)}};var b=o=>{let e="?";for(let[s,t]of Object.entries(o))t&&(e+=`${s}=${t}&`);return e};var E=class{constructor(e,s,t){this.offerLookup={};this.cmsLoadEmptyState=document.querySelector(l.cmsFilterEmptyState),this.cmsLoadEmptyState&&this.cmsLoadEmptyState.classList.add("hide-empty-state"),this.listInstance=e,this.itemTemplateElement=s;let r=t.splice(2);this.hotelsIds=[t,r],e.clearItems(),H(),this.loadingSpinner=document.querySelector(l.loadingSpinner)}async getGroupOffers(e){let{clearItems:s=!0,filter:t}=e||{};s&&this.listInstance.clearItems();let n=await this.getCMSOffers();if(!n)return;let r=n.items.filter(t||(()=>!0)),{offerLookup:a,offerMetaData:c}=this.generateOfferData(r);this.offerLookup=a;for(let p of this.hotelsIds){let u=p.join(","),d=await this.getGroupOffersData({hids:u,locale:N()});this.addHotelToCollection(d,t?c:void 0)}this.loadingSpinner&&(this.loadingSpinner.style.display="none"),this.cmsLoadEmptyState&&this.cmsLoadEmptyState.classList.remove("hide-empty-state")}async getGroupCategoryOffers(e){let s=t=>{let{isArchived:n,isDraft:r,fieldData:a}=t;return!n&&!r&&a.category===e};this.getGroupOffers({filter:s})}async getGroupThemeOffers(e){let s=t=>{let{isArchived:n,isDraft:r,fieldData:a}=t;return!n&&!r&&!!a.thematiques?.includes(e)};this.getGroupOffers({filter:s})}generateOfferData(e){let s=[],t={};return e.forEach(n=>{let{fieldData:{"hotel-or-property-api-id":r,"offer-api-name":a}}=n,c=S(r,a);s.push(c),t[c]=n}),{offerLookup:t,offerMetaData:s}}addHotelToCollection(e,s){if(e)for(let{prop:t,rates:n}of e.data){let r=n;s&&(r=n.filter(c=>{let{title:p}=c.rate,{hid:u}=t;return s.includes(S(u,p))}));let a=r.map(c=>this.createItem(t,c,this.itemTemplateElement));a.length>0&&this.listInstance.addItems(a)}}async getGroupOffersData(e){let s=M+"groupOffers"+b(e),n=await(await fetch(s)).json();return n.error||!n.data?null:n}async getCMSOffers(){let e=M+"cmsOffers",t=await(await fetch(e)).json();return t.items?t:null}createItem(e,s,t){let{rate:n,quotation:r}=s,{hid:a,title:c}=e,{image:p,title:u,plain_description:d}=n,f=this.offerLookup[S(a,u)],{destination:g,slug:L}=h[a],m=t.cloneNode(!0);this.bindOffersMetaData(m,{destination:g,image:p,hotelName:c,title:u,slug:L}),T(m,r,a,f);let I=m.querySelector(l.moreDetails);return I&&I.addEventListener("click",()=>{let D=m.querySelector(l.offersPopup);if(D){this.bindOffersMetaData(D,{destination:g,image:p,hotelName:c,title:u,slug:L,description:d}),T(D,r,a,f),D.style.opacity="1",D.style.display="flex";let C=m.querySelector(l.offersPopupClose);C&&C.addEventListener("click",()=>{D.style.opacity="0",D.style.display="none"})}}),m.style.display="flex",m}bindOffersMetaData(e,{destination:s,image:t,hotelName:n,title:r,slug:a,description:c}){let p=e.querySelector(l.destination),u=e.querySelector(l.image),d=e.querySelector(l.hotelName),f=e.querySelector(l.name),g=e.querySelector(l.description),L=e.querySelector(l.hotelLink);p&&(p.textContent=s),u&&(u.src=t?.url),d&&(d.innerHTML=n),f&&(f.innerHTML=r),g&&c&&(g.textContent=c),L&&a&&L.addEventListener("click",()=>{window.location.href=a})}};var G=o=>{let[e]=o,{listInstance:s}=e;return F(s)},F=o=>{let[e]=o.items,s=e.element,t=["gpgua27143","mqsai18593"],n=Object.values(P).filter(a=>!t.includes(a));return new E(o,s,n)};window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsfilter",async o=>{await G(o).getGroupCategoryOffers(A["R\xC9SERVEZ T\xD4T"])}]);})();
