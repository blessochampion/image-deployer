"use strict";(()=>{var i="data",l={apartmentCmsItem:`[${i}=apartment-cms-item]`,countryCode:`[${i}=country-code]`,startingPriceList:`[${i}=starting-price-list]`,price:`[${i}=price]`,discount:`[${i}=discount]`,currency:`[${i}=currency]`,beHid:`[${i}-be-hid]`,destination:`[${i}=destination]`,offersList:`[${i}=offers-list]`,listItem:`[${i}=list-item]`,image:`[${i}=image]`,name:`[${i}=name]`,description:`[${i}=description]`,hotelName:`[${i}=hotel-name]`,hotelLink:`[${i}=hotel-link]`,moreDetails:`[${i}=more-details]`,offersPopup:`[${i}=offers-popup]`,offersPopupClose:`[${i}=close-btn]`,hotelReserveLink:`[${i}=hotel-reserve-link]`,hotelVillaReserveLink:`[${i}=hotel-villa-reserve-link]`,languageDropdown:`[${i}=language-dropdown]`,loadingSpinner:`[${i}=loading-spinner]`,cmsFilterEmptyState:"[fs-cmsfilter-element=empty]",startingfromItem:a=>`[${i}-be-hid=${a}]`};var P={DHDICBeach:"gpgos12767",DHDIJMalanga:"gptro12772",DHDIToubana:"gpsai12770",DHDIMahogany:"gpgos12769",DHDILangleyres:"gpgua27143",DHDIJungle:"mqros18592",DHDIJade:"agste21689",DHDIWINDLAND:"zzzzz25376",DHDILeCapMaison:"lcgro30400",DHDIChastenet:"agste21688",DHDILPSoleil:"mqsai18593",DHDISHANTI:"zzzzz25378",DHDIPavillon:"zzzzz25377",DHDIBELLEMARE:"zzzzz25379",DHDIPrincemaurice:"mupos25678",DHDIANAHITA:"zzzzz25380",DHDISamana:"agstm21687",FRANTHTLGrandCaseBe1:"frsai31536",DHDITInn:"ageng20433",DHDIBWaters:"agcro20496",DHDICuisinartgolf:"gpang25884"},h={gpgos12767:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/creole-beach-hotel-spa",codeIPlanet:"FRAN414"},gptro12772:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/le-jardin-malanga",codeIPlanet:"FRAN416"},gpsai12770:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/la-toubana-hotel-spa",codeIPlanet:"FRAN411"},gpgos12769:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/mahogany-hotel-residence-spa",codeIPlanet:"FRAN423"},gpgua27143:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/langley-resort-fort-royal",codeIPlanet:"GPAN32"},mqros18592:{destination:"Dominique",slug:"/hotels-et-villas/jungle-bay-dominica",codeIPlanet:"DMAN1"},agste21689:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/jade-mountain",codeIPlanet:"AGAN6"},zzzzz25376:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/windjammer-landing",codeIPlanet:"LCAN4"},lcgro30400:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/cap-maison",codeIPlanet:"LCLC8"},agste21688:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/anse-chastanet",codeIPlanet:"AGAN5"},mqsai18593:{destination:"Martinique",slug:"/hotels-et-villas/plein-soleil",codeIPlanet:"MQAN16"},zzzzz25378:{destination:"ile Maurice",slug:"/hotels-et-villas/shanti-maurice",codeIPlanet:"MUAN22"},zzzzz25377:{destination:"ile Maurice",slug:"/hotels-et-villas/lux-le-morne",codeIPlanet:"MUAN21"},zzzzz25379:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-belle-mare-plage",codeIPlanet:"MUAN20"},mupos25678:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-le-prince-maurice",codeIPlanet:"MUAN24"},zzzzz25380:{destination:"ile Maurice",slug:"/hotels-et-villas/anahita-the-resort",codeIPlanet:"MUAN19"},agstm21687:{destination:"Saint-Martin",slug:"/hotels-et-villas/la-samanna",codeIPlanet:"FRAN2350"},frsai31536:{destination:"Saint Martin",slug:"/hotels-et-villas/le-grand-case-beach-club",codeIPlanet:"FRFRA3"},ageng20433:{destination:"Antigua",slug:"/hotels-et-villas/the-inn-at-english-harbour",codeIPlanet:"AGAN4"},agcro20496:{destination:"Antigua",slug:"/hotels-et-villas/blue-waters",codeIPlanet:"AGAN1"},gpang25884:{destination:"Anguilla",slug:"/hotels-et-villas/aurora-anguilla-resort-golf-club",codeIPlanet:"GPAN30"}},R={AED:"\u062F.\u0625.",AFN:"Af",ALL:"L",AMD:"\u058F",ANG:"\u0192",AOA:"Kz",ARS:"AR$",AUD:"AU$",AWG:"\u0192",AZN:"\u043C\u0430\u043D",BAM:"KM",BBD:"BBD$",BDT:"\u09F3",BGN:"\u043B\u0432.",BHD:"BD",BIF:"FBu",BMD:"$",BND:"B$",BOB:"Bs.",BRL:"R$",BSD:"$",BTN:"Nu.",BWP:"P",BYN:"Br",BZD:"BZ$",CAD:"CA$",CDF:"FC",CHF:"Fr.",CKD:"$",CLP:"CL$",CNY:"CN\xA5",COP:"CO$",CRC:"\u20A1",CUC:"CUC$",CUP:"$MN",CVE:"CV$",CZK:"K\u010D",DJF:"Fdj",DKK:"kr.",DOP:"RD$",DZD:"DA",EGP:"E\xA3",EHP:"Ptas.",ERN:"Nkf",ETB:"Br",EUR:"\u20AC",FJD:"FJ$",FKP:"FK\xA3",FOK:"kr",GBP:"\xA3",GEL:"\u20BE",GGP:"\xA3",GHS:"GH\u20B5",GIP:"\xA3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"G$",HKD:"HK$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20AA",IMP:"\xA3",INR:"Rs.",IQD:"\u062F.\u0639.",IRR:"\uFDFC",ISK:"kr",JEP:"\xA3",JMD:"J$",JOD:"JD",JPY:"\xA5",KES:"KSh",KGS:"\u0441",KHR:"\u17DB",KID:"$",KMF:"CF",KPW:"\u20A9",KRW:"\u20A9",KWD:"KD",KYD:"CI$",KZT:"\u20B8",LAK:"\u20ADN",LBP:"LL.",LKR:"Rs.",LRD:"L$",LSL:"L",LYD:"LD",MAD:"DH",MDL:"L",MGA:"Ar",MKD:"den",MMK:"Ks",MNT:"\u20AE",MOP:"MOP$",MRU:"UM",MUR:"Rs.",MVR:"MRf",MWK:"MK",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"\u20A6",NIO:"C$",NOK:"kr",NPR:"Rs.",NZD:"NZ$",OMR:"OR",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20B1",PKR:"Rs.",PLN:"z\u0142",PND:"$",PRB:"\u0440.",PYG:"\u20B2",QAR:"QR",RON:"L",RSD:"din",RUB:"\u20BD",RWF:"FRw",SAR:"SR",SBD:"SI$",SCR:"Rs.",SDG:"\xA3SD",SEK:"kr",SGD:"S$",SHP:"\xA3",SLL:"Le",SLS:"Sl",SOS:"Sh.So.",SRD:"Sr$",SSP:"SS\xA3",STN:"Db",SVC:"\u20A1",SYP:"LS",SZL:"L",THB:"\u0E3F",TJS:"SM",TMT:"m.",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20B4",UGX:"USh",USD:"$",UYU:"$U",UZS:"\u0441\u0443\u043C",VED:"Bs.",VES:"Bs.F",VND:"\u20AB",VUV:"VT",WST:"T",XAF:"Fr",XCD:"$",XOF:"\u20A3",XPF:"\u20A3",YER:"YR",ZAR:"R",ZMW:"ZK",ZWB:"",ZWL:"Z$",Abkhazia:"",Artsakh:"\u0564\u0580."},y={it:"it_IT",es:"es_ES",fr:"fr_FR",en:"en_GB"};var A={"/thematiques/sejour-en-famille":"662fb242122480152c6627a0","/thematiques/voyages-de-noces":"6696610c5cde677e804d4445","/thematiques/paradis-des-golfeurs":"669660a9ef3cdd248cb82d61","/thematiques/all-inclusives":"662fb22a594236ee11d44699","/thematiques/escapade-spa-bien-etre":"662fb23536148e233473375b","/thematiques/activites-et-loisirs":"669d0be9b6a0d46a777ebe25","/thematiques/plongee-sous-marine":"662fb24c8c8a70f2955da310","/thematiques/roadtrip":"66966194ee069267617cc378"},E="https://deshotelsetdesiles.ccordier.workers.dev/",O="https://deshotelsetdesiles.i-planet.fr/dhdi-public/searchform.cgi";var H=()=>{document.querySelector(l.languageDropdown)?.querySelectorAll("a")?.forEach(s=>{s.addEventListener("click",()=>{})})},N=()=>{let a=$();return y[a]},$=()=>localStorage.getItem("wglang")||"fr";var S=(a,e)=>`${a.toLowerCase().trim()}-${e.toLowerCase().trim()}`,v=(a,e)=>{let s=$().toUpperCase(),t=h[e].codeIPlanet.toUpperCase();return`${O}?Lang=${s}&currency=${a.toUpperCase()}&HotelCode=${t}`};var T=(a,e,s,t)=>{let{pricePerNight:o,currency:r,plainBookLink:n}=e,c=a.querySelector(l.price);c&&(c.innerHTML=o);let u=a.querySelector(l.currency);if(u&&(u.innerHTML=R[r]),a.querySelectorAll(l.hotelReserveLink).forEach(p=>{p.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),window.open(n,"_blank")})}),a.querySelectorAll(l.hotelVillaReserveLink).forEach(p=>{p.addEventListener("click",f=>{f.preventDefault(),f.stopPropagation(),window.open(v(r,s),"_blank")})}),t){let{fieldData:{"discount-percentage":p}}=t,f=a.querySelector(l.discount);f&&p&&(f.innerHTML=`-${p}%`)}};var b=a=>{let e="?";for(let[s,t]of Object.entries(a))t&&(e+=`${s}=${t}&`);return e};var M=class{constructor(e,s,t){this.offerLookup={};let o=document.querySelector(l.cmsFilterEmptyState);o&&(o.style.opacity="0",o.style.display="none"),this.listInstance=e,this.itemTemplateElement=s;let n=t.splice(2);this.hotelsIds=[t,n],e.clearItems(),H(),this.loadingSpinner=document.querySelector(l.loadingSpinner)}async getGroupOffers(e){let{clearItems:s=!0,filter:t}=e||{};s&&this.listInstance.clearItems();let o=await this.getCMSOffers();if(!o)return;let r=o.items.filter(t||(()=>!0)),{offerLookup:n,offerMetaData:c}=this.generateOfferData(r);this.offerLookup=n;for(let u of this.hotelsIds){let d=u.join(","),g=await this.getGroupOffersData({hids:d,locale:N()});this.addHotelToCollection(g,t?c:void 0)}this.loadingSpinner&&(this.loadingSpinner.style.display="none")}async getGroupCategoryOffers(e){let s=t=>{let{isArchived:o,isDraft:r,fieldData:n}=t;return!o&&!r&&n.category===e};this.getGroupOffers({filter:s})}async getGroupThemeOffers(e){let s=t=>{let{isArchived:o,isDraft:r,fieldData:n}=t;return!o&&!r&&!!n.thematiques?.includes(e)};this.getGroupOffers({filter:s})}generateOfferData(e){let s=[],t={};return e.forEach(o=>{let{fieldData:{"hotel-or-property-api-id":r,"offer-api-name":n}}=o,c=S(r,n);s.push(c),t[c]=o}),{offerLookup:t,offerMetaData:s}}addHotelToCollection(e,s){if(e)for(let{prop:t,rates:o}of e.data){let r=o;s&&(r=o.filter(c=>{let{title:u}=c.rate,{hid:d}=t;return s.includes(S(d,u))}));let n=r.map(c=>this.createItem(t,c,this.itemTemplateElement));n.length>0&&this.listInstance.addItems(n)}}async getGroupOffersData(e){let s=E+"groupOffers"+b(e),o=await(await fetch(s)).json();return o.error||!o.data?null:o}async getCMSOffers(){let e=E+"cmsOffers",t=await(await fetch(e)).json();return t.items?t:null}createItem(e,s,t){let{rate:o,quotation:r}=s,{hid:n,title:c}=e,{image:u,title:d,plain_description:g}=o,p=this.offerLookup[S(n,d)],{destination:f,slug:L}=h[n],m=t.cloneNode(!0);this.bindOffersMetaData(m,{destination:f,image:u,hotelName:c,title:d,slug:L}),T(m,r,n,p);let I=m.querySelector(l.moreDetails);return I&&I.addEventListener("click",()=>{let D=m.querySelector(l.offersPopup);if(D){this.bindOffersMetaData(D,{destination:f,image:u,hotelName:c,title:d,slug:L,description:g}),T(D,r,n,p),D.style.opacity="1",D.style.display="flex";let C=m.querySelector(l.offersPopupClose);C&&C.addEventListener("click",()=>{D.style.opacity="0",D.style.display="none"})}}),m.style.display="flex",m}bindOffersMetaData(e,{destination:s,image:t,hotelName:o,title:r,slug:n,description:c}){let u=e.querySelector(l.destination),d=e.querySelector(l.image),g=e.querySelector(l.hotelName),p=e.querySelector(l.name),f=e.querySelector(l.description),L=e.querySelector(l.hotelLink);u&&(u.textContent=s),d&&(d.src=t?.url),g&&(g.innerHTML=o),p&&(p.innerHTML=r),f&&c&&(f.textContent=c),L&&n&&L.addEventListener("click",()=>{window.location.href=n})}};var G=a=>{let[e]=a.items,s=e.element,t=["gpgua27143","mqsai18593"],o=Object.values(P).filter(n=>!t.includes(n));return new M(a,s,o)};window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsload",async a=>{let e=G(a[0]),s=window.location.pathname;await e.getGroupThemeOffers(A[s])}]);})();
