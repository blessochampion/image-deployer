"use strict";(()=>{var e="data",o={searchForm:`[${e}=search-form]`,citiesDropdown:`[${e}=cities-dropdown]`,checkinDatePicker:`[${e}=checkin-date-picker]`,checkoutDatePicker:`[${e}=checkout-date-picker]`,noOfPeople:`[${e}=no-of-people]`,name:`[${e}=name]`,title:`[${e}=title]`,neighborhood:`[${e}=neighborhood]`,collection:`[${e}=collection]`,category:`[${e}=category]`,categoryContainer:`[${e}=category-container]`,sliderContainer:`[${e}=slider-container]`,price:`[${e}=price]`,size:`[${e}=size]`,rooms:`[${e}=rooms]`,bathrooms:`[${e}=bathrooms]`,equipmentsContainer:`[${e}=equipment-container]`,language:`[${e}=lang]`,image:`[${e}=image]`,apartmentId:`[${e}-apartment-id]`,apartmentIdStr:`${e}-apartment-id`,similarApartments:`[${e}=similar-apartments-list]`,apartmentCmsItem:`[${e}=apartment-cms-item]`,apartmentOrder:`[${e}=order]`,searchUnavailable:`[${e}=search-unavailable]`,searchComingSoon:`[${e}=search-coming-soon]`,mainList:`[${e}=main-list]`,mapContainer:`[${e}=map-container]`,openMap:`[${e}=open-map]`,searchButton:`[${e}=search-button]`,checkinInput:`[${e}=arrive]`,checkoutInput:`[${e}=depart]`,adultCount:`[${e}=adult-count]`,adultDecrement:`[${e}=adult-decrement]`,adultIncrement:`[${e}=adult-increment]`,infantCount:`[${e}=infant-count]`,infantIncrement:`[${e}=infant-increment]`,infantDecrement:`[${e}=infant-decrement]`,babyCount:`[${e}=baby-count]`,babyIncrement:`[${e}=baby-increment]`,babyDecrement:`[${e}=baby-decrement]`,totalCount:`[${e}=total-count]`,bookingSyncId:`[${e}=bookingsync-apt-id]`,averagePriceNonRefundable:`[${e}=avg-price-non-ref]`,priceNonRefundable:`[${e}=price-non-ref]`,nightsNonRefundable:`[${e}=nights-non-ref]`,averagePriceSemiFlexible:`[${e}=avg-price-semi-flex]`,nightsSemiFlexible:`[${e}=nights-semi-flex]`,priceSemiFlexible:`[${e}=price-semi-flex]`,priceSemiFlexWrap:`[${e}=price-semi-flex-wrap]`,priceNonRefWrap:`[${e}=price-non-ref-wrap]`,bookingModal:`[${e}=booking-modal]`,bookingForm:`[${e}=booking-form]`,bookingClose:`[${e}=booking-close]`,reserveNonRefButton:`[${e}=reserve-non-ref]`,reserveSemiFlexButton:`[${e}=reserve-semi-flex]`,iframeWrap:`[${e}=iframe-wrap]`,iframeElement:`[${e}=iframe-el]`,iframeLinkElement:`[${e}=iframe-link-el]`,citiesDropdownWrap:`[${e}=cities-dropdown-wrap]`,citiesDropdownTemplate:`[${e}=cities-template]`,citiesLinktext:`[${e}=cities-link-text]`,tarifWrap:`[${e}=tarif-wrap]`,tarifBlock:`[${e}=tarif-block]`,tarifName:`[${e}=tarif-name]`,tarifNights:`[${e}=tarif-nights]`,tarifTotal:`[${e}=tarif-total]`,tarifAvg:`[${e}=tarif-avg]`,tarifReserve:`[${e}=tarif-reserve]`,tarifRadio:`[${e}=tarif-radio]`,tarifDetails:`[${e}=tarif-details]`,apartmentLink:`[${e}=apartment-link]`,tarifRadioSelector:"input[name=radio]:checked",apartmentAvailable:`[${e}=apartment-available]`,apartmentNotAvailable:`[${e}=apartment-not-available]`,apartmentReserveForm:`[${e}=reserve-form]`,searchLoader:`[${e}=search-loader]`,searchLoaderText:`[${e}=search-loader-text]`,bookingLoader:`[${e}=booking-loader]`,bookingLoaderText:`[${e}=booking-loader-text]`,searchBarLoader:`[${e}=search-bar-loader]`,searchBarLoaderText:`[${e}=search-bar-loader-text]`,dropdownToggle:`[${e}=dropdown-toggle]`,dropdownOpenClass:"w--open",cityId:`[${e}=city-id]`,priceAsc:`[${e}=price-asc]`,priceDesc:`[${e}=price-desc]`,priceSortWrap:`[${e}=price-sort-wrap]`,countryCode:`[${e}=country-code]`};var r={checkinDate:"checkin_date",checkoutDate:"checkout_date",nbAdults:"nb_adults",nbChildren:"nb_children",nbBabies:"nb_babies",cityName:"city_name",cityId:"city_id",bookingSyncAptId:"bookingsync_apt_id"};var d="https://merveil.webflow.io/appartements";var l=class{constructor(){this.citiesDropdown=document.querySelector(o.citiesDropdown)}updateCitiesDropdown(t,a){this.citiesDropdown.innerText=t}getCityId(){return""}getCityName(){return this.citiesDropdown.value}};var u=n=>{let t="?";for(let[a,i]of Object.entries(n))i==null||i==="undefined-undefined-"||(t=t+`${a}=${i}&`);return t};var c=n=>{if(!(!n||!/^\d{2}\/\d{2}\/\d{2}$/.test(n)))return n};var b=()=>window.location.href.includes("webflow.io")?d:d;var f=()=>{let n=new URLSearchParams(window.location.search),t=n.get(r.checkinDate),a=n.get(r.checkoutDate),i=n.get(r.nbAdults),p=n.get(r.nbChildren),s=n.get(r.nbBabies),g=n.get(r.cityId),$=n.get(r.cityName),y=n.get(r.bookingSyncAptId);if(!i||!p||!s)return;let k=Number(i),D=Number(p),w=Number(s);return{checkinDate:t,checkoutDate:a,nbAdults:k,nbChildren:D,nbBabies:w,cityId:g,cityName:$,bookingSyncAptId:y}};var h=n=>{if(/^\d{2}-\d{2}-\d{4}$/.test(n))return n;let a=n.split("-");return a[2]+"-"+a[1]+"-"+a[0]};var m=class{constructor(t){this.cityDropdownInstance=t,this.cityName=this.cityDropdownInstance.getCityName(),this.cityId=this.cityDropdownInstance.getCityId(),this.checkInDateElement=document.querySelector(o.checkinDatePicker),this.checkInDate=this.checkInDateElement.textContent,this.checkOutDateElement=document.querySelector(o.checkoutDatePicker),this.checkOutDate=this.checkOutDateElement.textContent,this.noOfpeopleElement=document.querySelector(o.noOfPeople),this.noOfPeople=this.noOfpeopleElement.textContent,this.searchForm=document.querySelector(o.searchForm),this.searchForm.addEventListener("submit",a=>this.handleSearch(a)),this.queryUrl=void 0,this.getAndUpdateSearchData()}getAndUpdateSearchData(){let t=f();t&&(this.cityId=t.cityId??"",this.cityName=t.cityName??this.cityDropdownInstance.defaultNameBasedOnLocale,t.checkinDate&&t.checkinDate!=="undefined-undefined-"&&(this.checkInDate=t.checkinDate),t.checkoutDate&&t.checkoutDate!=="undefined-undefined-"&&(this.checkOutDate=t.checkoutDate),this.totalCount=(t.nbAdults+t.nbChildren+t.nbBabies).toString(),this.noOfPeople=t.nbAdults.toString(),this.infantCount=t.nbChildren.toString(),this.babyCount=t.nbBabies.toString(),this.updateSearchData())}updateSearchData(){this.cityDropdownInstance.updateCitiesDropdown(this.cityName,this.cityId),this.checkInDate&&(this.checkInDateElement.textContent=h(this.checkInDate)),this.checkOutDate&&(this.checkOutDateElement.textContent=h(this.checkOutDate)),this.noOfpeopleElement.textContent=this.noOfPeople,this.totalCountElement.value=this.totalCount;let t={checkin_date:c(this.checkInDate),checkout_date:c(this.checkOutDate),no_of_people:this.noOfPeople,city_name:this.cityName};this.queryUrl=u(t)}handleSearch(t){t.preventDefault(),t.stopPropagation(),this.cityName=this.cityDropdownInstance.getCityName(),this.checkInDate=this.checkInDateElement.textContent,this.checkOutDate=this.checkOutDateElement.textContent,this.noOfPeople=this.noOfpeopleElement.textContent;let a={checkin_date:c(this.checkInDate),checkout_date:c(this.checkOutDate),no_of_people:this.noOfPeople,nb_children:this.infantCount,nb_babies:this.babyCount,city_id:this.cityId,city_name:this.cityName},i=u(a),s=b()+i;window.location.href=s}};window.Webflow||(window.Webflow=[]);window.Webflow.push(async()=>{let n=new l;new m(n)});})();
