(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=(a(15),a(16),a(1));a(17),a(18);function o(e){var t=e.setFavoritesOnly,a=["header__heart-icon"];e.favoritesOnly&&a.push("header__heart-icon--active");var n=function(e){document.activeElement.blur(),t(e)};return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header__container"},r.a.createElement("button",{className:"header__avito-btn",onClick:function(){return n(!1)}},r.a.createElement("svg",{className:"header__avito-icon",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("use",{href:"icons.svg#icon-avito"}))),r.a.createElement("button",{className:"header__favorites",onClick:function(){return n(!0)}},r.a.createElement("svg",{width:"21",height:"20",className:a.join(" "),xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("use",{href:"icons.svg#icon-heart"})),"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435")))}var s=a(8),u=a(4),m=a.n(u),f=a(2),v=a(7),p=(a(20),a(21),a(22),{1:"#E74C3C",2:"#EC8825",3:"#F1C40F",4:"#ADC630",5:"#69CA53"});function d(e){var t=e.data,a=t.rating,n=void 0===a?0:a,c=t.name,i=void 0===c?"":c,l=t.isCompany,o=p[Math.round(n)]||"#ccc";return r.a.createElement("div",{className:"seller"},r.a.createElement("p",{className:"seller__rating",style:{borderColor:o},title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043f\u0440\u043e\u0434\u0430\u0432\u0446\u0430: ".concat(n)},n.toFixed(1)),r.a.createElement("div",{className:"seller-info"},r.a.createElement("p",{className:"seller-info__company"},l?"\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f":"\u0427\u0430\u0441\u0442\u043d\u043e\u0435 \u043b\u0438\u0446\u043e"),r.a.createElement("p",{className:"seller-info__name"},i)))}var E=function(e){return e.toLocaleString("ru",{style:"currency",currency:"RUB",minimumFractionDigits:0})};function h(e){var t=e.data,a=Object(n.useContext)(b),c=a.favorites,i=a.addToFavorites,l=a.removeFromFavorites,o=t.id,s=t.title,u=t.seller,m=t.pictures,f=m.length-1,v=t.price?E(t.price):"\u0426\u0435\u043d\u0430 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430",p=c.includes(o),h=["product__heart-icon"];return p&&h.push("product__heart-icon--active"),r.a.createElement("div",{className:"product"},r.a.createElement("div",{className:"product__image-group"},r.a.createElement("img",{src:m[0],alt:s,className:"product__image"}),r.a.createElement("button",{className:"product__favorites-btn",onClick:function(){if(p)return l(o);i(o)}},r.a.createElement("svg",{width:"20",height:"20",className:h.join(" ")},r.a.createElement("use",{href:"icons.svg#icon-heart"}))),r.a.createElement("div",{className:"product__images-count",title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0444\u043e\u0442\u043e: ".concat(f)},0===f?null:"+".concat(f))),r.a.createElement("div",{className:"product__info"},r.a.createElement("h2",{className:"product__title"},s),r.a.createElement("p",{className:"product__price"},v),r.a.createElement(d,{data:u})))}function g(e){var t=e.products;return 0===t.length?"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u0439 \u043f\u0443\u0441\u0442":r.a.createElement("ul",{className:"product-list"},t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{data:e}))}))}var b=r.a.createContext(),N=function(){var e=Object(v.a)(m.a.mark(function e(){var t,a,n,r,c;return m.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([fetch("//avito.dump.academy/products").then(function(e){return e.json()}),fetch("//avito.dump.academy/sellers").then(function(e){return e.json()})]);case 2:return t=e.sent,a=Object(l.a)(t,2),n=a[0],r=a[1],c={},r.data.forEach(function(e){c[e.id]=e}),e.abrupt("return",n.data.map(function(e){var t=e.relationships.seller;return Object(f.a)({},e,{seller:c[t]})}));case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=localStorage.getItem("favorites");return e?JSON.parse(e):[]},y=function(e,t,a,n){n&&(e=e.filter(function(e){var t=e.id;return a.includes(t)}));var r=t.category,c=t.minPrice,i=t.maxPrice;return"any"!==r&&(e=e.filter(function(e){return e.category===r})),""!==c&&(e=e.filter(function(e){return e.price>=c})),""!==i&&(e=e.filter(function(e){return e.price<=i})),e},w=function(e,t){return"rating"===t?e.sort(function(e,t){return t.seller.rating-e.seller.rating}):"price"===t?e.sort(function(e,t){return void 0===e.price?1:void 0===t.price?-1:e.price-t.price}):void 0};function O(e){var t=e.filter,a=e.favoritesOnly,c=Object(n.useState)([]),i=Object(l.a)(c,2),o=i[0],u=i[1],m=Object(n.useState)(_()),f=Object(l.a)(m,2),v=f[0],p=f[1];Object(n.useEffect)(function(){var e=function(e){"favorites"===e.key&&p(_())};return window.addEventListener("storage",e),function(){return window.removeEventListener("storage",e)}},[]),Object(n.useEffect)(function(){N().then(u)},[]);var d=y(o,t,v,a),E=function(e){p(e),localStorage.setItem("favorites",JSON.stringify(e))},h={favorites:v,addToFavorites:function(e){v.includes(e)||E([].concat(Object(s.a)(v),[e]))},removeFromFavorites:function(e){E(v.filter(function(t){return t!==e}))}};return r.a.createElement(b.Provider,{value:h},r.a.createElement(g,{products:w(d,t.order)}))}var j=a(3),P=(a(23),function(e){return""===e.minPrice||""===e.maxPrice?e:e.minPrice>e.maxPrice?e=Object(f.a)({},e,{minPrice:e.maxPrice,maxPrice:e.minPrice}):e});function x(e){var t=e.filter,a=e.setFilter,c=Object(n.useState)(t),i=Object(l.a)(c,2),o=i[0],s=i[1],u=function(e){e.preventDefault();var t=P(o);s(t),a(t)},m=function(e){var t=e.target,n=t.name,r=t.value,c=t.type;"number"===c&&(r=parseInt(r),(isNaN(r)||r<=0)&&(r=""));var i=Object(f.a)({},o,Object(j.a)({},n,r));s(i),"select-one"===c&&a(i)},v=function(e){var t=e.key;"Enter"===t?e.target.blur():isNaN(t)&&e.preventDefault()},p=o.category,d=o.minPrice,E=o.maxPrice,h=o.order;return r.a.createElement("form",{onSubmit:u,className:"filters"},r.a.createElement("div",{className:"filter-group"},r.a.createElement("label",null,r.a.createElement("p",{className:"input-label"},"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),r.a.createElement("select",{className:"filter-input",name:"category",onChange:m,value:p},r.a.createElement("option",{value:"any"},"\u041b\u044e\u0431\u0430\u044f \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"),r.a.createElement("option",{value:"immovable"},"\u041d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u044c"),r.a.createElement("option",{value:"cameras"},"\u0424\u043e\u0442\u043e\u0430\u043f\u043f\u0430\u0440\u0430\u0442\u044b"),r.a.createElement("option",{value:"auto"},"\u0410\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0438"),r.a.createElement("option",{value:"laptops"},"\u041d\u043e\u0443\u0442\u0431\u0443\u043a\u0438")))),r.a.createElement("div",{className:"filter-group"},r.a.createElement("label",null,r.a.createElement("p",{className:"input-label"},"\u0426\u0435\u043d\u0430, \u043c\u0438\u043d."),r.a.createElement("input",{className:"filter-input filter-input--min-price",type:"number",name:"minPrice",placeholder:"\u041e\u0442",onChange:m,onBlur:u,onKeyPress:v,value:d,min:"0"})),r.a.createElement("label",null,r.a.createElement("p",{className:"input-label"},"\u0426\u0435\u043d\u0430, \u043c\u0430\u043a\u0441."),r.a.createElement("input",{className:"filter-input filter-input--max-price",type:"number",name:"maxPrice",placeholder:"\u0414\u043e",onChange:m,onBlur:u,onKeyPress:v,value:E,min:"0"}))),r.a.createElement("div",{className:"filter-group filter__order"},r.a.createElement("label",null,r.a.createElement("p",{className:"input-label"},"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"),r.a.createElement("select",{className:"filter-input",name:"order",onChange:m,value:h},r.a.createElement("option",{value:"rating"},"\u041f\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u0438"),r.a.createElement("option",{value:"price"},"\u041f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0446\u0435\u043d\u044b")))))}var C=function(){var e=Object(n.useState)({category:"any",minPrice:"",maxPrice:"",order:"rating"}),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),s=Object(l.a)(i,2),u=s[0],m=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{favoritesOnly:u,setFavoritesOnly:m}),r.a.createElement("main",{className:"main-containers"},r.a.createElement("h1",{className:"visually-hidden"},"\u041e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f \u0410\u0432\u0438\u0442\u043e"),r.a.createElement(x,{filter:a,setFilter:c}),r.a.createElement(O,{filter:a,favoritesOnly:u})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.75026648.chunk.js.map