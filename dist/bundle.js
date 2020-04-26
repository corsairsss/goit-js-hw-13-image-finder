!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=28)}([function(t,e,n){"use strict";e.__esModule=!0,e.extend=s,e.indexOf=function(t,e){for(var n=0,o=t.length;n<o;n++)if(t[n]===e)return n;return-1},e.escapeExpression=function(t){if("string"!=typeof t){if(t&&t.toHTML)return t.toHTML();if(null==t)return"";if(!t)return t+"";t=""+t}if(!i.test(t))return t;return t.replace(r,a)},e.isEmpty=function(t){return!t&&0!==t||!(!u(t)||0!==t.length)},e.createFrame=function(t){var e=s({},t);return e._parent=t,e},e.blockParams=function(t,e){return t.path=e,t},e.appendContextPath=function(t,e){return(t?t+".":"")+e};var o={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},r=/[&<>"'`=]/g,i=/[&<>"'`=]/;function a(t){return o[t]}function s(t){for(var e=1;e<arguments.length;e++)for(var n in arguments[e])Object.prototype.hasOwnProperty.call(arguments[e],n)&&(t[n]=arguments[e][n]);return t}var l=Object.prototype.toString;e.toString=l;var c=function(t){return"function"==typeof t};c(/x/)&&(e.isFunction=c=function(t){return"function"==typeof t&&"[object Function]"===l.call(t)}),e.isFunction=c;var u=Array.isArray||function(t){return!(!t||"object"!=typeof t)&&"[object Array]"===l.call(t)};e.isArray=u},function(t,e,n){"use strict";e.__esModule=!0;var o=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function r(t,e){var n=e&&e.loc,i=void 0,a=void 0,s=void 0,l=void 0;n&&(i=n.start.line,a=n.end.line,s=n.start.column,l=n.end.column,t+=" - "+i+":"+s);for(var c=Error.prototype.constructor.call(this,t),u=0;u<o.length;u++)this[o[u]]=c[o[u]];Error.captureStackTrace&&Error.captureStackTrace(this,r);try{n&&(this.lineNumber=i,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:s,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=s,this.endColumn=l))}catch(t){}}r.prototype=new Error,e.default=r,t.exports=e.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.HandlebarsEnvironment=u;var r=n(0),i=o(n(1)),a=n(3),s=n(19),l=o(n(5)),c=n(6);e.VERSION="4.7.3";e.COMPILER_REVISION=8;e.LAST_COMPATIBLE_COMPILER_REVISION=7;e.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function u(t,e,n){this.helpers=t||{},this.partials=e||{},this.decorators=n||{},a.registerDefaultHelpers(this),s.registerDefaultDecorators(this)}u.prototype={constructor:u,logger:l.default,log:l.default.log,registerHelper:function(t,e){if("[object Object]"===r.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple helpers");r.extend(this.helpers,t)}else this.helpers[t]=e},unregisterHelper:function(t){delete this.helpers[t]},registerPartial:function(t,e){if("[object Object]"===r.toString.call(t))r.extend(this.partials,t);else{if(void 0===e)throw new i.default('Attempting to register a partial called "'+t+'" as undefined');this.partials[t]=e}},unregisterPartial:function(t){delete this.partials[t]},registerDecorator:function(t,e){if("[object Object]"===r.toString.call(t)){if(e)throw new i.default("Arg not supported with multiple decorators");r.extend(this.decorators,t)}else this.decorators[t]=e},unregisterDecorator:function(t){delete this.decorators[t]},resetLoggedPropertyAccesses:function(){c.resetLoggedProperties()}};var d=l.default.log;e.log=d,e.createFrame=r.createFrame,e.logger=l.default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.registerDefaultHelpers=function(t){r.default(t),i.default(t),a.default(t),s.default(t),l.default(t),c.default(t),u.default(t)},e.moveHelperToHooks=function(t,e,n){t.helpers[e]&&(t.hooks[e]=t.helpers[e],n||delete t.helpers[e])};var r=o(n(12)),i=o(n(13)),a=o(n(14)),s=o(n(15)),l=o(n(16)),c=o(n(17)),u=o(n(18))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";e.__esModule=!0;var o=n(0),r={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(t){if("string"==typeof t){var e=o.indexOf(r.methodMap,t.toLowerCase());t=e>=0?e:parseInt(t,10)}return t},log:function(t){if(t=r.lookupLevel(t),"undefined"!=typeof console&&r.lookupLevel(r.level)<=t){var e=r.methodMap[t];console[e]||(e="log");for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];console[e].apply(console,o)}}};e.default=r,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.createProtoAccessControl=function(t){var e=Object.create(null);e.constructor=!1,e.__defineGetter__=!1,e.__defineSetter__=!1,e.__lookupGetter__=!1;var n=Object.create(null);return n.__proto__=!1,{properties:{whitelist:o.createNewLookupObject(n,t.allowedProtoProperties),defaultValue:t.allowProtoPropertiesByDefault},methods:{whitelist:o.createNewLookupObject(e,t.allowedProtoMethods),defaultValue:t.allowProtoMethodsByDefault}}},e.resultIsAllowed=function(t,e,n){return a("function"==typeof t?e.methods:e.properties,n)},e.resetLoggedProperties=function(){Object.keys(i).forEach((function(t){delete i[t]}))};var o=n(21),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(5)),i=Object.create(null);function a(t,e){return void 0!==t.whitelist[e]?!0===t.whitelist[e]:void 0!==t.defaultValue?t.defaultValue:(function(t){!0!==i[t]&&(i[t]=!0,r.log("error",'Handlebars: Access has been denied to resolve the property "'+t+'" because it is not an "own property" of its parent.\nYou can add a runtime option to disable the check or this warning:\nSee https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details'))}(e),!1)}},function(t,e,n){},function(t,e,n){var o=n(10);t.exports=(o.default||o).template({compiler:[8,">= 4.3.0"],main:function(t,e,n,o,r){var i,a=null!=e?e:t.nullContext||{},s=t.hooks.helperMissing,l="function",c=t.escapeExpression,u=t.lookupProperty||function(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]};return'<div class="photo-card" data-name="card">\r\n    <img class=\'photo-card__img\' src="'+c(typeof(i=null!=(i=u(n,"webformatURL")||(null!=e?u(e,"webformatURL"):e))?i:s)===l?i.call(a,{name:"webformatURL",hash:{},data:r,loc:{start:{line:2,column:38},end:{line:2,column:54}}}):i)+'" alt="'+c(typeof(i=null!=(i=u(n,"tags")||(null!=e?u(e,"tags"):e))?i:s)===l?i.call(a,{name:"tags",hash:{},data:r,loc:{start:{line:2,column:61},end:{line:2,column:69}}}):i)+'" width="'+c(typeof(i=null!=(i=u(n,"webformatWidth")||(null!=e?u(e,"webformatWidth"):e))?i:s)===l?i.call(a,{name:"webformatWidth",hash:{},data:r,loc:{start:{line:2,column:78},end:{line:2,column:96}}}):i)+'"\r\n        height="'+c(typeof(i=null!=(i=u(n,"webformatHeight")||(null!=e?u(e,"webformatHeight"):e))?i:s)===l?i.call(a,{name:"webformatHeight",hash:{},data:r,loc:{start:{line:3,column:16},end:{line:3,column:35}}}):i)+'" data-url="'+c(typeof(i=null!=(i=u(n,"largeImageURL")||(null!=e?u(e,"largeImageURL"):e))?i:s)===l?i.call(a,{name:"largeImageURL",hash:{},data:r,loc:{start:{line:3,column:47},end:{line:3,column:64}}}):i)+'" />\r\n    <div class="stats">\r\n        <p class="stats-item">\r\n            <i class="material-icons">thumb_up</i>\r\n            '+c(typeof(i=null!=(i=u(n,"likes")||(null!=e?u(e,"likes"):e))?i:s)===l?i.call(a,{name:"likes",hash:{},data:r,loc:{start:{line:7,column:12},end:{line:7,column:21}}}):i)+'\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">visibility</i>\r\n            '+c(typeof(i=null!=(i=u(n,"views")||(null!=e?u(e,"views"):e))?i:s)===l?i.call(a,{name:"views",hash:{},data:r,loc:{start:{line:11,column:12},end:{line:11,column:21}}}):i)+'\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">comment</i>\r\n            '+c(typeof(i=null!=(i=u(n,"comments")||(null!=e?u(e,"comments"):e))?i:s)===l?i.call(a,{name:"comments",hash:{},data:r,loc:{start:{line:15,column:12},end:{line:15,column:24}}}):i)+'\r\n        </p>\r\n        <p class="stats-item">\r\n            <i class="material-icons">cloud_download</i>\r\n            '+c(typeof(i=null!=(i=u(n,"downloads")||(null!=e?u(e,"downloads"):e))?i:s)===l?i.call(a,{name:"downloads",hash:{},data:r,loc:{start:{line:19,column:12},end:{line:19,column:25}}}):i)+"\r\n        </p>\r\n    </div>\r\n</div>"},useData:!0})},function(t,e,n){t.exports=function t(e,n,o){function r(a,s){if(!n[a]){if(!e[a]){if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[a]={exports:{}};e[a][0].call(c.exports,(function(t){return r(e[a][1][t]||t)}),c,c.exports,t,e,n,o)}return n[a].exports}for(var i=!1,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=t.trim(),!0===e?n.children:n.firstChild},r=function(t,e){var n=t.children;return 1===n.length&&n[0].tagName===e},i=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};n.visible=i,n.create=function(t,e){var n=function(t,e){var n=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return i.appendChild(t)}));var a=r(i,"IMG"),s=r(i,"VIDEO"),l=r(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===s&&n.classList.add("basicLightbox--video"),!0===l&&n.classList.add("basicLightbox--iframe"),n}(t=function(t){var e="string"==typeof t,n=t instanceof HTMLElement==1;if(!1===e&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),a=function(t){return!1!==e.onClose(s)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(t)||t.parentElement.removeChild(t),e()}),410),!0}(n,(function(){if("function"==typeof t)return t(s)}))};!0===e.closable&&n.addEventListener("click",(function(t){t.target===n&&a()}));var s={element:function(){return n},visible:function(){return i(n)},show:function(t){return!1!==e.onShow(s)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(n,(function(){if("function"==typeof t)return t(s)}))},close:a};return s}},{}]},{},[1])(1)},function(t,e,n){t.exports=n(11).default},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}e.__esModule=!0;var i=r(n(2)),a=o(n(22)),s=o(n(1)),l=r(n(0)),c=r(n(23)),u=o(n(25));function d(){var t=new i.HandlebarsEnvironment;return l.extend(t,i),t.SafeString=a.default,t.Exception=s.default,t.Utils=l,t.escapeExpression=l.escapeExpression,t.VM=c,t.template=function(e){return c.template(e,t)},t}var f=d();f.create=d,u.default(f),f.default=f,e.default=f,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var o=n(0);e.default=function(t){t.registerHelper("blockHelperMissing",(function(e,n){var r=n.inverse,i=n.fn;if(!0===e)return i(this);if(!1===e||null==e)return r(this);if(o.isArray(e))return e.length>0?(n.ids&&(n.ids=[n.name]),t.helpers.each(e,n)):r(this);if(n.data&&n.ids){var a=o.createFrame(n.data);a.contextPath=o.appendContextPath(n.data.contextPath,n.name),n={data:a}}return i(e,n)}))},t.exports=e.default},function(t,e,n){"use strict";(function(o){e.__esModule=!0;var r,i=n(0),a=n(1),s=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){t.registerHelper("each",(function(t,e){if(!e)throw new s.default("Must pass iterator to #each");var n,r=e.fn,a=e.inverse,l=0,c="",u=void 0,d=void 0;function f(e,n,o){u&&(u.key=e,u.index=n,u.first=0===n,u.last=!!o,d&&(u.contextPath=d+e)),c+=r(t[e],{data:u,blockParams:i.blockParams([t[e],e],[d+e,null])})}if(e.data&&e.ids&&(d=i.appendContextPath(e.data.contextPath,e.ids[0])+"."),i.isFunction(t)&&(t=t.call(this)),e.data&&(u=i.createFrame(e.data)),t&&"object"==typeof t)if(i.isArray(t))for(var p=t.length;l<p;l++)l in t&&f(l,l,l===t.length-1);else if(o.Symbol&&t[o.Symbol.iterator]){for(var h=[],m=t[o.Symbol.iterator](),v=m.next();!v.done;v=m.next())h.push(v.value);for(p=(t=h).length;l<p;l++)f(l,l,l===t.length-1)}else n=void 0,Object.keys(t).forEach((function(t){void 0!==n&&f(n,l-1),n=t,l++})),void 0!==n&&f(n,l-1,!0);return 0===l&&(c=a(this)),c}))},t.exports=e.default}).call(this,n(4))},function(t,e,n){"use strict";e.__esModule=!0;var o,r=n(1),i=(o=r)&&o.__esModule?o:{default:o};e.default=function(t){t.registerHelper("helperMissing",(function(){if(1!==arguments.length)throw new i.default('Missing helper: "'+arguments[arguments.length-1].name+'"')}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var o,r=n(0),i=n(1),a=(o=i)&&o.__esModule?o:{default:o};e.default=function(t){t.registerHelper("if",(function(t,e){if(2!=arguments.length)throw new a.default("#if requires exactly one argument");return r.isFunction(t)&&(t=t.call(this)),!e.hash.includeZero&&!t||r.isEmpty(t)?e.inverse(this):e.fn(this)})),t.registerHelper("unless",(function(e,n){if(2!=arguments.length)throw new a.default("#unless requires exactly one argument");return t.helpers.if.call(this,e,{fn:n.inverse,inverse:n.fn,hash:n.hash})}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("log",(function(){for(var e=[void 0],n=arguments[arguments.length-1],o=0;o<arguments.length-1;o++)e.push(arguments[o]);var r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),e[0]=r,t.log.apply(t,e)}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t){t.registerHelper("lookup",(function(t,e,n){return t?n.lookupProperty(t,e):t}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0;var o,r=n(0),i=n(1),a=(o=i)&&o.__esModule?o:{default:o};e.default=function(t){t.registerHelper("with",(function(t,e){if(2!=arguments.length)throw new a.default("#with requires exactly one argument");r.isFunction(t)&&(t=t.call(this));var n=e.fn;if(r.isEmpty(t))return e.inverse(this);var o=e.data;return e.data&&e.ids&&((o=r.createFrame(e.data)).contextPath=r.appendContextPath(e.data.contextPath,e.ids[0])),n(t,{data:o,blockParams:r.blockParams([t],[o&&o.contextPath])})}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.registerDefaultDecorators=function(t){i.default(t)};var o,r=n(20),i=(o=r)&&o.__esModule?o:{default:o}},function(t,e,n){"use strict";e.__esModule=!0;var o=n(0);e.default=function(t){t.registerDecorator("inline",(function(t,e,n,r){var i=t;return e.partials||(e.partials={},i=function(r,i){var a=n.partials;n.partials=o.extend({},a,e.partials);var s=t(r,i);return n.partials=a,s}),e.partials[r.args[0]]=r.fn,i}))},t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.createNewLookupObject=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return o.extend.apply(void 0,[Object.create(null)].concat(e))};var o=n(0)},function(t,e,n){"use strict";function o(t){this.string=t}e.__esModule=!0,o.prototype.toString=o.prototype.toHTML=function(){return""+this.string},e.default=o,t.exports=e.default},function(t,e,n){"use strict";e.__esModule=!0,e.checkRevision=function(t){var e=t&&t[0]||1,n=s.COMPILER_REVISION;if(e>=s.LAST_COMPATIBLE_COMPILER_REVISION&&e<=s.COMPILER_REVISION)return;if(e<s.LAST_COMPATIBLE_COMPILER_REVISION){var o=s.REVISION_CHANGES[n],r=s.REVISION_CHANGES[e];throw new a.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+o+") or downgrade your runtime to an older version ("+r+").")}throw new a.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+t[1]+").")},e.template=function(t,e){if(!e)throw new a.default("No environment passed to template");if(!t||!t.main)throw new a.default("Unknown template object: "+typeof t);t.main.decorator=t.main_d,e.VM.checkRevision(t.compiler);var n=t.compiler&&7===t.compiler[0];var o={strict:function(t,e,n){if(!t||!(e in t))throw new a.default('"'+e+'" not defined in '+t,{loc:n});return t[e]},lookupProperty:function(t,e){var n=t[e];return null==n||Object.prototype.hasOwnProperty.call(t,e)||u.resultIsAllowed(n,o.protoAccessControl,e)?n:void 0},lookup:function(t,e){for(var n=t.length,r=0;r<n;r++){if(null!=(t[r]&&o.lookupProperty(t[r],e)))return t[r][e]}},lambda:function(t,e){return"function"==typeof t?t.call(e):t},escapeExpression:r.escapeExpression,invokePartial:function(n,o,i){i.hash&&(o=r.extend({},o,i.hash),i.ids&&(i.ids[0]=!0)),n=e.VM.resolvePartial.call(this,n,o,i);var s=r.extend({},i,{hooks:this.hooks,protoAccessControl:this.protoAccessControl}),l=e.VM.invokePartial.call(this,n,o,s);if(null==l&&e.compile&&(i.partials[i.name]=e.compile(n,t.compilerOptions,e),l=i.partials[i.name](o,s)),null!=l){if(i.indent){for(var c=l.split("\n"),u=0,d=c.length;u<d&&(c[u]||u+1!==d);u++)c[u]=i.indent+c[u];l=c.join("\n")}return l}throw new a.default("The partial "+i.name+" could not be compiled when running in runtime-only mode")},fn:function(e){var n=t[e];return n.decorator=t[e+"_d"],n},programs:[],program:function(t,e,n,o,r){var i=this.programs[t],a=this.fn(t);return e||r||o||n?i=d(this,t,a,e,n,o,r):i||(i=this.programs[t]=d(this,t,a)),i},data:function(t,e){for(;t&&e--;)t=t._parent;return t},mergeIfNeeded:function(t,e){var n=t||e;return t&&e&&t!==e&&(n=r.extend({},e,t)),n},nullContext:Object.seal({}),noop:e.VM.noop,compilerInfo:t.compiler};function i(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=n.data;i._setup(n),!n.partial&&t.useData&&(r=p(e,r));var a=void 0,s=t.useBlockParams?[]:void 0;function l(e){return""+t.main(o,e,o.helpers,o.partials,r,s,a)}return t.useDepths&&(a=n.depths?e!=n.depths[0]?[e].concat(n.depths):n.depths:[e]),(l=h(t.main,l,o,n.depths||[],r,s))(e,n)}return i.isTop=!0,i._setup=function(i){if(i.partial)o.protoAccessControl=i.protoAccessControl,o.helpers=i.helpers,o.partials=i.partials,o.decorators=i.decorators,o.hooks=i.hooks;else{var a=r.extend({},e.helpers,i.helpers);!function(t,e){Object.keys(t).forEach((function(n){var o=t[n];t[n]=function(t,e){var n=e.lookupProperty;return c.wrapHelper(t,(function(t){return r.extend({lookupProperty:n},t)}))}(o,e)}))}(a,o),o.helpers=a,t.usePartial&&(o.partials=o.mergeIfNeeded(i.partials,e.partials)),(t.usePartial||t.useDecorators)&&(o.decorators=r.extend({},e.decorators,i.decorators)),o.hooks={},o.protoAccessControl=u.createProtoAccessControl(i);var s=i.allowCallsToHelperMissing||n;l.moveHelperToHooks(o,"helperMissing",s),l.moveHelperToHooks(o,"blockHelperMissing",s)}},i._child=function(e,n,r,i){if(t.useBlockParams&&!r)throw new a.default("must pass block params");if(t.useDepths&&!i)throw new a.default("must pass parent depths");return d(o,e,t[e],n,0,r,i)},i},e.wrapProgram=d,e.resolvePartial=function(t,e,n){t?t.call||n.name||(n.name=t,t=n.partials[t]):t="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name];return t},e.invokePartial=function(t,e,n){var o=n.data&&n.data["partial-block"];n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath);var i=void 0;n.fn&&n.fn!==f&&function(){n.data=s.createFrame(n.data);var t=n.fn;i=n.data["partial-block"]=function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return n.data=s.createFrame(n.data),n.data["partial-block"]=o,t(e,n)},t.partials&&(n.partials=r.extend({},n.partials,t.partials))}();void 0===t&&i&&(t=i);if(void 0===t)throw new a.default("The partial "+n.name+" could not be found");if(t instanceof Function)return t(e,n)},e.noop=f;var o,r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(n(0)),i=n(1),a=(o=i)&&o.__esModule?o:{default:o},s=n(2),l=n(3),c=n(24),u=n(6);function d(t,e,n,o,r,i,a){function s(e){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=a;return!a||e==a[0]||e===t.nullContext&&null===a[0]||(s=[e].concat(a)),n(t,e,t.helpers,t.partials,r.data||o,i&&[r.blockParams].concat(i),s)}return(s=h(n,s,t,a,o,i)).program=e,s.depth=a?a.length:0,s.blockParams=r||0,s}function f(){return""}function p(t,e){return e&&"root"in e||((e=e?s.createFrame(e):{}).root=t),e}function h(t,e,n,o,i,a){if(t.decorator){var s={};e=t.decorator(e,s,n,o&&o[0],i,a,o),r.extend(e,s)}return e}},function(t,e,n){"use strict";e.__esModule=!0,e.wrapHelper=function(t,e){if("function"!=typeof t)return t;return function(){var n=arguments[arguments.length-1];return arguments[arguments.length-1]=e(n),t.apply(this,arguments)}}},function(t,e,n){"use strict";(function(n){e.__esModule=!0,e.default=function(t){var e=void 0!==n?n:window,o=e.Handlebars;t.noConflict=function(){return e.Handlebars===t&&(e.Handlebars=o),t}},t.exports=e.default}).call(this,n(4))},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o,r={page:1,query:"",API_KEY:"16160220-46340b64af859daa6e885b5af",fetchArticles:function(){var t=this,e="?q=".concat(this.query,"&image_type=photo&orientation=horizontal&page=").concat(this.page,"&per_page=12&key=").concat(this.API_KEY);return fetch("https://pixabay.com/api/"+e).then((function(t){return t.json()})).then((function(e){return t.incrementPage(),e.hits}))},get searchquery(){return this.query},set searchquery(t){this.query=t},incrementPage:function(){this.page+=1},resetPage:function(){this.page=1}},i=n(8),a=n.n(i),s=function(){return(s=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},l=function(t){this.options=t};!function(t){t[t.Add=0]="Add",t[t.Remove=1]="Remove"}(o||(o={}));var c,u=function(){function t(){this.notifications=[]}return t.prototype.push=function(t){this.notifications.push(t),this.updateFn(t,o.Add,this.notifications)},t.prototype.splice=function(t,e){var n=this.notifications.splice(t,e)[0];this.updateFn(n,o.Remove,this.notifications)},t.prototype.indexOf=function(t){return this.notifications.indexOf(t)},t.prototype.onUpdate=function(t){this.updateFn=t},t}();!function(t){t[t.Dismiss=0]="Dismiss"}(c||(c={}));var d={types:[{type:"success",className:"notyf__toast--success",backgroundColor:"#3dc763",icon:{className:"notyf__icon--success",tagName:"i"}},{type:"error",className:"notyf__toast--error",backgroundColor:"#ed3d3d",icon:{className:"notyf__icon--error",tagName:"i"}}],duration:2e3,ripple:!0,position:{x:"right",y:"bottom"},dismissible:!1},f=function(){function t(){this.notifications=[],this.X_POSITION_FLEX_MAP={left:"flex-start",center:"center",right:"flex-end"},this.Y_POSITION_FLEX_MAP={top:"flex-start",center:"center",bottom:"flex-end"};var t=document.createDocumentFragment(),e=this._createHTLMElement({tagName:"div",className:"notyf"});t.appendChild(e),document.body.appendChild(t),this.container=e,this.animationEndEventName=this._getAnimationEndEventName(),this._createA11yContainer()}return t.prototype.on=function(t,e){var n;this.events=s(s({},this.events),((n={})[t]=e,n))},t.prototype.update=function(t,e){e===o.Add?this.addNotification(t):e===o.Remove&&this.removeNotification(t)},t.prototype.removeNotification=function(t){var e,n,o=this,r=this._popRenderedNotification(t);r&&((e=r.node).classList.add("notyf__toast--disappear"),e.addEventListener(this.animationEndEventName,n=function(t){t.target===e&&(e.removeEventListener(o.animationEndEventName,n),o.container.removeChild(e))}))},t.prototype.addNotification=function(t){var e=this._renderNotification(t);this.notifications.push({notification:t,node:e}),this._announce(t.options.message||"Notification")},t.prototype._renderNotification=function(t){var e,n=this._buildNotificationCard(t),o=t.options.className;return o&&(e=n.classList).add.apply(e,o.split(" ")),this.container.appendChild(n),n},t.prototype._popRenderedNotification=function(t){for(var e=-1,n=0;n<this.notifications.length&&e<0;n++)this.notifications[n].notification===t&&(e=n);if(-1!==e)return this.notifications.splice(e,1)[0]},t.prototype.getXPosition=function(t){var e;return(null===(e=null==t?void 0:t.position)||void 0===e?void 0:e.x)||"right"},t.prototype.getYPosition=function(t){var e;return(null===(e=null==t?void 0:t.position)||void 0===e?void 0:e.y)||"bottom"},t.prototype.adjustContainerAlignment=function(t){var e=this.X_POSITION_FLEX_MAP[this.getXPosition(t)],n=this.Y_POSITION_FLEX_MAP[this.getYPosition(t)],o=this.container.style;o.setProperty("justify-content",n),o.setProperty("align-items",e)},t.prototype._buildNotificationCard=function(t){var e=this,n=t.options,o=n.icon;this.adjustContainerAlignment(n);var r=this._createHTLMElement({tagName:"div",className:"notyf__toast"}),i=this._createHTLMElement({tagName:"div",className:"notyf__ripple"}),a=this._createHTLMElement({tagName:"div",className:"notyf__wrapper"}),s=this._createHTLMElement({tagName:"div",className:"notyf__message"});s.innerHTML=n.message||"";var l=n.backgroundColor;if(o&&"object"==typeof o){var u=this._createHTLMElement({tagName:"div",className:"notyf__icon"}),d=this._createHTLMElement({tagName:o.tagName||"i",className:o.className,text:o.text});l&&(d.style.color=l),u.appendChild(d),a.appendChild(u)}if(a.appendChild(s),r.appendChild(a),l&&(n.ripple?(i.style.backgroundColor=l,r.appendChild(i)):r.style.backgroundColor=l),n.dismissible){var f=this._createHTLMElement({tagName:"div",className:"notyf__dismiss"}),p=this._createHTLMElement({tagName:"button",className:"notyf__dismiss-btn"});f.appendChild(p),a.appendChild(f),r.classList.add("notyf__toast--dismissible"),p.addEventListener("click",(function(){var n;return null===(n=e.events)||void 0===n?void 0:n[c.Dismiss](t)}))}var h="top"===this.getYPosition(n)?"upper":"lower";return r.classList.add("notyf__toast--"+h),r},t.prototype._createHTLMElement=function(t){var e=t.tagName,n=t.className,o=t.text,r=document.createElement(e);return n&&(r.className=n),r.textContent=o||null,r},t.prototype._createA11yContainer=function(){var t=this._createHTLMElement({tagName:"div",className:"notyf-announcer"});t.setAttribute("aria-atomic","true"),t.setAttribute("aria-live","polite"),t.style.border="0",t.style.clip="rect(0 0 0 0)",t.style.height="1px",t.style.margin="-1px",t.style.overflow="hidden",t.style.padding="0",t.style.position="absolute",t.style.width="1px",t.style.outline="0",document.body.appendChild(t),this.a11yContainer=t},t.prototype._announce=function(t){var e=this;this.a11yContainer.textContent="",setTimeout((function(){e.a11yContainer.textContent=t}),100)},t.prototype._getAnimationEndEventName=function(){var t,e=document.createElement("_fake"),n={MozTransition:"animationend",OTransition:"oAnimationEnd",WebkitTransition:"webkitAnimationEnd",transition:"animationend"};for(t in n)if(void 0!==e.style[t])return n[t];return"animationend"},t}(),p=function(){function t(t){var e=this;this.notifications=new u,this.view=new f;var n=this.registerTypes(t);this.options=s(s({},d),t),this.options.types=n,this.notifications.onUpdate((function(t,n){return e.view.update(t,n)})),this.view.on(c.Dismiss,(function(t){return e._removeNotification(t)}))}return t.prototype.error=function(t){var e=this.normalizeOptions("error",t);this.open(e)},t.prototype.success=function(t){var e=this.normalizeOptions("success",t);this.open(e)},t.prototype.open=function(t){var e=this.options.types.find((function(e){return e.type===t.type}))||{},n=s(s({},e),t);this.assignProps(["ripple","position","dismissible"],n);var o=new l(n);this._pushNotification(o)},t.prototype.assignProps=function(t,e){var n=this;t.forEach((function(t){e[t]=null==e[t]?n.options[t]:e[t]}))},t.prototype._pushNotification=function(t){var e=this;this.notifications.push(t);var n=t.options.duration||this.options.duration;setTimeout((function(){return e._removeNotification(t)}),n)},t.prototype._removeNotification=function(t){var e=this.notifications.indexOf(t);-1!==e&&this.notifications.splice(e,1)},t.prototype.normalizeOptions=function(t,e){var n={type:t};return"string"==typeof e?n.message=e:"object"==typeof e&&(n=s(s({},n),e)),n},t.prototype.registerTypes=function(t){var e=(t&&t.types||[]).slice();return d.types.map((function(t){var n=e.findIndex((function(e){return e.type===t.type})),o=-1!==n?e.splice(n,1)[0]:{};return s(s({},t),o)})).concat(e)},t}(),h=n(9),m=(n(7),{largeUrl:"",instance:function(){return h.create('<div class="modal-container siema">\n      <img src="'.concat(this.largeUrl,'" class="imgInModalWindow"></img>\n      </div>\n     \n      '))},get currentLargeUrl(){return this.largeUrl},set currentLargeUrl(t){this.largeUrl=t}}),v=(n(26),n(27),""),g=(new p({duration:5e3,position:{x:"center",y:"top"},types:[{type:"error",backgroundColor:"red",duration:2e3,dismissible:!0},{type:"info",backgroundColor:"#3f3e3e",icon:!1,message:"Too many matches found.Please enter a more specific query",dismissible:!0,duration:2500}]}),{inputSearchImg:document.querySelector("#search-form"),btnSearch:document.querySelector(".js-btn"),gallary:document.querySelector(".gallery"),btnLoadMore:document.querySelector(".js-btn_load_more"),btnScrollToUp:document.querySelector(".btn-up")});function y(t){var e=t.map((function(t){return a()(t)})).join("");g.gallary.insertAdjacentHTML("beforeend",e),g.btnLoadMore.classList.add("is-visible")}function _(){document.querySelector(".imgInModalWindow").removeEventListener("click",_),v.close()}g.btnSearch.addEventListener("click",(function(t){t.preventDefault(),r.page=1,g.gallary.innerHTML="",g.btnLoadMore.classList.remove("is-visible");var e=g.inputSearchImg.elements.query.value;r.searchquery=e,r.fetchArticles().then((function(t){y(t)})),g.btnScrollToUp.classList.add("is-visible"),g.inputSearchImg.elements.query.value=""})),g.btnLoadMore.addEventListener("click",(function(){var t=document.body.clientHeight-g.btnLoadMore.offsetHeight;r.fetchArticles().then((function(e){y(e),window.scrollTo({top:t,behavior:"smooth"})}))})),g.btnScrollToUp.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),g.gallary.addEventListener("click",(function(t){m.currentLargeUrl=t.target.dataset.url,v=m.instance(),"IMG"===t.target.nodeName&&v.show();document.querySelector(".imgInModalWindow").addEventListener("click",_)}))}]);
//# sourceMappingURL=bundle.js.map