"use strict";(()=>{var n="data",c={apartmentCmsItem:`[${n}=apartment-cms-item]`,countryCode:`[${n}=country-code]`,startingPriceList:`[${n}=starting-price-list]`,price:`[${n}=price]`,discount:`[${n}=discount]`,discountContainer:`[${n}=discount-container]`,currency:`[${n}=currency]`,beHid:`[${n}-be-hid]`,destination:`[${n}=destination]`,offersList:`[${n}=offers-list]`,offersListContainer:`[${n}=offers-list-container]`,listItem:`[${n}=list-item]`,image:`[${n}=image]`,name:`[${n}=name]`,description:`[${n}=description]`,hotelName:`[${n}=hotel-name]`,hotelLink:`[${n}=hotel-link]`,hotelStartingPriceContainer:`[${n}=hotel-starting-price-container]`,moreDetails:`[${n}=more-details]`,offersPopup:`[${n}=offers-popup]`,offersPopupClose:`[${n}=close-btn]`,hotelReserveLink:`[${n}=hotel-reserve-link]`,hotelVillaReserveLink:`[${n}=hotel-villa-reserve-link]`,languageDropdown:`[${n}=language-dropdown]`,loadingSpinner:`[${n}=loading-spinner]`,cmsFilterEmptyState:"[fs-cmsfilter-element=empty]",startingfromItem:a=>`[${n}-be-hid=${a}]`};var L={gpgos12767:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/creole-beach-hotel-spa",codeIPlanet:"FRAN414",cmsId:"662c31001e349f24cd2b3798"},gptro12772:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/le-jardin-malanga",codeIPlanet:"FRAN416",cmsId:"662d2812adb5dcfda2f7f603"},gpsai12770:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/la-toubana-hotel-spa",codeIPlanet:"FRAN411",cmsId:"662d2791e2a9b95c3f167b66"},gpgos12769:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/mahogany-hotel-residence-spa",codeIPlanet:"FRAN423",cmsId:"662d284172cfd93d910374f1"},gpgua27143:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/langley-resort-fort-royal",codeIPlanet:"GPAN32",cmsId:"662d27c8bb3b09790efb71aa"},mqros18592:{destination:"Dominique",slug:"/hotels-et-villas/jungle-bay-dominica",codeIPlanet:"DMAN1",cmsId:"662d2541067e13a5ab49731e"},agste21689:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/jade-mountain",codeIPlanet:"AGAN6",cmsId:"662d2d22adb5dcfda2fba9a9"},zzzzz25376:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/windjammer-landing",codeIPlanet:"LCAN4",cmsId:"662d2d4972a9d6dd77b0d632"},lcgro30400:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/cap-maison",codeIPlanet:"LCLC8",cmsId:"662d2d02e15072c8b1ae9232"},agste21688:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/anse-chastanet",codeIPlanet:"AGAN5",cmsId:"662d2ca7ad1b319f8d78c277"},mqsai18593:{destination:"Martinique",slug:"/hotels-et-villas/plein-soleil",codeIPlanet:"MQAN16",cmsId:"662d28c0f345c01c38bf6cd1"},zzzzz25378:{destination:"ile Maurice",slug:"/hotels-et-villas/shanti-maurice",codeIPlanet:"MUAN22",cmsId:"662d30d68de08ece67876fbe"},zzzzz25377:{destination:"ile Maurice",slug:"/hotels-et-villas/lux-le-morne",codeIPlanet:"MUAN21",cmsId:"662d30b029d45f08ff6e34d2"},zzzzz25379:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-belle-mare-plage",codeIPlanet:"MUAN20",cmsId:"662d305fd797e4c4caaf3bb6"},mupos25678:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-le-prince-maurice",codeIPlanet:"MUAN24",cmsId:"662d30867a966fa325048bf1"},zzzzz25380:{destination:"ile Maurice",slug:"/hotels-et-villas/anahita-the-resort",codeIPlanet:"MUAN19",cmsId:"662d3014f345c01c38c58c77"},agstm21687:{destination:"Saint-Martin",slug:"/hotels-et-villas/la-samanna",codeIPlanet:"FRAN2350",cmsId:"662d28fd16f5b49f17cea723"},frsai31536:{destination:"Saint Martin",slug:"/hotels-et-villas/le-grand-case-beach-club",codeIPlanet:"FRFRA3",cmsId:"662d294c6c9c6f04b8c4606b"},ageng20433:{destination:"Antigua",slug:"/hotels-et-villas/the-inn-at-english-harbour",codeIPlanet:"AGAN4",cmsId:"662d251b7a966fa325fae0d2"},agcro20496:{destination:"Antigua",slug:"/hotels-et-villas/blue-waters",codeIPlanet:"AGAN1",cmsId:"662d24917848612de29a3436"},gpang25884:{destination:"Anguilla",slug:"/hotels-et-villas/aurora-anguilla-resort-golf-club",codeIPlanet:"GPAN30",cmsId:"662d24655bd94cb1e3cab3b6"}},A={AED:"\u062F.\u0625.",AFN:"Af",ALL:"L",AMD:"\u058F",ANG:"\u0192",AOA:"Kz",ARS:"AR$",AUD:"AU$",AWG:"\u0192",AZN:"\u043C\u0430\u043D",BAM:"KM",BBD:"BBD$",BDT:"\u09F3",BGN:"\u043B\u0432.",BHD:"BD",BIF:"FBu",BMD:"$",BND:"B$",BOB:"Bs.",BRL:"R$",BSD:"$",BTN:"Nu.",BWP:"P",BYN:"Br",BZD:"BZ$",CAD:"CA$",CDF:"FC",CHF:"Fr.",CKD:"$",CLP:"CL$",CNY:"CN\xA5",COP:"CO$",CRC:"\u20A1",CUC:"CUC$",CUP:"$MN",CVE:"CV$",CZK:"K\u010D",DJF:"Fdj",DKK:"kr.",DOP:"RD$",DZD:"DA",EGP:"E\xA3",EHP:"Ptas.",ERN:"Nkf",ETB:"Br",EUR:"\u20AC",FJD:"FJ$",FKP:"FK\xA3",FOK:"kr",GBP:"\xA3",GEL:"\u20BE",GGP:"\xA3",GHS:"GH\u20B5",GIP:"\xA3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"G$",HKD:"HK$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20AA",IMP:"\xA3",INR:"Rs.",IQD:"\u062F.\u0639.",IRR:"\uFDFC",ISK:"kr",JEP:"\xA3",JMD:"J$",JOD:"JD",JPY:"\xA5",KES:"KSh",KGS:"\u0441",KHR:"\u17DB",KID:"$",KMF:"CF",KPW:"\u20A9",KRW:"\u20A9",KWD:"KD",KYD:"CI$",KZT:"\u20B8",LAK:"\u20ADN",LBP:"LL.",LKR:"Rs.",LRD:"L$",LSL:"L",LYD:"LD",MAD:"DH",MDL:"L",MGA:"Ar",MKD:"den",MMK:"Ks",MNT:"\u20AE",MOP:"MOP$",MRU:"UM",MUR:"Rs.",MVR:"MRf",MWK:"MK",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"\u20A6",NIO:"C$",NOK:"kr",NPR:"Rs.",NZD:"NZ$",OMR:"OR",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20B1",PKR:"Rs.",PLN:"z\u0142",PND:"$",PRB:"\u0440.",PYG:"\u20B2",QAR:"QR",RON:"L",RSD:"din",RUB:"\u20BD",RWF:"FRw",SAR:"SR",SBD:"SI$",SCR:"Rs.",SDG:"\xA3SD",SEK:"kr",SGD:"S$",SHP:"\xA3",SLL:"Le",SLS:"Sl",SOS:"Sh.So.",SRD:"Sr$",SSP:"SS\xA3",STN:"Db",SVC:"\u20A1",SYP:"LS",SZL:"L",THB:"\u0E3F",TJS:"SM",TMT:"m.",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20B4",UGX:"USh",USD:"$",UYU:"$U",UZS:"\u0441\u0443\u043C",VED:"Bs.",VES:"Bs.F",VND:"\u20AB",VUV:"VT",WST:"T",XAF:"Fr",XCD:"$",XOF:"\u20A3",XPF:"\u20A3",YER:"YR",ZAR:"R",ZMW:"ZK",ZWB:"",ZWL:"Z$",Abkhazia:"",Artsakh:"\u0564\u0580."},b={it:"it_IT",es:"es_ES",fr:"fr_FR",en:"en_GB"},H={"DERNI\xC8RE MINUTE":"735fe5e0858671cf3a5c14cbcc2470fe","R\xC9SERVEZ T\xD4T":"c5abb23caf056891f3902ff42ae2f9e0"};var I="https://deshotelsetdesiles.ccordier.workers.dev/",N="https://deshotelsetdesiles.i-planet.fr/dhdi-public/searchform.cgi";var T=a=>{let e="?";for(let[t,s]of Object.entries(a))s&&(e+=`${t}=${s}&`);return e};var E=class{async getGroupOffersData(e){let t=I+"groupOffers"+T(e),r=await(await fetch(t)).json();return r.error||!r.data?null:r}async getSingleHotelOffersData(e){let t=I+"offers"+T(e),r=await(await fetch(t)).json();return r.error||!r.data?null:r}async getCMSOffers(){let e=I+"cmsOffers",s=await(await fetch(e)).json();return s.items?s:null}};var $=()=>{document.querySelector(c.languageDropdown)?.querySelectorAll("a")?.forEach(t=>{t.addEventListener("click",()=>{setTimeout(()=>{window.location.reload()},800)})})},v=()=>{let a=F();return b[a]},F=()=>localStorage.getItem("wglang")||"fr";var G=()=>{let a={};return Object.entries(L).forEach(([e,t])=>{a[t.cmsId]=e}),a},p=(a,e)=>`${a.toLowerCase().trim()}-${e.toLowerCase().trim()}`,k=(a,e)=>{let t=F().toUpperCase(),s=L[e].codeIPlanet.toUpperCase();return`${N}?Lang=${t}&currency=${a.toUpperCase()}&HotelCode=${s}`};var C=(a,e,t,s)=>{let{pricePerNight:r,currency:o,plainBookLink:i}=e;B(a,r,o);let f=a.querySelector(c.hotelReserveLink);f&&f.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),window.open(i,"_blank")});let d=a.querySelector(c.hotelVillaReserveLink);if(d&&d.addEventListener("click",l=>{l.preventDefault(),l.stopPropagation(),window.open(k(o,t),"_blank")}),s){let{fieldData:{"discount-percentage":l}}=s,u=a.querySelector(c.discount);u&&l&&(u.innerHTML=`-${l}%`);let m=a.querySelector(c.discountContainer);m&&!l&&(m.style.display="none")}},B=(a,e,t)=>{let s=a.querySelector(c.price);s&&(s.innerHTML=e);let r=a.querySelector(c.currency);r&&(r.innerHTML=A[t])};var M=class{constructor(e,t){this.listInstance=e;this.itemTemplateElement=t;this.offerLookup={};this.apiClient=new E;this.cmsFilterEmptyState=document.querySelector(c.cmsFilterEmptyState),this.cmsFilterEmptyState&&this.cmsFilterEmptyState.classList.add("hide-empty-state"),e.clearItems(),$(),this.loadingSpinner=document.querySelector(c.loadingSpinner)}async getGroupOffers(e){let{clearItems:t=!0,filter:s}=e||{};t&&this.listInstance.clearItems();let r=await this.apiClient.getCMSOffers();if(!r)return;let o=r.items.filter(s),i=this.generateHotelIds(o).join(","),{offerMetaData:f}=this.generateOfferData(o),d=v(),l=await this.apiClient.getGroupOffersData({hids:i,locale:d});if(!l||!l.data)return;let u=this.getAllOffers(l,f);this.addHotelToCollection(u),this.loadingSpinner&&(this.loadingSpinner.style.display="none"),this.cmsFilterEmptyState&&this.cmsFilterEmptyState.classList.remove("hide-empty-state")}async getGroupCategoryOffers(e,t=!1){let s=r=>{let{isArchived:o,isDraft:i,fieldData:f}=r;return o||i?!1:t?!f.thematiques||f.thematiques.length===0:f.category===e};this.getGroupOffers({filter:s})}async getGroupThemeOffers(e){let t=s=>{let{isArchived:r,isDraft:o,fieldData:i}=s;return r||o||!i.thematiques?!1:i.thematiques.includes(e)};this.getGroupOffers({filter:t})}generateHotelIds(e){let t=[],s=G();return e.forEach(r=>{let{fieldData:{"hotel-villa":o}}=r;t.push(s[o])}),Array.from(new Set(t))}getAllOffers(e,t){let s=[];return e.data.forEach(r=>{let{prop:{hid:o},rates:i}=r;i.forEach(f=>{let{name:d,title:l}=f.rate;(t.includes(p(o,d))||t.includes(p(o,l)))&&s.push({...r,rates:[f]})})}),s.sort((r,o)=>{let i=this.offerLookup[p(r.prop.hid,r.rates[0].rate.title)]||this.offerLookup[p(r.prop.hid,r.rates[0].rate.name)],f=this.offerLookup[p(o.prop.hid,o.rates[0].rate.title)]||this.offerLookup[p(o.prop.hid,o.rates[0].rate.name)],d=Number(i.fieldData.order)||0,l=Number(f.fieldData.order)||0;return d-l}),s}generateOfferData(e){let t=[];return e.forEach(s=>{let{fieldData:{"hotel-or-property-api-id":r,"offer-api-name":o}}=s,i=p(r,o);t.push(i),this.offerLookup[i]=s}),{offerMetaData:t}}addHotelToCollection(e){for(let{prop:t,rates:s}of e){let r=s.map(o=>this.createItem(t,o,this.itemTemplateElement));this.listInstance.addItems(r)}}createItem(e,t,s){let{rate:r,quotation:o}=t,{hid:i,title:f,property:d}=e,{image:l,title:u,plain_description:m,name:S}=r,h=this.offerLookup[p(i||d,u)]||this.offerLookup[p(i||d,S)],{destination:y,slug:O}=L[i||d],g=s.cloneNode(!0);this.bindOffersMetaData(g,{destination:y,image:l,hotelName:f,title:u,slug:O}),C(g,o,i,h);let P=g.querySelector(c.moreDetails);return P&&P.addEventListener("click",()=>{let D=g.querySelector(c.offersPopup);if(D){this.bindOffersMetaData(D,{destination:y,image:l,hotelName:f,title:u,slug:O,description:m}),C(D,o,i,h),D.style.opacity="1",D.style.display="flex";let R=g.querySelector(c.offersPopupClose);R&&R.addEventListener("click",()=>{D.style.opacity="0",D.style.display="none"})}}),g.style.display="flex",g}bindOffersMetaData(e,{destination:t,image:s,hotelName:r,title:o,slug:i,description:f}){let d=e.querySelector(c.destination),l=e.querySelector(c.image),u=e.querySelector(c.hotelName),m=e.querySelector(c.name),S=e.querySelector(c.description),h=e.querySelector(c.hotelLink);d&&(d.textContent=t),l&&(l.src=s?.url),u&&(u.innerHTML=r),m&&(m.innerHTML=o),S&&f&&(S.textContent=f),h&&i&&h.addEventListener("click",()=>{window.location.href=i})}};var z=a=>{let[e]=a,{listInstance:t}=e;return U(t)},U=a=>{let[e]=a.items,t=e.element;return new M(a,t)};window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsfilter",async a=>{await z(a).getGroupCategoryOffers(H["R\xC9SERVEZ T\xD4T"])}]);})();
