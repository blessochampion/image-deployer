"use strict";(()=>{var e="data",r={searchForm:`[${e}=search-form]`,citiesDropdown:`[${e}=cities-dropdown]`,checkinDatePicker:`[${e}=checkin-date-picker]`,checkoutDatePicker:`[${e}=checkout-date-picker]`,noOfPeople:`[${e}=no-of-people]`,name:`[${e}=name]`,title:`[${e}=title]`,neighborhood:`[${e}=neighborhood]`,collection:`[${e}=collection]`,category:`[${e}=category]`,categoryContainer:`[${e}=category-container]`,sliderContainer:`[${e}=slider-container]`,price:`[${e}=price]`,size:`[${e}=size]`,rooms:`[${e}=rooms]`,bathrooms:`[${e}=bathrooms]`,equipmentsContainer:`[${e}=equipment-container]`,apartmentDetailsLink:`[${e}=apartment-details-link]`,language:`[${e}=lang]`,tagList:`[${e}=tag-list]`,container:`[${e}=container]`,image:`[${e}=image]`,apartmentId:`[${e}-apartment-id]`,apartmentIdStr:`${e}-apartment-id`,similarApartments:`[${e}=similar-apartments-list]`,apartmentCmsItem:`[${e}=apartment-cms-item]`,apartmentOrder:`[${e}=order]`,searchUnavailable:`[${e}=search-unavailable]`,searchComingSoon:`[${e}=search-coming-soon]`,mainList:`[${e}=main-list]`,mapContainer:`[${e}=map-container]`,openMap:`[${e}=open-map]`,searchButton:`[${e}=search-button]`,checkinInput:`[${e}=arrive]`,checkoutInput:`[${e}=depart]`,adultCount:`[${e}=adult-count]`,adultDecrement:`[${e}=adult-decrement]`,adultIncrement:`[${e}=adult-increment]`,infantCount:`[${e}=infant-count]`,infantIncrement:`[${e}=infant-increment]`,infantDecrement:`[${e}=infant-decrement]`,babyCount:`[${e}=baby-count]`,babyIncrement:`[${e}=baby-increment]`,babyDecrement:`[${e}=baby-decrement]`,totalCount:`[${e}=total-count]`,bookingSyncId:`[${e}=bookingsync-apt-id]`,averagePriceNonRefundable:`[${e}=avg-price-non-ref]`,priceNonRefundable:`[${e}=price-non-ref]`,nightsNonRefundable:`[${e}=nights-non-ref]`,averagePriceSemiFlexible:`[${e}=avg-price-semi-flex]`,nightsSemiFlexible:`[${e}=nights-semi-flex]`,priceSemiFlexible:`[${e}=price-semi-flex]`,priceSemiFlexWrap:`[${e}=price-semi-flex-wrap]`,priceNonRefWrap:`[${e}=price-non-ref-wrap]`,bookingModal:`[${e}=booking-modal]`,bookingForm:`[${e}=booking-form]`,bookingClose:`[${e}=booking-close]`,reserveNonRefButton:`[${e}=reserve-non-ref]`,reserveSemiFlexButton:`[${e}=reserve-semi-flex]`,iframeWrap:`[${e}=iframe-wrap]`,iframeElement:`[${e}=iframe-el]`,iframeLinkElement:`[${e}=iframe-link-el]`,citiesDropdownWrap:`[${e}=cities-dropdown-wrap]`,citiesDropdownTemplate:`[${e}=cities-template]`,citiesLinktext:`[${e}=cities-link-text]`,tarifWrap:`[${e}=tarif-wrap]`,tarifBlock:`[${e}=tarif-block]`,tarifName:`[${e}=tarif-name]`,tarifNights:`[${e}=tarif-nights]`,tarifTotal:`[${e}=tarif-total]`,tarifAvg:`[${e}=tarif-avg]`,tarifReserve:`[${e}=tarif-reserve]`,tarifRadio:`[${e}=tarif-radio]`,tarifDetails:`[${e}=tarif-details]`,apartmentLink:`[${e}=apartment-link]`,tarifRadioSelector:"input[name=radio]:checked",apartmentAvailable:`[${e}=apartment-available]`,apartmentNotAvailable:`[${e}=apartment-not-available]`,apartmentReserveForm:`[${e}=reserve-form]`,searchLoader:`[${e}=search-loader]`,searchLoaderText:`[${e}=search-loader-text]`,bookingLoader:`[${e}=booking-loader]`,bookingLoaderText:`[${e}=booking-loader-text]`,searchBarLoader:`[${e}=search-bar-loader]`,searchBarLoaderText:`[${e}=search-bar-loader-text]`,dropdownToggle:`[${e}=dropdown-toggle]`,dropdownOpenClass:"w--open",cityId:`[${e}=city-id]`,priceAsc:`[${e}=price-asc]`,priceDesc:`[${e}=price-desc]`,priceSortWrap:`[${e}=price-sort-wrap]`,countryCode:`[${e}=country-code]`};var o={checkinDate:"checkin_date",checkoutDate:"checkout_date",no_of_people:"no_of_people",nbChildren:"nb_children",nbBabies:"nb_babies",cityName:"city_name",cityId:"city_id",bookingSyncAptId:"bookingsync_apt_id"};var p="https://merveil.webflow.io/appartements";var s=class{constructor(){this.citiesDropdown=document.querySelector(r.citiesDropdown)}updateCitiesDropdown(t,i){this.citiesDropdown.value=t}getCityId(){return""}getCityName(){return this.citiesDropdown.value}};var d=n=>{let t="?";for(let[i,a]of Object.entries(n))a==null||a==="undefined-undefined-"||(t=t+`${i}=${a}&`);return t};var c=n=>{if(!(!n||!/^\d{2}\/\d{2}\/\d{2}$/.test(n)))return n},u=n=>n?/^\d{2}\/\d{2}\/\d{2}$/.test(n):!1;var b=()=>window.location.href.includes("webflow.io")?p:p;var g=()=>{let n=new URLSearchParams(window.location.search),t=n.get(o.checkinDate),i=n.get(o.checkoutDate),a=n.get(o.no_of_people),f=n.get(o.cityId),m=n.get(o.cityName),$=n.get(o.bookingSyncAptId);if(!a)return;let k=Number(a);return{checkinDate:t,checkoutDate:i,nbAdults:k,cityId:f,cityName:m,bookingSyncAptId:$}};var h=n=>{if(/^\d{4}\/\d{2}\/\d{4}$/.test(n))return n;let i=n.split("/");return`20${i[2]}/${i[1]}/${i[0]}`};var l=class{constructor(t){this.cityDropdownInstance=t,this.cityName=this.cityDropdownInstance.getCityName(),this.cityId=this.cityDropdownInstance.getCityId(),this.checkInDateElement=document.querySelector(r.checkinDatePicker),this.checkOutDateElement=document.querySelector(r.checkoutDatePicker),this.noOfpeopleElement=document.querySelector(r.noOfPeople),this.noOfPeople=this.noOfpeopleElement.textContent,this.searchForm=document.querySelector(r.searchForm),this.searchForm.addEventListener("submit",i=>this.handleSearch(i)),this.queryUrl=void 0,this.getAndUpdateSearchData()}getAndUpdateSearchData(){let t=g();if(t){if(this.cityId=t.cityId??"",this.cityName=t.cityName||"",t.checkinDate&&t.checkinDate!=="undefined-undefined-"&&t.checkoutDate&&t.checkoutDate!=="undefined-undefined-"){let i=t.checkinDate,a=t.checkoutDate;u(i)&&u(a)&&(this.checkInDate=i,this.checkOutDate=a)}this.noOfPeople=t.nbAdults.toString(),this.noOfPeople&&(this.noOfpeopleElement.textContent=this.noOfPeople),this.updateSearchData()}}updateSearchData(){this.cityDropdownInstance.updateCitiesDropdown(this.cityName,this.cityId),setTimeout(()=>{this.checkInDate&&this.checkOutDate&&window.picker.setDateRange(new Date(h(this.checkInDate)),new Date(h(this.checkOutDate)))},1e3),this.noOfpeopleElement.textContent=this.noOfPeople;let t={checkin_date:c(this.checkInDate),checkout_date:c(this.checkOutDate),no_of_people:this.noOfPeople,city_name:this.cityName};this.queryUrl=d(t)}handleSearch(t){t.preventDefault(),t.stopPropagation(),this.cityName=this.cityDropdownInstance.getCityName(),this.checkInDate=this.checkInDateElement.textContent,this.checkOutDate=this.checkOutDateElement.textContent,this.noOfPeople=this.noOfpeopleElement.textContent;let i={checkin_date:c(this.checkInDate),checkout_date:c(this.checkOutDate),no_of_people:this.noOfPeople,nb_children:this.infantCount,nb_babies:this.babyCount,city_id:this.cityId,city_name:this.cityName},a=d(i),m=b()+a;window.location.href=m}};window.Webflow||(window.Webflow=[]);window.Webflow.push(async()=>{let n=new s;new l(n)});})();
