var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,o=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),c=Object.prototype.toString,s=Math.max,d=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var i,r,o,a,f,u,l=0,c=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(j,t),c?y(e):a}function E(e){var n=e-u;return void 0===u||n>=t||n<0||m&&e-l>=o}function j(){var e=v();if(E(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return m?d(n,o-(e-l)):n}(e))}function O(e){return f=void 0,b&&i?y(e):(i=r=void 0,a)}function S(){var e=v(),n=E(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(m)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=g(t)||0,p(n)&&(c=!!n.leading,o=(m="maxWait"in n)?s(g(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},S.flush=function(){return void 0===f?a:O(v())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||o.test(e)?a(e.slice(2),f?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),y=b.firstElementChild.firstElementChild,h=b.children[1].firstElementChild;let E={Email:"",Messeage:""};b.addEventListener("input",t((()=>{E.Email=y.value,E.Messeage=h.value,localStorage.setItem("feedback-form-state",JSON.stringify(E))}),500));let j=JSON.parse(localStorage.getItem("feedback-form-state"));null!=j&&(y.value=j.Email,h.value=j.Messeage),b.addEventListener("submit",(e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.clear(),b.reset()}));
//# sourceMappingURL=03-feedback.1d61c9fa.js.map