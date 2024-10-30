"use strict";(()=>{var e="data",m={searchForm:`[${e}=search-form]`,citiesDropdown:`[${e}=cities-dropdown]`,checkinDatePicker:`[${e}=checkin-date-picker]`,checkoutDatePicker:`[${e}=checkout-date-picker]`,noOfPeople:`[${e}=no-of-people]`,name:`[${e}=name]`,title:`[${e}=title]`,neighborhood:`[${e}=neighborhood]`,collection:`[${e}=collection]`,category:`[${e}=category]`,categoryContainer:`[${e}=category-container]`,sliderContainer:`[${e}=slider-container]`,price:`[${e}=price]`,lng:`[${e}=lng]`,lat:`[${e}=lat]`,size:`[${e}=size]`,rooms:`[${e}=rooms]`,bathrooms:`[${e}=bathrooms]`,equipmentsContainer:`[${e}=equipment-container]`,apartmentDetailsLink:`[${e}=apartment-details-link]`,categoryIcon:`[${e}=category-icon]`,priceContainer:`[${e}=price-container]`,priceFilterContainer:`[${e}=price-filter-container]`,language:`[${e}=lang]`,tagList:`[${e}=tag-list]`,container:`[${e}=container]`,image:`[${e}=image]`,apartmentId:`[${e}-apartment-id]`,apartmentIdStr:`${e}-apartment-id`,similarApartments:`[${e}=similar-apartments-list]`,apartmentCmsItem:`[${e}=apartment-cms-item]`,apartmentOrder:`[${e}=order]`,searchUnavailable:`[${e}=search-unavailable]`,searchComingSoon:`[${e}=search-coming-soon]`,mainList:`[${e}=main-list]`,mapContainer:`[${e}=map-container]`,openMap:`[${e}=open-map]`,searchButton:`[${e}=search-button]`,checkinInput:`[${e}=arrive]`,checkoutInput:`[${e}=depart]`,adultCount:`[${e}=adult-count]`,adultDecrement:`[${e}=adult-decrement]`,adultIncrement:`[${e}=adult-increment]`,infantCount:`[${e}=infant-count]`,infantIncrement:`[${e}=infant-increment]`,infantDecrement:`[${e}=infant-decrement]`,babyCount:`[${e}=baby-count]`,babyIncrement:`[${e}=baby-increment]`,babyDecrement:`[${e}=baby-decrement]`,totalCount:`[${e}=total-count]`,bookingSyncId:`[${e}=bookingsync-apt-id]`,averagePriceNonRefundable:`[${e}=avg-price-non-ref]`,priceNonRefundable:`[${e}=price-non-ref]`,nightsNonRefundable:`[${e}=nights-non-ref]`,averagePriceSemiFlexible:`[${e}=avg-price-semi-flex]`,nightsSemiFlexible:`[${e}=nights-semi-flex]`,priceSemiFlexible:`[${e}=price-semi-flex]`,priceSemiFlexWrap:`[${e}=price-semi-flex-wrap]`,priceNonRefWrap:`[${e}=price-non-ref-wrap]`,bookingModal:`[${e}=booking-modal]`,bookingForm:`[${e}=booking-form]`,bookingClose:`[${e}=booking-close]`,reserveNonRefButton:`[${e}=reserve-non-ref]`,reserveSemiFlexButton:`[${e}=reserve-semi-flex]`,iframeWrap:`[${e}=iframe-wrap]`,iframeElement:`[${e}=iframe-el]`,iframeLinkElement:`[${e}=iframe-link-el]`,citiesDropdownWrap:`[${e}=cities-dropdown-wrap]`,citiesDropdownTemplate:`[${e}=cities-template]`,citiesLinktext:`[${e}=cities-link-text]`,tarifWrap:`[${e}=tarif-wrap]`,tarifBlock:`[${e}=tarif-block]`,tarifName:`[${e}=tarif-name]`,tarifNights:`[${e}=tarif-nights]`,tarifTotal:`[${e}=tarif-total]`,tarifAvg:`[${e}=tarif-avg]`,tarifReserve:`[${e}=tarif-reserve]`,tarifRadio:`[${e}=tarif-radio]`,tarifDetails:`[${e}=tarif-details]`,apartmentLink:`[${e}=apartment-link]`,tarifRadioSelector:"input[name=radio]:checked",apartmentAvailable:`[${e}=apartment-available]`,apartmentNotAvailable:`[${e}=apartment-not-available]`,apartmentReserveForm:`[${e}=reserve-form]`,searchLoader:`[${e}=search-loader]`,searchLoaderText:`[${e}=search-loader-text]`,bookingLoader:`[${e}=booking-loader]`,bookingLoaderText:`[${e}=booking-loader-text]`,searchBarLoader:`[${e}=search-bar-loader]`,searchBarLoaderText:`[${e}=search-bar-loader-text]`,dropdownToggle:`[${e}=dropdown-toggle]`,dropdownOpenClass:"w--open",cityId:`[${e}=city-id]`,priceAsc:`[${e}=price-asc]`,priceDesc:`[${e}=price-desc]`,priceSortWrap:`[${e}=price-sort-wrap]`,countryCode:`[${e}=country-code]`};var t={fbclid:"fbclid",utmSource:"utm_source",utmMedium:"utm_medium",utmCampaign:"utm_campaign"};var c="AIzaSyD-uHCYhoVj0agYO-sIVV8Z_Ud6Ma_ivuo",l=`https://maps.googleapis.com/maps/api/geocode/json?key=${c}&`;window.Webflow||(window.Webflow=[]);window.Webflow.push(async()=>{let a=new URLSearchParams(window.location.search),i=a.get(t.fbclid)||"",n=a.get(t.utmSource)||"",r=a.get(t.utmMedium)||"",o=a.get(t.utmCampaign)||"";i&&localStorage.setItem(t.fbclid,i),n&&localStorage.setItem(t.utmSource,n),r&&localStorage.setItem(t.utmMedium,r),o&&localStorage.setItem(t.utmCampaign,o)});})();
