"use strict";(()=>{var r="data",l={apartmentCmsItem:`[${r}=apartment-cms-item]`,countryCode:`[${r}=country-code]`,startingPriceList:`[${r}=starting-price-list]`,price:`[${r}=price]`,discount:`[${r}=discount]`,currency:`[${r}=currency]`,beHid:`[${r}-be-hid]`,destination:`[${r}=destination]`,offersList:`[${r}=offers-list]`,listItem:`[${r}=list-item]`,image:`[${r}=image]`,name:`[${r}=name]`,description:`[${r}=description]`,hotelName:`[${r}=hotel-name]`,hotelLink:`[${r}=hotel-link]`,moreDetails:`[${r}=more-details]`,offersPopup:`[${r}=offers-popup]`,offersPopupClose:`[${r}=close-btn]`,hotelReserveLink:`[${r}=hotel-reserve-link]`,hotelVillaReserveLink:`[${r}=hotel-villa-reserve-link]`,languageDropdown:`[${r}=language-dropdown]`,loadingSpinner:`[${r}=loading-spinner]`,cmsLoadEmptyState:"[fs-cmsload-element=empty]",startingfromItem:o=>`[${r}-be-hid=${o}]`};var R={DHDICBeach:"gpgos12767",DHDIJMalanga:"gptro12772",DHDIToubana:"gpsai12770",DHDIMahogany:"gpgos12769",DHDILangleyres:"gpgua27143",DHDIJungle:"mqros18592",DHDIJade:"agste21689",DHDIWINDLAND:"zzzzz25376",DHDILeCapMaison:"lcgro30400",DHDIChastenet:"agste21688",DHDILPSoleil:"mqsai18593",DHDISHANTI:"zzzzz25378",DHDIPavillon:"zzzzz25377",DHDIBELLEMARE:"zzzzz25379",DHDIPrincemaurice:"mupos25678",DHDIANAHITA:"zzzzz25380",DHDISamana:"agstm21687",FRANTHTLGrandCaseBe1:"frsai31536",DHDITInn:"ageng20433",DHDIBWaters:"agcro20496",DHDICuisinartgolf:"gpang25884"},h={gpgos12767:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/creole-beach-hotel-spa",codeIPlanet:"FRAN414"},gptro12772:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/le-jardin-malanga",codeIPlanet:"FRAN416"},gpsai12770:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/la-toubana-hotel-spa",codeIPlanet:"FRAN411"},gpgos12769:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/mahogany-hotel-residence-spa",codeIPlanet:"FRAN423"},gpgua27143:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/langley-resort-fort-royal",codeIPlanet:"GPAN32"},mqros18592:{destination:"Dominique",slug:"/hotels-et-villas/jungle-bay-dominica",codeIPlanet:"DMAN1"},agste21689:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/jade-mountain",codeIPlanet:"AGAN6"},zzzzz25376:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/windjammer-landing",codeIPlanet:"LCAN4"},lcgro30400:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/cap-maison",codeIPlanet:"LCLC8"},agste21688:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/anse-chastanet",codeIPlanet:"AGAN5"},mqsai18593:{destination:"Martinique",slug:"/hotels-et-villas/plein-soleil",codeIPlanet:"MQAN16"},zzzzz25378:{destination:"ile Maurice",slug:"/hotels-et-villas/shanti-maurice",codeIPlanet:"MUAN22"},zzzzz25377:{destination:"ile Maurice",slug:"/hotels-et-villas/lux-le-morne",codeIPlanet:"MUAN21"},zzzzz25379:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-belle-mare-plage",codeIPlanet:"MUAN20"},mupos25678:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-le-prince-maurice",codeIPlanet:"MUAN24"},zzzzz25380:{destination:"ile Maurice",slug:"/hotels-et-villas/anahita-the-resort",codeIPlanet:"MUAN19"},agstm21687:{destination:"Saint-Martin",slug:"/hotels-et-villas/la-samanna",codeIPlanet:"FRAN2350"},frsai31536:{destination:"Saint Martin",slug:"/hotels-et-villas/le-grand-case-beach-club",codeIPlanet:"FRFRA3"},ageng20433:{destination:"Antigua",slug:"/hotels-et-villas/the-inn-at-english-harbour",codeIPlanet:"AGAN4"},agcro20496:{destination:"Antigua",slug:"/hotels-et-villas/blue-waters",codeIPlanet:"AGAN1"},gpang25884:{destination:"Anguilla",slug:"/hotels-et-villas/aurora-anguilla-resort-golf-club",codeIPlanet:"GPAN30"}},P={AED:"\u062F.\u0625.",AFN:"Af",ALL:"L",AMD:"\u058F",ANG:"\u0192",AOA:"Kz",ARS:"AR$",AUD:"AU$",AWG:"\u0192",AZN:"\u043C\u0430\u043D",BAM:"KM",BBD:"BBD$",BDT:"\u09F3",BGN:"\u043B\u0432.",BHD:"BD",BIF:"FBu",BMD:"$",BND:"B$",BOB:"Bs.",BRL:"R$",BSD:"$",BTN:"Nu.",BWP:"P",BYN:"Br",BZD:"BZ$",CAD:"CA$",CDF:"FC",CHF:"Fr.",CKD:"$",CLP:"CL$",CNY:"CN\xA5",COP:"CO$",CRC:"\u20A1",CUC:"CUC$",CUP:"$MN",CVE:"CV$",CZK:"K\u010D",DJF:"Fdj",DKK:"kr.",DOP:"RD$",DZD:"DA",EGP:"E\xA3",EHP:"Ptas.",ERN:"Nkf",ETB:"Br",EUR:"\u20AC",FJD:"FJ$",FKP:"FK\xA3",FOK:"kr",GBP:"\xA3",GEL:"\u20BE",GGP:"\xA3",GHS:"GH\u20B5",GIP:"\xA3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"G$",HKD:"HK$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20AA",IMP:"\xA3",INR:"Rs.",IQD:"\u062F.\u0639.",IRR:"\uFDFC",ISK:"kr",JEP:"\xA3",JMD:"J$",JOD:"JD",JPY:"\xA5",KES:"KSh",KGS:"\u0441",KHR:"\u17DB",KID:"$",KMF:"CF",KPW:"\u20A9",KRW:"\u20A9",KWD:"KD",KYD:"CI$",KZT:"\u20B8",LAK:"\u20ADN",LBP:"LL.",LKR:"Rs.",LRD:"L$",LSL:"L",LYD:"LD",MAD:"DH",MDL:"L",MGA:"Ar",MKD:"den",MMK:"Ks",MNT:"\u20AE",MOP:"MOP$",MRU:"UM",MUR:"Rs.",MVR:"MRf",MWK:"MK",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"\u20A6",NIO:"C$",NOK:"kr",NPR:"Rs.",NZD:"NZ$",OMR:"OR",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20B1",PKR:"Rs.",PLN:"z\u0142",PND:"$",PRB:"\u0440.",PYG:"\u20B2",QAR:"QR",RON:"L",RSD:"din",RUB:"\u20BD",RWF:"FRw",SAR:"SR",SBD:"SI$",SCR:"Rs.",SDG:"\xA3SD",SEK:"kr",SGD:"S$",SHP:"\xA3",SLL:"Le",SLS:"Sl",SOS:"Sh.So.",SRD:"Sr$",SSP:"SS\xA3",STN:"Db",SVC:"\u20A1",SYP:"LS",SZL:"L",THB:"\u0E3F",TJS:"SM",TMT:"m.",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20B4",UGX:"USh",USD:"$",UYU:"$U",UZS:"\u0441\u0443\u043C",VED:"Bs.",VES:"Bs.F",VND:"\u20AB",VUV:"VT",WST:"T",XAF:"Fr",XCD:"$",XOF:"\u20A3",XPF:"\u20A3",YER:"YR",ZAR:"R",ZMW:"ZK",ZWB:"",ZWL:"Z$",Abkhazia:"",Artsakh:"\u0564\u0580."},A={it:"it_IT",es:"es_ES",fr:"fr_FR",en:"en_GB"},y={"DERNI\xC8RE MINUTE":"735fe5e0858671cf3a5c14cbcc2470fe","R\xC9SERVEZ T\xD4T":"c5abb23caf056891f3902ff42ae2f9e0"};var M="https://deshotelsetdesiles.ccordier.workers.dev/",O="https://deshotelsetdesiles.i-planet.fr/dhdi-public/searchform.cgi";var H=()=>{document.querySelector(l.languageDropdown)?.querySelectorAll("a")?.forEach(s=>{s.addEventListener("click",()=>{})})},N=()=>{let o=$();return A[o]},$=()=>localStorage.getItem("wglang")||"fr";var S=(o,e)=>`${o.toLowerCase().trim()}-${e.toLowerCase().trim()}`,v=(o,e)=>{let s=$().toUpperCase(),t=h[e].codeIPlanet.toUpperCase();return`${O}?Lang=${s}&currency=${o.toUpperCase()}&HotelCode=${t}`};var T=(o,e,s,t)=>{let{pricePerNight:n,currency:a,plainBookLink:i}=e,c=o.querySelector(l.price);c&&(c.innerHTML=n);let f=o.querySelector(l.currency);if(f&&(f.innerHTML=P[a]),o.querySelectorAll(l.hotelReserveLink).forEach(u=>{u.addEventListener("click",d=>{d.preventDefault(),window.open(i,"_blank")})}),o.querySelectorAll(l.hotelVillaReserveLink).forEach(u=>{u.addEventListener("click",d=>{d.preventDefault(),window.open(v(a,s),"_blank")})}),t){let{fieldData:{"discount-percentage":u}}=t,d=o.querySelector(l.discount);d&&u&&(d.innerHTML=`-${u}%`)}};var b=o=>{let e="?";for(let[s,t]of Object.entries(o))t&&(e+=`${s}=${t}&`);return e};var E=class{constructor(e,s,t){this.offerLookup={};this.listInstance=e,this.itemTemplateElement=s;let a=t.splice(2);this.hotelsIds=[t,a],e.clearItems(),H(),this.loadingSpinner=document.querySelector(l.loadingSpinner);let i=document.querySelector(l.cmsLoadEmptyState);i&&setTimeout(()=>{i.style.display="none"},200)}async getGroupOffers(e){let{clearItems:s=!0,filter:t}=e||{};s&&this.listInstance.clearItems();let n=await this.getCMSOffers();if(!n)return;let a=n.items.filter(t||(()=>!0)),{offerLookup:i,offerMetaData:c}=this.generateOfferData(a);this.offerLookup=i;for(let f of this.hotelsIds){let p=f.join(","),g=await this.getGroupOffersData({hids:p,locale:N()});this.addHotelToCollection(g,t?c:void 0)}this.loadingSpinner&&(this.loadingSpinner.style.display="none")}async getGroupCategoryOffers(e){let s=t=>{let{isArchived:n,isDraft:a,fieldData:i}=t;return!n&&!a&&i.category===e};this.getGroupOffers({filter:s})}async getGroupThemeOffers(e){let s=t=>{let{isArchived:n,isDraft:a,fieldData:i}=t;return!n&&!a&&!!i.thematiques?.includes(e)};this.getGroupOffers({filter:s})}generateOfferData(e){let s=[],t={};return e.forEach(n=>{let{fieldData:{"hotel-or-property-api-id":a,"offer-api-name":i}}=n,c=S(a,i);s.push(c),t[c]=n}),{offerLookup:t,offerMetaData:s}}addHotelToCollection(e,s){if(e)for(let{prop:t,rates:n}of e.data){let a=n;s&&(a=n.filter(c=>{let{title:f}=c.rate,{hid:p}=t;return s.includes(S(p,f))}));let i=a.map(c=>this.createItem(t,c,this.itemTemplateElement));this.listInstance.addItems(i)}}async getGroupOffersData(e){let s=M+"groupOffers"+b(e),n=await(await fetch(s)).json();return n.error||!n.data?null:n}async getCMSOffers(){let e=M+"cmsOffers",t=await(await fetch(e)).json();return t.items?t:null}createItem(e,s,t){let{rate:n,quotation:a}=s,{hid:i,title:c}=e,{image:f,title:p,plain_description:g}=n,u=this.offerLookup[S(i,p)],{destination:d,slug:L}=h[i],m=t.cloneNode(!0);this.bindOffersMetaData(m,{destination:d,image:f,hotelName:c,title:p,slug:L}),T(m,a,i,u);let I=m.querySelector(l.moreDetails);return I&&I.addEventListener("click",()=>{let D=m.querySelector(l.offersPopup);if(D){this.bindOffersMetaData(D,{destination:d,image:f,hotelName:c,title:p,slug:L,description:g}),T(D,a,i,u),D.style.opacity="1",D.style.display="flex";let C=m.querySelector(l.offersPopupClose);C&&C.addEventListener("click",()=>{D.style.opacity="0",D.style.display="none"})}}),m.style.display="flex",m}bindOffersMetaData(e,{destination:s,image:t,hotelName:n,title:a,slug:i,description:c}){let f=e.querySelector(l.destination),p=e.querySelector(l.image),g=e.querySelector(l.hotelName),u=e.querySelector(l.name),d=e.querySelector(l.description),L=e.querySelector(l.hotelLink);f&&(f.textContent=s),p&&(p.src=t?.url),g&&(g.innerHTML=n),u&&(u.innerHTML=a),d&&c&&(d.textContent=c),L&&i&&L.addEventListener("click",()=>{window.location.href=i})}};var G=o=>{let[e]=o,{listInstance:s}=e;return z(s)},z=o=>{let[e]=o.items,s=e.element,t=["gpgua27143","mqsai18593"],n=Object.values(R).filter(i=>!t.includes(i));return new E(o,s,n)};window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsfilter",async o=>{await G(o).getGroupCategoryOffers(y["R\xC9SERVEZ T\xD4T"])}]);})();
