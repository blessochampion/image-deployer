"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // ../../node_modules/.pnpm/intl-tel-input@19.2.15/node_modules/intl-tel-input/build/js/intlTelInput.js
  var require_intlTelInput = __commonJS({
    "../../node_modules/.pnpm/intl-tel-input@19.2.15/node_modules/intl-tel-input/build/js/intlTelInput.js"(exports, module) {
      init_live_reload();
      (function(factory) {
        if (typeof module === "object" && module.exports)
          module.exports = factory();
        else
          window.intlTelInput = factory();
      })(function(undefined2) {
        "use strict";
        return function() {
          var allCountries = [["Afghanistan", "af", "93"], ["Albania", "al", "355"], ["Algeria", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua & Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria", "at", "43"], ["Azerbaijan", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain", "bh", "973"], ["Bangladesh", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus", "by", "375"], ["Belgium", "be", "32"], ["Belize", "bz", "501"], ["Benin", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia & Herzegovina", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi", "bi", "257"], ["Cambodia", "kh", "855"], ["Cameroon", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic", "cf", "236"], ["Chad", "td", "235"], ["Chile", "cl", "56"], ["China", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros", "km", "269"], ["Congo - Brazzaville", "cg", "242"], ["Congo - Kinshasa", "cd", "243"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["C\xF4te d\u2019Ivoire", "ci", "225"], ["Croatia", "hr", "385"], ["Cuba", "cu", "53"], ["Cura\xE7ao", "cw", "599", 0], ["Cyprus", "cy", "357"], ["Czech Republic", "cz", "420"], ["Denmark", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands", "fk", "500"], ["Faroe Islands", "fo", "298"], ["Fiji", "fj", "679"], ["Finland", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana", "gf", "594"], ["French Polynesia", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia", "ge", "995"], ["Germany", "de", "49"], ["Ghana", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece", "gr", "30"], ["Greenland", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea", "gn", "224"], ["Guinea-Bissau", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong", "hk", "852"], ["Hungary", "hu", "36"], ["Iceland", "is", "354"], ["India", "in", "91"], ["Indonesia", "id", "62"], ["Iran", "ir", "98"], ["Iraq", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel", "il", "972"], ["Italy", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan", "jo", "962"], ["Kazakhstan", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait", "kw", "965"], ["Kyrgyzstan", "kg", "996"], ["Laos", "la", "856"], ["Latvia", "lv", "371"], ["Lebanon", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau", "mo", "853"], ["Madagascar", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania", "mr", "222"], ["Mauritius", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia", "mn", "976"], ["Montenegro", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco", "ma", "212", 0], ["Mozambique", "mz", "258"], ["Myanmar (Burma)", "mm", "95"], ["Namibia", "na", "264"], ["Nauru", "nr", "674"], ["Nepal", "np", "977"], ["Netherlands", "nl", "31"], ["New Caledonia", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea", "kp", "850"], ["North Macedonia", "mk", "389"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway", "no", "47", 0], ["Oman", "om", "968"], ["Pakistan", "pk", "92"], ["Palau", "pw", "680"], ["Palestine", "ps", "970"], ["Panama", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru", "pe", "51"], ["Philippines", "ph", "63"], ["Poland", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar", "qa", "974"], ["R\xE9union", "re", "262", 0], ["Romania", "ro", "40"], ["Russia", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["S\xE3o Tom\xE9 & Pr\xEDncipe", "st", "239"], ["Saudi Arabia", "sa", "966"], ["Senegal", "sn", "221"], ["Serbia", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia", "sk", "421"], ["Slovenia", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia", "so", "252"], ["South Africa", "za", "27"], ["South Korea", "kr", "82"], ["South Sudan", "ss", "211"], ["Spain", "es", "34"], ["Sri Lanka", "lk", "94"], ["St Barth\xE9lemy", "bl", "590", 1], ["St Helena", "sh", "290"], ["St Kitts & Nevis", "kn", "1", 18, ["869"]], ["St Lucia", "lc", "1", 19, ["758"]], ["St Martin", "mf", "590", 2], ["St Pierre & Miquelon", "pm", "508"], ["St Vincent & Grenadines", "vc", "1", 20, ["784"]], ["Sudan", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard & Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden", "se", "46"], ["Switzerland", "ch", "41"], ["Syria", "sy", "963"], ["Taiwan", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad & Tobago", "tt", "1", 22, ["868"]], ["Tunisia", "tn", "216"], ["Turkey", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks & Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["Uganda", "ug", "256"], ["Ukraine", "ua", "380"], ["United Arab Emirates", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["US Virgin Islands", "vi", "1", 24, ["340"]], ["Uzbekistan", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam", "vn", "84"], ["Wallis & Futuna", "wf", "681"], ["Western Sahara", "eh", "212", 1, ["5288", "5289"]], ["Yemen", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["\xC5land Islands", "ax", "358", 1, ["18"]]];
          for (var i2 = 0; i2 < allCountries.length; i2++) {
            var c = allCountries[i2];
            allCountries[i2] = {
              name: c[0],
              iso2: c[1],
              dialCode: c[2],
              priority: c[3] || 0,
              areaCodes: c[4] || null,
              nodeById: {}
            };
          }
          "use strict";
          function _objectSpread(target) {
            for (var i3 = 1; i3 < arguments.length; i3++) {
              var source = arguments[i3] != null ? Object(arguments[i3]) : {};
              var ownKeys2 = Object.keys(source);
              if (typeof Object.getOwnPropertySymbols === "function") {
                ownKeys2.push.apply(ownKeys2, Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
              }
              ownKeys2.forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            }
            return target;
          }
          function _defineProperty(obj, key, value) {
            key = _toPropertyKey(key);
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value,
                enumerable: true,
                configurable: true,
                writable: true
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          function _slicedToArray(arr, i3) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i3) || _unsupportedIterableToArray(arr, i3) || _nonIterableRest();
          }
          function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          function _unsupportedIterableToArray(o, minLen) {
            if (!o)
              return;
            if (typeof o === "string")
              return _arrayLikeToArray(o, minLen);
            var n2 = Object.prototype.toString.call(o).slice(8, -1);
            if (n2 === "Object" && o.constructor)
              n2 = o.constructor.name;
            if (n2 === "Map" || n2 === "Set")
              return Array.from(o);
            if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
              return _arrayLikeToArray(o, minLen);
          }
          function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length)
              len = arr.length;
            for (var i3 = 0, arr2 = new Array(len); i3 < len; i3++) {
              arr2[i3] = arr[i3];
            }
            return arr2;
          }
          function _iterableToArrayLimit(arr, i3) {
            var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
            if (null != _i) {
              var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
              try {
                if (_x = (_i = _i.call(arr)).next, 0 === i3) {
                  if (Object(_i) !== _i)
                    return;
                  _n = false;
                } else
                  for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i3); _n = true) {
                  }
              } catch (err) {
                _d = true, _e = err;
              } finally {
                try {
                  if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r))
                    return;
                } finally {
                  if (_d)
                    throw _e;
                }
              }
              return _arr;
            }
          }
          function _arrayWithHoles(arr) {
            if (Array.isArray(arr))
              return arr;
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _defineProperties2(target, props) {
            for (var i3 = 0; i3 < props.length; i3++) {
              var descriptor = props[i3];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
            }
          }
          function _createClass2(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties2(Constructor.prototype, protoProps);
            if (staticProps)
              _defineProperties2(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
              writable: false
            });
            return Constructor;
          }
          function _toPropertyKey(arg) {
            var key = _toPrimitive(arg, "string");
            return typeof key === "symbol" ? key : String(key);
          }
          function _toPrimitive(input, hint) {
            if (typeof input !== "object" || input === null)
              return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined2) {
              var res = prim.call(input, hint || "default");
              if (typeof res !== "object")
                return res;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (hint === "string" ? String : Number)(input);
          }
          var intlTelInputGlobals = {
            getInstance: function getInstance(input) {
              var id2 = input.getAttribute("data-intl-tel-input-id");
              return window.intlTelInputGlobals.instances[id2];
            },
            instances: {},
            // using a global like this allows us to mock it in the tests
            documentReady: function documentReady() {
              return document.readyState === "complete";
            }
          };
          if (typeof window === "object") {
            window.intlTelInputGlobals = intlTelInputGlobals;
          }
          var id = 0;
          var defaults = {
            // whether or not to allow the dropdown
            allowDropdown: true,
            // auto insert dial code (A) on init, (B) on user selecting a country, (C) on calling setCountry
            // also listen for blur/submit and auto remove dial code if that's all there is
            autoInsertDialCode: false,
            // add a placeholder in the input with an example number for the selected country
            autoPlaceholder: "polite",
            // add a country search input at the top of the dropdown
            countrySearch: true,
            // modify the parentClass
            containerClass: "",
            // modify the auto placeholder
            customPlaceholder: null,
            // append menu to specified element
            dropdownContainer: null,
            // don't display these countries
            excludeCountries: [],
            // fix the dropdown width to the input width (rather than being as wide as the longest country name)
            fixDropdownWidth: true,
            // format the number as the user types
            formatAsYouType: true,
            // format the input value during initialisation and on setNumber
            formatOnDisplay: true,
            // geoIp lookup function
            geoIpLookup: null,
            // inject a hidden input with this name, and on submit, populate it with the result of getNumber
            hiddenInput: null,
            // internationalise the plugin text e.g. search input placeholder, country names
            i18n: {},
            // initial country
            initialCountry: "",
            // national vs international formatting for numbers e.g. placeholders and displaying existing numbers
            nationalMode: true,
            // display only these countries
            onlyCountries: [],
            // number type to use for placeholders
            placeholderNumberType: "MOBILE",
            // the countries at the top of the list
            preferredCountries: [],
            // option to hide the flags - must be used with showSelectedDialCode, or allowDropdown=false
            showFlags: true,
            // display the international dial code next to the selected flag
            showSelectedDialCode: false,
            // use full screen popup instead of dropdown for country list
            useFullscreenPopup: typeof navigator !== "undefined" && typeof window !== "undefined" ? (
              // we cannot just test screen size as some smartphones/website meta tags will report desktop
              // resolutions
              // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
              /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500
            ) : false,
            // specify the path to the libphonenumber script to enable validation/formatting
            utilsScript: ""
          };
          var regionlessNanpNumbers = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
          var forEachInstance = function forEachInstance2(method) {
            var instances = window.intlTelInputGlobals.instances;
            Object.values(instances).forEach(function(instance) {
              return instance[method]();
            });
          };
          var Iti = /* @__PURE__ */ function() {
            function Iti2(input) {
              var customOptions = arguments.length > 1 && arguments[1] !== undefined2 ? arguments[1] : {};
              _classCallCheck(this, Iti2);
              this.id = id++;
              this.telInput = input;
              this.activeItem = null;
              this.highlightedItem = null;
              this.options = Object.assign({}, defaults, customOptions);
              this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
            }
            _createClass2(Iti2, [{
              key: "_init",
              value: function _init() {
                var _this = this;
                if (this.options.useFullscreenPopup) {
                  this.options.fixDropdownWidth = false;
                }
                if (this.options.countrySearch && !this.options.useFullscreenPopup) {
                  this.options.fixDropdownWidth = true;
                }
                if (this.options.nationalMode) {
                  this.options.autoInsertDialCode = false;
                }
                if (this.options.showSelectedDialCode) {
                  this.options.autoInsertDialCode = false;
                }
                var forceShowFlags = this.options.allowDropdown && !this.options.showSelectedDialCode;
                if (!this.options.showFlags && forceShowFlags) {
                  this.options.showFlags = true;
                }
                if (this.options.useFullscreenPopup && !this.options.dropdownContainer) {
                  this.options.dropdownContainer = document.body;
                }
                this.isRTL = !!this.telInput.closest("[dir=rtl]");
                if (typeof Promise !== "undefined") {
                  var autoCountryPromise = new Promise(function(resolve, reject) {
                    _this.resolveAutoCountryPromise = resolve;
                    _this.rejectAutoCountryPromise = reject;
                  });
                  var utilsScriptPromise = new Promise(function(resolve, reject) {
                    _this.resolveUtilsScriptPromise = resolve;
                    _this.rejectUtilsScriptPromise = reject;
                  });
                  this.promise = Promise.all([autoCountryPromise, utilsScriptPromise]);
                } else {
                  this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {
                  };
                  this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {
                  };
                }
                this.selectedCountryData = {};
                this._processCountryData();
                this._generateMarkup();
                this._setInitialState();
                this._initListeners();
                this._initRequests();
              }
            }, {
              key: "_processCountryData",
              value: function _processCountryData() {
                this._processAllCountries();
                this._processCountryCodes();
                this._processPreferredCountries();
                this._translateCountryNames();
                if (this.options.onlyCountries.length || this.options.i18n) {
                  this.countries.sort(this._countryNameSort);
                }
              }
            }, {
              key: "_addCountryCode",
              value: function _addCountryCode(iso2, countryCode, priority) {
                if (countryCode.length > this.countryCodeMaxLen) {
                  this.countryCodeMaxLen = countryCode.length;
                }
                if (!this.countryCodes.hasOwnProperty(countryCode)) {
                  this.countryCodes[countryCode] = [];
                }
                for (var i3 = 0; i3 < this.countryCodes[countryCode].length; i3++) {
                  if (this.countryCodes[countryCode][i3] === iso2) {
                    return;
                  }
                }
                var index = priority !== undefined2 ? priority : this.countryCodes[countryCode].length;
                this.countryCodes[countryCode][index] = iso2;
              }
            }, {
              key: "_processAllCountries",
              value: function _processAllCountries() {
                if (this.options.onlyCountries.length) {
                  var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                    return country.toLowerCase();
                  });
                  this.countries = allCountries.filter(function(country) {
                    return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                  });
                } else if (this.options.excludeCountries.length) {
                  var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                    return country.toLowerCase();
                  });
                  this.countries = allCountries.filter(function(country) {
                    return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                  });
                } else {
                  this.countries = allCountries;
                }
              }
            }, {
              key: "_translateCountryNames",
              value: function _translateCountryNames() {
                for (var i3 = 0; i3 < this.countries.length; i3++) {
                  var iso = this.countries[i3].iso2.toLowerCase();
                  if (this.options.i18n.hasOwnProperty(iso)) {
                    this.countries[i3].name = this.options.i18n[iso];
                  }
                }
              }
            }, {
              key: "_countryNameSort",
              value: function _countryNameSort(a, b) {
                if (a.name < b.name) {
                  return -1;
                }
                if (a.name > b.name) {
                  return 1;
                }
                return 0;
              }
            }, {
              key: "_processCountryCodes",
              value: function _processCountryCodes() {
                this.countryCodeMaxLen = 0;
                this.dialCodes = {};
                this.countryCodes = {};
                for (var i3 = 0; i3 < this.countries.length; i3++) {
                  var c2 = this.countries[i3];
                  if (!this.dialCodes[c2.dialCode]) {
                    this.dialCodes[c2.dialCode] = true;
                  }
                  this._addCountryCode(c2.iso2, c2.dialCode, c2.priority);
                }
                for (var _i = 0; _i < this.countries.length; _i++) {
                  var _c = this.countries[_i];
                  if (_c.areaCodes) {
                    var rootCountryCode = this.countryCodes[_c.dialCode][0];
                    for (var j = 0; j < _c.areaCodes.length; j++) {
                      var areaCode = _c.areaCodes[j];
                      for (var k = 1; k < areaCode.length; k++) {
                        var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                        this._addCountryCode(rootCountryCode, partialDialCode);
                        this._addCountryCode(_c.iso2, partialDialCode);
                      }
                      this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                    }
                  }
                }
              }
            }, {
              key: "_processPreferredCountries",
              value: function _processPreferredCountries() {
                this.preferredCountries = [];
                for (var i3 = 0; i3 < this.options.preferredCountries.length; i3++) {
                  var countryCode = this.options.preferredCountries[i3].toLowerCase();
                  var countryData = this._getCountryData(countryCode, false, true);
                  if (countryData) {
                    this.preferredCountries.push(countryData);
                  }
                }
              }
            }, {
              key: "_createEl",
              value: function _createEl(name, attrs, container) {
                var el = document.createElement(name);
                if (attrs) {
                  Object.entries(attrs).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
                    return el.setAttribute(key, value);
                  });
                }
                if (container) {
                  container.appendChild(el);
                }
                return el;
              }
            }, {
              key: "_generateMarkup",
              value: function _generateMarkup() {
                this.telInput.classList.add("iti__tel-input");
                if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
                  this.telInput.setAttribute("autocomplete", "off");
                }
                var _this$options = this.options, allowDropdown = _this$options.allowDropdown, showSelectedDialCode = _this$options.showSelectedDialCode, showFlags = _this$options.showFlags, containerClass = _this$options.containerClass, hiddenInput = _this$options.hiddenInput, dropdownContainer = _this$options.dropdownContainer, fixDropdownWidth = _this$options.fixDropdownWidth, useFullscreenPopup = _this$options.useFullscreenPopup, countrySearch = _this$options.countrySearch;
                var parentClass = "iti";
                if (allowDropdown) {
                  parentClass += " iti--allow-dropdown";
                }
                if (showSelectedDialCode) {
                  parentClass += " iti--show-selected-dial-code";
                }
                if (showFlags) {
                  parentClass += " iti--show-flags";
                }
                if (containerClass) {
                  parentClass += " ".concat(containerClass);
                }
                if (!useFullscreenPopup) {
                  parentClass += " iti--inline-dropdown";
                }
                var wrapper = this._createEl("div", {
                  "class": parentClass
                });
                this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                var showFlagsContainer = allowDropdown || showFlags || showSelectedDialCode;
                if (showFlagsContainer) {
                  this.flagsContainer = this._createEl("div", {
                    "class": "iti__flag-container"
                  }, wrapper);
                }
                wrapper.appendChild(this.telInput);
                if (showFlagsContainer) {
                  this.selectedFlag = this._createEl("div", _objectSpread({
                    "class": "iti__selected-flag"
                  }, allowDropdown && {
                    role: "combobox",
                    "aria-haspopup": "listbox",
                    "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                    "aria-expanded": "false",
                    "aria-label": this.options.i18n.selectedCountryAriaLabel || "Selected country"
                  }), this.flagsContainer);
                }
                if (showFlags) {
                  this.selectedFlagInner = this._createEl("div", {
                    "class": "iti__flag"
                  }, this.selectedFlag);
                }
                if (this.selectedFlag && this.telInput.disabled) {
                  this.selectedFlag.setAttribute("aria-disabled", "true");
                }
                if (showSelectedDialCode) {
                  this.selectedDialCode = this._createEl("div", {
                    "class": "iti__selected-dial-code"
                  }, this.selectedFlag);
                }
                if (allowDropdown) {
                  if (!this.telInput.disabled) {
                    this.selectedFlag.setAttribute("tabindex", "0");
                  }
                  this.dropdownArrow = this._createEl("div", {
                    "class": "iti__arrow"
                  }, this.selectedFlag);
                  var extraClasses = fixDropdownWidth ? "" : "iti--flexible-dropdown-width";
                  this.dropdownContent = this._createEl("div", {
                    "class": "iti__dropdown-content iti__hide ".concat(extraClasses)
                  });
                  if (countrySearch) {
                    this.searchInput = this._createEl("input", {
                      type: "text",
                      "class": "iti__search-input",
                      placeholder: this.options.i18n.searchPlaceholder || "Search"
                    }, this.dropdownContent);
                  }
                  this.countryList = this._createEl("ul", {
                    "class": "iti__country-list",
                    id: "iti-".concat(this.id, "__country-listbox"),
                    role: "listbox",
                    "aria-label": this.options.i18n.countryListAriaLabel || "List of countries"
                  }, this.dropdownContent);
                  if (this.preferredCountries.length && !countrySearch) {
                    this._appendListItems(this.preferredCountries, "iti__preferred", true);
                    this._createEl("li", {
                      "class": "iti__divider",
                      "aria-hidden": "true"
                    }, this.countryList);
                  }
                  this._appendListItems(this.countries, "iti__standard");
                  if (dropdownContainer) {
                    var dropdownClasses = "iti iti--container";
                    if (useFullscreenPopup) {
                      dropdownClasses += " iti--fullscreen-popup";
                    } else {
                      dropdownClasses += " iti--inline-dropdown";
                    }
                    if (countrySearch) {
                      dropdownClasses += " iti--country-search";
                    }
                    this.dropdown = this._createEl("div", {
                      "class": dropdownClasses
                    });
                    this.dropdown.appendChild(this.dropdownContent);
                  } else {
                    this.flagsContainer.appendChild(this.dropdownContent);
                  }
                }
                if (hiddenInput) {
                  var telInputName = this.telInput.getAttribute("name");
                  var hiddenInputName = hiddenInput(telInputName);
                  this.hiddenInput = this._createEl("input", {
                    type: "hidden",
                    name: hiddenInputName
                  });
                  wrapper.appendChild(this.hiddenInput);
                }
              }
            }, {
              key: "_appendListItems",
              value: function _appendListItems(countries, className, preferred) {
                for (var i3 = 0; i3 < countries.length; i3++) {
                  var c2 = countries[i3];
                  var idSuffix = preferred ? "-preferred" : "";
                  var listItem = this._createEl("li", {
                    id: "iti-".concat(this.id, "__item-").concat(c2.iso2).concat(idSuffix),
                    "class": "iti__country ".concat(className),
                    tabindex: "-1",
                    role: "option",
                    "data-dial-code": c2.dialCode,
                    "data-country-code": c2.iso2,
                    "aria-selected": "false"
                  }, this.countryList);
                  c2.nodeById[this.id] = listItem;
                  var content = "";
                  if (this.options.showFlags) {
                    content += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c2.iso2, "'></div></div>");
                  }
                  content += "<span class='iti__country-name'>".concat(c2.name, "</span>");
                  content += "<span class='iti__dial-code'>+".concat(c2.dialCode, "</span>");
                  listItem.insertAdjacentHTML("beforeend", content);
                }
              }
            }, {
              key: "_setInitialState",
              value: function _setInitialState() {
                var attributeValue = this.telInput.getAttribute("value");
                var inputValue = this.telInput.value;
                var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                var val = useAttribute ? attributeValue : inputValue;
                var dialCode = this._getDialCode(val);
                var isRegionlessNanp = this._isRegionlessNanp(val);
                var _this$options2 = this.options, initialCountry = _this$options2.initialCountry, autoInsertDialCode = _this$options2.autoInsertDialCode;
                if (dialCode && !isRegionlessNanp) {
                  this._updateFlagFromNumber(val);
                } else if (initialCountry !== "auto") {
                  var isValidInitialCountry = initialCountry && this._getCountryData(initialCountry, false, true);
                  if (isValidInitialCountry) {
                    this._setFlag(initialCountry.toLowerCase());
                  } else {
                    if (dialCode && isRegionlessNanp) {
                      this._setFlag("us");
                    } else {
                      this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                      if (!val) {
                        this._setFlag(this.defaultCountry);
                      }
                    }
                  }
                  if (!val && autoInsertDialCode) {
                    this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                  }
                }
                if (val) {
                  this._updateValFromNumber(val);
                }
              }
            }, {
              key: "_initListeners",
              value: function _initListeners() {
                this._initKeyListeners();
                if (this.options.autoInsertDialCode) {
                  this._initBlurListeners();
                }
                if (this.options.allowDropdown) {
                  this._initDropdownListeners();
                }
                if (this.hiddenInput) {
                  this._initHiddenInputListener();
                }
              }
            }, {
              key: "_initHiddenInputListener",
              value: function _initHiddenInputListener() {
                var _this2 = this;
                this._handleHiddenInputSubmit = function() {
                  _this2.hiddenInput.value = _this2.getNumber();
                };
                if (this.telInput.form) {
                  this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                }
              }
            }, {
              key: "_initDropdownListeners",
              value: function _initDropdownListeners() {
                var _this3 = this;
                this._handleLabelClick = function(e2) {
                  if (_this3.dropdownContent.classList.contains("iti__hide")) {
                    _this3.telInput.focus();
                  } else {
                    e2.preventDefault();
                  }
                };
                var label = this.telInput.closest("label");
                if (label) {
                  label.addEventListener("click", this._handleLabelClick);
                }
                this._handleClickSelectedFlag = function() {
                  if (_this3.dropdownContent.classList.contains("iti__hide") && !_this3.telInput.disabled && !_this3.telInput.readOnly) {
                    _this3._showDropdown();
                  }
                };
                this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                this._handleFlagsContainerKeydown = function(e2) {
                  var isDropdownHidden = _this3.dropdownContent.classList.contains("iti__hide");
                  if (isDropdownHidden && ["ArrowUp", "ArrowDown", " ", "Enter"].includes(e2.key)) {
                    e2.preventDefault();
                    e2.stopPropagation();
                    _this3._showDropdown();
                  }
                  if (e2.key === "Tab") {
                    _this3._closeDropdown();
                  }
                };
                this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
              }
            }, {
              key: "_initRequests",
              value: function _initRequests() {
                var _this4 = this;
                if (this.options.utilsScript && !window.intlTelInputUtils) {
                  if (window.intlTelInputGlobals.documentReady()) {
                    window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
                  } else {
                    window.addEventListener("load", function() {
                      window.intlTelInputGlobals.loadUtils(_this4.options.utilsScript);
                    });
                  }
                } else {
                  this.resolveUtilsScriptPromise();
                }
                if (this.options.initialCountry === "auto") {
                  this._loadAutoCountry();
                } else {
                  this.resolveAutoCountryPromise();
                }
              }
            }, {
              key: "_loadAutoCountry",
              value: function _loadAutoCountry() {
                if (window.intlTelInputGlobals.autoCountry) {
                  this.handleAutoCountry();
                } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                  window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                  if (typeof this.options.geoIpLookup === "function") {
                    this.options.geoIpLookup(function(countryCode) {
                      window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                      setTimeout(function() {
                        return forEachInstance("handleAutoCountry");
                      });
                    }, function() {
                      return forEachInstance("rejectAutoCountryPromise");
                    });
                  }
                }
              }
            }, {
              key: "_initKeyListeners",
              value: function _initKeyListeners() {
                var _this5 = this;
                var userOverrideFormatting = false;
                this._handleKeyEvent = function(e2) {
                  if (_this5._updateFlagFromNumber(_this5.telInput.value)) {
                    _this5._triggerCountryChange();
                  }
                  if (e2 && e2.data && /[^+0-9]/.test(e2.data)) {
                    userOverrideFormatting = true;
                  } else if (!/[^+0-9]/.test(_this5.telInput.value)) {
                    userOverrideFormatting = false;
                  }
                  if (_this5.options.formatAsYouType && !userOverrideFormatting) {
                    var currentCaretPos = _this5.telInput.selectionStart;
                    var valueBeforeCaret = _this5.telInput.value.substring(0, currentCaretPos);
                    var relevantCharsBeforeCaret = valueBeforeCaret.replace(/[^+0-9]/g, "").length;
                    var isDeleteForwards = e2 && e2.inputType === "deleteContentForward";
                    var formattedValue = _this5._formatNumberAsYouType();
                    var newCaretPos = _this5._translateCursorPosition(relevantCharsBeforeCaret, formattedValue, currentCaretPos, isDeleteForwards);
                    _this5.telInput.value = formattedValue;
                    _this5.telInput.setSelectionRange(newCaretPos, newCaretPos);
                  }
                };
                this.telInput.addEventListener("input", this._handleKeyEvent);
                this._handleClipboardEvent = function() {
                  setTimeout(_this5._handleKeyEvent);
                };
                this.telInput.addEventListener("cut", this._handleClipboardEvent);
                this.telInput.addEventListener("paste", this._handleClipboardEvent);
              }
            }, {
              key: "_translateCursorPosition",
              value: function _translateCursorPosition(relevantChars, formattedValue, prevCaretPos, isDeleteForwards) {
                if (prevCaretPos === 0 && !isDeleteForwards) {
                  return 0;
                }
                var count = 0;
                for (var i3 = 0; i3 < formattedValue.length; i3++) {
                  if (/[+0-9]/.test(formattedValue[i3])) {
                    count++;
                  }
                  if (count === relevantChars && !isDeleteForwards) {
                    return i3 + 1;
                  }
                  if (isDeleteForwards && count === relevantChars + 1) {
                    return i3;
                  }
                }
                return formattedValue.length;
              }
            }, {
              key: "_cap",
              value: function _cap(number) {
                var max2 = this.telInput.getAttribute("maxlength");
                return max2 && number.length > max2 ? number.substr(0, max2) : number;
              }
            }, {
              key: "_initBlurListeners",
              value: function _initBlurListeners() {
                var _this6 = this;
                this._handleSubmitOrBlurEvent = function() {
                  _this6._removeEmptyDialCode();
                };
                if (this.telInput.form) {
                  this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                }
                this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
              }
            }, {
              key: "_removeEmptyDialCode",
              value: function _removeEmptyDialCode() {
                if (this.telInput.value.charAt(0) === "+") {
                  var numeric = this._getNumeric(this.telInput.value);
                  if (!numeric || this.selectedCountryData.dialCode === numeric) {
                    this.telInput.value = "";
                  }
                }
              }
            }, {
              key: "_getNumeric",
              value: function _getNumeric(s2) {
                return s2.replace(/\D/g, "");
              }
            }, {
              key: "_trigger",
              value: function _trigger(name) {
                var e2 = new Event(name, {
                  bubbles: true,
                  cancelable: true
                });
                this.telInput.dispatchEvent(e2);
              }
            }, {
              key: "_showDropdown",
              value: function _showDropdown() {
                if (this.options.fixDropdownWidth) {
                  this.dropdownContent.style.width = "".concat(this.telInput.offsetWidth, "px");
                }
                this.dropdownContent.classList.remove("iti__hide");
                this.selectedFlag.setAttribute("aria-expanded", "true");
                this._setDropdownPosition();
                if (this.options.countrySearch) {
                  var firstElementChild = this.countryList.firstElementChild;
                  if (firstElementChild) {
                    this._highlightListItem(firstElementChild, false);
                  }
                  this.searchInput.focus();
                } else if (this.activeItem) {
                  this._highlightListItem(this.activeItem, false);
                  this._scrollTo(this.activeItem, true);
                }
                this._bindDropdownListeners();
                this.dropdownArrow.classList.add("iti__arrow--up");
                this._trigger("open:countrydropdown");
              }
            }, {
              key: "_toggleClass",
              value: function _toggleClass(el, className, shouldHaveClass) {
                if (shouldHaveClass && !el.classList.contains(className)) {
                  el.classList.add(className);
                } else if (!shouldHaveClass && el.classList.contains(className)) {
                  el.classList.remove(className);
                }
              }
            }, {
              key: "_setDropdownPosition",
              value: function _setDropdownPosition() {
                var _this7 = this;
                if (this.options.dropdownContainer) {
                  this.options.dropdownContainer.appendChild(this.dropdown);
                }
                if (!this.options.useFullscreenPopup) {
                  var pos = this.telInput.getBoundingClientRect();
                  var windowTop = document.documentElement.scrollTop;
                  var inputTop = pos.top + windowTop;
                  var dropdownHeight = this.dropdownContent.offsetHeight;
                  var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                  var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                  var positionDropdownAboveInput = !this.options.countrySearch && !dropdownFitsBelow && dropdownFitsAbove;
                  this._toggleClass(this.dropdownContent, "iti__dropdown-content--dropup", positionDropdownAboveInput);
                  if (this.options.dropdownContainer) {
                    var extraTop = positionDropdownAboveInput ? 0 : this.telInput.offsetHeight;
                    this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                    this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                    this._handleWindowScroll = function() {
                      return _this7._closeDropdown();
                    };
                    window.addEventListener("scroll", this._handleWindowScroll);
                  }
                }
              }
            }, {
              key: "_bindDropdownListeners",
              value: function _bindDropdownListeners() {
                var _this8 = this;
                this._handleMouseoverCountryList = function(e2) {
                  var listItem = e2.target.closest(".iti__country");
                  if (listItem) {
                    _this8._highlightListItem(listItem, false);
                  }
                };
                this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                this._handleClickCountryList = function(e2) {
                  var listItem = e2.target.closest(".iti__country");
                  if (listItem) {
                    _this8._selectListItem(listItem);
                  }
                };
                this.countryList.addEventListener("click", this._handleClickCountryList);
                var isOpening = true;
                this._handleClickOffToClose = function() {
                  if (!isOpening) {
                    _this8._closeDropdown();
                  }
                  isOpening = false;
                };
                document.documentElement.addEventListener("click", this._handleClickOffToClose);
                var query2 = "";
                var queryTimer = null;
                this._handleKeydownOnDropdown = function(e2) {
                  if (["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(e2.key)) {
                    e2.preventDefault();
                    e2.stopPropagation();
                    if (e2.key === "ArrowUp" || e2.key === "ArrowDown") {
                      _this8._handleUpDownKey(e2.key);
                    } else if (e2.key === "Enter") {
                      _this8._handleEnterKey();
                    } else if (e2.key === "Escape") {
                      _this8._closeDropdown();
                    }
                  }
                  if (!_this8.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e2.key)) {
                    e2.stopPropagation();
                    if (queryTimer) {
                      clearTimeout(queryTimer);
                    }
                    query2 += e2.key.toLowerCase();
                    _this8._searchForCountry(query2);
                    queryTimer = setTimeout(function() {
                      query2 = "";
                    }, 1e3);
                  }
                };
                document.addEventListener("keydown", this._handleKeydownOnDropdown);
                if (this.options.countrySearch) {
                  var doFilter = function doFilter2() {
                    var inputQuery = _this8.searchInput.value.trim();
                    if (inputQuery) {
                      _this8._filterCountries(inputQuery);
                    } else {
                      _this8._filterCountries("", true);
                    }
                  };
                  var keyupTimer = null;
                  this._handleSearchChange = function() {
                    if (keyupTimer) {
                      clearTimeout(keyupTimer);
                    }
                    keyupTimer = setTimeout(function() {
                      doFilter();
                      keyupTimer = null;
                    }, 100);
                  };
                  this.searchInput.addEventListener("input", this._handleSearchChange);
                  this.searchInput.addEventListener("click", function(e2) {
                    return e2.stopPropagation();
                  });
                }
              }
            }, {
              key: "_normaliseString",
              value: function _normaliseString() {
                var s2 = arguments.length > 0 && arguments[0] !== undefined2 ? arguments[0] : "";
                return s2.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
              }
            }, {
              key: "_filterCountries",
              value: function _filterCountries(query2) {
                var isReset = arguments.length > 1 && arguments[1] !== undefined2 ? arguments[1] : false;
                var isFirst = true;
                this.countryList.innerHTML = "";
                var normalisedQuery = this._normaliseString(query2);
                for (var i3 = 0; i3 < this.countries.length; i3++) {
                  var c2 = this.countries[i3];
                  var normalisedCountryName = this._normaliseString(c2.name);
                  var fullDialCode = "+".concat(c2.dialCode);
                  if (isReset || normalisedCountryName.includes(normalisedQuery) || fullDialCode.includes(normalisedQuery) || c2.iso2.includes(normalisedQuery)) {
                    this.countryList.appendChild(c2.nodeById[this.id]);
                    if (isFirst) {
                      this._highlightListItem(c2.nodeById[this.id], false);
                      isFirst = false;
                    }
                  }
                }
              }
            }, {
              key: "_handleUpDownKey",
              value: function _handleUpDownKey(key) {
                var next = key === "ArrowUp" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                if (next) {
                  if (next.classList.contains("iti__divider")) {
                    next = key === "ArrowUp" ? next.previousElementSibling : next.nextElementSibling;
                  }
                } else if (this.countryList.childElementCount > 1) {
                  next = key === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild;
                }
                if (next) {
                  var doFocus = !this.options.countrySearch;
                  this._highlightListItem(next, doFocus);
                  if (this.options.countrySearch) {
                    this._scrollTo(next, false);
                  }
                }
              }
            }, {
              key: "_handleEnterKey",
              value: function _handleEnterKey() {
                if (this.highlightedItem) {
                  this._selectListItem(this.highlightedItem);
                }
              }
            }, {
              key: "_searchForCountry",
              value: function _searchForCountry(query2) {
                for (var i3 = 0; i3 < this.countries.length; i3++) {
                  if (this._startsWith(this.countries[i3].name, query2)) {
                    var listItem = this.countries[i3].nodeById[this.id];
                    this._highlightListItem(listItem, false);
                    this._scrollTo(listItem, true);
                    break;
                  }
                }
              }
            }, {
              key: "_startsWith",
              value: function _startsWith(a, b) {
                return a.substr(0, b.length).toLowerCase() === b;
              }
            }, {
              key: "_updateValFromNumber",
              value: function _updateValFromNumber(fullNumber) {
                var number = fullNumber;
                if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                  var useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.showSelectedDialCode;
                  var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                  var format2 = useNational ? NATIONAL : INTERNATIONAL;
                  number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format2);
                }
                number = this._beforeSetNumber(number);
                this.telInput.value = number;
              }
            }, {
              key: "_updateFlagFromNumber",
              value: function _updateFlagFromNumber(fullNumber) {
                var plusIndex = fullNumber.indexOf("+");
                var number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
                var selectedDialCode = this.selectedCountryData.dialCode;
                var isNanp = selectedDialCode === "1";
                if (number && isNanp && number.charAt(0) !== "+") {
                  if (number.charAt(0) !== "1") {
                    number = "1".concat(number);
                  }
                  number = "+".concat(number);
                }
                if (this.options.showSelectedDialCode && selectedDialCode && number.charAt(0) !== "+") {
                  number = "+".concat(selectedDialCode).concat(number);
                }
                var dialCode = this._getDialCode(number, true);
                var numeric = this._getNumeric(number);
                var countryCode = null;
                if (dialCode) {
                  var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                  var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
                  var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric);
                  if (!isRegionlessNanpNumber && !alreadySelected) {
                    for (var j = 0; j < countryCodes.length; j++) {
                      if (countryCodes[j]) {
                        countryCode = countryCodes[j];
                        break;
                      }
                    }
                  }
                } else if (number.charAt(0) === "+" && numeric.length) {
                  countryCode = "";
                } else if (!number || number === "+") {
                  countryCode = this.defaultCountry;
                }
                if (countryCode !== null) {
                  return this._setFlag(countryCode);
                }
                return false;
              }
            }, {
              key: "_isRegionlessNanp",
              value: function _isRegionlessNanp(number) {
                var numeric = this._getNumeric(number);
                if (numeric.charAt(0) === "1") {
                  var areaCode = numeric.substr(1, 3);
                  return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                }
                return false;
              }
            }, {
              key: "_highlightListItem",
              value: function _highlightListItem(listItem, shouldFocus) {
                var prevItem = this.highlightedItem;
                if (prevItem) {
                  prevItem.classList.remove("iti__highlight");
                }
                this.highlightedItem = listItem;
                this.highlightedItem.classList.add("iti__highlight");
                this.selectedFlag.setAttribute("aria-activedescendant", listItem.getAttribute("id"));
                if (shouldFocus) {
                  this.highlightedItem.focus();
                }
              }
            }, {
              key: "_getCountryData",
              value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                for (var i3 = 0; i3 < countryList.length; i3++) {
                  if (countryList[i3].iso2 === countryCode) {
                    return countryList[i3];
                  }
                }
                if (allowFail) {
                  return null;
                }
                throw new Error("No country data for '".concat(countryCode, "'"));
              }
            }, {
              key: "_setFlag",
              value: function _setFlag(countryCode) {
                var _this$options3 = this.options, allowDropdown = _this$options3.allowDropdown, showSelectedDialCode = _this$options3.showSelectedDialCode, showFlags = _this$options3.showFlags, countrySearch = _this$options3.countrySearch;
                var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                if (this.selectedCountryData.iso2) {
                  this.defaultCountry = this.selectedCountryData.iso2;
                }
                if (showFlags) {
                  this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
                }
                this._setSelectedCountryFlagTitleAttribute(countryCode, showSelectedDialCode);
                if (showSelectedDialCode) {
                  var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                  this.selectedDialCode.innerHTML = dialCode;
                  var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                  if (this.isRTL) {
                    this.telInput.style.paddingRight = "".concat(selectedFlagWidth + 6, "px");
                  } else {
                    this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
                  }
                }
                this._updatePlaceholder();
                if (allowDropdown && !countrySearch) {
                  var prevItem = this.activeItem;
                  if (prevItem) {
                    prevItem.classList.remove("iti__active");
                    prevItem.setAttribute("aria-selected", "false");
                  }
                  if (countryCode) {
                    var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                    nextItem.setAttribute("aria-selected", "true");
                    nextItem.classList.add("iti__active");
                    this.activeItem = nextItem;
                  }
                }
                return prevCountry.iso2 !== countryCode;
              }
            }, {
              key: "_setSelectedCountryFlagTitleAttribute",
              value: function _setSelectedCountryFlagTitleAttribute(countryCode, showSelectedDialCode) {
                if (!this.selectedFlag) {
                  return;
                }
                var title;
                if (countryCode && !showSelectedDialCode) {
                  title = "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode);
                } else if (countryCode) {
                  title = this.selectedCountryData.name;
                } else {
                  title = "Unknown";
                }
                this.selectedFlag.setAttribute("title", title);
              }
            }, {
              key: "_getHiddenSelectedFlagWidth",
              value: function _getHiddenSelectedFlagWidth() {
                var containerClone = this.telInput.parentNode.cloneNode();
                containerClone.style.visibility = "hidden";
                document.body.appendChild(containerClone);
                var flagsContainerClone = this.flagsContainer.cloneNode();
                containerClone.appendChild(flagsContainerClone);
                var selectedFlagClone = this.selectedFlag.cloneNode(true);
                flagsContainerClone.appendChild(selectedFlagClone);
                var width = selectedFlagClone.offsetWidth;
                containerClone.parentNode.removeChild(containerClone);
                return width;
              }
            }, {
              key: "_updatePlaceholder",
              value: function _updatePlaceholder() {
                var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                if (window.intlTelInputUtils && shouldSetPlaceholder) {
                  var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                  var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                  placeholder = this._beforeSetNumber(placeholder);
                  if (typeof this.options.customPlaceholder === "function") {
                    placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                  }
                  this.telInput.setAttribute("placeholder", placeholder);
                }
              }
            }, {
              key: "_selectListItem",
              value: function _selectListItem(listItem) {
                var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                this._closeDropdown();
                this._updateDialCode(listItem.getAttribute("data-dial-code"));
                this.telInput.focus();
                if (flagChanged) {
                  this._triggerCountryChange();
                }
              }
            }, {
              key: "_closeDropdown",
              value: function _closeDropdown() {
                this.dropdownContent.classList.add("iti__hide");
                this.selectedFlag.setAttribute("aria-expanded", "false");
                this.selectedFlag.removeAttribute("aria-activedescendant");
                this.dropdownArrow.classList.remove("iti__arrow--up");
                document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                if (this.options.countrySearch) {
                  this.searchInput.removeEventListener("input", this._handleSearchChange);
                }
                document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                this.countryList.removeEventListener("click", this._handleClickCountryList);
                if (this.options.dropdownContainer) {
                  if (!this.options.useFullscreenPopup) {
                    window.removeEventListener("scroll", this._handleWindowScroll);
                  }
                  if (this.dropdown.parentNode) {
                    this.dropdown.parentNode.removeChild(this.dropdown);
                  }
                }
                this._trigger("close:countrydropdown");
              }
            }, {
              key: "_scrollTo",
              value: function _scrollTo(element, middle) {
                var container = this.countryList;
                var windowTop = document.documentElement.scrollTop;
                var containerHeight = container.offsetHeight;
                var containerTop = container.getBoundingClientRect().top + windowTop;
                var containerBottom = containerTop + containerHeight;
                var elementHeight = element.offsetHeight;
                var elementTop = element.getBoundingClientRect().top + windowTop;
                var elementBottom = elementTop + elementHeight;
                var newScrollTop = elementTop - containerTop + container.scrollTop;
                var middleOffset = containerHeight / 2 - elementHeight / 2;
                if (elementTop < containerTop) {
                  if (middle) {
                    newScrollTop -= middleOffset;
                  }
                  container.scrollTop = newScrollTop;
                } else if (elementBottom > containerBottom) {
                  if (middle) {
                    newScrollTop += middleOffset;
                  }
                  var heightDifference = containerHeight - elementHeight;
                  container.scrollTop = newScrollTop - heightDifference;
                }
              }
            }, {
              key: "_updateDialCode",
              value: function _updateDialCode(newDialCodeBare) {
                var inputVal = this.telInput.value;
                var newDialCode = "+".concat(newDialCodeBare);
                var newNumber;
                if (inputVal.charAt(0) === "+") {
                  var prevDialCode = this._getDialCode(inputVal);
                  if (prevDialCode) {
                    newNumber = inputVal.replace(prevDialCode, newDialCode);
                  } else {
                    newNumber = newDialCode;
                  }
                  this.telInput.value = newNumber;
                } else if (this.options.autoInsertDialCode) {
                  if (inputVal) {
                    newNumber = newDialCode + inputVal;
                  } else {
                    newNumber = newDialCode;
                  }
                  this.telInput.value = newNumber;
                }
              }
            }, {
              key: "_getDialCode",
              value: function _getDialCode(number, includeAreaCode) {
                var dialCode = "";
                if (number.charAt(0) === "+") {
                  var numericChars = "";
                  for (var i3 = 0; i3 < number.length; i3++) {
                    var c2 = number.charAt(i3);
                    if (!isNaN(parseInt(c2, 10))) {
                      numericChars += c2;
                      if (includeAreaCode) {
                        if (this.countryCodes[numericChars]) {
                          dialCode = number.substr(0, i3 + 1);
                        }
                      } else {
                        if (this.dialCodes[numericChars]) {
                          dialCode = number.substr(0, i3 + 1);
                          break;
                        }
                      }
                      if (numericChars.length === this.countryCodeMaxLen) {
                        break;
                      }
                    }
                  }
                }
                return dialCode;
              }
            }, {
              key: "_getFullNumber",
              value: function _getFullNumber() {
                var val = this.telInput.value.trim();
                var dialCode = this.selectedCountryData.dialCode;
                var prefix2;
                var numericVal = this._getNumeric(val);
                if (this.options.showSelectedDialCode && !this.options.nationalMode && val.charAt(0) !== "+" && dialCode && numericVal) {
                  prefix2 = "+".concat(dialCode);
                } else {
                  prefix2 = "";
                }
                return prefix2 + val;
              }
            }, {
              key: "_beforeSetNumber",
              value: function _beforeSetNumber(fullNumber) {
                var number = fullNumber;
                if (this.options.showSelectedDialCode) {
                  var dialCode = this._getDialCode(number);
                  if (dialCode) {
                    dialCode = "+".concat(this.selectedCountryData.dialCode);
                    var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                    number = number.substr(start);
                  }
                }
                return this._cap(number);
              }
            }, {
              key: "_triggerCountryChange",
              value: function _triggerCountryChange() {
                this._trigger("countrychange");
              }
            }, {
              key: "_formatNumberAsYouType",
              value: function _formatNumberAsYouType() {
                var val = this._getFullNumber();
                var result = window.intlTelInputUtils ? intlTelInputUtils.formatNumberAsYouType(val, this.selectedCountryData.iso2) : val;
                var dialCode = this.selectedCountryData.dialCode;
                if (this.options.showSelectedDialCode && !this.options.nationalMode && this.telInput.value.charAt(0) !== "+" && result.includes("+".concat(dialCode))) {
                  var afterDialCode = result.split("+".concat(dialCode))[1] || "";
                  return afterDialCode.trim();
                }
                return result;
              }
            }, {
              key: "handleAutoCountry",
              value: function handleAutoCountry() {
                if (this.options.initialCountry === "auto") {
                  this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                  if (!this.telInput.value) {
                    this.setCountry(this.defaultCountry);
                  }
                  this.resolveAutoCountryPromise();
                }
              }
            }, {
              key: "handleUtils",
              value: function handleUtils() {
                if (window.intlTelInputUtils) {
                  if (this.telInput.value) {
                    this._updateValFromNumber(this.telInput.value);
                  }
                  this._updatePlaceholder();
                }
                this.resolveUtilsScriptPromise();
              }
            }, {
              key: "destroy",
              value: function destroy() {
                var form = this.telInput.form;
                if (this.options.allowDropdown) {
                  this._closeDropdown();
                  this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                  this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                  var label = this.telInput.closest("label");
                  if (label) {
                    label.removeEventListener("click", this._handleLabelClick);
                  }
                }
                if (this.hiddenInput && form) {
                  form.removeEventListener("submit", this._handleHiddenInputSubmit);
                }
                if (this.options.autoInsertDialCode) {
                  if (form) {
                    form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                  }
                  this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                }
                this.telInput.removeEventListener("input", this._handleKeyEvent);
                this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                this.telInput.removeAttribute("data-intl-tel-input-id");
                var wrapper = this.telInput.parentNode;
                wrapper.parentNode.insertBefore(this.telInput, wrapper);
                wrapper.parentNode.removeChild(wrapper);
                delete window.intlTelInputGlobals.instances[this.id];
              }
            }, {
              key: "getExtension",
              value: function getExtension() {
                if (window.intlTelInputUtils) {
                  return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                }
                return "";
              }
            }, {
              key: "getNumber",
              value: function getNumber(format2) {
                if (window.intlTelInputUtils) {
                  var iso2 = this.selectedCountryData.iso2;
                  return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format2);
                }
                return "";
              }
            }, {
              key: "getNumberType",
              value: function getNumberType() {
                if (window.intlTelInputUtils) {
                  return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                }
                return -99;
              }
            }, {
              key: "getSelectedCountryData",
              value: function getSelectedCountryData() {
                return this.selectedCountryData;
              }
            }, {
              key: "getValidationError",
              value: function getValidationError() {
                if (window.intlTelInputUtils) {
                  var iso2 = this.selectedCountryData.iso2;
                  return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                }
                return -99;
              }
            }, {
              key: "isValidNumber",
              value: function isValidNumber() {
                var val = this._getFullNumber();
                return window.intlTelInputUtils ? intlTelInputUtils.isPossibleNumber(val, this.selectedCountryData.iso2) : null;
              }
            }, {
              key: "isValidNumberPrecise",
              value: function isValidNumberPrecise() {
                var val = this._getFullNumber();
                return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, this.selectedCountryData.iso2) : null;
              }
            }, {
              key: "setCountry",
              value: function setCountry(originalCountryCode) {
                var countryCode = originalCountryCode.toLowerCase();
                if (this.selectedCountryData.iso2 !== countryCode) {
                  this._setFlag(countryCode);
                  this._updateDialCode(this.selectedCountryData.dialCode);
                  this._triggerCountryChange();
                }
              }
            }, {
              key: "setNumber",
              value: function setNumber(number) {
                var flagChanged = this._updateFlagFromNumber(number);
                this._updateValFromNumber(number);
                if (flagChanged) {
                  this._triggerCountryChange();
                }
              }
            }, {
              key: "setPlaceholderNumberType",
              value: function setPlaceholderNumberType(type) {
                this.options.placeholderNumberType = type;
                this._updatePlaceholder();
              }
            }]);
            return Iti2;
          }();
          intlTelInputGlobals.getCountryData = function() {
            return allCountries;
          };
          var injectScript = function injectScript2(path, handleSuccess, handleFailure) {
            var script = document.createElement("script");
            script.onload = function() {
              forEachInstance("handleUtils");
              if (handleSuccess) {
                handleSuccess();
              }
            };
            script.onerror = function() {
              forEachInstance("rejectUtilsScriptPromise");
              if (handleFailure) {
                handleFailure();
              }
            };
            script.className = "iti-load-utils";
            script.async = true;
            script.src = path;
            document.body.appendChild(script);
          };
          intlTelInputGlobals.loadUtils = function(path) {
            if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
              window.intlTelInputGlobals.startedLoadingUtilsScript = true;
              if (typeof Promise !== "undefined") {
                return new Promise(function(resolve, reject) {
                  return injectScript(path, resolve, reject);
                });
              }
              injectScript(path);
            }
            return null;
          };
          intlTelInputGlobals.defaults = defaults;
          intlTelInputGlobals.version = "19.2.15";
          return function(input, options) {
            var iti = new Iti(input, options);
            iti._init();
            input.setAttribute("data-intl-tel-input-id", iti.id);
            window.intlTelInputGlobals.instances[iti.id] = iti;
            return iti;
          };
        }();
      });
    }
  });

  // ../../node_modules/.pnpm/intl-tel-input@19.2.15/node_modules/intl-tel-input/index.js
  var require_intl_tel_input = __commonJS({
    "../../node_modules/.pnpm/intl-tel-input@19.2.15/node_modules/intl-tel-input/index.js"(exports, module) {
      init_live_reload();
      module.exports = require_intlTelInput();
    }
  });

  // src/pages/singleApartment.ts
  init_live_reload();

  // src/utils/Apartments.ts
  init_live_reload();

  // ../../node_modules/.pnpm/@splidejs+splide@https+++codeload.github.com+splidejs+splide+tar.gz+d7e1f08e6b4f4b02a7c6ccbfbeb2d569d85715e6/node_modules/@splidejs/splide/dist/js/splide.esm.js
  init_live_reload();
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  var MEDIA_PREFERS_REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
  var CREATED = 1;
  var MOUNTED = 2;
  var IDLE = 3;
  var MOVING = 4;
  var SCROLLING = 5;
  var DRAGGING = 6;
  var DESTROYED = 7;
  var STATES = {
    CREATED,
    MOUNTED,
    IDLE,
    MOVING,
    SCROLLING,
    DRAGGING,
    DESTROYED
  };
  function empty(array) {
    array.length = 0;
  }
  function slice(arrayLike, start, end) {
    return Array.prototype.slice.call(arrayLike, start, end);
  }
  function apply(func) {
    return func.bind.apply(func, [null].concat(slice(arguments, 1)));
  }
  var nextTick = setTimeout;
  var noop = function noop2() {
  };
  function raf(func) {
    return requestAnimationFrame(func);
  }
  function typeOf(type, subject) {
    return typeof subject === type;
  }
  function isObject(subject) {
    return !isNull(subject) && typeOf("object", subject);
  }
  var isArray = Array.isArray;
  var isFunction = apply(typeOf, "function");
  var isString = apply(typeOf, "string");
  var isUndefined = apply(typeOf, "undefined");
  function isNull(subject) {
    return subject === null;
  }
  function isHTMLElement(subject) {
    try {
      return subject instanceof (subject.ownerDocument.defaultView || window).HTMLElement;
    } catch (e2) {
      return false;
    }
  }
  function toArray(value) {
    return isArray(value) ? value : [value];
  }
  function forEach(values, iteratee) {
    toArray(values).forEach(iteratee);
  }
  function includes(array, value) {
    return array.indexOf(value) > -1;
  }
  function push(array, items) {
    array.push.apply(array, toArray(items));
    return array;
  }
  function toggleClass(elm, classes, add) {
    if (elm) {
      forEach(classes, function(name) {
        if (name) {
          elm.classList[add ? "add" : "remove"](name);
        }
      });
    }
  }
  function addClass(elm, classes) {
    toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
  }
  function append(parent, children2) {
    forEach(children2, parent.appendChild.bind(parent));
  }
  function before(nodes, ref) {
    forEach(nodes, function(node) {
      var parent = (ref || node).parentNode;
      if (parent) {
        parent.insertBefore(node, ref);
      }
    });
  }
  function matches(elm, selector) {
    return isHTMLElement(elm) && (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
  }
  function children(parent, selector) {
    var children2 = parent ? slice(parent.children) : [];
    return selector ? children2.filter(function(child2) {
      return matches(child2, selector);
    }) : children2;
  }
  function child(parent, selector) {
    return selector ? children(parent, selector)[0] : parent.firstElementChild;
  }
  var ownKeys = Object.keys;
  function forOwn(object, iteratee, right) {
    if (object) {
      (right ? ownKeys(object).reverse() : ownKeys(object)).forEach(function(key) {
        key !== "__proto__" && iteratee(object[key], key);
      });
    }
    return object;
  }
  function assign(object) {
    slice(arguments, 1).forEach(function(source) {
      forOwn(source, function(value, key) {
        object[key] = source[key];
      });
    });
    return object;
  }
  function merge(object) {
    slice(arguments, 1).forEach(function(source) {
      forOwn(source, function(value, key) {
        if (isArray(value)) {
          object[key] = value.slice();
        } else if (isObject(value)) {
          object[key] = merge({}, isObject(object[key]) ? object[key] : {}, value);
        } else {
          object[key] = value;
        }
      });
    });
    return object;
  }
  function omit(object, keys) {
    forEach(keys || ownKeys(object), function(key) {
      delete object[key];
    });
  }
  function removeAttribute(elms, attrs) {
    forEach(elms, function(elm) {
      forEach(attrs, function(attr) {
        elm && elm.removeAttribute(attr);
      });
    });
  }
  function setAttribute(elms, attrs, value) {
    if (isObject(attrs)) {
      forOwn(attrs, function(value2, name) {
        setAttribute(elms, name, value2);
      });
    } else {
      forEach(elms, function(elm) {
        isNull(value) || value === "" ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
      });
    }
  }
  function create(tag, attrs, parent) {
    var elm = document.createElement(tag);
    if (attrs) {
      isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
    }
    parent && append(parent, elm);
    return elm;
  }
  function style(elm, prop, value) {
    if (isUndefined(value)) {
      return getComputedStyle(elm)[prop];
    }
    if (!isNull(value)) {
      elm.style[prop] = "" + value;
    }
  }
  function display(elm, display2) {
    style(elm, "display", display2);
  }
  function focus(elm) {
    elm["setActive"] && elm["setActive"]() || elm.focus({
      preventScroll: true
    });
  }
  function getAttribute(elm, attr) {
    return elm.getAttribute(attr);
  }
  function hasClass(elm, className) {
    return elm && elm.classList.contains(className);
  }
  function rect(target) {
    return target.getBoundingClientRect();
  }
  function remove(nodes) {
    forEach(nodes, function(node) {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    });
  }
  function parseHtml(html) {
    return child(new DOMParser().parseFromString(html, "text/html").body);
  }
  function prevent(e2, stopPropagation) {
    e2.preventDefault();
    if (stopPropagation) {
      e2.stopPropagation();
      e2.stopImmediatePropagation();
    }
  }
  function query(parent, selector) {
    return parent && parent.querySelector(selector);
  }
  function queryAll(parent, selector) {
    return selector ? slice(parent.querySelectorAll(selector)) : [];
  }
  function removeClass(elm, classes) {
    toggleClass(elm, classes, false);
  }
  function timeOf(e2) {
    return e2.timeStamp;
  }
  function unit(value) {
    return isString(value) ? value : value ? value + "px" : "";
  }
  var PROJECT_CODE = "splide";
  var DATA_ATTRIBUTE = "data-" + PROJECT_CODE;
  function assert(condition, message) {
    if (!condition) {
      throw new Error("[" + PROJECT_CODE + "] " + (message || ""));
    }
  }
  var min = Math.min;
  var max = Math.max;
  var floor = Math.floor;
  var ceil = Math.ceil;
  var abs = Math.abs;
  function approximatelyEqual(x, y, epsilon) {
    return abs(x - y) < epsilon;
  }
  function between(number, x, y, exclusive) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
  }
  function clamp(number, x, y) {
    var minimum = min(x, y);
    var maximum = max(x, y);
    return min(max(minimum, number), maximum);
  }
  function sign(x) {
    return +(x > 0) - +(x < 0);
  }
  function format(string, replacements) {
    forEach(replacements, function(replacement) {
      string = string.replace("%s", "" + replacement);
    });
    return string;
  }
  function pad(number) {
    return number < 10 ? "0" + number : "" + number;
  }
  var ids = {};
  function uniqueId(prefix2) {
    return "" + prefix2 + pad(ids[prefix2] = (ids[prefix2] || 0) + 1);
  }
  function EventBinder() {
    var listeners = [];
    function bind(targets, events, callback, options) {
      forEachEvent(targets, events, function(target, event, namespace) {
        var isEventTarget = "addEventListener" in target;
        var remover = isEventTarget ? target.removeEventListener.bind(target, event, callback, options) : target["removeListener"].bind(target, callback);
        isEventTarget ? target.addEventListener(event, callback, options) : target["addListener"](callback);
        listeners.push([target, event, namespace, callback, remover]);
      });
    }
    function unbind(targets, events, callback) {
      forEachEvent(targets, events, function(target, event, namespace) {
        listeners = listeners.filter(function(listener) {
          if (listener[0] === target && listener[1] === event && listener[2] === namespace && (!callback || listener[3] === callback)) {
            listener[4]();
            return false;
          }
          return true;
        });
      });
    }
    function dispatch(target, type, detail) {
      var e2;
      var bubbles = true;
      if (typeof CustomEvent === "function") {
        e2 = new CustomEvent(type, {
          bubbles,
          detail
        });
      } else {
        e2 = document.createEvent("CustomEvent");
        e2.initCustomEvent(type, bubbles, false, detail);
      }
      target.dispatchEvent(e2);
      return e2;
    }
    function forEachEvent(targets, events, iteratee) {
      forEach(targets, function(target) {
        target && forEach(events, function(events2) {
          events2.split(" ").forEach(function(eventNS) {
            var fragment = eventNS.split(".");
            iteratee(target, fragment[0], fragment[1]);
          });
        });
      });
    }
    function destroy() {
      listeners.forEach(function(data) {
        data[4]();
      });
      empty(listeners);
    }
    return {
      bind,
      unbind,
      dispatch,
      destroy
    };
  }
  var EVENT_MOUNTED = "mounted";
  var EVENT_READY = "ready";
  var EVENT_MOVE = "move";
  var EVENT_MOVED = "moved";
  var EVENT_CLICK = "click";
  var EVENT_ACTIVE = "active";
  var EVENT_INACTIVE = "inactive";
  var EVENT_VISIBLE = "visible";
  var EVENT_HIDDEN = "hidden";
  var EVENT_REFRESH = "refresh";
  var EVENT_UPDATED = "updated";
  var EVENT_RESIZE = "resize";
  var EVENT_RESIZED = "resized";
  var EVENT_DRAG = "drag";
  var EVENT_DRAGGING = "dragging";
  var EVENT_DRAGGED = "dragged";
  var EVENT_SCROLL = "scroll";
  var EVENT_SCROLLED = "scrolled";
  var EVENT_OVERFLOW = "overflow";
  var EVENT_DESTROY = "destroy";
  var EVENT_ARROWS_MOUNTED = "arrows:mounted";
  var EVENT_ARROWS_UPDATED = "arrows:updated";
  var EVENT_PAGINATION_MOUNTED = "pagination:mounted";
  var EVENT_PAGINATION_UPDATED = "pagination:updated";
  var EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
  var EVENT_AUTOPLAY_PLAY = "autoplay:play";
  var EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
  var EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
  var EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
  var EVENT_SLIDE_KEYDOWN = "sk";
  var EVENT_SHIFTED = "sh";
  var EVENT_END_INDEX_CHANGED = "ei";
  function EventInterface(Splide2) {
    var bus = Splide2 ? Splide2.event.bus : document.createDocumentFragment();
    var binder = EventBinder();
    function on(events, callback) {
      binder.bind(bus, toArray(events).join(" "), function(e2) {
        callback.apply(callback, isArray(e2.detail) ? e2.detail : []);
      });
    }
    function emit(event) {
      binder.dispatch(bus, event, slice(arguments, 1));
    }
    if (Splide2) {
      Splide2.event.on(EVENT_DESTROY, binder.destroy);
    }
    return assign(binder, {
      bus,
      on,
      off: apply(binder.unbind, bus),
      emit
    });
  }
  function RequestInterval(interval, onInterval, onUpdate, limit) {
    var now = Date.now;
    var startTime;
    var rate = 0;
    var id;
    var paused = true;
    var count = 0;
    function update() {
      if (!paused) {
        rate = interval ? min((now() - startTime) / interval, 1) : 1;
        onUpdate && onUpdate(rate);
        if (rate >= 1) {
          onInterval();
          startTime = now();
          if (limit && ++count >= limit) {
            return pause();
          }
        }
        id = raf(update);
      }
    }
    function start(resume) {
      resume || cancel();
      startTime = now() - (resume ? rate * interval : 0);
      paused = false;
      id = raf(update);
    }
    function pause() {
      paused = true;
    }
    function rewind() {
      startTime = now();
      rate = 0;
      if (onUpdate) {
        onUpdate(rate);
      }
    }
    function cancel() {
      id && cancelAnimationFrame(id);
      rate = 0;
      id = 0;
      paused = true;
    }
    function set(time) {
      interval = time;
    }
    function isPaused() {
      return paused;
    }
    return {
      start,
      rewind,
      pause,
      cancel,
      set,
      isPaused
    };
  }
  function State(initialState) {
    var state = initialState;
    function set(value) {
      state = value;
    }
    function is(states) {
      return includes(toArray(states), state);
    }
    return {
      set,
      is
    };
  }
  function Throttle(func, duration) {
    var interval = RequestInterval(duration || 0, func, null, 1);
    return function() {
      interval.isPaused() && interval.start();
    };
  }
  function Media(Splide2, Components2, options) {
    var state = Splide2.state;
    var breakpoints = options.breakpoints || {};
    var reducedMotion = options.reducedMotion || {};
    var binder = EventBinder();
    var queries = [];
    function setup() {
      var isMin = options.mediaQuery === "min";
      ownKeys(breakpoints).sort(function(n2, m) {
        return isMin ? +n2 - +m : +m - +n2;
      }).forEach(function(key) {
        register(breakpoints[key], "(" + (isMin ? "min" : "max") + "-width:" + key + "px)");
      });
      register(reducedMotion, MEDIA_PREFERS_REDUCED_MOTION);
      update();
    }
    function destroy(completely) {
      if (completely) {
        binder.destroy();
      }
    }
    function register(options2, query2) {
      var queryList = matchMedia(query2);
      binder.bind(queryList, "change", update);
      queries.push([options2, queryList]);
    }
    function update() {
      var destroyed = state.is(DESTROYED);
      var direction = options.direction;
      var merged = queries.reduce(function(merged2, entry) {
        return merge(merged2, entry[1].matches ? entry[0] : {});
      }, {});
      omit(options);
      set(merged);
      if (options.destroy) {
        Splide2.destroy(options.destroy === "completely");
      } else if (destroyed) {
        destroy(true);
        Splide2.mount();
      } else {
        direction !== options.direction && Splide2.refresh();
      }
    }
    function reduce(enable) {
      if (matchMedia(MEDIA_PREFERS_REDUCED_MOTION).matches) {
        enable ? merge(options, reducedMotion) : omit(options, ownKeys(reducedMotion));
      }
    }
    function set(opts, base, notify) {
      merge(options, opts);
      base && merge(Object.getPrototypeOf(options), opts);
      if (notify || !state.is(CREATED)) {
        Splide2.emit(EVENT_UPDATED, options);
      }
    }
    return {
      setup,
      destroy,
      reduce,
      set
    };
  }
  var ARROW = "Arrow";
  var ARROW_LEFT = ARROW + "Left";
  var ARROW_RIGHT = ARROW + "Right";
  var ARROW_UP = ARROW + "Up";
  var ARROW_DOWN = ARROW + "Down";
  var RTL = "rtl";
  var TTB = "ttb";
  var ORIENTATION_MAP = {
    width: ["height"],
    left: ["top", "right"],
    right: ["bottom", "left"],
    x: ["y"],
    X: ["Y"],
    Y: ["X"],
    ArrowLeft: [ARROW_UP, ARROW_RIGHT],
    ArrowRight: [ARROW_DOWN, ARROW_LEFT]
  };
  function Direction(Splide2, Components2, options) {
    function resolve(prop, axisOnly, direction) {
      direction = direction || options.direction;
      var index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
      return ORIENTATION_MAP[prop] && ORIENTATION_MAP[prop][index] || prop.replace(/width|left|right/i, function(match, offset) {
        var replacement = ORIENTATION_MAP[match.toLowerCase()][index] || match;
        return offset > 0 ? replacement.charAt(0).toUpperCase() + replacement.slice(1) : replacement;
      });
    }
    function orient(value) {
      return value * (options.direction === RTL ? 1 : -1);
    }
    return {
      resolve,
      orient
    };
  }
  var ROLE = "role";
  var TAB_INDEX = "tabindex";
  var DISABLED = "disabled";
  var ARIA_PREFIX = "aria-";
  var ARIA_CONTROLS = ARIA_PREFIX + "controls";
  var ARIA_CURRENT = ARIA_PREFIX + "current";
  var ARIA_SELECTED = ARIA_PREFIX + "selected";
  var ARIA_LABEL = ARIA_PREFIX + "label";
  var ARIA_LABELLEDBY = ARIA_PREFIX + "labelledby";
  var ARIA_HIDDEN = ARIA_PREFIX + "hidden";
  var ARIA_ORIENTATION = ARIA_PREFIX + "orientation";
  var ARIA_ROLEDESCRIPTION = ARIA_PREFIX + "roledescription";
  var ARIA_LIVE = ARIA_PREFIX + "live";
  var ARIA_BUSY = ARIA_PREFIX + "busy";
  var ARIA_ATOMIC = ARIA_PREFIX + "atomic";
  var ALL_ATTRIBUTES = [ROLE, TAB_INDEX, DISABLED, ARIA_CONTROLS, ARIA_CURRENT, ARIA_LABEL, ARIA_LABELLEDBY, ARIA_HIDDEN, ARIA_ORIENTATION, ARIA_ROLEDESCRIPTION];
  var CLASS_PREFIX = PROJECT_CODE + "__";
  var STATUS_CLASS_PREFIX = "is-";
  var CLASS_ROOT = PROJECT_CODE;
  var CLASS_TRACK = CLASS_PREFIX + "track";
  var CLASS_LIST = CLASS_PREFIX + "list";
  var CLASS_SLIDE = CLASS_PREFIX + "slide";
  var CLASS_CLONE = CLASS_SLIDE + "--clone";
  var CLASS_CONTAINER = CLASS_SLIDE + "__container";
  var CLASS_ARROWS = CLASS_PREFIX + "arrows";
  var CLASS_ARROW = CLASS_PREFIX + "arrow";
  var CLASS_ARROW_PREV = CLASS_ARROW + "--prev";
  var CLASS_ARROW_NEXT = CLASS_ARROW + "--next";
  var CLASS_PAGINATION = CLASS_PREFIX + "pagination";
  var CLASS_PAGINATION_PAGE = CLASS_PAGINATION + "__page";
  var CLASS_PROGRESS = CLASS_PREFIX + "progress";
  var CLASS_PROGRESS_BAR = CLASS_PROGRESS + "__bar";
  var CLASS_TOGGLE = CLASS_PREFIX + "toggle";
  var CLASS_TOGGLE_PLAY = CLASS_TOGGLE + "__play";
  var CLASS_TOGGLE_PAUSE = CLASS_TOGGLE + "__pause";
  var CLASS_SPINNER = CLASS_PREFIX + "spinner";
  var CLASS_SR = CLASS_PREFIX + "sr";
  var CLASS_INITIALIZED = STATUS_CLASS_PREFIX + "initialized";
  var CLASS_ACTIVE = STATUS_CLASS_PREFIX + "active";
  var CLASS_PREV = STATUS_CLASS_PREFIX + "prev";
  var CLASS_NEXT = STATUS_CLASS_PREFIX + "next";
  var CLASS_VISIBLE = STATUS_CLASS_PREFIX + "visible";
  var CLASS_LOADING = STATUS_CLASS_PREFIX + "loading";
  var CLASS_FOCUS_IN = STATUS_CLASS_PREFIX + "focus-in";
  var CLASS_OVERFLOW = STATUS_CLASS_PREFIX + "overflow";
  var STATUS_CLASSES = [CLASS_ACTIVE, CLASS_VISIBLE, CLASS_PREV, CLASS_NEXT, CLASS_LOADING, CLASS_FOCUS_IN, CLASS_OVERFLOW];
  var CLASSES = {
    slide: CLASS_SLIDE,
    clone: CLASS_CLONE,
    arrows: CLASS_ARROWS,
    arrow: CLASS_ARROW,
    prev: CLASS_ARROW_PREV,
    next: CLASS_ARROW_NEXT,
    pagination: CLASS_PAGINATION,
    page: CLASS_PAGINATION_PAGE,
    spinner: CLASS_SPINNER
  };
  function closest(from, selector) {
    if (isFunction(from.closest)) {
      return from.closest(selector);
    }
    var elm = from;
    while (elm && elm.nodeType === 1) {
      if (matches(elm, selector)) {
        break;
      }
      elm = elm.parentElement;
    }
    return elm;
  }
  var FRICTION = 5;
  var LOG_INTERVAL = 200;
  var POINTER_DOWN_EVENTS = "touchstart mousedown";
  var POINTER_MOVE_EVENTS = "touchmove mousemove";
  var POINTER_UP_EVENTS = "touchend touchcancel mouseup click";
  function Elements(Splide2, Components2, options) {
    var _EventInterface = EventInterface(Splide2), on = _EventInterface.on, bind = _EventInterface.bind;
    var root = Splide2.root;
    var i18n = options.i18n;
    var elements = {};
    var slides = [];
    var rootClasses = [];
    var trackClasses = [];
    var track;
    var list;
    var isUsingKey;
    function setup() {
      collect();
      init();
      update();
    }
    function mount() {
      on(EVENT_REFRESH, destroy);
      on(EVENT_REFRESH, setup);
      on(EVENT_UPDATED, update);
      bind(document, POINTER_DOWN_EVENTS + " keydown", function(e2) {
        isUsingKey = e2.type === "keydown";
      }, {
        capture: true
      });
      bind(root, "focusin", function() {
        toggleClass(root, CLASS_FOCUS_IN, !!isUsingKey);
      });
    }
    function destroy(completely) {
      var attrs = ALL_ATTRIBUTES.concat("style");
      empty(slides);
      removeClass(root, rootClasses);
      removeClass(track, trackClasses);
      removeAttribute([track, list], attrs);
      removeAttribute(root, completely ? attrs : ["style", ARIA_ROLEDESCRIPTION]);
    }
    function update() {
      removeClass(root, rootClasses);
      removeClass(track, trackClasses);
      rootClasses = getClasses(CLASS_ROOT);
      trackClasses = getClasses(CLASS_TRACK);
      addClass(root, rootClasses);
      addClass(track, trackClasses);
      setAttribute(root, ARIA_LABEL, options.label);
      setAttribute(root, ARIA_LABELLEDBY, options.labelledby);
    }
    function collect() {
      track = find("." + CLASS_TRACK);
      list = child(track, "." + CLASS_LIST);
      assert(track && list, "A track/list element is missing.");
      push(slides, children(list, "." + CLASS_SLIDE + ":not(." + CLASS_CLONE + ")"));
      forOwn({
        arrows: CLASS_ARROWS,
        pagination: CLASS_PAGINATION,
        prev: CLASS_ARROW_PREV,
        next: CLASS_ARROW_NEXT,
        bar: CLASS_PROGRESS_BAR,
        toggle: CLASS_TOGGLE
      }, function(className, key) {
        elements[key] = find("." + className);
      });
      assign(elements, {
        root,
        track,
        list,
        slides
      });
    }
    function init() {
      var id = root.id || uniqueId(PROJECT_CODE);
      var role = options.role;
      root.id = id;
      track.id = track.id || id + "-track";
      list.id = list.id || id + "-list";
      if (!getAttribute(root, ROLE) && root.tagName !== "SECTION" && role) {
        setAttribute(root, ROLE, role);
      }
      setAttribute(root, ARIA_ROLEDESCRIPTION, i18n.carousel);
      setAttribute(list, ROLE, "presentation");
    }
    function find(selector) {
      var elm = query(root, selector);
      return elm && closest(elm, "." + CLASS_ROOT) === root ? elm : void 0;
    }
    function getClasses(base) {
      return [base + "--" + options.type, base + "--" + options.direction, options.drag && base + "--draggable", options.isNavigation && base + "--nav", base === CLASS_ROOT && CLASS_ACTIVE];
    }
    return assign(elements, {
      setup,
      mount,
      destroy
    });
  }
  var SLIDE = "slide";
  var LOOP = "loop";
  var FADE = "fade";
  function Slide$1(Splide2, index, slideIndex, slide) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Components = Splide2.Components, root = Splide2.root, options = Splide2.options;
    var isNavigation = options.isNavigation, updateOnMove = options.updateOnMove, i18n = options.i18n, pagination = options.pagination, slideFocus = options.slideFocus;
    var resolve = Components.Direction.resolve;
    var styles = getAttribute(slide, "style");
    var label = getAttribute(slide, ARIA_LABEL);
    var isClone = slideIndex > -1;
    var container = child(slide, "." + CLASS_CONTAINER);
    var destroyed;
    function mount() {
      if (!isClone) {
        slide.id = root.id + "-slide" + pad(index + 1);
        setAttribute(slide, ROLE, pagination ? "tabpanel" : "group");
        setAttribute(slide, ARIA_ROLEDESCRIPTION, i18n.slide);
        setAttribute(slide, ARIA_LABEL, label || format(i18n.slideLabel, [index + 1, Splide2.length]));
      }
      listen();
    }
    function listen() {
      bind(slide, "click", apply(emit, EVENT_CLICK, self));
      bind(slide, "keydown", apply(emit, EVENT_SLIDE_KEYDOWN, self));
      on([EVENT_MOVED, EVENT_SHIFTED, EVENT_SCROLLED], update);
      on(EVENT_NAVIGATION_MOUNTED, initNavigation);
      if (updateOnMove) {
        on(EVENT_MOVE, onMove);
      }
    }
    function destroy() {
      destroyed = true;
      event.destroy();
      removeClass(slide, STATUS_CLASSES);
      removeAttribute(slide, ALL_ATTRIBUTES);
      setAttribute(slide, "style", styles);
      setAttribute(slide, ARIA_LABEL, label || "");
    }
    function initNavigation() {
      var controls = Splide2.splides.map(function(target) {
        var Slide2 = target.splide.Components.Slides.getAt(index);
        return Slide2 ? Slide2.slide.id : "";
      }).join(" ");
      setAttribute(slide, ARIA_LABEL, format(i18n.slideX, (isClone ? slideIndex : index) + 1));
      setAttribute(slide, ARIA_CONTROLS, controls);
      setAttribute(slide, ROLE, slideFocus ? "button" : "");
      slideFocus && removeAttribute(slide, ARIA_ROLEDESCRIPTION);
    }
    function onMove() {
      if (!destroyed) {
        update();
      }
    }
    function update() {
      if (!destroyed) {
        var curr = Splide2.index;
        updateActivity();
        updateVisibility();
        toggleClass(slide, CLASS_PREV, index === curr - 1);
        toggleClass(slide, CLASS_NEXT, index === curr + 1);
      }
    }
    function updateActivity() {
      var active = isActive();
      if (active !== hasClass(slide, CLASS_ACTIVE)) {
        toggleClass(slide, CLASS_ACTIVE, active);
        setAttribute(slide, ARIA_CURRENT, isNavigation && active || "");
        emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, self);
      }
    }
    function updateVisibility() {
      var visible = isVisible();
      var hidden = !visible && (!isActive() || isClone);
      if (!Splide2.state.is([MOVING, SCROLLING])) {
        setAttribute(slide, ARIA_HIDDEN, hidden || "");
      }
      setAttribute(queryAll(slide, options.focusableNodes || ""), TAB_INDEX, hidden ? -1 : "");
      if (slideFocus) {
        setAttribute(slide, TAB_INDEX, hidden ? -1 : 0);
      }
      if (visible !== hasClass(slide, CLASS_VISIBLE)) {
        toggleClass(slide, CLASS_VISIBLE, visible);
        emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, self);
      }
      if (!visible && document.activeElement === slide) {
        var Slide2 = Components.Slides.getAt(Splide2.index);
        Slide2 && focus(Slide2.slide);
      }
    }
    function style$1(prop, value, useContainer) {
      style(useContainer && container || slide, prop, value);
    }
    function isActive() {
      var curr = Splide2.index;
      return curr === index || options.cloneStatus && curr === slideIndex;
    }
    function isVisible() {
      if (Splide2.is(FADE)) {
        return isActive();
      }
      var trackRect = rect(Components.Elements.track);
      var slideRect = rect(slide);
      var left = resolve("left", true);
      var right = resolve("right", true);
      return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
    }
    function isWithin(from, distance) {
      var diff = abs(from - index);
      if (!isClone && (options.rewind || Splide2.is(LOOP))) {
        diff = min(diff, Splide2.length - diff);
      }
      return diff <= distance;
    }
    var self = {
      index,
      slideIndex,
      slide,
      container,
      isClone,
      mount,
      destroy,
      update,
      style: style$1,
      isWithin
    };
    return self;
  }
  function Slides(Splide2, Components2, options) {
    var _EventInterface2 = EventInterface(Splide2), on = _EventInterface2.on, emit = _EventInterface2.emit, bind = _EventInterface2.bind;
    var _Components2$Elements = Components2.Elements, slides = _Components2$Elements.slides, list = _Components2$Elements.list;
    var Slides2 = [];
    function mount() {
      init();
      on(EVENT_REFRESH, destroy);
      on(EVENT_REFRESH, init);
    }
    function init() {
      slides.forEach(function(slide, index) {
        register(slide, index, -1);
      });
    }
    function destroy() {
      forEach$1(function(Slide2) {
        Slide2.destroy();
      });
      empty(Slides2);
    }
    function update() {
      forEach$1(function(Slide2) {
        Slide2.update();
      });
    }
    function register(slide, index, slideIndex) {
      var object = Slide$1(Splide2, index, slideIndex, slide);
      object.mount();
      Slides2.push(object);
      Slides2.sort(function(Slide1, Slide2) {
        return Slide1.index - Slide2.index;
      });
    }
    function get(excludeClones) {
      return excludeClones ? filter(function(Slide2) {
        return !Slide2.isClone;
      }) : Slides2;
    }
    function getIn(page) {
      var Controller2 = Components2.Controller;
      var index = Controller2.toIndex(page);
      var max2 = Controller2.hasFocus() ? 1 : options.perPage;
      return filter(function(Slide2) {
        return between(Slide2.index, index, index + max2 - 1);
      });
    }
    function getAt(index) {
      return filter(index)[0];
    }
    function add(items, index) {
      forEach(items, function(slide) {
        if (isString(slide)) {
          slide = parseHtml(slide);
        }
        if (isHTMLElement(slide)) {
          var ref = slides[index];
          ref ? before(slide, ref) : append(list, slide);
          addClass(slide, options.classes.slide);
          observeImages(slide, apply(emit, EVENT_RESIZE));
        }
      });
      emit(EVENT_REFRESH);
    }
    function remove$1(matcher) {
      remove(filter(matcher).map(function(Slide2) {
        return Slide2.slide;
      }));
      emit(EVENT_REFRESH);
    }
    function forEach$1(iteratee, excludeClones) {
      get(excludeClones).forEach(iteratee);
    }
    function filter(matcher) {
      return Slides2.filter(isFunction(matcher) ? matcher : function(Slide2) {
        return isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index);
      });
    }
    function style2(prop, value, useContainer) {
      forEach$1(function(Slide2) {
        Slide2.style(prop, value, useContainer);
      });
    }
    function observeImages(elm, callback) {
      var images = queryAll(elm, "img");
      var length = images.length;
      if (length) {
        images.forEach(function(img) {
          bind(img, "load error", function() {
            if (!--length) {
              callback();
            }
          });
        });
      } else {
        callback();
      }
    }
    function getLength(excludeClones) {
      return excludeClones ? slides.length : Slides2.length;
    }
    function isEnough() {
      return Slides2.length > options.perPage;
    }
    return {
      mount,
      destroy,
      update,
      register,
      get,
      getIn,
      getAt,
      add,
      remove: remove$1,
      forEach: forEach$1,
      filter,
      style: style2,
      getLength,
      isEnough
    };
  }
  function Layout(Splide2, Components2, options) {
    var _EventInterface3 = EventInterface(Splide2), on = _EventInterface3.on, bind = _EventInterface3.bind, emit = _EventInterface3.emit;
    var Slides2 = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var _Components2$Elements2 = Components2.Elements, root = _Components2$Elements2.root, track = _Components2$Elements2.track, list = _Components2$Elements2.list;
    var getAt = Slides2.getAt, styleSlides = Slides2.style;
    var vertical;
    var rootRect;
    var overflow;
    function mount() {
      init();
      bind(window, "resize load", Throttle(apply(emit, EVENT_RESIZE)));
      on([EVENT_UPDATED, EVENT_REFRESH], init);
      on(EVENT_RESIZE, resize);
    }
    function init() {
      vertical = options.direction === TTB;
      style(root, "maxWidth", unit(options.width));
      style(track, resolve("paddingLeft"), cssPadding(false));
      style(track, resolve("paddingRight"), cssPadding(true));
      resize(true);
    }
    function resize(force) {
      var newRect = rect(root);
      if (force || rootRect.width !== newRect.width || rootRect.height !== newRect.height) {
        style(track, "height", cssTrackHeight());
        styleSlides(resolve("marginRight"), unit(options.gap));
        styleSlides("width", cssSlideWidth());
        styleSlides("height", cssSlideHeight(), true);
        rootRect = newRect;
        emit(EVENT_RESIZED);
        if (overflow !== (overflow = isOverflow())) {
          toggleClass(root, CLASS_OVERFLOW, overflow);
          emit(EVENT_OVERFLOW, overflow);
        }
      }
    }
    function cssPadding(right) {
      var padding = options.padding;
      var prop = resolve(right ? "right" : "left");
      return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    }
    function cssTrackHeight() {
      var height = "";
      if (vertical) {
        height = cssHeight();
        assert(height, "height or heightRatio is missing.");
        height = "calc(" + height + " - " + cssPadding(false) + " - " + cssPadding(true) + ")";
      }
      return height;
    }
    function cssHeight() {
      return unit(options.height || rect(list).width * options.heightRatio);
    }
    function cssSlideWidth() {
      return options.autoWidth ? null : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
    }
    function cssSlideHeight() {
      return unit(options.fixedHeight) || (vertical ? options.autoHeight ? null : cssSlideSize() : cssHeight());
    }
    function cssSlideSize() {
      var gap = unit(options.gap);
      return "calc((100%" + (gap && " + " + gap) + ")/" + (options.perPage || 1) + (gap && " - " + gap) + ")";
    }
    function listSize() {
      return rect(list)[resolve("width")];
    }
    function slideSize(index, withoutGap) {
      var Slide2 = getAt(index || 0);
      return Slide2 ? rect(Slide2.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
    }
    function totalSize(index, withoutGap) {
      var Slide2 = getAt(index);
      if (Slide2) {
        var right = rect(Slide2.slide)[resolve("right")];
        var left = rect(list)[resolve("left")];
        return abs(right - left) + (withoutGap ? 0 : getGap());
      }
      return 0;
    }
    function sliderSize(withoutGap) {
      return totalSize(Splide2.length - 1) - totalSize(0) + slideSize(0, withoutGap);
    }
    function getGap() {
      var Slide2 = getAt(0);
      return Slide2 && parseFloat(style(Slide2.slide, resolve("marginRight"))) || 0;
    }
    function getPadding(right) {
      return parseFloat(style(track, resolve("padding" + (right ? "Right" : "Left")))) || 0;
    }
    function isOverflow() {
      return Splide2.is(FADE) || sliderSize(true) > listSize();
    }
    return {
      mount,
      resize,
      listSize,
      slideSize,
      sliderSize,
      totalSize,
      getPadding,
      isOverflow
    };
  }
  var MULTIPLIER = 2;
  function Clones(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on;
    var Elements2 = Components2.Elements, Slides2 = Components2.Slides;
    var resolve = Components2.Direction.resolve;
    var clones = [];
    var cloneCount;
    function mount() {
      on(EVENT_REFRESH, remount);
      on([EVENT_UPDATED, EVENT_RESIZE], observe);
      if (cloneCount = computeCloneCount()) {
        generate(cloneCount);
        Components2.Layout.resize(true);
      }
    }
    function remount() {
      destroy();
      mount();
    }
    function destroy() {
      remove(clones);
      empty(clones);
      event.destroy();
    }
    function observe() {
      var count = computeCloneCount();
      if (cloneCount !== count) {
        if (cloneCount < count || !count) {
          event.emit(EVENT_REFRESH);
        }
      }
    }
    function generate(count) {
      var slides = Slides2.get().slice();
      var length = slides.length;
      if (length) {
        while (slides.length < count) {
          push(slides, slides);
        }
        push(slides.slice(-count), slides.slice(0, count)).forEach(function(Slide2, index) {
          var isHead = index < count;
          var clone = cloneDeep(Slide2.slide, index);
          isHead ? before(clone, slides[0].slide) : append(Elements2.list, clone);
          push(clones, clone);
          Slides2.register(clone, index - count + (isHead ? 0 : length), Slide2.index);
        });
      }
    }
    function cloneDeep(elm, index) {
      var clone = elm.cloneNode(true);
      addClass(clone, options.classes.clone);
      clone.id = Splide2.root.id + "-clone" + pad(index + 1);
      return clone;
    }
    function computeCloneCount() {
      var clones2 = options.clones;
      if (!Splide2.is(LOOP)) {
        clones2 = 0;
      } else if (isUndefined(clones2)) {
        var fixedSize = options[resolve("fixedWidth")] && Components2.Layout.slideSize(0);
        var fixedCount = fixedSize && ceil(rect(Elements2.track)[resolve("width")] / fixedSize);
        clones2 = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage * MULTIPLIER;
      }
      return clones2;
    }
    return {
      mount,
      destroy
    };
  }
  function Move(Splide2, Components2, options) {
    var _EventInterface4 = EventInterface(Splide2), on = _EventInterface4.on, emit = _EventInterface4.emit;
    var set = Splide2.state.set;
    var _Components2$Layout = Components2.Layout, slideSize = _Components2$Layout.slideSize, getPadding = _Components2$Layout.getPadding, totalSize = _Components2$Layout.totalSize, listSize = _Components2$Layout.listSize, sliderSize = _Components2$Layout.sliderSize;
    var _Components2$Directio = Components2.Direction, resolve = _Components2$Directio.resolve, orient = _Components2$Directio.orient;
    var _Components2$Elements3 = Components2.Elements, list = _Components2$Elements3.list, track = _Components2$Elements3.track;
    var Transition;
    function mount() {
      Transition = Components2.Transition;
      on([EVENT_MOUNTED, EVENT_RESIZED, EVENT_UPDATED, EVENT_REFRESH], reposition);
    }
    function reposition() {
      if (!Components2.Controller.isBusy()) {
        Components2.Scroll.cancel();
        jump(Splide2.index);
        Components2.Slides.update();
      }
    }
    function move(dest, index, prev, callback) {
      if (dest !== index && canShift(dest > prev)) {
        cancel();
        translate(shift(getPosition(), dest > prev), true);
      }
      set(MOVING);
      emit(EVENT_MOVE, index, prev, dest);
      Transition.start(index, function() {
        set(IDLE);
        emit(EVENT_MOVED, index, prev, dest);
        callback && callback();
      });
    }
    function jump(index) {
      translate(toPosition(index, true));
    }
    function translate(position, preventLoop) {
      if (!Splide2.is(FADE)) {
        var destination = preventLoop ? position : loop(position);
        style(list, "transform", "translate" + resolve("X") + "(" + destination + "px)");
        position !== destination && emit(EVENT_SHIFTED);
      }
    }
    function loop(position) {
      if (Splide2.is(LOOP)) {
        var index = toIndex(position);
        var exceededMax = index > Components2.Controller.getEnd();
        var exceededMin = index < 0;
        if (exceededMin || exceededMax) {
          position = shift(position, exceededMax);
        }
      }
      return position;
    }
    function shift(position, backwards) {
      var excess = position - getLimit(backwards);
      var size = sliderSize();
      position -= orient(size * (ceil(abs(excess) / size) || 1)) * (backwards ? 1 : -1);
      return position;
    }
    function cancel() {
      translate(getPosition(), true);
      Transition.cancel();
    }
    function toIndex(position) {
      var Slides2 = Components2.Slides.get();
      var index = 0;
      var minDistance = Infinity;
      for (var i2 = 0; i2 < Slides2.length; i2++) {
        var slideIndex = Slides2[i2].index;
        var distance = abs(toPosition(slideIndex, true) - position);
        if (distance <= minDistance) {
          minDistance = distance;
          index = slideIndex;
        } else {
          break;
        }
      }
      return index;
    }
    function toPosition(index, trimming) {
      var position = orient(totalSize(index - 1) - offset(index));
      return trimming ? trim(position) : position;
    }
    function getPosition() {
      var left = resolve("left");
      return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
    }
    function trim(position) {
      if (options.trimSpace && Splide2.is(SLIDE)) {
        position = clamp(position, 0, orient(sliderSize(true) - listSize()));
      }
      return position;
    }
    function offset(index) {
      var focus2 = options.focus;
      return focus2 === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus2 * slideSize(index) || 0;
    }
    function getLimit(max2) {
      return toPosition(max2 ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
    }
    function canShift(backwards) {
      var shifted = orient(shift(getPosition(), backwards));
      return backwards ? shifted >= 0 : shifted <= list[resolve("scrollWidth")] - rect(track)[resolve("width")];
    }
    function exceededLimit(max2, position) {
      position = isUndefined(position) ? getPosition() : position;
      var exceededMin = max2 !== true && orient(position) < orient(getLimit(false));
      var exceededMax = max2 !== false && orient(position) > orient(getLimit(true));
      return exceededMin || exceededMax;
    }
    return {
      mount,
      move,
      jump,
      translate,
      shift,
      cancel,
      toIndex,
      toPosition,
      getPosition,
      getLimit,
      exceededLimit,
      reposition
    };
  }
  function Controller(Splide2, Components2, options) {
    var _EventInterface5 = EventInterface(Splide2), on = _EventInterface5.on, emit = _EventInterface5.emit;
    var Move2 = Components2.Move;
    var getPosition = Move2.getPosition, getLimit = Move2.getLimit, toPosition = Move2.toPosition;
    var _Components2$Slides = Components2.Slides, isEnough = _Components2$Slides.isEnough, getLength = _Components2$Slides.getLength;
    var omitEnd = options.omitEnd;
    var isLoop = Splide2.is(LOOP);
    var isSlide = Splide2.is(SLIDE);
    var getNext = apply(getAdjacent, false);
    var getPrev = apply(getAdjacent, true);
    var currIndex = options.start || 0;
    var endIndex;
    var prevIndex = currIndex;
    var slideCount;
    var perMove;
    var perPage;
    function mount() {
      init();
      on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], init);
      on(EVENT_RESIZED, onResized);
    }
    function init() {
      slideCount = getLength(true);
      perMove = options.perMove;
      perPage = options.perPage;
      endIndex = getEnd();
      var index = clamp(currIndex, 0, omitEnd ? endIndex : slideCount - 1);
      if (index !== currIndex) {
        currIndex = index;
        Move2.reposition();
      }
    }
    function onResized() {
      if (endIndex !== getEnd()) {
        emit(EVENT_END_INDEX_CHANGED);
      }
    }
    function go(control, allowSameIndex, callback) {
      if (!isBusy()) {
        var dest = parse(control);
        var index = loop(dest);
        if (index > -1 && (allowSameIndex || index !== currIndex)) {
          setIndex(index);
          Move2.move(dest, index, prevIndex, callback);
        }
      }
    }
    function scroll(destination, duration, snap, callback) {
      Components2.Scroll.scroll(destination, duration, snap, function() {
        var index = loop(Move2.toIndex(getPosition()));
        setIndex(omitEnd ? min(index, endIndex) : index);
        callback && callback();
      });
    }
    function parse(control) {
      var index = currIndex;
      if (isString(control)) {
        var _ref = control.match(/([+\-<>])(\d+)?/) || [], indicator = _ref[1], number = _ref[2];
        if (indicator === "+" || indicator === "-") {
          index = computeDestIndex(currIndex + +("" + indicator + (+number || 1)), currIndex);
        } else if (indicator === ">") {
          index = number ? toIndex(+number) : getNext(true);
        } else if (indicator === "<") {
          index = getPrev(true);
        }
      } else {
        index = isLoop ? control : clamp(control, 0, endIndex);
      }
      return index;
    }
    function getAdjacent(prev, destination) {
      var number = perMove || (hasFocus() ? 1 : perPage);
      var dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex, !(perMove || hasFocus()));
      if (dest === -1 && isSlide) {
        if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) {
          return prev ? 0 : endIndex;
        }
      }
      return destination ? dest : loop(dest);
    }
    function computeDestIndex(dest, from, snapPage) {
      if (isEnough() || hasFocus()) {
        var index = computeMovableDestIndex(dest);
        if (index !== dest) {
          from = dest;
          dest = index;
          snapPage = false;
        }
        if (dest < 0 || dest > endIndex) {
          if (!perMove && (between(0, dest, from, true) || between(endIndex, from, dest, true))) {
            dest = toIndex(toPage(dest));
          } else {
            if (isLoop) {
              dest = snapPage ? dest < 0 ? -(slideCount % perPage || perPage) : slideCount : dest;
            } else if (options.rewind) {
              dest = dest < 0 ? endIndex : 0;
            } else {
              dest = -1;
            }
          }
        } else {
          if (snapPage && dest !== from) {
            dest = toIndex(toPage(from) + (dest < from ? -1 : 1));
          }
        }
      } else {
        dest = -1;
      }
      return dest;
    }
    function computeMovableDestIndex(dest) {
      if (isSlide && options.trimSpace === "move" && dest !== currIndex) {
        var position = getPosition();
        while (position === toPosition(dest, true) && between(dest, 0, Splide2.length - 1, !options.rewind)) {
          dest < currIndex ? --dest : ++dest;
        }
      }
      return dest;
    }
    function loop(index) {
      return isLoop ? (index + slideCount) % slideCount || 0 : index;
    }
    function getEnd() {
      var end = slideCount - (hasFocus() || isLoop && perMove ? 1 : perPage);
      while (omitEnd && end-- > 0) {
        if (toPosition(slideCount - 1, true) !== toPosition(end, true)) {
          end++;
          break;
        }
      }
      return clamp(end, 0, slideCount - 1);
    }
    function toIndex(page) {
      return clamp(hasFocus() ? page : perPage * page, 0, endIndex);
    }
    function toPage(index) {
      return hasFocus() ? min(index, endIndex) : floor((index >= endIndex ? slideCount - 1 : index) / perPage);
    }
    function toDest(destination) {
      var closest2 = Move2.toIndex(destination);
      return isSlide ? clamp(closest2, 0, endIndex) : closest2;
    }
    function setIndex(index) {
      if (index !== currIndex) {
        prevIndex = currIndex;
        currIndex = index;
      }
    }
    function getIndex(prev) {
      return prev ? prevIndex : currIndex;
    }
    function hasFocus() {
      return !isUndefined(options.focus) || options.isNavigation;
    }
    function isBusy() {
      return Splide2.state.is([MOVING, SCROLLING]) && !!options.waitForTransition;
    }
    return {
      mount,
      go,
      scroll,
      getNext,
      getPrev,
      getAdjacent,
      getEnd,
      setIndex,
      getIndex,
      toIndex,
      toPage,
      toDest,
      hasFocus,
      isBusy
    };
  }
  var XML_NAME_SPACE = "http://www.w3.org/2000/svg";
  var PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
  var SIZE = 40;
  function Arrows(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, bind = event.bind, emit = event.emit;
    var classes = options.classes, i18n = options.i18n;
    var Elements2 = Components2.Elements, Controller2 = Components2.Controller;
    var placeholder = Elements2.arrows, track = Elements2.track;
    var wrapper = placeholder;
    var prev = Elements2.prev;
    var next = Elements2.next;
    var created;
    var wrapperClasses;
    var arrows = {};
    function mount() {
      init();
      on(EVENT_UPDATED, remount);
    }
    function remount() {
      destroy();
      mount();
    }
    function init() {
      var enabled = options.arrows;
      if (enabled && !(prev && next)) {
        createArrows();
      }
      if (prev && next) {
        assign(arrows, {
          prev,
          next
        });
        display(wrapper, enabled ? "" : "none");
        addClass(wrapper, wrapperClasses = CLASS_ARROWS + "--" + options.direction);
        if (enabled) {
          listen();
          update();
          setAttribute([prev, next], ARIA_CONTROLS, track.id);
          emit(EVENT_ARROWS_MOUNTED, prev, next);
        }
      }
    }
    function destroy() {
      event.destroy();
      removeClass(wrapper, wrapperClasses);
      if (created) {
        remove(placeholder ? [prev, next] : wrapper);
        prev = next = null;
      } else {
        removeAttribute([prev, next], ALL_ATTRIBUTES);
      }
    }
    function listen() {
      on([EVENT_MOUNTED, EVENT_MOVED, EVENT_REFRESH, EVENT_SCROLLED, EVENT_END_INDEX_CHANGED], update);
      bind(next, "click", apply(go, ">"));
      bind(prev, "click", apply(go, "<"));
    }
    function go(control) {
      Controller2.go(control, true);
    }
    function createArrows() {
      wrapper = placeholder || create("div", classes.arrows);
      prev = createArrow(true);
      next = createArrow(false);
      created = true;
      append(wrapper, [prev, next]);
      !placeholder && before(wrapper, track);
    }
    function createArrow(prev2) {
      var arrow = '<button class="' + classes.arrow + " " + (prev2 ? classes.prev : classes.next) + '" type="button"><svg xmlns="' + XML_NAME_SPACE + '" viewBox="0 0 ' + SIZE + " " + SIZE + '" width="' + SIZE + '" height="' + SIZE + '" focusable="false"><path d="' + (options.arrowPath || PATH) + '" />';
      return parseHtml(arrow);
    }
    function update() {
      if (prev && next) {
        var index = Splide2.index;
        var prevIndex = Controller2.getPrev();
        var nextIndex = Controller2.getNext();
        var prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
        var nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
        prev.disabled = prevIndex < 0;
        next.disabled = nextIndex < 0;
        setAttribute(prev, ARIA_LABEL, prevLabel);
        setAttribute(next, ARIA_LABEL, nextLabel);
        emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
      }
    }
    return {
      arrows,
      mount,
      destroy,
      update
    };
  }
  var INTERVAL_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-interval";
  function Autoplay(Splide2, Components2, options) {
    var _EventInterface6 = EventInterface(Splide2), on = _EventInterface6.on, bind = _EventInterface6.bind, emit = _EventInterface6.emit;
    var interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), onAnimationFrame);
    var isPaused = interval.isPaused;
    var Elements2 = Components2.Elements, _Components2$Elements4 = Components2.Elements, root = _Components2$Elements4.root, toggle = _Components2$Elements4.toggle;
    var autoplay = options.autoplay;
    var hovered;
    var focused;
    var stopped = autoplay === "pause";
    function mount() {
      if (autoplay) {
        listen();
        toggle && setAttribute(toggle, ARIA_CONTROLS, Elements2.track.id);
        stopped || play();
        update();
      }
    }
    function listen() {
      if (options.pauseOnHover) {
        bind(root, "mouseenter mouseleave", function(e2) {
          hovered = e2.type === "mouseenter";
          autoToggle();
        });
      }
      if (options.pauseOnFocus) {
        bind(root, "focusin focusout", function(e2) {
          focused = e2.type === "focusin";
          autoToggle();
        });
      }
      if (toggle) {
        bind(toggle, "click", function() {
          stopped ? play() : pause(true);
        });
      }
      on([EVENT_MOVE, EVENT_SCROLL, EVENT_REFRESH], interval.rewind);
      on(EVENT_MOVE, onMove);
    }
    function play() {
      if (isPaused() && Components2.Slides.isEnough()) {
        interval.start(!options.resetProgress);
        focused = hovered = stopped = false;
        update();
        emit(EVENT_AUTOPLAY_PLAY);
      }
    }
    function pause(stop) {
      if (stop === void 0) {
        stop = true;
      }
      stopped = !!stop;
      update();
      if (!isPaused()) {
        interval.pause();
        emit(EVENT_AUTOPLAY_PAUSE);
      }
    }
    function autoToggle() {
      if (!stopped) {
        hovered || focused ? pause(false) : play();
      }
    }
    function update() {
      if (toggle) {
        toggleClass(toggle, CLASS_ACTIVE, !stopped);
        setAttribute(toggle, ARIA_LABEL, options.i18n[stopped ? "play" : "pause"]);
      }
    }
    function onAnimationFrame(rate) {
      var bar = Elements2.bar;
      bar && style(bar, "width", rate * 100 + "%");
      emit(EVENT_AUTOPLAY_PLAYING, rate);
    }
    function onMove(index) {
      var Slide2 = Components2.Slides.getAt(index);
      interval.set(Slide2 && +getAttribute(Slide2.slide, INTERVAL_DATA_ATTRIBUTE) || options.interval);
    }
    return {
      mount,
      destroy: interval.cancel,
      play,
      pause,
      isPaused
    };
  }
  function Cover(Splide2, Components2, options) {
    var _EventInterface7 = EventInterface(Splide2), on = _EventInterface7.on;
    function mount() {
      if (options.cover) {
        on(EVENT_LAZYLOAD_LOADED, apply(toggle, true));
        on([EVENT_MOUNTED, EVENT_UPDATED, EVENT_REFRESH], apply(cover, true));
      }
    }
    function cover(cover2) {
      Components2.Slides.forEach(function(Slide2) {
        var img = child(Slide2.container || Slide2.slide, "img");
        if (img && img.src) {
          toggle(cover2, img, Slide2);
        }
      });
    }
    function toggle(cover2, img, Slide2) {
      Slide2.style("background", cover2 ? 'center/cover no-repeat url("' + img.src + '")' : "", true);
      display(img, cover2 ? "none" : "");
    }
    return {
      mount,
      destroy: apply(cover, false)
    };
  }
  var BOUNCE_DIFF_THRESHOLD = 10;
  var BOUNCE_DURATION = 600;
  var FRICTION_FACTOR = 0.6;
  var BASE_VELOCITY = 1.5;
  var MIN_DURATION = 800;
  function Scroll(Splide2, Components2, options) {
    var _EventInterface8 = EventInterface(Splide2), on = _EventInterface8.on, emit = _EventInterface8.emit;
    var set = Splide2.state.set;
    var Move2 = Components2.Move;
    var getPosition = Move2.getPosition, getLimit = Move2.getLimit, exceededLimit = Move2.exceededLimit, translate = Move2.translate;
    var isSlide = Splide2.is(SLIDE);
    var interval;
    var callback;
    var friction = 1;
    function mount() {
      on(EVENT_MOVE, clear);
      on([EVENT_UPDATED, EVENT_REFRESH], cancel);
    }
    function scroll(destination, duration, snap, onScrolled, noConstrain) {
      var from = getPosition();
      clear();
      if (snap && (!isSlide || !exceededLimit())) {
        var size = Components2.Layout.sliderSize();
        var offset = sign(destination) * size * floor(abs(destination) / size) || 0;
        destination = Move2.toPosition(Components2.Controller.toDest(destination % size)) + offset;
      }
      var noDistance = approximatelyEqual(from, destination, 1);
      friction = 1;
      duration = noDistance ? 0 : duration || max(abs(destination - from) / BASE_VELOCITY, MIN_DURATION);
      callback = onScrolled;
      interval = RequestInterval(duration, onEnd, apply(update, from, destination, noConstrain), 1);
      set(SCROLLING);
      emit(EVENT_SCROLL);
      interval.start();
    }
    function onEnd() {
      set(IDLE);
      callback && callback();
      emit(EVENT_SCROLLED);
    }
    function update(from, to, noConstrain, rate) {
      var position = getPosition();
      var target = from + (to - from) * easing(rate);
      var diff = (target - position) * friction;
      translate(position + diff);
      if (isSlide && !noConstrain && exceededLimit()) {
        friction *= FRICTION_FACTOR;
        if (abs(diff) < BOUNCE_DIFF_THRESHOLD) {
          scroll(getLimit(exceededLimit(true)), BOUNCE_DURATION, false, callback, true);
        }
      }
    }
    function clear() {
      if (interval) {
        interval.cancel();
      }
    }
    function cancel() {
      if (interval && !interval.isPaused()) {
        clear();
        onEnd();
      }
    }
    function easing(t2) {
      var easingFunc = options.easingFunc;
      return easingFunc ? easingFunc(t2) : 1 - Math.pow(1 - t2, 4);
    }
    return {
      mount,
      destroy: clear,
      scroll,
      cancel
    };
  }
  var SCROLL_LISTENER_OPTIONS = {
    passive: false,
    capture: true
  };
  function Drag(Splide2, Components2, options) {
    var _EventInterface9 = EventInterface(Splide2), on = _EventInterface9.on, emit = _EventInterface9.emit, bind = _EventInterface9.bind, unbind = _EventInterface9.unbind;
    var state = Splide2.state;
    var Move2 = Components2.Move, Scroll2 = Components2.Scroll, Controller2 = Components2.Controller, track = Components2.Elements.track, reduce = Components2.Media.reduce;
    var _Components2$Directio2 = Components2.Direction, resolve = _Components2$Directio2.resolve, orient = _Components2$Directio2.orient;
    var getPosition = Move2.getPosition, exceededLimit = Move2.exceededLimit;
    var basePosition;
    var baseEvent;
    var prevBaseEvent;
    var isFree;
    var dragging;
    var exceeded = false;
    var clickPrevented;
    var disabled;
    var target;
    function mount() {
      bind(track, POINTER_MOVE_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
      bind(track, POINTER_UP_EVENTS, noop, SCROLL_LISTENER_OPTIONS);
      bind(track, POINTER_DOWN_EVENTS, onPointerDown, SCROLL_LISTENER_OPTIONS);
      bind(track, "click", onClick, {
        capture: true
      });
      bind(track, "dragstart", prevent);
      on([EVENT_MOUNTED, EVENT_UPDATED], init);
    }
    function init() {
      var drag = options.drag;
      disable(!drag);
      isFree = drag === "free";
    }
    function onPointerDown(e2) {
      clickPrevented = false;
      if (!disabled) {
        var isTouch = isTouchEvent(e2);
        if (isDraggable(e2.target) && (isTouch || !e2.button)) {
          if (!Controller2.isBusy()) {
            target = isTouch ? track : window;
            dragging = state.is([MOVING, SCROLLING]);
            prevBaseEvent = null;
            bind(target, POINTER_MOVE_EVENTS, onPointerMove, SCROLL_LISTENER_OPTIONS);
            bind(target, POINTER_UP_EVENTS, onPointerUp, SCROLL_LISTENER_OPTIONS);
            Move2.cancel();
            Scroll2.cancel();
            save(e2);
          } else {
            prevent(e2, true);
          }
        }
      }
    }
    function onPointerMove(e2) {
      if (!state.is(DRAGGING)) {
        state.set(DRAGGING);
        emit(EVENT_DRAG);
      }
      if (e2.cancelable) {
        if (dragging) {
          Move2.translate(basePosition + constrain(diffCoord(e2)));
          var expired = diffTime(e2) > LOG_INTERVAL;
          var hasExceeded = exceeded !== (exceeded = exceededLimit());
          if (expired || hasExceeded) {
            save(e2);
          }
          clickPrevented = true;
          emit(EVENT_DRAGGING);
          prevent(e2);
        } else if (isSliderDirection(e2)) {
          dragging = shouldStart(e2);
          prevent(e2);
        }
      }
    }
    function onPointerUp(e2) {
      if (state.is(DRAGGING)) {
        state.set(IDLE);
        emit(EVENT_DRAGGED);
      }
      if (dragging) {
        move(e2);
        prevent(e2);
      }
      unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
      unbind(target, POINTER_UP_EVENTS, onPointerUp);
      dragging = false;
    }
    function onClick(e2) {
      if (!disabled && clickPrevented) {
        prevent(e2, true);
      }
    }
    function save(e2) {
      prevBaseEvent = baseEvent;
      baseEvent = e2;
      basePosition = getPosition();
    }
    function move(e2) {
      var velocity = computeVelocity(e2);
      var destination = computeDestination(velocity);
      var rewind = options.rewind && options.rewindByDrag;
      reduce(false);
      if (isFree) {
        Controller2.scroll(destination, 0, options.snap);
      } else if (Splide2.is(FADE)) {
        Controller2.go(orient(sign(velocity)) < 0 ? rewind ? "<" : "-" : rewind ? ">" : "+");
      } else if (Splide2.is(SLIDE) && exceeded && rewind) {
        Controller2.go(exceededLimit(true) ? ">" : "<");
      } else {
        Controller2.go(Controller2.toDest(destination), true);
      }
      reduce(true);
    }
    function shouldStart(e2) {
      var thresholds = options.dragMinThreshold;
      var isObj = isObject(thresholds);
      var mouse = isObj && thresholds.mouse || 0;
      var touch = (isObj ? thresholds.touch : +thresholds) || 10;
      return abs(diffCoord(e2)) > (isTouchEvent(e2) ? touch : mouse);
    }
    function isSliderDirection(e2) {
      return abs(diffCoord(e2)) > abs(diffCoord(e2, true));
    }
    function computeVelocity(e2) {
      if (Splide2.is(LOOP) || !exceeded) {
        var time = diffTime(e2);
        if (time && time < LOG_INTERVAL) {
          return diffCoord(e2) / time;
        }
      }
      return 0;
    }
    function computeDestination(velocity) {
      return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
    }
    function diffCoord(e2, orthogonal) {
      return coordOf(e2, orthogonal) - coordOf(getBaseEvent(e2), orthogonal);
    }
    function diffTime(e2) {
      return timeOf(e2) - timeOf(getBaseEvent(e2));
    }
    function getBaseEvent(e2) {
      return baseEvent === e2 && prevBaseEvent || baseEvent;
    }
    function coordOf(e2, orthogonal) {
      return (isTouchEvent(e2) ? e2.changedTouches[0] : e2)["page" + resolve(orthogonal ? "Y" : "X")];
    }
    function constrain(diff) {
      return diff / (exceeded && Splide2.is(SLIDE) ? FRICTION : 1);
    }
    function isDraggable(target2) {
      var noDrag = options.noDrag;
      return !matches(target2, "." + CLASS_PAGINATION_PAGE + ", ." + CLASS_ARROW) && (!noDrag || !matches(target2, noDrag));
    }
    function isTouchEvent(e2) {
      return typeof TouchEvent !== "undefined" && e2 instanceof TouchEvent;
    }
    function isDragging() {
      return dragging;
    }
    function disable(value) {
      disabled = value;
    }
    return {
      mount,
      disable,
      isDragging
    };
  }
  var NORMALIZATION_MAP = {
    Spacebar: " ",
    Right: ARROW_RIGHT,
    Left: ARROW_LEFT,
    Up: ARROW_UP,
    Down: ARROW_DOWN
  };
  function normalizeKey(key) {
    key = isString(key) ? key : key.key;
    return NORMALIZATION_MAP[key] || key;
  }
  var KEYBOARD_EVENT = "keydown";
  function Keyboard(Splide2, Components2, options) {
    var _EventInterface10 = EventInterface(Splide2), on = _EventInterface10.on, bind = _EventInterface10.bind, unbind = _EventInterface10.unbind;
    var root = Splide2.root;
    var resolve = Components2.Direction.resolve;
    var target;
    var disabled;
    function mount() {
      init();
      on(EVENT_UPDATED, destroy);
      on(EVENT_UPDATED, init);
      on(EVENT_MOVE, onMove);
    }
    function init() {
      var keyboard = options.keyboard;
      if (keyboard) {
        target = keyboard === "global" ? window : root;
        bind(target, KEYBOARD_EVENT, onKeydown);
      }
    }
    function destroy() {
      unbind(target, KEYBOARD_EVENT);
    }
    function disable(value) {
      disabled = value;
    }
    function onMove() {
      var _disabled = disabled;
      disabled = true;
      nextTick(function() {
        disabled = _disabled;
      });
    }
    function onKeydown(e2) {
      if (!disabled) {
        var key = normalizeKey(e2);
        if (key === resolve(ARROW_LEFT)) {
          Splide2.go("<");
        } else if (key === resolve(ARROW_RIGHT)) {
          Splide2.go(">");
        }
      }
    }
    return {
      mount,
      destroy,
      disable
    };
  }
  var SRC_DATA_ATTRIBUTE = DATA_ATTRIBUTE + "-lazy";
  var SRCSET_DATA_ATTRIBUTE = SRC_DATA_ATTRIBUTE + "-srcset";
  var IMAGE_SELECTOR = "[" + SRC_DATA_ATTRIBUTE + "], [" + SRCSET_DATA_ATTRIBUTE + "]";
  function LazyLoad(Splide2, Components2, options) {
    var _EventInterface11 = EventInterface(Splide2), on = _EventInterface11.on, off = _EventInterface11.off, bind = _EventInterface11.bind, emit = _EventInterface11.emit;
    var isSequential = options.lazyLoad === "sequential";
    var events = [EVENT_MOVED, EVENT_SCROLLED];
    var entries = [];
    function mount() {
      if (options.lazyLoad) {
        init();
        on(EVENT_REFRESH, init);
      }
    }
    function init() {
      empty(entries);
      register();
      if (isSequential) {
        loadNext();
      } else {
        off(events);
        on(events, check);
        check();
      }
    }
    function register() {
      Components2.Slides.forEach(function(Slide2) {
        queryAll(Slide2.slide, IMAGE_SELECTOR).forEach(function(img) {
          var src = getAttribute(img, SRC_DATA_ATTRIBUTE);
          var srcset = getAttribute(img, SRCSET_DATA_ATTRIBUTE);
          if (src !== img.src || srcset !== img.srcset) {
            var className = options.classes.spinner;
            var parent = img.parentElement;
            var spinner = child(parent, "." + className) || create("span", className, parent);
            entries.push([img, Slide2, spinner]);
            img.src || display(img, "none");
          }
        });
      });
    }
    function check() {
      entries = entries.filter(function(data) {
        var distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
        return data[1].isWithin(Splide2.index, distance) ? load(data) : true;
      });
      entries.length || off(events);
    }
    function load(data) {
      var img = data[0];
      addClass(data[1].slide, CLASS_LOADING);
      bind(img, "load error", apply(onLoad, data));
      setAttribute(img, "src", getAttribute(img, SRC_DATA_ATTRIBUTE));
      setAttribute(img, "srcset", getAttribute(img, SRCSET_DATA_ATTRIBUTE));
      removeAttribute(img, SRC_DATA_ATTRIBUTE);
      removeAttribute(img, SRCSET_DATA_ATTRIBUTE);
    }
    function onLoad(data, e2) {
      var img = data[0], Slide2 = data[1];
      removeClass(Slide2.slide, CLASS_LOADING);
      if (e2.type !== "error") {
        remove(data[2]);
        display(img, "");
        emit(EVENT_LAZYLOAD_LOADED, img, Slide2);
        emit(EVENT_RESIZE);
      }
      isSequential && loadNext();
    }
    function loadNext() {
      entries.length && load(entries.shift());
    }
    return {
      mount,
      destroy: apply(empty, entries),
      check
    };
  }
  function Pagination(Splide2, Components2, options) {
    var event = EventInterface(Splide2);
    var on = event.on, emit = event.emit, bind = event.bind;
    var Slides2 = Components2.Slides, Elements2 = Components2.Elements, Controller2 = Components2.Controller;
    var hasFocus = Controller2.hasFocus, getIndex = Controller2.getIndex, go = Controller2.go;
    var resolve = Components2.Direction.resolve;
    var placeholder = Elements2.pagination;
    var items = [];
    var list;
    var paginationClasses;
    function mount() {
      destroy();
      on([EVENT_UPDATED, EVENT_REFRESH, EVENT_END_INDEX_CHANGED], mount);
      var enabled = options.pagination;
      placeholder && display(placeholder, enabled ? "" : "none");
      if (enabled) {
        on([EVENT_MOVE, EVENT_SCROLL, EVENT_SCROLLED], update);
        createPagination();
        update();
        emit(EVENT_PAGINATION_MOUNTED, {
          list,
          items
        }, getAt(Splide2.index));
      }
    }
    function destroy() {
      if (list) {
        remove(placeholder ? slice(list.children) : list);
        removeClass(list, paginationClasses);
        empty(items);
        list = null;
      }
      event.destroy();
    }
    function createPagination() {
      var length = Splide2.length;
      var classes = options.classes, i18n = options.i18n, perPage = options.perPage;
      var max2 = hasFocus() ? Controller2.getEnd() + 1 : ceil(length / perPage);
      list = placeholder || create("ul", classes.pagination, Elements2.track.parentElement);
      addClass(list, paginationClasses = CLASS_PAGINATION + "--" + getDirection());
      setAttribute(list, ROLE, "tablist");
      setAttribute(list, ARIA_LABEL, i18n.select);
      setAttribute(list, ARIA_ORIENTATION, getDirection() === TTB ? "vertical" : "");
      for (var i2 = 0; i2 < max2; i2++) {
        var li = create("li", null, list);
        var button = create("button", {
          class: classes.page,
          type: "button"
        }, li);
        var controls = Slides2.getIn(i2).map(function(Slide2) {
          return Slide2.slide.id;
        });
        var text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
        bind(button, "click", apply(onClick, i2));
        if (options.paginationKeyboard) {
          bind(button, "keydown", apply(onKeydown, i2));
        }
        setAttribute(li, ROLE, "presentation");
        setAttribute(button, ROLE, "tab");
        setAttribute(button, ARIA_CONTROLS, controls.join(" "));
        setAttribute(button, ARIA_LABEL, format(text, i2 + 1));
        setAttribute(button, TAB_INDEX, -1);
        items.push({
          li,
          button,
          page: i2
        });
      }
    }
    function onClick(page) {
      go(">" + page, true);
    }
    function onKeydown(page, e2) {
      var length = items.length;
      var key = normalizeKey(e2);
      var dir = getDirection();
      var nextPage = -1;
      if (key === resolve(ARROW_RIGHT, false, dir)) {
        nextPage = ++page % length;
      } else if (key === resolve(ARROW_LEFT, false, dir)) {
        nextPage = (--page + length) % length;
      } else if (key === "Home") {
        nextPage = 0;
      } else if (key === "End") {
        nextPage = length - 1;
      }
      var item = items[nextPage];
      if (item) {
        focus(item.button);
        go(">" + nextPage);
        prevent(e2, true);
      }
    }
    function getDirection() {
      return options.paginationDirection || options.direction;
    }
    function getAt(index) {
      return items[Controller2.toPage(index)];
    }
    function update() {
      var prev = getAt(getIndex(true));
      var curr = getAt(getIndex());
      if (prev) {
        var button = prev.button;
        removeClass(button, CLASS_ACTIVE);
        removeAttribute(button, ARIA_SELECTED);
        setAttribute(button, TAB_INDEX, -1);
      }
      if (curr) {
        var _button = curr.button;
        addClass(_button, CLASS_ACTIVE);
        setAttribute(_button, ARIA_SELECTED, true);
        setAttribute(_button, TAB_INDEX, "");
      }
      emit(EVENT_PAGINATION_UPDATED, {
        list,
        items
      }, prev, curr);
    }
    return {
      items,
      mount,
      destroy,
      getAt,
      update
    };
  }
  var TRIGGER_KEYS = [" ", "Enter"];
  function Sync(Splide2, Components2, options) {
    var isNavigation = options.isNavigation, slideFocus = options.slideFocus;
    var events = [];
    function mount() {
      Splide2.splides.forEach(function(target) {
        if (!target.isParent) {
          sync(Splide2, target.splide);
          sync(target.splide, Splide2);
        }
      });
      if (isNavigation) {
        navigate();
      }
    }
    function destroy() {
      events.forEach(function(event) {
        event.destroy();
      });
      empty(events);
    }
    function remount() {
      destroy();
      mount();
    }
    function sync(splide, target) {
      var event = EventInterface(splide);
      event.on(EVENT_MOVE, function(index, prev, dest) {
        target.go(target.is(LOOP) ? dest : index);
      });
      events.push(event);
    }
    function navigate() {
      var event = EventInterface(Splide2);
      var on = event.on;
      on(EVENT_CLICK, onClick);
      on(EVENT_SLIDE_KEYDOWN, onKeydown);
      on([EVENT_MOUNTED, EVENT_UPDATED], update);
      events.push(event);
      event.emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
    }
    function update() {
      setAttribute(Components2.Elements.list, ARIA_ORIENTATION, options.direction === TTB ? "vertical" : "");
    }
    function onClick(Slide2) {
      Splide2.go(Slide2.index);
    }
    function onKeydown(Slide2, e2) {
      if (includes(TRIGGER_KEYS, normalizeKey(e2))) {
        onClick(Slide2);
        prevent(e2);
      }
    }
    return {
      setup: apply(Components2.Media.set, {
        slideFocus: isUndefined(slideFocus) ? isNavigation : slideFocus
      }, true),
      mount,
      destroy,
      remount
    };
  }
  function Wheel(Splide2, Components2, options) {
    var _EventInterface12 = EventInterface(Splide2), bind = _EventInterface12.bind;
    var lastTime = 0;
    function mount() {
      if (options.wheel) {
        bind(Components2.Elements.track, "wheel", onWheel, SCROLL_LISTENER_OPTIONS);
      }
    }
    function onWheel(e2) {
      if (e2.cancelable) {
        var deltaY = e2.deltaY;
        var backwards = deltaY < 0;
        var timeStamp = timeOf(e2);
        var _min = options.wheelMinThreshold || 0;
        var sleep = options.wheelSleep || 0;
        if (abs(deltaY) > _min && timeStamp - lastTime > sleep) {
          Splide2.go(backwards ? "<" : ">");
          lastTime = timeStamp;
        }
        shouldPrevent(backwards) && prevent(e2);
      }
    }
    function shouldPrevent(backwards) {
      return !options.releaseWheel || Splide2.state.is(MOVING) || Components2.Controller.getAdjacent(backwards) !== -1;
    }
    return {
      mount
    };
  }
  var SR_REMOVAL_DELAY = 90;
  function Live(Splide2, Components2, options) {
    var _EventInterface13 = EventInterface(Splide2), on = _EventInterface13.on;
    var track = Components2.Elements.track;
    var enabled = options.live && !options.isNavigation;
    var sr = create("span", CLASS_SR);
    var interval = RequestInterval(SR_REMOVAL_DELAY, apply(toggle, false));
    function mount() {
      if (enabled) {
        disable(!Components2.Autoplay.isPaused());
        setAttribute(track, ARIA_ATOMIC, true);
        sr.textContent = "\u2026";
        on(EVENT_AUTOPLAY_PLAY, apply(disable, true));
        on(EVENT_AUTOPLAY_PAUSE, apply(disable, false));
        on([EVENT_MOVED, EVENT_SCROLLED], apply(toggle, true));
      }
    }
    function toggle(active) {
      setAttribute(track, ARIA_BUSY, active);
      if (active) {
        append(track, sr);
        interval.start();
      } else {
        remove(sr);
        interval.cancel();
      }
    }
    function destroy() {
      removeAttribute(track, [ARIA_LIVE, ARIA_ATOMIC, ARIA_BUSY]);
      remove(sr);
    }
    function disable(disabled) {
      if (enabled) {
        setAttribute(track, ARIA_LIVE, disabled ? "off" : "polite");
      }
    }
    return {
      mount,
      disable,
      destroy
    };
  }
  var ComponentConstructors = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Media,
    Direction,
    Elements,
    Slides,
    Layout,
    Clones,
    Move,
    Controller,
    Arrows,
    Autoplay,
    Cover,
    Scroll,
    Drag,
    Keyboard,
    LazyLoad,
    Pagination,
    Sync,
    Wheel,
    Live
  });
  var I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
    carousel: "carousel",
    slide: "slide",
    select: "Select a slide to show",
    slideLabel: "%s of %s"
  };
  var DEFAULTS = {
    type: "slide",
    role: "region",
    speed: 400,
    perPage: 1,
    cloneStatus: true,
    arrows: true,
    pagination: true,
    paginationKeyboard: true,
    interval: 5e3,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: true,
    direction: "ltr",
    trimSpace: true,
    focusableNodes: "a, button, textarea, input, select, iframe",
    live: true,
    classes: CLASSES,
    i18n: I18N,
    reducedMotion: {
      speed: 0,
      rewindSpeed: 0,
      autoplay: "pause"
    }
  };
  function Fade(Splide2, Components2, options) {
    var Slides2 = Components2.Slides;
    function mount() {
      EventInterface(Splide2).on([EVENT_MOUNTED, EVENT_REFRESH], init);
    }
    function init() {
      Slides2.forEach(function(Slide2) {
        Slide2.style("transform", "translateX(-" + 100 * Slide2.index + "%)");
      });
    }
    function start(index, done) {
      Slides2.style("transition", "opacity " + options.speed + "ms " + options.easing);
      nextTick(done);
    }
    return {
      mount,
      start,
      cancel: noop
    };
  }
  function Slide(Splide2, Components2, options) {
    var Move2 = Components2.Move, Controller2 = Components2.Controller, Scroll2 = Components2.Scroll;
    var list = Components2.Elements.list;
    var transition = apply(style, list, "transition");
    var endCallback;
    function mount() {
      EventInterface(Splide2).bind(list, "transitionend", function(e2) {
        if (e2.target === list && endCallback) {
          cancel();
          endCallback();
        }
      });
    }
    function start(index, done) {
      var destination = Move2.toPosition(index, true);
      var position = Move2.getPosition();
      var speed = getSpeed(index);
      if (abs(destination - position) >= 1 && speed >= 1) {
        if (options.useScroll) {
          Scroll2.scroll(destination, speed, false, done);
        } else {
          transition("transform " + speed + "ms " + options.easing);
          Move2.translate(destination, true);
          endCallback = done;
        }
      } else {
        Move2.jump(index);
        done();
      }
    }
    function cancel() {
      transition("");
      Scroll2.cancel();
    }
    function getSpeed(index) {
      var rewindSpeed = options.rewindSpeed;
      if (Splide2.is(SLIDE) && rewindSpeed) {
        var prev = Controller2.getIndex(true);
        var end = Controller2.getEnd();
        if (prev === 0 && index >= end || prev >= end && index === 0) {
          return rewindSpeed;
        }
      }
      return options.speed;
    }
    return {
      mount,
      start,
      cancel
    };
  }
  var _Splide = /* @__PURE__ */ function() {
    function _Splide2(target, options) {
      this.event = EventInterface();
      this.Components = {};
      this.state = State(CREATED);
      this.splides = [];
      this._o = {};
      this._E = {};
      var root = isString(target) ? query(document, target) : target;
      assert(root, root + " is invalid.");
      this.root = root;
      options = merge({
        label: getAttribute(root, ARIA_LABEL) || "",
        labelledby: getAttribute(root, ARIA_LABELLEDBY) || ""
      }, DEFAULTS, _Splide2.defaults, options || {});
      try {
        merge(options, JSON.parse(getAttribute(root, DATA_ATTRIBUTE)));
      } catch (e2) {
        assert(false, "Invalid JSON");
      }
      this._o = Object.create(merge({}, options));
    }
    var _proto = _Splide2.prototype;
    _proto.mount = function mount(Extensions, Transition) {
      var _this = this;
      var state = this.state, Components2 = this.Components;
      assert(state.is([CREATED, DESTROYED]), "Already mounted!");
      state.set(CREATED);
      this._C = Components2;
      this._T = Transition || this._T || (this.is(FADE) ? Fade : Slide);
      this._E = Extensions || this._E;
      var Constructors = assign({}, ComponentConstructors, this._E, {
        Transition: this._T
      });
      forOwn(Constructors, function(Component, key) {
        var component = Component(_this, Components2, _this._o);
        Components2[key] = component;
        component.setup && component.setup();
      });
      forOwn(Components2, function(component) {
        component.mount && component.mount();
      });
      this.emit(EVENT_MOUNTED);
      addClass(this.root, CLASS_INITIALIZED);
      state.set(IDLE);
      this.emit(EVENT_READY);
      return this;
    };
    _proto.sync = function sync(splide) {
      this.splides.push({
        splide
      });
      splide.splides.push({
        splide: this,
        isParent: true
      });
      if (this.state.is(IDLE)) {
        this._C.Sync.remount();
        splide.Components.Sync.remount();
      }
      return this;
    };
    _proto.go = function go(control) {
      this._C.Controller.go(control);
      return this;
    };
    _proto.on = function on(events, callback) {
      this.event.on(events, callback);
      return this;
    };
    _proto.off = function off(events) {
      this.event.off(events);
      return this;
    };
    _proto.emit = function emit(event) {
      var _this$event;
      (_this$event = this.event).emit.apply(_this$event, [event].concat(slice(arguments, 1)));
      return this;
    };
    _proto.add = function add(slides, index) {
      this._C.Slides.add(slides, index);
      return this;
    };
    _proto.remove = function remove2(matcher) {
      this._C.Slides.remove(matcher);
      return this;
    };
    _proto.is = function is(type) {
      return this._o.type === type;
    };
    _proto.refresh = function refresh() {
      this.emit(EVENT_REFRESH);
      return this;
    };
    _proto.destroy = function destroy(completely) {
      if (completely === void 0) {
        completely = true;
      }
      var event = this.event, state = this.state;
      if (state.is(CREATED)) {
        EventInterface(this).on(EVENT_READY, this.destroy.bind(this, completely));
      } else {
        forOwn(this._C, function(component) {
          component.destroy && component.destroy(completely);
        }, true);
        event.emit(EVENT_DESTROY);
        event.destroy();
        completely && empty(this.splides);
        state.set(DESTROYED);
      }
      return this;
    };
    _createClass(_Splide2, [{
      key: "options",
      get: function get() {
        return this._o;
      },
      set: function set(options) {
        this._C.Media.set(options, true, true);
      }
    }, {
      key: "length",
      get: function get() {
        return this._C.Slides.getLength(true);
      }
    }, {
      key: "index",
      get: function get() {
        return this._C.Controller.getIndex();
      }
    }]);
    return _Splide2;
  }();
  var Splide = _Splide;
  Splide.defaults = {};
  Splide.STATES = STATES;

  // src/utils/ApiClient.ts
  init_live_reload();

  // src/utils/buildQueryParams.ts
  init_live_reload();
  var buildQueryParams = (queryParams) => {
    let url = "?";
    for (const [key, value] of Object.entries(queryParams)) {
      if (value) {
        url += `${key}=${value}&`;
      }
    }
    return url;
  };

  // src/utils/constants.ts
  init_live_reload();
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
    lng: `[${prefix}=lng]`,
    lat: `[${prefix}=lat]`,
    size: `[${prefix}=size]`,
    rooms: `[${prefix}=rooms]`,
    bathrooms: `[${prefix}=bathrooms]`,
    equipmentsContainer: `[${prefix}=equipment-container]`,
    apartmentDetailsLink: `[${prefix}=apartment-details-link]`,
    categoryIcon: `[${prefix}=category-icon]`,
    priceContainer: `[${prefix}=price-container]`,
    filterCounter: `[${prefix}=filter-counter]`,
    filterClearButton: `[${prefix}=filter-clear]`,
    filterBedroomsAndBathroomsContainer: `[${prefix}=filter-bedrooms-and-bathrooms-container]`,
    filterPriceContainer: `[${prefix}=filter-price-container]`,
    filterCriteriaContainer: `[${prefix}=filter-criteria-container]`,
    filterQuartiersContainer: `[${prefix}=filter-quartiers-container]`,
    filterPriceStart: `[${prefix}=filter-price-start]`,
    filterPriceEnd: `[${prefix}=filter-price-end]`,
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
    apartmentsCount: `[${prefix}=apartments-count]`,
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
  var QUARTIERS = {
    "66be429e8b80d0978f75d7f4": {
      title: "Notre-Dame",
      name: "Notre-Dame"
    },
    "66be428147592414d57ee2ae": {
      title: "Tour-Eiffel",
      name: "Tour-Eiffel"
    },
    "66be427b81f052642a2a72a0": {
      title: "Champs-Elys\xE9es",
      name: "Champs-Elys\xE9es"
    },
    "66be427029ead3104dfc3def": {
      title: "Op\xE9ra",
      name: "Op\xE9ra"
    },
    "66be425f65fe693dbd8915e8": {
      title: "Louvre",
      name: "Louvre"
    },
    "66be3f2d058c4f343b60baec": {
      title: "Marais",
      name: "Marais"
    }
  };
  var COLLECTIONS = {
    "66be431025db7a22f1b91ece": {
      title: "Gastronomy",
      name: "Gastronomy"
    },
    "66be42e5d5cd3638dc7e97f3": {
      title: "Heritage",
      name: "Heritage"
    },
    "66be42da339835e65ff6fd45": {
      title: "Art & design",
      name: "Art & design"
    },
    "66be3f4c6bffae6d2da39a05": {
      title: "Fashion",
      name: "Fashion"
    }
  };
  var EQUIPMENTS = {
    "66be41db181294d1b4c44d08": {
      title: "Lit pour enfant",
      name: "Lit pour enfant"
    },
    "66be41d08336bfc87e35e710": {
      title: "Serviettes",
      name: "Serviettes"
    },
    "66be41bf081a9caa0c51a8c6": {
      title: "T\xE9l\xE9vision",
      name: "T\xE9l\xE9vision"
    },
    "66be41b435bb653451c33380": {
      title: "Peignoir",
      name: "Peignoir"
    },
    "66be41a44fd82f5bbcd9409d": {
      title: "Bouilloire",
      name: "Bouilloire"
    },
    "66be4195d9cef69683a9817d": {
      title: "Douche",
      name: "Douche"
    },
    "66be4187851dea8d35fe818e": {
      title: "Climatisation",
      name: "Climatisation"
    },
    "66be417774b76476c5230535": {
      title: "Lave-linge",
      name: "Lave-linge"
    }
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
  var GA_KEYS = {
    gaUser: "_ga",
    gaSession: "_ga_85N4KSG42G"
  };
  var FACEBOOK_KEYS = {
    fbclid: "fbclid",
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmCampaign: "utm_campaign"
  };
  var apiBaseUrl = "https://merveil-api.marketing-089.workers.dev/";
  var THUMBNAIL_KEYS = [
    "thumbnail-image-1",
    "thumbnail-image-2",
    "thumbnail-image-3",
    "thumbnail-image-4",
    "thumbnail-image-5",
    "thumbnail-image-6",
    "thumbnail-image-7",
    "thumbnail-image-8",
    "thumbnail-image-9",
    "thumbnail-image-10"
  ];
  var GOOGLE_MAPS_API_KEY = "AIzaSyD-uHCYhoVj0agYO-sIVV8Z_Ud6Ma_ivuo";
  var GOOGLE_MAPS_API_BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${GOOGLE_MAPS_API_KEY}&`;
  var MEWS_URL = "https://merveil-proxy-mews-af43e4e7acef.herokuapp.com/https://api.mews.com/api/distributor/v1/services/";
  var MEWS_AVAILABILITY_URL = `${MEWS_URL}getAvailability`;
  var MEWS_PRICING_URL = `${MEWS_URL}getPricing`;

  // src/utils/ApiClient.ts
  var ApiClient = class {
    /**
     *
     * @param queryParams to include as part of query for the request
     * @returns offers data for a group of apartments
     */
    async getGroupApartmentsData(queryParams) {
      const url = apiBaseUrl + "groupApartments" + buildQueryParams(queryParams);
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
     * @returns CMS apartment data
     */
    async getCMSApartments() {
      const url = apiBaseUrl + "allCmsApartments";
      const response = await fetch(url);
      const body = await response.json();
      if (!body.items)
        return null;
      body.items.forEach((apartment) => {
        apartment.fieldData.price = Math.max(50, Math.round(Math.random() * 35) * 10);
      });
      return body;
    }
    async updateApartment(apartment) {
      const url = apiBaseUrl + "updateApartment";
      const updatedFieldData = { ...apartment.fieldData };
      delete updatedFieldData.price;
      const updatedApartment = { ...apartment, fieldData: updatedFieldData };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedApartment)
      });
      if (!response.ok) {
        console.error("Failed to update apartment");
      }
    }
    /**
     *
     * @param address The address to get the latitude and longitude from
     * @returns The latitude and longitude of the address
     */
    static async getLatLongFromAddress(address) {
      try {
        const encodedAddress = encodeURIComponent(address);
        const url = GOOGLE_MAPS_API_BASE_URL + `address=${encodedAddress}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === "OK") {
          const { lat, lng } = data.results[0].geometry.location;
          return { lat, lng };
        }
        throw new Error(`Geocoding failed: ${data.status}`);
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  };

  // src/utils/utils.ts
  init_live_reload();
  var bindData = (scope, selector, data) => {
    const elements = scope.querySelectorAll(selector);
    elements.forEach((element) => {
      element.innerHTML = String(data);
    });
  };
  var getApartmentThumbnails = (apartment) => {
    const thumbnails = [];
    const keys = [...THUMBNAIL_KEYS];
    for (let i2 = 0; i2 <= keys.length; i2++) {
      const thumbnail = apartment.fieldData[keys[i2]];
      if (thumbnail) {
        thumbnails.push(thumbnail);
      }
    }
    return thumbnails;
  };
  var getCategories = () => {
    const tagList = document.querySelector(SELECTORS.tagList);
    const categories = {};
    if (tagList) {
      for (let i2 = 0; i2 < tagList.children.length; i2++) {
        const categoryEl = tagList.children[i2];
        const id = categoryEl.getAttribute("data-id");
        const name = categoryEl.querySelector(SELECTORS.name)?.textContent;
        const url = categoryEl.querySelector("img")?.getAttribute("src");
        const color = categoryEl.querySelector(SELECTORS.container)?.style.backgroundColor;
        const textColor = categoryEl.querySelector(SELECTORS.container)?.style.color;
        if (id && name && url && color && textColor) {
          categories[id] = {
            id,
            name,
            url,
            color,
            textColor
          };
        }
      }
    }
    return categories;
  };

  // src/utils/Apartments.ts
  var Apartments = class {
    /**
     *
     * @param listInstance  The list that the offers will be displayed in
     * @param itemTemplateElement The template element to create new items from
     * @param mapInstance The map instance
     */
    constructor(listInstance, itemTemplateElement, mapInstance) {
      this.listInstance = listInstance;
      this.itemTemplateElement = itemTemplateElement;
      this.mapInstance = mapInstance;
      /** The api client */
      this.apiClient = new ApiClient();
      /** Map to keep the splide instances */
      this.splideInstances = {};
      this.priceMap = null;
      this.openMapIcon = document.querySelector(SELECTORS.openMap);
      if (this.openMapIcon) {
        this.openMapIcon.addEventListener("click", () => {
          this.initializeMap();
        });
      }
      this.listInstance.on("renderitems", () => {
        this.initializeMap();
      });
      this.initializeMap();
    }
    /**
     * Initializes the map
     */
    initializeMap(priceMap) {
      if (priceMap) {
        this.priceMap = priceMap;
      }
      const mapItems = this.listInstance.validItems.map((item) => {
        const priceElement = item.element.querySelector(SELECTORS.price);
        const lngElement = item.element.querySelector(SELECTORS.lng);
        const latElement = item.element.querySelector(SELECTORS.lat);
        const categoryElement = item.element.querySelector(SELECTORS.categoryContainer);
        const priceContainer = item.element.querySelector(SELECTORS.priceContainer);
        const lng = lngElement ? parseFloat(lngElement.innerHTML) : 0;
        const lat = latElement ? parseFloat(latElement.innerHTML) : 0;
        const categoryTextColor = categoryElement ? categoryElement?.style.color : "white";
        const categoryColor = categoryElement ? categoryElement.style.backgroundColor : "";
        const mewsID = item.element.getAttribute("data-apartment-id");
        let price = "0";
        if (mewsID && this.priceMap && this.priceMap[mewsID]) {
          price = `${this.priceMap[mewsID]}`;
          if (priceContainer) {
            priceContainer.classList.remove("hide");
            priceContainer.classList.add("show-inline-flex");
          }
        }
        const apartmentDetailsLink = item.element.querySelector(SELECTORS.apartmentDetailsLink);
        if (apartmentDetailsLink) {
          const urlParams = new URLSearchParams(window.location.search);
          const queryString = decodeURIComponent(urlParams.toString());
          const apartmentDetailURL = new URL(apartmentDetailsLink.href);
          apartmentDetailURL.search = queryString;
          apartmentDetailsLink.href = `${apartmentDetailURL.pathname}${apartmentDetailURL.search}`;
        }
        if (priceElement && priceElement.textContent === "0") {
          priceElement.innerHTML = price;
        }
        console.log("price", this.priceMap ? `${price}\u20AC` : "");
        return {
          color: `${categoryColor}`,
          textColor: `${categoryTextColor}`,
          lat,
          lng,
          price: this.priceMap ? `${price}\u20AC` : ""
        };
      });
      this.mapInstance.initializeMap(mapItems);
    }
    /**
     * Fetches the apartments data from the CMS
     */
    async getApartmentsData() {
      const apartmentsResponse = await this.apiClient.getCMSApartments();
      if (!apartmentsResponse)
        return;
      apartmentsResponse.items.sort((a, b) => (a.fieldData?.order || Number.MAX_VALUE) - (b.fieldData?.order || Number.MAX_VALUE));
      const apartments = apartmentsResponse.items.filter((item) => !item.isArchived && !item.isDraft);
      const listItems = [];
      const categories = getCategories();
      for (const apartment of apartments) {
        await this.updateApartmentsData(apartment);
        listItems.push(this.createApartmentItem(apartment, categories));
      }
      this.listInstance.clearItems();
      this.listInstance.addItems(listItems);
    }
    /**
     * Updates the apartment data
     * @param item The apartment to update
     */
    async updateApartmentsData(item) {
      if (item.fieldData.address && (!item.fieldData.lat || !item.fieldData.lng)) {
        const geoCodeResponse = await ApiClient.getLatLongFromAddress(item.fieldData.address);
        if (geoCodeResponse) {
          item.fieldData.lat = geoCodeResponse.lat.toString();
          item.fieldData.lng = geoCodeResponse.lng.toString();
          await this.apiClient.updateApartment(item);
        }
      }
    }
    /**
     * Creates a new apartment item from the template element
     * @param apartment The apartment CMS apartment data
     * @param categories The categories data from the CMS - rendered as hidden list
     * @returns The new apartment item
     */
    createApartmentItem(apartment, categories) {
      const newItem = this.itemTemplateElement.cloneNode(true);
      const {
        name,
        "new-quartiers": neighborhood,
        category,
        collection,
        price,
        "number-persons": numberOfPeople,
        "number-size": size,
        "number-beds": rooms,
        "number-bathrooms": bathrooms,
        "equipment-and-services": equipmentsAndServices,
        slug,
        lng,
        lat
      } = apartment.fieldData;
      const apartmentDetailsLink = newItem.querySelector(SELECTORS.apartmentDetailsLink);
      if (apartmentDetailsLink) {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.delete("city_name");
        urlParams.delete("city_id");
        const queryString = decodeURIComponent(urlParams.toString());
        apartmentDetailsLink.href = `/appartements/${slug}?${queryString}`;
      }
      newItem.setAttribute("data-price", price + "\u20AC");
      newItem.setAttribute("data-lat", lat);
      newItem.setAttribute("data-lng", lng);
      const thumbnails = getApartmentThumbnails(apartment);
      this.setupSliders(apartment.id, thumbnails, newItem);
      const itemCategory = categories[category];
      if (itemCategory) {
        newItem.setAttribute("data-category-color", itemCategory.color);
        newItem.setAttribute("data-category-text-color", itemCategory.textColor);
        const categoryContainer = newItem.querySelector(SELECTORS.categoryContainer);
        if (categoryContainer) {
          categoryContainer.style.backgroundColor = itemCategory.color;
          categoryContainer.style.color = itemCategory.textColor;
          bindData(categoryContainer, SELECTORS.category, itemCategory.name);
          const icon = categoryContainer.querySelector(SELECTORS.categoryIcon);
          if (icon) {
            icon.src = itemCategory.url;
          }
        }
      }
      if (equipmentsAndServices) {
        const equipmentsContainer = newItem.querySelector(SELECTORS.equipmentsContainer);
        if (equipmentsContainer) {
          equipmentsContainer.innerHTML = "";
          equipmentsAndServices.forEach((equipment) => {
            const equipmentElement = document.createElement("span");
            equipmentElement.setAttribute("fs-cmsfilter-field", "equipments");
            equipmentElement.innerHTML = EQUIPMENTS[equipment]?.name;
            equipmentsContainer.appendChild(equipmentElement);
          });
        }
      }
      const collections = COLLECTIONS[collection];
      if (collections) {
        bindData(newItem, SELECTORS.collection, collections.name);
      }
      bindData(newItem, SELECTORS.name, name);
      bindData(newItem, SELECTORS.noOfPeople, numberOfPeople);
      bindData(newItem, SELECTORS.size, size);
      bindData(newItem, SELECTORS.rooms, rooms);
      bindData(newItem, SELECTORS.bathrooms, bathrooms);
      if (neighborhood && neighborhood.length) {
        const quartiers = QUARTIERS[neighborhood[0]];
        bindData(newItem, SELECTORS.neighborhood, quartiers.name);
      }
      bindData(newItem, SELECTORS.price, price?.toString() ?? "");
      return newItem;
    }
    /**
     * Sets up the sliders for the apartments
     */
    setupSliders(apartmentCMSID, thumbnails, newItem) {
      if (!thumbnails.length)
        return;
      const sliderContainer = newItem.querySelector(SELECTORS.sliderContainer);
      if (!sliderContainer)
        return;
      sliderContainer.classList.add("splide");
      const firstItem = document.createElement("div");
      firstItem.classList.add("apartments-slider_slide");
      const image = document.createElement("img");
      image.style.height = "100%";
      firstItem.appendChild(image);
      sliderContainer.innerHTML = "";
      const track = document.createElement("div");
      track.classList.add("splide__track");
      sliderContainer.appendChild(track);
      const list = document.createElement("ul");
      list.classList.add("splide__list");
      for (const thumbnail of thumbnails) {
        const listItem = document.createElement("li");
        listItem.classList.add("splide__slide");
        const newItem2 = firstItem.cloneNode(true);
        newItem2.classList.remove("w-slide");
        const img = newItem2.querySelector("img");
        if (img) {
          img.setAttribute("data-src", thumbnail.url);
          img.src = thumbnail.url;
          img.srcset = thumbnail.url;
        }
        listItem.appendChild(newItem2);
        list.appendChild(listItem);
      }
      track.appendChild(list);
      this.setupSplider(apartmentCMSID, sliderContainer, thumbnails.length);
    }
    /**
     * Sets up the lazy loading for the images
     * @param cmsID The CMS ID of the apartment
     * @param img The image to lazy load
     */
    setupLazyLoad(cmsID, img) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img2 = entry.target;
            img2.src = img2.getAttribute("data-src") ?? "";
            observer.unobserve(img2);
            if (this.splideInstances[cmsID]) {
              this.splideInstances[cmsID].mount();
              delete this.splideInstances[cmsID];
            }
          }
        });
      });
      observer.observe(img);
    }
    /**
     * Sets up the Splide slider for the apartment.
     * @param element The element to setup the slider on
     * @param length The number of items in the slider
     */
    setupSplider(apartmentCMSID, element, length) {
      const splide = new Splide(element, {
        type: "loop",
        drag: length > 1,
        pagination: false,
        arrows: false
      });
      const leftArrow = element.parentElement?.querySelector(".apartments-slider_arrow.w-slider-arrow-left");
      if (leftArrow) {
        if (length <= 1) {
          leftArrow.style.display = "none";
        } else
          leftArrow.addEventListener("click", () => {
            splide.go("<");
          });
      }
      const rightArrow = element.parentElement?.querySelector(".apartments-slider_arrow.w-slider-arrow-right");
      if (rightArrow) {
        if (length <= 1) {
          rightArrow.style.display = "none";
        } else
          rightArrow.addEventListener("click", () => {
            splide.go(">");
          });
      }
      this.splideInstances[apartmentCMSID] = splide;
      this.splideInstances[apartmentCMSID].mount();
    }
  };

  // src/utils/BookingHandler.ts
  init_live_reload();
  var import_intl_tel_input = __toESM(require_intl_tel_input(), 1);

  // src/utils/constructUrl.ts
  init_live_reload();
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
  init_live_reload();
  var convertDateFormat = (dateString) => {
    if (!dateString)
      return;
    const datePattern = /^\d{2}\/\d{2}\/\d{2}$/;
    if (!datePattern.test(dateString)) {
      return void 0;
    }
    return dateString;
  };

  // src/utils/displayElement.ts
  init_live_reload();
  var displayElement = (element, shouldShow) => {
    if (element) {
      if (shouldShow) {
        element.removeAttribute("data-hidden");
      } else {
        element.setAttribute("data-hidden", "true");
      }
    }
  };

  // src/utils/getBookingUrl.ts
  init_live_reload();
  var getBookingUrl = async (queryString) => {
    try {
      const response = await fetch(apiBaseUrl + "/booking" + queryString);
      const data = await response.json();
      return data;
    } catch (error) {
    }
  };

  // src/utils/getCookieValue.ts
  init_live_reload();
  var getCookieValue = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2)
      return parts.pop()?.split(";")?.shift();
  };

  // src/utils/parseUrlParams.ts
  init_live_reload();
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

  // src/utils/BookingHandler.ts
  var BookingHandler = class {
    constructor() {
      this.formModal = document.querySelector(SELECTORS.bookingModal);
      this.formElement = document.querySelector(SELECTORS.bookingForm);
      this.bookingLoader = document.querySelector(SELECTORS.bookingLoader);
      this.bookingLoaderText = document.querySelector(SELECTORS.bookingLoaderText);
      this.searchLoader = document.querySelector(SELECTORS.searchLoader);
      this.closeBookingElement = document.querySelector(SELECTORS.bookingClose);
      this.closeBookingElement.addEventListener("click", () => {
        this.closeBookingModal();
      });
      const countryCodeInput = document.querySelector(SELECTORS.countryCode);
      this.iti = (0, import_intl_tel_input.default)(countryCodeInput);
    }
    closeBookingModal() {
      displayElement(this.formModal, false);
    }
    async handleReserve(e2) {
      e2.preventDefault();
      e2.stopPropagation();
      const bookingSyncId = (e2.currentTarget || e2.target).getAttribute("bookingsync_id");
      const totalPrice = (e2.currentTarget || e2.target).getAttribute("price");
      const rateName = (e2.currentTarget || e2.target).getAttribute("rateName");
      if (!bookingSyncId || !totalPrice || !rateName)
        return;
      displayElement(this.formModal, true);
      this.formElement.setAttribute("bookingsync_id", bookingSyncId);
      this.formElement.setAttribute("price", totalPrice);
      this.formElement.setAttribute("rateName", rateName);
      this.formElement.addEventListener("submit", async (e3) => {
        await this.handleBookingSubmit(e3);
      });
    }
    async handleBookingSubmit(e2) {
      e2.preventDefault();
      e2.stopPropagation();
      const bookingSyncId = e2.currentTarget.getAttribute("bookingsync_id");
      const bookingPrice = e2.currentTarget.getAttribute("price");
      const bookingRateName = e2.currentTarget.getAttribute("rateName");
      const bookingFormData = new FormData(e2.currentTarget);
      const bookingFirstName = bookingFormData.get("be-nom");
      const bookingLastName = bookingFormData.get("be-prenom");
      const bookingEmail = bookingFormData.get("be-email");
      const countryCodeData = this.iti.getSelectedCountryData();
      const bookingCountry = countryCodeData.dialCode;
      const bookingPhone = bookingFormData.get("be-phone");
      const bookingPhoneNumber = bookingCountry + bookingPhone;
      const ga_user = getCookieValue(GA_KEYS.gaUser);
      const ga_session = getCookieValue(GA_KEYS.gaSession);
      const fbclid = localStorage.getItem(FACEBOOK_KEYS.fbclid);
      const utmSource = localStorage.getItem(FACEBOOK_KEYS.utmSource);
      const utmMedium = localStorage.getItem(FACEBOOK_KEYS.utmMedium);
      const utmCampaign = localStorage.getItem(FACEBOOK_KEYS.utmCampaign);
      try {
        displayElement(this.bookingLoader, true);
        displayElement(this.searchLoader, true);
        const parsedUrlParams = parseUrlParams();
        if (!parsedUrlParams || !parsedUrlParams.checkinDate || !parsedUrlParams.checkoutDate) {
          throw new Error("Something went wrong");
        }
        const parsedBookingParams = {
          checkin_date: convertDateFormat(parsedUrlParams.checkinDate),
          checkout_date: convertDateFormat(parsedUrlParams.checkoutDate),
          nb_adults: parsedUrlParams.nbAdults.toString(),
          nb_children: parsedUrlParams.nbChildren.toString(),
          nb_babies: parsedUrlParams.nbBabies.toString(),
          bookingsync_apt_id: bookingSyncId,
          price: bookingPrice,
          rate_name: bookingRateName,
          first_name: bookingFirstName,
          last_name: bookingLastName,
          email_address: bookingEmail,
          phone_number: bookingPhoneNumber,
          ga_user,
          ga_session,
          utm_source: utmSource,
          utm_medium: utmMedium,
          utm_campaign: utmCampaign,
          fbclid
        };
        const bookingQueryUrl = constructUrl(parsedBookingParams);
        if (!bookingSyncId) {
          throw new Error("Something went wrong");
        }
        const bookingResponse = await getBookingUrl(bookingQueryUrl);
        if (!bookingResponse || bookingResponse.errors) {
          this.bookingLoaderText.textContent = "Something went wrong. Please try again later.";
          return;
        }
        window.location.replace(bookingResponse.payment_url);
      } catch (error) {
        this.bookingLoaderText.textContent = error.message;
      }
    }
  };

  // src/utils/initDatePicker.ts
  init_live_reload();

  // ../../node_modules/.pnpm/@easepick+bundle@1.2.1/node_modules/@easepick/bundle/dist/index.esm.js
  init_live_reload();
  var t = class _t extends Date {
    static parseDateTime(e2, i2 = "YYYY-MM-DD", n2 = "en-US") {
      if (!e2)
        return new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
      if (e2 instanceof _t)
        return e2.toJSDate();
      if (e2 instanceof Date)
        return e2;
      if (/^-?\d{10,}$/.test(String(e2)))
        return new Date(Number(e2));
      if ("string" == typeof e2) {
        const s2 = [];
        let o = null;
        for (; null != (o = _t.regex.exec(i2)); )
          "\\" !== o[1] && s2.push(o);
        if (s2.length) {
          const i3 = { year: null, month: null, shortMonth: null, longMonth: null, day: null, hour: 0, minute: 0, second: 0, ampm: null, value: "" };
          s2[0].index > 0 && (i3.value += ".*?");
          for (const [e3, o3] of Object.entries(s2)) {
            const s3 = Number(e3), { group: a, pattern: r } = _t.formatPatterns(o3[0], n2);
            i3[a] = s3 + 1, i3.value += r, i3.value += ".*?";
          }
          const o2 = new RegExp(`^${i3.value}$`);
          if (o2.test(e2)) {
            const s3 = o2.exec(e2), a = Number(s3[i3.year]);
            let r = null;
            i3.month ? r = Number(s3[i3.month]) - 1 : i3.shortMonth ? r = _t.shortMonths(n2).indexOf(s3[i3.shortMonth]) : i3.longMonth && (r = _t.longMonths(n2).indexOf(s3[i3.longMonth]));
            const c = Number(s3[i3.day]) || 1, l = Number(s3[i3.hour]);
            let h = Number.isNaN(l) ? 0 : l;
            const d = Number(s3[i3.minute]), p = Number.isNaN(d) ? 0 : d, u = Number(s3[i3.second]), g = Number.isNaN(u) ? 0 : u, m = s3[i3.ampm];
            return m && "PM" === m && (h += 12, 24 === h && (h = 0)), new Date(a, r, c, h, p, g, 0);
          }
        }
      }
      return new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
    }
    static regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|A|a)/g;
    static MONTH_JS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    static shortMonths(e2) {
      return _t.MONTH_JS.map((t2) => new Date(2019, t2).toLocaleString(e2, { month: "short" }));
    }
    static longMonths(e2) {
      return _t.MONTH_JS.map((t2) => new Date(2019, t2).toLocaleString(e2, { month: "long" }));
    }
    static formatPatterns(e2, i2) {
      switch (e2) {
        case "YY":
        case "YYYY":
          return { group: "year", pattern: `(\\d{${e2.length}})` };
        case "M":
          return { group: "month", pattern: "(\\d{1,2})" };
        case "MM":
          return { group: "month", pattern: "(\\d{2})" };
        case "MMM":
          return { group: "shortMonth", pattern: `(${_t.shortMonths(i2).join("|")})` };
        case "MMMM":
          return { group: "longMonth", pattern: `(${_t.longMonths(i2).join("|")})` };
        case "D":
          return { group: "day", pattern: "(\\d{1,2})" };
        case "DD":
          return { group: "day", pattern: "(\\d{2})" };
        case "h":
        case "H":
          return { group: "hour", pattern: "(\\d{1,2})" };
        case "hh":
        case "HH":
          return { group: "hour", pattern: "(\\d{2})" };
        case "m":
          return { group: "minute", pattern: "(\\d{1,2})" };
        case "mm":
          return { group: "minute", pattern: "(\\d{2})" };
        case "s":
          return { group: "second", pattern: "(\\d{1,2})" };
        case "ss":
          return { group: "second", pattern: "(\\d{2})" };
        case "a":
        case "A":
          return { group: "ampm", pattern: "(AM|PM|am|pm)" };
      }
    }
    lang;
    constructor(e2 = null, i2 = "YYYY-MM-DD", n2 = "en-US") {
      super(_t.parseDateTime(e2, i2, n2)), this.lang = n2;
    }
    getWeek(t2) {
      const e2 = new Date(this.midnight_ts(this)), i2 = (this.getDay() + (7 - t2)) % 7;
      e2.setDate(e2.getDate() - i2);
      const n2 = e2.getTime();
      return e2.setMonth(0, 1), e2.getDay() !== t2 && e2.setMonth(0, 1 + (4 - e2.getDay() + 7) % 7), 1 + Math.ceil((n2 - e2.getTime()) / 6048e5);
    }
    clone() {
      return new _t(this);
    }
    toJSDate() {
      return new Date(this);
    }
    inArray(t2, e2 = "[]") {
      return t2.some((t3) => t3 instanceof Array ? this.isBetween(t3[0], t3[1], e2) : this.isSame(t3, "day"));
    }
    isBetween(t2, e2, i2 = "()") {
      switch (i2) {
        default:
        case "()":
          return this.midnight_ts(this) > this.midnight_ts(t2) && this.midnight_ts(this) < this.midnight_ts(e2);
        case "[)":
          return this.midnight_ts(this) >= this.midnight_ts(t2) && this.midnight_ts(this) < this.midnight_ts(e2);
        case "(]":
          return this.midnight_ts(this) > this.midnight_ts(t2) && this.midnight_ts(this) <= this.midnight_ts(e2);
        case "[]":
          return this.midnight_ts() >= this.midnight_ts(t2) && this.midnight_ts() <= this.midnight_ts(e2);
      }
    }
    isBefore(t2, e2 = "days") {
      switch (e2) {
        case "day":
        case "days":
          return new Date(t2.getFullYear(), t2.getMonth(), t2.getDate()).getTime() > new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
        case "month":
        case "months":
          return new Date(t2.getFullYear(), t2.getMonth(), 1).getTime() > new Date(this.getFullYear(), this.getMonth(), 1).getTime();
        case "year":
        case "years":
          return t2.getFullYear() > this.getFullYear();
      }
      throw new Error("isBefore: Invalid unit!");
    }
    isSameOrBefore(t2, e2 = "days") {
      switch (e2) {
        case "day":
        case "days":
          return new Date(t2.getFullYear(), t2.getMonth(), t2.getDate()).getTime() >= new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
        case "month":
        case "months":
          return new Date(t2.getFullYear(), t2.getMonth(), 1).getTime() >= new Date(this.getFullYear(), this.getMonth(), 1).getTime();
      }
      throw new Error("isSameOrBefore: Invalid unit!");
    }
    isAfter(t2, e2 = "days") {
      switch (e2) {
        case "day":
        case "days":
          return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() > new Date(t2.getFullYear(), t2.getMonth(), t2.getDate()).getTime();
        case "month":
        case "months":
          return new Date(this.getFullYear(), this.getMonth(), 1).getTime() > new Date(t2.getFullYear(), t2.getMonth(), 1).getTime();
        case "year":
        case "years":
          return this.getFullYear() > t2.getFullYear();
      }
      throw new Error("isAfter: Invalid unit!");
    }
    isSameOrAfter(t2, e2 = "days") {
      switch (e2) {
        case "day":
        case "days":
          return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() >= new Date(t2.getFullYear(), t2.getMonth(), t2.getDate()).getTime();
        case "month":
        case "months":
          return new Date(this.getFullYear(), this.getMonth(), 1).getTime() >= new Date(t2.getFullYear(), t2.getMonth(), 1).getTime();
      }
      throw new Error("isSameOrAfter: Invalid unit!");
    }
    isSame(t2, e2 = "days") {
      switch (e2) {
        case "day":
        case "days":
          return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() === new Date(t2.getFullYear(), t2.getMonth(), t2.getDate()).getTime();
        case "month":
        case "months":
          return new Date(this.getFullYear(), this.getMonth(), 1).getTime() === new Date(t2.getFullYear(), t2.getMonth(), 1).getTime();
      }
      throw new Error("isSame: Invalid unit!");
    }
    add(t2, e2 = "days") {
      switch (e2) {
        case "day":
        case "days":
          this.setDate(this.getDate() + t2);
          break;
        case "month":
        case "months":
          this.setMonth(this.getMonth() + t2);
      }
      return this;
    }
    subtract(t2, e2 = "days") {
      switch (e2) {
        case "day":
        case "days":
          this.setDate(this.getDate() - t2);
          break;
        case "month":
        case "months":
          this.setMonth(this.getMonth() - t2);
      }
      return this;
    }
    diff(t2, e2 = "days") {
      switch (e2) {
        default:
        case "day":
        case "days":
          return Math.round((this.midnight_ts() - this.midnight_ts(t2)) / 864e5);
        case "month":
        case "months":
          let e3 = 12 * (t2.getFullYear() - this.getFullYear());
          return e3 -= t2.getMonth(), e3 += this.getMonth(), e3;
      }
    }
    format(e2, i2 = "en-US") {
      let n2 = "";
      const s2 = [];
      let o = null;
      for (; null != (o = _t.regex.exec(e2)); )
        "\\" !== o[1] && s2.push(o);
      if (s2.length) {
        s2[0].index > 0 && (n2 += e2.substring(0, s2[0].index));
        for (const [t2, o2] of Object.entries(s2)) {
          const a = Number(t2);
          n2 += this.formatTokens(o2[0], i2), s2[a + 1] && (n2 += e2.substring(o2.index + o2[0].length, s2[a + 1].index)), a === s2.length - 1 && (n2 += e2.substring(o2.index + o2[0].length));
        }
      }
      return n2.replace(/\\/g, "");
    }
    midnight_ts(t2) {
      return t2 ? new Date(t2.getFullYear(), t2.getMonth(), t2.getDate(), 0, 0, 0, 0).getTime() : new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime();
    }
    formatTokens(e2, i2) {
      switch (e2) {
        case "YY":
          return String(this.getFullYear()).slice(-2);
        case "YYYY":
          return String(this.getFullYear());
        case "M":
          return String(this.getMonth() + 1);
        case "MM":
          return `0${this.getMonth() + 1}`.slice(-2);
        case "MMM":
          return _t.shortMonths(i2)[this.getMonth()];
        case "MMMM":
          return _t.longMonths(i2)[this.getMonth()];
        case "D":
          return String(this.getDate());
        case "DD":
          return `0${this.getDate()}`.slice(-2);
        case "H":
          return String(this.getHours());
        case "HH":
          return `0${this.getHours()}`.slice(-2);
        case "h":
          return String(this.getHours() % 12 || 12);
        case "hh":
          return `0${this.getHours() % 12 || 12}`.slice(-2);
        case "m":
          return String(this.getMinutes());
        case "mm":
          return `0${this.getMinutes()}`.slice(-2);
        case "s":
          return String(this.getSeconds());
        case "ss":
          return `0${this.getSeconds()}`.slice(-2);
        case "a":
          return this.getHours() < 12 || 24 === this.getHours() ? "am" : "pm";
        case "A":
          return this.getHours() < 12 || 24 === this.getHours() ? "AM" : "PM";
        default:
          return "";
      }
    }
  };
  var e = class {
    picker;
    constructor(t2) {
      this.picker = t2;
    }
    render(e2, i2) {
      e2 || (e2 = new t()), e2.setDate(1), e2.setHours(0, 0, 0, 0), "function" == typeof this[`get${i2}View`] && this[`get${i2}View`](e2);
    }
    getContainerView(t2) {
      this.picker.ui.container.innerHTML = "", this.picker.options.header && this.picker.trigger("render", { date: t2.clone(), view: "Header" }), this.picker.trigger("render", { date: t2.clone(), view: "Main" }), this.picker.options.autoApply || this.picker.trigger("render", { date: t2.clone(), view: "Footer" });
    }
    getHeaderView(t2) {
      const e2 = document.createElement("header");
      this.picker.options.header instanceof HTMLElement && e2.appendChild(this.picker.options.header), "string" == typeof this.picker.options.header && (e2.innerHTML = this.picker.options.header), this.picker.ui.container.appendChild(e2), this.picker.trigger("view", { target: e2, date: t2.clone(), view: "Header" });
    }
    getMainView(t2) {
      const e2 = document.createElement("main");
      this.picker.ui.container.appendChild(e2);
      const i2 = document.createElement("div");
      i2.className = `calendars grid-${this.picker.options.grid}`;
      for (let e3 = 0; e3 < this.picker.options.calendars; e3++) {
        const n2 = document.createElement("div");
        n2.className = "calendar", i2.appendChild(n2);
        const s2 = this.getCalendarHeaderView(t2.clone());
        n2.appendChild(s2), this.picker.trigger("view", { date: t2.clone(), view: "CalendarHeader", index: e3, target: s2 });
        const o = this.getCalendarDayNamesView();
        n2.appendChild(o), this.picker.trigger("view", { date: t2.clone(), view: "CalendarDayNames", index: e3, target: o });
        const a = this.getCalendarDaysView(t2.clone());
        n2.appendChild(a), this.picker.trigger("view", { date: t2.clone(), view: "CalendarDays", index: e3, target: a });
        const r = this.getCalendarFooterView(this.picker.options.lang, t2.clone());
        n2.appendChild(r), this.picker.trigger("view", { date: t2.clone(), view: "CalendarFooter", index: e3, target: r }), this.picker.trigger("view", { date: t2.clone(), view: "CalendarItem", index: e3, target: n2 }), t2.add(1, "month");
      }
      e2.appendChild(i2), this.picker.trigger("view", { date: t2.clone(), view: "Calendars", target: i2 }), this.picker.trigger("view", { date: t2.clone(), view: "Main", target: e2 });
    }
    getFooterView(t2) {
      const e2 = document.createElement("footer"), i2 = document.createElement("div");
      i2.className = "footer-buttons";
      const n2 = document.createElement("button");
      n2.className = "cancel-button unit", n2.innerHTML = this.picker.options.locale.cancel, i2.appendChild(n2);
      const s2 = document.createElement("button");
      s2.className = "apply-button unit", s2.innerHTML = this.picker.options.locale.apply, s2.disabled = true, i2.appendChild(s2), e2.appendChild(i2), this.picker.ui.container.appendChild(e2), this.picker.trigger("view", { date: t2, target: e2, view: "Footer" });
    }
    getCalendarHeaderView(t2) {
      const e2 = document.createElement("div");
      e2.className = "header";
      const i2 = document.createElement("div");
      i2.className = "month-name", i2.innerHTML = `<span>${t2.toLocaleString(this.picker.options.lang, { month: "long" })}</span> ${t2.format("YYYY")}`, e2.appendChild(i2);
      const n2 = document.createElement("button");
      n2.className = "previous-button unit", n2.innerHTML = this.picker.options.locale.previousMonth, e2.appendChild(n2);
      const s2 = document.createElement("button");
      return s2.className = "next-button unit", s2.innerHTML = this.picker.options.locale.nextMonth, e2.appendChild(s2), e2;
    }
    getCalendarDayNamesView() {
      const t2 = document.createElement("div");
      t2.className = "daynames-row";
      for (let e2 = 1; e2 <= 7; e2++) {
        const i2 = 3 + this.picker.options.firstDay + e2, n2 = document.createElement("div");
        n2.className = "dayname", n2.innerHTML = new Date(1970, 0, i2, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, { weekday: "short" }), n2.title = new Date(1970, 0, i2, 12, 0, 0, 0).toLocaleString(this.picker.options.lang, { weekday: "long" }), t2.appendChild(n2), this.picker.trigger("view", { dayIdx: i2, view: "CalendarDayName", target: n2 });
      }
      return t2;
    }
    getCalendarDaysView(t2) {
      const e2 = document.createElement("div");
      e2.className = "days-grid";
      const i2 = this.calcOffsetDays(t2, this.picker.options.firstDay), n2 = 32 - new Date(t2.getFullYear(), t2.getMonth(), 32).getDate();
      for (let t3 = 0; t3 < i2; t3++) {
        const t4 = document.createElement("div");
        t4.className = "offset", e2.appendChild(t4);
      }
      for (let i3 = 1; i3 <= n2; i3++) {
        t2.setDate(i3);
        const n3 = this.getCalendarDayView(t2);
        e2.appendChild(n3), this.picker.trigger("view", { date: t2, view: "CalendarDay", target: n3 });
      }
      return e2;
    }
    getCalendarDayView(e2) {
      const i2 = this.picker.options.date ? new t(this.picker.options.date) : null, n2 = new t(), s2 = document.createElement("div");
      return s2.className = "day unit", s2.innerHTML = e2.format("D"), s2.dataset.time = String(e2.getTime()), e2.isSame(n2, "day") && s2.classList.add("today"), [0, 6].includes(e2.getDay()) && s2.classList.add("weekend"), this.picker.datePicked.length ? this.picker.datePicked[0].isSame(e2, "day") && s2.classList.add("selected") : i2 && e2.isSame(i2, "day") && s2.classList.add("selected"), this.picker.trigger("view", { date: e2, view: "CalendarDay", target: s2 }), s2;
    }
    getCalendarFooterView(t2, e2) {
      const i2 = document.createElement("div");
      return i2.className = "footer", i2;
    }
    calcOffsetDays(t2, e2) {
      let i2 = t2.getDay() - e2;
      return i2 < 0 && (i2 += 7), i2;
    }
  };
  var i = class {
    picker;
    instances = {};
    constructor(t2) {
      this.picker = t2;
    }
    initialize() {
      const t2 = [];
      this.picker.options.plugins.forEach((e2) => {
        "function" == typeof e2 ? t2.push(new e2()) : "string" == typeof e2 && "undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, e2) ? t2.push(new easepick[e2]()) : console.warn(`easepick: ${e2} not found.`);
      }), t2.sort((t3, e2) => t3.priority > e2.priority ? -1 : t3.priority < e2.priority || t3.dependencies.length > e2.dependencies.length ? 1 : t3.dependencies.length < e2.dependencies.length ? -1 : 0), t2.forEach((t3) => {
        t3.attach(this.picker), this.instances[t3.getName()] = t3;
      });
    }
    getInstance(t2) {
      return this.instances[t2];
    }
    addInstance(t2) {
      if (Object.prototype.hasOwnProperty.call(this.instances, t2))
        console.warn(`easepick: ${t2} already added.`);
      else {
        if ("undefined" != typeof easepick && Object.prototype.hasOwnProperty.call(easepick, t2)) {
          const e2 = new easepick[t2]();
          return e2.attach(this.picker), this.instances[e2.getName()] = e2, e2;
        }
        if ("undefined" !== this.getPluginFn(t2)) {
          const e2 = new (this.getPluginFn(t2))();
          return e2.attach(this.picker), this.instances[e2.getName()] = e2, e2;
        }
        console.warn(`easepick: ${t2} not found.`);
      }
      return null;
    }
    removeInstance(t2) {
      return t2 in this.instances && this.instances[t2].detach(), delete this.instances[t2];
    }
    reloadInstance(t2) {
      return this.removeInstance(t2), this.addInstance(t2);
    }
    getPluginFn(t2) {
      return [...this.picker.options.plugins].filter((e2) => "function" == typeof e2 && new e2().getName() === t2).shift();
    }
  };
  var n = class {
    Calendar = new e(this);
    PluginManager = new i(this);
    calendars = [];
    datePicked = [];
    cssLoaded = 0;
    binds = { hidePicker: this.hidePicker.bind(this), show: this.show.bind(this) };
    options = { doc: document, css: [], element: null, firstDay: 1, grid: 1, calendars: 1, lang: "en-US", date: null, format: "YYYY-MM-DD", readonly: true, autoApply: true, header: false, inline: false, scrollToDate: true, locale: { nextMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>', previousMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>', cancel: "Cancel", apply: "Apply" }, documentClick: this.binds.hidePicker, plugins: [] };
    ui = { container: null, shadowRoot: null, wrapper: null };
    version = "1.2.1";
    constructor(t2) {
      const e2 = { ...this.options.locale, ...t2.locale };
      this.options = { ...this.options, ...t2 }, this.options.locale = e2, this.handleOptions(), this.ui.wrapper = document.createElement("span"), this.ui.wrapper.style.display = "none", this.ui.wrapper.style.position = "absolute", this.ui.wrapper.style.pointerEvents = "none", this.ui.wrapper.className = "easepick-wrapper", this.ui.wrapper.attachShadow({ mode: "open" }), this.ui.shadowRoot = this.ui.wrapper.shadowRoot, this.ui.container = document.createElement("div"), this.ui.container.className = "container", this.options.zIndex && (this.ui.container.style.zIndex = String(this.options.zIndex)), this.options.inline && (this.ui.wrapper.style.position = "relative", this.ui.container.classList.add("inline")), this.ui.shadowRoot.appendChild(this.ui.container), this.options.element.after(this.ui.wrapper), this.handleCSS(), this.options.element.addEventListener("click", this.binds.show), this.on("view", this.onView.bind(this)), this.on("render", this.onRender.bind(this)), this.PluginManager.initialize(), this.parseValues(), "function" == typeof this.options.setup && this.options.setup(this), this.on("click", this.onClick.bind(this));
      const i2 = this.options.scrollToDate ? this.getDate() : null;
      this.renderAll(i2);
    }
    on(t2, e2, i2 = {}) {
      this.ui.container.addEventListener(t2, e2, i2);
    }
    off(t2, e2, i2 = {}) {
      this.ui.container.removeEventListener(t2, e2, i2);
    }
    trigger(t2, e2 = {}) {
      return this.ui.container.dispatchEvent(new CustomEvent(t2, { detail: e2 }));
    }
    destroy() {
      this.options.element.removeEventListener("click", this.binds.show), "function" == typeof this.options.documentClick && document.removeEventListener("click", this.options.documentClick, true), Object.keys(this.PluginManager.instances).forEach((t2) => {
        this.PluginManager.removeInstance(t2);
      }), this.ui.wrapper.remove();
    }
    onRender(t2) {
      const { view: e2, date: i2 } = t2.detail;
      this.Calendar.render(i2, e2);
    }
    onView(t2) {
      const { view: e2, target: i2 } = t2.detail;
      "Footer" === e2 && this.datePicked.length && (i2.querySelector(".apply-button").disabled = false);
    }
    onClickHeaderButton(t2) {
      this.isCalendarHeaderButton(t2) && (t2.classList.contains("next-button") ? this.calendars[0].add(1, "month") : this.calendars[0].subtract(1, "month"), this.renderAll(this.calendars[0]));
    }
    onClickCalendarDay(e2) {
      if (this.isCalendarDay(e2)) {
        const i2 = new t(e2.dataset.time);
        this.options.autoApply ? (this.setDate(i2), this.trigger("select", { date: this.getDate() }), this.hide()) : (this.datePicked[0] = i2, this.trigger("preselect", { date: this.getDate() }), this.renderAll());
      }
    }
    onClickApplyButton(t2) {
      if (this.isApplyButton(t2)) {
        if (this.datePicked[0] instanceof Date) {
          const t3 = this.datePicked[0].clone();
          this.setDate(t3);
        }
        this.hide(), this.trigger("select", { date: this.getDate() });
      }
    }
    onClickCancelButton(t2) {
      this.isCancelButton(t2) && this.hide();
    }
    onClick(t2) {
      const e2 = t2.target;
      if (e2 instanceof HTMLElement) {
        const t3 = e2.closest(".unit");
        if (!(t3 instanceof HTMLElement))
          return;
        this.onClickHeaderButton(t3), this.onClickCalendarDay(t3), this.onClickApplyButton(t3), this.onClickCancelButton(t3);
      }
    }
    isShown() {
      return this.ui.container.classList.contains("inline") || this.ui.container.classList.contains("show");
    }
    show(t2) {
      if (this.isShown())
        return;
      const e2 = t2 && "target" in t2 ? t2.target : this.options.element, { top: i2, left: n2 } = this.adjustPosition(e2);
      this.ui.container.style.top = `${i2}px`, this.ui.container.style.left = `${n2}px`, this.ui.container.classList.add("show"), this.trigger("show", { target: e2 });
    }
    hide() {
      this.ui.container.classList.remove("show"), this.datePicked.length = 0, this.renderAll(), this.trigger("hide");
    }
    setDate(e2) {
      const i2 = new t(e2, this.options.format);
      this.options.date = i2.clone(), this.updateValues(), this.calendars.length && this.renderAll();
    }
    getDate() {
      return this.options.date instanceof t ? this.options.date.clone() : null;
    }
    parseValues() {
      this.options.date ? this.setDate(this.options.date) : this.options.element instanceof HTMLInputElement && this.options.element.value.length && this.setDate(this.options.element.value), this.options.date instanceof Date || (this.options.date = null);
    }
    updateValues() {
      const t2 = this.getDate(), e2 = t2 instanceof Date ? t2.format(this.options.format, this.options.lang) : "", i2 = this.options.element;
      i2 instanceof HTMLInputElement ? i2.value = e2 : i2 instanceof HTMLElement && (i2.innerText = e2);
    }
    hidePicker(t2) {
      let e2 = t2.target, i2 = null;
      e2.shadowRoot && (e2 = t2.composedPath()[0], i2 = e2.getRootNode().host), this.isShown() && i2 !== this.ui.wrapper && e2 !== this.options.element && this.hide();
    }
    renderAll(t2) {
      this.trigger("render", { view: "Container", date: (t2 || this.calendars[0]).clone() });
    }
    isCalendarHeaderButton(t2) {
      return ["previous-button", "next-button"].some((e2) => t2.classList.contains(e2));
    }
    isCalendarDay(t2) {
      return t2.classList.contains("day");
    }
    isApplyButton(t2) {
      return t2.classList.contains("apply-button");
    }
    isCancelButton(t2) {
      return t2.classList.contains("cancel-button");
    }
    gotoDate(e2) {
      const i2 = new t(e2, this.options.format);
      i2.setDate(1), this.calendars[0] = i2.clone(), this.renderAll();
    }
    clear() {
      this.options.date = null, this.datePicked.length = 0, this.updateValues(), this.renderAll(), this.trigger("clear");
    }
    handleOptions() {
      this.options.element instanceof HTMLElement || (this.options.element = this.options.doc.querySelector(this.options.element)), "function" == typeof this.options.documentClick && document.addEventListener("click", this.options.documentClick, true), this.options.element instanceof HTMLInputElement && (this.options.element.readOnly = this.options.readonly), this.options.date ? this.calendars[0] = new t(this.options.date, this.options.format) : this.calendars[0] = new t();
    }
    handleCSS() {
      if (Array.isArray(this.options.css))
        this.options.css.forEach((t2) => {
          const e2 = document.createElement("link");
          e2.href = t2, e2.rel = "stylesheet";
          const i2 = () => {
            this.cssLoaded++, this.cssLoaded === this.options.css.length && (this.ui.wrapper.style.display = "");
          };
          e2.addEventListener("load", i2), e2.addEventListener("error", i2), this.ui.shadowRoot.append(e2);
        });
      else if ("string" == typeof this.options.css) {
        const t2 = document.createElement("style"), e2 = document.createTextNode(this.options.css);
        t2.appendChild(e2), this.ui.shadowRoot.append(t2), this.ui.wrapper.style.display = "";
      } else
        "function" == typeof this.options.css && (this.options.css.call(this, this), this.ui.wrapper.style.display = "");
    }
    adjustPosition(t2) {
      const e2 = t2.getBoundingClientRect(), i2 = this.ui.wrapper.getBoundingClientRect();
      this.ui.container.classList.add("calc");
      const n2 = this.ui.container.getBoundingClientRect();
      this.ui.container.classList.remove("calc");
      let s2 = e2.bottom - i2.bottom, o = e2.left - i2.left;
      return "undefined" != typeof window && (window.innerHeight < s2 + n2.height && s2 - n2.height >= 0 && (s2 = e2.top - i2.top - n2.height), window.innerWidth < o + n2.width && e2.right - n2.width >= 0 && (o = e2.right - i2.right - n2.width)), { left: o, top: s2 };
    }
  };
  var s = Object.freeze({ __proto__: null, Core: n, create: n });

  // src/utils/initDatePicker.ts
  var initDatePicker = () => {
    const picker = new s.create({
      element: "#dateArrive",
      css: function(s2) {
        console.log(s2);
        const cssLinks = [
          "https://cdn.jsdelivr.net/npm/@influence-society/the-lander@3.0.3/dist/assets/easepick.css"
        ];
        cssLinks.forEach((cssLink) => {
          const link = document.createElement("link");
          link.href = cssLink;
          link.rel = "stylesheet";
          const onReady = () => {
            if (this.cssLoaded === cssLinks.length) {
              this.ui.wrapper.style.display = "";
            }
          };
          link.addEventListener("load", onReady);
          link.addEventListener("error", onReady);
          this.ui.shadowRoot.append(link);
        });
        const css = `
            :host {
              --primary-color: #9d8e71;
              --color-fg-primary: #9d8e71;
              --color-btn-primary-fg: #9d8e71;
              --color-btn-primary-border: #9d8e71;
              --color-btn-primary-hover-bg: #9d8e71;
              --color-btn-primary-hover-border: #9d8e71;
              --color-btn-primary-disabled-bg: #cdc0af;
              --color-btn-primary-disabled-border #cdc0af;
              --color-bg-inrange: #f7f3f0;
            }
        `;
        const style2 = document.createElement("style");
        const styleText = document.createTextNode(css);
        style2.appendChild(styleText);
        this.ui.shadowRoot.append(style2);
        this.ui.wrapper.style.display = "";
      },
      zIndex: 920,
      lang: "fr-FR",
      format: "DD-MM-YYYY",
      calendars: 1,
      RangePlugin: {
        elementEnd: "#dateDepart",
        tooltip: false
      },
      LockPlugin: {
        minDate: /* @__PURE__ */ new Date(),
        minDays: 2
      },
      plugins: ["RangePlugin", "LockPlugin"]
    });
    return picker;
  };

  // src/utils/SingleApartmentSearchBar.ts
  init_live_reload();

  // src/utils/Counter.ts
  init_live_reload();
  var Counter = class {
    constructor(countElement, incrementSelector, decrementSelector, initialCount = 0, totalCountElement, totalCountChangeEvent) {
      this.count = initialCount;
      totalCountElement.value = (Number(totalCountElement.value) + initialCount).toString();
      this.countElement = countElement;
      const incrementElement = document.querySelector(incrementSelector);
      const decrementElement = document.querySelector(decrementSelector);
      incrementElement.addEventListener("click", () => {
        this.increment(totalCountElement);
        if (totalCountChangeEvent) {
          totalCountElement.dispatchEvent(totalCountChangeEvent);
        }
        this.countElement.textContent = this.getCount().toString();
      });
      decrementElement.addEventListener("click", () => {
        this.decrement(totalCountElement);
        if (totalCountChangeEvent) {
          totalCountElement.dispatchEvent(totalCountChangeEvent);
        }
        this.countElement.textContent = this.getCount().toString();
      });
      this.countElement.textContent = this.getCount().toString();
    }
    increment(totalCountElement) {
      this.count++;
      totalCountElement.value = (Number(totalCountElement.value) + 1).toString();
    }
    decrement(totalCountElement) {
      if (this.count === 0)
        return;
      this.count--;
      totalCountElement.value = (Number(totalCountElement.value) - 1).toString();
    }
    getCount() {
      return this.count;
    }
    setCount(count) {
      this.count = count;
      this.countElement.textContent = this.getCount().toString();
    }
  };

  // src/utils/reverseDateFormat.ts
  init_live_reload();
  var reverseDateFormat = (dateString) => {
    const datePattern = /^\d{4}\/\d{2}\/\d{4}$/;
    if (datePattern.test(dateString)) {
      return dateString;
    }
    const parts = dateString.split("/");
    return `20${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  // src/utils/SingleApartmentSearchBar.ts
  var SingleApartmentSearchBar = class {
    constructor() {
      this.reCollectSearchData = () => {
        this.checkInDate = this.checkInDateElement.value;
        this.checkOutDate = this.checkOutDateElement.value;
        this.totalCount = this.totalCountElement.value;
        this.adultCount = this.adultCounterInstance.getCount().toString();
        this.infantCount = this.infantCounterInstance.getCount().toString();
        this.babyCount = this.babyCounterInstance.getCount().toString();
        if (!this.checkInDate || !this.checkOutDate) {
          return;
        }
        const searchParams = {
          checkin_date: convertDateFormat(this.checkInDate),
          checkout_date: convertDateFormat(this.checkOutDate),
          nb_adults: this.adultCount,
          nb_children: this.infantCount,
          nb_babies: this.babyCount,
          city_id: this.cityId,
          bookingsync_apt_id: this.bookingSyncAptId
        };
        this.queryUrl = constructUrl(searchParams);
        return this.queryUrl;
      };
      this.cityId = document.querySelector(SELECTORS.cityId).textContent;
      this.bookingSyncAptId = document.querySelector(SELECTORS.bookingSyncId).textContent;
      this.checkInDateElement = document.querySelector(SELECTORS.checkinInput);
      this.checkInDate = this.checkInDateElement.value;
      this.checkOutDateElement = document.querySelector(SELECTORS.checkoutInput);
      this.checkOutDate = this.checkOutDateElement.value;
      this.totalCountElement = document.querySelector(SELECTORS.totalCount);
      this.totalCountElement.readOnly = true;
      this.totalCount = this.totalCountElement.value;
      const metricChangeEvent = new Event("change");
      this.adultCountElement = document.querySelector(SELECTORS.adultCount);
      this.adultCount = this.adultCountElement.textContent;
      this.infantCountElement = document.querySelector(SELECTORS.infantCount);
      this.infantCount = this.infantCountElement.textContent;
      this.babyCountElement = document.querySelector(SELECTORS.babyCount);
      this.babyCount = this.babyCountElement.textContent;
      this.adultCounterInstance = new Counter(
        this.adultCountElement,
        SELECTORS.adultIncrement,
        SELECTORS.adultDecrement,
        2,
        this.totalCountElement,
        metricChangeEvent
      );
      this.infantCounterInstance = new Counter(
        this.infantCountElement,
        SELECTORS.infantIncrement,
        SELECTORS.infantDecrement,
        0,
        this.totalCountElement,
        metricChangeEvent
      );
      this.babyCounterInstance = new Counter(
        this.babyCountElement,
        SELECTORS.babyIncrement,
        SELECTORS.babyDecrement,
        0,
        this.totalCountElement,
        metricChangeEvent
      );
      this.apartmentAvailableBlock = document.querySelector(
        SELECTORS.apartmentAvailable
      );
      this.apartmentNotAvailableBlock = document.querySelector(
        SELECTORS.apartmentNotAvailable
      );
      const isThereSearchData = this.getSearchData();
      if (isThereSearchData) {
        this.updateSearchData();
      }
    }
    // for populating inputs with data from url if any
    getSearchData() {
      const parsedUrlParams = parseUrlParams();
      if (!parsedUrlParams || !parsedUrlParams.checkinDate || !parsedUrlParams.checkoutDate) {
        return false;
      }
      this.checkInDate = parsedUrlParams.checkinDate;
      this.checkOutDate = parsedUrlParams.checkoutDate;
      this.totalCount = (parsedUrlParams.nbAdults + parsedUrlParams.nbChildren + parsedUrlParams.nbBabies).toString();
      this.adultCount = parsedUrlParams.nbAdults.toString();
      this.infantCount = parsedUrlParams.nbChildren.toString();
      this.babyCount = parsedUrlParams.nbBabies.toString();
      return true;
    }
    updateSearchData() {
      this.checkInDateElement.value = reverseDateFormat(this.checkInDate);
      this.checkOutDateElement.value = reverseDateFormat(this.checkOutDate);
      this.adultCountElement.textContent = this.adultCount;
      this.infantCountElement.textContent = this.infantCount;
      this.babyCountElement.textContent = this.babyCount;
      this.totalCountElement.value = this.totalCount;
      this.adultCounterInstance.setCount(Number(this.adultCount));
      this.infantCounterInstance.setCount(Number(this.infantCount));
      this.babyCounterInstance.setCount(Number(this.babyCount));
      const searchParams = {
        checkin_date: convertDateFormat(this.checkInDate),
        checkout_date: convertDateFormat(this.checkOutDate),
        nb_adults: this.adultCount,
        nb_children: this.infantCount,
        nb_babies: this.babyCount,
        city_id: this.cityId,
        bookingSyncAptId: this.bookingSyncAptId
      };
      this.queryUrl = constructUrl(searchParams);
    }
    async handleSearch(apartmentsInsatnce, tarifsInstance) {
      this.reCollectSearchData();
      const apartmentData = await apartmentsInsatnce.getApartmentsData(this.queryUrl);
      if (!apartmentData || apartmentData.errors) {
        displayElement(this.apartmentAvailableBlock, false);
        if (this.queryUrl) {
          displayElement(this.apartmentNotAvailableBlock, true);
        }
        return;
      }
      history.pushState(null, "", this.queryUrl);
      displayElement(this.apartmentAvailableBlock, true);
      displayElement(this.apartmentNotAvailableBlock, false);
      const currentApartment = apartmentData.rentals[0];
      const allTarifBlocks = currentApartment.pricing.map(
        (eachPricing) => tarifsInstance.populateTarifs(eachPricing, currentApartment)
      );
      tarifsInstance.tarifWrap.replaceChildren(...allTarifBlocks);
      const firstTarifRadio = document.querySelector(SELECTORS.tarifRadio);
      firstTarifRadio.click();
    }
  };

  // src/utils/singleApartmentTarifReserveHandler.ts
  init_live_reload();
  var singleApartmentTarifReserveHandler = async (e2, bookingsyncAptId, bookingHandlerInstance) => {
    e2.preventDefault();
    e2.stopPropagation();
    const tarifReserveButton = e2.target;
    tarifReserveButton.setAttribute("bookingsync_id", bookingsyncAptId);
    const selectedTarifRadio = document.querySelector(
      SELECTORS.tarifRadioSelector
    );
    const selectedTarifName = selectedTarifRadio.value;
    const selectedTarifPrice = selectedTarifRadio.getAttribute("price");
    if (!selectedTarifPrice)
      return;
    tarifReserveButton.setAttribute("rateName", selectedTarifName);
    tarifReserveButton.setAttribute("price", selectedTarifPrice);
    await bookingHandlerInstance.handleReserve(e2);
  };

  // src/utils/Tarifs.ts
  init_live_reload();

  // ../../node_modules/.pnpm/@finsweet+ts-utils@0.40.0/node_modules/@finsweet/ts-utils/dist/helpers/index.js
  init_live_reload();

  // ../../node_modules/.pnpm/@finsweet+ts-utils@0.40.0/node_modules/@finsweet/ts-utils/dist/helpers/cloneNode.js
  init_live_reload();
  var cloneNode = (node, deep = true) => node.cloneNode(deep);

  // src/utils/Tarifs.ts
  var Tarifs = class {
    constructor() {
      this.tarifWrap = document.querySelector(SELECTORS.tarifWrap);
      this.tarifBlockTemplate = document.querySelector(SELECTORS.tarifBlock);
    }
    populateTarifs(eachPricing, currentApartment) {
      const tarifBlock = cloneNode(this.tarifBlockTemplate);
      const tarifName = tarifBlock.querySelector(SELECTORS.tarifName);
      const tarifNights = tarifBlock.querySelector(SELECTORS.tarifNights);
      const tarifTotalPrice = tarifBlock.querySelector(SELECTORS.tarifTotal);
      const tarifAvgPrice = tarifBlock.querySelector(SELECTORS.tarifAvg);
      const tarifRadio = tarifBlock.querySelector(SELECTORS.tarifRadio);
      const tarifDetails = tarifBlock.querySelector(SELECTORS.tarifDetails);
      tarifName.innerText = eachPricing.display_name;
      tarifNights.innerText = currentApartment.nb_nights.toString();
      tarifAvgPrice.innerText = eachPricing.avg_per_night.toString();
      tarifTotalPrice.innerText = eachPricing.total_amount.toString();
      tarifDetails.innerHTML = eachPricing.price_details;
      tarifRadio.value = eachPricing.short_name;
      tarifRadio.setAttribute("price", eachPricing.total_amount.toString());
      return tarifBlock;
    }
  };

  // src/pages/singleApartment.ts
  window.Webflow ||= [];
  window.Webflow.push(async () => {
    const datePicker = initDatePicker();
    const singleApartmentSearchBarInstance = new SingleApartmentSearchBar();
    const apartmentsInstance = new Apartments();
    const tarifsInstance = new Tarifs();
    await singleApartmentSearchBarInstance.handleSearch(apartmentsInstance, tarifsInstance);
    const bookingHandlerInstance = new BookingHandler();
    singleApartmentSearchBarInstance.totalCountElement.addEventListener(`change`, async () => {
      await singleApartmentSearchBarInstance.handleSearch(apartmentsInstance, tarifsInstance);
    });
    datePicker.on("select", async () => {
      await singleApartmentSearchBarInstance.handleSearch(apartmentsInstance, tarifsInstance);
    });
    const apartmentReserveForm = document.querySelector(
      SELECTORS.apartmentReserveForm
    );
    apartmentReserveForm.addEventListener("submit", async (e2) => {
      e2.preventDefault();
      e2.stopPropagation();
      singleApartmentTarifReserveHandler(
        e2,
        singleApartmentSearchBarInstance.bookingSyncAptId,
        bookingHandlerInstance
      );
    });
  });
})();
/*! Bundled license information:

@splidejs/splide/dist/js/splide.esm.js:
  (*!
   * Splide.js
   * Version  : 4.1.4
   * License  : MIT
   * Copyright: 2022 Naotoshi Fujita
   *)
*/
//# sourceMappingURL=singleApartment.js.map
