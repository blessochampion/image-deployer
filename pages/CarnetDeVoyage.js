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
    destination: `[${prefix}=destination]`,
    offersList: `[${prefix}=offers-list]`,
    offersListContainer: `[${prefix}=offers-list-container]`,
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
  var apiBaseUrl = "https://deshotelsetdesiles.ccordier.workers.dev/";

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

  // src/utils/StartingPrice.ts
  var StartingPrice = class {
    constructor(container) {
      this.hotelsIds = [];
      this.itemElements = [];
      container.querySelectorAll(SELECTORS.beHid).forEach((item) => {
        const hid = item.getAttribute(`${prefix}-be-hid`);
        if (hid && BE_HID_TO_SNIPPET_CODE[hid]) {
          this.hotelsIds.push(BE_HID_TO_SNIPPET_CODE[hid]);
          this.itemElements.push(item);
        }
      });
      listenForLanguageChange();
    }
    /**
     *
     * @param locale to query the data with
     */
    async getHotelStartingPrice() {
      for (let index = 0; index < this.hotelsIds.length; index++) {
        const hid = this.hotelsIds[index];
        const element = this.itemElements[index];
        const startingPriceData = await this.getHotelStartingPriceData({
          property: hid,
          locale: getLocale()
        });
        if (startingPriceData) {
          const {
            quotation: { pricePerNight, currency }
          } = startingPriceData;
          const priceElement = element.querySelector(SELECTORS.price);
          if (priceElement)
            priceElement.innerHTML = pricePerNight;
          const currencyElement = element.querySelector(SELECTORS.currency);
          if (currencyElement)
            currencyElement.innerHTML = CURRENCY_TO_SYMBOL[currency];
        }
      }
    }
    /**
     *
     * @param queryParams to include as part of query for the request
     * @returns Starting price data
     */
    async getHotelStartingPriceData(queryParams) {
      const url = apiBaseUrl + "startingfrom" + buildQueryParams(queryParams);
      const response = await fetch(url);
      const body = await response.json();
      if (body.error || !body.data)
        return null;
      return body.data;
    }
  };

  // src/pages/CarnetDeVoyage.ts
  window.Webflow ||= [];
  window.Webflow.push(async () => {
    const startingPriceList = document.querySelector(SELECTORS.startingPriceList);
    if (startingPriceList) {
      const startingPrice = new StartingPrice(startingPriceList);
      await startingPrice.getHotelStartingPrice();
    }
  });
})();
//# sourceMappingURL=CarnetDeVoyage.js.map
