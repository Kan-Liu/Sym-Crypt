(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t){var r={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,n,a,o,c,l,i,h="",d=0;for(e=r._utf8_encode(e);d<e.length;)o=(t=e.charCodeAt(d++))>>2,c=(3&t)<<4|(n=e.charCodeAt(d++))>>4,l=(15&n)<<2|(a=e.charCodeAt(d++))>>6,i=63&a,isNaN(n)?l=i=64:isNaN(a)&&(i=64),h=h+r._keyStr.charAt(o)+r._keyStr.charAt(c)+r._keyStr.charAt(l)+r._keyStr.charAt(i);return h},decode:function(e){var t,n,a,o,c,l,i="",h=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");h<e.length;)t=r._keyStr.indexOf(e.charAt(h++))<<2|(o=r._keyStr.indexOf(e.charAt(h++)))>>4,n=(15&o)<<4|(c=r._keyStr.indexOf(e.charAt(h++)))>>2,a=(3&c)<<6|(l=r._keyStr.indexOf(e.charAt(h++))),i+=String.fromCharCode(t),64!=c&&(i+=String.fromCharCode(n)),64!=l&&(i+=String.fromCharCode(a));return i=r._utf8_decode(i)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var n=e.charCodeAt(r);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},_utf8_decode:function(e){for(var t="",r=0,n=0,a=0,o=0;r<e.length;)(n=e.charCodeAt(r))<128?(t+=String.fromCharCode(n),r++):n>191&&n<224?(a=e.charCodeAt(r+1),t+=String.fromCharCode((31&n)<<6|63&a),r+=2):(a=e.charCodeAt(r+1),o=e.charCodeAt(r+2),t+=String.fromCharCode((15&n)<<12|(63&a)<<6|63&o),r+=3);return t}};function n(e){var t,r=0;if(0===e.length)return r;for(t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return Math.abs(r)}function a(e,t){var r,n=e;return t=Number(String(Number(t)))===t?Number(t)%128:13,r=n.split("").map(function(e){return e.charCodeAt(0)}).map(function(e){return e^t}),n=String.fromCharCode.apply(void 0,r)}t.symEncrypt=function(e,t){return r.encode(a(unescape(encodeURIComponent(e)),n(t)))},t.symDecrypt=function(e,t){return a((o=r.decode(e),decodeURIComponent(escape(o))),n(t));var o}},18:function(e,t,r){},31:function(e,t,r){e.exports=r(67)},37:function(e,t,r){},67:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(10),c=r.n(o),l=(r(37),r(26)),i=r(27),h=r(29),d=r(28),y=r(7),s=r(30),p=(r(18),r(16)),u=r.n(p),m=r(5),C=r.n(m),f=r(15),E=r.n(f),g=r(14),S=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={toEncrypt:"",myEnKey:"",toDecrypt:"",myDeKey:"",showAlert:!1,strToShow:"",strHeading:"",alertType:"success"},r.handleSubmit=r.handleSubmit.bind(Object(y.a)(r)),r.handleEncrypt=r.handleEncrypt.bind(Object(y.a)(r)),r.handleDecrypt=r.handleDecrypt.bind(Object(y.a)(r)),r.handleClickDecrypt=r.handleClickDecrypt.bind(Object(y.a)(r)),r.handleEncryptKey=r.handleEncryptKey.bind(Object(y.a)(r)),r.handleDecryptKey=r.handleDecryptKey.bind(Object(y.a)(r)),r.handleClickEncrypt=r.handleClickEncrypt.bind(Object(y.a)(r)),r.handleCloseAlert=r.handleCloseAlert.bind(Object(y.a)(r)),r}return Object(s.a)(t,e),Object(i.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleEncrypt",value:function(e){this.setState({toEncrypt:e.target.value})}},{key:"handleDecrypt",value:function(e){this.setState({toDecrypt:e.target.value})}},{key:"handleEncryptKey",value:function(e){this.setState({myEnKey:e.target.value})}},{key:"handleDecryptKey",value:function(e){this.setState({myDeKey:e.target.value})}},{key:"handleClickEncrypt",value:function(e){var t=g.symEncrypt(this.state.toEncrypt,this.state.myEnKey);this.setState({showAlert:!0,strHeading:"Your encrypted string",strToShow:t,alertType:"success"})}},{key:"handleClickDecrypt",value:function(e){try{var t=g.symDecrypt(this.state.toDecrypt,this.state.myDeKey);this.setState({showAlert:!0,strHeading:"Your decrypted string",strToShow:t,alertType:"success"})}catch(r){this.setState({showAlert:!0,strHeading:"Error",strToShow:"Please enter a valid Sym-Encrypted string to decrypt!",alertType:"danger"})}}},{key:"handleCloseAlert",value:function(){this.setState({showAlert:!1})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App-header"},a.a.createElement(E.a,{className:"Main-Alert",show:this.state.showAlert,variant:this.state.alertType,onClose:this.handleCloseAlert,dismissible:!0},a.a.createElement(E.a.Heading,{className:"Alert-Heading"},this.state.strHeading),a.a.createElement("p",null,this.state.strToShow)),"Sym-Crypt",a.a.createElement("br",null),a.a.createElement("header",{className:"App-header3"},a.a.createElement(C.a,{name:"Sym-Crypt Form",onSubmit:this.handleSubmit},a.a.createElement(C.a.Group,{controlId:"formToEncrypt"},a.a.createElement(C.a.Label,null,"String to be encrypted"),a.a.createElement(C.a.Control,{onChange:this.handleEncrypt,placeholder:"Enter your string to encrypt",style:{width:"410px",height:"30px"},type:"text"})),a.a.createElement(C.a.Group,{controlId:"formEncryptKey"},a.a.createElement(C.a.Label,null,"Encryption Key"),a.a.createElement(C.a.Control,{onChange:this.handleEncryptKey,placeholder:"Enter your encryption key",style:{width:"410px",height:"30px"},type:"text"})),a.a.createElement(u.a,{onClick:this.handleClickEncrypt,style:{width:"410px"}},"Encrypt"),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement(C.a.Group,{controlId:"formToDecrypt"},a.a.createElement(C.a.Label,null,"String to be decrypted"),a.a.createElement(C.a.Control,{onChange:this.handleDecrypt,placeholder:"Enter your string to decrypt",style:{width:"410px",height:"30px"},type:"text"})),a.a.createElement(C.a.Group,{controlId:"formDecryptKey"},a.a.createElement(C.a.Label,null,"Decryption Key"),a.a.createElement(C.a.Control,{onChange:this.handleDecryptKey,placeholder:"Enter your decryption key",style:{width:"410px",height:"30px"},type:"text"})),a.a.createElement(u.a,{onClick:this.handleClickDecrypt,style:{width:"410px"},variant:"info"},"Decrypt"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(63),r(64);c.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.6d189217.chunk.js.map