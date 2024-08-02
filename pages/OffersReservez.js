"use strict";
(() => {
  // src/utils/constants.ts
  var prefix = "data";
  var SELECTORS = {
    apartmentCmsItem: `[${prefix}=apartment-cms-item]`,
    countryCode: `[${prefix}=country-code]`,
    startingPriceList: `[${prefix}=starting-price-list]`,
    price: `[${prefix}=price]`,
    discount: `[${prefix}=discount]`,
    discountContainer: `[${prefix}=discount-container]`,
    currency: `[${prefix}=currency]`,
    beHid: `[${prefix}-be-hid]`,
    // offers
    destination: `[${prefix}=destination]`,
    offersList: `[${prefix}=offers-list]`,
    listItem: `[${prefix}=list-item]`,
    image: `[${prefix}=image]`,
    name: `[${prefix}=name]`,
    description: `[${prefix}=description]`,
    hotelName: `[${prefix}=hotel-name]`,
    hotelLink: `[${prefix}=hotel-link]`,
    moreDetails: `[${prefix}=more-details]`,
    offersPopup: `[${prefix}=offers-popup]`,
    offersPopupClose: `[${prefix}=close-btn]`,
    hotelReserveLink: `[${prefix}=hotel-reserve-link]`,
    hotelVillaReserveLink: `[${prefix}=hotel-villa-reserve-link]`,
    languageDropdown: `[${prefix}=language-dropdown]`,
    loadingSpinner: `[${prefix}=loading-spinner]`,
    cmsFilterEmptyState: `[fs-cmsfilter-element=empty]`,
    startingfromItem: (id) => `[${prefix}-be-hid=${id}]`
  };
  var BE_HID_TO_SNIPPET_CODE = {
    DHDICBeach: "gpgos12767",
    DHDIJMalanga: "gptro12772",
    DHDIToubana: "gpsai12770",
    DHDIMahogany: "gpgos12769",
    DHDILangleyres: "gpgua27143",
    DHDIJungle: "mqros18592",
    DHDIJade: "agste21689",
    DHDIWINDLAND: "zzzzz25376",
    DHDILeCapMaison: "lcgro30400",
    DHDIChastenet: "agste21688",
    DHDILPSoleil: "mqsai18593",
    DHDISHANTI: "zzzzz25378",
    DHDIPavillon: "zzzzz25377",
    DHDIBELLEMARE: "zzzzz25379",
    DHDIPrincemaurice: "mupos25678",
    DHDIANAHITA: "zzzzz25380",
    DHDISamana: "agstm21687",
    FRANTHTLGrandCaseBe1: "frsai31536",
    DHDITInn: "ageng20433",
    DHDIBWaters: "agcro20496",
    DHDICuisinartgolf: "gpang25884"
  };
  var SNIPPET_CODE_TO_HOTEL = {
    gpgos12767: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/creole-beach-hotel-spa",
      codeIPlanet: "FRAN414"
    },
    gptro12772: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/le-jardin-malanga",
      codeIPlanet: "FRAN416"
    },
    gpsai12770: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/la-toubana-hotel-spa",
      codeIPlanet: "FRAN411"
    },
    gpgos12769: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/mahogany-hotel-residence-spa",
      codeIPlanet: "FRAN423"
    },
    gpgua27143: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/langley-resort-fort-royal",
      codeIPlanet: "GPAN32"
    },
    mqros18592: {
      destination: "Dominique",
      slug: "/hotels-et-villas/jungle-bay-dominica",
      codeIPlanet: "DMAN1"
    },
    agste21689: {
      destination: "Sainte-Lucie",
      slug: "/hotels-et-villas/jade-mountain",
      codeIPlanet: "AGAN6"
    },
    zzzzz25376: {
      destination: "Sainte-Lucie",
      slug: "/hotels-et-villas/windjammer-landing",
      codeIPlanet: "LCAN4"
    },
    lcgro30400: {
      destination: "Sainte-Lucie",
      slug: "/hotels-et-villas/cap-maison",
      codeIPlanet: "LCLC8"
    },
    agste21688: {
      destination: "Sainte-Lucie",
      slug: "/hotels-et-villas/anse-chastanet",
      codeIPlanet: "AGAN5"
    },
    mqsai18593: {
      destination: "Martinique",
      slug: "/hotels-et-villas/plein-soleil",
      codeIPlanet: "MQAN16"
    },
    zzzzz25378: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/shanti-maurice",
      codeIPlanet: "MUAN22"
    },
    zzzzz25377: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/lux-le-morne",
      codeIPlanet: "MUAN21"
    },
    zzzzz25379: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/constance-belle-mare-plage",
      codeIPlanet: "MUAN20"
    },
    mupos25678: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/constance-le-prince-maurice",
      codeIPlanet: "MUAN24"
    },
    zzzzz25380: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/anahita-the-resort",
      codeIPlanet: "MUAN19"
    },
    agstm21687: {
      destination: "Saint-Martin",
      slug: "/hotels-et-villas/la-samanna",
      codeIPlanet: "FRAN2350"
    },
    frsai31536: {
      destination: "Saint Martin",
      slug: "/hotels-et-villas/le-grand-case-beach-club",
      codeIPlanet: "FRFRA3"
    },
    ageng20433: {
      destination: "Antigua",
      slug: "/hotels-et-villas/the-inn-at-english-harbour",
      codeIPlanet: "AGAN4"
    },
    agcro20496: {
      destination: "Antigua",
      slug: "/hotels-et-villas/blue-waters",
      codeIPlanet: "AGAN1"
    },
    gpang25884: {
      destination: "Anguilla",
      slug: "/hotels-et-villas/aurora-anguilla-resort-golf-club",
      codeIPlanet: "GPAN30"
    }
  };
  var CURRENCY_TO_SYMBOL = {
    AED: "\u062F.\u0625.",
    AFN: "Af",
    ALL: "L",
    AMD: "\u058F",
    ANG: "\u0192",
    AOA: "Kz",
    ARS: "AR$",
    AUD: "AU$",
    AWG: "\u0192",
    AZN: "\u043C\u0430\u043D",
    BAM: "KM",
    BBD: "BBD$",
    BDT: "\u09F3",
    BGN: "\u043B\u0432.",
    BHD: "BD",
    BIF: "FBu",
    BMD: "$",
    BND: "B$",
    BOB: "Bs.",
    BRL: "R$",
    BSD: "$",
    BTN: "Nu.",
    BWP: "P",
    BYN: "Br",
    BZD: "BZ$",
    CAD: "CA$",
    CDF: "FC",
    CHF: "Fr.",
    CKD: "$",
    CLP: "CL$",
    CNY: "CN\xA5",
    COP: "CO$",
    CRC: "\u20A1",
    CUC: "CUC$",
    CUP: "$MN",
    CVE: "CV$",
    CZK: "K\u010D",
    DJF: "Fdj",
    DKK: "kr.",
    DOP: "RD$",
    DZD: "DA",
    EGP: "E\xA3",
    EHP: "Ptas.",
    ERN: "Nkf",
    ETB: "Br",
    EUR: "\u20AC",
    FJD: "FJ$",
    FKP: "FK\xA3",
    FOK: "kr",
    GBP: "\xA3",
    GEL: "\u20BE",
    GGP: "\xA3",
    GHS: "GH\u20B5",
    GIP: "\xA3",
    GMD: "D",
    GNF: "FG",
    GTQ: "Q",
    GYD: "G$",
    HKD: "HK$",
    HNL: "L",
    HRK: "kn",
    HTG: "G",
    HUF: "Ft",
    IDR: "Rp",
    ILS: "\u20AA",
    IMP: "\xA3",
    INR: "Rs.",
    IQD: "\u062F.\u0639.",
    IRR: "\uFDFC",
    ISK: "kr",
    JEP: "\xA3",
    JMD: "J$",
    JOD: "JD",
    JPY: "\xA5",
    KES: "KSh",
    KGS: "\u0441",
    KHR: "\u17DB",
    KID: "$",
    KMF: "CF",
    KPW: "\u20A9",
    KRW: "\u20A9",
    KWD: "KD",
    KYD: "CI$",
    KZT: "\u20B8",
    LAK: "\u20ADN",
    LBP: "LL.",
    LKR: "Rs.",
    LRD: "L$",
    LSL: "L",
    LYD: "LD",
    MAD: "DH",
    MDL: "L",
    MGA: "Ar",
    MKD: "den",
    MMK: "Ks",
    MNT: "\u20AE",
    MOP: "MOP$",
    MRU: "UM",
    MUR: "Rs.",
    MVR: "MRf",
    MWK: "MK",
    MXN: "MX$",
    MYR: "RM",
    MZN: "MTn",
    NAD: "N$",
    NGN: "\u20A6",
    NIO: "C$",
    NOK: "kr",
    NPR: "Rs.",
    NZD: "NZ$",
    OMR: "OR",
    PAB: "B/.",
    PEN: "S/.",
    PGK: "K",
    PHP: "\u20B1",
    PKR: "Rs.",
    PLN: "z\u0142",
    PND: "$",
    PRB: "\u0440.",
    PYG: "\u20B2",
    QAR: "QR",
    RON: "L",
    RSD: "din",
    RUB: "\u20BD",
    RWF: "FRw",
    SAR: "SR",
    SBD: "SI$",
    SCR: "Rs.",
    SDG: "\xA3SD",
    SEK: "kr",
    SGD: "S$",
    SHP: "\xA3",
    SLL: "Le",
    SLS: "Sl",
    SOS: "Sh.So.",
    SRD: "Sr$",
    SSP: "SS\xA3",
    STN: "Db",
    SVC: "\u20A1",
    SYP: "LS",
    SZL: "L",
    THB: "\u0E3F",
    TJS: "SM",
    TMT: "m.",
    TND: "DT",
    TOP: "T$",
    TRY: "TL",
    TTD: "TT$",
    TVD: "$",
    TWD: "NT$",
    TZS: "TSh",
    UAH: "\u20B4",
    UGX: "USh",
    USD: "$",
    UYU: "$U",
    UZS: "\u0441\u0443\u043C",
    VED: "Bs.",
    VES: "Bs.F",
    VND: "\u20AB",
    VUV: "VT",
    WST: "T",
    XAF: "Fr",
    XCD: "$",
    XOF: "\u20A3",
    XPF: "\u20A3",
    YER: "YR",
    ZAR: "R",
    ZMW: "ZK",
    ZWB: "",
    ZWL: "Z$",
    Abkhazia: "",
    Artsakh: "\u0564\u0580."
  };
  var LANG_TO_LOCALE = {
    it: "it_IT",
    es: "es_ES",
    fr: "fr_FR",
    en: "en_GB"
  };
  var OFFER_CATEGORIES = {
    "DERNI\xC8RE MINUTE": "735fe5e0858671cf3a5c14cbcc2470fe",
    "R\xC9SERVEZ T\xD4T": "c5abb23caf056891f3902ff42ae2f9e0"
  };
  var apiBaseUrl = "https://deshotelsetdesiles.ccordier.workers.dev/";
  var hotelAndFlightURLBaseUrl = "https://deshotelsetdesiles.i-planet.fr/dhdi-public/searchform.cgi";

  // src/utils/utils.ts
  var listenForLanguageChange = () => {
    const languageDropdown = document.querySelector(SELECTORS.languageDropdown);
    const languageLinks = languageDropdown?.querySelectorAll("a");
    languageLinks?.forEach((link) => {
      link.addEventListener("click", () => {
      });
    });
  };
  var getLocale = () => {
    const lang = getLanguage();
    return LANG_TO_LOCALE[lang];
  };
  var getLanguage = () => {
    return localStorage.getItem("wglang") || "fr";
  };
  var offerSlug = (hotelId, offerName) => {
    return `${hotelId.toLowerCase().trim()}-${offerName.toLowerCase().trim()}`;
  };
  var hotelAndFlightURL = (currency, hotelID) => {
    const lang = getLanguage().toUpperCase();
    const hotelCode = SNIPPET_CODE_TO_HOTEL[hotelID].codeIPlanet.toUpperCase();
    return `${hotelAndFlightURLBaseUrl}?Lang=${lang}&currency=${currency.toUpperCase()}&HotelCode=${hotelCode}`;
  };

  // src/utils/bindQuotationData.ts
  var bindQuotationData = (container, quotation, hotelId, cmsOfferData) => {
    const { pricePerNight, currency, plainBookLink } = quotation;
    const priceEl = container.querySelector(SELECTORS.price);
    if (priceEl)
      priceEl.innerHTML = pricePerNight;
    const currencyEl = container.querySelector(SELECTORS.currency);
    if (currencyEl)
      currencyEl.innerHTML = CURRENCY_TO_SYMBOL[currency];
    const hotelReserveEls = container.querySelector(SELECTORS.hotelReserveLink);
    if (hotelReserveEls) {
      hotelReserveEls.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(plainBookLink, "_blank");
      });
    }
    const hotelVillaReserveEl = container.querySelector(
      SELECTORS.hotelVillaReserveLink
    );
    if (hotelVillaReserveEl) {
      hotelVillaReserveEl.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        window.open(hotelAndFlightURL(currency, hotelId), "_blank");
      });
    }
    if (cmsOfferData) {
      const {
        fieldData: { "discount-percentage": discountPercentage }
      } = cmsOfferData;
      const discountEl = container.querySelector(SELECTORS.discount);
      if (discountEl && discountPercentage)
        discountEl.innerHTML = `-${discountPercentage}%`;
      const discountContainerEl = container.querySelector(
        SELECTORS.discountContainer
      );
      if (discountContainerEl && !discountPercentage) {
        discountContainerEl.style.display = "none";
      }
    }
  };

  // src/utils/buildQueryParams.ts
  var buildQueryParams = (queryParams) => {
    let url = "?";
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        url += `${key}=${value}&`;
      }
    }
    return url;
  };

  // src/utils/Offers.ts
  var Offers = class {
    constructor(listInstance, itemTemplateElement, hotelsIds) {
      this.offerLookup = {};
      this.cmsLoadEmptyState = document.querySelector(SELECTORS.cmsFilterEmptyState);
      if (this.cmsLoadEmptyState) {
        this.cmsLoadEmptyState.classList.add("hide-empty-state");
      }
      this.listInstance = listInstance;
      this.itemTemplateElement = itemTemplateElement;
      const midPoint = 2;
      const secondHalf = hotelsIds.splice(midPoint);
      this.hotelsIds = [hotelsIds, secondHalf];
      listInstance.clearItems();
      listenForLanguageChange();
      this.loadingSpinner = document.querySelector(SELECTORS.loadingSpinner);
    }
    /**
     * Retrieve hotel offer for given hotel IDs
     * @param locale to query the data with
     */
    async getGroupOffers(options) {
      const { clearItems = true, filter } = options || {};
      if (clearItems)
        this.listInstance.clearItems();
      const cmsOffersData = await this.getCMSOffers();
      if (!cmsOffersData)
        return;
      const filteredOffers = cmsOffersData.items.filter(filter || (() => true));
      const {
        offerLookup,
        offerMetaData
      } = this.generateOfferData(filteredOffers);
      this.offerLookup = offerLookup;
      for (const hotelgroupIds of this.hotelsIds) {
        const hids = hotelgroupIds.join(",");
        const hotelOffersData = await this.getGroupOffersData({
          hids,
          locale: getLocale()
        });
        this.addHotelToCollection(hotelOffersData, filter ? offerMetaData : void 0);
      }
      if (this.loadingSpinner)
        this.loadingSpinner.style.display = "none";
      if (this.cmsLoadEmptyState) {
        this.cmsLoadEmptyState.classList.remove("hide-empty-state");
      }
    }
    /**
     * Retrieve hotel offer for given offer category
     * @param locale to query the data with
     */
    async getGroupCategoryOffers(categoryIds) {
      const filter = (value) => {
        const { isArchived, isDraft, fieldData } = value;
        console.log("categoryIds", categoryIds, categoryIds);
        return !isArchived && !isDraft && categoryIds.includes(fieldData.category);
      };
      this.getGroupOffers({ filter });
    }
    /**
     * Retrieve hotel offer for given offer theme
     * @param locale to query the data with
     */
    async getGroupThemeOffers(themeId) {
      const filter = (value) => {
        const { isArchived, isDraft, fieldData } = value;
        return !isArchived && !isDraft && !!fieldData.thematiques?.includes(themeId);
      };
      this.getGroupOffers({ filter });
    }
    /**
     *
     * @param filteredOffers to generate offer data from
     * @returns
     */
    generateOfferData(filteredOffers) {
      const offerMetaData = [];
      const offerLookup = {};
      filteredOffers.forEach((offer) => {
        const {
          fieldData: { "hotel-or-property-api-id": hotelId, "offer-api-name": name }
        } = offer;
        const slug = offerSlug(hotelId, name);
        offerMetaData.push(slug);
        offerLookup[slug] = offer;
      });
      return { offerLookup, offerMetaData };
    }
    /**
     *
     * @param hotelOffersData to add to the collection
     */
    addHotelToCollection(hotelOffersData, offerMetaData) {
      if (hotelOffersData) {
        for (const { prop, rates } of hotelOffersData.data) {
          let filteredRates = rates;
          if (offerMetaData) {
            filteredRates = rates.filter((rate) => {
              const { title, name } = rate.rate;
              const { hid } = prop;
              return offerMetaData.includes(offerSlug(hid, name)) || offerMetaData.includes(offerSlug(hid, title));
            });
          }
          const items = filteredRates.map(
            (item) => this.createItem(prop, item, this.itemTemplateElement)
          );
          if (items.length > 0) {
            this.listInstance.addItems(items);
          }
        }
      }
    }
    /**
     *
     * @param queryParams to include as part of query for the request
     * @returns Starting price data
     */
    async getGroupOffersData(queryParams) {
      const url = apiBaseUrl + "groupOffers" + buildQueryParams(queryParams);
      const response = await fetch(url);
      const body = await response.json();
      if (body.error || !body.data)
        return null;
      return body;
    }
    /**
     *
     * @param queryParams to include as part of query for the request
     * @returns Starting price data
     */
    async getCMSOffers() {
      const url = apiBaseUrl + "cmsOffers";
      const response = await fetch(url);
      const body = await response.json();
      if (!body.items)
        return null;
      return body;
    }
    /**
     * Creates an item from the template element.
     * @param rate The Rate data to create the item from.
     * @param templateElement The template element.
     *
     * @returns A new Collection Item element.
     */
    createItem(offerProperty, rate, templateElement) {
      const { rate: rateData, quotation } = rate;
      const { hid, title: hotelName } = offerProperty;
      const { image, title, plain_description, name } = rateData;
      const offerCMSData = this.offerLookup[offerSlug(hid, title)] || this.offerLookup[offerSlug(hid, name)];
      const { destination, slug } = SNIPPET_CODE_TO_HOTEL[hid];
      const newItem = templateElement.cloneNode(true);
      this.bindOffersMetaData(newItem, { destination, image, hotelName, title, slug });
      bindQuotationData(newItem, quotation, hid, offerCMSData);
      const moreDetails = newItem.querySelector(SELECTORS.moreDetails);
      if (moreDetails) {
        moreDetails.addEventListener("click", () => {
          const offersPopupEl = newItem.querySelector(SELECTORS.offersPopup);
          if (offersPopupEl) {
            this.bindOffersMetaData(offersPopupEl, {
              destination,
              image,
              hotelName,
              title,
              slug,
              description: plain_description
            });
            bindQuotationData(offersPopupEl, quotation, hid, offerCMSData);
            offersPopupEl.style["opacity"] = "1";
            offersPopupEl.style["display"] = "flex";
            const popupCloseBtn = newItem.querySelector(SELECTORS.offersPopupClose);
            if (popupCloseBtn) {
              popupCloseBtn.addEventListener("click", () => {
                offersPopupEl.style["opacity"] = "0";
                offersPopupEl.style["display"] = "none";
              });
            }
          }
        });
      }
      newItem.style.display = "flex";
      return newItem;
    }
    /**
     *
     * @param container for data item
     * @param destination for offer
     * @param image for offer
     * @param hotelName for hotel
     * @param title for offer
     */
    bindOffersMetaData(container, {
      destination,
      image,
      hotelName,
      title,
      slug,
      description
    }) {
      const destinationEl = container.querySelector(SELECTORS.destination);
      const imageEl = container.querySelector(SELECTORS.image);
      const hotelNameEl = container.querySelector(SELECTORS.hotelName);
      const nameEl = container.querySelector(SELECTORS.name);
      const descriptionEl = container.querySelector(SELECTORS.description);
      const hotelLinkEl = container.querySelector(SELECTORS.hotelLink);
      if (destinationEl)
        destinationEl.textContent = destination;
      if (imageEl)
        imageEl.src = image?.url;
      if (hotelNameEl)
        hotelNameEl.innerHTML = hotelName;
      if (nameEl)
        nameEl.innerHTML = title;
      if (descriptionEl && description)
        descriptionEl.textContent = description;
      if (hotelLinkEl && slug) {
        hotelLinkEl.addEventListener("click", () => {
          window.location.href = slug;
        });
      }
    }
  };

  // src/utils/createOffersInstance.ts
  var createOffersInstance = (filtersInstances) => {
    const [filtersInstance] = filtersInstances;
    const { listInstance } = filtersInstance;
    return createOfferForList(listInstance);
  };
  var createOfferForList = (listInstance) => {
    const [firstItem] = listInstance.items;
    const itemTemplateElement = firstItem.element;
    const hotelsToExlude = ["gpgua27143", "mqsai18593"];
    const hotelIDs = Object.values(BE_HID_TO_SNIPPET_CODE).filter(
      (id) => !hotelsToExlude.includes(id)
    );
    const offers = new Offers(listInstance, itemTemplateElement, hotelIDs);
    return offers;
  };

  // src/pages/OffersReservez.ts
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    "cmsfilter",
    async (filtersInstances) => {
      const offers = createOffersInstance(filtersInstances);
      await offers.getGroupCategoryOffers([OFFER_CATEGORIES["R\xC9SERVEZ T\xD4T"]]);
    }
  ]);
})();
//# sourceMappingURL=OffersReservez.js.map
