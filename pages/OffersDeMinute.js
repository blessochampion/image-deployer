"use strict";(()=>{var i="data",r={apartmentCmsItem:`[${i}=apartment-cms-item]`,countryCode:`[${i}=country-code]`,startingPriceList:`[${i}=starting-price-list]`,price:`[${i}=price]`,currency:`[${i}=currency]`,beHid:`[${i}-be-hid]`,destination:`[${i}=destination]`,offersList:`[${i}=offers-list]`,listItem:`[${i}=list-item]`,image:`[${i}=image]`,name:`[${i}=name]`,description:`[${i}=description]`,hotelName:`[${i}=hotel-name]`,hotelLink:`[${i}=hotel-link]`,moreDetails:`[${i}=more-details]`,offersPopup:`[${i}=offers-popup]`,offersPopupClose:`[${i}=close-btn]`,hotelReserveLink:`[${i}=hotel-reserve-link]`,hotelVillaReserveLink:`[${i}=hotel-villa-reserve-link]`,languageDropdown:`[${i}=language-dropdown]`,loadingSpinner:`[${i}=loading-spinner]`,startingfromItem:u=>`[${i}-be-hid=${u}]`};var R={DHDICBeach:"gpgos12767",DHDIJMalanga:"gptro12772",DHDIToubana:"gpsai12770",DHDIMahogany:"gpgos12769",DHDILangleyres:"gpgua27143",DHDIJungle:"mqros18592",DHDIJade:"agste21689",DHDIWINDLAND:"zzzzz25376",DHDILeCapMaison:"lcgro30400",DHDIChastenet:"agste21688",DHDILPSoleil:"mqsai18593",DHDISHANTI:"zzzzz25378",DHDIPavillon:"zzzzz25377",DHDIBELLEMARE:"zzzzz25379",DHDIPrincemaurice:"mupos25678",DHDIANAHITA:"zzzzz25380",DHDISamana:"agstm21687",FRANTHTLGrandCaseBe1:"frsai31536",DHDITInn:"ageng20433",DHDIBWaters:"agcro20496",DHDICuisinartgolf:"gpang25884"},S={gpgos12767:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/creole-beach-hotel-spa"},gptro12772:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/le-jardin-malanga"},gpsai12770:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/la-toubana-hotel-spa"},gpgos12769:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/mahogany-hotel-residence-spa"},gpgua27143:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/langley-resort-fort-royal"},mqros18592:{destination:"Dominique",slug:"/hotels-et-villas/jungle-bay-dominica"},agste21689:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/jade-mountain"},zzzzz25376:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/windjammer-landing"},lcgro30400:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/cap-maison"},agste21688:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/anse-chastanet"},mqsai18593:{destination:"Martinique",slug:"/hotels-et-villas/plein-soleil"},zzzzz25378:{destination:"ile Maurice",slug:"/hotels-et-villas/shanti-maurice"},zzzzz25377:{destination:"ile Maurice",slug:"/hotels-et-villas/lux-le-morne"},zzzzz25379:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-belle-mare-plage"},mupos25678:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-le-prince-maurice"},zzzzz25380:{destination:"ile Maurice",slug:"/hotels-et-villas/anahita-the-resort"},agstm21687:{destination:"Saint-Martin",slug:"/hotels-et-villas/la-samanna"},frsai31536:{destination:"Saint Martin",slug:"/hotels-et-villas/le-grand-case-beach-club"},ageng20433:{destination:"Antigua",slug:"/hotels-et-villas/the-inn-at-english-harbour"},agcro20496:{destination:"Antigua",slug:"/hotels-et-villas/blue-waters"},gpang25884:{destination:"Anguilla",slug:"/hotels-et-villas/aurora-anguilla-resort-golf-club"}},H={AED:"\u062F.\u0625.",AFN:"Af",ALL:"L",AMD:"\u058F",ANG:"\u0192",AOA:"Kz",ARS:"AR$",AUD:"AU$",AWG:"\u0192",AZN:"\u043C\u0430\u043D",BAM:"KM",BBD:"BBD$",BDT:"\u09F3",BGN:"\u043B\u0432.",BHD:"BD",BIF:"FBu",BMD:"$",BND:"B$",BOB:"Bs.",BRL:"R$",BSD:"$",BTN:"Nu.",BWP:"P",BYN:"Br",BZD:"BZ$",CAD:"CA$",CDF:"FC",CHF:"Fr.",CKD:"$",CLP:"CL$",CNY:"CN\xA5",COP:"CO$",CRC:"\u20A1",CUC:"CUC$",CUP:"$MN",CVE:"CV$",CZK:"K\u010D",DJF:"Fdj",DKK:"kr.",DOP:"RD$",DZD:"DA",EGP:"E\xA3",EHP:"Ptas.",ERN:"Nkf",ETB:"Br",EUR:"\u20AC",FJD:"FJ$",FKP:"FK\xA3",FOK:"kr",GBP:"\xA3",GEL:"\u20BE",GGP:"\xA3",GHS:"GH\u20B5",GIP:"\xA3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"G$",HKD:"HK$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20AA",IMP:"\xA3",INR:"Rs.",IQD:"\u062F.\u0639.",IRR:"\uFDFC",ISK:"kr",JEP:"\xA3",JMD:"J$",JOD:"JD",JPY:"\xA5",KES:"KSh",KGS:"\u0441",KHR:"\u17DB",KID:"$",KMF:"CF",KPW:"\u20A9",KRW:"\u20A9",KWD:"KD",KYD:"CI$",KZT:"\u20B8",LAK:"\u20ADN",LBP:"LL.",LKR:"Rs.",LRD:"L$",LSL:"L",LYD:"LD",MAD:"DH",MDL:"L",MGA:"Ar",MKD:"den",MMK:"Ks",MNT:"\u20AE",MOP:"MOP$",MRU:"UM",MUR:"Rs.",MVR:"MRf",MWK:"MK",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"\u20A6",NIO:"C$",NOK:"kr",NPR:"Rs.",NZD:"NZ$",OMR:"OR",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20B1",PKR:"Rs.",PLN:"z\u0142",PND:"$",PRB:"\u0440.",PYG:"\u20B2",QAR:"QR",RON:"L",RSD:"din",RUB:"\u20BD",RWF:"FRw",SAR:"SR",SBD:"SI$",SCR:"Rs.",SDG:"\xA3SD",SEK:"kr",SGD:"S$",SHP:"\xA3",SLL:"Le",SLS:"Sl",SOS:"Sh.So.",SRD:"Sr$",SSP:"SS\xA3",STN:"Db",SVC:"\u20A1",SYP:"LS",SZL:"L",THB:"\u0E3F",TJS:"SM",TMT:"m.",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20B4",UGX:"USh",USD:"$",UYU:"$U",UZS:"\u0441\u0443\u043C",VED:"Bs.",VES:"Bs.F",VND:"\u20AB",VUV:"VT",WST:"T",XAF:"Fr",XCD:"$",XOF:"\u20A3",XPF:"\u20A3",YER:"YR",ZAR:"R",ZMW:"ZK",ZWB:"",ZWL:"Z$",Abkhazia:"",Artsakh:"\u0564\u0580."},I={it:"it_IT",es:"es_ES",fr:"fr_FR",en:"en_GB"},C={"DERNI\xC8RE MINUTE":"735fe5e0858671cf3a5c14cbcc2470fe","R\xC9SERVEZ T\xD4T":"c5abb23caf056891f3902ff42ae2f9e0"},h="https://deshotelsetdesiles.ccordier.workers.dev/";var O=u=>{let e="?";for(let[t,s]of Object.entries(u))s&&(e+=`${t}=${s}&`);return e};var $=()=>{document.querySelector(r.languageDropdown)?.querySelectorAll("a")?.forEach(t=>{t.addEventListener("click",()=>{})})},P=()=>{let u=localStorage.getItem("wglang")||"fr";return I[u]};var E=(u,e)=>`${u.toLowerCase()}-${e.toLowerCase()}`;var L=class{constructor(e,t,s){this.listInstance=e,this.itemTemplateElement=t;let n=s.splice(2);this.hotelsIds=[s,n],e.clearItems(),$(),this.loadingSpinner=document.querySelector(r.loadingSpinner)}async getGroupOffers(e){let{clearItems:t=!0,offerMetaData:s}=e||{};t&&this.listInstance.clearItems();for(let a of this.hotelsIds){let n=a.join(","),o=await this.getGroupOffersData({hids:n,locale:P()});this.addHotelToCollection(o,s)}this.loadingSpinner&&(this.loadingSpinner.style.display="none")}async getGroupCategoryOffers(e){let t=await this.getCMSOffers();if(!t)return;let a=t.items.filter(({isArchived:n,isDraft:o,fieldData:l})=>!n&&!o&&l.category===e).map(({fieldData:{"hotel-or-property-api-id":n,"offer-api-name":o}})=>E(n,o));this.getGroupOffers({offerMetaData:a})}addHotelToCollection(e,t){if(e)for(let{prop:s,rates:a}of e.data){let n=a;t&&(n=a.filter(l=>{let{title:c}=l.rate,{hid:g}=s;return t.includes(E(g,c))}));let o=n.map(l=>this.createItem(s,l,this.itemTemplateElement));this.listInstance.addItems(o)}}async getGroupOffersData(e){let t=h+"groupOffers"+O(e),a=await(await fetch(t)).json();return a.error||!a.data?null:a}async getCMSOffers(){let e=h+"cmsOffers",s=await(await fetch(e)).json();return s.items?s:null}createItem(e,t,s){let{rate:a,quotation:n}=t,{hid:o,title:l}=e,{image:c,title:g,plain_description:d}=a,{destination:D,slug:m}=S[o],p=s.cloneNode(!0);this.bindOffersMetaData(p,{destination:D,image:c,hotelName:l,title:g,slug:m}),this.bindQuotationData(p,n);let T=p.querySelector(r.moreDetails);return T&&T.addEventListener("click",()=>{let f=p.querySelector(r.offersPopup);if(f){this.bindOffersMetaData(f,{destination:D,image:c,hotelName:l,title:g,slug:m,description:d}),this.bindQuotationData(f,n),f.style.opacity="1",f.style.display="flex";let M=p.querySelector(r.offersPopupClose);M&&M.addEventListener("click",()=>{f.style.opacity="0",f.style.display="none"})}}),p}bindOffersMetaData(e,{destination:t,image:s,hotelName:a,title:n,slug:o,description:l}){let c=e.querySelector(r.destination),g=e.querySelector(r.image),d=e.querySelector(r.hotelName),D=e.querySelector(r.name),m=e.querySelector(r.description),p=e.querySelector(r.hotelLink);c&&(c.textContent=t),g&&(g.src=s?.url),d&&(d.innerHTML=a),D&&(D.innerHTML=n),m&&l&&(m.textContent=l),p&&o&&p.addEventListener("click",()=>{window.location.href=o})}bindQuotationData(e,t){let{pricePerNight:s,currency:a,plainBookLink:n}=t,o=e.querySelector(r.price);o&&(o.innerHTML=s);let l=e.querySelector(r.currency);l&&(l.innerHTML=H[a]);let c=e.querySelector(r.hotelReserveLink);c&&(c.href=n);let g=e.querySelector(r.hotelVillaReserveLink);g&&(g.href=n)}};window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsfilter",async u=>{let[e]=u,{listInstance:t}=e,[s]=t.items,a=s.element,n=["gpgua27143","mqsai18593"],o=Object.values(R).filter(c=>!n.includes(c));await new L(t,a,o).getGroupCategoryOffers(C["DERNI\xC8RE MINUTE"])}]);})();
