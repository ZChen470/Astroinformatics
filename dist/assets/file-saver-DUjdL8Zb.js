var c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var E={exports:{}};(function(r,j){(function(w,l){l()})(c,function(){function w(e,t){return typeof t>"u"?t={autoBom:!1}:typeof t!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\uFEFF",e],{type:e.type}):e}function l(e,t,i){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){d(n.response,t,i)},n.onerror=function(){console.error("could not download file")},n.send()}function v(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch{}return 200<=t.status&&299>=t.status}function u(e){try{e.dispatchEvent(new MouseEvent("click"))}catch{var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof c=="object"&&c.global===c?c:void 0,m=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!m?function(e,t,i){var n=a.URL||a.webkitURL,o=document.createElement("a");t=t||e.name||"download",o.download=t,o.rel="noopener",typeof e=="string"?(o.href=e,o.origin===location.origin?u(o):v(o.href)?l(e,t,i):u(o,o.target="_blank")):(o.href=n.createObjectURL(e),setTimeout(function(){n.revokeObjectURL(o.href)},4e4),setTimeout(function(){u(o)},0))}:"msSaveOrOpenBlob"in navigator?function(e,t,i){if(t=t||e.name||"download",typeof e!="string")navigator.msSaveOrOpenBlob(w(e,i),t);else if(v(e))l(e,t,i);else{var n=document.createElement("a");n.href=e,n.target="_blank",setTimeout(function(){u(n)})}}:function(e,t,i,n){if(n=n||open("","_blank"),n&&(n.document.title=n.document.body.innerText="downloading..."),typeof e=="string")return l(e,t,i);var o=e.type==="application/octet-stream",b=/constructor/i.test(a.HTMLElement)||a.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||o&&b||m)&&typeof FileReader<"u"){var f=new FileReader;f.onloadend=function(){var s=f.result;s=y?s:s.replace(/^data:[^;]*;/,"data:attachment/file;"),n?n.location.href=s:location=s,n=null},f.readAsDataURL(e)}else{var h=a.URL||a.webkitURL,p=h.createObjectURL(e);n?n.location=p:location.href=p,n=null,setTimeout(function(){h.revokeObjectURL(p)},4e4)}});a.saveAs=d.saveAs=d,r.exports=d})})(E);export{L as g};
