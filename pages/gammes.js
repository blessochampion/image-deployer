"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/constants.ts
  var prefix = "data";
  var SELECTORS = {
    // Search bar
    searchForm: `[${prefix}=search-form]`,
    citiesDropdown: `[${prefix}=cities-dropdown]`,
    checkinDatePicker: `[${prefix}=checkin-date-picker]`,
    checkoutDatePicker: `[${prefix}=checkout-date-picker]`,
    noOfPeople: `[${prefix}=no-of-people]`,
    // Apartments
    name: `[${prefix}=name]`,
    title: `[${prefix}=title]`,
    neighborhood: `[${prefix}=neighborhood]`,
    collection: `[${prefix}=collection]`,
    category: `[${prefix}=category]`,
    categoryContainer: `[${prefix}=category-container]`,
    sliderContainer: `[${prefix}=slider-container]`,
    price: `[${prefix}=price]`,
    size: `[${prefix}=size]`,
    rooms: `[${prefix}=rooms]`,
    bathrooms: `[${prefix}=bathrooms]`,
    equipmentsContainer: `[${prefix}=equipment-container]`,
    apartmentDetailsLink: `[${prefix}=apartment-details-link]`,
    categoryIcon: `[${prefix}=category-icon]`,
    // others
    language: `[${prefix}=lang]`,
    tagList: `[${prefix}=tag-list]`,
    container: `[${prefix}=container]`,
    // Apartment details
    image: `[${prefix}=image]`,
    apartmentId: `[${prefix}-apartment-id]`,
    apartmentIdStr: `${prefix}-apartment-id`,
    similarApartments: `[${prefix}=similar-apartments-list]`,
    apartmentCmsItem: `[${prefix}=apartment-cms-item]`,
    apartmentOrder: `[${prefix}=order]`,
    searchUnavailable: `[${prefix}=search-unavailable]`,
    searchComingSoon: `[${prefix}=search-coming-soon]`,
    mainList: `[${prefix}=main-list]`,
    mapContainer: `[${prefix}=map-container]`,
    openMap: `[${prefix}=open-map]`,
    searchButton: `[${prefix}=search-button]`,
    checkinInput: `[${prefix}=arrive]`,
    checkoutInput: `[${prefix}=depart]`,
    adultCount: `[${prefix}=adult-count]`,
    adultDecrement: `[${prefix}=adult-decrement]`,
    adultIncrement: `[${prefix}=adult-increment]`,
    infantCount: `[${prefix}=infant-count]`,
    infantIncrement: `[${prefix}=infant-increment]`,
    infantDecrement: `[${prefix}=infant-decrement]`,
    babyCount: `[${prefix}=baby-count]`,
    babyIncrement: `[${prefix}=baby-increment]`,
    babyDecrement: `[${prefix}=baby-decrement]`,
    totalCount: `[${prefix}=total-count]`,
    bookingSyncId: `[${prefix}=bookingsync-apt-id]`,
    averagePriceNonRefundable: `[${prefix}=avg-price-non-ref]`,
    priceNonRefundable: `[${prefix}=price-non-ref]`,
    nightsNonRefundable: `[${prefix}=nights-non-ref]`,
    averagePriceSemiFlexible: `[${prefix}=avg-price-semi-flex]`,
    nightsSemiFlexible: `[${prefix}=nights-semi-flex]`,
    priceSemiFlexible: `[${prefix}=price-semi-flex]`,
    priceSemiFlexWrap: `[${prefix}=price-semi-flex-wrap]`,
    priceNonRefWrap: `[${prefix}=price-non-ref-wrap]`,
    bookingModal: `[${prefix}=booking-modal]`,
    bookingForm: `[${prefix}=booking-form]`,
    bookingClose: `[${prefix}=booking-close]`,
    reserveNonRefButton: `[${prefix}=reserve-non-ref]`,
    reserveSemiFlexButton: `[${prefix}=reserve-semi-flex]`,
    iframeWrap: `[${prefix}=iframe-wrap]`,
    iframeElement: `[${prefix}=iframe-el]`,
    iframeLinkElement: `[${prefix}=iframe-link-el]`,
    citiesDropdownWrap: `[${prefix}=cities-dropdown-wrap]`,
    citiesDropdownTemplate: `[${prefix}=cities-template]`,
    citiesLinktext: `[${prefix}=cities-link-text]`,
    tarifWrap: `[${prefix}=tarif-wrap]`,
    tarifBlock: `[${prefix}=tarif-block]`,
    tarifName: `[${prefix}=tarif-name]`,
    tarifNights: `[${prefix}=tarif-nights]`,
    tarifTotal: `[${prefix}=tarif-total]`,
    tarifAvg: `[${prefix}=tarif-avg]`,
    tarifReserve: `[${prefix}=tarif-reserve]`,
    tarifRadio: `[${prefix}=tarif-radio]`,
    tarifDetails: `[${prefix}=tarif-details]`,
    apartmentLink: `[${prefix}=apartment-link]`,
    tarifRadioSelector: `input[name=radio]:checked`,
    apartmentAvailable: `[${prefix}=apartment-available]`,
    apartmentNotAvailable: `[${prefix}=apartment-not-available]`,
    apartmentReserveForm: `[${prefix}=reserve-form]`,
    searchLoader: `[${prefix}=search-loader]`,
    searchLoaderText: `[${prefix}=search-loader-text]`,
    bookingLoader: `[${prefix}=booking-loader]`,
    bookingLoaderText: `[${prefix}=booking-loader-text]`,
    searchBarLoader: `[${prefix}=search-bar-loader]`,
    searchBarLoaderText: `[${prefix}=search-bar-loader-text]`,
    dropdownToggle: `[${prefix}=dropdown-toggle]`,
    dropdownOpenClass: `w--open`,
    cityId: `[${prefix}=city-id]`,
    priceAsc: `[${prefix}=price-asc]`,
    priceDesc: `[${prefix}=price-desc]`,
    priceSortWrap: `[${prefix}=price-sort-wrap]`,
    countryCode: `[${prefix}=country-code]`
  };
  var URL_PARAMS_KEYS = {
    checkinDate: "checkin_date",
    checkoutDate: "checkout_date",
    no_of_people: "no_of_people",
    nbChildren: "nb_children",
    nbBabies: "nb_babies",
    cityName: `city_name`,
    cityId: `city_id`,
    bookingSyncAptId: `bookingsync_apt_id`
  };
  var stagingApartmentsPageUrl = "https://merveil.webflow.io/appartements";

  // src/utils/CitiesDropdown.ts
  var CitiesDropdown = class {
    constructor() {
      this.citiesDropdown = document.querySelector(SELECTORS.citiesDropdown);
    }
    updateCitiesDropdown(cityName, cityId) {
      this.citiesDropdown.value = cityName;
    }
    getCityId() {
      return "";
    }
    getCityName() {
      return this.citiesDropdown.value;
    }
  };

  // src/utils/constructUrl.ts
  var constructUrl = (searchParams) => {
    let url = "?";
    for (const [key, value] of Object.entries(searchParams)) {
      if (value === void 0 || value === null || value === "undefined-undefined-")
        continue;
      url = url + `${key}=${value}&`;
    }
    return url;
  };

  // src/utils/convertDateFormat.ts
  var convertDateFormat = (dateString) => {
    if (!dateString)
      return;
    const datePattern = /^\d{2}\/\d{2}\/\d{2}$/;
    if (!datePattern.test(dateString)) {
      return void 0;
    }
    return dateString;
  };
  var isValidDateFormat = (dateString) => {
    if (!dateString)
      return false;
    const datePattern = /^\d{2}\/\d{2}\/\d{2}$/;
    return datePattern.test(dateString);
  };

  // src/utils/getApartmentsPageUrl.ts
  var getApartmentsPageUrl = () => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("webflow.io")) {
      return stagingApartmentsPageUrl;
    }
    return stagingApartmentsPageUrl;
  };

  // src/utils/parseUrlParams.ts
  var parseUrlParams = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const checkinDate = searchParams.get(URL_PARAMS_KEYS.checkinDate);
    const checkoutDate = searchParams.get(URL_PARAMS_KEYS.checkoutDate);
    const nbAdultsValue = searchParams.get(URL_PARAMS_KEYS.no_of_people);
    const cityId = searchParams.get(URL_PARAMS_KEYS.cityId);
    const cityName = searchParams.get(URL_PARAMS_KEYS.cityName);
    const bookingSyncAptId = searchParams.get(URL_PARAMS_KEYS.bookingSyncAptId);
    if (!nbAdultsValue)
      return void 0;
    const nbAdults = Number(nbAdultsValue);
    return {
      checkinDate,
      checkoutDate,
      nbAdults,
      cityId,
      cityName,
      bookingSyncAptId
    };
  };

  // src/utils/reverseDateFormat.ts
  var reverseDateFormat = (dateString) => {
    const datePattern = /^\d{4}\/\d{2}\/\d{4}$/;
    if (datePattern.test(dateString)) {
      return dateString;
    }
    const parts = dateString.split("/");
    return `20${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  // src/utils/SearchBar.ts
  var SearchBar = class {
    constructor(citiesDropdownInstance) {
      this.cityDropdownInstance = citiesDropdownInstance;
      this.cityName = this.cityDropdownInstance.getCityName();
      this.cityId = this.cityDropdownInstance.getCityId();
      this.checkInDateElement = document.querySelector(SELECTORS.checkinDatePicker);
      this.checkOutDateElement = document.querySelector(
        SELECTORS.checkoutDatePicker
      );
      this.noOfpeopleElement = document.querySelector(SELECTORS.noOfPeople);
      this.noOfPeople = this.noOfpeopleElement.textContent;
      this.searchForm = document.querySelector(SELECTORS.searchForm);
      this.searchForm.addEventListener("submit", (e) => this.handleSearch(e));
      this.queryUrl = void 0;
      this.getAndUpdateSearchData();
    }
    getAndUpdateSearchData() {
      const parsedUrlParams = parseUrlParams();
      if (!parsedUrlParams)
        return;
      this.cityId = parsedUrlParams.cityId ?? "";
      this.cityName = parsedUrlParams.cityName || "";
      if (parsedUrlParams.checkinDate && parsedUrlParams.checkinDate !== "undefined-undefined-" && parsedUrlParams.checkoutDate && parsedUrlParams.checkoutDate !== "undefined-undefined-") {
        const checkInDate = parsedUrlParams.checkinDate;
        const checkOutDate = parsedUrlParams.checkoutDate;
        if (isValidDateFormat(checkInDate) && isValidDateFormat(checkOutDate)) {
          this.checkInDate = checkInDate;
          this.checkOutDate = checkOutDate;
        }
      }
      this.noOfPeople = parsedUrlParams.nbAdults.toString();
      if (this.noOfPeople) {
        this.noOfpeopleElement.textContent = this.noOfPeople;
      }
      this.updateSearchData();
    }
    updateSearchData() {
      this.cityDropdownInstance.updateCitiesDropdown(this.cityName, this.cityId);
      setTimeout(() => {
        if (this.checkInDate && this.checkOutDate) {
          window.picker.setDateRange(
            new Date(reverseDateFormat(this.checkInDate)),
            new Date(reverseDateFormat(this.checkOutDate))
          );
        }
      }, 1e3);
      this.noOfpeopleElement.textContent = this.noOfPeople;
      const SearchParameters = {
        checkin_date: convertDateFormat(this.checkInDate),
        checkout_date: convertDateFormat(this.checkOutDate),
        no_of_people: this.noOfPeople,
        city_name: this.cityName
      };
      this.queryUrl = constructUrl(SearchParameters);
    }
    handleSearch(e) {
      e.preventDefault();
      e.stopPropagation();
      this.cityName = this.cityDropdownInstance.getCityName();
      this.checkInDate = this.checkInDateElement.textContent;
      this.checkOutDate = this.checkOutDateElement.textContent;
      this.noOfPeople = this.noOfpeopleElement.textContent;
      const SearchParameters = {
        checkin_date: convertDateFormat(this.checkInDate),
        checkout_date: convertDateFormat(this.checkOutDate),
        no_of_people: this.noOfPeople,
        nb_children: this.infantCount,
        nb_babies: this.babyCount,
        city_id: this.cityId,
        city_name: this.cityName
      };
      const constructedUrl = constructUrl(SearchParameters);
      const apartmentsPageUrl = getApartmentsPageUrl();
      const url = apartmentsPageUrl + constructedUrl;
      window.location.href = url;
    }
  };

  // src/pages/gammes.ts
  window.Webflow ||= [];
  window.Webflow.push(async () => {
    const citiesDropdownInstance = new CitiesDropdown();
    console.log("citiesDropdownInstance", citiesDropdownInstance);
    new SearchBar(citiesDropdownInstance);
  });
})();
//# sourceMappingURL=gammes.js.map
