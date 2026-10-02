import{n as s,t as r}from"./chunk-zystk1pz.js";import{$ as Lu,A as Gp,An as jl,At as Uu,C as Dy,Cn as hg,Ct as Tu,Dn as jF,Dt as UI,E as Fm,F as Hm,G as Kc,Hn as me$1,Ht as Xg,It as Wg,J as Kl,K as Ke$1,Kn as nw,Kt as Za$1,L as In,Ln as ku,Lt as Wt$1,M as He$1,O as GF,On as jI,Ot as Ug,P as Hi,Pn as kh,Pt as WF,Qn as qc,R as J$1,S as Dt$1,Sn as gr,Sr as zp,St as Tt$1,Tn as iw,Tt as U$2,U as Jp,Un as nT,Ut as Xp,V as Jg,Wn as nh,X as Kw,Xn as qF,Y as Kp,Yn as ow,Z as Lg,_ as Ch,_n as eh,a as $l,an as be$1,at as Nh,b as Cw,br as zc,c as BF,ct as O$1,dn as cs,dr as w,dt as Pe,et as Lw,fn as cw,fr as wu,ft as Pm,g as Cg,gn as ee,gr as yo$1,gt as Qc,hr as yD,in as aw,it as Ng,j as HI,jn as jm,l as Bg,lr as ue$1,mn as da$1,mr as xr,nr as rr,p as C,pt as Pn,q as Kg,s as An,sn as bi,sr as tT,st as Nv,tn as aD,u as Bl,ur as uw,ut as Oh,vt as Qu,wn as hr,x as Dr,xn as ge$1,xr as zg,z as JD,zn as lD,zt as Wv}from"./chunk-CzZVzA76.js";import{a as Dt$2,d as di,f as ds,g as nc,h as gc,l as Ve$1,m as fr,p as fn,u as Yn$1,v as tc}from"./main-HEV7Y6K7.js";function Dt(a){return a.buttons===0||a.detail===0}function At(a){let e=a.touches&&a.touches[0]||a.changedTouches&&a.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var Fe;function Bn(){if(Fe==null){let a=typeof document<`u`?document.head:null;Fe=!!(a&&(a.createShadowRoot||a.attachShadow))}return Fe}function Be(a){if(Bn()){let e=a.getRootNode?a.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function no(){let a=typeof document<`u`&&document?document.activeElement:null;for(;a&&a.shadowRoot;){let e=a.shadowRoot.activeElement;if(e===a)break;a=e}return a}function F(a){if(a.composedPath)try{return a.composedPath()[0]}catch(e){}return a.target}var Le;try{Le=typeof Intl<`u`&&Intl.v8BreakIterator}catch(a){Le=!1}var E=(()=>{class a{_platformId=w(Pm);isBrowser=this._platformId?ds(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Le)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var It;function Ln(){if(It==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>It=!0}))}finally{It=It||!1}return It}function ut(a){return Ln()?a:!!a.capture}function zn(a,e=0){return Vn(a)?Number(a):arguments.length===2?e:0}function Vn(a){return!isNaN(parseFloat(a))&&!isNaN(Number(a))}function K(a){return a instanceof Dr?a.nativeElement:a}var jn=new O$1(`cdk-input-modality-detector-options`);var Un={ignoreKeys:[18,17,224,91,16]};var Wn=650;var ze={passive:!0,capture:!0};var Hn=(()=>{class a{_platform=w(E);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new An(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(n=>n===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=F(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<Wn||(this._modality.next(Dt(t)?`keyboard`:`mouse`),this._mostRecentTarget=F(t))};_onTouchstart=t=>{if(At(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=F(t)};constructor(){let t=w(J$1),n=w(rr),o=w(jn,{optional:!0});if(this._options=r(r({},Un),o),this.modalityDetected=this._modality.pipe(Kg(1)),this.modalityChanged=this.modalityDetected.pipe(Wg()),this._platform.isBrowser){let i=w(gr).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(n,`keydown`,this._onKeydown,ze),i.listen(n,`mousedown`,this._onMousedown,ze),i.listen(n,`touchstart`,this._onTouchstart,ze)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var Pt=(function(a){return a[a.IMMEDIATE=0]=`IMMEDIATE`,a[a.EVENTUAL=1]=`EVENTUAL`,a})(Pt||{});var Yn=new O$1(`cdk-focus-monitor-default-options`);var ce=ut({passive:!0,capture:!0});var Ve=(()=>{class a{_ngZone=w(J$1);_platform=w(E);_inputModalityDetector=w(Hn);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=w(rr);_stopInputModalityDetector=new ee;constructor(){let t=w(Yn,{optional:!0});this._detectionMode=t?.detectionMode||Pt.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let n=F(t);for(let o=n;o;o=o.parentElement)t.type===`focus`?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,n=!1){let o=K(t);if(!this._platform.isBrowser||o.nodeType!==1)return Cg();let i=Be(o)||this._document,r=this._elementInfo.get(o);if(r)return n&&(r.checkChildren=!0),r.subject;let s={checkChildren:n,subject:new ee,rootNode:i};return this._elementInfo.set(o,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(t){let n=K(t),o=this._elementInfo.get(n);o&&(o.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(o))}focusVia(t,n,o){let i=K(t);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([s,l])=>this._originChanged(s,n,l)):(this._setOrigin(n),typeof i.focus==`function`&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===Pt.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,n){t.classList.toggle(`cdk-focused`,!!n),t.classList.toggle(`cdk-touch-focused`,n===`touch`),t.classList.toggle(`cdk-keyboard-focused`,n===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,n===`mouse`),t.classList.toggle(`cdk-program-focused`,n===`program`)}_setOrigin(t,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&n,this._detectionMode===Pt.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?Wn:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,n){let o=this._elementInfo.get(n),i=F(t);!o||!o.checkChildren&&n!==i||this._originChanged(n,this._getFocusOrigin(i),o)}_onBlur(t,n){let o=this._elementInfo.get(n);!o||o.checkChildren&&t.relatedTarget instanceof Node&&n.contains(t.relatedTarget)||(this._setClasses(n),this._emitOrigin(o,null))}_emitOrigin(t,n){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(n))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let n=t.rootNode,o=this._rootNodeFocusListenerCount.get(n)||0;o||this._ngZone.runOutsideAngular(()=>{n.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,ce),n.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,ce)}),this._rootNodeFocusListenerCount.set(n,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Xg(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let n=t.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let o=this._rootNodeFocusListenerCount.get(n);o>1?this._rootNodeFocusListenerCount.set(n,o-1):(n.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,ce),n.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,ce),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,n,o){this._setClasses(t,n),this._emitOrigin(o,n),this._lastFocusOrigin=n}_getClosestElementsInfo(t){let n=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&n.push([i,o])}),n}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:n,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!n||n===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let i=t.labels;if(i){for(let r=0;r<i.length;r++)if(i[r].contains(n))return!0}return!1}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();function pt(a){return Array.isArray(a)?a:[a]}var Xn=new Set;var rt;var le=(()=>{class a{_platform=w(E);_nonce=w(jm,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):oo}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&ao(t,this._nonce),this._matchMedia(t)}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();function ao(a,e){if(!Xn.has(a))try{rt||(rt=document.createElement(`style`),e&&rt.setAttribute(`nonce`,e),rt.setAttribute(`type`,`text/css`),document.head.appendChild(rt)),rt.sheet&&(rt.sheet.insertRule(`@media ${a.replace(/[{}]/g,``)} {body{ }}`,0),Xn.add(a))}catch(t){console.error(t)}}function oo(a){return{matches:a===`all`||a===``,media:a,addListener:()=>{},removeListener:()=>{}}}var Tt=(()=>{class a{_mediaMatcher=w(le);_zone=w(J$1);_queries=new Map;_destroySubject=new ee;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Kn(pt(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Kn(pt(t)).map(r=>this._registerQuery(r).observable),i=Lg(o);return i=yo$1(i.pipe(cs(1)),i.pipe(Kg(1),Ug(0))),i.pipe(Tt$1(r=>{let s={matches:!1,breakpoints:{}};return r.forEach(({matches:l,query:u})=>{s.matches=s.matches||l,s.breakpoints[u]=l}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let n=this._mediaMatcher.matchMedia(t),i={observable:new C(r=>{let s=l=>this._zone.run(()=>r.next(l));return n.addListener(s),()=>{n.removeListener(s)}}).pipe(Jg(n),Tt$1(({matches:r})=>({query:t,matches:r})),Xg(this._destroySubject)),mql:n};return this._queries.set(t,i),i}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();function Kn(a){return a.map(e=>e.split(`,`)).reduce((e,t)=>e.concat(t)).map(e=>e.trim())}var io=(()=>{class a{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var Zn=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=HI({type:a});static ɵinj=Kl({providers:[io]})}return a})();var ro=(()=>{class a{_platform=w(E);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return co(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let n=so(go(t));if(n&&($n(n)===-1||!this.isVisible(n)))return!1;let o=t.nodeName.toLowerCase(),i=$n(t);return t.hasAttribute(`contenteditable`)?i!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!ho(t)?!1:o===`audio`?t.hasAttribute(`controls`)?i!==-1:!1:o===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,n){return fo(t)&&!this.isDisabled(t)&&(n?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();function so(a){try{return a.frameElement}catch(e){return null}}function co(a){return!!(a.offsetWidth||a.offsetHeight||typeof a.getClientRects==`function`&&a.getClientRects().length)}function lo(a){let e=a.nodeName.toLowerCase();return e===`input`||e===`select`||e===`button`||e===`textarea`}function mo(a){return po(a)&&a.type==`hidden`}function uo(a){return bo(a)&&a.hasAttribute(`href`)}function po(a){return a.nodeName.toLowerCase()==`input`}function bo(a){return a.nodeName.toLowerCase()==`a`}function Jn(a){if(!a.hasAttribute(`tabindex`)||a.tabIndex===void 0)return!1;let e=a.getAttribute(`tabindex`);return!!(e&&!isNaN(parseInt(e,10)))}function $n(a){if(!Jn(a))return null;let e=parseInt(a.getAttribute(`tabindex`)||``,10);return isNaN(e)?-1:e}function ho(a){let e=a.nodeName.toLowerCase(),t=e===`input`&&a.type;return t===`text`||t===`password`||e===`select`||e===`textarea`}function fo(a){return mo(a)?!1:lo(a)||uo(a)||a.hasAttribute(`contenteditable`)||Jn(a)}function go(a){return a.ownerDocument&&a.ownerDocument.defaultView||window}var Ue=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_enabled=!0;constructor(e,t,n,o,i=!1,r){this._element=e,this._checker=t,this._ngZone=n,this._document=o,this._injector=r,i||this.attachAnchors()}destroy(){let e=this._startAnchor,t=this._endAnchor;e&&(e.removeEventListener(`focus`,this.startAnchorListener),e.remove()),t&&(t.removeEventListener(`focus`,this.endAnchorListener),t.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(t=>{this._executeOnStable(()=>t(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let t=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e==`start`?t.length?t[0]:this._getFirstTabbableElement(this._element):t.length?t[t.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let t=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(t){if(!this._checker.isFocusable(t)){let n=this._getFirstTabbableElement(t);return n?.focus(e),!!n}return t.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let t=this._getRegionBoundary(`start`);return t&&t.focus(e),!!t}focusLastTabbableElement(e){let t=this._getRegionBoundary(`end`);return t&&t.focus(e),!!t}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let n=0;n<t.length;n++){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(t[n]):null;if(o)return o}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let t=e.children;for(let n=t.length-1;n>=0;n--){let o=t[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(t[n]):null;if(o)return o}return null}_createAnchor(){let e=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add(`cdk-visually-hidden`),e.classList.add(`cdk-focus-trap-anchor`),e.setAttribute(`aria-hidden`,`true`),e}_toggleAnchorTabIndex(e,t){e?t.setAttribute(`tabindex`,`0`):t.removeAttribute(`tabindex`)}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){Nv(e,{injector:this._injector})}};var vo=(()=>{class a{_checker=w(ro);_ngZone=w(J$1);_document=w(rr);_injector=w(me$1);constructor(){w(di).load(tc)}create(t,n=!1){return new Ue(t,this._checker,this._ngZone,this._document,n,this._injector)}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var ta=new O$1(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var ea=new O$1(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var yo=0;var We=(()=>{class a{_ngZone=w(J$1);_defaultOptions=w(ea,{optional:!0});_liveElement;_document=w(rr);_sanitizer=w(Dt$2);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=w(ta,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...n){let o=this._defaultOptions,i,r;return n.length===1&&typeof n[0]==`number`?r=n[0]:[i,r]=n,this.clear(),clearTimeout(this._previousTimeout),i||(i=o&&o.politeness?o.politeness:`polite`),r==null&&o&&(r=o.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(s=>this._currentResolve=s)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:nc(this._liveElement,t,this._sanitizer),typeof r==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,n=this._document.getElementsByClassName(t),o=this._document.createElement(`div`);for(let i=0;i<n.length;i++)n[i].remove();return o.classList.add(t),o.classList.add(`cdk-visually-hidden`),o.setAttribute(`aria-atomic`,`true`),o.setAttribute(`aria-live`,`polite`),o.id=`cdk-live-announcer-${yo++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<n.length;o++){let i=n[o],r=i.getAttribute(`aria-owns`);r?r.indexOf(t)===-1&&i.setAttribute(`aria-owns`,r+` `+t):i.setAttribute(`aria-owns`,t)}}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var et=(function(a){return a[a.NONE=0]=`NONE`,a[a.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,a[a.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,a})(et||{});var Gn=`cdk-high-contrast-black-on-white`;var qn=`cdk-high-contrast-white-on-black`;var je=`cdk-high-contrast-active`;var na=(()=>{class a{_platform=w(E);_hasCheckedHighContrastMode=!1;_document=w(rr);_breakpointSubscription;constructor(){this._breakpointSubscription=w(Tt).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return et.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let n=this._document.defaultView||window,o=n&&n.getComputedStyle?n.getComputedStyle(t):null,i=(o&&o.backgroundColor||``).replace(/ /g,``);switch(t.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return et.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return et.BLACK_ON_WHITE}return et.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(je,Gn,qn),this._hasCheckedHighContrastMode=!0;let n=this.getHighContrastMode();n===et.BLACK_ON_WHITE?t.add(je,Gn):n===et.WHITE_ON_BLACK&&t.add(je,qn)}}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var _o=(()=>{class a{constructor(){w(na)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(n){return new(n||a)};static ɵmod=HI({type:a});static ɵinj=Kl({imports:[Zn]})}return a})();function $i(a,...e){return e.length?e.some(t=>a[t]):a.altKey||a.shiftKey||a.ctrlKey||a.metaKey}var aa=new Map;var st=class a{_appId=w(Uu);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(e,t=!1){this._appId!==`ng`&&(e+=this._appId);let n=aa.get(e);return n===void 0?n=0:n++,aa.set(e,n),`${e}${t?a._infix+`-`:``}${n}`}static ɵfac=function(t){return new(t||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})};var oa={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};function He(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}function O(a){return a==null?``:typeof a==`string`?a:`${a}px`}var ct;function ia(){if(ct==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return ct=!1,ct;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)ct=!0;else{let a=Element.prototype.scrollTo;a?ct=!/\{\s*\[native code\]\s*\}/.test(a.toString()):ct=!1}}return ct}var xo=20;var Ye=(()=>{class a{_ngZone=w(J$1);_platform=w(E);_renderer=w(gr).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new ee;_scrolledCount=0;scrollContainers=new Map;register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let n=this.scrollContainers.get(t);n&&(n.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=xo){return this._platform.isBrowser?new C(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=t>0?this._scrolled.pipe(Bg(t)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Cg()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((t,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(t,n){let o=this.getAncestorScrollContainers(t);return this.scrolled(n).pipe(Pn(i=>!i||o.indexOf(i)>-1))}getAncestorScrollContainers(t){let n=[];return this.scrollContainers.forEach((o,i)=>{this._targetContainsElement(i,t)&&n.push(i)}),n}_targetContainsElement(t,n){let o=K(n),i=t.getElementRef().nativeElement;do if(o==i)return!0;while(o=o.parentElement);return!1}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var So=20;var Ft=(()=>{class a{_platform=w(E);_listeners;_viewportSize=null;_change=new ee;_document=w(rr);constructor(){let t=w(J$1),n=w(gr).createRenderer(null,null);t.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=i=>this._change.next(i);this._listeners=[n.listen(`window`,`resize`,o),n.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(t=>t()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:n,height:o}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+o,right:t.left+n,height:o,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,n=this._getWindow(),o=t.documentElement,i=o.getBoundingClientRect();return{top:-i.top||t.body?.scrollTop||n.scrollY||o.scrollTop||0,left:-i.left||t.body?.scrollLeft||n.scrollX||o.scrollLeft||0}}change(t=So){return t>0?this._change.pipe(Bg(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var ra=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=HI({type:a});static ɵinj=Kl({})}return a})();var Xe=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=HI({type:a});static ɵinj=Kl({imports:[Yn$1,ra,Yn$1,ra]})}return a})();var Bt=class{_attachedHost=null;attach(e){return this._attachedHost=e,e.attach(this)}detach(){let e=this._attachedHost;e!=null&&(this._attachedHost=null,e.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(e){this._attachedHost=e}};var bt=class extends Bt{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(e,t,n,o,i,r){super(),this.component=e,this.viewContainerRef=t,this.injector=n,this.projectableNodes=o,this.bindings=i||null,this.directives=r||null}};var ht=class extends Bt{templateRef;viewContainerRef;context;injector;constructor(e,t,n,o){super(),this.templateRef=e,this.viewContainerRef=t,this.context=n,this.injector=o}get origin(){return this.templateRef.elementRef}attach(e,t=this.context){return this.context=t,super.attach(e)}detach(){return this.context=void 0,super.detach()}};var Ke=class extends Bt{element;constructor(e){super(),this.element=e instanceof Dr?e.nativeElement:e}};var ft=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(e){if(e instanceof bt)return this._attachedPortal=e,this.attachComponentPortal(e);if(e instanceof ht)return this._attachedPortal=e,this.attachTemplatePortal(e);if(this.attachDomPortal&&e instanceof Ke)return this._attachedPortal=e,this.attachDomPortal(e)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(e){this._disposeFn=e}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var de=class extends ft{outletElement;_appRef;_defaultInjector;constructor(e,t,n){super(),this.outletElement=e,this._appRef=t,this._defaultInjector=n}attachComponentPortal(e){let t;if(e.viewContainerRef){let n=e.injector||e.viewContainerRef.injector,o=n.get(In,null,{optional:!0})||void 0;t=e.viewContainerRef.createComponent(e.component,{index:e.viewContainerRef.length,injector:n,ngModuleRef:o,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),this.setDisposeFn(()=>t.destroy())}else{let n=this._appRef,o=e.injector||this._defaultInjector||me$1.NULL,i=o.get(ge$1,n.injector);t=qF(e.component,{elementInjector:o,environmentInjector:i,projectableNodes:e.projectableNodes||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0}),n.attachView(t.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(t.hostView),t.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(t)),this._attachedPortal=e,t}attachTemplatePortal(e){let t=e.viewContainerRef,n=t.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return n.rootNodes.forEach(o=>this.outletElement.appendChild(o)),n.detectChanges(),this.setDisposeFn(()=>{let o=t.indexOf(n);o!==-1&&t.remove(o)}),this._attachedPortal=e,n}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this.outletElement.ownerDocument.createComment(`dom-portal`);t.parentNode.insertBefore(n,t),this.outletElement.appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(e){return e.hostView.rootNodes[0]}};var Ze=(()=>{class a extends ft{_moduleRef=w(In,{optional:!0});_document=w(rr);_viewContainerRef=w(Hi);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(t){this.hasAttached()&&!t&&!this._isInitialized||(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t||null)}attached=new Pe;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(t){t.setAttachedHost(this);let n=t.viewContainerRef!=null?t.viewContainerRef:this._viewContainerRef,o=n.createComponent(t.component,{index:n.length,injector:t.injector||n.injector,projectableNodes:t.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=t,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(t){t.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=t=>{let n=t.element;n.parentNode;let o=this._document.createComment(`dom-portal`);t.setAttachedHost(this),n.parentNode.insertBefore(o,n),this._getRootNode().appendChild(n),this._attachedPortal=t,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(n,o)})};_getRootNode(){let t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}static ɵfac=(()=>{let t;return function(o){return(t||(t=Dy(a)))(o||a)}})();static ɵdir=UI({type:a,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[Gp]})}return a})();var $e=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=HI({type:a});static ɵinj=Kl({})}return a})();var sa=ia();function ba(a){return new me(a.get(Ft),a.get(rr))}var me=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(e,t){this._viewportRuler=e,this._document=t}attach(){}enable(){if(this._canBeEnabled()){let e=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=e.style.left||``,this._previousHTMLStyles.top=e.style.top||``,e.style.left=O(-this._previousScrollPosition.left),e.style.top=O(-this._previousScrollPosition.top),e.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let e=this._document.documentElement,t=this._document.body,n=e.style,o=t.style,i=n.scrollBehavior||``,r=o.scrollBehavior||``;this._isEnabled=!1,n.left=this._previousHTMLStyles.left,n.top=this._previousHTMLStyles.top,e.classList.remove(`cdk-global-scrollblock`),sa&&(n.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),sa&&(n.scrollBehavior=i,o.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let t=this._document.documentElement,n=this._viewportRuler.getViewportSize();return t.scrollHeight>n.height||t.scrollWidth>n.width}};function ha(a,e){return new ue(a.get(Ye),a.get(J$1),a.get(Ft),e)}var ue=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(e,t,n,o){this._scrollDispatcher=e,this._ngZone=t,this._viewportRuler=n,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(this._scrollSubscription)return;let e=this._scrollDispatcher.scrolled(0).pipe(Pn(t=>!t||!this._overlayRef.overlayElement.contains(t.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=e.subscribe(()=>{let t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=e.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Lt=class{enable(){}disable(){}attach(){}};function qe(a,e){return e.some(t=>{let n=a.bottom<t.top,o=a.top>t.bottom,i=a.right<t.left,r=a.left>t.right;return n||o||i||r})}function ca(a,e){return e.some(t=>{let n=a.top<t.top,o=a.bottom>t.bottom,i=a.left<t.left,r=a.right>t.right;return n||o||i||r})}function fa(a,e){return new pe$1(a.get(Ye),a.get(Ft),a.get(J$1),e)}var pe$1=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(e,t,n,o){this._scrollDispatcher=e,this._viewportRuler=t,this._ngZone=n,this._config=o}attach(e){this._overlayRef,this._overlayRef=e}enable(){if(!this._scrollSubscription){let e=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(e).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:n,height:o}=this._viewportRuler.getViewportSize();qe(t,[{width:n,height:o,bottom:o,right:n,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var ga=(()=>{class a{_injector=w(me$1);noop=()=>new Lt;close=t=>ha(this._injector,t);block=()=>ba(this._injector);reposition=t=>fa(this._injector,t);static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var gt=class{positionStrategy;scrollStrategy=new Lt;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(e){if(e){let t=Object.keys(e);for(let n of t)e[n]!==void 0&&(this[n]=e[n])}}};var be=class{connectionPair;scrollableViewProperties;constructor(e,t){this.connectionPair=e,this.scrollableViewProperties=t}};var va=(()=>{class a{_attachedOverlays=[];_document=w(rr);_isAttached=!1;ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){let n=this._attachedOverlays.indexOf(t);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(t,n,o){return o.observers.length<1?!1:t.eventPredicate?t.eventPredicate(n):!0}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var ya=(()=>{class a extends va{_ngZone=w(J$1);_renderer=w(gr).createRenderer(null,null);_cleanupKeydown;add(t){super.add(t),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=t=>{let n=this._attachedOverlays;for(let o=n.length-1;o>-1;o--){let i=n[o];if(this.canReceiveEvent(i,t,i._keydownEvents)){this._ngZone.run(()=>i._keydownEvents.next(t));break}}};static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var _a=(()=>{class a extends va{_platform=w(E);_ngZone=w(J$1);_renderer=w(gr).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(t){if(super.add(t),!this._isAttached){let n=this._document.body,o={capture:!0},i=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[i.listen(n,`pointerdown`,this._pointerDownListener,o),i.listen(n,`click`,this._clickListener,o),i.listen(n,`auxclick`,this._clickListener,o),i.listen(n,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(t=>t()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=t=>{this._pointerDownEventTarget=F(t)};_clickListener=t=>{let n=F(t),o=t.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let i=this._attachedOverlays.slice();for(let r=i.length-1;r>-1;r--){let s=i[r],l=s._outsidePointerEvents;if(!(!s.hasAttached()||!this.canReceiveEvent(s,t,l))){if(la(s.overlayElement,n)||la(s.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>l.next(t)):l.next(t)}}};static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();function la(a,e){let t=typeof ShadowRoot<`u`&&ShadowRoot,n=e;for(;n;){if(n===a)return!0;n=t&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var xa=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=jI({type:a,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return a})();var Sa=(()=>{class a{_platform=w(E);_containerElement;_document=w(rr);_styleLoader=w(di);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let t=`cdk-overlay-container`;if(this._platform.isBrowser||He()){let o=this._document.querySelectorAll(`.${t}[platform="server"], .${t}[platform="test"]`);for(let i=0;i<o.length;i++)o[i].remove()}let n=this._document.createElement(`div`);n.classList.add(t),He()?n.setAttribute(`platform`,`test`):this._platform.isBrowser||n.setAttribute(`platform`,`server`),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(xa)}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var Qe=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(e,t,n,o){this._renderer=t,this._ngZone=n,this.element=e.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=t.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let e=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),e.style.pointerEvents=`none`,e.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function Je(a){return a&&a.nodeType===1}var Ge=da$1([]);var he=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ee;_attachments=new ee;_detachments=new ee;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ee;_outsidePointerEvents=new ee;_afterNextRenderRef;constructor(e,t,n,o,i,r,s,l,u,d=!1,b,w){this._portalOutlet=e,this._host=t,this._pane=n,this._config=o,this._ngZone=i,this._keyboardDispatcher=r,this._document=s,this._location=l,this._outsideClickDispatcher=u,this._animationsDisabled=d,this._injector=b,this._renderer=w,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(e){if(this._disposed)return null;this._attachHost();let t=this._portalOutlet.attach(e);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),nT(()=>{Ge.update(n=>n.includes(this)?n:[...n,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Nv(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let n=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>n.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof t?.onDestroy==`function`&&t.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),t}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let e=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),nT(()=>{Ge.update(t=>t.filter(n=>n!==this))}),e}dispose(){if(this._disposed)return;let e=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,e&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,nT(()=>{Ge.update(t=>t.filter(n=>n!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(e){e!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=e,this.hasAttached()&&(e.attach(this),this.updatePosition()))}updateSize(e){this._config=r(r({},this._config),e),this._updateElementSize()}setDirection(e){this._config=s(r({},this._config),{direction:e}),this._updateElementDirection()}addPanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!0)}removePanelClass(e){this._pane&&this._toggleClasses(this._pane,e,!1)}getDirection(){let e=this._config.direction;return e?typeof e==`string`?e:e.value:`ltr`}updateScrollStrategy(e){e!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=e,this.hasAttached()&&(e.attach(this),e.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let e=this._pane.style;e.width=O(this._config.width),e.height=O(this._config.height),e.minWidth=O(this._config.minWidth),e.minHeight=O(this._config.minHeight),e.maxWidth=O(this._config.maxWidth),e.maxHeight=O(this._config.maxHeight)}_togglePointerEvents(e){this._pane.style.pointerEvents=e?``:`none`}_attachHost(){if(!this._host.parentElement){let e=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;Je(e)?e.after(this._host):e?.type===`parent`?e.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(e){}}_attachBackdrop(){let e=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new Qe(this._document,this._renderer,this._ngZone,t=>{this._backdropClick.next(t)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(e))}):this._backdropRef.element.classList.add(e)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(e,t,n){let o=pt(t||[]).filter(i=>!!i);o.length&&(n?e.classList.add(...o):e.classList.remove(...o))}_detachContentWhenEmpty(){let e=!1;try{this._detachContentAfterRenderRef=Nv(()=>{e=!0,this._detachContent()},{injector:this._injector})}catch(t){if(e)throw t;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let e=this._scrollStrategy;e?.disable(),e?.detach?.()}};var da=`cdk-overlay-connected-position-bounding-box`;var wo=/([A-Za-z%]+)$/;function wa(a,e){return new fe(e,a.get(Ft),a.get(rr),a.get(E),a.get(Sa))}var fe=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new ee;_resizeSubscription=U$2.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(e,t,n,o,i){this._viewportRuler=t,this._document=n,this._platform=o,this._overlayContainer=i,this.setOrigin(e)}attach(e){this._overlayRef&&this._overlayRef,this._validatePositions(),e.hostElement.classList.add(da),this._overlayRef=e,this._boundingBox=e.hostElement,this._pane=e.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let e=this._originRect,t=this._overlayRect,n=this._viewportRect,o=this._containerRect,i=[],r;for(let s of this._preferredPositions){let l=this._getOriginPoint(e,o,s),u=this._getOverlayPoint(l,t,s),d=this._getOverlayFit(u,t,n,s);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(s,l);return}if(this._canFitWithFlexibleDimensions(d,u,n)){i.push({position:s,origin:l,overlayRect:t,boundingBoxRect:this._calculateBoundingBoxRect(l,s)});continue}(!r||r.overlayFit.visibleArea<d.visibleArea)&&(r={overlayFit:d,overlayPoint:u,originPoint:l,position:s,overlayRect:t})}if(i.length){let s=null,l=-1;for(let u of i){let d=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);d>l&&(l=d,s=u)}this._isPushed=!1,this._applyPosition(s.position,s.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&lt(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(da),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let e=this._lastPosition;e?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(e,this._getOriginPoint(this._originRect,this._containerRect,e))):this.apply()}withScrollableContainers(e){return this._scrollables=e,this}withPositions(e){return this._preferredPositions=e,e.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(e){return this._viewportMargin=e,this}withFlexibleDimensions(e=!0){return this._hasFlexibleDimensions=e,this}withGrowAfterOpen(e=!0){return this._growAfterOpen=e,this}withPush(e=!0){return this._canPush=e,this}withLockedPosition(e=!0){return this._positionLocked=e,this}setOrigin(e){return this._origin=e,this}withDefaultOffsetX(e){return this._offsetX=e,this}withDefaultOffsetY(e){return this._offsetY=e,this}withTransformOriginOn(e){return this._transformOriginSelector=e,this}withPopoverLocation(e){return this._popoverLocation=e,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Dr?this._origin.nativeElement:Je(this._origin)?this._origin:null}_getOriginPoint(e,t,n){let o;if(n.originX==`center`)o=e.left+e.width/2;else{let r=this._isRtl()?e.right:e.left,s=this._isRtl()?e.left:e.right;o=n.originX==`start`?r:s}t.left<0&&(o-=t.left);let i;return n.originY==`center`?i=e.top+e.height/2:i=n.originY==`top`?e.top:e.bottom,t.top<0&&(i-=t.top),{x:o,y:i}}_getOverlayPoint(e,t,n){let o;n.overlayX==`center`?o=-t.width/2:n.overlayX===`start`?o=this._isRtl()?-t.width:0:o=this._isRtl()?0:-t.width;let i;return n.overlayY==`center`?i=-t.height/2:i=n.overlayY==`top`?0:-t.height,{x:e.x+o,y:e.y+i}}_getOverlayFit(e,t,n,o){let i=ua(t),{x:r,y:s}=e,l=this._getOffset(o,`x`),u=this._getOffset(o,`y`);l&&(r+=l),u&&(s+=u);let d=0-r,b=r+i.width-n.width,w=0-s,M=s+i.height-n.height,k=this._subtractOverflows(i.width,d,b),y=this._subtractOverflows(i.height,w,M),W=k*y;return{visibleArea:W,isCompletelyWithinViewport:i.width*i.height===W,fitsInViewportVertically:y===i.height,fitsInViewportHorizontally:k==i.width}}_canFitWithFlexibleDimensions(e,t,n){if(this._hasFlexibleDimensions){let o=n.bottom-t.y,i=n.right-t.x,r=ma(this._overlayRef.getConfig().minHeight),s=ma(this._overlayRef.getConfig().minWidth),l=e.fitsInViewportVertically||r!=null&&r<=o,u=e.fitsInViewportHorizontally||s!=null&&s<=i;return l&&u}return!1}_pushOverlayOnScreen(e,t,n){if(this._previousPushAmount&&this._positionLocked)return{x:e.x+this._previousPushAmount.x,y:e.y+this._previousPushAmount.y};let o=ua(t),i=this._viewportRect,r=Math.max(e.x+o.width-i.width,0),s=Math.max(e.y+o.height-i.height,0),l=Math.max(i.top-n.top-e.y,0),u=Math.max(i.left-n.left-e.x,0),d=0,b=0;return o.width<=i.width?d=u||-r:d=e.x<this._getViewportMarginStart()?i.left-n.left-e.x:0,o.height<=i.height?b=l||-s:b=e.y<this._getViewportMarginTop()?i.top-n.top-e.y:0,this._previousPushAmount={x:d,y:b},{x:e.x+d,y:e.y+b}}_applyPosition(e,t){if(this._setTransformOrigin(e),this._setOverlayElementStyles(t,e),this._setBoundingBoxStyles(t,e),e.panelClass&&this._addPanelClasses(e.panelClass),this._positionChanges.observers.length){let n=this._getScrollVisibility();if(e!==this._lastPosition||!this._lastScrollVisibility||!ko(this._lastScrollVisibility,n)){let o=new be(e,n);this._positionChanges.next(o)}this._lastScrollVisibility=n}this._lastPosition=e,this._isInitialRender=!1}_setTransformOrigin(e){if(!this._transformOriginSelector)return;let t=this._boundingBox.querySelectorAll(this._transformOriginSelector),n,o=e.overlayY;e.overlayX===`center`?n=`center`:this._isRtl()?n=e.overlayX===`start`?`right`:`left`:n=e.overlayX===`start`?`left`:`right`;for(let i=0;i<t.length;i++)t[i].style.transformOrigin=`${n} ${o}`}_calculateBoundingBoxRect(e,t){let n=this._viewportRect,o=this._isRtl(),i,r,s;if(t.overlayY===`top`)r=e.y,i=n.height-r+this._getViewportMarginBottom();else if(t.overlayY===`bottom`)s=n.height-e.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),i=n.height-s+this._getViewportMarginTop();else{let M=Math.min(n.bottom-e.y+n.top,e.y),k=this._lastBoundingBoxSize.height;i=M*2,r=e.y-M,i>k&&!this._isInitialRender&&!this._growAfterOpen&&(r=e.y-k/2)}let l=t.overlayX===`start`&&!o||t.overlayX===`end`&&o,u=t.overlayX===`end`&&!o||t.overlayX===`start`&&o,d,b,w;if(u)w=n.width-e.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=e.x-this._getViewportMarginStart();else if(l)b=e.x,d=n.right-e.x-this._getViewportMarginEnd();else{let M=Math.min(n.right-e.x+n.left,e.x),k=this._lastBoundingBoxSize.width;d=M*2,b=e.x-M,d>k&&!this._isInitialRender&&!this._growAfterOpen&&(b=e.x-k/2)}return{top:r,left:b,bottom:s,right:w,width:d,height:i}}_setBoundingBoxStyles(e,t){let n=this._calculateBoundingBoxRect(e,t);!this._isInitialRender&&!this._growAfterOpen&&(n.height=Math.min(n.height,this._lastBoundingBoxSize.height),n.width=Math.min(n.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let i=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;o.width=O(n.width),o.height=O(n.height),o.top=O(n.top)||`auto`,o.bottom=O(n.bottom)||`auto`,o.left=O(n.left)||`auto`,o.right=O(n.right)||`auto`,t.overlayX===`center`?o.alignItems=`center`:o.alignItems=t.overlayX===`end`?`flex-end`:`flex-start`,t.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=t.overlayY===`bottom`?`flex-end`:`flex-start`,i&&(o.maxHeight=O(i)),r&&(o.maxWidth=O(r))}this._lastBoundingBoxSize=n,lt(this._boundingBox.style,o)}_resetBoundingBoxStyles(){lt(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){lt(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(e,t){let n={},o=this._hasExactPosition(),i=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(o){let d=this._viewportRuler.getViewportScrollPosition();lt(n,this._getExactOverlayY(t,e,d)),lt(n,this._getExactOverlayX(t,e,d))}else n.position=`static`;let s=``,l=this._getOffset(t,`x`),u=this._getOffset(t,`y`);l&&(s+=`translateX(${l}px) `),u&&(s+=`translateY(${u}px)`),n.transform=s.trim(),r.maxHeight&&(o?n.maxHeight=O(r.maxHeight):i&&(n.maxHeight=``)),r.maxWidth&&(o?n.maxWidth=O(r.maxWidth):i&&(n.maxWidth=``)),lt(this._pane.style,n)}_getExactOverlayY(e,t,n){let o={top:``,bottom:``},i=this._getOverlayPoint(t,this._overlayRect,e);if(this._isPushed&&(i=this._pushOverlayOnScreen(i,this._overlayRect,n)),e.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(i.y+this._overlayRect.height)}px`;else o.top=O(i.y);return o}_getExactOverlayX(e,t,n){let o={left:``,right:``},i=this._getOverlayPoint(t,this._overlayRect,e);this._isPushed&&(i=this._pushOverlayOnScreen(i,this._overlayRect,n));let r;if(this._isRtl()?r=e.overlayX===`end`?`left`:`right`:r=e.overlayX===`end`?`right`:`left`,r===`right`)o.right=`${this._document.documentElement.clientWidth-(i.x+this._overlayRect.width)}px`;else o.left=O(i.x);return o}_getScrollVisibility(){let e=this._getOriginRect(),t=this._pane.getBoundingClientRect(),n=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ca(e,n),isOriginOutsideView:qe(e,n),isOverlayClipped:ca(t,n),isOverlayOutsideView:qe(t,n)}}_subtractOverflows(e,...t){return t.reduce((n,o)=>n-Math.max(o,0),e)}_getNarrowedViewportRect(){let e=this._document.documentElement.clientWidth,t=this._document.documentElement.clientHeight,n=this._viewportRuler.getViewportScrollPosition();return{top:n.top+this._getViewportMarginTop(),left:n.left+this._getViewportMarginStart(),right:n.left+e-this._getViewportMarginEnd(),bottom:n.top+t-this._getViewportMarginBottom(),width:e-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:t-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(e,t){return t===`x`?e.offsetX==null?this._offsetX:e.offsetX:e.offsetY==null?this._offsetY:e.offsetY}_validatePositions(){}_addPanelClasses(e){this._pane&&pt(e).forEach(t=>{t!==``&&this._appliedPanelClasses.indexOf(t)===-1&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(e=>{this._pane.classList.remove(e)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let e=this._origin;if(e instanceof Dr)return e.nativeElement.getBoundingClientRect();if(e instanceof Element)return e.getBoundingClientRect();let t=e.width||0,n=e.height||0;return{top:e.y,bottom:e.y+n,left:e.x,right:e.x+t,height:n,width:t}}_getContainerRect(){let e=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,t=this._overlayContainer.getContainerElement();e&&(t.style.display=`block`);let n=t.getBoundingClientRect();return e&&(t.style.display=``),n}};function lt(a,e){for(let t in e)Object.hasOwn(e,t)&&(a[t]=e[t]);return a}function ma(a){if(typeof a!=`number`&&a!=null){let[e,t]=a.split(wo);return!t||t===`px`?parseFloat(e):null}return a||null}function ua(a){return{top:Math.floor(a.top),right:Math.floor(a.right),bottom:Math.floor(a.bottom),left:Math.floor(a.left),width:Math.floor(a.width),height:Math.floor(a.height)}}function ko(a,e){return a===e?!0:a.isOriginClipped===e.isOriginClipped&&a.isOriginOutsideView===e.isOriginOutsideView&&a.isOverlayClipped===e.isOverlayClipped&&a.isOverlayOutsideView===e.isOverlayOutsideView}var pa=`cdk-global-overlay-wrapper`;function ve(a){return new ge}var ge=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(e){let t=e.getConfig();this._overlayRef=e,this._width&&!t.width&&e.updateSize({width:this._width}),this._height&&!t.height&&e.updateSize({height:this._height}),e.hostElement.classList.add(pa),this._isDisposed=!1}top(e=``){return this._bottomOffset=``,this._topOffset=e,this._alignItems=`flex-start`,this}left(e=``){return this._xOffset=e,this._xPosition=`left`,this}bottom(e=``){return this._topOffset=``,this._bottomOffset=e,this._alignItems=`flex-end`,this}right(e=``){return this._xOffset=e,this._xPosition=`right`,this}start(e=``){return this._xOffset=e,this._xPosition=`start`,this}end(e=``){return this._xOffset=e,this._xPosition=`end`,this}width(e=``){return this._overlayRef?this._overlayRef.updateSize({width:e}):this._width=e,this}height(e=``){return this._overlayRef?this._overlayRef.updateSize({height:e}):this._height=e,this}centerHorizontally(e=``){return this.left(e),this._xPosition=`center`,this}centerVertically(e=``){return this.top(e),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement.style,{width:o,height:i,maxWidth:r,maxHeight:s}=this._overlayRef.getConfig(),l=(o===`100%`||o===`100vw`)&&(!r||r===`100%`||r===`100vw`),u=(i===`100%`||i===`100vh`)&&(!s||s===`100%`||s===`100vh`),d=this._xPosition,b=this._xOffset,w=this._overlayRef.getConfig().direction===`rtl`,M=``,k=``,y=``;l?y=`flex-start`:d===`center`?(y=`center`,w?k=b:M=b):w?d===`left`||d===`end`?(y=`flex-end`,M=b):(d===`right`||d===`start`)&&(y=`flex-start`,k=b):d===`left`||d===`start`?(y=`flex-start`,M=b):(d===`right`||d===`end`)&&(y=`flex-end`,k=b),e.position=this._cssPosition,e.marginLeft=l?`0`:M,e.marginTop=u?`0`:this._topOffset,e.marginBottom=this._bottomOffset,e.marginRight=l?`0`:k,t.justifyContent=y,t.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let e=this._overlayRef.overlayElement.style,t=this._overlayRef.hostElement,n=t.style;t.classList.remove(pa),n.justifyContent=n.alignItems=e.marginTop=e.marginBottom=e.marginLeft=e.marginRight=e.position=``,this._overlayRef=null,this._isDisposed=!0}};var ka=(()=>{class a{_injector=w(me$1);global(){return ve()}flexibleConnectedTo(t){return wa(this._injector,t)}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var Ca=new O$1(`OVERLAY_DEFAULT_CONFIG`);function ye(a,e){a.get(di).load(xa);let t=a.get(Sa),n=a.get(rr),o=a.get(st),i=a.get(xr),r=a.get(gc),s=a.get(Za$1,null,{optional:!0})||a.get(gr).createRenderer(null,null),l=new gt(e),u=a.get(Ca,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||r.value,!n.body||!(`showPopover`in n.body)?l.usePopover=!1:l.usePopover=e?.usePopover??u;let d=n.createElement(`div`),b=n.createElement(`div`);d.id=o.getId(`cdk-overlay-`),d.classList.add(`cdk-overlay-pane`),b.appendChild(d),l.usePopover&&(b.setAttribute(`popover`,`manual`),b.classList.add(`cdk-overlay-popover`));let w=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return Je(w)?w.after(b):w?.type===`parent`?w.element.appendChild(b):t.getContainerElement().appendChild(b),new he(new de(d,i,a),b,d,l,a.get(J$1),a.get(ya),n,a.get(fn),a.get(_a),e?.disableAnimations??a.get(Fm,null,{optional:!0})===`NoopAnimations`,a.get(ge$1),s)}var Ea=(()=>{class a{scrollStrategies=w(ga);_positionBuilder=w(ka);_injector=w(me$1);create(t){return ye(this._injector,t)}position(){return this._positionBuilder}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var Na=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵmod=HI({type:a});static ɵinj=Kl({providers:[Ea],imports:[Yn$1,$e,Xe,Xe]})}return a})();var Co=new O$1(`MATERIAL_ANIMATIONS`);var Oa=null;function Eo(){return w(Co,{optional:!0})?.animationsDisabled||w(Fm,{optional:!0})===`NoopAnimations`?`di-disabled`:(Oa??=w(le).matchMedia(`(prefers-reduced-motion)`).matches,Oa?`reduced-motion`:`enabled`)}function J(){return Eo()!==`enabled`}var U$1=(function(a){return a[a.FADING_IN=0]=`FADING_IN`,a[a.VISIBLE=1]=`VISIBLE`,a[a.FADING_OUT=2]=`FADING_OUT`,a[a.HIDDEN=3]=`HIDDEN`,a})(U$1||{});var tn=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=U$1.HIDDEN;constructor(e,t,n,o=!1){this._renderer=e,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var Ma=ut({passive:!0,capture:!0});var en=class{_events=new Map;addHandler(e,t,n,o){let i=this._events.get(t);if(i){let r=i.get(n);r?r.add(o):i.set(n,new Set([o]))}else this._events.set(t,new Map([[n,new Set([o])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,Ma)})}removeHandler(e,t,n){let o=this._events.get(e);if(!o)return;let i=o.get(t);i&&(i.delete(n),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,Ma)))}_delegateEventHandler=e=>{let t=F(e);t&&this._events.get(e.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(i=>i.handleEvent(e))})}};var zt={enterDuration:225,exitDuration:150};var No=800;var Ra=ut({passive:!0,capture:!0});var Da=[`mousedown`,`touchstart`];var Aa=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Oo=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=jI({type:a,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return a})();var Vt=class a{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new en;constructor(e,t,n,o,i){this._target=e,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=K(n)),i&&i.get(di).load(Oo)}fadeInRipple(e,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=r(r({},zt),n.animation);n.centered&&(e=o.left+o.width/2,t=o.top+o.height/2);let r$1=n.radius||Mo(e,t,o),s=e-o.left,l=t-o.top,u=i.enterDuration,d=document.createElement(`div`);d.classList.add(`mat-ripple-element`),d.style.left=`${s-r$1}px`,d.style.top=`${l-r$1}px`,d.style.height=`${r$1*2}px`,d.style.width=`${r$1*2}px`,n.color!=null&&(d.style.backgroundColor=n.color),d.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(d);let b=window.getComputedStyle(d),w=b.transitionProperty,M=b.transitionDuration,k=w===`none`||M===`0s`||M===`0s, 0s`||o.width===0&&o.height===0,y=new tn(this,d,n,k);d.style.transform=`scale3d(1, 1, 1)`,y.state=U$1.FADING_IN,n.persistent||(this._mostRecentTransientRipple=y);let W=null;return!k&&(u||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ht=()=>{W&&(W.fallbackTimer=null),clearTimeout(Yt),this._finishRippleTransition(y)},yt=()=>this._destroyRipple(y),Yt=setTimeout(yt,u+100);d.addEventListener(`transitionend`,Ht),d.addEventListener(`transitioncancel`,yt),W={onTransitionEnd:Ht,onTransitionCancel:yt,fallbackTimer:Yt}}),this._activeRipples.set(y,W),(k||!u)&&this._finishRippleTransition(y),y}fadeOutRipple(e){if(e.state===U$1.FADING_OUT||e.state===U$1.HIDDEN)return;let t=e.element,n=r(r({},zt),e.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,e.state=U$1.FADING_OUT,(e._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){let t=K(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Da.forEach(n=>{a._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(e){e.type===`mousedown`?this._onMousedown(e):e.type===`touchstart`?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Aa.forEach(t=>{this._triggerElement.addEventListener(t,this,Ra)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){e.state===U$1.FADING_IN?this._startFadeOutTransition(e):e.state===U$1.FADING_OUT&&this._destroyRipple(e)}_startFadeOutTransition(e){let t=e===this._mostRecentTransientRipple,{persistent:n}=e.config;e.state=U$1.VISIBLE,!n&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){let t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=U$1.HIDDEN,t!==null&&(e.element.removeEventListener(`transitionend`,t.onTransitionEnd),e.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),e.element.remove()}_onMousedown(e){let t=Dt(e),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+No;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!At(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=e.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{let t=e.state===U$1.VISIBLE||e.config.terminateOnPointerUp&&e.state===U$1.FADING_IN;!e.config.persistent&&t&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let e=this._triggerElement;e&&(Da.forEach(t=>a._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&(Aa.forEach(t=>e.removeEventListener(t,this,Ra)),this._pointerUpEventsRegistered=!1))}};function Mo(a,e,t){let n=Math.max(Math.abs(a-t.left),Math.abs(a-t.right)),o=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(n*n+o*o)}var nn=new O$1(`mat-ripple-global-options`);var Xs=(()=>{class a{_elementRef=w(Dr);_animationsDisabled=J();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=w(J$1),n=w(E),o=w(nn,{optional:!0}),i=w(me$1);this._globalOptions=o||{},this._rippleRenderer=new Vt(this,t,this._elementRef,n,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:r(r(r({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,r(r({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,r(r({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||a)};static ɵdir=UI({type:a,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&kh(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return a})();var Ro={capture:!0};var Do=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var an=`mat-ripple-loader-uninitialized`;var on=`mat-ripple-loader-class-name`;var Ia=`mat-ripple-loader-centered`;var _e=`mat-ripple-loader-disabled`;var Pa=(()=>{class a{_document=w(rr);_animationsDisabled=J();_globalRippleOptions=w(nn,{optional:!0});_platform=w(E);_ngZone=w(J$1);_injector=w(me$1);_eventCleanups;_hosts=new Map;constructor(){let t=w(gr).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Do.map(n=>t.listen(this._document,n,this._onInteraction,Ro)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(an,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(on))&&t.setAttribute(on,n.className||``),n.centered&&t.setAttribute(Ia,``),n.disabled&&t.setAttribute(_e,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(_e,``):t.removeAttribute(_e)}_onInteraction=t=>{let n=F(t);if(n instanceof HTMLElement){let o=n.closest(`[${an}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(on)),t.append(n);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??zt.enterDuration,r=this._animationsDisabled?0:o?.animation?.exitDuration??zt.exitDuration,s={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(_e),rippleConfig:{centered:t.hasAttribute(Ia),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:r}}},l=new Vt(s,this._ngZone,n,this._platform,this._injector),u=!s.rippleDisabled;u&&l.setupTriggerEvents(t),this._hosts.set(t,{target:s,renderer:l,hasSetUpEvents:u}),t.removeAttribute(an)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var Ta=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵcmp=jI({type:a,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return a})();var Ao=new O$1(`MAT_BUTTON_CONFIG`);function Fa(a){return a==null?void 0:GF(a)}var Ba=(()=>{class a{_elementRef=w(Dr);_ngZone=w(J$1);_animationsDisabled=J();_config=w(Ao,{optional:!0});_focusMonitor=w(Ve);_cleanupClick;_renderer=w(Za$1);_rippleLoader=w(Pa);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=jF(!1,{transform:WF});constructor(){w(di).load(Ta);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||a)};static ɵdir=UI({type:a,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(Kp(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),Cw(o.color?`mat-`+o.color:``),kh(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,WF],disabled:[2,`disabled`,`disabled`,WF],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,WF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,WF],tabIndex:[2,`tabIndex`,`tabIndex`,Fa],_tabindex:[2,`tabindex`,`_tabindex`,Fa],showProgress:[1,`showProgress`]}})}return a})();var La=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var za=(()=>{class a extends Ba{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Io(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?La.get(this._appearance):null,i=La.get(t);o&&n.remove(...o),n.add(...i),this._appearance=t}static ɵfac=function(n){return new(n||a)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(i,r){i&1&&(zc(0,`div`,2),iw(1,3),Qc())}return jI({type:a,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Gp],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(r,s){r&1&&(ow(t),eh(0,`span`,0),iw(1),zc(2,`span`,1),iw(3,1),Qc(),iw(4,2),aD(5,o,2,0,`div`,2),eh(6,`span`,3)(7,`span`,4)),r&2&&(kh(`mdc-button__ripple`,!s._isFab)(`mdc-fab__ripple`,s._isFab),Wv(5),lD(s.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return a})();function Io(a){return a.hasAttribute(`mat-raised-button`)?`elevated`:a.hasAttribute(`mat-stroked-button`)?`outlined`:a.hasAttribute(`mat-flat-button`)?`filled`:a.hasAttribute(`mat-button`)?`text`:null}var Po=Math.pow(2,31)-1;var jt=class{_overlayRef;instance;containerInstance;_afterDismissed=new ee;_afterOpened=new ee;_onAction=new ee;_durationTimeoutId;_dismissedByAction=!1;constructor(e,t){this._overlayRef=t,this.containerInstance=e,e._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(e){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(e,Po))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var Va=new O$1(`MatSnackBarData`);var vt=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var To=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵdir=UI({type:a,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return a})();var Fo=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵdir=UI({type:a,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return a})();var Bo=(()=>{class a{static ɵfac=function(n){return new(n||a)};static ɵdir=UI({type:a,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return a})();var Lo=(()=>{class a{snackBarRef=w(jt);data=w(Va);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(n){return new(n||a)};static ɵcmp=(function(){function t(n,o){if(n&1){let i=yD();bi(0,`div`,1)(1,`button`,2),Ch(`click`,function(){wu(i);let s=nw();return Tu(s.action())}),Lw(2),qc()()}if(n&2){let i=nw();Wv(2),Kc(` `,i.data.action,` `)}}return jI({type:a,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(o,i){o&1&&(bi(0,`div`,0),Lw(1),qc(),aD(2,t,3,1,`div`,1)),o&2&&(Wv(),Kc(` `,i.data.message,`
`),Wv(),lD(i.hasAction?2:-1))},dependencies:[za,To,Fo,Bo],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return a})();var rn=`_mat-snack-bar-enter`;var sn=`_mat-snack-bar-exit`;var zo=(()=>{class a extends ft{_ngZone=w(J$1);_elementRef=w(Dr);_changeDetectorRef=w(BF);_platform=w(E);_animationsDisabled=J();snackBarConfig=w(vt);_document=w(rr);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=w(me$1);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ee;_onExit=new ee;_onEnter=new ee;_animationState=`void`;_live;_label;_role;_liveElementId=w(st).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}attachDomPortal=t=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),n};onAnimationEnd(t){t===sn?this._completeExit():t===rn&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?Nv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(rn)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(rn)},200)))}exit(){return this._destroyed?Cg(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?Nv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(sn)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(sn),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(r=>t.classList.add(r)):t.classList.add(n)),this._exposeToModals();let o=this._label.nativeElement,i=`mdc-snackbar__label`;o.classList.toggle(i,!o.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<n.length;o++){let i=n[o],r=i.getAttribute(`aria-owns`);this._trackedModals.add(i),r?r.indexOf(t)===-1&&i.setAttribute(`aria-owns`,r+` `+t):i.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let n=t.getAttribute(`aria-owns`);if(n){let o=n.replace(this._liveElementId,``).trim();o.length>0?t.setAttribute(`aria-owns`,o):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,n=t.querySelector(`[aria-hidden]`),o=t.querySelector(`[aria-live]`);if(n&&o){let i=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(i=document.activeElement),n.removeAttribute(`aria-hidden`),o.appendChild(n),i?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(n){return new(n||a)};static ɵcmp=(function(){let t=[`label`];function n(o,i){}return jI({type:a,selectors:[[`mat-snack-bar-container`]],viewQuery:function(i,r){if(i&1&&Nh(Ze,7)(t,7),i&2){let s;aw(s=cw())&&(r._portalOutlet=s.first),aw(s=cw())&&(r._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(i,r){i&1&&Ch(`animationend`,function(l){return r.onAnimationEnd(l.animationName)})(`animationcancel`,function(l){return r.onAnimationEnd(l.animationName)}),i&2&&kh(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[Gp],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(i,r){i&1&&(bi(0,`div`,1)(1,`div`,2,0)(3,`div`,3),zp(4,n,0,0,`ng-template`,4),qc(),Xp(5,`div`),qc()()),i&2&&(Wv(5),Kp(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[Ze],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Vo=new O$1(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new vt});var ja=(()=>{class a{_live=w(We);_injector=w(me$1);_breakpointObserver=w(Tt);_parentSnackBar=w(a,{optional:!0,skipSelf:!0});_defaultConfig=w(Vo);_animationsDisabled=J();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=Lo;snackBarContainerComponent=zo;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n=``,o){let i=r(r({},this._defaultConfig),o);return i.data={message:t,action:n},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){let o=n&&n.viewContainerRef&&n.viewContainerRef.injector,i=me$1.create({parent:o||this._injector,providers:[{provide:vt,useValue:n}]}),r=new bt(this.snackBarContainerComponent,n.viewContainerRef,i),s=t.attach(r);return s.instance.snackBarConfig=n,s.instance}_attach(t,n){let o=r(r(r({},new vt),this._defaultConfig),n),i=this._createOverlay(o),r$2=this._attachSnackBarContainer(i,o),s=new jt(r$2,i);if(t instanceof hr){let l=new ht(t,null,{$implicit:o.data,snackBarRef:s});s.instance=r$2.attachTemplatePortal(l)}else{let u=new bt(t,void 0,this._createInjector(o,s));s.instance=r$2.attachComponentPortal(u).instance}return this._breakpointObserver.observe(oa.HandsetPortrait).pipe(Xg(i.detachments())).subscribe(l=>{i.overlayElement.classList.toggle(this.handsetCssClass,l.matches)}),o.announcementMessage&&r$2._onAnnounce.subscribe(()=>{this._live.announce(o.announcementMessage,o.politeness)}),this._animateSnackBar(s,o),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let n=new gt;n.direction=t.direction;let o=ve(this._injector),i=t.direction===`rtl`,r=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!i||t.horizontalPosition===`end`&&i,s=!r&&t.horizontalPosition!==`center`;return r?o.left(`0`):s?o.right(`0`):o.centerHorizontally(),t.verticalPosition===`top`?o.top(`0`):o.bottom(`0`),n.positionStrategy=o,n.disableAnimations=this._animationsDisabled,ye(this._injector,n)}_createInjector(t,n){let o=t&&t.viewContainerRef&&t.viewContainerRef.injector;return me$1.create({parent:o||this._injector,providers:[{provide:jt,useValue:n},{provide:Va,useValue:t.data}]})}static ɵfac=function(n){return new(n||a)};static ɵprov=Wt$1({token:a,factory:a.ɵfac})}return a})();var Ua=Symbol(``);function Wa(a){return new Proxy(a,{has(e,t){return!!this.get(e,t,void 0)},get(e,t){let n=nT(e);return!Uo(n)||!(t in n)?(Qu(e[t])&&e[t][Ua]&&delete e[t],e[t]):(Qu(e[t])||(Object.defineProperty(e,t,{value:tT(()=>e()[t]),configurable:!0}),e[t][Ua]=!0),Wa(e[t]))}})}var jo=[WeakSet,WeakMap,Promise,Date,Error,RegExp,ArrayBuffer,DataView,Function];function Uo(a){if(a===null||typeof a!=`object`||Wo(a))return!1;let e=Object.getPrototypeOf(a);if(e===Object.prototype)return!0;for(;e&&e!==Object.prototype;){if(jo.includes(e.constructor))return!1;e=Object.getPrototypeOf(e)}return e===Object.prototype}function Wo(a){return typeof a?.[Symbol.iterator]==`function`}var Ho=new WeakMap;var j$1=Symbol(``);function v(a,...e){let t=nT(()=>Ha(a)),n=e.reduce((r$3,s)=>r(r({},r$3),typeof s==`function`?s(r$3):s),t),o=a[j$1],i=Reflect.ownKeys(a[j$1]);for(let r of Reflect.ownKeys(n))if(i.includes(r)){let s=r;t[s]!==n[s]&&o[s].set(n[s])}Xo(a)}function Ha(a){let e=a[j$1];return Reflect.ownKeys(a[j$1]).reduce((t,n)=>{let o=e[n]();return s(r({},t),{[n]:o})},{})}function Yo(a){return Ho.get(a[j$1])||[]}function Xo(a){let e=Yo(a);for(let t of e)Ko(a,t)}function Ko(a,e){nT(()=>{e(Ha(a))})}function Ya(...a){let e=[...a],t=typeof e[0]==`function`?{}:e.shift(),n=e;return(()=>{class i{constructor(){let s=n.reduce((y,W)=>W(y),Zo()),{stateSignals:l,props:u,methods:d,hooks:b}=s,w$1=r(r(r({},l),u),d);this[j$1]=s[j$1];for(let y of Reflect.ownKeys(w$1))this[y]=w$1[y];let{onInit:M,onDestroy:k}=b;M&&M(),k&&w(He$1).onDestroy(k)}static ɵfac=function(l){return new(l||i)};static ɵprov=ue$1({token:i,factory:i.ɵfac,providedIn:t.providedIn||null})}return i})()}function Zo(){return{[j$1]:{},stateSignals:{},props:{},methods:{},hooks:{}}}function $o(a){return e=>{let t=a(r(r(r({[j$1]:e[j$1]},e.stateSignals),e.props),e.methods));return s(r({},e),{props:r(r({},e.props),t)})}}function Xa(a){return $o(e=>{let t=a(e);return Reflect.ownKeys(t).reduce((o,i)=>{let r$4=t[i];return s(r({},o),{[i]:Qu(r$4)?r$4:tT(r$4)})},{})})}function Ka(a){return e=>{let t=a(r(r(r({[j$1]:e[j$1]},e.stateSignals),e.props),e.methods));return s(r({},e),{methods:r(r({},e.methods),t)})}}function Za(a){return e=>{let t=typeof a==`function`?a():a,n=Reflect.ownKeys(t),o=e[j$1],i={};for(let r of n)o[r]=da$1(t[r]),i[r]=Wa(o[r]);return s(r({},e),{stateSignals:r(r({},e.stateSignals),i)})}}function Ut(a,e){let t=e?.injector??w(me$1),n=new ee,o=a(n).subscribe();t.get(He$1).onDestroy(()=>o.unsubscribe());let i=(r,s)=>{if(Go(r))return n.next(r),{destroy:Ke$1};let l=qo(),u=s?.injector??l??t;if(typeof r==`function`){let b=Hm(()=>{let w=r();nT(()=>n.next(w))},{injector:u});return o.add({unsubscribe:()=>b.destroy()}),b}let d=r.subscribe(b=>n.next(b));return o.add(d),u!==t&&u.get(He$1).onDestroy(()=>d.unsubscribe()),{destroy:()=>d.unsubscribe()}};return i.destroy=o.unsubscribe.bind(o),i}function Go(a){return typeof a!=`function`&&!Ng(a)}function qo(){try{return w(me$1)}catch(a){return}}function Wt(a){return e=>e.pipe($l({next:a.next,complete:a.complete}),jl(t=>(a.error(t),Dt$1)),a.finalize?zg(a.finalize):t=>t)}var $a={production:!0,apiUrl:`https://shopbot-server-7d7f5c27c0b7.herokuapp.com`,firebaseConfig:{apiKey:`AIzaSyALKWXDUQHGAf2nwjQ1eDN-zOApIlRiM4k`,authDomain:`foodie-6d808.firebaseapp.com`,projectId:`foodie-6d808`,storageBucket:`foodie-6d808.firebasestorage.app`,messagingSenderId:`883466824651`,appId:`1:883466824651:web:373261f8a1907bfe84a44e`},vapidKey:`BGR6An1ArcSr33uyiWUSoMszE0SJC0b1FyEYzINtKAVAQ9mEar5r8Z0vkR4fSfy4Mb4qbke35IGyrBK7kNJ-ct0`,googleMapsApiKey:`AIzaSyDj2Iq9H0urXYeg-ZNuD4i19jmjZv6rk74`};var xe=class a{constructor(e){this.http=e}http;baseUrl=`${$a.apiUrl}/self-order`;resolveBySlug(e){return this.http.get(`${this.baseUrl}/stores/slug/${e}`)}resolveByQrToken(e){return this.http.get(`${this.baseUrl}/resolve/${e}`)}getMenu(e){return this.http.get(`${this.baseUrl}/stores/${e}/menu`)}submitOrder(e,t,n){return this.http.post(`${this.baseUrl}/tables/${e}/items`,{items:t,customerName:n||void 0})}getOrderStatus(e){return this.http.get(`${this.baseUrl}/tables/${e}/status`)}placeOrder(e,t){return this.http.post(`${this.baseUrl}/stores/${e}/orders`,t)}getDeliveryQuote(e,t){return this.http.post(`${this.baseUrl}/stores/${e}/delivery-quote`,t)}getOrderStatusById(e){return this.http.get(`${this.baseUrl}/orders/${e}/status`)}registerPushTokenForOrder(e,t){return this.http.post(`${this.baseUrl}/orders/${e}/push-token`,{token:t})}registerPushTokenForTable(e,t){return this.http.post(`${this.baseUrl}/tables/${e}/push-token`,{token:t})}static ɵfac=function(t){return new(t||a)(be$1(Ve$1))};static ɵprov=ue$1({token:a,factory:a.ɵfac,providedIn:`root`})};var Qo={storeInfo:null,table:null,qrToken:null,activeOrderId:null,menu:[],cart:[],isLoading:!1,loadError:null,submitting:!1,submitError:null,lastOrderResult:null,lastOrderShipping:null,customerName:null,hasPromptedForName:!1,orderStatus:null,lastSeenOrderUpdatedAt:null,expectingOwnOrderUpdate:!1};function Jo(a){let e=a.options.reduce((t,n)=>t+n.price*n.quantity,0);return a.price+e}var Ga=0;function qa(){return Ga+=1,`line-${Date.now()}-${Ga}`}var ll=Ya({providedIn:`root`},Za(Qo),Xa(({storeInfo:a,table:e,cart:t,orderStatus:n,lastSeenOrderUpdatedAt:o})=>({canOrder:tT(()=>!!e()),orderingLocked:tT(()=>!!a()?.orderingLocked),templateSlug:tT(()=>a()?.selfOrderSettings?.templateSlug||`classic`),themeSettings:tT(()=>a()?.selfOrderSettings?.settingsValues||{}),cartCount:tT(()=>t().reduce((i,r)=>i+r.quantity,0)),cartEstimatedTotal:tT(()=>t().reduce((i,r)=>i+Jo(r)*r.quantity,0)),hasUnseenOrderUpdate:tT(()=>{let i=n();return!!i?.hasActiveOrder&&!!i.updatedAt&&i.updatedAt!==o()})})),Ka((a,e=w(xe),t=w(ja))=>{function n(){t.open(`This store is currently closed and not accepting orders.`,`Close`,{duration:4e3})}function o(p){e.getMenu(p).subscribe({next:h=>v(a,{menu:h,isLoading:!1}),error:h=>v(a,{isLoading:!1,loadError:h?.error?.message||`Could not load the menu.`})})}function i(p){v(a,h=>({orderStatus:p,lastSeenOrderUpdatedAt:h.expectingOwnOrderUpdate?p.updatedAt??null:h.lastSeenOrderUpdatedAt,expectingOwnOrderUpdate:!1}))}function r$5(p){e.getOrderStatus(p).subscribe({next:h=>i(h),error:()=>{}})}function s$1(p){e.getOrderStatusById(p).subscribe({next:h=>i(h),error:()=>{}})}function l(p){i(p)}function u(){v(a,{lastSeenOrderUpdatedAt:a.orderStatus()?.updatedAt??null})}let d=Ut(hg($l(()=>v(a,{isLoading:!0,loadError:null,table:null,qrToken:null})),Bl(p=>e.resolveBySlug(p).pipe(Wt({next:h=>{v(a,{storeInfo:h}),o(h._id)},error:h=>v(a,{isLoading:!1,loadError:h?.error?.message||`This store could not be found.`})}))))),b=Ut(hg($l(p=>v(a,{isLoading:!0,loadError:null,qrToken:p})),Bl(p=>e.resolveByQrToken(p).pipe(Wt({next:({store:h,table:_})=>{v(a,{storeInfo:h,table:_}),o(h._id),r$5(p)},error:h=>v(a,{isLoading:!1,loadError:h?.error?.message||`This QR code is no longer valid.`})})))));function w$2(p,h=1){if(a.orderingLocked()){n();return}v(a,_=>{let g=_.cart.find(I=>I.productId===p._id&&I.options.length===0);return g?{cart:_.cart.map(I=>I.lineId===g.lineId?s(r({},I),{quantity:I.quantity+h}):I)}:{cart:[..._.cart,{lineId:qa(),productId:p._id,name:p.name,price:p.price,photo:p.photos?.[0],quantity:h,notes:``,options:[]}]}})}function M(p,h,_,g){if(a.orderingLocked()){n();return}v(a,I=>({cart:[...I.cart,{lineId:qa(),productId:p._id,name:p.name,price:p.price,photo:p.photos?.[0],quantity:h,notes:g,options:_}]}))}function k(p,h){if(h<=0){y(p);return}v(a,_=>({cart:_.cart.map(g=>g.lineId===p?s(r({},g),{quantity:h}):g)}))}function y(p){v(a,h=>({cart:h.cart.filter(_=>_.lineId!==p)}))}function W(p,h){v(a,_=>({cart:_.cart.map(g=>g.lineId===p?s(r({},g),{notes:h}):g)}))}function Ht(){v(a,{cart:[]})}function yt(){v(a,{lastOrderResult:null,lastOrderShipping:null})}function Yt(p){v(a,{customerName:p,hasPromptedForName:!0})}return{resolveBySlug:d,resolveByQrToken:b,addToCart:w$2,addDetailedToCart:M,updateQuantity:k,removeFromCart:y,updateNotes:W,clearCart:Ht,submitOrder:Ut(hg($l(()=>v(a,{submitting:!0,submitError:null})),Bl(()=>{let p=a.qrToken(),h=a.cart();return!p||h.length===0?(v(a,{submitting:!1}),[]):a.orderingLocked()?(n(),v(a,{submitting:!1,submitError:`This store is currently closed and not accepting orders.`}),[]):e.submitOrder(p,h.map(_=>({productId:_.productId,quantity:_.quantity,notes:_.notes||void 0,options:_.options.map(g=>({groupId:g.groupId,optionItemId:g.optionItemId,quantity:g.quantity}))})),a.customerName()||void 0).pipe(Wt({next:_=>{v(a,{submitting:!1,lastOrderResult:_,cart:[],expectingOwnOrderUpdate:!0}),p&&r$5(p)},error:_=>v(a,{submitting:!1,submitError:_?.error?.message||`Could not place your order — please try again.`})}))}))),placeOrder:Ut(hg($l(()=>v(a,{submitting:!0,submitError:null})),Bl(p=>{let h=a.storeInfo(),_=a.cart();return!h||_.length===0?(v(a,{submitting:!1}),[]):a.orderingLocked()?(n(),v(a,{submitting:!1,submitError:`This store is currently closed and not accepting orders.`}),[]):e.placeOrder(h._id,s(r({},p),{items:_.map(g=>({productId:g.productId,quantity:g.quantity,notes:g.notes||void 0,options:g.options.map(I=>({groupId:I.groupId,optionItemId:I.optionItemId,quantity:I.quantity}))}))})).pipe(Wt({next:g=>{let I=_.reduce((to,eo)=>to+eo.quantity,0);v(a,{submitting:!1,lastOrderResult:{orderReference:g.orderReference,itemCount:I,total:g.total,subTotal:g.subTotal,shippingFee:g.shippingFee,deliveryType:g.deliveryType},lastOrderShipping:p.location??null,activeOrderId:g.orderId,cart:[],expectingOwnOrderUpdate:!0}),s$1(g.orderId)},error:g=>v(a,{submitting:!1,submitError:g?.error?.message||`Could not place your order — please try again.`})}))}))),dismissOrderResult:yt,setCustomerName:Yt,loadOrderStatus:r$5,loadOrderStatusById:s$1,setOrderStatus:l,markOrderSeen:u}}));var Q=new O$1(`mat-progress-spinner-default-options`,{providedIn:`root`,factory:()=>({diameter:V})});var V=100;var X=10;var G=(()=>{class n{_elementRef=w(Dr);_noopAnimations;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;_defaultColor=`primary`;_determinateCircle;constructor(){let e=w(Q),a=Eo(),s=this._elementRef.nativeElement;this._noopAnimations=a===`di-disabled`&&!!e&&!e._forceAnimations,this.mode=s.nodeName.toLowerCase()===`mat-spinner`?`indeterminate`:`determinate`,!this._noopAnimations&&a===`reduced-motion`&&s.classList.add(`mat-progress-spinner-reduced-motion`),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}mode;get value(){return this.mode===`determinate`?this._value:0}set value(e){this._value=Math.max(0,Math.min(100,e||0))}_value=0;get diameter(){return this._diameter}set diameter(e){this._diameter=e||0}_diameter=V;get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(e){this._strokeWidth=e||0}_strokeWidth;_circleRadius(){return(this.diameter-X)/2}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode===`determinate`?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static ɵfac=function(a){return new(a||n)};static ɵcmp=(function(){let e=[`determinateSpinner`];function a(s,c){if(s&1&&(ku(),bi(0,`svg`,11),Xp(1,`circle`,12),qc()),s&2){let r=nw();Kp(`viewBox`,r._viewBox()),Wv(),Oh(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeCircumference()/2,`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Kp(`r`,r._circleRadius())}}return jI({type:n,selectors:[[`mat-progress-spinner`],[`mat-spinner`]],viewQuery:function(c,r){if(c&1&&Nh(e,5),c&2){let l;aw(l=cw())&&(r._determinateCircle=l.first)}},hostAttrs:[`role`,`progressbar`,`tabindex`,`-1`,1,`mat-mdc-progress-spinner`,`mdc-circular-progress`],hostVars:18,hostBindings:function(c,r){c&2&&(Kp(`aria-valuemin`,0)(`aria-valuemax`,100)(`aria-valuenow`,r.mode===`determinate`?r.value:null)(`mode`,r.mode),Cw(`mat-`+r.color),Oh(`width`,r.diameter,`px`)(`height`,r.diameter,`px`)(`--%NS%mat-progress-spinner-size`,r.diameter+`px`)(`--%NS%mat-progress-spinner-active-indicator-width`,r.diameter+`px`),kh(`_mat-animation-noopable`,r._noopAnimations)(`mdc-circular-progress--indeterminate`,r.mode===`indeterminate`))},inputs:{color:`color`,mode:`mode`,value:[2,`value`,`value`,GF],diameter:[2,`diameter`,`diameter`,GF],strokeWidth:[2,`strokeWidth`,`strokeWidth`,GF]},exportAs:[`matProgressSpinner`],decls:14,vars:11,consts:[[`circle`,``],[`determinateSpinner`,``],[`aria-hidden`,`true`,1,`mdc-circular-progress__determinate-container`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__determinate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`,1,`mdc-circular-progress__determinate-circle`],[`aria-hidden`,`true`,1,`mdc-circular-progress__indeterminate-container`],[1,`mdc-circular-progress__spinner-layer`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-left`],[3,`ngTemplateOutlet`],[1,`mdc-circular-progress__gap-patch`],[1,`mdc-circular-progress__circle-clipper`,`mdc-circular-progress__circle-right`],[`xmlns`,`http://www.w3.org/2000/svg`,`focusable`,`false`,1,`mdc-circular-progress__indeterminate-circle-graphic`],[`cx`,`50%`,`cy`,`50%`]],template:function(c,r){if(c&1&&(zp(0,a,2,8,`ng-template`,null,0,Kw),bi(2,`div`,2,1),ku(),bi(4,`svg`,3),Xp(5,`circle`,4),qc()(),Lu(),bi(6,`div`,5)(7,`div`,6)(8,`div`,7),nh(9,8),qc(),bi(10,`div`,9),nh(11,8),qc(),bi(12,`div`,10),nh(13,8),qc()()()),c&2){let l=uw(1);Wv(4),Kp(`viewBox`,r._viewBox()),Wv(),Oh(`stroke-dasharray`,r._strokeCircumference(),`px`)(`stroke-dashoffset`,r._strokeDashOffset(),`px`)(`stroke-width`,r._circleStrokeWidth(),`%`),Kp(`r`,r._circleRadius()),Wv(4),Jp(`ngTemplateOutlet`,l),Wv(2),Jp(`ngTemplateOutlet`,l),Wv(2),Jp(`ngTemplateOutlet`,l)}},dependencies:[fr],styles:[`.mat-mdc-progress-spinner {
  --%NS%mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--%NS%mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --%NS%mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--%NS%mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--%NS%mat-progress-spinner-active-indicator-color, var(--%NS%mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--%NS%mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2})})()}return n})();var $=(()=>{class n{static ɵfac=function(a){return new(a||n)};static ɵmod=HI({type:n});static ɵinj=Kl({imports:[Yn$1]})}return n})();var j=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=jI({type:n,selectors:[[`app-storefront-loading`]],decls:4,vars:0,consts:()=>{let t;return t=$localize`:@@storefront.loading:Loading menu…`,[t,[1,`flex`,`h-screen`,`w-full`,`flex-col`,`items-center`,`justify-center`,`gap-4`],[`diameter`,`36`],[1,`text-sm`,2,`color`,`var(--sf-muted, #6b7280)`]]},template:function(e,a){e&1&&(bi(0,`div`,1),Xp(1,`mat-spinner`,2),bi(2,`p`,3),JD(3,0),qc()())},dependencies:[$,G],encapsulation:2})};var U=[`--sf-accent`,`--sf-text`,`--sf-font-family`];function pe(){let n=w(ll);Hm(()=>{let t=n.themeSettings(),e=document.documentElement.style;t.accentColor?e.setProperty(`--sf-accent`,t.accentColor):e.removeProperty(`--sf-accent`),t.primaryColor?e.setProperty(`--sf-text`,t.primaryColor):e.removeProperty(`--sf-text`),t.fontFamily?e.setProperty(`--sf-font-family`,t.fontFamily):e.removeProperty(`--sf-font-family`)}),w(He$1).onDestroy(()=>{let t=document.documentElement.style;for(let e of U)t.removeProperty(e)})}export{st as A,he as C,no as D,ll as E,zn as F,vo as M,xe as N,oa as O,ye as P,gt as S,ja as T,Ze as _,$a as a,bt as b,E as c,Na as d,Sa as f,Xs as g,Ve as h,pe as i,ve as j,ro as k,J as l,Tt as m,G as n,$e as o,Ta as p,j as r,$i as s,$ as t,Jo as u,_o as v,ht as w,ft as x,ba as y};