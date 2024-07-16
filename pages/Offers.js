"use strict";(()=>{var t="data",a={apartmentCmsItem:`[${t}=apartment-cms-item]`,countryCode:`[${t}=country-code]`,startingPriceList:`[${t}=starting-price-list]`,price:`[${t}=price]`,currency:`[${t}=currency]`,beHid:`[${t}-be-hid]`,loadingSpinner:`[${t}=loading-spinner]`,destination:`[${t}=destination]`,image:`[${t}=image]`,name:`[${t}=name]`,description:`[${t}=description]`,hotelName:`[${t}=hotel-name]`,hotelLink:`[${t}=hotel-link]`,moreDetails:`[${t}=more-details]`,offersPopup:`[${t}=offers-popup]`,offersPopupClose:`[${t}=close-btn]`,hotelReserveLink:`[${t}=hotel-reserve-link]`,hotelVillaReserveLink:`[${t}=hotel-villa-reserve-link]`,startingfromItem:g=>`[${t}-be-hid=${g}]`};var M={DHDICBeach:"gpgos12767",DHDIJMalanga:"gptro12772",DHDIToubana:"gpsai12770",DHDIMahogany:"gpgos12769",DHDILangleyres:"gpgua27143",DHDIJungle:"mqros18592",DHDIJade:"agste21689",DHDIWINDLAND:"zzzzz25376",DHDILeCapMaison:"lcgro30400",DHDIChastenet:"agste21688",DHDILPSoleil:"mqsai18593",DHDISHANTI:"zzzzz25378",DHDIPavillon:"zzzzz25377",DHDIBELLEMARE:"zzzzz25379",DHDIPrincemaurice:"mupos25678",DHDIANAHITA:"zzzzz25380",DHDISamana:"agstm21687",FRANTHTLGrandCaseBe1:"frsai31536",DHDITInn:"ageng20433",DHDIBWaters:"agcro20496",DHDICuisinartgolf:"gpang25884"},T={gpgos12767:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/creole-beach-hotel-spa"},gptro12772:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/le-jardin-malanga"},gpsai12770:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/la-toubana-hotel-spa"},gpgos12769:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/mahogany-hotel-residence-spa"},gpgua27143:{destination:"\xCEles de Guadeloupe",slug:"/hotels-et-villas/langley-resort-fort-royal"},mqros18592:{destination:"Dominique",slug:"/hotels-et-villas/jungle-bay-dominica"},agste21689:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/jade-mountain"},zzzzz25376:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/windjammer-landing"},lcgro30400:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/cap-maison"},agste21688:{destination:"Sainte-Lucie",slug:"/hotels-et-villas/anse-chastanet"},mqsai18593:{destination:"Martinique",slug:"/hotels-et-villas/plein-soleil"},zzzzz25378:{destination:"ile Maurice",slug:"/hotels-et-villas/shanti-maurice"},zzzzz25377:{destination:"ile Maurice",slug:""},zzzzz25379:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-belle-mare-plage"},mupos25678:{destination:"ile Maurice",slug:"/hotels-et-villas/constance-le-prince-maurice"},zzzzz25380:{destination:"ile Maurice",slug:"/hotels-et-villas/anahita-the-resort"},agstm21687:{destination:"Saint-Martin",slug:""},frsai31536:{destination:"Saint Martin",slug:"/hotels-et-villas/le-grand-case-beach-club"},ageng20433:{destination:"Antigua",slug:"/hotels-et-villas/the-inn-at-english-harbour"},agcro20496:{destination:"Antigua",slug:"/hotels-et-villas/blue-waters"},gpang25884:{destination:"Anguilla",slug:"/hotels-et-villas/aurora-anguilla-resort-golf-club"}},E={AED:"\u062F.\u0625.",AFN:"Af",ALL:"L",AMD:"\u058F",ANG:"\u0192",AOA:"Kz",ARS:"AR$",AUD:"AU$",AWG:"\u0192",AZN:"\u043C\u0430\u043D",BAM:"KM",BBD:"BBD$",BDT:"\u09F3",BGN:"\u043B\u0432.",BHD:"BD",BIF:"FBu",BMD:"$",BND:"B$",BOB:"Bs.",BRL:"R$",BSD:"$",BTN:"Nu.",BWP:"P",BYN:"Br",BZD:"BZ$",CAD:"CA$",CDF:"FC",CHF:"Fr.",CKD:"$",CLP:"CL$",CNY:"CN\xA5",COP:"CO$",CRC:"\u20A1",CUC:"CUC$",CUP:"$MN",CVE:"CV$",CZK:"K\u010D",DJF:"Fdj",DKK:"kr.",DOP:"RD$",DZD:"DA",EGP:"E\xA3",EHP:"Ptas.",ERN:"Nkf",ETB:"Br",EUR:"\u20AC",FJD:"FJ$",FKP:"FK\xA3",FOK:"kr",GBP:"\xA3",GEL:"\u20BE",GGP:"\xA3",GHS:"GH\u20B5",GIP:"\xA3",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"G$",HKD:"HK$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"\u20AA",IMP:"\xA3",INR:"Rs.",IQD:"\u062F.\u0639.",IRR:"\uFDFC",ISK:"kr",JEP:"\xA3",JMD:"J$",JOD:"JD",JPY:"\xA5",KES:"KSh",KGS:"\u0441",KHR:"\u17DB",KID:"$",KMF:"CF",KPW:"\u20A9",KRW:"\u20A9",KWD:"KD",KYD:"CI$",KZT:"\u20B8",LAK:"\u20ADN",LBP:"LL.",LKR:"Rs.",LRD:"L$",LSL:"L",LYD:"LD",MAD:"DH",MDL:"L",MGA:"Ar",MKD:"den",MMK:"Ks",MNT:"\u20AE",MOP:"MOP$",MRU:"UM",MUR:"Rs.",MVR:"MRf",MWK:"MK",MXN:"MX$",MYR:"RM",MZN:"MTn",NAD:"N$",NGN:"\u20A6",NIO:"C$",NOK:"kr",NPR:"Rs.",NZD:"NZ$",OMR:"OR",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"\u20B1",PKR:"Rs.",PLN:"z\u0142",PND:"$",PRB:"\u0440.",PYG:"\u20B2",QAR:"QR",RON:"L",RSD:"din",RUB:"\u20BD",RWF:"FRw",SAR:"SR",SBD:"SI$",SCR:"Rs.",SDG:"\xA3SD",SEK:"kr",SGD:"S$",SHP:"\xA3",SLL:"Le",SLS:"Sl",SOS:"Sh.So.",SRD:"Sr$",SSP:"SS\xA3",STN:"Db",SVC:"\u20A1",SYP:"LS",SZL:"L",THB:"\u0E3F",TJS:"SM",TMT:"m.",TND:"DT",TOP:"T$",TRY:"TL",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"\u20B4",UGX:"USh",USD:"$",UYU:"$U",UZS:"\u0441\u0443\u043C",VED:"Bs.",VES:"Bs.F",VND:"\u20AB",VUV:"VT",WST:"T",XAF:"Fr",XCD:"$",XOF:"\u20A3",XPF:"\u20A3",YER:"YR",ZAR:"R",ZMW:"ZK",ZWB:"",ZWL:"Z$",Abkhazia:"",Artsakh:"\u0564\u0580."},H="https://deshotelsetdesiles.ccordier.workers.dev/";var R=g=>{let e="?";for(let[i,s]of Object.entries(g))s&&(e+=`${i}=${s}&`);return e};var L=class{constructor(e,i,s,n){this.listInstance=e,this.itemTemplateElement=i,this.loadingSpinner=n;let l=s.splice(2);this.hotelsIds=[s,l],e.clearItems()}async getGroupOffers(e="fr_FR"){for(let i of this.hotelsIds){let s=i.join(","),n=await this.getGroupOffersData({hids:s,locale:e});if(n){this.loadingSpinner&&(this.loadingSpinner.style.display="None");for(let{prop:o,rates:l}of n.data){let r=l.map(c=>this.createItem(o,c,this.itemTemplateElement));this.listInstance.addItems(r)}}}}async getGroupOffersData(e){let i=H+"groupOffers"+R(e),n=await(await fetch(i)).json();return n.error||!n.data?null:n}createItem(e,i,s){let{rate:n,quotation:o}=i,{hid:l,title:r}=e,{image:c,title:u,plain_description:S}=n,{destination:m,slug:d}=T[l],D=s.cloneNode(!0);this.bindOffersMetaData(D,{destination:m,image:c,hotelName:r,title:u,slug:d}),this.bindQuotationData(D,o);let h=D.querySelector(a.moreDetails);return h&&h.addEventListener("click",()=>{let p=D.querySelector(a.offersPopup);if(p){this.bindOffersMetaData(p,{destination:m,image:c,hotelName:r,title:u,slug:d,description:S}),this.bindQuotationData(p,o),p.style.opacity="1",p.style.display="flex";let f=D.querySelector(a.offersPopupClose);f&&f.addEventListener("click",()=>{p.style.opacity="0",p.style.display="none"})}}),D}bindOffersMetaData(e,{destination:i,image:s,hotelName:n,title:o,slug:l,description:r}){let c=e.querySelector(a.destination),u=e.querySelector(a.image),S=e.querySelector(a.hotelName),m=e.querySelector(a.name),d=e.querySelector(a.description),D=e.querySelector(a.hotelLink);c&&(c.textContent=i),u&&(u.src=s?.url),S&&(S.innerHTML=n),m&&(m.innerHTML=o),d&&r&&(d.textContent=r),D&&l&&D.addEventListener("click",()=>{window.location.href=l})}bindQuotationData(e,i){let{pricePerNight:s,currency:n,plainBookLink:o}=i,l=e.querySelector(a.price);l&&(l.innerHTML=s);let r=e.querySelector(a.currency);r&&(r.innerHTML=E[n]);let c=e.querySelector(a.hotelReserveLink);c&&(c.href=o);let u=e.querySelector(a.hotelVillaReserveLink);u&&(u.href=o)}};window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsfilter",async g=>{let[e]=g,{listInstance:i}=e,[s]=i.items,n=s.element,o=["gpgua27143","mqsai18593"],l=Object.values(M).filter(u=>!o.includes(u)),r=document.querySelector(a.loadingSpinner);await new L(i,n,l,r).getGroupOffers()}]);})();
