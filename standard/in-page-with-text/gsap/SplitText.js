var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(e){"use strict";var t=e.GreenSockGlobals||e,i=function(e){var s,i=e.split("."),n=t;for(s=0;s<i.length;s++)n[i[s]]=n=n[i[s]]||{};return n},n=i("com.greensock.utils"),s=function(e){var t=e.nodeType,i="";if(1===t||9===t||11===t){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=s(e)}else if(3===t||4===t)return e.nodeValue;return i},l=document,r=l.defaultView?l.defaultView.getComputedStyle:function(){},o=/([A-Z])/g,d=function(e,t,i,n){var s;return(i=i||r(e,null))?(e=i.getPropertyValue(t.replace(o,"-$1").toLowerCase()),s=e||i.length?e:i[t]):e.currentStyle&&(i=e.currentStyle,s=i[t]),n?s:parseInt(s,10)||0},a=function(e){return e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0])?!0:!1},f=function(e){var n,s,l,t=[],i=e.length;for(n=0;i>n;n++)if(s=e[n],a(s))for(l=s.length,l=0;l<s.length;l++)t.push(s[l]);else t.push(s);return t},p=/(?:\r|\n|\t\t)/g,h=/(?:\s\s+)/g,u=55296,c=56319,g=56320,y=127462,x=127487,b=127995,S=127999,v=function(e){return(e.charCodeAt(0)-u<<10)+(e.charCodeAt(1)-g)+65536},_=l.all&&!l.addEventListener,m=" style='position:relative;display:inline-block;"+(_?"*display:inline;*zoom:1;'":"'"),C=function(e,t){e=e||"";var i=-1!==e.indexOf("++"),n=1;return i&&(e=e.split("++").join("")),function(){return"<"+t+m+(e?" class='"+e+(i?n++:"")+"'>":">")}},w=n.SplitText=t.SplitText=function(e,t){if("string"==typeof e&&(e=w.selector(e)),!e)throw"cannot split a null element.";this.elements=a(e)?f(e):[e],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=t||{},this.split(t)},T=function(e,t,i){var n=e.nodeType;if(1===n||9===n||11===n)for(e=e.firstChild;e;e=e.nextSibling)T(e,t,i);else(3===n||4===n)&&(e.nodeValue=e.nodeValue.split(t).join(i))},N=function(e,t){for(var i=t.length;--i>-1;)e.push(t[i])},A=function(e){var n,t=[],i=e.length;for(n=0;n!==i;t.push(e[n++]));return t},L=function(e,t,i){for(var n;e&&e!==t;){if(n=e._next||e.nextSibling)return n.textContent.charAt(0)===i;e=e.parentNode||e._parent}return!1},B=function(e){var n,s,t=A(e.childNodes),i=t.length;for(n=0;i>n;n++)s=t[n],s._isSplit?B(s):(n&&3===s.previousSibling.nodeType?s.previousSibling.nodeValue+=3===s.nodeType?s.nodeValue:s.firstChild.nodeValue:3!==s.nodeType&&e.insertBefore(s.firstChild,s),e.removeChild(s))},V=function(e,t,i,n,s,o,a){var R,j,M,G,$,q,z,D,F,I,P,Q,f=r(e),p=d(e,"paddingLeft",f),h=-999,u=d(e,"borderBottomWidth",f)+d(e,"borderTopWidth",f),c=d(e,"borderLeftWidth",f)+d(e,"borderRightWidth",f),g=d(e,"paddingTop",f)+d(e,"paddingBottom",f),y=d(e,"paddingLeft",f)+d(e,"paddingRight",f),x=.2*d(e,"fontSize"),b=d(e,"textAlign",f,!0),S=[],v=[],_=[],m=t.wordDelimiter||" ",C=t.span?"span":"div",w=t.type||t.split||"chars,words,lines",A=s&&-1!==w.indexOf("lines")?[]:null,V=-1!==w.indexOf("words"),W=-1!==w.indexOf("chars"),H="absolute"===t.position||t.absolute===!0,E=t.linesClass,O=-1!==(E||"").indexOf("++"),k=[];for(A&&1===e.children.length&&e.children[0]._isSplit&&(e=e.children[0]),O&&(E=E.split("++").join("")),j=e.getElementsByTagName("*"),M=j.length,$=[],R=0;M>R;R++)$[R]=j[R];if(A||H)for(R=0;M>R;R++)G=$[R],q=G.parentNode===e,(q||H||W&&!V)&&(Q=G.offsetTop,A&&q&&Math.abs(Q-h)>x&&"BR"!==G.nodeName&&(z=[],A.push(z),h=Q),H&&(G._x=G.offsetLeft,G._y=Q,G._w=G.offsetWidth,G._h=G.offsetHeight),A&&((G._isSplit&&q||!W&&q||V&&q||!V&&G.parentNode.parentNode===e&&!G.parentNode._isSplit)&&(z.push(G),G._x-=p,L(G,e,m)&&(G._wordEnd=!0)),"BR"===G.nodeName&&G.nextSibling&&"BR"===G.nextSibling.nodeName&&A.push([])));for(R=0;M>R;R++)G=$[R],q=G.parentNode===e,"BR"!==G.nodeName?(H&&(F=G.style,V||q||(G._x+=G.parentNode._x,G._y+=G.parentNode._y),F.left=G._x+"px",F.top=G._y+"px",F.position="absolute",F.display="block",F.width=G._w+1+"px",F.height=G._h+"px"),!V&&W?G._isSplit?(G._next=G.nextSibling,G.parentNode.appendChild(G)):G.parentNode._isSplit?(G._parent=G.parentNode,!G.previousSibling&&G.firstChild&&(G.firstChild._isFirst=!0),G.nextSibling&&" "===G.nextSibling.textContent&&!G.nextSibling.nextSibling&&k.push(G.nextSibling),G._next=G.nextSibling&&G.nextSibling._isFirst?null:G.nextSibling,G.parentNode.removeChild(G),$.splice(R--,1),M--):q||(Q=!G.nextSibling&&L(G.parentNode,e,m),G.parentNode._parent&&G.parentNode._parent.appendChild(G),Q&&G.parentNode.appendChild(l.createTextNode(" ")),t.span&&(G.style.display="inline"),S.push(G)):G.parentNode._isSplit&&!G._isSplit&&""!==G.innerHTML?v.push(G):W&&!G._isSplit&&(t.span&&(G.style.display="inline"),S.push(G))):A||H?(G.parentNode&&G.parentNode.removeChild(G),$.splice(R--,1),M--):V||e.appendChild(G);for(R=k.length;--R>-1;)k[R].parentNode.removeChild(k[R]);if(A){for(H&&(I=l.createElement(C),e.appendChild(I),P=I.offsetWidth+"px",Q=I.offsetParent===e?0:e.offsetLeft,e.removeChild(I)),F=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(D=" "===m&&(!H||!V&&!W),R=0;R<A.length;R++){for(z=A[R],I=l.createElement(C),I.style.cssText="display:block;text-align:"+b+";position:"+(H?"absolute;":"relative;"),E&&(I.className=E+(O?R+1:"")),_.push(I),M=z.length,j=0;M>j;j++)"BR"!==z[j].nodeName&&(G=z[j],I.appendChild(G),D&&G._wordEnd&&I.appendChild(l.createTextNode(" ")),H&&(0===j&&(I.style.top=G._y+"px",I.style.left=p+Q+"px"),G.style.top="0px",Q&&(G.style.left=G._x-Q+"px")));0===M?I.innerHTML="&nbsp;":V||W||(B(I),T(I,String.fromCharCode(160)," ")),H&&(I.style.width=P,I.style.height=G._h+"px"),e.appendChild(I)}e.style.cssText=F}H&&(a>e.clientHeight&&(e.style.height=a-g+"px",e.clientHeight<a&&(e.style.height=a+u+"px")),o>e.clientWidth&&(e.style.width=o-y+"px",e.clientWidth<o&&(e.style.width=o+c+"px"))),N(i,S),N(n,v),N(s,_)},W=function(e,t,i,n){var w,N,A,L,B,V,W,H,E,r=t.span?"span":"div",o=t.type||t.split||"chars,words,lines",a=(-1!==o.indexOf("words"),-1!==o.indexOf("chars")),f="absolute"===t.position||t.absolute===!0,g=t.wordDelimiter||" ",_=" "!==g?"":f?"&#173; ":" ",m=t.span?"</span>":"</div>",C=!0,O=l.createElement("div"),k=e.parentNode;for(k.insertBefore(O,e),O.textContent=e.nodeValue,k.removeChild(e),e=O,w=s(e),W=-1!==w.indexOf("<"),t.reduceWhiteSpace!==!1&&(w=w.replace(h," ").replace(p,"")),W&&(w=w.split("<").join("{{LT}}")),B=w.length,N=(" "===w.charAt(0)?_:"")+i(),A=0;B>A;A++)if(V=w.charAt(A),V===g&&w.charAt(A-1)!==g&&A){for(N+=C?m:"",C=!1;w.charAt(A+1)===g;)N+=_,A++;A===B-1?N+=_:")"!==w.charAt(A+1)&&(N+=_+i(),C=!0)}else"{"===V&&"{{LT}}"===w.substr(A,6)?(N+=a?n()+"{{LT}}</"+r+">":"{{LT}}",A+=5):V.charCodeAt(0)>=u&&V.charCodeAt(0)<=c||w.charCodeAt(A+1)>=65024&&w.charCodeAt(A+1)<=65039?(H=v(w.substr(A,2)),E=v(w.substr(A+2,2)),L=H>=y&&x>=H&&E>=y&&x>=E||E>=b&&S>=E?4:2,N+=a&&" "!==V?n()+w.substr(A,L)+"</"+r+">":w.substr(A,L),A+=L-1):N+=a&&" "!==V?n()+V+"</"+r+">":V;e.outerHTML=N+(C?m:""),W&&T(k,"{{LT}}","<")},H=function(e,t,i,n){var o,a,s=A(e.childNodes),l=s.length,r="absolute"===t.position||t.absolute===!0;if(3!==e.nodeType||l>1){for(t.absolute=!1,o=0;l>o;o++)a=s[o],(3!==a.nodeType||/\S+/.test(a.nodeValue))&&(r&&3!==a.nodeType&&"inline"===d(a,"display",null,!0)&&(a.style.display="inline-block",a.style.position="relative"),a._isSplit=!0,H(a,t,i,n));return t.absolute=r,void(e._isSplit=!0)}W(e,t,i,n)},E=w.prototype;E.split=function(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var r,o,d,t=this.elements.length,i=e.span?"span":"div",s=("absolute"===e.position||e.absolute===!0,C(e.wordsClass,i)),l=C(e.charsClass,i);--t>-1;)d=this.elements[t],this._originals[t]=d.innerHTML,r=d.clientHeight,o=d.clientWidth,H(d,e,s,l),V(d,e,this.chars,this.words,this.lines,o,r);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},E.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var e=this._originals.length;--e>-1;)this.elements[e].innerHTML=this._originals[e];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},w.selector=e.$||e.jQuery||function(t){var i=e.$||e.jQuery;return i?(w.selector=i,i(t)):"undefined"==typeof document?t:document.querySelectorAll?document.querySelectorAll(t):document.getElementById("#"===t.charAt(0)?t.substr(1):t)},w.version="0.5.6"}(_gsScope),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"function"==typeof define&&define.amd?define([],t):"undefined"!=typeof module&&module.exports&&(module.exports=t())}("SplitText");