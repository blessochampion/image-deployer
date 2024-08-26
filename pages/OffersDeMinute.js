"use strict";
(() => {
  // src/utils/constants.ts
  var prefix = "data";
  var SELECTORS = {
    startingPriceList: `[${prefix}=starting-price-list]`,
    price: `[${prefix}=price]`,
    discount: `[${prefix}=discount]`,
    discountContainer: `[${prefix}=discount-container]`,
    currency: `[${prefix}=currency]`,
    beHid: `[${prefix}-be-hid]`,
    destination: `[${prefix}=destination]`,
    offersList: `[${prefix}=offers-list]`,
    offersListContainer: `[${prefix}=offers-list-container]`,
    listItem: `[${prefix}=list-item]`,
    image: `[${prefix}=image]`,
    name: `[${prefix}=name]`,
    description: `[${prefix}=description]`,
    hotelName: `[${prefix}=hotel-name]`,
    hotelLink: `[${prefix}=hotel-link]`,
    hotelStartingPriceContainer: `[${prefix}=hotel-starting-price-container]`,
    moreDetails: `[${prefix}=more-details]`,
    offersPopup: `[${prefix}=offers-popup]`,
    offersPopupClose: `[${prefix}=close-btn]`,
    hotelReserveLink: `[${prefix}=hotel-reserve-link]`,
    hotelVillaReserveLink: `[${prefix}=hotel-villa-reserve-link]`,
    hotelURLS: `[${prefix}=hotel-urls]`,
    languageDropdown: `[${prefix}=language-dropdown]`,
    loadingSpinner: `[${prefix}=loading-spinner]`,
    cmsFilterEmptyState: `[fs-cmsfilter-element=empty]`,
    startingfromItem: (id) => `[${prefix}-be-hid=${id}]`
  };
  var SNIPPET_CODE_TO_HOTEL = {
    gpgos12767: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/creole-beach-hotel-spa",
      codeIPlanet: "FRAN414",
      cmsId: "662c31001e349f24cd2b3798"
    },
    gptro12772: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/le-jardin-malanga",
      codeIPlanet: "FRAN416",
      cmsId: "662d2812adb5dcfda2f7f603"
    },
    gpsai12770: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/la-toubana-hotel-spa",
      codeIPlanet: "FRAN411",
      cmsId: "662d2791e2a9b95c3f167b66"
    },
    gpgos12769: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/mahogany-hotel-residence-spa",
      codeIPlanet: "FRAN423",
      cmsId: "662d284172cfd93d910374f1"
    },
    gpgua27143: {
      destination: "\xCEles de Guadeloupe",
      slug: "/hotels-et-villas/langley-resort-fort-royal",
      codeIPlanet: "GPAN32",
      cmsId: "662d27c8bb3b09790efb71aa"
    },
    mqros18592: {
      destination: "Dominique",
      slug: "/hotels-et-villas/jungle-bay-dominica",
      codeIPlanet: "DMAN1",
      cmsId: "662d2541067e13a5ab49731e"
    },
    agste21689: {
      destination: "Sainte-Lucie",
      slug: "/hotels-et-villas/jade-mountain",
      codeIPlanet: "AGAN6",
      cmsId: "662d2d22adb5dcfda2fba9a9"
    },
    zzzzz25376: {
      destination: "Sainte-Lucie",
      slug: "/hotels-et-villas/windjammer-landing",
      codeIPlanet: "LCAN4",
      cmsId: "662d2d4972a9d6dd77b0d632"
    },
    lcgro30400: {
      destination: "Sainte-Lucie",
      slug: "/hotels-et-villas/cap-maison",
      codeIPlanet: "LCLC8",
      cmsId: "662d2d02e15072c8b1ae9232"
    },
    agste21688: {
      destination: "Sainte-Lucie",
      slug: "/hotels-et-villas/anse-chastanet",
      codeIPlanet: "AGAN5",
      cmsId: "662d2ca7ad1b319f8d78c277"
    },
    mqsai18593: {
      destination: "Martinique",
      slug: "/hotels-et-villas/plein-soleil",
      codeIPlanet: "MQAN16",
      cmsId: "662d28c0f345c01c38bf6cd1"
    },
    zzzzz25378: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/shanti-maurice",
      codeIPlanet: "MUAN22",
      cmsId: "662d30d68de08ece67876fbe"
    },
    zzzzz25377: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/lux-le-morne",
      codeIPlanet: "MUAN21",
      cmsId: "662d30b029d45f08ff6e34d2"
    },
    zzzzz25379: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/constance-belle-mare-plage",
      codeIPlanet: "MUAN20",
      cmsId: "662d305fd797e4c4caaf3bb6"
    },
    mupos25678: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/constance-le-prince-maurice",
      codeIPlanet: "MUAN24",
      cmsId: "662d30867a966fa325048bf1"
    },
    zzzzz25380: {
      destination: "ile Maurice",
      slug: "/hotels-et-villas/anahita-the-resort",
      codeIPlanet: "MUAN19",
      cmsId: "662d3014f345c01c38c58c77"
    },
    agstm21687: {
      destination: "Saint-Martin",
      slug: "/hotels-et-villas/la-samanna",
      codeIPlanet: "FRAN2350",
      cmsId: "662d28fd16f5b49f17cea723"
    },
    frsai31536: {
      destination: "Saint Martin",
      slug: "/hotels-et-villas/le-grand-case-beach-club",
      codeIPlanet: "FRFRA3",
      cmsId: "662d294c6c9c6f04b8c4606b"
    },
    ageng20433: {
      destination: "Antigua",
      slug: "/hotels-et-villas/the-inn-at-english-harbour",
      codeIPlanet: "AGAN4",
      cmsId: "662d251b7a966fa325fae0d2"
    },
    agcro20496: {
      destination: "Antigua",
      slug: "/hotels-et-villas/blue-waters",
      codeIPlanet: "AGAN1",
      cmsId: "662d24917848612de29a3436"
    },
    gpang25884: {
      destination: "Anguilla",
      slug: "/hotels-et-villas/aurora-anguilla-resort-golf-club",
      codeIPlanet: "GPAN30",
      cmsId: "662d24655bd94cb1e3cab3b6"
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

  // src/utils/ApiClient.ts
  var ApiClient = class {
    /**
     *
     * @param queryParams to include as part of query for the request
     * @returns offers data for a group of hotels
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
     * @returns offers data for a single hotel
     */
    async getSingleHotelOffersData(queryParams) {
      const url = apiBaseUrl + "offers" + buildQueryParams(queryParams);
      const response = await fetch(url);
      const body = await response.json();
      if (body.error || !body.data)
        return null;
      return body;
    }
    /**
     *
     * @param queryParams to include as part of query for the request
     * @returns Starting CMS offers data
     */
    async getCMSOffers() {
      const url = apiBaseUrl + "cmsOffers";
      const response = await fetch(url);
      const body = await response.json();
      if (!body.items)
        return null;
      return body;
    }
  };

  // src/utils/utils.ts
  var listenForLanguageChange = () => {
    const languageDropdown = document.querySelector(SELECTORS.languageDropdown);
    const languageLinks = languageDropdown?.querySelectorAll("a");
    languageLinks?.forEach((link) => {
      link.addEventListener("click", () => {
        setTimeout(() => {
          window.location.reload();
        }, 800);
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
  var cmsIDToHotelIdMap = () => {
    const map = {};
    Object.entries(SNIPPET_CODE_TO_HOTEL).forEach(([key, value]) => {
      map[value.cmsId] = key;
    });
    return map;
  };
  var offerSlug = (hotelId, offerName) => {
    return `${hotelId.toLowerCase().trim()}-${offerName.toLowerCase().trim()}`;
  };
  var hotelAndFlightURL = (currency, hotelID, accessCodeValue) => {
    const lang = getLanguage().toUpperCase();
    const hotelCode = SNIPPET_CODE_TO_HOTEL[hotelID].codeIPlanet.toUpperCase();
    let url = `${hotelAndFlightURLBaseUrl}?Lang=${lang}&currency=${currency.toUpperCase()}&HotelCode=${hotelCode}`;
    if (accessCodeValue) {
      url = `${url}&HotelPromo=${accessCodeValue}`;
    }
    return url;
  };

  // src/utils/bindQuotationData.ts
  var bindQuotationData = (container, rate, hotelId, cmsOfferData) => {
    const { quotation, rate: { distribution } } = rate;
    const { pricePerNight, currency, plainBookLink } = quotation;
    const { accessCode } = distribution || {};
    let accessCodeValue = null;
    if (accessCode && accessCode.length > 0) {
      accessCodeValue = accessCode[0];
    }
    updatePriceElement(container, pricePerNight, currency);
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
        console.log("Opening", hotelAndFlightURL(currency, hotelId, accessCodeValue));
        window.open(hotelAndFlightURL(currency, hotelId, accessCodeValue), "_blank");
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
  var updatePriceElement = (container, pricePerNight, currency) => {
    const priceEl = container.querySelector(SELECTORS.price);
    if (priceEl)
      priceEl.innerHTML = pricePerNight;
    const currencyEl = container.querySelector(SELECTORS.currency);
    if (currencyEl)
      currencyEl.innerHTML = CURRENCY_TO_SYMBOL[currency];
  };

  // src/utils/Offers.ts
  var Offers = class {
    /**
     *
     * @param listInstance  The list that the offers will be displayed in
     * @param itemTemplateElement The template element to create new items from
     */
    constructor(listInstance, itemTemplateElement) {
      this.listInstance = listInstance;
      this.itemTemplateElement = itemTemplateElement;
      /** A lookup object for the cms offers data */
      this.offerLookup = {};
      /** The api client */
      this.apiClient = new ApiClient();
      this.cmsFilterEmptyState = document.querySelector(
        SELECTORS.cmsFilterEmptyState
      );
      if (this.cmsFilterEmptyState) {
        this.cmsFilterEmptyState.classList.add("hide-empty-state");
      }
      listInstance.clearItems();
      listenForLanguageChange();
      this.loadingSpinner = document.querySelector(SELECTORS.loadingSpinner);
    }
    /**
     * Retrieve hotel offer for given hotel IDs
     * @param options to filter the offers
     */
    async getGroupOffers(options) {
      const { clearItems = true, filter } = options || {};
      if (clearItems)
        this.listInstance.clearItems();
      const cmsOffersData = await this.apiClient.getCMSOffers();
      if (!cmsOffersData)
        return;
      const filteredOffers = cmsOffersData.items.filter(filter);
      const hids = this.generateHotelIds(filteredOffers).join(",");
      const { offerMetaData } = this.generateOfferData(filteredOffers);
      const locale = getLocale();
      const hotelOffersData = await this.apiClient.getGroupOffersData({
        hids,
        locale
      });
      if (!hotelOffersData || !hotelOffersData.data)
        return;
      const offers = this.getAllOffers(hotelOffersData, offerMetaData);
      this.addHotelToCollection(offers);
      if (this.loadingSpinner)
        this.loadingSpinner.style.display = "none";
      if (this.cmsFilterEmptyState) {
        this.cmsFilterEmptyState.classList.remove("hide-empty-state");
      }
    }
    /**
     * Retrieve hotel offer for given offer category
     * @param categoryId
     * @param allOffers
     */
    async getGroupCategoryOffers(categoryId, allOffers = false) {
      const filter = (value) => {
        const { isArchived, isDraft, fieldData } = value;
        if (isArchived || isDraft)
          return false;
        if (allOffers) {
          return !fieldData.thematiques || fieldData.thematiques.length === 0;
        }
        return fieldData.category === categoryId;
      };
      this.getGroupOffers({ filter });
    }
    /**
     * Retrieve hotel offer for given offer theme
     * @param themeId
     */
    async getGroupThemeOffers(themeId) {
      const filter = (value) => {
        const { isArchived, isDraft, fieldData } = value;
        if (isArchived || isDraft || !fieldData.thematiques)
          return false;
        return fieldData.thematiques.includes(themeId);
      };
      this.getGroupOffers({ filter });
    }
    /**
     *
     * @param cmsOffers to generate hotel ids from
     * @returns hotel ids based on the cms offers
     */
    generateHotelIds(cmsOffers) {
      const hotelIds = [];
      const cmsIDToHotelIds = cmsIDToHotelIdMap();
      cmsOffers.forEach((offer) => {
        const {
          fieldData: { "hotel-villa": hotelCMSId }
        } = offer;
        hotelIds.push(cmsIDToHotelIds[hotelCMSId]);
      });
      return Array.from(new Set(hotelIds));
    }
    /**
     * Retrieve all offers from the group offers data in a flat structure - sorted by CMS offer order
     * @param hotelOffersData to get all rates from
     * @param offerMetaData
     * @returns the offer with each rate as a separate item
     */
    getAllOffers(hotelOffersData, offerMetaData) {
      const rates = [];
      hotelOffersData.data.forEach((offer) => {
        const {
          prop: { hid },
          rates: offerRates
        } = offer;
        offerRates.forEach((rate) => {
          const { name, title } = rate.rate;
          const includeOffer = offerMetaData.includes(offerSlug(hid, name)) || offerMetaData.includes(offerSlug(hid, title));
          if (includeOffer) {
            rates.push({
              ...offer,
              rates: [rate]
            });
          }
        });
      });
      rates.sort((a, b) => {
        const cmsOfferA = this.offerLookup[offerSlug(a.prop.hid, a.rates[0].rate.title)] || this.offerLookup[offerSlug(a.prop.hid, a.rates[0].rate.name)];
        const cmsOfferB = this.offerLookup[offerSlug(b.prop.hid, b.rates[0].rate.title)] || this.offerLookup[offerSlug(b.prop.hid, b.rates[0].rate.name)];
        const aOrder = Number(cmsOfferA.fieldData.order) || 0;
        const bOrder = Number(cmsOfferB.fieldData.order) || 0;
        return aOrder - bOrder;
      });
      return rates;
    }
    /**
     *
     * @param filteredOffers to generate offer data from CMS offers
     * generate the offer metadata and create a lookup object for the cms offers data (useful when looking up for offers discount percentage)
     * @returns
     */
    generateOfferData(filteredOffers) {
      const offerMetaData = [];
      filteredOffers.forEach((offer) => {
        const {
          fieldData: { "hotel-or-property-api-id": hotelId, "offer-api-name": name }
        } = offer;
        const slug = offerSlug(hotelId, name);
        offerMetaData.push(slug);
        this.offerLookup[slug] = offer;
      });
      return { offerMetaData };
    }
    /**
     *
     * @param offers
     */
    addHotelToCollection(offers) {
      for (const { prop, rates } of offers) {
        const items = rates.map((item) => this.createItem(prop, item, this.itemTemplateElement));
        this.listInstance.addItems(items);
      }
    }
    /**
     * Creates an item from the template element.
     * @param offerProperty
     * @param rate The Rate data to create the item from.
     * @param templateElement The template element.
     *
     * @returns A new Collection Item element.
     */
    createItem(offerProperty, rate, templateElement) {
      const { rate: rateData, quotation } = rate;
      const { hid, title: hotelName, property } = offerProperty;
      const { image, title, plain_description, name } = rateData;
      const offerCMSData = this.offerLookup[offerSlug(hid || property, title)] || this.offerLookup[offerSlug(hid || property, name)];
      const { destination, slug } = SNIPPET_CODE_TO_HOTEL[hid || property];
      const newItem = templateElement.cloneNode(true);
      this.bindOffersMetaData(newItem, { destination, image, hotelName, title, slug });
      bindQuotationData(newItem, rate, hid, offerCMSData);
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
            bindQuotationData(offersPopupEl, rate, hid, offerCMSData);
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
     * @param slug
     * @param description
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
    const offers = new Offers(listInstance, itemTemplateElement);
    return offers;
  };

  // src/pages/OffersDeMinute.ts
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    "cmsfilter",
    async (filtersInstances) => {
      const offers = createOffersInstance(filtersInstances);
      await offers.getGroupCategoryOffers(OFFER_CATEGORIES["DERNI\xC8RE MINUTE"]);
    }
  ]);
})();
//# sourceMappingURL=OffersDeMinute.js.map
