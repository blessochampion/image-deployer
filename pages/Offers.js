"use strict";(()=>{var o="data",l={apartmentCmsItem:`[${o}=apartment-cms-item]`,countryCode:`[${o}=country-code]`,startingPriceList:`[${o}=starting-price-list]`,price:`[${o}=price]`,discount:`[${o}=discount]`,discountContainer:`[${o}=discount-container]`,currency:`[${o}=currency]`,beHid:`[${o}-be-hid]`,destination:`[${o}=destination]`,offersList:`[${o}=offers-list]`,listItem:`[${o}=list-item]`,image:`[${o}=image]`,name:`[${o}=name]`,description:`[${o}=description]`,hotelName:`[${o}=hotel-name]`,hotelLink:`[${o}=hotel-link]`,moreDetails:`[${o}=more-details]`,offersPopup:`[${o}=offers-popup]`,offersPopupClose:`[${o}=close-btn]`,hotelReserveLink:`[${o}=hotel-reserve-link]`,hotelVillaReserveLink:`[${o}=hotel-villa-reserve-link]`,languageDropdown:`[${o}=language-dropdown]`,loadingSpinner:`[${o}=loading-spinner]`,cmsFilterEmptyState:"[fs-cmsfilter-element=empty]",startingfromItem:n=>`[${o}-be-hid=${n}]`};var P={DHDICBeach:"gpgos12767",DHDIJMalanga:"gptro12772",DHDIToubana:"gpsai12770",DHDIMahogany:"gpgos12769",DHDILangleyres:"gpgua27143",DHDIJungle:"mqros18592",DHDIJade:"agste21689",DHDIWINDLAND:"zzzzz25376",DHDILeCapMaison:"lcgro30400",DHDIChastenet:"agste21688",DHDILPSoleil:"mqsai18593",DHDISHANTI:"zzzzz25378",DHDIPavillon:"zzzzz25377",DHDIBELLEMARE:"zzzzz25379",DHDIPrincemaurice:"mupos25678",DHDIANAHITA:"zzzzz25380",DHDISamana:"agstm21687",FRANTHTLGrandCaseBe1:"frsai31536",DHDITInn:"ageng20433",DHDIBWaters:"agcro20496",DHDICuisinartgolf:"gpang25884"},S={gpgos12767:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/creole-beach-hotel-spa",codeIPlanet:"FRAN414"},gptro12772:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/le-jardin-malanga",codeIPlanet:"FRAN416"},gpsai12770:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/la-toubana-hotel-spa",codeIPlanet:"FRAN411"},gpgos12769:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/mahogany-hotel-residence-spa",codeIPlanet:"FRAN423"},gpgua27143:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/langley-resort-fort-royal",codeIPlanet:"GPAN32"},mqros18592:{destination:"Dominique",slug:"/hotels-et-villas/jungle-bay-dominica",codeIPlanet:"DMAN1"},agste21689:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/jade-mountain",codeIPlanet:"AGAN6"},zzzzz25376:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/windjammer-landing",codeIPlanet:"LCAN4"},lcgro30400:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/cap-maison",codeIPlanet:"LCLC8"},agste21688:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/anse-chastanet",codeIPlanet:"AGAN5"},mqsai18593:{destination:"Martinique",slug:"/hotels-et-villas/plein-soleil",codeIPlanet:"MQAN16"},zzzzz25378:{destination:"ile Maurice",slug:"/hotels-et-villas/shanti-maurice",codeIPlanet:"MUAN22"},zzzzz25377:{destination:"ile Maurice",slug:"/hotels-et-villas/lux-le-morne",codeIPlanet:"MUAN21"},zzzzz25379:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-belle-mare-plage",codeIPlanet:"MUAN20"},mupos25678:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-le-prince-maurice",codeIPlanet:"MUAN24"},zzzzz25380:{destination:"ile Maurice",slug:"/hotels-et-villas/anahita-the-resort",codeIPlanet:"MUAN19"},agstm21687:{destination:"Saint-Martin",slug:"/hotels-et-villas/la-samanna",codeIPlanet:"FRAN2350"},frsai31536:{destination:"Saint Martin",slug:"/hotels-et-villas/le-grand-case-beach-club",codeIPlanet:"FRFRA3"},ageng20433:{destination:"Antigua",slug:"/hotels-et-villas/the-inn-at-english-harbour",codeIPlanet:"AGAN4"},agcro20496:{destination:"Antigua",slug:"/hotels-et-villas/blue-waters",codeIPlanet:"AGAN1"},gpang25884:{destination:"Anguilla",slug:"/hotels-et-villas/aurora-anguilla-resort-golf-club",codeIPlanet:"GPAN30"}},y={AED:"\u062F.\u0625.",AFN:"Af",ALL:"L",AMD:"\u058F",ANG:"\u0192",AOA:"Kz",ARS:"AR$",AUD:"AU$",AWG:"\u0192",AZN:"\u043C\u0430\u043D",BAM:"KM",BBD:"BBD$",BDT:"\u09F3",BGN:"\u043B\u0432.",BHD:"BD",BIF:"FBu",BMD:"$",BND:"B$",BOB:"Bs.",BRL:"R$",BSD:"$",BTN:"Nu.",BWP:"P",BYN:"Br",BZD:"BZ$",CAD:"CA$",CDF:"FC",CHF:"Fr.",CKD:"$",CLP:"CL$",CNY:"CN\xA5",COP:"CO$",CRC:"\u20A1",CUC:"CUC$",CUP:"$MN",CVE:"CV$",CZK:"K\u010D",DJF:"Fdj",DKK:"kr.",DOP:"RD$",DZD:"DA",EGP:"E\xA3",EHP:"Ptas.",ERN:"Nkf",ETB:"Br",EUR:"\u20AC",FJD:"FJ$",FKP:"FK\xA3",FOK:"kr",GBP:"\xA3",GEL:"\u20BE",GGP:"\xA3",GHS:"GH\u20B5",GIP:"\xA3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"G$",HKD:"HK$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20AA",IMP:"\xA3",INR:"Rs.",IQD:"\u062F.\u0639.",IRR:"\uFDFC",ISK:"kr",JEP:"\xA3",JMD:"J$",JOD:"JD",JPY:"\xA5",KES:"KSh",KGS:"\u0441",KHR:"\u17DB",KID:"$",KMF:"CF",KPW:"\u20A9",KRW:"\u20A9",KWD:"KD",KYD:"CI$",KZT:"\u20B8",LAK:"\u20ADN",LBP:"LL.",LKR:"Rs.",LRD:"L$",LSL:"L",LYD:"LD",MAD:"DH",MDL:"L",MGA:"Ar",MKD:"den",MMK:"Ks",MNT:"\u20AE",MOP:"MOP$",MRU:"UM",MUR:"Rs.",MVR:"MRf",MWK:"MK",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"\u20A6",NIO:"C$",NOK:"kr",NPR:"Rs.",NZD:"NZ$",OMR:"OR",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20B1",PKR:"Rs.",PLN:"z\u0142",PND:"$",PRB:"\u0440.",PYG:"\u20B2",QAR:"QR",RON:"L",RSD:"din",RUB:"\u20BD",RWF:"FRw",SAR:"SR",SBD:"SI$",SCR:"Rs.",SDG:"\xA3SD",SEK:"kr",SGD:"S$",SHP:"\xA3",SLL:"Le",SLS:"Sl",SOS:"Sh.So.",SRD:"Sr$",SSP:"SS\xA3",STN:"Db",SVC:"\u20A1",SYP:"LS",SZL:"L",THB:"\u0E3F",TJS:"SM",TMT:"m.",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20B4",UGX:"USh",USD:"$",UYU:"$U",UZS:"\u0441\u0443\u043C",VED:"Bs.",VES:"Bs.F",VND:"\u20AB",VUV:"VT",WST:"T",XAF:"Fr",XCD:"$",XOF:"\u20A3",XPF:"\u20A3",YER:"YR",ZAR:"R",ZMW:"ZK",ZWB:"",ZWL:"Z$",Abkhazia:"",Artsakh:"\u0564\u0580."},R={it:"it_IT",es:"es_ES",fr:"fr_FR",en:"en_GB"};var E="https://deshotelsetdesiles.ccordier.workers.dev/",A="https://deshotelsetdesiles.i-planet.fr/dhdi-public/searchform.cgi";var H=()=>{document.querySelector(l.languageDropdown)?.querySelectorAll("a")?.forEach(t=>{t.addEventListener("click",()=>{})})},O=()=>{let n=N();return R[n]},N=()=>localStorage.getItem("wglang")||"fr";var h=(n,e)=>`${n.toLowerCase().trim()}-${e.toLowerCase().trim()}`,$=(n,e)=>{let t=N().toUpperCase(),s=S[e].codeIPlanet.toUpperCase();return`${A}?Lang=${t}&currency=${n.toUpperCase()}&HotelCode=${s}`};var T=(n,e,t,s)=>{let{pricePerNight:i,currency:r,plainBookLink:a}=e,c=n.querySelector(l.price);c&&(c.innerHTML=i);let d=n.querySelector(l.currency);d&&(d.innerHTML=y[r]);let u=n.querySelector(l.hotelReserveLink);u&&u.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),window.open(a,"_blank")});let p=n.querySelector(l.hotelVillaReserveLink);if(p&&p.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),window.open($(r,t),"_blank")}),s){let{fieldData:{"discount-percentage":f}}=s,m=n.querySelector(l.discount);m&&f&&(m.innerHTML=`-${f}%`);let g=n.querySelector(l.discountContainer);g&&!f&&(g.style.display="none")}};var v=n=>{let e="?";for(let[t,s]of Object.entries(n))s&&(e+=`${t}=${s}&`);return e};var M=class{constructor(e,t,s){this.offerLookup={};this.cmsLoadEmptyState=document.querySelector(l.cmsFilterEmptyState),this.cmsLoadEmptyState&&this.cmsLoadEmptyState.classList.add("hide-empty-state"),this.listInstance=e,this.itemTemplateElement=t;let r=s.splice(2);this.hotelsIds=[s,r],e.clearItems(),H(),this.loadingSpinner=document.querySelector(l.loadingSpinner)}async getGroupOffers(e){let{clearItems:t=!0,filter:s}=e||{};t&&this.listInstance.clearItems();let i=await this.getCMSOffers();if(!i)return;let r=i.items.filter(s||(()=>!0)),{offerLookup:a,offerMetaData:c}=this.generateOfferData(r);this.offerLookup=a;for(let d of this.hotelsIds){let u=d.join(","),p=await this.getGroupOffersData({hids:u,locale:O()});this.addHotelToCollection(p,s?c:void 0)}this.loadingSpinner&&(this.loadingSpinner.style.display="none"),this.cmsLoadEmptyState&&this.cmsLoadEmptyState.classList.remove("hide-empty-state")}async getGroupCategoryOffers(e){let t=s=>{let{isArchived:i,isDraft:r,fieldData:a}=s;return!i&&!r&&a.category===e};this.getGroupOffers({filter:t})}async getGroupThemeOffers(e){let t=s=>{let{isArchived:i,isDraft:r,fieldData:a}=s;return!i&&!r&&!!a.thematiques?.includes(e)};this.getGroupOffers({filter:t})}generateOfferData(e){let t=[],s={};return e.forEach(i=>{let{fieldData:{"hotel-or-property-api-id":r,"offer-api-name":a}}=i,c=h(r,a);t.push(c),s[c]=i}),{offerLookup:s,offerMetaData:t}}addHotelToCollection(e,t){if(e)for(let{prop:s,rates:i}of e.data){let r=i;t&&(r=i.filter(c=>{let{title:d,name:u}=c.rate,{hid:p}=s;return t.includes(h(p,u))||t.includes(h(p,d))}));let a=r.map(c=>this.createItem(s,c,this.itemTemplateElement));a.length>0&&this.listInstance.addItems(a)}}async getGroupOffersData(e){let t=E+"groupOffers"+v(e),i=await(await fetch(t)).json();return i.error||!i.data?null:i}async getCMSOffers(){let e=E+"cmsOffers",s=await(await fetch(e)).json();return s.items?s:null}createItem(e,t,s){let{rate:i,quotation:r}=t,{hid:a,title:c}=e,{image:d,title:u,plain_description:p}=i,f=this.offerLookup[h(a,u)],{destination:m,slug:g}=S[a],D=s.cloneNode(!0);this.bindOffersMetaData(D,{destination:m,image:d,hotelName:c,title:u,slug:g}),T(D,r,a,f);let I=D.querySelector(l.moreDetails);return I&&I.addEventListener("click",()=>{let L=D.querySelector(l.offersPopup);if(L){this.bindOffersMetaData(L,{destination:m,image:d,hotelName:c,title:u,slug:g,description:p}),T(L,r,a,f),L.style.opacity="1",L.style.display="flex";let C=D.querySelector(l.offersPopupClose);C&&C.addEventListener("click",()=>{L.style.opacity="0",L.style.display="none"})}}),D.style.display="flex",D}bindOffersMetaData(e,{destination:t,image:s,hotelName:i,title:r,slug:a,description:c}){let d=e.querySelector(l.destination),u=e.querySelector(l.image),p=e.querySelector(l.hotelName),f=e.querySelector(l.name),m=e.querySelector(l.description),g=e.querySelector(l.hotelLink);d&&(d.textContent=t),u&&(u.src=s?.url),p&&(p.innerHTML=i),f&&(f.innerHTML=r),m&&c&&(m.textContent=c),g&&a&&g.addEventListener("click",()=>{window.location.href=a})}};var b=n=>{let[e]=n,{listInstance:t}=e;return G(t)},G=n=>{let[e]=n.items,t=e.element,s=["gpgua27143","mqsai18593"],i=Object.values(P).filter(a=>!s.includes(a));return new M(n,t,i)};window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsfilter",async n=>{await b(n).getGroupOffers()}]);})();
