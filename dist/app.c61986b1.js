// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes/Caisse.ts":[function(require,module,exports) {
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caisse = void 0;

var Caisse = /*#__PURE__*/function () {
  function Caisse(solde, transaction) {
    _classCallCheck(this, Caisse);

    this.solde = solde;
    this.transaction = transaction;
    this.observers = [];
  }

  _createClass(Caisse, [{
    key: "subscribe",
    value: function subscribe(obs) {
      this.observers.push(obs);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(obs) {
      var index = this.observers.indexOf(obs);
      this.observers.splice(index, 1);
    }
  }, {
    key: "notifyObserver",
    value: function notifyObserver() {
      var _iterator = _createForOfIteratorHelper(this.observers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var elm = _step.value;
          elm.update(this);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "getTransaction",
    value: function getTransaction() {
      return this.transaction;
    }
  }, {
    key: "getSolde",
    value: function getSolde() {
      return this.solde;
    }
  }, {
    key: "getEtatCompte",
    value: function getEtatCompte() {
      return this.solde;
    }
  }, {
    key: "AjoutTransaction",
    value: function AjoutTransaction(transaction) {
      this.transaction.push(transaction);

      if (transaction.getType() === 'Debit') {
        this.solde -= transaction.getMontant();
      } else {
        this.solde += transaction.getMontant();
      }

      console.log("Solde : ", this.solde);
      this.notifyObserver();
    }
  }, {
    key: "EtatCompte",
    value: function EtatCompte(transaction) {
      this.transaction.push(transaction);

      if (this.solde < 0) {
        console.log('DEBITEUR');
      } else if (this.solde === 0) {
        console.log('NULL');
      } else {
        console.log('CREDITEUR');
      }

      this.notifyObserver();
    }
  }]);

  return Caisse;
}();

exports.Caisse = Caisse;
},{}],"classes/EtatDuCompte.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Etat = void 0;

var Etat = /*#__PURE__*/function () {
  function Etat(caisse) {
    _classCallCheck(this, Etat);

    this.viewEtat = document.querySelector("#etat");
    caisse.subscribe(this);
  }

  _createClass(Etat, [{
    key: "update",
    value: function update(caisse) {
      // this.viewEtat.innerText = caisse.getEtatCompte();
      this.viewEtat.innerText = caisse.getEtatCompte() <= 0 ? 'DEBITEUR' : 'CREDITEUR';
      this.viewEtat.className = this.viewEtat.innerText;
    }
  }]);

  return Etat;
}();

exports.Etat = Etat;
},{}],"classes/NbreTransaction.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NbreTransaction = void 0;

var NbreTransaction = /*#__PURE__*/function () {
  function NbreTransaction(caisse) {
    _classCallCheck(this, NbreTransaction);

    this.htmlNbreDebitView = document.querySelector('#nbreDeDebit');
    this.htmlNbreCreditView = document.querySelector('#nbreDeCredit');
    caisse.subscribe(this);
  }

  _createClass(NbreTransaction, [{
    key: "update",
    value: function update(caisse) {
      var comptons = caisse.getTransaction();
      var NbreTotalDebit = 0;
      var NbreTotalCredit = 0;
      NbreTotalDebit = comptons.filter(function (tr) {
        return tr.getType() === "Debit";
      }).length;
      NbreTotalCredit = comptons.filter(function (tr) {
        return tr.getType() === "Credit";
      }).length; // for (const tr of comptons) {
      //     if (tr.getType() === 'Debit') {
      //         NbreTotalDebit ++
      //     } else {
      //         NbreTotalCredit++
      //     }

      this.htmlNbreDebitView.innerText = NbreTotalDebit.toString();
      this.htmlNbreCreditView.innerText = NbreTotalCredit.toString();
    }
  }]);

  return NbreTransaction;
}();

exports.NbreTransaction = NbreTransaction;
},{}],"classes/Solde.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Solde = void 0;

var Solde = /*#__PURE__*/function () {
  function Solde(caisse) {
    _classCallCheck(this, Solde);

    this.viewSolde = document.querySelector("#solde");
    caisse.subscribe(this);
  }

  _createClass(Solde, [{
    key: "update",
    value: function update(caisse) {
      this.viewSolde.innerText = caisse.getSolde().toString();
    }
  }]);

  return Solde;
}();

exports.Solde = Solde;
},{}],"classes/Transaction.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transaction = void 0;

var Transaction = /*#__PURE__*/function () {
  function Transaction(type, montant, qui, raison) {
    _classCallCheck(this, Transaction);

    this.type = type;
    this.montant = montant;
    this.qui = qui;
    this.raison = raison;
  }

  _createClass(Transaction, [{
    key: "text",
    value: function text() {
      return "".concat(this.montant, "F ont \xE9t\xE9 ").concat(this.type === "Debit" ? "Retrait" : "Déposé", " par ").concat(this.qui, " suite \xE0 ").concat(this.raison);
    }
  }, {
    key: "getMontant",
    value: function getMontant() {
      return this.montant;
    }
  }, {
    key: "getType",
    value: function getType() {
      return this.type;
    }
  }]);

  return Transaction;
}();

exports.Transaction = Transaction;
},{}],"app.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Caisse_1 = require("./classes/Caisse");

var EtatDuCompte_1 = require("./classes/EtatDuCompte");

var NbreTransaction_1 = require("./classes/NbreTransaction");

var Solde_1 = require("./classes/Solde");

var Transaction_1 = require("./classes/Transaction"); //Interception du formulaire


var form = document.querySelector(".formulaire-de-transaction"); //Instanciations

var maCaisse = new Caisse_1.Caisse(0, []);
var monSolde = new Solde_1.Solde(maCaisse);
var etatDeMonCompte = new EtatDuCompte_1.Etat(maCaisse);
var nbreDeTransaction = new NbreTransaction_1.NbreTransaction(maCaisse); //Interception des Inputs du formulaire

var type = document.querySelector("#type");
var qui = document.querySelector('#qui');
var montant = document.querySelector("#montant");
var raison = document.querySelector("#raison");
var ul = document.querySelector("ul");
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var mesTransactions = new Transaction_1.Transaction(type.value, montant.valueAsNumber, qui.value, raison.value);
  maCaisse.AjoutTransaction(mesTransactions);
  maCaisse.EtatCompte(mesTransactions);

  var render = function render(Tr, container) {
    var li = document.createElement("li");
    var h4 = document.createElement("h4");
    var p = document.createElement("p");
    h4.innerText = Tr.getType() === 'Debit' ? 'Debit' : 'Credit';
    h4.className = Tr.getType();
    li.className = Tr.getType();
    p.innerText = Tr.text();
    li.append(h4);
    li.append(p);
    ul.append(li);
    container.append(li);
  };

  var reset = 0;
  montant.valueAsNumber = reset;
  qui.value = "";
  raison.value = "";
  render(mesTransactions, ul);
});
},{"./classes/Caisse":"classes/Caisse.ts","./classes/EtatDuCompte":"classes/EtatDuCompte.ts","./classes/NbreTransaction":"classes/NbreTransaction.ts","./classes/Solde":"classes/Solde.ts","./classes/Transaction":"classes/Transaction.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55864" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map